import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Zerodha Products
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          Sleek, modern, and intuitive trading platforms
        </p>

        {/* Link */}
        <p className="mt-6 text-base sm:text-lg">
            Check out our&nbsp;
          <NavLink
            to="/products"
            className="text-blue-600 hover:text-blue-700 font-medium underline-offset-4 hover:underline"
          >
            investment offerings →
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default Hero;
