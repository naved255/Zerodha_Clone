import React from 'react'
import WatchList from './WatchList.jsx'
import { useContext, useEffect } from 'react'
import { GeneralContext } from './GeneralContext.jsx'


const LeftSection = () => {

    const { list, setlist } = useContext(GeneralContext);

    function pickRandomIndices(length, count = 2) {
        const indices = new Set();

        while (indices.size < count) {
            indices.add(Math.floor(Math.random() * length));
        }

        return [...indices];
    }

    function randomFluctuation(price, maxPercent = 0.3) {
        const changePercent =
            (Math.random() * maxPercent * 2 - maxPercent) / 100;

        return Number((price + price * changePercent).toFixed(2));
    }

    useEffect(() => {
        const id = setInterval(() => {
            setlist(prev => {
                const count = Math.random() > 0.6 ? 2 : 1; // 1 or 2 stocks
                const randomIndices = pickRandomIndices(prev.length, count);

                return prev.map((stock, index) => {
                    if (!randomIndices.includes(index)) return stock;

                    const newPrice = randomFluctuation(stock.price);

                    return {
                        ...stock,
                        price: newPrice,
                        percent: Number(
                            (((newPrice - stock.prevClose) / stock.prevClose) * 100).toFixed(2)
                        ),
                        isDown: newPrice < stock.prevClose
                    };
                });
            });
        }, 4000);

        return () => clearInterval(id);
    }, []);


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
                    {list.length} / 50
                </span>
            </div>

            <div>
                {
                    list.map((stock, index) => {
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