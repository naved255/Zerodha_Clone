import React from "react";

const Commodity = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      
      {/* Mobile Scroll Wrapper */}
      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <table className="min-w-full text-sm text-left border-collapse">
          
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="px-4 py-3 text-gray-600 font-medium"></th>
              <th className="px-4 py-3 font-semibold">
                Commodity Futures
              </th>
              <th className="px-4 py-3 font-semibold">
                Commodity Options
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">Brokerage</td>
              <td className="px-4 py-3">
                0.03% or ₹20 / executed order whichever is lower
              </td>
              <td className="px-4 py-3">₹20 / executed order</td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">STT / CTT</td>
              <td className="px-4 py-3">
                0.01% on sell side (Non-Agri)
              </td>
              <td className="px-4 py-3">
                0.05% on sell side
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">
                Transaction Charges
              </td>
              <td className="px-4 py-3">
                MCX: 0.0021% <br />
                NSE: 0.0001%
              </td>
              <td className="px-4 py-3">
                MCX: 0.0418% <br />
                NSE: 0.001%
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
              <td className="px-4 py-3">
                Agri: ₹1 / crore <br />
                Non-Agri: ₹10 / crore
              </td>
              <td className="px-4 py-3">
                ₹10 / crore
              </td>
            </tr>

            <tr>
              <td className="px-4 py-3 text-gray-600">
                Stamp Charges
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

export default Commodity;
