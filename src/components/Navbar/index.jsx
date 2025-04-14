import React, { useState } from "react";
import CustomButton from "../Button";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import useCartStore from "../../Store/CartStore";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Navbar = () => {
  const { cartItems } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  //console.log(isOpen);
  const handleNav = () => {
    setIsOpen(!isOpen);
    //console.log(isOpen);
  };
  const activeState = ({ isActive }) => {
    return isActive
      ? isOpen
        ? "text-red-600 font-bold bg-white p-2 rounded-md"
        : "text-red-500"
      : isOpen
      ? "text-white"
      : "text-gray-600";
  };

  return (
    <div className="flex justify-between md:gap-1 items-center  lg:mx-28   mx-5 my-8 ">
      <div className=" md:hidden" onClick={handleNav}>
        <FaBars size={20} />
      </div>
      <Link to="/HomePage">
        <div className="flex gap-2">
          <img src="/logo.png" className="w-[50px] h-[50px] rounded-full" />
          <div className="md:text-4xl text-3xl  ">
            Fo<span className="text-red-500">o</span>de
            <span className="text-red-500">o</span>
          </div>
        </div>
      </Link>

      <div>
        <ul
          className={`${
            isOpen
              ? "flex flex-col gap-2 absolute top-[82px] left-0 bg-red-500/80 w-full text-white"
              : "hidden"
          } md:flex md:flex-row md:gap-2  lg:gap-8     md:text-gray-600 text-xl md:static absolute md:bg-transparent  items-center md:p-8 cursor-pointer`}
          onClick={() => setIsOpen(false)}
        >
          <li className="hover:text-red-500">
            <NavLink to="/HomePage" className={activeState}>
              Home
            </NavLink>
          </li>

          <li className="hover:text-red-500">
            <NavLink to="/menu" className={activeState}>
              Menu
            </NavLink>
          </li>

          <li className="hover:text-red-500 whitespace-nowrap">
            <NavLink to="/aboutus" className={activeState}>
              About Us
            </NavLink>
          </li>
          <li className="hover:text-red-500 whitespace-nowrap">
            <NavLink to="/orderonline" className={activeState}>
              Order Online
            </NavLink>
          </li>
          <li className="hover:text-red-500">
            <NavLink to="/reservation" className={activeState}>
              Reservation
            </NavLink>
          </li>
          <li className="hover:text-red-500 whitespace-nowrap">
            <NavLink to="/contact" className={activeState}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-8 ">
        <CustomButton
          shape="circle"
          color="cart_button"
          md:size="xl"
          size="md"
          className="relative"
          onClick={() => navigate("/cart")}
        >
          <CiShoppingCart md:size={30} size={25} />
          <span className="absolute -top-1 -right-3 px-2.5 py-0.5 bg-yellow-500 rounded-full text-xs">
            {cartItems.length}
          </span>
        </CustomButton>
         <CustomButton
          color="red"
          shape="round"
          md:size="xl"
          size="lg"
          className="whitespace-nowrap"
          onClick={() =>
            toast.info("Feature under development. Currently unavailable")
          }
        >
          Log in
        </CustomButton> 
        
      </div>
    </div>
  );
  // </div>className="md:gap-8 md:text-gray-600 text-lg  md:flex md:flex-row items-center p-8 hidden "
};

export default Navbar;
