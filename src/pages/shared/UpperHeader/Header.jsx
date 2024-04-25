import React, { useEffect, useState } from "react";
const Header = () => {
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5  text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </div>
            
            <div className={`${isCardOpen? "opacity-100" : "opacity-0"}  duration-700 `}>
              <div
                // tabIndex={0}
                className=" card card-compact dropdown-content w-52 bg-base-100 shadow "
              >
                <div className="card-body">
                  <span className="font-bold text-lg">0 Items</span>
                  <span className="text-info">Total: $00</span>
                  <div className="card-actions">
                    <button className="btn btn-neutral btn-block">
                      View cart
                    </button>
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
