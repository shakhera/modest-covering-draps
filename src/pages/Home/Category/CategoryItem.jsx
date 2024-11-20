import React from "react";
import "./category.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  const { category, img1, img2, img3 } = item;
  return (
    <>
      <div className="w-32 md:w-48 max-w-xs lg:max-w-md mx-auto ">
        <div className="stack h-44 md:h-72 relative">
          <img
            src={img1}
            alt={category}
            className="hidden md:block absolute top-0 left-0 h-44 hover:scale-105 duration-500"
            style={{ transform: "rotate(-15deg)" }}
          />
          <img
            src={img2}
            alt={category}
            className="absolute top-2 left-0 h-44 md:mt-28 hover:scale-105 duration-500"
          />
        </div>

        <Link
          to={`/shop`}
          className=" my-4 flex items-center justify-center truncate"
        >
          {category}
        </Link>
      </div>
    </>
  );
};

export default CategoryItem;
