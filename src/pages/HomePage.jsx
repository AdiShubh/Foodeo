import React from "react";
import Navbar from "./../components/Navbar";
import Header from "../components/Header";
import PopularDishSection from "../components/PopularDish";
import Footer from "../components/Footer";
import PopularChef from "../components/PopularChef";
import ReviewsCarousel from "../components/ReviewsCarousal";
import MenuSection from "../components/MenuSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <PopularDishSection />
      <PopularChef />
      <MenuSection />
      <ReviewsCarousel />
      <Footer />
    </div>
  );
};

export default HomePage;
