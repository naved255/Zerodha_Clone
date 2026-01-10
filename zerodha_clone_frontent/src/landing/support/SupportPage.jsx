import React from "react";
import CreateTicket from "./CreateTicket";
import Links from "./Links";

const SupportPage = () => {
  return (
    <div className="w-full">
      {/* Top Search / Ticket Section */}
      <CreateTicket />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Links />
      </div>
    </div>
  );
};

export default SupportPage;
