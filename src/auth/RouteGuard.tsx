import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RouteGuard: React.FC = () => {
  const hasJWT = () => {
    return localStorage.getItem("authTokens");
  };

  return hasJWT() ? <Outlet /> : <Navigate to="/login" />;
};

export default RouteGuard;
