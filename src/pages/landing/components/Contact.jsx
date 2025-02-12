import React from "react";
import PixelShape from "../../../assets/images/pxl-heading-shape.webp";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Contact = () => {
  return (
    <section className="py-28">
      <div className="flex items-center justify-between px-3.5 max-w-7xl mx-auto">
        {/* Contact Details */}
        <aside aria-labelledby="contact-details" className="p-5">
          <div className="p-7">
            <address className="flex flex-col gap-5">
              {/* Address */}
              <p className="flex flex-row items-center gap-5">
                <span className="p-3 bg-[#0d401c] rounded-full">
                  <IoLocationOutline color="#ffffff" size={20} />
                </span>
                <p className="flex flex-col">
                  <strong>Address</strong>
                  Prinsengracht 250, 2501016 PM <br />
                  Amsterdam Netherlands
                </p>
              </p>

              {/* Contact */}
              <p className="flex flex-row items-center gap-5">
                <span className="p-3 bg-[#0d401c] rounded-full">
                  <MdOutlineContactPage color="#ffffff" size={20} />
                </span>

                <p className="flex flex-col">
                  <strong>Contact us</strong>
                  <a href="tel:+233123456789">+233 123 456 789</a>
                </p>
              </p>

              {/* Whatsapp */}
              <p className="flex flex-row items-center gap-5">
                <span className="p-3 bg-[#0d401c] rounded-full">
                  <MdOutlineWhatsapp color="#ffffff" size={20} />
                </span>

                <p className="flex flex-col">
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/233123456789">Chat with us</a>
                </p>
              </p>

              {/* Email */}
              <p className="flex flex-row items-center gap-5">
                <span className="p-3 bg-[#0d401c] rounded-full">
                  <MdOutlineMarkEmailUnread color="#ffffff" size={20} />
                </span>

                <p className="flex flex-col">
                  <strong>Email</strong>
                  <a href="mailto:info@hnp-agro.com">info@hnp-agro.com</a>
                </p>
              </p>
            </address>
          </div>
        </aside>

        {/* Contact Form */}
        <div className="w-[58.33%] box-border">
          <header className="pl-3">
            <h2 className="text-[45px] font-bold mb-4" id="contact-heading">
              Contact us Today!
            </h2>
            <p className="mb-7">
              We will reply to you within 24 hours via email. Thank you for
              contacting us.
            </p>
            <img src={PixelShape} alt="" width={81} height={15} />
          </header>

          <form action="" aria-labelledby="contact-heading" className="pr-4">
            <fieldset className="box-border mt-12 flex flex-col items-center w-full">
              <legend className="sr-only">Contact Form</legend>

              {/* Name & Email Fields */}
              <div className="flex gap-4 w-full">
                <label className="mb-4 w-full">
                  <input
                    className="rounded-[25.6px] px-6 py-4 w-full bg-[#0d401c0d] border-transparent placeholder-[#072010] hover:bg-white focus:bg-white hover:border-black"
                    type="text"
                    placeholder="Name"
                    maxLength="400"
                    required
                  />
                </label>
                <label className="w-full">
                  <input
                    className="rounded-[25.6px] px-6 py-4 w-full bg-[#0d401c0d] border-transparent placeholder-[#072010] hover:bg-white focus:bg-white hover:border-black"
                    type="email"
                    placeholder="Email"
                    maxLength="400"
                    required
                  />
                </label>
              </div>

              {/* Phone & Subject Fields */}
              <div className="flex gap-4 w-full">
                <label className="mb-4 w-full">
                  <input
                    className="rounded-[25.6px] px-6 py-4 w-full bg-[#0d401c0d] border-transparent placeholder-[#072010] hover:bg-white focus:bg-white hover:border-black"
                    type="text"
                    placeholder="Phone Number"
                    maxLength="400"
                  />
                </label>
                <label className="w-full">
                  <input
                    className="rounded-[25.6px] px-6 py-4 w-full bg-[#0d401c0d] border-transparent placeholder-[#072010] hover:bg-white focus:bg-white hover:border-black"
                    type="text"
                    placeholder="Subject"
                    maxLength="400"
                  />
                </label>
              </div>

              {/* Message Box */}
              <label className="w-full mb-7">
                <textarea
                  className="rounded-[25.6px] px-6 py-3 w-full bg-[#0d401c0d] border-transparent placeholder-[#072010] hover:bg-white focus:bg-white hover:border-black"
                  placeholder="Message..."
                  rows={10}
                ></textarea>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center rounded-[55px] bg-[#0D401C] text-white pl-9 py-2.5 text-[16px] font-medium"
              >
                <span className="leading-[1.56] text-base font-medium">
                  Send Message
                </span>
                <p className="ml-8 rounded-full bg-[#F8C32C] text-[#0d401c] w-11 h-11 flex justify-center items-center mr-2">
                  <IoIosArrowForward />
                </p>
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
