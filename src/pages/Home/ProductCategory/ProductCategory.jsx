import React from "react";
import CategoryItem from "../Category/CategoryItem";

const ProductCategory = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap2">
        {items.map((item) => (
          <CategoryItem key={item._id} item={item}></CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
