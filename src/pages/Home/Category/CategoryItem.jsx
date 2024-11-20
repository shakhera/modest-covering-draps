import React from "react";
import "./category.css";

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
        <p className="text-center text-lg md:text-xl font-bold mt-2 truncate bg-white bg-opacity-75 px-3 py-2 shadow-lg">
          {category}
        </p>
      </div>
    </>
  );
};

export default CategoryItem;
