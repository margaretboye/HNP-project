import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { TiTick } from "react-icons/ti";

const AboutCards = ({ heading, subText }) => {
  return (
    <div className="flex items-center justify-center gap-7 ">
      <span className="bg-deep-green rounded-full p-1 inline-block">
        <TiTick fill="#ffffff" size={20} />
      </span>

      <div>
        <h3 className="font-bold text-lg">{heading}</h3>
        <p className="text-sm text-gray-600 mt-2">{subText}</p>
      </div>
    </div>
  );
};

export default AboutCards;
