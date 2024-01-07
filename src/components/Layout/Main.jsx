import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
