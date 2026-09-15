import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({
  allowedRole,
}) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  // =========================================
  // WAIT FOR AUTHENTICATION TO LOAD
  // =========================================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">
          Loading...
        </p>
      </div>
    );
  }

  // =========================================
  // USER NOT LOGGED IN
  // =========================================

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

  // =========================================
  // CHECK USER ROLE
  // =========================================

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

  // =========================================
  // RENDER NESTED ROUTE
  // =========================================

  return <Outlet />;
};

export default ProtectedRoute;
