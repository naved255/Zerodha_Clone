import React from 'react'

const Awards = () => {
  return (
    <div className="max-w-7xl mx-auto mt-40 mb-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="images/largestBroker.svg"
            alt="Largest Broker"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-3xl font-semibold mb-4">
            Largest Stock broker in India
          </h1>

          <p className="text-gray-600 mb-6">
            2+ million Zerodha clients contribute to over 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>

          {/* Lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <ul className="flex flex-col gap-4">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>

            <ul className="flex flex-col gap-4">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. securities</li>
            </ul>
          </div>

          {/* Logos */}
          <img
            src="images/pressLogos.png"
            alt="Press Logos"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Awards
