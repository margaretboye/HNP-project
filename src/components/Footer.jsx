import React from "react";
import HNPLogo from "../assets/logos/logo.png";
import K from "../constants";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Example social icons

const Footer = () => {
  // Example list of distributors

  return (
    <footer className="bg-deep-green text-white py-10 px-4 sm:px-8" id="footer">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start gap-4 pt-1">
          <p className="text-sm">
            Empowering farmers with sustainable and effective agrochemical
            solutions for improved crop yields and farming efficiency.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-[#f2cb00] transition-200" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-[#f2cb00] transition-200" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="text-2xl hover:text-[#f2cb00] transition-200" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl hover:text-[#f2cb00] transition-200" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Footer Navigation" className="flex flex-col  gap-4 ">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {K.NAVLINKS.map((link, index) => (
              <li key={index} className="">
                <a
                  className="flex items-center gap-2 text-sm font-medium hover:underline hover:underline-offset-4 hover:[text-decoration-thickness:2px] hover:[text-decoration-color:#f2cb00] transition-all duration-200"
                  href={link.id}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Us Section */}

        {/* Distributors Section */}
        <div className="flex flex-col gap-4 ">
          <h3 className="text-lg font-semibold mb-2">Our Distributors</h3>
          <ul className="flex flex-col gap-2">
            {K.DISTRIBUTORS.map((distributor, index) => (
              <li key={index} className="text-sm">
                <span className="font-medium">{distributor.name}</span> -
                {distributor.location}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} HNP Agro Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
