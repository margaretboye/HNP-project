import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Button = ({ type, action }) => {
  return (
    <button
      type={type}
      className="flex items-center rounded-[55px] bg-[#0D401C] text-white pl-9 py-2.5 text-[16px] font-medium"
    >
      <span className="leading-[1.56] text-base font-medium">{action}</span>
      <p className="ml-8 rounded-full bg-mustard-yellow text-forest w-11 h-11 flex justify-center items-center mr-2">
        <IoIosArrowForward />
      </p>
    </button>
  );
};

export default Button;
