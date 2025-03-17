import React, { useState } from "react";
import Logo from "../assets/logos/hye-ne-preko-logo.png";
import K from "../constants";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="relative bg-white shadow-md">
      <section className="flex justify-between items-center px-4 py-3 z-50">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-16" loading="lazy" />
        </div>

        {/* HAMBURGER MENU (Visible on small screens) */}
        <div
          className="sm:hidden text-black cursor-pointer"
          onClick={() => setShowMobileNav(true)}
        >
          <FiMenu size={30} />
        </div>

        {/* DESKTOP NAVIGATION (Hidden on small screens) */}
        <nav className="hidden sm:flex items-center gap-5">
          <ul className="flex gap-x-10">
            {K.NAVLINKS.map((link, index) => (
              <li key={index} className="py-3 mx-4">
                <a
                  className="flex items-center gap-2 text-[18px] font-medium hover:underline hover:underline-offset-4 hover:[text-decoration-thickness:2px] hover:[text-decoration-color:#38a030]"
                  href={link.id}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CALL SUPPORT BUTTON (Only on larger screens) */}
        <div className="hidden md:flex items-center gap-5">
          <span className="bg-mustard-yellow p-4 rounded-full inline-flex items-center">
            <FaPhoneAlt fill="white" />
          </span>

          <div>
            <p className="text-green-600">Call Support Today</p>
            <a
              href="#"
              className="flex items-center gap-2 font-medium text-[20px]"
            >
              (233) 5554-66798
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE NAVIGATION (Overlay Menu) */}
      {showMobileNav && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center">
          {/* CLOSE BUTTON */}
          <IoIosClose
            size={50}
            className="absolute top-5 right-5 text-white cursor-pointer"
            onClick={() => setShowMobileNav(false)}
          />

          {/* MOBILE LINKS */}
          <nav className="bg-white p-6 rounded-xl shadow-lg w-[80%] text-center">
            <ul className="flex flex-col gap-5">
              {K.NAVLINKS.map((link, index) => (
                <li key={index} className="border-b pb-2">
                  <a
                    className="text-xl font-medium text-black"
                    href={link.id}
                    onClick={() => setShowMobileNav(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
