import React, { useState } from "react";
import Header from "../../pages/shared/UpperHeader/Header";
import Cart from "../../pages/Collection/Cart/Cart";

const TotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div>
      <Header totalPrice={totalPrice} />
      <Cart setTotalPrice={setTotalPrice} />
    </div>
  );
};

export default TotalPrice;
