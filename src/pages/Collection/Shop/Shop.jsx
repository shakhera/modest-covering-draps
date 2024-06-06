import React, { useEffect, useState } from "react";
import ProductCard from "../../shared/ProductCard/ProductCard";
import useProduct from "../../../hooks/useProduct";
import FilterWithPrice from "../FilterWithPrice/FilterWithPrice";
import ProductFilter from "../FilterWithPrice/ProductFilter";
import Advertising from "../Collections/Advertising/Advertising";
import Pagination from "../Pagination/Pagination";

const Shop = () => {
  // const [products] = useProduct();
  // const [categorys, setCategorys] = useState("All");
  const [category, setCategory] = useState("All");
  const [filterProduct, setFilterProduct] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [pageSize, setPageSize] = useState(6);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const pages = Math.ceil(count / pageSize);

  useEffect(() => {
    fetchProduct();
  }, [pageNum, pageSize, category]);

  const fetchProduct = () => {
    const url = `https://modest-covering-draps-server.vercel.app/product?page=${pageNum}&size=${pageSize}&category=${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      })
      .catch((error) => {
        console.log("Error fatching products", error);
      });
  };

  const handleFilter = (product) => {
    setProducts(product);
  };
  const handleClear = () => {
    setCategory("All");
    setPageNum(0);
  };

  const updatePageNum = (num) => {
    if (num >= 0 && num < pages) {
      setPageNum(num);
    }
  };
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

  // const filterProducts =
  //   categorys === "All"
  //     ? filterProduct
  //     : filterProduct.filter((product) => product.category === categorys);

  return (
    <div className="">
      <div className="md:flex">
        <div className="mx-20 md:mx-0 md:w-[25%] md:bg-slate-500 md:bg-opacity-25  pt-8 lg:pt-16 md:px-8 min-h-full right-0">
          <div className="">
            {/* <h2 className="text-xl font-bold text-start pl-8 md:pl-0 md:text-left">
              Filtering
            </h2> */}

            <FilterWithPrice
              onFilter={handleFilter}
              onClear={handleClear}
            ></FilterWithPrice>
          </div>
        </div>

        <div className="md:w-[75%] ">
          <Advertising></Advertising>

          <div className="flex flex-wrap justify-center">
            {categories.map((item, index) => (
              <button
                key={index}
                className={`mr-4 mb-2 px-4 py-2 rounded-md border border-red-500 ${
                  category === item
                    ? "bg-red-600 text-white  shadow-inner shadow-red-950"
                    : "text-gray-800 dark:text-white"
                }`}
                onClick={() => {
                  setCategory(item);
                  setPageNum(0);
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* <h2 className="text-2xl font-bold pl-12 md:pl-0 pt-8  md:text-center">
            Products:
            {categorys === "All" ? products.length : filterProducts.length}
          </h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  ">
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>

          {/* pagination  */}
          <Pagination
            pages={pages}
            currentPage={pageNum}
            onPageChange={updatePageNum}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
