import React from "react";

const AppPage = () => {
  return (
    <div className="p-8">

      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-6">
        Welcome to Zerodha Kite
      </h1>

      <p className="text-gray-600 max-w-3xl mb-10">
        Zerodha is India’s largest retail stockbroker, offering low-cost trading,
        powerful platforms, and a growing ecosystem of investment tools.
      </p>

      {/* Zerodha Overview */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">About Zerodha</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Founded in 2010 by Nithin Kamath</li>
          <li>ockbroker by active clients</li>
          <li>Zero brokerage on equity delivery</li>
          <li>Flat ₹20 per order on intraday & F&O</li>
          <li>SEBI registered and trusted by millions</li>
        </ul>
      </section>

      {/* Ecosystem */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Zerodha Ecosystem & Partner Platforms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="border rounded p-4">
            <h3 className="font-semibold">Coin</h3>
            <p className="text-gray-600 text-sm">
              Direct mutual funds with zero commission. Long-term investing made simple.
            </p>
          </div>

          <div className="border rounded p-4">
            <h3 className="font-semibold">Varsity</h3>
            <p className="text-gray-600 text-sm">
              Free stock market education platform by Zerodha.
            </p>
          </div>

          <div className="border rounded p-4">
            <h3 className="font-semibold">Sensibull</h3>
            <p className="text-gray-600 text-sm">
              India’s most popular options trading & strategy platform.
            </p>
          </div>

          <div className="border rounded p-4">
            <h3 className="font-semibold">Smallcase</h3>
            <p className="text-gray-600 text-sm">
              Invest in curated baskets of stocks based on themes & strategies.
            </p>
          </div>

          <div className="border rounded p-4">
            <h3 className="font-semibold">Streak</h3>
            <p className="text-gray-600 text-sm">
              Create, backtest, and deploy algo trading strategies without coding.
            </p>
          </div>

          <div className="border rounded p-4">
            <h3 className="font-semibold">Tijori</h3>
            <p className="text-gray-600 text-sm">
              Deep fundamental research and company insights for investors.
            </p>
          </div>

        </div>
      </section>

      {/* Philosophy */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Zerodha’s Philosophy</h2>
        <p className="text-gray-700 max-w-3xl">
          Zerodha believes in empowering investors through education, transparency,
          and technology — not tips or stock recommendations.
          Users are encouraged to make informed decisions.
        </p>
      </section>

    </div>
  );
};

export default AppPage;
