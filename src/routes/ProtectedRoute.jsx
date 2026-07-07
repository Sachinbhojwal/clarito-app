import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();

  // User login nahi hai
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Agar role diya gaya hai aur match nahi karta
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  // Sab sahi hai
  return children;
};

export default ProtectedRoute;