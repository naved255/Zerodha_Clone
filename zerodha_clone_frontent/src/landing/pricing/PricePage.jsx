import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Hero from "./Hero.jsx";
import Swap from "./Swap.jsx";
import Equity from "./Equity.jsx";
import Current from "./Current.jsx";
import Commodity from "./Commodity.jsx";
import AccountCharge from "./AccountCharge.jsx";
import Demat from "./Demat.jsx";

const PricePage = () => {
  const [toggle, setToggle] = useState("equity");

  const handleClick = (value) => {
    if (["equity", "current", "commodity"].includes(value)) {
      setToggle(value);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4">

      {/* Hero */}
      <Hero />

      {/* Swap Tabs */}
      <div className="mt-10">
        <Swap handleClick={handleClick} toggle={toggle} />
      </div>

      {/* Pricing Tables */}
      <div className="mt-8 overflow-x-auto">
        {toggle === "equity" && <Equity />}
        {toggle === "current" && <Current />}
        {toggle === "commodity" && <Commodity />}
      </div>

      {/* Calculator CTA */}
      <p className="mt-8 text-center text-xl font-medium">
        <NavLink
          to="#"
          className="text-blue-600 hover:underline"
        >
          Calculate your costs upfront
        </NavLink>{" "}
        using our brokerage calculator
      </p>

      {/* Spacing */}
      <div className="h-20"></div>

      {/* Account Charges */}
      <AccountCharge />

      {/* Demat Charges */}
      <Demat />

      {/* Disclaimer */}
      <div className="mt-10 space-y-2">
        <p className="font-semibold">Disclaimer</p>
        <p className="text-xs text-gray-500 leading-relaxed">
          For delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All statutory
          and regulatory charges will be levied at actuals. Brokerage is also
          charged on expired, exercised, and assigned options contracts. Free
          investments are available only for retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted-off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>

      <div className="h-16"></div>
    </section>
  );
};

export default PricePage;
