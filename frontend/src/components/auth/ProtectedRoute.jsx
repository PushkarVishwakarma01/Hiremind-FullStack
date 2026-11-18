// src/components/auth/ProtectedRoute.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "../../services/authApi";

export default function ProtectedRoute() {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Send them to login, remember where they were headed
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}