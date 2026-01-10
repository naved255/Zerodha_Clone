import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl text-center">
        {/* Error Code */}
        <p className="text-sm font-medium text-gray-500 mb-2">404</p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          Kiaan couldn’t find that page
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          We couldn’t find the page you were looking for. Visit Zerodha’s home
          page.
        </p>

        {/* Action */}
        <NavLink
          to="/"
          className="inline-block text-blue-600 font-medium hover:underline"
        >
          Go to home →
        </NavLink>
      </div>
    </section>
  );
};

export default NotFound;
