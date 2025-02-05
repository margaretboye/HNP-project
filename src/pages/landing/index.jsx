import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Resources from "./components/Resources";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Products />
      <Resources />
      <Contact />
    </div>
  );
};

export default LandingPage;
