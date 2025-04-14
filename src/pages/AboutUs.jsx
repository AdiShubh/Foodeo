import React from "react";

import CustomButton from "../components/Button";

const AboutUs = () => {
  return (
    <>
      {/* First Section - About the Restaurant */}
      <section
        className="flex flex-col md:flex-row gap-2 w-[85%] mx-auto my-28"
        aria-labelledby="about-restaurant"
      >
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <figure className="w-[68%]  bg-gray-200 rounded-full p-8">
            <div className="bg-gray-300 p-8 rounded-full">
              <img
                src="/img004.png"
                alt="Inside view of our restaurant showcasing the ambiance"
                className="w-96 rounded-full object-cover"
              />
            </div>
          </figure>
        </div>

        <article className="w-full md:w-1/2 px-20">
          <h1
            id="about-restaurant"
            className="text-6xl font-semibold leading-normal"
          >
            About Our <br />
            <span className="text-red-600">Restaurant</span>
          </h1>
          <p className="text-2xl text-gray-600 my-4 leading-relaxed">
            This dish is full of flavor and nutrition! Quinoa is a complete
            protein, providing all the essential amino acids your body needs,
            and is also a good source of fiber.
          </p>
          <CustomButton color="red" shape="round" size="4xl">
            Order Now
          </CustomButton>
        </article>
      </section>

      {/* Second Section - Story Behind the Restaurant */}
      <section
        className="flex flex-col md:flex-row gap-2 w-[85%] mx-auto my-28"
        aria-labelledby="restaurant-story"
      >
        <article className="w-full md:w-1/2 p-20">
          <h2 id="restaurant-story" className="sr-only">
            Our Story
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </article>

        <div className="w-full md:w-1/2 flex items-center justify-center  ">
          <div className="w-[68%]  bg-gray-200 rounded-full p-8 ">
            <div className="bg-gray-300 p-8 rounded-full">
              <img
                src="/img005.png"
                alt="A glimpse of our signature dishes"
                className="w-96 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Owner Information */}
      <section
        className="flex flex-col md:flex-row gap-1 w-[85%] mx-auto my-24"
        aria-labelledby="owner-info"
      >
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <figure>
            <img
              src="/img006.png"
              alt="Chef Ismail Marzuki preparing a dish"
              className="w-[65%]"
            />
          </figure>
        </div>

        <article className="w-full md:w-1/2 p-10">
          <h2 id="owner-info" className="text-6xl font-semibold">
            <span className="text-red-600">Owner</span> & Executive Chef
          </h2>
          <h3 className="text-4xl mt-4 mb-10">Ismail Marzuki</h3>

          {/* Accessible Quote Block */}
          <blockquote className="text-3xl text-gray-600 leading-relaxed border-l-4 border-red-600 pl-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </blockquote>
        </article>
      </section>
    </>
  );
};

export default AboutUs;
