import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { priceFunction } from '../data'

const Position = () => {
  const [positions, setPositions] = useState([])

  const getColor = (value) => {
    if (value > 0) return 'text-green-600'
    if (value < 0) return 'text-red-600'
    return 'text-gray-500'
  }

  useEffect(() => {
    async function fetchPositions() {
      const res = await axios.get(
        'https://zerodha-backend-tvro.onrender.com/allPositions',
        { withCredentials: true }
      )
      setPositions(res.data)
    }
    fetchPositions()
  }, [positions])

  return (
    <div className="p-3 md:p-6 space-y-6">

      <p className="text-gray-400 text-xl md:text-2xl">
        Positions ({positions.length})
      </p>

      {/* ===== Desktop Table ===== */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="text-gray-400 border-b">
            <tr>
              <th className="px-3 py-2 text-left">Product</th>
              <th className="px-3 py-2 text-left">Instrument</th>
              <th className="px-3 py-2 text-right">Qty</th>
              <th className="px-3 py-2 text-right">Avg</th>
              <th className="px-3 py-2 text-right">LTP</th>
              <th className="px-3 py-2 text-right">P&L</th>
              <th className="px-3 py-2 text-right">Chg</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
              const a = priceFunction(stock.name)
              const price = a.price
              const day = price - a.prevClose
              const pnl = (price - stock.buyPrice) * stock.qty

              return (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3">{stock.product}</td>
                  <td className="px-3 py-3 font-medium">{stock.name}</td>
                  <td className="px-3 py-3 text-right">{stock.qty}</td>
                  <td className="px-3 py-3 text-right">
                    ₹{stock.buyPrice.toFixed(2)}
                  </td>
                  <td className="px-3 py-3 text-right">
                    ₹{price.toFixed(2)}
                  </td>
                  <td className={`px-3 py-3 text-right font-semibold ${getColor(pnl)}`}>
                    {pnl > 0 && '+'}₹{pnl.toFixed(2)}
                  </td>
                  <td className={`px-3 py-3 text-right ${getColor(day)}`}>
                    {day > 0 && '+'}{day.toFixed(2)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* ===== Mobile Cards ===== */}
      <div className="md:hidden space-y-3">
        {positions.map((stock, index) => {
          const a = priceFunction(stock.name)
          const price = a.price
          const day = price - a.prevClose
          const pnl = (price - stock.buyPrice) * stock.qty

          return (
            <div
              key={index}
              className="border rounded-lg p-3 bg-white shadow-sm"
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{stock.name}</p>
                <p className={`font-semibold ${getColor(pnl)}`}>
                  {pnl > 0 && '+'}₹{pnl.toFixed(2)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mt-2">
                <p>Product: <b>{stock.product}</b></p>
                <p>Qty: <b>{stock.qty}</b></p>
                <p>Avg: ₹{stock.buyPrice.toFixed(2)}</p>
                <p>LTP: ₹{price.toFixed(2)}</p>
                <p className={getColor(day)}>
                  Day: {day > 0 && '+'}{day.toFixed(2)}
                </p>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Position
