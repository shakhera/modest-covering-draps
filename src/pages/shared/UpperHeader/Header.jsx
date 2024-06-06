import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { BsCartPlusFill } from "react-icons/bs";

const Header = () => {
  const [carts] = useCart();
  const { user } = useAuth();

  const [theme, setTheme] = useState("light");
  const [isCardOpen, setIsCardOpen] = useState(false);

  useEffect(() => {
    // On component mount, check local storage for saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // If no saved theme, default to system preference
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(userPrefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to local storage
    document.documentElement.classList.toggle("dark", newTheme === "dark"); // Toggle 'dark' class on <html> element
  };
  const toggleCard = () => {
    setIsCardOpen((prevState) => !prevState); // Toggle the state of the card
  };

  const total = carts.reduce((total, item) => total + item.price, 0);
  const tax = (total * 7) / 100;
  const totalPrice = total + tax;

  return (
    <div className=" bg-neutral flex items-center justify-center px-12 ">
      <div className="flex-1">
        <h2 className="text-gray-300 text-sm text-center">
          summer sale discount off 50% | shop now
        </h2>
      </div>
      <div className="flex-none ">
        <div className="flex justify-center items-center gap-x-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              onClick={toggleCard}
            >
              <div className="indicator">
                <FaShoppingCart className="h-5 w-5text-white"></FaShoppingCart>
                <span className="badge badge-sm indicator-item">
                  {carts.length}
                </span>
              </div>
            </div>

            <div
              className={`${
                isCardOpen ? "opacity-100 " : "opacity-0"
              }  duration-200 `}
            >
              <div
                // tabIndex={0}
                className=" card card-compact dropdown-content w-52 bg-base-100 shadow z-50 "
              >
                <div className="card-body">
                  <span className="font-bold text-lg">
                    {carts.length} Items
                  </span>
                  <span className="text-info">Total: ${totalPrice}</span>
                  <div className="card-actions">
                    <Link to="/dashboard/cart">
                      <button className="btn btn-neutral btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              value="dark"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="toggle theme-controller"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
