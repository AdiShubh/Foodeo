import React from "react";
import CustomButton from "../Button";

const PopularDishSection = () => {
  return (
    <div>
      <div className="flex gap-2 justify-between  mx-auto w-full p-11 bg-green-50  ">
        <div className="w-[40%] ml-14   ">
          <img src="/public/popularDish.png" />
        </div>
        <div className=" w-[50%] mt-16 ">
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
            <CustomButton color="red" shape="round" size="4xl">
              Order Now
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDishSection;
