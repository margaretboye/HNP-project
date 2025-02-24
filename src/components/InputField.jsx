import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <label className="w-full">
      <input
        className="rounded-[25.6px] px-4 md:px-6 h-12 md:h-14 py-3 md:py-4 w-full bg-[#0d401c0d] border-transparent placeholder-[#072010] hover:bg-white focus:bg-white hover:border-black"
        type={type}
        placeholder={placeholder}
        maxLength="400"
        required
      />
    </label>
  );
};

export default InputField;
