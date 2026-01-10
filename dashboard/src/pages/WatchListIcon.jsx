import { BarChartOutlined, MoreHoriz } from '@mui/icons-material'
import { Grow, Tooltip } from '@mui/material'
import React from 'react'
import { GeneralContext } from './GeneralContext'
import { useContext } from 'react'

const WatchListIcon = ({uid}) => {

    const{openBuyWindow} = useContext(GeneralContext);

  return (
    <span>
        <span className='flex gap-3'>
            <Tooltip title={"Buy (B)"} placement='top' arrow TransitionComponent={Grow} onClick={()=>openBuyWindow(uid)}>
                <button className='px-1 py-0.5 bg-blue-600 rounded-md text-white font-bold'>Buy</button>
            </Tooltip>
            <Tooltip title={"Sell (S)"} placement='top' arrow TransitionComponent={Grow}>
                <button className='px-1 py-0.5 bg-red-600 rounded-md text-white font-bold'>Sell</button>
            </Tooltip>
            <Tooltip title={"Analytics (A)"} placement='top' arrow TransitionComponent={Grow}>
                <BarChartOutlined className='border border-gray-300 rounded-md p-1'/>
            </Tooltip>
            <Tooltip title={"More"} placement='top' arrow TransitionComponent={Grow}>
                <MoreHoriz/>
            </Tooltip>
        </span>
    </span>
  )
}

export default WatchListIcon