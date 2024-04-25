import React from "react";
import useProduct from "../../../hooks/useProduct";
import { Link } from "react-router-dom";
import ProductCard from "../../shared/ProductCard/ProductCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularProduct = () => {
  const [products] = useProduct();
  console.log(products);
  const PopularProduct = products.filter(
    (product) => product.category === "Bottle"
  );

  return (
    <div>
      <SectionTitle heading="popular product"></SectionTitle>
      
      <div className="grid grid-cols-4 gap-2 md:w-10/12 mx-auto">
        {PopularProduct.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <div className="flex justify-center mb-10">
        <Link to="/collections" className="btn btn-outline border-0 border-b-4">
          View all products
        </Link>
      </div>
    </div>
  );
};

export default PopularProduct;
