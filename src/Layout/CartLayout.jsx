import React from "react";
import Header from "../pages/shared/UpperHeader/Header";
import Navbar from "../pages/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const CartLayout = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default CartLayout;
