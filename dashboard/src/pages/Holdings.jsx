import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { VerticalChartBar } from './VerticalChart'
import { priceFunction } from '../data.js'

const Holdings = () => {
  const [holdings, setHoldings] = useState([])

  const getColor = (value) => {
    if (value > 0) return 'text-green-600'
    if (value < 0) return 'text-red-600'
    return 'text-gray-500'
  }

  useEffect(() => {
    async function fetchHoldings() {
      const res = await axios.get(
        'http://localhost:3000/allHoldings',
        { withCredentials: true }
      )
      setHoldings(res.data)
    }
    fetchHoldings()
  }, [holdings])

  const labels = holdings.map(item => item.name)

  const data = {
    labels,
    datasets: [
      {
        label: 'Avg Price',
        data: holdings.map(item => item.avg),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  }

  return (
    <div className="p-3 md:p-6 space-y-6">

      {/* ===== Desktop Table ===== */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="text-gray-400 border-b">
            <tr>
              <th className="px-3 py-2 text-left">Instrument</th>
              <th className="px-3 py-2 text-right">Qty</th>
              <th className="px-3 py-2 text-right">Avg</th>
              <th className="px-3 py-2 text-right">Price</th>
              <th className="px-3 py-2 text-right">P&L</th>
              <th className="px-3 py-2 text-right">Net chg</th>
              <th className="px-3 py-2 text-right">Day chg</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((item, index) => {
              const a = priceFunction(item.name)
              const price = a.price
              const net = ((price - item.avg) / item.avg) * 100
              const pnl = (price - item.avg) * item.qty
              const day = price - a.prevClose

              return (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 font-medium">{item.name}</td>
                  <td className="px-3 py-3 text-right">{item.qty}</td>
                  <td className="px-3 py-3 text-right">₹{item.avg.toFixed(2)}</td>
                  <td className="px-3 py-3 text-right">₹{price.toFixed(2)}</td>
                  <td className={`px-3 py-3 text-right font-semibold ${getColor(pnl)}`}>
                    {pnl > 0 && '+'}₹{pnl.toFixed(2)}
                  </td>
                  <td className={`px-3 py-3 text-right ${getColor(net)}`}>
                    {net > 0 && '+'}{net.toFixed(2)}%
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
        {holdings.map((item, index) => {
          const a = priceFunction(item.name)
          const price = a.price
          const pnl = (price - item.avg) * item.qty
          const net = ((price - item.avg) / item.avg) * 100

          return (
            <div
              key={index}
              className="border rounded-lg p-3 bg-white shadow-sm"
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{item.name}</p>
                <p className={`font-semibold ${getColor(pnl)}`}>
                  {pnl > 0 && '+'}₹{pnl.toFixed(2)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mt-2">
                <p>Qty: <b>{item.qty}</b></p>
                <p>Avg: ₹{item.avg.toFixed(2)}</p>
                <p>LTP: ₹{price.toFixed(2)}</p>
                <p className={getColor(net)}>
                  Net: {net > 0 && '+'}{net.toFixed(2)}%
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* ===== Chart ===== */}
      <div className="bg-white rounded-lg p-3 border">
        <VerticalChartBar data={data} />
      </div>

    </div>
  )
}

export default Holdings
