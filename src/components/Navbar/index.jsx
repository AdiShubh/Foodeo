import React from "react";
import CustomButton from "../Button";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  mx-28 my-8 ">
      <div className="text-4xl">
        Fo<span className="text-red-500">o</span>de
        <span className="text-red-500">o</span>
      </div>
      <div>
        <ul className="flex gap-8 text-gray-600 text-lg">
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Order Online</li>
          <li>Reservation</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="flex gap-8">
        <CustomButton shape="circle" color="cart_button">
          <CiShoppingCart size={30} />
        </CustomButton>
        <CustomButton color="red" shape="round" size="xl">
          Log in
        </CustomButton>
      </div>
    </div>
  );
};

export default Navbar;
