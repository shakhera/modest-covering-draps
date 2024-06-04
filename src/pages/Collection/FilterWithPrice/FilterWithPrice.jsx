import axios from "axios";
import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import MultiRangeSlider from "multi-range-slider-react";

const FilterWithPrice = ({ onFilter, onClear }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  const axiosPublic = useAxiosPublic();

  const handleFilter = (e) => {
    e.preventDefault();
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);
    if (!isNaN(min) && !isNaN(max) && min <= max) {
      axiosPublic
        .get(`/products?minPrice=${minPrice}&maxPrice=${maxPrice}`)
        .then((res) => {
          onFilter(res.data);
        })
        .catch((error) => {
          console.error("Error fetching filtered products:", error);
        });
    } else {
      alert("Please enter a valid price range.");
    }
  };

  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(500);
    onClear();
  };

  return (
    <div className="">
      {/* <div>
        <form>
          <div className="flex items-center justify-center mb-4">
            <label htmlFor="sortPrice" className="pr-2">
              Sort by price
            </label>
            <select
              className="select select-bordered max-w-xs"
              defaultValue=""
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option disabled defaultValue="">
                Select
              </option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </form>
      </div> */}
      <div className="">
        <form className="bg-gray-100 px-2 py-4 rounded-md  dark:bg-gray-600">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">
              Price Range:
            </label>
          </div>
          <div className="relative">
            <MultiRangeSlider
              min={0}
              max={500}
              // step={5}
              ruler={false}
              label={false}
              preventWheel={false}
              minValue={minPrice}
              maxValue={maxPrice}
              onInput={(e) => {
                setMinPrice(e.minValue);
                setMaxPrice(e.maxValue);
              }}
            ></MultiRangeSlider>
            <div className="absolute w-full flex justify-between px-1">
              <span className="bg-blue-700 text-white rounded px-2">
                {minPrice}
              </span>
              <span className="bg-blue-700 text-white rounded px-2">
                {maxPrice}
              </span>
            </div>
          </div>
          <button
            onClick={handleFilter}
            type="button"
            className="bg-red-600 mt-12 hover:bg-blue-500 hover:shadow-inner text-white font-bold py-2 px-4 rounded"
          >
            Filter
          </button>
        </form>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleClear}
          className="px-6 py-2 border-2 bg-white border-red-800 text-black rounded-lg font-semibold md:text-base sm:text-sm text-[12px]   hover:shadow-red-800 hover:shadow-xl"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterWithPrice;
