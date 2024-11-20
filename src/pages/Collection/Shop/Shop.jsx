import React, { useEffect, useState } from "react";
import ProductCard from "../../shared/ProductCard/ProductCard";
import useProduct from "../../../hooks/useProduct";
import FilterWithPrice from "../FilterWithPrice/FilterWithPrice";
import ProductFilter from "../FilterWithPrice/ProductFilter";
import Advertising from "../Collections/Advertising/Advertising";
import Pagination from "../Pagination/Pagination";
import DisplayCard from "../DisplayCard/DisplayCard";
import { Cross, Menu, X } from "lucide-react";

const Shop = () => {
  // const [products] = useProduct();
  // const [categorys, setCategorys] = useState("All");
  const [category, setCategory] = useState("All");
  const [filterProduct, setFilterProduct] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
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

  // const updatePageNum = (num) => {
  //   if (num >= 0 && num < pages) {
  //     setPageNum(num);
  //     window.scrollTo({
  //       top: 0, // Scroll to the top of the page when switching pages
  //       behavior: "smooth",
  //     });
  //   }
  // };

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
    <section className="container mx-auto">
      <div className="md:flex">
        {/* Sidebar */}
        {/* <div className="mx-20 md:mx-0 md:w-[25%] md:bg-opacity-25 pt-8 lg:pt-16 md:px-8 min-h-full right-0">
          <div className="">
            <h2 className="text-xl font-bold text-start pl-8 md:pl-0 md:text-left">
              Filtering
            </h2>

            <FilterWithPrice
              onFilter={handleFilter}
              onClear={handleClear}
            ></FilterWithPrice>
          </div>
          <DisplayCard />
        </div> */}

        {/* Sidebar */}
        <div
          className={`absolute md:relative bg-gray-100 md:bg-transparent z-50 transform ${
            isSidebarVisible ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 transition-transform duration-500 w-72 md:w-[25%] pt-8 lg:pt-16 px-6 md:px-8 min-h-screen right-0`}
          style={{
            display:
              isSidebarVisible ||
              !window.matchMedia("(max-width: 768px)").matches
                ? "block"
                : "none",
          }}
        >
          <h2 className="text-xl font-bold">Filtering</h2>
          <FilterWithPrice
            onFilter={handleFilter}
            onClear={handleClear}
          ></FilterWithPrice>
          <DisplayCard />
        </div>

        {/* Menu Bar Button */}
        <button
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          className="block md:hidden top-40 right-0 text-red-700 p-2 z-50"
        >
          {isSidebarVisible ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* main content  */}
        <div className="md:w-[75%] ">
          <Advertising></Advertising>

          <div className="flex flex-wrap justify-center overflow-x-auto">
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
    </section>
  );
};

export default Shop;
