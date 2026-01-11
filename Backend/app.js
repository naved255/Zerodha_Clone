import express, { urlencoded } from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import { holdingModel } from './models/holdingModel.js';
import { positionModel } from './models/positionModel.js';
import { orderModel } from './models/orderModel.js'
import userSingupModel from './models/userSingupModel.js';
import createSecretToken from './secretToken.js';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'
import checkAuth from './middleWares.js'
import fundModel from './models/fundModel.js';

dotenv.config()
let port = process.env.PORT || 3000;
const connString = process.env.MONGO_URL;
let app = express();

const conn = mongoose.connect(connString).then(() => { console.log("db connected") });

app.use(cors({
  origin: ["http://localhost:5174", "http://localhost:5173", "https://dashboard-pi-khaki-74.vercel.app", "https://zerodha-clone-six-sooty.vercel.app", "https://zerodha-clone-git-main-naveds-projects-8f831a9a.vercel.app", "https://zerodha-clone-9ro3n3jt4-naveds-projects-8f831a9a.vercel.app"],
  credentials: true
}));

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const isProd = process.env.NODE_ENV === "production";

app.get('/allHoldings', checkAuth, async (req, res) => {
  try {
    let data = await holdingModel.find({ userId: req.user?._id });
    res.json(data);
  } catch (error) {
    console.error(err);
    res.json({ error: error })
  }
})

app.get('/allPositions', checkAuth, async (req, res) => {
  try {
    let data = await positionModel.find({ userId: req.user?._id });
    res.json(data);
  } catch (error) {
    console.error(err);
    res.json({ error: error })
  }
})


app.post("/logout", checkAuth, (req, res) => {

  res.clearCookie("token", {
    httpOnly: true,
    secure: isProd,                // true on Render
    sameSite: isProd ? "none" : "lax",
    maxAge: 24 * 60 * 60 * 1000
  })

  res.status(200).json({ status: true })
})

app.get("/orders", checkAuth, async (req, res) => {
  try {
    let order = await orderModel.find({ userId: req.user?._id });
    console.log("order recived ", order);
    res.status(200).json({ status: true, message: "order send", order: order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Something went wrong" });
  }
})

app.post("/newPost", checkAuth, async (req, res) => {
  try {

    const { name, product, qty, price, mode, margin } = req.body;
    let fund = await fundModel.findOne({ userId: req.user?._id });


    if (product === "CNC") {
      let holding = await holdingModel.findOne({
        userId: req.user._id,
        name
      });

      if (fund.openingBalance < price * qty) {
        return res.json({ lowBalance: true });
      }

      if (mode === "BUY") {
        if (holding) {
          const totalCost = holding.avg * holding.qty + price * qty;
          holding.qty += qty;
          holding.avg = totalCost / holding.qty;
        } else {
          holding = new holdingModel({
            userId: req.user._id,
            name,
            qty,
            avg: price
          });
        }
        fund.openingBalance -= price * qty;
        fund.availableMargin -= price * qty;
        await fund.save();
        await holding.save();
      }

    }

    else {
      let position = await positionModel.findOne({
        userId: req.user._id,
        name,
        product,
        status: "OPEN"
      });

      const requiredMargin = price * qty * 0.2;

      if (fund.availableMargin < requiredMargin) {
        return res.json({ lowMargin: true });
      }

      if (mode === "BUY") {
        if (position) {
          const totalCost =
            position.buyPrice * position.qty + price * qty;
          position.qty += qty;
          position.buyPrice = totalCost / position.qty;
        } else {
          position = new positionModel({
            userId: req.user._id,
            name,
            product,
            qty,
            buyPrice: price
          });
        }
        fund.availableMargin -= requiredMargin;
        fund.usedMargin += requiredMargin;

        await fund.save();

        await position.save();
      }

    }


    const order = await orderModel.create({
      userId: req.user._id,
      product,
      name,
      qty,
      price,
      mode
    });


    res.json({
      success: true,
      availableMargin: fund.availableMargin,
      usedMargin: fund.usedMargin,
      availableBalance: fund.availableBalance
    });


  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/dashboard', checkAuth, async (req, res) => {
  try {
    let fund = await fundModel.findOne({ userId: req.user?._id });
    res.status(201).json({ success: true, fund: fund });
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false });
  }
})

app.post("/sell", checkAuth, async (req, res) => {

  try {

    const { name, qty, price, product } = req.body;

    let fund = await fundModel.findOne({ userId: req.user._id });

    if (product === "CNC") {

      let holding = await holdingModel.findOne({
        userId: req.user._id,
        name
      });


      let sellValue = price * qty;

      fund.openingBalance += sellValue;

      holding.qty -= qty;

      await fund.save();

      if (holding.qty <= 0) {
        await holding.deleteOne();
      } else {
        await holding.save();
      }

    }

    if (product === 'MIS') {

      let position = await positionModel.findOne({
        userId: req.user._id,
        name,
        product,
        status: "OPEN"
      });

      if (!position) {
        return res.status(400).json({ error: "No open position to sell" });
      }


      let profit = (price - position.buyPrice) * qty;
      let usedMargin = position.buyPrice * qty * 0.2;
      fund.availableMargin += usedMargin + profit;
      fund.usedMargin -= usedMargin;
      position.qty -= qty;

      if (position.qty <= 0) {
        position.status = "CLOSED";
        position.sellPrice = price;
      }
      await position.save();
      await fund.save();

    }

    const order = await orderModel.create({
      userId: req.user._id,
      product,
      name,
      qty,
      price,
      mode: "SELL"
    });

    res.status(200).json({ status: true, message: "sell succesfull" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "sell Unseccesfull" });
  }

})

app.post('/singup', async (req, res) => {
  try {
    console.log(req.body);
    const { email, password, username, fund } = req.body;
    console.log(email, password, username);
    const existingUser = await userSingupModel.findOne({ email });
    if (existingUser) {
      return res.json({success:false, message: "User already exists" });
    }
    const user = await userSingupModel.create({ email, password, username });
    const Fund = await fundModel.create({ userId: user._id, openingBalance: fund, availableMargin: fund, usedMargin: 0 });
    console.log("fund created", Fund);
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProd,                // true on Render
      sameSite: isProd ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000
    });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "user signed failed", success: false })
  }
})

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' })
    }
    const user = await userSingupModel.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const auth = await bcrypt.compare(password, user.password)
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProd,                // true on Render
      sameSite: isProd ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000
    });
    res.status(201).json({ message: "User logged in successfully", success: true });

  } catch (error) {
    console.error(error);
  }
})

app.get('/verify', checkAuth, (req, res) => {

  res.json({
    status: true,
    user: req.user.username
  });
});


app.listen(port, () => {
  console.log(`Your app was running at port ${port}`);
})