import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import Footer from "../../components/Footer";
import TagLineSection from "../../components/TagLineSection";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <TagLineSection />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
