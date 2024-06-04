import React from "react";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import { Outlet } from "react-router-dom";
import Header from "../pages/shared/UpperHeader/Header";

const DashboardLayout = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Dashboard></Dashboard>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
