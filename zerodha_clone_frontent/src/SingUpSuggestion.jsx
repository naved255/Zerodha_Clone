import React from 'react'
import { NavLink } from 'react-router-dom'

const SingUpSuggestion = () => {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
                   Invest in everything
                </h1>

                {/* Subheading */}
                <p className="mt-4 mb-6 text-lg sm:text-xl text-gray-600">
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>


                    <NavLink
                        to="/signup"
                        className="bg-blue-500 text-white px-3 md:text-xl py-1.5 font-medium"
                    >
                        Sinup for free
                    </NavLink>
            
            </div>
        </section>
    )
}

export default SingUpSuggestion