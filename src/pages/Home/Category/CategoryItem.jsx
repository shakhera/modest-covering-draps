import React from "react";
import "./category.css";

const CategoryItem = ({ item }) => {
  const { category, img1, img2, img3 } = item;
  return (
    <div className="w-64 mb-4">
      <div className="stack w-64 h-72 relative">
        <img
          src={img1}
          className="rounded absolute top-0 left-0 h-44"
          style={{ transform: "rotate(-25deg)" }} // Adjust the rotation angle as needed
        />
        <img
          src={img2}
          className="rounded absolute top-2 left-2 h-44 mt-28"
          style={{ transform: "rotate(0deg)" }} // No rotation for the middle image
        />
        {/* <img
      src={img3}
      className="rounded absolute top-4 left-4 h-44 ml-32"
      style={{ transform: "rotate(60deg)" }} // Adjust the rotation angle as needed
    /> */}
      </div>
      <p className="text-center text-xl font-bold mt-2 truncate bg-white bg-opacity-75 px-2 py-1 mx-4 rounded-lg shadow-lg">
        {category}
      </p>
    </div>
  );
};

export default CategoryItem;
