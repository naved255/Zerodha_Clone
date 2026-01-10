import React from 'react'

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Content */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-semibold">
            Unbeatable pricing
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>

          <a
            href="#"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            See pricing →
          </a>
        </div>

        {/* Spacer */}
        <div className="hidden lg:block lg:col-span-2"></div>

        {/* Pricing Cards */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">

            {/* Card 1 */}
            <div className="border rounded-md p-6 text-center">
              <h2 className="text-4xl font-semibold">₹0</h2>
              <p className="mt-2 text-gray-500">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            {/* Card 2 */}
            <div className="border rounded-md p-6 text-center">
              <h2 className="text-4xl font-semibold">₹20</h2>
              <p className="mt-2 text-gray-500">
                Intraday and F&amp;O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Pricing
