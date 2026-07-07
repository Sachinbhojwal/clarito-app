import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import Booking from "../pages/Booking";

import Login from "../pages/Login";
import Register from "../pages/Register";

import CustomerDashboard from "../pages/CustomerDashboard";
import ProviderDashboard from "../pages/ProviderDashboard";

/* Admin */
import AdminLayout from "../components/admin/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard";
import Employees from "../pages/Employees";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route path="/services" element={<Services />} />

      <Route
        path="/services/:slug"
        element={<ServiceDetails />}
      />

      <Route path="/booking" element={<Booking />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Customer Dashboard */}
      <Route
        path="/customer-dashboard"
        element={
          <ProtectedRoute allowedRole="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      {/* Provider Dashboard */}
      <Route
        path="/provider-dashboard"
        element={
          <ProtectedRoute allowedRole="provider">
            <ProviderDashboard />
          </ProtectedRoute>
        }
      />

      {/* ========================= */}
      {/* Admin Panel */}
      {/* ========================= */}

      <Route path="/admin" element={<AdminLayout />}>
        <Route
          index
          element={<AdminDashboard />}
        />

        <Route
          path="employees"
          element={<Employees />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;