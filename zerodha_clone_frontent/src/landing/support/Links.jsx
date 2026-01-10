import React from "react";
import LinkSection from "./LinkSection";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <section className="mb-12 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Layout */}
        <div className="flex flex-col gap-8 lg:flex-row">

          {/* Main content */}
          <div className="w-full lg:w-3/4">
            <LinkSection />
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 space-y-8">

            {/* Alerts box */}
            <div className="flex border border-amber-200">
              <div className="w-2 bg-amber-600"></div>

              <div className="bg-amber-100 px-4 py-3">
                <ul className="flex flex-col gap-2 text-sm">
                  <li>
                    <NavLink
                      to="#"
                      className="no-underline text-gray-800 hover:text-blue-600"
                    >
                      Latest Intraday leverages and Square-off timings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      className="no-underline text-gray-800 hover:text-blue-600"
                    >
                      Introduction of new F&O contracts on 4 individual securities
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="overflow-hidden rounded-md border border-gray-300">
              <div className="border-b border-gray-300 bg-gray-50 px-4 py-3 text-center text-lg font-semibold">
                Quick Links
              </div>

              <ul>
                {[
                  "Track account opening",
                  "Track segment activation",
                  "Intraday margins",
                  "Kite user manual",
                  "Learn how to create a ticket",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="border-t border-gray-200 px-4 py-2 text-[15px] text-blue-700 hover:bg-gray-50 cursor-pointer"
                  >
                    {index + 1}. {item}
                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>

      </div>
    </section>
  );
};

export default Links;
