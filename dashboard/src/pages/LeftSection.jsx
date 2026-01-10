import React from 'react'
import { watchlist } from '../data.js'
import WatchList from './WatchList.jsx'

const LeftSection = () => {
    return (
        <div className='border text-center border-gray-300 h-full'>
            <div className='grid px-3 py-5 grid-cols-2'>
                <div className='col-span-1 place-items-center flex justify-center items-center gap-3'>
                    <p className='font-bold'>NIFTY 50</p>
                    <p className='text-red-600 font-bold'>0.00</p>
                    <p className='text-gray-400'>0</p>
                </div>
                <div className='col-span-1 flex justify-center items-center gap-3'>
                    <p className='font-bold'>NIFTY 50</p>
                    <p className='text-red-600 font-bold'>0.00</p>
                    <p className='text-gray-400'>0</p>
                </div>
            </div>
            <div className="flex items-center justify-between gap-3 border border-gray-300 rounded-md px-3 py-2">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
                    className="w-full bg-transparent outline-none text-sm placeholder-gray-400"
                />

                <span className="text-sm text-gray-500 whitespace-nowrap">
                    {watchlist.length} / 50
                </span>
            </div>

            <div>
                {
                    watchlist.map((stock, index) => {
                        return (
                            <WatchList key={index} stock={stock} index={index} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default LeftSection