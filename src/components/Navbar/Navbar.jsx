import React from "react";
import logo from "../../images/cooperation.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Bars3Icon,
  XMarkIcon,
  
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center ">
          <span>
            <img className="w-8" src={logo} alt="" />
          </span>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <FontAwesomeIcon icon={Bars3Icon} />
          </span>
        </div>
        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              Home
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              Collection
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              Shops
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              About
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              Contact
            </a>
          </li>

          <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded ">
            Login
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
