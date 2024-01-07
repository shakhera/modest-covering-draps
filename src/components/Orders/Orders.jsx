import React from "react";
import "./Orders.css";

const Orders = () => {
  return (
    <div>
      <div className="order-container">
        <h5 className="order-header">Order summary</h5>
        <p>Selected Items: </p>
        <p>Total Prices: $</p>
        <p>Total Shopping Charge: $</p>
        <p>Tax: $</p>
        <h6>Grand Total: $</h6>
      </div>
    </div>
  );
};

export default Orders;
