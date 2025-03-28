import React from "react";
import Navbar from "../../../components/Navbar";
import HeroImage1 from "../../../assets/images/hero-image1.jpg";
import HeroImage2 from "../../../assets/images/hero-image3.jpg";
import HeroImage3 from "../../../assets/images/maize-farm.jpg";
import HeroImage4 from "../../../assets/images/man-spraying-field.jpg";
import NavbarDivider from "../../../assets/images/divider-1.webp";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../../../App.css";

// Import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HeroSlider from "../../../components/HeroSlider";

const Hero = () => {
  return (
    <section className="relative" id="home">
      <Navbar />
      <div className="absolute">
        <img src={NavbarDivider} alt="" />
      </div>

      <div className="relative">
        {/* Custom Navigation Buttons */}
        {/* Previous Button */}
        <div className="absolute md:left-4 top-1/2 left-2 z-10 cursor-pointer transition-all swiper-button-prev-custom group md:-w[70px] md:h-[40px]">
          <svg
            className="rotate-180 h-5 md:w-14 md:h-8 lg:w-[70px] lg:h-[40px] w-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 986.06 250.15"
            width="70"
            height="40"
          >
            <path
              className="group-hover:fill-[#f2cb00]"
              fill="#ffffff"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              strokeMiterlimit="10"
              d="M1104,159.89c-310.41-20.26-620.86-24.67-931.39.75-.2-1.38-.39-2.75-.59-4.13,2.07-.81,4.1-2.12,6.22-2.37,36.74-4.41,73.47-8.92,110.24-13,171.87-18.92,344.23-20,516.61-16.56,93.56,1.88,187.07,7.21,280.6,11,3.34.14,6.67,0,11.64,0-40.79-36.36-82.36-69-120.66-106.37l1.63-3.08c2.45,1.15,5.09,1.95,7.32,3.51q54.2,37.7,108.3,75.54c14.1,9.84,28.16,19.77,42.44,29.26,14,9.32,15.06,19.3,2.16,30.78A117.32,117.32,0,0,1,1117,180.76q-73.41,39.88-147.17,78.9a50.76,50.76,0,0,1-18.18,5.06c-2.55.27-6.9-2.78-7.73-5.43s.81-8,2.91-9.86c4.29-3.9,9.51-6.58,14.54-9.27q71.56-38.37,143.2-76.55C1104.34,162.37,1104.16,161.13,1104,159.89Z"
              transform="translate(-166.49 -19.59)"
            />
          </svg>
        </div>

        {/* Next Button */}
        <div className="absolute top-1/2 right-2 md:right-2 z-10 cursor-pointer hover:fill-[#f2cb00] transition-all swiper-button-next-custom group">
          <svg
            className="h-5 md:w-14 md:h-8 lg:w-[70px] lg:h-[40px] w-14"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 986.06 250.15"
            width="70"
            height="40"
          >
            <path
              className="group-hover:fill-[#f2cb00]"
              fill="#ffffff"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              strokeMiterlimit="10"
              d="M1104,159.89c-310.41-20.26-620.86-24.67-931.39.75-.2-1.38-.39-2.75-.59-4.13,2.07-.81,4.1-2.12,6.22-2.37,36.74-4.41,73.47-8.92,110.24-13,171.87-18.92,344.23-20,516.61-16.56,93.56,1.88,187.07,7.21,280.6,11,3.34.14,6.67,0,11.64,0-40.79-36.36-82.36-69-120.66-106.37l1.63-3.08c2.45,1.15,5.09,1.95,7.32,3.51q54.2,37.7,108.3,75.54c14.1,9.84,28.16,19.77,42.44,29.26,14,9.32,15.06,19.3,2.16,30.78A117.32,117.32,0,0,1,1117,180.76q-73.41,39.88-147.17,78.9a50.76,50.76,0,0,1-18.18,5.06c-2.55.27-6.9-2.78-7.73-5.43s.81-8,2.91-9.86c4.29-3.9,9.51-6.58,14.54-9.27q71.56-38.37,143.2-76.55C1104.34,162.37,1104.16,161.13,1104,159.89Z"
              transform="translate(-166.49 -19.59)"
            />
          </svg>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="mySwiper"
        >
          <SwiperSlide>
            <HeroSlider HeroImage={HeroImage1} alt="maize farm" />
          </SwiperSlide>

          <SwiperSlide>
            <HeroSlider HeroImage={HeroImage2} alt="maize farm" />
          </SwiperSlide>

          <SwiperSlide>
            <HeroSlider HeroImage={HeroImage3} alt="tractor" />
          </SwiperSlide>

          <SwiperSlide>
            <HeroSlider HeroImage={HeroImage4} alt="tractor" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
