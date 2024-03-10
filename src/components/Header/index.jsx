import React from "react";
import Navbar from "../Navbar";
import CustomButton from "../Button";

const Header = () => {
  return (
    <div className=" p-2 bg-gradient-to-br from-[#f9dddc] to-[#fafafa]">
      <Navbar />
      <div className="flex gap-2 justify-between  mx-auto w-[80%] ">
        <div className=" w-[50%] mt-16">
          <p className="text-7xl text-gray-900 font-semibold">
            Best Restaurant
          </p>
          <p className="text-7xl text-gray-900 font-semibold mt-4">
            In <span className="text-red-500 font-semibold">Town.</span>
          </p>
          <p className="text-2xl mt-6 text-zinc-600 w-[85%] mb-10">
            We provide best food in town. We provide home delievery and dine in
            services
          </p>
          <div className="flex gap-4">
            <CustomButton color="red" shape="round" size="2xl">
              Order Now
            </CustomButton>
            <CustomButton color="light_red" size="2xl" shape="round">
              Reservation
            </CustomButton>
          </div>
        </div>
        <div className="w-[50%]">
          <img src="/public/headerImage.png" height={"200px"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
