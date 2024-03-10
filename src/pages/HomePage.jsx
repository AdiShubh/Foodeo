import React from "react";
import Navbar from "./../components/Navbar";
import Header from "../components/Header";
import PopularDishSection from "../components/PopularDish";
import Footer from "../components/Footer";
import PopularChef from "../components/PopularChef";

const HomePage = () => {
  return (
    <div>
      <Header />
      <PopularDishSection />
      <PopularChef />
      <Footer />
    </div>
  );
};

export default HomePage;
