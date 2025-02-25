import React from "react";
import PixelShape from "../assets/images/pxl-heading-shape.webp";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <header className="pl-3 sm:text-center">
      <h2
        className="md:text-[45px] text-3xl font-bold mb-4"
        id="contact-heading"
      >
        {heading}
      </h2>
      <p className="mb-7 text-base">{subHeading}</p>
      <img src={PixelShape} alt="" width={81} height={15} />
    </header>
  );
};

export default SectionHeading;
