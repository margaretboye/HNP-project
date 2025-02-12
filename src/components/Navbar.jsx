import React from "react";
import Logo from "../assets/logos/agric-logo.svg";
import K from "../constants";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <header className=" flex justify-between items-center px-4 bg-green-600 ">
      <img
        src={Logo}
        alt="logo"
        className=" w-28 h-28 sm:max-w-full sm:max-h-11"
        loading="lazy"
      />
      <nav>
        {/* MOBILE VIEW */}
        {/* HAMBURGER */}
        <div
          className="text-white sm:hidden"
          onClick={() => {
            setShowMobileNav(!showMobileNav);
          }}
        >
          <FiMenu size={30} />
        </div>
        {/* DARK MODAL */}
        <div
          onClick={() => {
            setShowMobileNav(false);
          }}
          className={`${
            showMobileNav ? "top-0 right-0" : "-right-[100%] -top-0"
          } py-5 px-8 h-full fixed w-full z-10 bg-black/85  duration-500 sm:hidden`}
        >
          <IoIosClose
            color="white"
            size={50}
            className=" top-8 right-8 absolute "
            onClick={() => {
              setShowMobileNav(false);
            }}
          />
          {/* MAIN MOBILE LINKS */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${
              showMobileNav
                ? "top-24 right-8 delay-100"
                : "-right-full  delay-0"
            } w-[80%]  flex flex-col   gap-2 p-10 rounded-xl z-100 bg-white absolute  duration-1000 transition-all top-24 right-8`}
          >
            {K.NAVLINKS.map((link, index) => (
              <div className=" flex items-center justify-center gap-4">
                {link.icon}

                <a
                  key={index}
                  href={link.id}
                  className={`${
                    index == 4 ? "border-none" : ""
                  } border-b w-full  py-5 px-3 font-medium`}
                >
                  {link.name}
                </a>
                {/* <MdKeyboardArrowRight color="gray"/> */}
              </div>
            ))}
          </div>
        </div>
        {/* AFTER MOBILE VIEW */}
        <ul className="hidden sm:flex sm:items-start sm:gap-x-2">
          {K.NAVLINKS.map((link, index) => {
            return (
              <li key={index} className=" py-11 text-white">
                <a
                  className="px-3 flex items-center gap-3 hover:text-[#eddd5e] text-sm navlinks"
                  href={link.id}
                >
                  <GoDotFill className="text-[#eddd5e] " />
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
