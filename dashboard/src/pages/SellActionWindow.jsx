import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { GeneralContext } from './GeneralContext';
import axios from 'axios'
import { priceFunction } from '../data';

const SellActionWindow = ({ uid }) => {

    const {openSellWindow, closeSellWindow} = useContext(GeneralContext);
    const [stockQuantity, setstockQuantity] = useState(1);
    const [product, setproduct] = useState("CNC");


    const handleSellClick = async () => {
        try {
            let priceObj = priceFunction(uid);
            const data = {
                name: uid,
                qty: stockQuantity,
                product: product,
                price: priceObj.price
            }
            console.log(data);

            let res = await axios.post("https://zerodha-backend-tvro.onrender.com/sell", data, {withCredentials:true});

            console.log(res.data?.status);
            closeSellWindow();

        } catch (error) {
            console.log(error.response?.data || error.message);
            alert("Order failed or insufficient margin");
        }
    };


    const handleCancleClick = () => {
        closeSellWindow();
    }

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

                <div className="flex gap-2">
                    <button
                        onClick={handleSellClick}

                        className="rounded bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-700 active:scale-95"
                    >
                        Sell
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
    )
}

export default SellActionWindow