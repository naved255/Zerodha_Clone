import React from "react";

const Current = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">

      {/* Scroll on small screens */}
      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <table className="min-w-full border-collapse text-sm text-left">

          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="px-4 py-3 text-gray-600 font-medium"></th>
              <th className="px-4 py-3 font-semibold">
                Currency Futures
              </th>
              <th className="px-4 py-3 font-semibold">
                Currency Options
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">Brokerage</td>
              <td className="px-4 py-3">
                0.03% or ₹20 / executed order whichever is lower
              </td>
              <td className="px-4 py-3">
                ₹20 / executed order
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">STT / CTT</td>
              <td className="px-4 py-3">No STT</td>
              <td className="px-4 py-3">No STT</td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">
                Transaction Charges
              </td>
              <td className="px-4 py-3">
                NSE: 0.00035% <br />
                BSE: 0.00045%
              </td>
              <td className="px-4 py-3">
                NSE: 0.0311% <br />
                BSE: 0.001%
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">GST</td>
              <td className="px-4 py-3">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="px-4 py-3">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">
                SEBI Charges
              </td>
              <td className="px-4 py-3">₹10 / crore</td>
              <td className="px-4 py-3">₹10 / crore</td>
            </tr>

            <tr>
              <td className="px-4 py-3 text-gray-600">
                Stamp Charges
              </td>
              <td className="px-4 py-3">
                0.0001% or ₹10 / crore on buy side
              </td>
              <td className="px-4 py-3">
                0.0001% or ₹10 / crore on buy side
              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </section>
  );
};

export default Current;
