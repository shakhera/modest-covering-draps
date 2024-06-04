import React from "react";
import Banner from "../Banner/Banner";
import PopularProduct from "../PopularProduct/PopularProduct";
import AboutUs from "../AboutUs/AboutUs";
import Category from "../Category/Category";
import Bannar from "../Banner/Bannar";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      {/* <Banner></Banner> */}
      <PopularProduct></PopularProduct>
      <Category></Category>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
