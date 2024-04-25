import React, { useEffect, useState } from "react";
import ProductCard from "../../shared/ProductCard/ProductCard";
import useProduct from "../../../hooks/useProduct";

const Shop = () => {
  const [products] = useProduct();
  const [categorys, setCategorys] = useState("All");

  // console.log(products);

  const categories = [
    "All",
    "Borka",
    "Women's Shoes",
    "Men's Sneaker",
    "Men's Boot",
    "Bag",
    "Cap",
    "Earphones",
    "Bottle",
  ];

  const filterProducts =
    categorys === "All"
      ? products
      : products.filter((product) => product.category === categorys);

  return (
    <div className="">
      <div className="md:flex">
        {/* <div className=" md:bg-slate-500 md:bg-opacity-25 lg:w-72 pt-8 lg:pt-36 md:px-8 lg:fixed min-h-full right-0">
          <div className="">
            <h2 className="text-xl font-bold text-start pl-8 md:pl-0 md:text-left">
              Category
            </h2>
            <ul className="hover:cursor-pointer text-start pl-8 md:pl-0 md:text-left lg:pl-4">
              {categories.map((item, index) => (
                <li key={index} onClick={() => setCategorys(item)}>
                
                  <button className={setCategorys === item ? "active" : ""}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div> */}

        <div className="md:w-[75%]">
          <div className="flex flex-wrap justify-center">
            {categories.map((item, index) => (
              <button
                key={index}
                className={`mr-4 mb-2 px-4 py-2 rounded-full ${
                  categorys === item
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setCategorys(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* <h2 className="text-2xl font-bold pl-12 md:pl-0 pt-8  md:text-center">
            Products:{" "}
            {categorys === "All" ? products.length : filterProducts.length}
          </h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  ">
            {filterProducts.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
