import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import { Routes, Route } from 'react-router-dom'
import Orders from './Orders'
import Holdings from './Holdings'
import Position from './Position'
import Funds from './Funds'
import LeftSection from './LeftSection'
import AppPage from './AppPage'
import NotFound from './NotFound'
import Login from './Login'

const RightSection = () => {
    return (
        <div>
            
            <Navbar />

            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/holdings' element={<Holdings />} />
                <Route path='/postions' element={<Position />} />
                <Route path='/funds' element={<Funds />} />
                <Route path='/apps' element={<AppPage/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>

        </div>
    )
}

export default RightSection