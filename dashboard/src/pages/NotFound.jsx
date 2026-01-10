import React from 'react'
import {NavLink} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
        <p className='text-2xl font-bold text-center'>404 Page not found.</p>
        <p>Please go to <NavLink style={{textDecoration:"none"}} to={"/"} className={"text-blue-500"}>home page</NavLink></p>
    </div>
  )
}

export default NotFound