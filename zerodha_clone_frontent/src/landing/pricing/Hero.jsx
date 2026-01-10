import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-10">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Charges</h1>
        <p className="mt-2 text-xl text-gray-500">
          List of all charges and taxes
        </p>
      </div>

      {/* Spacer */}
      <div className="h-20 sm:h-28"></div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">

        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="images/pricing0.svg"
            alt="Free equity delivery"
            className="w-60 mb-6"
          />
          <h3 className="text-xl font-semibold mb-3">
            Free equity delivery
          </h3>
          <p className="text-gray-500 text-base max-w-sm">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://zerodha.com/static/images/other-trades.svg"
            alt="Intraday & F&O"
            className="w-60 mb-6"
          />
          <h3 className="text-xl font-semibold mb-3">
            Intraday & F&O trades
          </h3>
          <p className="text-gray-500 text-base max-w-sm">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday
            trades across equity, currency, and commodity. Flat ₹20 on options.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="images/pricing0.svg"
            alt="Mutual funds"
            className="w-60 mb-6"
          />
          <h3 className="text-xl font-semibold mb-3">
            Free direct mutual funds
          </h3>
          <p className="text-gray-500 text-base max-w-sm">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>

      </div>

      {/* Bottom spacer */}
      <div className="h-24"></div>
    </section>
  );
};

export default Hero;
