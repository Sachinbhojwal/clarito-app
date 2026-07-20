import {
  Navigate,
  useLocation,
} from "react-router-dom";

import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({
  children,
  allowedRole,
}) => {
  const { user } = useAuth();

  const location = useLocation();

  // Login nahi hai
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  // Role match nahi hua
  if (
    allowedRole &&
    user.role !== allowedRole
  ) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;