import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 mb-10">
      {/* Heading */}
      <h3 className="text-3xl font-bold text-center">People</h3>
      <div className="h-5" />

      {/* Team Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-5xl mx-auto">
        {/* Left: Image & Name */}
        <div className="flex flex-col items-center gap-3 md:w-1/2">
          <img
            src="images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover"
          />
          <p className="text-xl font-semibold text-center">Nithin Kamath</p>
          <p className="text-gray-500 text-center">Founder, CEO</p>
        </div>

        {/* Right: Description */}
        <div className="flex flex-col gap-4 md:w-1/2 text-gray-500">
          <p className="text-base md:text-lg">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
            he faced during his decade long stint as a trader. Today, Zerodha has
            changed the landscape of the Indian broking industry.
          </p>
          <p className="text-base md:text-lg">
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-base md:text-lg">Playing basketball is his zen.</p>
          <p className="text-base md:text-lg">
            Connect on{" "}
            <Link className="text-blue-600 hover:underline" to="#">
              Homepage
            </Link>{" "}
            /{" "}
            <Link className="text-blue-600 hover:underline" to="#">
              TradingQnA
            </Link>{" "}
            /{" "}
            <Link className="text-blue-600 hover:underline" to="#">
              Twitter
            </Link>
          </p>
        </div>
      </div>

      <div className="h-24" />
    </div>
  );
};

export default Team;
