import React from "react";
import AboutImage from "../../../assets/images/about-image.webp";
import SectionHeading from "../../../components/SectionHeading";
import AboutCards from "../../../components/AboutCards";
import PixelShape from "../../../assets/images/pxl-heading-shape.webp";
import { GoDash } from "react-icons/go";

const AboutUs = () => {
  return (
    <article className=" pt-28">
      <section className="flex mx-8">
        <div className="inline-block">
          <img src={AboutImage} alt="" className="rounded-3xl" loading="lazy" />
        </div>

        {/* Text Section */}
        <section className="w-full md:w-1/2 pr-4 grow">
          {/* Page Title */}
          <div className=" mx-10 px-4">
            <div className="">
              <header className="">
                <h3 className="text-deep-green font-medium mb-4 inline-flex items-center">
                  <GoDash fill="#38a030" size={20} />
                  Why Choose Us
                  <GoDash fill="#38a030" size={20} />
                </h3>
                <h2
                  className="md:text-[45px] text-3xl font-bold mb-4"
                  id="contact-heading"
                >
                  Growing Ghana’s Farms, One Organic Solution at a Time
                </h2>
                {/* <p className="mb-7 text-base">{subHeading}</p> */}
                <div className="my-8">
                  <img src={PixelShape} alt="" width={81} height={15} />
                </div>
              </header>

              <p className="text-gray-600 mt-4 max-w-3xl mx-auto mb-7">
                At Hye Ne Preko Enterprise (HNP), we are committed to providing
                affordable, high-quality, and fully organic agrochemical
                products that increase crop yields, reduce pests, and improve
                farming results.
              </p>
            </div>

            {/* Cards Section */}
            <div className="flex gap-10">
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
          </div>
        </section>
      </section>
    </article>
  );
};

export default AboutUs;
