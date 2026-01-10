import RightSection from "./pages/RightSection";
import LeftSection from "./pages/LeftSection";
import GeneralProvider from "./pages/GeneralContext";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./pages/Login";

function App() {
  const [auth, setAuth] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    async function check_auth() {
      try {
        const res = await axios.get("http://localhost:3000/verify", {
          withCredentials: true,
        });
        setAuth(res.data.status);
      } catch {
        setAuth(false);
      }
    }
    check_auth();
  }, []);

  if (auth === null) return <p>Checking authentication...</p>;
  if (auth === false) return <Login auth={auth} setAuth={setAuth} />;

  return (
    <GeneralProvider>
      <div className="relative h-screen grid grid-cols-12">

        {/* Overlay (mobile only) */}
        {showSideBar && (
          <div
            className="fixed inset-0 bg-black/40 z-30 lg:hidden"
            onClick={() => setShowSideBar(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static
            top-0 left-0 h-full
            w-72 lg:w-auto
            lg:col-span-4
            bg-white border-r
            z-40
            transform transition-transform duration-300
            ${showSideBar ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
        >
          <LeftSection />
        </aside>

        {/* Main Content */}
        <main className="col-span-12 lg:col-span-8 overflow-y-auto relative">
          
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setShowSideBar(!showSideBar)}
            className="lg:hidden fixed top-12 left-1 z-100 bg-white shadow rounded-full p-2"
          >
           <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
          </button>

          <RightSection />
        </main>
      </div>
    </GeneralProvider>
  );
}

export default App;

