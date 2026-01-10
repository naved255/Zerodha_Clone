import React from 'react'

const Funds = () => {
  return (
    <div className='pt-8 lg:px-8'>
      {/* Buttons */}
      <div className='flex flex-col sm:flex-row sm:justify-end sm:items-center w-full gap-3 px-1.5 pb-8'>
        <p className='text-gray-400 text-xs text-center sm:text-left'>
          Instant, zero-cost fund transfers with UPI
        </p>
        <button className='bg-green-500 text-white font-bold px-3 py-1'>Adds funds</button>
        <button className='bg-blue-500 text-white font-bold px-3 py-1'>Withdraw</button>
      </div>

      {/* Equity header */}
      <div className='flex items-center justify-center sm:justify-start px-4 mb-4'>
        <div className='flex gap-2 px-1 justify-center items-center text-gray-600'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="34px"
            fill="#434343"
          >
            <path d="M480-120q-74 0-139.5-28.5T226-226q-49-49-77.5-114.5T120-480q0-44 10-85.5t29-78q19-36.5 45.5-68T264-768l272 272-56 56-216-216q-30 36-47 80.5T200-480q0 116 82 198t198 82q116 0 198-82t82-198q0-107-68.5-184.5T520-756v76h-80v-160h40q74 0 139.5 28.5T734-734q49 49 77.5 114.5T840-480q0 74-28.5 139.5T734-226q-49 49-114.5 77.5T480-120ZM280-440q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440Zm200 200q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm200-200q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440Z" />
          </svg>
          <p className='text-2xl font-semibold'>Equity</p>
        </div>
      </div>

      {/* Fund cards */}
      <div className='w-full sm:w-80 border border-gray-300 m-0 sm:m-4 px-4 py-2 mx-auto sm:mx-6 lg:mx-6'>
        {Array(12).fill(0).map((_, i) => (
          <div key={i} className='flex justify-between items-center px-1 py-1'>
            <p className='text-gray-400 text-sm sm:text-base'>Available margin</p>
            <p className={`text-xl font-bold ${i % 3 === 0 ? 'bg-blue-200 text-blue-500 px-1 rounded' : ''}`}>
              4,043.10
            </p>
          </div>
        ))}
        <hr className='mt-1.5 opacity-30' />
      </div>
    </div>
  )
}

export default Funds
