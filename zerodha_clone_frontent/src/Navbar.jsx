import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import StockMarketAnimation from './StockMarketAnimation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/");
  }

    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup (important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <NavLink onClick={handleNavigation} to="/">
              <img src="images/logo.svg" alt="logo" className="w-44 md:w-52" />
            </NavLink>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <></>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink className="text-gray-800 no-underline hover:text-blue-600" to="/signup">Sign Up</NavLink>
            <NavLink className="text-gray-800 no-underline hover:text-blue-600" to="/">Home</NavLink>
            <NavLink className="text-gray-800 no-underline hover:text-blue-600" to="/about">About</NavLink>
            <NavLink className="text-gray-800 no-underline hover:text-blue-600" to="/pricing">Pricing</NavLink>
            <NavLink className="text-gray-800 no-underline hover:text-blue-600" to="/product">Products</NavLink>
            <NavLink className="text-gray-800 no-underline hover:text-blue-600" to="/support">Support</NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="px-4 pt-16 space-y-2">
          <div className='flex items-center justify-end' >
            <svg
            onClick={() => setIsOpen(!isOpen)}
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <NavLink
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 no-underline hover:bg-gray-200"
            to="/signup"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </NavLink>
          <NavLink
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 no-underline hover:bg-gray-200"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 no-underline hover:bg-gray-200"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 no-underline hover:bg-gray-200"
            to="/pricing"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </NavLink>
          <NavLink
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 no-underline hover:bg-gray-200"
            to="/product"
            onClick={() => setIsOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 no-underline hover:bg-gray-200"
            to="/support"
            onClick={() => setIsOpen(false)}
          >
            Support
          </NavLink>
        </div>
        
          <StockMarketAnimation/>

      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/35 z-10"
          onClick={(e) => {e.stopPropagation(); setIsOpen(false)}}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
