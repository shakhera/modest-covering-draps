import React, { useEffect, useRef, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);

  const getUserName = (name) => {
    if (!name) {
      return "NM";
    }
    const naame = name.split(" ");
    let initialName = naame
      .map((nm) => nm[0])
      .join("")
      .subString(0, 2);
    if (initialName.length < 2) {
      initialName = initialName[0] + initialName[0];
    }
    return initialName.toUppercase();
  };
  const colorPairs = [
    { bg: "bg-red-500", text: "text-white" },
    { bg: "bg-green-500", text: "text-white" },
    { bg: "bg-blue-500", text: "text-white" },
    { bg: "bg-yellow-500", text: "text-black" },
    { bg: "bg-purple-500", text: "text-white" },
    { bg: "bg-pink-500", text: "text-white" },
    { bg: "bg-indigo-500", text: "text-white" },
    { bg: "bg-teal-500", text: "text-white" },
  ];
  const hashStringToIndex = (str, arrayLength) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % arrayLength;
  };
  const userName = getUserName(user?.displayName);
  const colorClass = [hashStringToIndex(user?.name || "", colorPairs.length)];
  const { bg: bgColorClass, text: textColorClass } = colorPairs[colorClass];

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="bg-neutral flex flex-wrap justify-between items-center px-20 py-2 ">
      <div>
        <Link to="/" className="flex flex-col items-center justify-center">
          <h2 className="logo-name text-3xl font-mono text-red-400 font-bold border-white border px-2 py-2 hover:shadow-inner hover:shadow-red-800">
            <span className="text-white">Allure</span>Marketplace
          </h2>
        </Link>
      </div>
      <div ref={dropDownRef} className="relative ">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`rounded-full ${bgColorClass} w-12 h-12 ml-20 flex items-center justify-center`}
        >
          <span className={`${textColorClass} font-extrabold text-2xl`}>
            {userName}
          </span>
        </button>
        <ul
          className={`${
            open ? "visible duration-300" : "invisible"
          } absolute left-0 top-12 z-50 w-fit rounded-sm bg-slate-200 shadow-md`}
        >
          <li
            className={`rounded-sm px-6 py-2  ${
              open ? "opacity-100 duration-500 " : "opacity-0"
            } hover:bg-slate-300 `}
          >
            <Link to="/" className="text-xl hover:text-red-500 duration-500">
              Home
            </Link>
          </li>
          <li
            className={`rounded-sm px-6 py-2  ${
              open ? "opacity-100 duration-500 " : "opacity-0"
            } hover:bg-slate-300`}
          >
            <Link
              to="/dashboard/payment"
              className="text-xl hover:text-red-500 duration-500"
            >
              Payment
            </Link>
          </li>
          <li
            className={`rounded-sm px-6 py-2  ${
              open ? "opacity-100 duration-500 " : "opacity-0"
            } hover:bg-slate-300`}
          >
            <Link to="#" className="text-xl hover:text-red-500 duration-500">
              Setting
            </Link>
          </li>
          <li
            className={`rounded-sm px-6 py-2  ${
              open ? "opacity-100 duration-500 " : "opacity-0"
            }`}
          >
            <button
              onClick={handleLogOut}
              className="text-xl  duration-500 text-red-600 hover:bg-red-600 py-1 rounded-mds px-2 hover:text-white "
            >
              LogOut
            </button>
          </li>
          {/*         
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`rounded-sm px-6 py-2 ${
                open ? "opacity-100 duration-300" : "opacity-0"
              }  ${
                item === "Log Out"
                  ? "text-red-500 hover:bg-red-600 hover:text-white"
                  : "hover:bg-slate-300"
              }`}
            >
              <Link to={item.path}>{item.menuItem}</Link>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
