import { Routes, Route } from "react-router-dom";

/* Public Pages */
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import Bookings from "../pages/Bookings";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminLogin from "../pages/AdminLogin";

/* Customer & Provider */
import CustomerDashboard from "../pages/CustomerDashboard";
import ProviderDashboard from "../pages/ProviderDashboard";

/* Admin Pages */
import AdminLayout from "../components/admin/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard";
import Employees from "../pages/Employees";
import Customers from "../pages/Customers";
import ServicesManagement from "../pages/ServicesManagement";
import Payments from "../pages/Payments";
import Reviews from "../pages/Reviews";
import Settings from "../pages/Settings";

/* Protected Routes */
import ProtectedRoute from "./ProtectedRoute";
import AdminProtectedRoute from "./AdminProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ====================== */}
      {/* Public Routes */}
      {/* ====================== */}

      <Route path="/" element={<Home />} />

      <Route
        path="/services"
        element={<Services />}
      />

      <Route
        path="/services/:slug"
        element={<ServiceDetails />}
      />

      <Route
        path="/booking"
        element={<Bookings />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* ====================== */}
      {/* Admin Login */}
      {/* ====================== */}

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      {/* ====================== */}
      {/* Customer Dashboard */}
      {/* ====================== */}

      <Route
        path="/customer-dashboard"
        element={
          <ProtectedRoute allowedRole="customer">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      {/* ====================== */}
      {/* Provider Dashboard */}
      {/* ====================== */}

      <Route
        path="/provider-dashboard"
        element={
          <ProtectedRoute allowedRole="provider">
            <ProviderDashboard />
          </ProtectedRoute>
        }
      />

      {/* ====================== */}
      {/* Admin Panel */}
      {/* ====================== */}

      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <AdminLayout />
          </AdminProtectedRoute>
        }
      >
        {/* Dashboard */}
        <Route
          index
          element={<AdminDashboard />}
        />

        {/* Employees */}
        <Route
          path="employees"
          element={<Employees />}
        />

        {/* Customers */}
        <Route
          path="customers"
          element={<Customers />}
        />

        {/* Bookings */}
        <Route
          path="bookings"
          element={<Bookings />}
        />

        {/* Services */}
        <Route
          path="services"
          element={<ServicesManagement />}
        />

        {/* Payments */}
        <Route
          path="payments"
          element={<Payments />}
        />

        {/* Reviews */}
        <Route
          path="reviews"
          element={<Reviews />}
        />

        {/* Settings */}
        <Route
          path="settings"
          element={<Settings />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;