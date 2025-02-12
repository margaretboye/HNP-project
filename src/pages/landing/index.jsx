import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Products />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
