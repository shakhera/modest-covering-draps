import React from "react";
import Banner from "../Banner/Banner";
import PopularProduct from "../PopularProduct/PopularProduct";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <PopularProduct></PopularProduct>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
