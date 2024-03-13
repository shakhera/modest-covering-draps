import React, { useEffect, useState } from "react";
import useProduct from "../../../hooks/useProduct";
import ProductCard from "../../shared/ProductCard/ProductCard";
const Collections = () => {
  const [products] = useProduct();
  const [categorys, setCategorys] = useState("All");

  console.log(products);

  const categories = [
    "All",
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
      <div className="flex">
        <div className="md:w-[75%]">
          <h2 className="text-2xl font-bold pt-28 text-center">
            Products:
            {categorys === "All" ? products.length : filterProducts.length}
          </h2>
          <div className="grid md:grid-cols-3 gap-4  ">
            {filterProducts.map((product, inx) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </div>

        <div className=" bg-slate-500 w-72 pt-36 px-8 text-white fixed min-h-screen right-0">
          <div>
            <h2 className="text-xl font-bold">Category</h2>
            <ul className="hover:cursor-pointer pl-4">
              {categories.map((item, index) => (
                <li key={index} onClick={() => setCategorys(item)}>
                  {/* {item} */}
                  <button className={setCategorys === item ? "active" : ""}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* search  */}
        </div>
      </div>
    </div>
  );
};

export default Collections;
