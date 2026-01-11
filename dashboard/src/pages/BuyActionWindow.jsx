import React from 'react'
import { useContext } from 'react'
import { GeneralContext } from './GeneralContext'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const BuyActionWindow = ({ uid }) => {

  const { setusedMargin, setavailableMargin, availableMargin, availableBalance } = useContext(GeneralContext);
  const { openBuyWindow, closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setstockQuantity] = useState(1);
  const [stockPrice, setstockPrice] = useState(0);
  const [product, setproduct] = useState("CNC");
  const [margin, setmargin] = useState(0);
  const [placeOrder, setplaceOrder] = useState(false);

  const calculateMargin = () => {
    if (product === "MIS") {
      setmargin(stockQuantity * stockPrice * 0.2);
    } else {
      setmargin(0);
    }
  };


  function numberConversion(number) {

    let a = number;
    let i = 0;

    while (a > 0) {
      i++;
      a = Math.floor(a / 10);
    }

    if (i >= 6) {
      return `${(number / 100000).toFixed(2)}L`;
    }

    if (i >= 4) {
      return `${(number / 1000).toFixed(2)}K`;
    }

    return `${number.toFixed(2)}`;
  }

  useEffect(() => {
    calculateMargin();
  }, [stockQuantity, stockPrice, product]);

  const handleBuyClick = async () => {

    try {
      
      const data = {
        product,
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
        margin: margin
      };

      setplaceOrder(true);

      let order = await axios.post(
        "https://zerodha-backend-tvro.onrender.com/newPost",
        data,
        { withCredentials: true }
      );

      if (order.data?.lowBalance) {
        alert("Your balance is low")
        return
      }

      if (order.data?.lowMargin) {
        alert("Your margine is low");
        return;
      }

      setusedMargin(order.data?.usedMargin);
      setavailableMargin(order.data?.availableMargin);

      closeBuyWindow();

    } catch (error) {
      console.log(error.response?.data || error.message);
      setplaceOrder(false);
      alert("Order failed or insufficient margin");
    }finally{
      setplaceOrder(false);
    }
  };


  const handleCancleClick = () => {
    closeBuyWindow();
  }

  const validate = () => {
    if (stockQuantity < 0 || stockPrice < 0) return true;

    if (product === "CNC") {
      return stockQuantity * stockPrice > availableBalance;
    }

    if (product === "MIS") {
      return margin > availableMargin;
    }

    return false;
  };


  return (
    <div
      className="fixed top-1/2 left-1/2 z-50 w-80 md:w-90 -translate-x-1/2 -translate-y-1/2 rounded-md border border-gray-300 bg-white shadow-lg"
      draggable="true"
    >
      <div className="p-4">
        <div className="flex gap-3">

          <fieldset className="flex-1 border border-gray-300 rounded px-2 py-1">
            <legend className="px-1 text-xs text-gray-500">Qty.</legend>
            <input
              type="number"
              name="qty"
              className="w-full outline-none text-sm"
              value={stockQuantity}
              onChange={(e) => setstockQuantity(Number(e.target.value))}
            />
          </fieldset>


          <fieldset className="flex-1 border border-gray-300 rounded px-2 py-1">
            <legend className="px-1 text-xs text-gray-500">Price</legend>
            <input
              type="number"
              name="price"
              step="0.05"
              className="w-full outline-none text-sm"
              value={stockPrice}
              onChange={(e) => setstockPrice(Number(e.target.value))}
            />
          </fieldset>
          <fieldset className="flex-1 border border-gray-300 rounded px-2 py-1">
            <legend className="px-1 text-xs text-gray-500">Product</legend>

            <select
              name="product"
              value={product}
              onChange={(e) => setproduct(e.target.value)}
              className="w-full outline-none text-sm bg-white"
            >
              <option value="CNC">CNC (Delivery)</option>
              <option value="MIS">MIS (Intraday)</option>
            </select>
          </fieldset>

        </div>
      </div>


      <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3">
        {validate() && (
          <p className="text-red-500 text-xs">
            {product === "MIS"
              ? "Not enough margin available"
              : "Not enough balance available"}
          </p>
        )}

        {product === "MIS" ? (
          <span className="text-sm text-gray-600">
            Margin required ₹{numberConversion(margin)}
            {validate() && <p className='text-red-500 text-xs'>not enough margin available</p>}
          </span>

        ) : (<></>)}

        <div className="flex gap-2">
          <button
            onClick={handleBuyClick}
            disabled={validate() || placeOrder}
            className="rounded bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-700 active:scale-95"
          >
            Buy
          </button>

          <button
            onClick={handleCancleClick}

            className="rounded bg-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-300 active:scale-95"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

  );
}

export default BuyActionWindow