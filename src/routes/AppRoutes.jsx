import { Routes, Route } from "react-router-dom";

/* Public Pages */

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import AdminLogin from "../pages/public/AdminLogin";

/* Booking Pages */

import Bookings from "../pages/booking/Bookings";
import Services from "../pages/booking/Services";
import ServiceDetails from "../pages/booking/ServiceDetails";

/* Customer Pages */

import CustomerDashboard from "../pages/customer/CustomerDashboard";
import TrackBooking from "../pages/customer/TrackBooking";
import Notifications from "../pages/customer/Notifications";

/* Provider Pages */

import ProviderDashboard from "../pages/provider/ProviderDashboard";

/* Admin Pages */

import AdminDashboard from "../pages/admin/AdminDashboard";
import Employees from "../pages/admin/Employees";
import Customers from "../pages/admin/Customers";
import Payments from "../pages/admin/Payments";
import Reviews from "../pages/admin/Reviews";
import Settings from "../pages/admin/Settings";
import ServicesManagement from "../pages/admin/ServicesManagement";

/* Layout */

import AdminLayout from "../components/admin/AdminLayout";

/* Protected Routes */

import ProtectedRoute from "./ProtectedRoute";
import AdminProtectedRoute from "./AdminProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/*================================*/}
      {/* Public Routes */}
      {/*================================*/}

      <Route path="/" element={<Home />} />

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

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      {/*================================*/}
      {/* Booking Routes */}
      {/*================================*/}

      <Route
        path="/booking"
        element={<Bookings />}
      />

      <Route
        path="/services"
        element={<Services />}
      />

      <Route
        path="/services/:slug"
        element={<ServiceDetails />}
      />

      {/*================================*/}
      {/* Customer Routes */}
      {/*================================*/}

      <Route
        path="/customer-dashboard"
        element={
          <ProtectedRoute
            allowedRole="customer"
          >
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/track-booking"
        element={
          <ProtectedRoute
            allowedRole="customer"
          >
            <TrackBooking />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notifications"
        element={
          <ProtectedRoute
            allowedRole="customer"
          >
            <Notifications />
          </ProtectedRoute>
        }
      />

      {/*================================*/}
      {/* Provider Routes */}
      {/*================================*/}

      <Route
        path="/provider-dashboard"
        element={
          <ProtectedRoute
            allowedRole="provider"
          >
            <ProviderDashboard />
          </ProtectedRoute>
        }
      />

      {/*================================*/}
      {/* Admin Routes */}
      {/*================================*/}

      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <AdminLayout />
          </AdminProtectedRoute>
        }
      >
        <Route
          index
          element={<AdminDashboard />}
        />

        <Route
          path="employees"
          element={<Employees />}
        />

        <Route
          path="customers"
          element={<Customers />}
        />

        <Route
          path="services"
          element={<ServicesManagement />}
        />

        <Route
          path="payments"
          element={<Payments />}
        />

        <Route
          path="reviews"
          element={<Reviews />}
        />

        <Route
          path="settings"
          element={<Settings />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;