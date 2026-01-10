import React from "react";
import AnimatedPart from "./AnimatedPart";

const LinkSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4">

        <AnimatedPart
          title="Account opening"
          links={[
            { link: "", data: "Resident individual" },
            { link: "", data: "Minor" },
            { link: "", data: "Non Resident Indian (NRI)" },
            { link: "", data: "Company, Partnership, HUF and LLP" },
            { link: "", data: "Glossary" },
          ]}
        />

        <AnimatedPart
          title="Your Zerodha Account"
          links={[
            { link: "", data: "Your Profile" },
            { link: "", data: "Account modification" },
            { link: "", data: "Client Master Report (CMR) and DP" },
            { link: "", data: "Nomination" },
            { link: "", data: "Transfer and conversion of securities" },
          ]}
        />

        <AnimatedPart
          title="Kite"
          links={[
            { link: "", data: "IPO" },
            { link: "", data: "Trading FAQs" },
            { link: "", data: "MTF and Margins" },
            { link: "", data: "Charts and orders" },
            { link: "", data: "Alerts and Nudges" },
            { link: "", data: "General" },
          ]}
        />

        <AnimatedPart
          title="Funds"
          links={[
            { link: "", data: "Add money" },
            { link: "", data: "Withdraw money" },
            { link: "", data: "Add bank accounts" },
            { link: "", data: "eMandates" },
          ]}
        />

        <AnimatedPart
          title="Console"
          links={[
            { link: "", data: "Portfolio" },
            { link: "", data: "Corporate actions" },
            { link: "", data: "Funds statement" },
            { link: "", data: "Reports" },
            { link: "", data: "Profile" },
            { link: "", data: "Segments" },
          ]}
        />

        <AnimatedPart
          title="Coin"
          links={[
            { link: "", data: "Mutual funds" },
            { link: "", data: "National Pension Scheme" },
            { link: "", data: "Features on Coin" },
            { link: "", data: "Payments and Orders" },
            { link: "", data: "General" },
          ]}
        />

      </div>
    </section>
  );
};

export default LinkSection;
