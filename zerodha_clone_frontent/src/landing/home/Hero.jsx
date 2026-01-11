import React from 'react'
import {useNavigate} from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/signup")
  }
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 sm:py-10 mb-32 sm:mb-40">
      <div className="flex flex-col items-center text-center">

        {/* Hero Image */}
        <img
          src="images/homeHero.png"
          alt="Hero"
          className="mb-6 sm:mb-10 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl"
        />

        {/* Text Content */}
        <div className="flex flex-col gap-3 sm:gap-4 items-center">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Invest in everything
          </h1>

          <p className="text-gray-500 text-base sm:text-lg max-w-md sm:max-w-xl">
            Online platform to invest in stocks, derivatives,
            mutual funds, and more
          </p>

          <button
          onClick={handleClick}
            className="
              mt-4
              w-full
              sm:w-2/3
              md:w-1/3
              lg:w-1/4
              rounded-md
              bg-blue-600
              py-3
              text-white
              font-semibold
              hover:bg-blue-700
              transition
              active:scale-95
            "
          >
            Sign up
          </button>

        </div>

      </div>
    </section>
  )
}

export default Hero
