import React from "react";
import Underline from "../assets/images/underline.webp";
import Leaf from "../assets/images/two-leaves.webp";
import "../App.css";
import { IoIosArrowForward } from "react-icons/io";

const HeroSlider = ({ HeroImage, alt }) => {
  return (
    <div>
      <div className="relative">
        <img src={HeroImage} alt={alt} />
        <div className="divider"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 hero-overlay">
        <div className="flex">
          <img
            src={Leaf}
            alt=""
            className="w-12 h-6 max-w-[30px] max-h-[20px] mr-3"
            loading="lazy"
          />
          <p className="text-hnp-yellow text-base">
            Better Agriculture for Better Future
          </p>
        </div>

        <h1 className="text-white text-6xl font-bold leading-[72px] mb-3">
          Hye Ne Preko <br /> Enterprise
        </h1>

        <img src={Underline} alt="" className="underline-img" />

        <p className="text-white pt-3">
          Empowering Farmers with Sustainable & Effective Agrochemical Solutions
        </p>

        {/* Button */}
        <div className="mt-10">
          <button
            type="button"
            className="flex items-center rounded-[55px] bg-white text-forest pl-9 py-2.5 text-[16px] font-medium hover:bg-deep-green hover:text-"
          >
            <span className="leading-[1.56] text-base font-medium">
              Contact Us
            </span>
            <p className="ml-8 rounded-full bg-hnp-yellow text-black w-11 h-11 flex justify-center items-center mr-2">
              <IoIosArrowForward />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
