import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

const AdminRoute = () => {
  const { profile } = useSelector((state) => state.user);

  if (profile === undefined || profile === null) {
    return <div><Loader /></div>; 
  }

  if (!profile) {
    return <Navigate to="/login" replace />; 
  }

  if (profile.role !== "Admin") {
    return <Navigate to="/" replace />; 
  }

  return <Outlet />;
};

export default AdminRoute;
