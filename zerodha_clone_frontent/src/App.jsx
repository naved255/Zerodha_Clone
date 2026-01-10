import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./landing/home/HomePage";
import Singup from "./landing/Singup/Singup";
import AboutPage from "./landing/about/AboutPage";
import ProductPage from "./landing/product/ProductPage";
import PricePage from "./landing/pricing/PricePage";
import SupportPage from "./landing/support/SupportPage";
import NotFound from "./NotFound";


const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signup" element={<Singup/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/pricing" element={<PricePage/>} />
          <Route path="/support" element={<SupportPage/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
