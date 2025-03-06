import React from "react";
import PixelShape from "../../../assets/images/pxl-heading-shape.webp";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";

const Contact = () => {
  return (
    <section className="py-28" id="contact">
      <div className="flex md:flex-row flex-col md:items-center flex-wrap justify-between px-4 md:max-w-7xl mx-auto">
        {/* Contact Details */}
        <aside aria-labelledby="contact-details" className="md:p-5 mb-9">
          <div className="p-7">
            <address className="flex flex-col gap-5">
              {/* Address */}
              <p className="flex flex-row items-center gap-5">
                <span className="p-3 bg-deep-green rounded-full">
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
                <span className="p-3 bg-deep-green rounded-full">
                  <MdOutlineContactPage color="#ffffff" size={20} />
                </span>

                <p className="flex flex-col">
                  <strong>Contact us</strong>
                  <a href="tel:+233123456789">+233 123 456 789</a>
                </p>
              </p>

              {/* Whatsapp */}
              <p className="flex flex-row items-center gap-5">
                <span className="p-3 bg-deep-green rounded-full">
                  <MdOutlineWhatsapp color="#ffffff" size={20} />
                </span>

                <p className="flex flex-col">
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/233123456789">Chat with us</a>
                </p>
              </p>

              {/* Email */}
              <p className="flex flex-row items-center gap-5">
                <span className="p-3 bg-deep-green rounded-full">
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
        <div className="md:w-[58.33%] box-border">
          <header className="pl-3">
            <h2
              className="md:text-[45px] text-3xl font-bold mb-4"
              id="contact-heading"
            >
              Contact us Today!
            </h2>
            <p className="mb-7 text-base">
              We will reply to you within 24 hours via email. Thank you for
              contacting us.
            </p>
            <img src={PixelShape} alt="" width={81} height={15} />
          </header>

          <form action="" aria-labelledby="contact-heading" className="md:pr-4">
            <fieldset className="box-border mt-12 flex flex-col items-center w-full gap-4">
              <legend className="sr-only">Contact Form</legend>

              {/* Name & Email Fields */}
              <div className="flex md:flex-row flex-col gap-4 w-full">
                <InputField type="text" placeholder="Name" />
                <InputField type="email" placeholder="Email" />
              </div>

              {/* Phone & Subject Fields */}
              <div className="flex md:flex-row flex-col gap-4 w-full">
                <InputField type="text" placeholder="Phone" />
                <InputField type="text" placeholder="Subject" />
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
              <Button type={"submit"} action={"Send Message"} />
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
