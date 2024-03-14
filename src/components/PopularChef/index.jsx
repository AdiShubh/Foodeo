import React from "react";
import CustomButton from "../Button";
import { chefs } from "./../../Data/Contants.jsx";
import { toast } from "react-toastify";

const PopularChef = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 items-center justify-start w-full p-2 mb-6 ">
        <p className="!font-opensans text-center text-5xl m-4">
          Our Popular Chef
        </p>
        <div className="flex flex-row w-[90%] gap-10 justify-center  items-center mt-6 ">
          {chefs.map((chef, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-[43px] w-[25%] justify-start items-center"
              >
                <div className="flex justify-center bg-gray-900/40 rounded-[50px] ">
                  <img
                    src={chef.image}
                    alt="firstchefimage"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[50px]"
                  />
                </div>
                <p className="text-3xl">{chef.name}</p>
                <p className="text-2xl text-gray-500">{chef.designation}</p>
              </div>
            );
          })}
        </div>

        <CustomButton
          color="red"
          shape="round"
          size="4xl"
          onClick={() =>
            toast.info("Feature under development. Currently unavailable")
          }
        >
          View All
        </CustomButton>
      </div>
    </div>
  );
};

export default PopularChef;
