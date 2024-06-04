import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace>
      {children}
    </Navigate>
  );
};

export default PrivateRoutes;
