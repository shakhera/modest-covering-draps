import React from "react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const ProductCard = ({ product }) => {
  const { img, name, price, seller, ratings, id } = product;

  return (
    <div className="">
      <div className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-20 mx-auto bg-white">
        <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
          {/* <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
            <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">
              30% off
            </button>
          </div> */}
          <img
            className="rounded-lg bg-black/40 w-full h-full"
            src={img}
            alt="card navigate ui"
          />
        </div>
        <div className="flex flex-col justify-center items-center  w-[85%] mx-auto font-semibold space-y-2">
          <h6 className="text-sm md:text-base lg:text-lg">{name}</h6>
          <p className="text-gray-600 text-xs md:text-sm font-semibold">
            Price: {price}
          </p>
          <p className="text-gray-600 text-xs md:text-sm font-semibold">
            Manufacturel : {seller}
          </p>
          <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-slate-800 text-white rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-white hover:text-black hover:border-black hover:border-2 ">
            Add to Cart
          </button>
          <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
