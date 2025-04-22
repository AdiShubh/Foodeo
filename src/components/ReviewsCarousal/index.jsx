import React from "react";
import { Reviews } from "../../Data/ChefData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 6000,
    //cssEase: "ease",
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-start   pb-24 pt-12 w-full gap-[43px] bg-gray-200">
        <p className=" text-5xl !font-opensans text-center ">
          What Our Customers Say
        </p>
        <div className="w-[55%] ">
          <Slider {...settings}>
            {Reviews.map((review, index) => {
              return (
                <div
                  key={index}
                  className="my-4 flex flex-col justify-center items-center gap-3
                        w-[45%] bg-zinc-50 rounded-3xl"
                >
                  <div className="text-center  mx-auto  py-8 text-xl w-[80%]">
                    {review.reviewText}
                  </div>
                  <div className="flex  gap-4 pb-6  mx-auto  md:w-[50%] w-[70%]">
                    <div>
                      <img
                        src={review.image}
                        alt="userImage"
                        className="rounded-[50%]   h-28 "
                      />
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <div className="md:text-xl    font-semibold">
                        {review.name}
                      </div>
                      <div className="text-gray-500">{review.designation}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
