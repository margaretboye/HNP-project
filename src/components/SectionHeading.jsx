import React from "react";
import PixelShape from "../assets/images/pxl-heading-shape.webp";
import { GoDash } from "react-icons/go";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <header className="flex flex-col items-center justify-center">
      <h3 className="text-deep-green font-medium mb-4 inline-flex items-center">
        <GoDash fill="#38a030" size={20} />
        {heading}
        <GoDash fill="#38a030" size={20} />
      </h3>

      <h2
        className="md:text-[45px] text-3xl font-bold mb-4"
        id="contact-heading"
      >
        {subHeading}
      </h2>

      {/* <p className="mb-7 text-base">{subHeading}</p> */}
      <div className="my-8">
        <img src={PixelShape} alt="" width={81} height={15} />
      </div>
    </header>
  );
};

export default SectionHeading;
