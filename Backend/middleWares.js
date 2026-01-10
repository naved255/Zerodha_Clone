import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userSignupModel from "./models/userSingupModel.js";

dotenv.config();

const checkAuth = async (req, res, next) => {
    try {
      
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ status: false, message: "No token" });
        }

        jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
            if (err) {
                return res.status(401).json({ status: false, message: "Invalid token" });
            }

            const user = await userSignupModel.findById(data.id);

            if (!user) {
                return res.status(401).json({ status: false, message: "User not found" });
            }

            // ✅ attach user to request
            req.user = user;

            // ✅ allow next middleware / route
            next();
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default checkAuth;
