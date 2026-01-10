import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AnimatedPart = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto my-2 w-full px-3 sm:w-[90%] md:w-[80%] lg:w-[70%]">

      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center justify-between
                   border border-gray-300 rounded-md
                   px-4 py-3
                   transition-all duration-300
                   hover:scale-[1.02]"
      >
        <p className="text-base sm:text-lg md:text-xl font-semibold">
          {title}
        </p>

        <svg
          className={`h-6 w-6 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>
      </div>

      {/* Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
          ${open
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"}
        `}
      >
        <div className="border border-t-0 border-gray-300 rounded-b-md bg-white">
          <ul className="flex flex-col gap-2 px-4 py-3">
            {links.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.link}
                  className="block text-sm sm:text-base
                             text-gray-600 no-underline
                             hover:text-blue-600
                             transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.data}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default AnimatedPart;
