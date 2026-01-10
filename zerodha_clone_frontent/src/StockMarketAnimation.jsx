import React from "react";

const StockMarketAnimation = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          Live market movements
        </h2>
        <p className="text-gray-600 mb-12 text-base sm:text-lg">
          Simple visualisation of how prices move in real time
        </p>

        {/* Chart Container */}
        <div className="relative h-48 sm:h-56 md:h-64 flex items-end justify-between gap-2 sm:gap-3 px-2">
          
          {/* Bar */}
          {[40, 70, 55, 90, 60, 80, 50, 95, 65, 75].map((height, i) => (
            <div
              key={i}
              className="w-full bg-blue-600 rounded-t-md animate-bar"
              style={{
                height: `${height}%`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}

          {/* Baseline */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300" />
        </div>

 
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes barMove {
            0% { height: 30%; }
            50% { height: 95%; }
            100% { height: 40%; }
          }

          .animate-bar {
            animation: barMove 2.8s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default StockMarketAnimation;
