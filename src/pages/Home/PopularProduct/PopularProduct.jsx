import React from "react";
import useProduct from "../../../hooks/useProduct";
import { Link } from "react-router-dom";
import ProductCard from "../../shared/ProductCard/ProductCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularProduct = () => {
  const [products] = useProduct();
  const PopularProduct = products
    .filter((product) => product.category === "Bottle")
    .slice(0, 4); // Display only the first four items

  return (
    <section className="container mx-auto mt-10">
      <div className=" md:w-11/12 mx-4 md:mx-auto">
        <SectionTitle heading="popular product"></SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {PopularProduct.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
        <div className="flex justify-center mb-10">
          <Link to="/shop" className="btn btn-outline border-0 border-b-4">
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
