import React from "react";

const AccountCharge = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-6">
      
      <h2 className="text-2xl font-bold mb-4">
        Charges for account opening
      </h2>

      {/* Table Wrapper for Mobile Scroll */}
      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <table className="min-w-full text-sm text-left border-collapse">
          
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-700">
                Type of Account
              </th>
              <th className="px-4 py-3 font-semibold text-gray-700">
                Charges
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">
                Online account
              </td>
              <td className="px-4 py-3 font-medium">
                Free
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">
                Offline account
              </td>
              <td className="px-4 py-3 font-medium">
                Free
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 text-gray-600">
                NRI account (offline only)
              </td>
              <td className="px-4 py-3 font-medium">
                ₹500
              </td>
            </tr>

            <tr>
              <td className="px-4 py-3 text-gray-600">
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td className="px-4 py-3 font-medium">
                ₹500
              </td>
            </tr>
          </tbody>

        </table>
      </div>

      {/* Spacer */}
      <div className="h-24"></div>

    </section>
  );
};

export default AccountCharge;
