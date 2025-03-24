import React from "react";
import AboutImage from "../../../assets/images/local-farmer-small.jpg";
import AboutCards from "../../../components/AboutCards";
import PixelShape from "../../../assets/images/pxl-heading-shape.webp";
import { GoDash } from "react-icons/go";

const AboutUs = () => {
  return (
    <article className="max-w-7xl mx-auto pt-28 px-4 sm:px-8" id="about">
      {/* Flex Container for Image and Text Section */}
      <section className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center min-h-[400px] overflow-hidden">
          <img
            src={AboutImage}
            alt="Local Farmer"
            className="rounded-3xl w-full max-w-[500px] h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <section className="w-full md:w-1/2 flex flex-col">
          {/* Page Title */}
          <div className="md:mx-10">
            <header className="">
              <h3 className="text-deep-green font-medium mb-4 inline-flex items-center">
                <GoDash fill="#38a030" size={20} />
                Why Choose Us
                <GoDash fill="#38a030" size={20} />
              </h3>
              <h2 className="md:text-[45px] text-3xl font-bold mb-4">
                Growing Ghana’s Farms, One Organic Solution at a Time
              </h2>
              <div className="my-8">
                <img src={PixelShape} alt="" width={81} height={15} />
              </div>
            </header>

            <p className="text-gray-600 mt-4 mb-7">
              At Hye Ne Preko Enterprise (HNP), we are committed to providing
              affordable, high-quality, and fully organic agrochemical products
              that increase crop yields, reduce pests, and improve farming
              results.
            </p>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col sm:flex-row gap-7">
            <div className="flex flex-col gap-10">
              <AboutCards
                heading={"Locally Made & Trusted"}
                subText={
                  "Crafted in Ghana for Ghanaian farmers, designed to suit our soil, climate, and crops."
                }
              />
              <AboutCards
                heading={"Affordable & Effective"}
                subText={
                  "High-quality organic solutions at prices farmers can afford—without compromising results."
                }
              />
            </div>
            <div className="flex flex-col gap-10">
              <AboutCards
                heading={"100% Organic"}
                subText={
                  "Chemical-free fertilizers and weedicides that nourish your crops and protect the environment."
                }
              />
              <AboutCards
                heading={"Farm & Crop Friendly"}
                subText={
                  "Designed to enhance yields while preserving soil health for future farming seasons."
                }
              />
            </div>
          </div>
        </section>
      </section>
    </article>
  );
};

export default AboutUs;
