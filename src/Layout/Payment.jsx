import React from "react";
import Header from "../pages/shared/UpperHeader/Header";
import Navbar from "../pages/shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Payment = () => {
  const { logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-lg p-6">
        <div>
          <ul className="space-y-4 ">
            <li>
              <Link
                to="/"
                className="text-xl font-semibold text-gray-700 hover:text-red-500 transition duration-500  hover:shadow-inner hover:shadow-red-500 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/payment/paymentHistry"
                className="text-xl font-semibold text-gray-700 hover:text-red-500 transition duration-500 hover:shadow-inner hover:shadow-red-500"
              >
                Payment History
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/payment/myOrder"
                className="text-xl font-semibold text-gray-700 hover:text-red-500 transition duration-500 hover:shadow-inner hover:shadow-red-500 "
              >
                My Order
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-xl font-semibold text-gray-700 hover:text-red-500 transition duration-500 hover:shadow-inner hover:shadow-red-500 "
              >
                Continue Order
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-xl font-semibold text-red-700 hover:text-red-800 duration-500"
              >
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-grow p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Payment;
