import React from "react";
import CustomButton from "../Button";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900 p-10 px-14">
      <div className="w-[80%] mx-auto ">
        <div className="flex gap-8">
          <div className="w-[32%] flex flex-col gap-[31px]">
            <p className="text-xl text-red-500 font-semibold">FOODEO</p>
            <p className="text-red-50">
              Viverra gravida morbi egestas facilisis tortor netus non duis
              tempor.
            </p>
            <div className="flex gap-4 text-white text-3xl">
              <FaFacebook />
              <FaInstagramSquare />
              <FaXTwitter />
            </div>
          </div>
          <div className="flex flex-col  w-[12%]  gap-[31px] ">
            <p className="!text-red-500 text-xl">Page</p>
            <div className="flex flex-col items-start justify-start w-full gap-[23px] text-red-50">
              <p>Home</p>
              <p>Menu</p>
              <p>Order online</p>
              <p>Catering</p>
              <p>Reservation</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[14%]  gap-[35px] ">
            <p className="!text-red-500 text-xl">Information</p>
            <div className="flex flex-col items-start justify-start gap-6 text-red-50">
              <p>About us</p>
              <p>Testimonial</p>
              <p>Event</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[26%]  gap-[31px] text-red-50 ">
            <p className="!text-red-500 text-xl">Get in touch</p>
            <div className="flex flex-col items-start justify-start w-full gap-[21px]">
              <p className="!leading-[153%] ">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
              <a href="mailto:abc@example.com" target="_blank" rel="noreferrer">
                <p>abc@example.com</p>
              </a>
              <p>+123 4567 8901</p>
            </div>
          </div>
        </div>
        <p className="!text-gray-300 text-center mt-10   ">Copyright @2024</p>
      </div>
    </div>
  );
};

export default Footer;
