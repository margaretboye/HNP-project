import React, { useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import HeroImage1 from "../../../assets/images/hero-image1.jpg";
import HeroImage2 from "../../../assets/images/hero-image3.jpg";
import HeroImage3 from "../../../assets/images/maize-farm.jpg";
import NavbarDivider from "../../../assets/images/divider-1.webp";
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
    <section className="relative " id="home">
      <Navbar />
      <div className="absolute ">
        <img src={NavbarDivider} alt="" />
      </div>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <HeroSlider HeroImage={HeroImage1} alt={"maize farm"} />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlider HeroImage={HeroImage2} alt={"maize farm"} />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlider HeroImage={HeroImage3} alt={"tractor"} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
