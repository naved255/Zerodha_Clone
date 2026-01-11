import React, { useState } from 'react'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import WatchListIcon from './WatchListIcon'

const WatchList = ({ stock }) => {

  const [visible, setVisible] = useState(false);

  const getColor = (value) => {
    if (value > 0) return "text-green-600";
    if (value < 0) return "text-red-600";
    return "text-gray-500";
  };

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(!visible)} // 👈 mobile support
      className="
        flex items-center justify-between
        px-2 py-2 h-14
        border-b border-gray-200
        cursor-pointer
        hover:bg-gray-50
        transition
      "
    >
      {/* Stock Name */}
      <div className="flex min-w-0">
        <p
          className={`truncate font-medium text-sm sm:text-base ${
            stock.isDown ? "text-red-500" : "text-green-500"
          }`}
        >
          {stock.name}
        </p>
      </div>

      {/* Icons (Buy/Sell/etc) */}
      <div className="hidden sm:block w-24 text-center">
        {visible && <WatchListIcon uid={stock.name} />}
      </div>

      {/* Price + Change */}
      <div className="flex items-center gap-2 sm:gap-3 text-right">
        <p className="text-gray-500 text-xs sm:text-sm">
          {stock.price}
        </p>

        {stock.isDown ? (
          <KeyboardArrowDown className="text-red-500 text-lg sm:text-xl" />
        ) : (
          <KeyboardArrowUp className="text-green-500 text-lg sm:text-xl" />
        )}

        <p className={`text-xs sm:text-sm font-medium ${getColor(stock.percent)}`}>
          {stock.percent}
        </p>
      </div>
    </div>
  );
};

export default WatchList;
