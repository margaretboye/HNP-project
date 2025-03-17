import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Button = ({ type, action }) => {
  return (
    <button
      type={type}
      className="flex items-center rounded-[55px] text-white bg-deep-green text-forest pl-9 py-2.5 text-[16px] font-medium hover:bg-light-green hover:text-white hover:scale-110 transition-all duration-500 ease-in-out"
    >
      <span className="leading-[1.56] text-base font-medium ">{action}</span>
      <p className="ml-8 rounded-full bg-white text-black w-11 h-11 flex justify-center items-center mr-2">
        <IoIosArrowForward />
      </p>
    </button>
  );
};

export default Button;
