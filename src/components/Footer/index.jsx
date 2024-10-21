import React from "react";
import CustomButton from "../Button";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 p-10 md:x-14  bottom-0      w-full ">
      <div className="md:w-[80%] w-full mx-auto ">
        <div className="flex md:gap-8 gap-4">
          <div className="md:w-[32%] w-[20%] flex flex-col gap-[31px]">
            <p className="md:text-xl text-lg text-red-500 font-semibold">
              FOODEO
            </p>
            <p className="text-red-50 md:text-[18px] text-xs">
              Viverra gravida morbi egestas facilisis tortor netus non duis
              tempor.
            </p>
            <div className="flex gap-4 text-white md:text-2xl text-xl">
              <FaFacebook />
              <FaInstagramSquare />
              <FaXTwitter />
            </div>
          </div>
          <div className="flex flex-col  w-[12%]  gap-[31px] ">
            <p className="!text-red-500 md:text-xl text-lg">Page</p>
            <div className="flex flex-col items-start justify-start w-full gap-[23px] text-red-50 md:text-[16px] text-xs">
              <Link to={"/HomePage"}>
                <p>Home</p>
              </Link>
              <Link to={"/menu"}>
                <p>Menu</p>
              </Link>
              <Link to={"/orderonline"}>
                <p>Order online</p>
              </Link>
              {/* <Link to={"/homePage"}>
                <p>Catering</p>
              </Link> */}
              <Link to={"/reservation"}>
                <p>Reservation</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[14%]  gap-[35px] ">
            <p className="!text-red-500  md:text-xl text-lg">Information</p>
            <div className="md:text-[16px] text-xs flex flex-col items-start justify-start gap-6 text-red-50">
              <Link to={"/aboutus"}>
                {" "}
                <p>About us</p>
              </Link>
              <p>Testimonial</p>
              <p>Event</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:w-[26%] w-[35%] ml-8 gap-[31px] text-red-50 ">
            <p className="!text-red-500 md:text-xl text-lg">Get in touch</p>
            <div className="md:text-[16px] text-xs flex flex-col items-start justify-start w-full gap-[21px]">
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
