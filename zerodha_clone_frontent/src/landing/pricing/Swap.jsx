import React from "react";

const Swap = ({ handleClick, toggle }) => {
  const tabs = [
    { key: "equity", label: "Equity" },
    { key: "current", label: "Currency" },
    { key: "commodity", label: "Commodity" },
  ];

  return (
    <div className="mx-auto mt-6 w-full max-w-md px-4">
      <div className="flex items-center justify-between gap-4">

        {tabs.map((tab) => {
          const active = toggle === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => handleClick(tab.key)}
              className="flex-1 flex flex-col items-center focus:outline-none"
            >
              <span
                className={`text-sm sm:text-base md:text-lg font-medium transition-colors
                  ${
                    active
                      ? "text-gray-700"
                      : "text-blue-600 hover:text-blue-700"
                  }
                `}
              >
                {tab.label}
              </span>

              <span
                className={`mt-2 h-0.5 w-full transition-all duration-300
                  ${active ? "bg-blue-600" : "bg-transparent"}
                `}
              />
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default Swap;

