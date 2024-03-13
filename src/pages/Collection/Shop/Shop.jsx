import React from "react";
import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [card, setCard] = useState([]);
  const addToCard = (product) => {
    const newCard = [...card, product];
    setCard(newCard);
  };
  return (
    <div>
      <div className="shop-container">
        <div className="product-contailer">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCard={addToCard}
            ></Product>
          ))}
        </div>
        <div className="card-container">
          <h5 className="card-header">Order Summary</h5>
          <p>Selected Items: {card.length}</p>
          <p>Total Prices: $</p>
          <p>Total Shopping Charge: $</p>
          <p>Tax: $</p>
          <h6>Grand Total: $</h6>
        </div>
      </div>
    </div>
  );
};

export default Shop;
