import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 px-4 py-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo */}
        <div className="flex flex-col gap-2 md:w-1/4">
          <img src="images/logo.svg" alt="logo" className="w-36" />
          <p className="text-gray-500 text-sm">
            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-2 md:w-1/5">
          <h5 className="font-semibold">Company</h5>
          <Link className="hover:underline text-gray-800 text-sm" to="#">About</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Products</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Pricing</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Referral programme</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Careers</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Zerodha.tect</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Press & media</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Zerodha cares (CSR)</Link>
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-2 md:w-1/5">
          <h5 className="font-semibold">Support</h5>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Contact</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Support portal</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Z-Connect blog</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">List of charges</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Downloads & resources</Link>
        </div>

        {/* Account Links */}
        <div className="flex flex-col gap-2 md:w-1/5">
          <h5 className="font-semibold">Account</h5>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Open an account</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">Fund transfer</Link>
          <Link className="hover:underline text-gray-800 text-sm" to="#">60 day challenge</Link>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* Legal / Disclaimer Section */}
      <div className="max-w-7xl mx-auto flex flex-col gap-4 text-gray-500 text-xs leading-relaxed">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
        </p>
        <p>
          <Link className="hover:underline" to="#">Smart Online Dispute Resolution</Link> | <Link className="hover:underline" to="#">Grievances Redressal Mechanism</Link>
        </p>
        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p>
          Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3 Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </p>
        <p>
          India's largest broker based on networth as per NSE. <Link className="hover:underline" to="#">NSE broker factsheet</Link>
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <Link className="hover:underline" to="#">create a ticket here.</Link>
        </p>
        <p>
          *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
