import React from "react";
import { NavLink } from "react-router-dom";

const Demat = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">

      {/* Heading */}
      <p className="text-2xl font-semibold mb-4">
        Demat AMC (Annual Maintenance Charge)
      </p>

      {/* Table wrapper for mobile scroll */}
      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <table className="min-w-full border-collapse text-sm text-left">

          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="px-4 py-3 font-medium">
                Value of Holdings
              </th>
              <th className="px-4 py-3 font-medium">
                AMC
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">
                Up to ₹4 lakh
              </td>
              <td className="px-4 py-3">
                Free*
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">
                ₹4 lakh – ₹10 lakh
              </td>
              <td className="px-4 py-3">
                ₹100 per year, charged quarterly*
              </td>
            </tr>

            <tr>
              <td className="px-4 py-3 text-gray-600">
                Above ₹10 lakh
              </td>
              <td className="px-4 py-3">
                ₹300 per year, charged quarterly
              </td>
            </tr>
          </tbody>

        </table>
      </div>

      {/* Footnote */}
      <p className="mt-3 text-xs text-gray-500 max-w-3xl">
        * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).
        BSDA account holders cannot hold more than one demat account.
        To learn more about BSDA,{" "}
        <NavLink
          to="#"
          className="text-blue-600 hover:underline"
        >
          click here
        </NavLink>.
      </p>

      <div className="h-24"></div>
    </section>
  );
};

export default Demat;
