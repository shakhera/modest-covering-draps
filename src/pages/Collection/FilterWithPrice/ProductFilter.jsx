import React, { useState } from "react";

const ProductFilter = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({ minPrice: priceRange[0], maxPrice: priceRange[1] });
  };

  return (
    <form onSubmit={handleFilter} className="bg-gray-100 p-4 rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Price Range:
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full appearance-none bg-gray-200 h-1 rounded-md"
        />
      </div>
      <div className="flex justify-between text-sm">
        <span>{priceRange[0]}</span>
        <span>{priceRange[1]}</span>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
      >
        Filter
      </button>
    </form>
  );
};

export default ProductFilter;
