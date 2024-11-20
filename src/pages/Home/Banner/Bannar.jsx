import React from "react";
import banner3 from "../../../assets/images/banner/3.jpg";
import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <section className="">
      <div className="relative overflow-hidden ">
        <img
          src={banner3}
          alt="Banner"
          className="object-cover w-full h-[300px] md:h-[540px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Don't Miss Out!</h1>
          <p className="text-lg mb-6 max-w-lg text-center">
            Discover amazing deals on your favorite products
          </p>
          <div className="flex space-x-4">
            <Link to="/shop">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded">
                Shop Now
              </button>
            </Link>
            <button className="bg-transparent border border-white hover:border-red-500 text-white font-bold py-3 px-6 rounded">
              Learn More
            </button>
          </div>
          <p className="mt-4 text-sm">Limited time offer</p>
          <p className="mt-2 text-xs">
            Visit our website for more deals and discounts
          </p>
          <p className="text-xs">www.yourwebsite.com</p>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
