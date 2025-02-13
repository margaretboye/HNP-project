import React from "react";
import Underline from "../assets/images/underline.webp";

const HeroSlider = ({ HeroImage, alt }) => {
  return (
    <div>
      <img src={HeroImage} alt={alt} />
      <div className="absolute inset-0 bg-black/40 hero-overlay">
        <h2 className="text-white text-6xl font-bold text-center">
          Hye Ne Preko Enterprise
        </h2>

        <div className="">
          <img src={Underline} alt="" className="underline-img" />
        </div>

        <p className="text-white">
          Empowering Farmers with Sustainable & Effective Agrochemical Solutions
        </p>
      </div>
    </div>
  );
};

export default HeroSlider;
