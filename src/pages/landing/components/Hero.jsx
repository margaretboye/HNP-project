import React, { useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import HeroImage1 from "../../../assets/images/herbicide.jpg";
import HeroImage2 from "../../../assets/images/maize-farm.jpg";
import HeroImage3 from "../../../assets/images/hero-image2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../../App.css";
// import required modules
import { Navigation } from "swiper/modules";
import HeroSlider from "../../../components/HeroSlider";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <HeroSlider HeroImage={HeroImage1} alt={"a man spraying a farm"} />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlider HeroImage={HeroImage2} alt={"maize farm"} />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlider HeroImage={HeroImage3} alt={"tractor"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
