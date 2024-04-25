import React from "react";
import Banner from "../Banner/Banner";
import PopularProduct from "../PopularProduct/PopularProduct";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../../Contact/Contact";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularProduct></PopularProduct>
      {/* <Category></Category> */}
      <AboutUs></AboutUs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
