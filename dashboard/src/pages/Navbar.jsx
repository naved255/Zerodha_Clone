import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { GeneralContext } from "./GeneralContext";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const {seterror} = useContext(GeneralContext);

  async function handleLogOut() {
    try {
      const logOut = await axios.post(
        "https://zerodha-backend-tvro.onrender.com/logout",
        {},
        { withCredentials: true }
      );
      if (logOut.data?.status) window.location.reload();
    } catch (error) {
      console.log(error);
      seterror(error.message || "Something went wrong");
    }
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="flex items-center justify-between px-4 py-3">

          {/* Logo */}
          <svg width="40" height="40" viewBox="0 0 100 100">
            <polygon points="50,5 95,50 50,95 5,50" fill="#FFA500" />
            <polygon points="50,22 78,50 50,78 22,50" fill="white" />
            <circle cx="50" cy="50" r="4" fill="#FFA500" />
          </svg>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6">
              {[
                { path: "/", label: "Dashboard" },
                { path: "/orders", label: "Orders" },
                { path: "/holdings", label: "Holdings" },
                { path: "/postions", label: "Positions" },
                { path: "/funds", label: "Funds" },
                { path: "/apps", label: "Apps" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "text-orange-400" : ""
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div
              onClick={() => setDrop(!drop)}
              className="cursor-pointer rounded-full bg-purple-300 text-purple-700 font-bold px-3 py-1"
            >
              UN
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* 🔥 Sliding Mobile Menu */}
      <div
        className={`
          fixed top-0 left-0 w-full bg-white z-50 md:hidden
          transform transition-transform duration-300
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="px-5 py-4 border-b flex justify-between items-center">
          <span className="font-semibold text-lg">Menu</span>
          <button
            className="text-xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-5 px-5 py-6">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Dashboard</NavLink>
          <NavLink to="/orders" onClick={() => setMenuOpen(false)}>Orders</NavLink>
          <NavLink to="/holdings" onClick={() => setMenuOpen(false)}>Holdings</NavLink>
          <NavLink to="/postions" onClick={() => setMenuOpen(false)}>Positions</NavLink>
          <NavLink to="/funds" onClick={() => setMenuOpen(false)}>Funds</NavLink>
          <NavLink to="/apps" onClick={() => setMenuOpen(false)}>Apps</NavLink>

          <button
            onClick={handleLogOut}
            className="text-left text-red-500 mt-4"
          >
            Logout
          </button>
        </ul>
      </div>

      {/* Desktop Profile Dropdown */}
      {drop && (
        <div className="absolute right-6 top-16 bg-white border w-60 shadow-md z-50 hidden md:block">
          <p className="px-5 py-4 text-center font-semibold">My Profile</p>
          <ul className="flex flex-col gap-3 px-5 pb-4 text-sm">
            <li>Console</li>
            <li>Coin</li>
            <li>Support</li>
            <li>User manual</li>
            <button
              onClick={handleLogOut}
              className="text-left text-red-500 mt-2"
            >
              Logout
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

