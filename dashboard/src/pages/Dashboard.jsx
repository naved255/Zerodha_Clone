import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Login from "./Login";
import { GeneralContext } from "./GeneralContext";

const Dashboard = () => {
  const {
    availableMargin,
    usedMargin,
    availableBalance,
    setavailableBalance,
    setusedMargin,
    setavailableMargin,
    list,
    setlist
  } = useContext(GeneralContext);


    const priceFunction = (stockName) => {
      const stock = list.find(
        item => item.name.toLowerCase() === stockName.toLowerCase()
      );
      return stock ? { price: stock.price, prevClose: stock.prevClose } : { price: 0, prevClose: 0 };
    };

  const [auth, setAuth] = useState(null);
  const [hold, setHold] = useState({
    count: 0,
    currVal: 0,
    investment: 0,
    pnl: 0,
  });

  /* ---------------- Helpers ---------------- */

  const setHolding = (arr) => {
    let currVal = 0;
    let investment = 0;

    arr.forEach((e) => {
      const price = priceFunction(e.name)?.price || 0;
      investment += e.avg * e.qty;
      currVal += price * e.qty;
    });

    return {
      count: arr.length,
      currVal,
      investment,
      pnl: currVal - investment,
    };
  };

  const getColor = (value) => {
    if (value > 0) return "text-green-600";
    if (value < 0) return "text-red-600";
    return "text-gray-500";
  };

  const numberConversion = (num) => {
    if (num >= 100000) return `${(num / 100000).toFixed(2)}L`;
    if (num >= 1000) return `${(num / 1000).toFixed(2)}K`;
    return num.toFixed(2);
  };

  /* ---------------- API ---------------- */

  useEffect(() => {
    async function checkAuth() {
      try {
        const verifyRes = await axios.get("https://zerodha-backend-tvro.onrender.com/verify", {
          withCredentials: true,
        });

        setAuth(verifyRes.data.status);

        const dashboardRes = await axios.get(
          "https://zerodha-backend-tvro.onrender.com/dashboard",
          { withCredentials: true }
        );

        const holdingsRes = await axios.get(
          "https://zerodha-backend-tvro.onrender.com/allHoldings",
          { withCredentials: true }
        );

        setHold(setHolding(holdingsRes.data));

        const fund = dashboardRes.data.fund;
        setavailableBalance(fund.openingBalance);
        setusedMargin(fund.usedMargin);
        setavailableMargin(fund.availableMargin);
      } catch (err) {
        console.error(err);
        setAuth(false);
      }
    }

    checkAuth();
  }, []);

  /* ---------------- Auth ---------------- */

  if (auth === null) return <p className="p-6">Checking authentication...</p>;
  if (auth === false) return <Login />;

  /* ---------------- UI ---------------- */

  return (
    <div className="px-4 md:px-8 py-6 space-y-8">

      {/* Greeting */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
        Hi, User!
      </h1>

      <hr className="opacity-20" />

      {/* Equity Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-gray-600">
          <p className="text-xl md:text-2xl font-medium">Equity</p>
        </div>

        <div className="flex flex-col md:flex-row 
                        items-center md:items-start 
                        gap-6 md:gap-20 
                        text-center md:text-left">

          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-semibold">
              {numberConversion(availableMargin)}
            </p>
            <p className="text-gray-400 text-sm md:text-base">
              Margin available
            </p>
          </div>

          <div className="text-gray-500 space-y-1 md:space-y-2 text-sm md:text-base">
            <p>
              Margin used <b>{numberConversion(usedMargin)}</b>
            </p>
            <p>
              Opening balance <b>{numberConversion(availableBalance)}</b>
            </p>
          </div>
        </div>
      </section>

      <hr className="opacity-20" />

      {/* Holdings */}
      <section className="space-y-4">
        <p className="text-xl md:text-2xl text-gray-600">
          Holdings ({hold.count})
        </p>

        <div className="flex flex-col md:flex-row 
                        items-center md:items-start 
                        gap-6 md:gap-20 
                        text-center md:text-left">

          <div>
            <p
              className={`text-4xl sm:text-5xl md:text-6xl font-semibold ${getColor(
                hold.pnl
              )}`}
            >
              {numberConversion(hold.pnl)}
            </p>
            <p className="text-gray-400 text-sm md:text-base">P&amp;L</p>
          </div>

          <div className="text-gray-500 space-y-1 md:space-y-2 text-sm md:text-base">
            <p>
              Current value <b>{numberConversion(hold.currVal)}</b>
            </p>
            <p>
              Investment <b>{numberConversion(hold.investment)}</b>
            </p>
          </div>
        </div>
      </section>

      <hr className="opacity-20" />
    </div>
  );
};

export default Dashboard;
