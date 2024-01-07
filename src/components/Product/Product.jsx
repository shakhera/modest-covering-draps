import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import "../../utilities/fakedb";
const Product = (props) => {
  const { img, name, price, seller, ratings, id } = props.product;
  const addToCard = props.addToCard;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">Price: {price}</p>
        <p>Manufacturel : {seller}</p>
        <p>Rating : {ratings} star</p>
      </div>
      <button onClick={() => addToCard(props.product)} className="btn-card">
        Add to Card
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;
