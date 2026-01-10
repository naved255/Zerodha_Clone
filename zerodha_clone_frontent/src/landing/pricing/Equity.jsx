import React from "react";

const Equity = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">

      {/* Table wrapper for responsiveness */}
      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <table className="min-w-full border-collapse text-sm text-left">

          {/* Table Head */}
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-600"></th>
              <th className="px-4 py-3 font-medium">Equity Delivery</th>
              <th className="px-4 py-3 font-medium">Equity Intraday</th>
              <th className="px-4 py-3 font-medium">F&O – Futures</th>
              <th className="px-4 py-3 font-medium">F&O – Options</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">Brokerage</td>
              <td className="px-4 py-3">Zero Brokerage</td>
              <td className="px-4 py-3">
                0.03% or ₹20 / executed order whichever is lower
              </td>
              <td className="px-4 py-3">
                0.03% or ₹20 / executed order whichever is lower
              </td>
              <td className="px-4 py-3">
                Flat ₹20 per executed order
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">STT / CTT</td>
              <td className="px-4 py-3">0.1% on buy & sell</td>
              <td className="px-4 py-3">0.025% on sell side</td>
              <td className="px-4 py-3">0.02% on sell side</td>
              <td className="px-4 py-3">
                0.125% of intrinsic value on exercised options
                <br />
                0.1% on sell side (on premium)
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">Transaction Charges</td>
              <td className="px-4 py-3">
                NSE: 0.00297%
                <br />
                BSE: 0.00375%
              </td>
              <td className="px-4 py-3">
                NSE: 0.00297%
                <br />
                BSE: 0.00375%
              </td>
              <td className="px-4 py-3">
                NSE: 0.00173%
                <br />
                BSE: 0
              </td>
              <td className="px-4 py-3">
                NSE: 0.03503% (on premium)
                <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">GST</td>
              <td className="px-4 py-3">18% on applicable charges</td>
              <td className="px-4 py-3">18% on applicable charges</td>
              <td className="px-4 py-3">18% on applicable charges</td>
              <td className="px-4 py-3">18% on applicable charges</td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">SEBI Charges</td>
              <td className="px-4 py-3">₹10 / crore</td>
              <td className="px-4 py-3">₹10 / crore</td>
              <td className="px-4 py-3">₹10 / crore</td>
              <td className="px-4 py-3">₹10 / crore</td>
            </tr>

            <tr>
              <td className="px-4 py-3 text-gray-600">Stamp Charges</td>
              <td className="px-4 py-3">
                0.015% or ₹1500 / crore on buy side
              </td>
              <td className="px-4 py-3">
                0.003% or ₹300 / crore on buy side
              </td>
              <td className="px-4 py-3">
                0.002% or ₹200 / crore on buy side
              </td>
              <td className="px-4 py-3">
                0.003% or ₹300 / crore on buy side
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </section>
  );
};

export default Equity;
