import React from "react";
import Underline from "../../../assets/images/underline.webp";
import AboutImage from "../../../assets/images/greenhouse.jpg";

const AboutUs = () => {
  return (
    <>
      <article className="py-[120px]">
        <div>
          <h2 className="text-[45px] font-bold mb-1 text-heading text-center">
            About Us
          </h2>
          <div className="">
            <img src={Underline} alt="" className="underline-img" />
          </div>
        </div>
        {/* <div className="flex ">
          <div
            className="bg-fixed bg-cover "
            style={{
              backgroundImage: `url(${AboutImage})`,
            }}
          ></div>
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Our Impact on Agriculture
            </h3>
            <p className="text-gray-600">
              🌱 **Increased Crop Yields:** 85% of farmers reported better
              harvests. <br />
              🚜 **Farming Efficiency:** 70% reduction in crop loss using HNP
              products. <br />
              💬 **Customer Trust:** "HNP transformed our farm—higher yields,
              better soil!" - Happy Farmer
            </p>
          </div>
        </div> */}

        <div className="flex ">
          <div className="w-1/2 relative h-1/2">
            <img src={AboutImage} alt="" className="" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Our Impact on Agriculture
            </h3>
            <p className="text-gray-600">
              🌱 <strong>Increased Crop Yields:</strong> 85% of farmers reported
              better harvests. <br />
              🚜 <strong>Farming Efficiency:</strong> 70% reduction in crop loss
              using HNP products. <br />
              💬 <strong>Customer Trust:</strong> "HNP transformed our
              farm—higher yields, better soil!" - Happy Farmer
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default AboutUs;
