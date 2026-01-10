import React from 'react'
import { NavLink } from 'react-router-dom'

const Univers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <h2 className="text-3xl font-semibold mb-3">
        The Zerodha Universe
      </h2>

      <p className="text-lg text-gray-500 mb-10">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Card 1 */}
        <NavLink to="" className="no-underline group">
          <img
            src="images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            className="mx-auto mb-4 w-48"
          />
          <p className="text-sm text-gray-500 px-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </NavLink>

        {/* Card 2 */}
        <NavLink to="" className="no-underline group">
          <img
            src="images/sensibullLogo.svg"
            alt="Sensibull"
            className="mx-auto mb-4 w-48"
          />
          <p className="text-sm text-gray-500 px-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest and more.
          </p>
        </NavLink>

        {/* Card 3 */}
        <NavLink to="" className="no-underline group">
          <img
            src="https://zerodha.com/static/images/partners/tijori.svg"
            alt="Tijori"
            className="mx-auto mb-4 w-48"
          />
          <p className="text-sm text-gray-500 px-4">
            Investment research platform offering deep insights on stocks,
            sectors, supply chains, and more.
          </p>
        </NavLink>

        {/* Card 4 */}
        <NavLink to="" className="no-underline group">
          <img
            src="images/streakLogo.png"
            alt="Streak"
            className="mx-auto mb-4 w-48"
          />
          <p className="text-sm text-gray-500 px-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </NavLink>

        {/* Card 5 */}
        <NavLink to="" className="no-underline group">
          <img
            src="images/smallcaseLogo.png"
            alt="Smallcase"
            className="mx-auto mb-4 w-48"
          />
          <p className="text-sm text-gray-500 px-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks and ETFs.
          </p>
        </NavLink>

        {/* Card 6 */}
        <NavLink to="" className="no-underline group">
          <img
            src="images/dittoLogo.png"
            alt="Ditto"
            className="mx-auto mb-4 w-40"
          />
          <p className="text-sm text-gray-500 px-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </NavLink>

      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Sign up for free
        </button>
      </div>

      <div className="h-16"></div>
    </div>
  )
}

export default Univers
