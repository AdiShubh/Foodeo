import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorkInProgress from "../components/WorkInProgress";
import CustomButton from "../components/Button";

const AboutUs = () => {
  return (
    <>
      {/* First Row */}
      <div className=" flex flex-col md:flex-row gap-2 w-[85%] mx-auto  my-28">
        <div className="w-full md:w-1/2 flex  items-center justify-center ">
          <div className=" w-[48%]h-[48%] bg-gray-200  rounded-full p-8">
            <div className="bg-gray-300 p-8 rounded-full ">
              <img
                src="/img004.png"
                alt="Your Image"
                className="w-96 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2   px-20    ">
          <p className="text-6xl font-semibold leading-normal">
            About Our <br />
            <span className="text-red-600">Restaurant</span>
          </p>
          <p className="text-2xl text-wrap text-gray-600 my-4 leading-relaxed">
            This dish is full of flavor and nutrition! Quinoa is a complete
            protein, providing all the essential amino acids your body needs,
            and is also a good source of fiber.
          </p>
          <CustomButton color="red" shape="round" size="4xl">
            Order Now
          </CustomButton>
        </div>
      </div>

      {/* Second Row */}
      <div className=" flex flex-col md:flex-row gap-2 w-[85%] mx-auto  my-28">
        <div className="w-full md:w-1/2   p-20    ">
          <p className="text-2xl text-gray-600 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex  items-center justify-center ">
          <div className=" w-[48%]h-[48%] bg-gray-200  rounded-full p-8">
            <div className="bg-gray-300 p-8 rounded-full ">
              <img
                src="/img005.png"
                alt="Your Image"
                className="w-96 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Third Row */}
      <div className=" flex flex-col md:flex-row gap-1 w-[85%] mx-auto  my-24 ">
        <div className="w-full md:w-1/2 flex  items-center justify-center  ">
          <img src="/img006.png" alt="Your Image" className="w-[65%]" />
        </div>
        <div className="w-full md:w-1/2   p-10     ">
          <p className="text-6xl font-semibold">
            <span className="text-red-600">Owner</span> & Executive Chef
          </p>
          <p className="text-4xl mt-4 mb-10">Ismail Marzuki</p>
          <p className=" text-7xl">"</p>
          <p className="text-3xl text-gray-600 leading-relaxed ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
            <br /> aliqua.
          </p>
          <p className=" text-7xl text-end ">"</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
