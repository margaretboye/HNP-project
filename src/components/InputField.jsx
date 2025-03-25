import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <label className="w-full">
      <input
        className="rounded-[25.6px] px-4 md:px-6 h-12 md:h-14 py-3 md:py-4 w-full 
        bg-[#0d401c0d] border border-transparent
        placeholder-[#072010] 
        hover:border-black hover:border-solid
        focus:bg-white focus:border-black focus:border-solid
        transition-all duration-200"
        type={type}
        placeholder={placeholder}
        maxLength="400"
        required
      />
    </label>
  );
};

export default InputField;
