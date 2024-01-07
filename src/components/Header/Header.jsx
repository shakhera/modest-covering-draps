import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className=" bg-gray-500 p-5 shadow md:flex md:items-center md:justify-betwee ">
      <div>
        <h2 className="text-white ">Modest Draps</h2>
      </div>

      <div className="md:flex md:items-center ">
        <li className="mx-4 my-6 md:my-0">
          <Link to="/" className="text-xl hover:text-cyan-500 duration-500">
            Home
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/collections"
            className="text-xl hover:text-cyan-500 duration-500"
          >
            Collections
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/orders"
            className="text-white hover:bg-gray-700 p-3 rounded-lg"
          >
            Orders
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/about"
            className="text-white hover:bg-gray-700 p-3 rounded-lg"
          >
            About
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/contact"
            className="text-white hover:bg-gray-700 p-3 rounded-lg"
          >
            Contact Us
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            to="/login"
            className="text-white hover:bg-gray-700 p-3 rounded-lg"
          >
            Login
          </Link>
        </li>
      </div>

      {/* <div className="sm:block md:flex md:space-x-4">
        <Link to="/" className="text-white hover:bg-gray-700 p-3 rounded-lg">
          Home
        </Link>
        <Link
          to="/collections"
          className="text-white hover:bg-gray-700 p-3 rounded-lg"
        >
          Collections
        </Link>
        <Link
          to="/orders"
          className="text-white hover:bg-gray-700 p-3 rounded-lg"
        >
          Orders
        </Link>
        <Link
          to="/about"
          className="text-white hover:bg-gray-700 p-3 rounded-lg"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-white hover:bg-gray-700 p-3 rounded-lg"
        >
          Contact Us
        </Link>
        <Link
          to="/login"
          className="text-white hover:bg-gray-700 p-3 rounded-lg"
        >
          Login
        </Link>
      </div> */}
    </nav>
  );
};

export default Header;
