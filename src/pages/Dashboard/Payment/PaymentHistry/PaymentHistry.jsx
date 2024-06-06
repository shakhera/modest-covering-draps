import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import usePayment from "../../../../hooks/usePayment";

const PaymentHistry = () => {
  const [payment] = usePayment();
  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center my-4">Payment Data</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Transaction Id</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((paymentItem) => (
                <tr key={paymentItem._id} className="border-b">
                  <td className="py-2 px-4">{paymentItem.email}</td>
                  <td className="py-2 px-4">${paymentItem.price.toFixed(2)}</td>
                  <td className="py-2 px-4">${paymentItem.transactionId}</td>
                  <td className="py-2 px-4">
                    {new Date(paymentItem.date).toLocaleString()}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-white ${
                        paymentItem.status === "pending"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {paymentItem.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistry;
