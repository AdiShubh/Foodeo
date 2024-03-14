import React from "react";
import Navbar from "../Navbar";
import CustomButton from "../Button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" p-2 bg-gradient-to-br from-[#f9dddc] to-[#fafafa]">
      <Navbar />
      <div className=" flex md:flex-row flex-col  gap-2 justify-between  mx-auto w-[80%]  ">
        <div className=" md:w-[50%] w-full mt-16 ">
          <p className="text-7xl   text-gray-900 md:font-semibold w-full mr-1">
            Best Restaurant
          </p>
          <p className="text-7xl  text-gray-900 md:font-semibold mt-4">
            In{" "}
            <span className="text-red-500 text-7xl   md:font-semibold">
              Town.
            </span>
          </p>
          <p className="md:text-2xl  text-xl mt-6 text-zinc-600 w-[85%] mb-10">
            We provide best food in town. We provide home delievery and dine in
            services
          </p>
          <div className="flex gap-4">
            <CustomButton
              color="red"
              shape="round"
              md:size="2xl"
              size="xl"
              className="whitespace-nowrap"
              onClick={() => navigate("/orderonline")}
            >
              Order Now
            </CustomButton>

            <CustomButton
              color="light_red"
              md:size="2xl"
              size="xl"
              shape="round"
              onClick={() => navigate("/reservation")}
            >
              Reservation
            </CustomButton>
          </div>
        </div>
        <div className=" md:w-[50%] w-full pt-8 ">
          <img src="/headerImage.png" height={"200px"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
