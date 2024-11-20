import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logOut } = useAuth();

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/shop" },
    { label: "Blogs", link: "/blogs" },
    { label: "Contact Us", link: "/contact" },
    { label: "About Us", link: "/about" },
  ];
  const authItems = user
    ? [
        {
          label: "LogOut",
          action: handleLogout,
        },
      ]
    : [
        { label: "SignUp", link: "/signup" },
        { label: "SignIn", link: "/login" },
      ];

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <nav className="container mx-auto lg:w-full bg-opacity-30  md:px-10 border-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:text-white lg:text-black font-semibold">
      <div className=" flex flex-wrap items-center justify-between  p-4">
        <Link to="/" className="flex flex-col items-center justify-center">
          <h2 className="logo-name text-3xl font-bold border-red-500 border px-2 py-2 hover:shadow-inner hover:shadow-red-800">
            <span className="text-red-500">Allure</span>Marketplace
          </h2>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu for Large Devices */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="text-lg hover:text-red-500"
            >
              {item.label}
            </Link>
          ))}

          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="  border-red-500 border px-2 py-2 hover:shadow-inner hover:shadow-red-800"
              >
                LogOut
              </button>
            </>
          ) : (
            <div>
              <div className="flex items-center ml-4 lg:items-end mt-4 lg:mt-0">
                <Link
                  to="/signup"
                  className="border-red-500 border px-2 py-2 hover:shadow-inner hover:shadow-red-800"
                >
                  SignUp
                </Link>
                <Link
                  to="/login"
                  className="  border-red-500 border px-2 py-2 hover:shadow-inner hover:shadow-red-800"
                >
                  SignIn
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-gray-100 dark:bg-gray-900 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full "
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <ul className=" flex flex-col lg:flex-row space-y-5 md:space-y-0 font-medium p-4 lg:p-0 mt-16 md:mt-4 border lg:border-0 border-gray-100 rounded-lg lg:mt-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link to={item.link} className="text-lg hover:text-red-500">
                {item.label}
              </Link>
            </li>
          ))}
          {authItems.map((item) =>
            item.link ? (
              <li key={item.label}>
                <Link to={item.link} className="text-lg hover:text-red-500">
                  {item.label}
                </Link>
              </li>
            ) : (
              <li key={item.label}>
                <button
                  onClick={item.action}
                  className="text-lg hover:text-red-500"
                >
                  {item.label}
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      <hr />
    </nav>
  );
};

export default Navbar;
