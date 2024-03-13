import React, { useEffect, useState } from "react";
import useProduct from "../../../hooks/useProduct";
import ProductCard from "../../shared/ProductCard/ProductCard";

const Collection = () => {
  const [products] = useProduct();
  const [filtered, setFilters] = useState([]);

  const price = [...new Set(filtered.map((product) => product.price))];
  const minProductPrice = parseInt(Math.min(...price));
  const maxProductPrice = parseInt(Math.max(...price));

  console.log(typeof minProductPrice, maxProductPrice);

  const [ratings, setRatings] = useState();
  const [minPrices, setMinPrices] = useState(minProductPrice);
  const [maxPrices, setMaxPrices] = useState(maxProductPrice);

  console.log(minPrices, maxPrices, typeof ratings);

  const handlePrice = (price) => {
    // console.log(price);
    const maxPrice = parseInt(price.split(" ")[0]);
    const minPrice = parseInt(price.split(" ")[2]);
    // console.log(typeof maxPrice, typeof minPrice);
    setMinPrices(minPrice);
    setMaxPrices(maxPrice);
  };

  console.log("filter", filtered);
  const url = `http://localhost:5000/products?minPrice=${minPrices}&maxPrice=${maxPrices}&rating=${ratings}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFilters(data))
      .catch((error) => console.log(error));
  }, [minPrices, maxPrices, ratings]);

  return (
    <div className="pt-28">
      <div className="flex">
        <div className="md:w-[75%]">
          <h2>Total Products: {filtered.length}</h2>
          <div className="grid md:grid-cols-3 gap-4  ">
            {filtered.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </div>
        <div className=" bg-slate-500 w-72 pt-36 px-8  fixed min-h-screen right-0">
          <div>
            <h2 className="text-xl font-bold">Category</h2>
            <div className="  ">
              <div className=" ">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form className="card-body bg-base-200">
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <select
                        onChange={(e) => handlePrice(e.target.value)}
                        className="select select-bordered"
                        defaultValue="default"
                      >
                        <option value="default">All</option>
                        <option value="1 to 20">1 to 20</option>
                        <option value="20 to 50">20 to 50</option>
                        <option value="50 to 100">50 to 100</option>
                        <option value="100 to 200">100 to 200</option>
                        {/* <option  value="200 to more">200 to more</option> */}
                      </select>
                    </div>
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text">Rating</span>
                      </label>
                      <select
                        onChange={(e) => setRatings(parseInt(e.target.value))}
                        className="select select-bordered"
                        defaultValue="default"
                      >
                        <option value="default">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>

                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
