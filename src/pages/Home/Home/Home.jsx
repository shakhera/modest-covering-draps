import React from "react";
import Banner from "../Banner/Banner";
import PopularProduct from "../PopularProduct/PopularProduct";
import Category from "../Category/Category";
import Bannar from "../Banner/Bannar";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      {/* <Banner></Banner> */}
      <Category></Category>
      <PopularProduct></PopularProduct>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
