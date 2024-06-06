import React from "react";
import usePayment from "../../../hooks/usePayment";

const MyOrder = () => {
  const [payment] = usePayment();
  return (
    <div className="container mx-auto p-4">
      {payment.map((paymentItem) => (
        <div
          key={paymentItem._id}
          className="bg-white shadow-md rounded-lg p-4 mb-4"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Order Details
          </h2>
          <p>
            <span className="font-semibold text-gray-600">Order ID:</span>{" "}
            {paymentItem.transactionId}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Date:</span>{" "}
            {paymentItem.date}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Email:</span>{" "}
            {paymentItem.email}
          </p>
          <h3 className="text-lg font-semibold mt-4 text-gray-800">
            Products:
          </h3>
          <ul>
            {paymentItem.cartId.map((productId, index) => (
              <li key={productId} className="border-b py-2">
                Product ID: {productId} | Quantity:{" "}
                {paymentItem.productItemId[index]}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <span className="font-semibold text-gray-600">Total Amount:</span> $
            {paymentItem.price.toFixed(2)}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Status:</span>{" "}
            {paymentItem.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
