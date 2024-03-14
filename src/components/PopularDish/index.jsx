import React from "react";
import CustomButton from "../Button";
import { useNavigate } from "react-router-dom";

const PopularDishSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex  md:flex-row flex-col gap-2 justify-between  mx-auto w-full p-11 bg-green-50  ">
        <div className="md:w-[40%] w-full md:ml-14   ">
          <img src="/popularDish.png" />
        </div>
        <div className=" md:w-[50%] w-full mt-16 ">
          <p className="text-5xl text-gray-900 font-semibold">
            Our Most Popular
          </p>
          <p className="text-5xl text-red-500 font-semibold mt-4">Dish.</p>
          <p className="text-2xl mt-6 text-zinc-600 w-[85%] mb-10">
            This dish is full of flavor and nutrition! Quinoa is a complete
            protein, providing all the essential amino acids your body needs,
            and is also a good source of fiber.
          </p>
          <div className="flex gap-4">
            <CustomButton
              color="red"
              shape="round"
              size="4xl"
              onClick={() => {
                navigate("/menu");
              }}
            >
              Order Now
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDishSection;
