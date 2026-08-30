import { Routes, Route } from "react-router-dom";

// =====================================================
// LAYOUTS
// =====================================================

import PublicLayout from "../layouts/PublicLayout";
import CustomerLayout from "../layouts/CustomerLayout";
import ProviderLayout from "../layouts/ProviderLayout";
import AdminLayout from "../layouts/AdminLayout";

// =====================================================
// PROTECTED ROUTES
// =====================================================

import ProtectedRoute from "./ProtectedRoute";
import AdminProtectedRoute from "./AdminProtectedRoute";

// =====================================================
// PUBLIC PAGES
// =====================================================

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import VerifyOTP from "../pages/public/VerifyOTP";
import AdminLogin from "../pages/public/AdminLogin";

// =====================================================
// BOOKING PAGES
// =====================================================

import Services from "../pages/booking/Services";
import ServiceDetails from "../pages/booking/ServiceDetails";
import Bookings from "../pages/booking/Bookings";
import BookingSuccess from "../pages/booking/BookingSuccess";
import MyBookings from "../pages/booking/MyBookings";

// =====================================================
// CUSTOMER PAGES
// =====================================================

import CustomerDashboard from "../pages/customer/CustomerDashboard";
import CustomerProfile from "../pages/customer/CustomerProfile";
import Notifications from "../pages/customer/Notifications";
import TrackBooking from "../pages/customer/TrackBooking";

// =====================================================
// PROVIDER PAGES
// =====================================================

import ProviderDashboard from "../pages/provider/ProviderDashboard";
import ProviderProfileForm from "../pages/provider/ProviderProfileForm";
import ProviderProfile from "../pages/provider/ProviderProfile";
import ProviderJobs from "../pages/provider/ProviderJobs";
import ProviderNotifications from "../pages/provider/ProviderNotifications";
import ProviderReviews from "../pages/provider/ProviderReviews";
import ProviderSettings from "../pages/provider/ProviderSettings";
import Earnings from "../pages/provider/Earnings";
import Availability from "../pages/provider/Availability";

// =====================================================
// ADMIN PAGES
// =====================================================

import AdminDashboard from "../pages/admin/AdminDashboard";
import Customers from "../pages/admin/Customers";
import Employees from "../pages/admin/Employees";
import Payments from "../pages/admin/Payments";
import Reviews from "../pages/admin/Reviews";
import ServicesManagement from "../pages/admin/ServicesManagement";
import Settings from "../pages/admin/Settings";

// =====================================================
// 404
// =====================================================

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>404</h1>
      <p>Page Not Found</p>

      <a href="/">
        Go Home
      </a>
    </div>
  );
};


// =====================================================
// APP ROUTES
// =====================================================

const AppRoutes = () => {
  return (
    <Routes>

      {/* =================================================
          PUBLIC ROUTES
      ================================================= */}

      <Route element={<PublicLayout />}>

        <Route
          path="/"
          element={<Home />}
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
          path="/services"
          element={<Services />}
        />

        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
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
          path="/verify-otp"
          element={<VerifyOTP />}
        />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

      </Route>


      {/* =================================================
          CUSTOMER ROUTES
      ================================================= */}

      <Route
        element={
          <ProtectedRoute allowedRole="customer" />
        }
      >

        <Route element={<CustomerLayout />}>

          {/* Dashboard */}

          <Route
            path="/customer/dashboard"
            element={<CustomerDashboard />}
          />


          {/* Services */}

          <Route
            path="/customer/services"
            element={<Services />}
          />

          <Route
            path="/customer/services/:slug"
            element={<ServiceDetails />}
          />


          {/* Booking */}

          <Route
            path="/customer/booking"
            element={<Bookings />}
          />

          <Route
            path="/customer/booking/success"
            element={<BookingSuccess />}
          />


          {/* My Bookings */}

          <Route
            path="/customer/bookings"
            element={<MyBookings />}
          />


          {/* Track Booking */}

          <Route
            path="/customer/track-booking"
            element={<TrackBooking />}
          />


          {/* Notifications */}

          <Route
            path="/customer/notifications"
            element={<Notifications />}
          />


          {/* Profile */}

          <Route
            path="/customer/profile"
            element={<CustomerProfile />}
          />

        </Route>

      </Route>


      {/* =================================================
          PROVIDER ROUTES
      ================================================= */}

      <Route
        element={
          <ProtectedRoute allowedRole="provider" />
        }
      >

        <Route element={<ProviderLayout />}>

          {/* Dashboard */}

          <Route
            path="/provider/dashboard"
            element={<ProviderDashboard />}
          />


          {/* Profile Form */}

          <Route
            path="/provider/profile-form"
            element={<ProviderProfileForm />}
          />


          {/* Profile */}

          <Route
            path="/provider/profile"
            element={<ProviderProfile />}
          />


          {/* Jobs */}

          <Route
            path="/provider/jobs"
            element={<ProviderJobs />}
          />


          {/* Notifications */}

          <Route
            path="/provider/notifications"
            element={<ProviderNotifications />}
          />


          {/* Reviews */}

          <Route
            path="/provider/reviews"
            element={<ProviderReviews />}
          />


          {/* Earnings */}

          <Route
            path="/provider/earnings"
            element={<Earnings />}
          />


          {/* Availability */}

          <Route
            path="/provider/availability"
            element={<Availability />}
          />


          {/* Settings */}

          <Route
            path="/provider/settings"
            element={<ProviderSettings />}
          />

        </Route>

      </Route>


      {/* =================================================
          ADMIN ROUTES
      ================================================= */}

      <Route
        element={<AdminProtectedRoute />}
      >

        <Route element={<AdminLayout />}>

          {/* Dashboard */}

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />


          {/* Customers */}

          <Route
            path="/admin/customers"
            element={<Customers />}
          />


          {/* Employees */}

          <Route
            path="/admin/employees"
            element={<Employees />}
          />


          {/* Payments */}

          <Route
            path="/admin/payments"
            element={<Payments />}
          />


          {/* Reviews */}

          <Route
            path="/admin/reviews"
            element={<Reviews />}
          />


          {/* Services */}

          <Route
            path="/admin/services"
            element={<ServicesManagement />}
          />


          {/* Settings */}

          <Route
            path="/admin/settings"
            element={<Settings />}
          />

        </Route>

      </Route>


      {/* =================================================
          404
      ================================================= */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
};

export default AppRoutes;
