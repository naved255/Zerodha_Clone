import React from 'react'

import LeftImage from './LeftImage.jsx'
import RightImage from './RightImage.jsx'
import { NavLink } from 'react-router-dom'
import Univers from './Universe.jsx'
import Hero from './Hero.jsx'

const ProductPage = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Hero Section */}
        <Hero/>

        {/* Left Image Section */}
        <LeftImage
            src={["kite.png", "googlePlayBadge.svg","appstoreBadge.svg"]}
            title={"Kite"}
            para={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}
            links={[
                { link: "", data: "Try demo" },
                { link: "", data: "Learn more" }
            ]}
        />

        {/* Right Image Section */}
        <RightImage
            src={["console.png"]}
            title={"Console"}
            para={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}
            links={[
                { link: "", data: "Learn more" }
            ]}
        />

        {/* Left Image Section */}
        <LeftImage
            src={["coin.png", "googlePlayBadge.svg","appstoreBadge.svg"]}
            title={"Coin"}
            para={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}
            links={[
                { link: "", data: "Coin" }
            ]}
        />

        {/* Right Image Section */}
        <RightImage
            src={["kiteconnect.png"]}
            title={"Kite Connect API"}
            para={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
            links={[
                { link: "", data: "Kite Connect" }
            ]}
        />

        {/* Left Image Section */}
        <LeftImage
            src={["varsity.png", "googlePlayBadge.svg","appstoreBadge.svg"]}
            title={"Varsity mobile"}
            para={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}
        />

        {/* Blog Section */}
        <p className='text-center text-2xl my-10'>
          Want to know more about our technology stack? Check out the <NavLink className="text-blue-600 no-underline hover:underline">Zerodha.tech blog.</NavLink>
        </p>

        <Univers/>

    </div>
  )
}

export default ProductPage
