import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <nav className=" lg:w-full bg-opacity-30   px-10 border-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:text-white lg:text-black shadow-xl font-semibold">
        <div className=" flex flex-wrap items-center justify-between  p-4">
          <Link to="/" className="flex flex-col items-center justify-center">
            <h2 className="logo-name text-3xl font-bold">
              Modest
              <span className="text-red-500">Covering</span>Draps
            </h2>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full lg:block lg:w-auto ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col  lg:flex-row  font-medium p-4 lg:p-0 mt-4 border  lg:border-0 border-gray-100 rounded-lg  lg:mt-0  dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              <li className="mx-4 lg:my-0 ">
                <Link
                  to="/"
                  className="text-xl hover:text-red-500 duration-500"
                >
                  Home
                </Link>
              </li>
              <li className="mx-4 lg:my-0 ">
                <Link
                  to="/shop"
                  className="text-xl hover:text-red-500 duration-500"
                >
                  Shop
                </Link>
              </li>
              {/* <li className="mx-4 lg:my-0 ">
                <Link
                  to="/collection"
                  className="text-xl hover:text-red-500 duration-500"
                >
                  Collect
                </Link>
              </li> */}

              <li className="mx-4 lg:my-0 ">
                <Link
                  to="/blogs"
                  className="text-xl hover:text-red-500 duration-500"
                >
                  Blogs
                </Link>
              </li>
              <li className="mx-4 lg:my-0 ">
                <Link
                  to="/contact"
                  className="text-xl hover:text-red-500 duration-500"
                >
                  Contact Us
                </Link>
              </li>

              <div className="flex items-center ml-4 lg:items-end mt-4 lg:mt-0">
                <Link
                  to="/signup"
                  className="btn btn-sm pl-10 -mr-24 ml-16  text-white text-1xl font-bold rounded-2xl transition duration-300 ease-in-out bg-gradient-to-r from-red-400 to-slate-600 hover:from-teal-800 hover:to-red-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-white"
                >
                  SignUp
                </Link>
                <Link
                  to="/login"
                  className="btn btn-sm -ml-9 mr-6 text-white text-1xl font-bold rounded-2xl transition duration-300 ease-in-out bg-gradient-to-r from-red-400 to-slate-600 hover:from-teal-800 hover:to-red-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-white"
                >
                  SignIn
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <hr />
      </nav>
    </div>
  );
};

export default Navbar;
