import React, { useEffect } from "react";
import Underline from "../assets/images/underline.webp";
import Leaf from "../assets/images/two-leaves.webp";
import "../App.css";
import { IoIosArrowForward } from "react-icons/io";

const HeroSlider = ({ HeroImage, alt }) => {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Add animation classes on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const overlay = document.querySelector(".hero-overlay");
      if (overlay) overlay.classList.add("animate-content");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="relative">
        <img src={HeroImage} alt={alt} className="fade-in-image" />
        <div className="divider"></div>
      </div>

      {/* Overlay with animation-ready classes */}
      <div className="absolute inset-0 bg-black/40 hero-overlay">
        <div className="flex animation-delay-100">
          <img
            src={Leaf}
            alt=""
            className="w-12 h-6 max-w-[30px] max-h-[20px] mr-3 animate-float"
            loading="lazy"
          />
          <p className="text-hnp-yellow text-base slide-in-from-left">
            Better Agriculture for Better Future
          </p>
        </div>

        <h1 className="text-white sm:text-5xl font-bold sm:leading-[72px] mb-3 text-3xl leading-11">
          Organic Agrochemicals for <br />
          Healthier Crops & Better <br /> Harvest
        </h1>

        <img src={Underline} alt="" className="underline-img scale-in" />

        <p className="text-white pt-3 fade-in-text">
          Empowering Farmers with Sustainable & Effective Agrochemical Solutions
        </p>

        {/* Button */}
        <div className="mt-10 slide-in-from-right">
          <button
            type="button"
            className="flex items-center rounded-[55px] bg-white text-forest pl-9 py-2.5 text-[16px] font-medium hover:bg-deep-green hover:text-white hover:scale-110 transition-all duration-500 ease-in-out animate-pulse-once"
            onClick={handleClick}
          >
            <span className="leading-[1.56] text-base font-medium">
              Contact Us
            </span>
            <p className="ml-8 rounded-full bg-hnp-yellow text-black w-11 h-11 flex justify-center items-center mr-2 hover:translate-x-1 transition-transform duration-300">
              <IoIosArrowForward />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
