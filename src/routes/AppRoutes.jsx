import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import CustomerLayout from "../layouts/CustomerLayout";
import ProviderLayout from "../layouts/ProviderLayout";

import ProtectedRoute from "./ProtectedRoute";

/* Public */

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import AdminLogin from "../pages/public/AdminLogin";

/* Booking */

import Services from "../pages/booking/Services";
import ServiceDetails from "../pages/booking/ServiceDetails";
import Bookings from "../pages/booking/Bookings";
import BookingSuccess from "../pages/booking/BookingSuccess";
import MyBookings from "../pages/booking/MyBookings";

/* Customer */

import CustomerDashboard from "../pages/customer/CustomerDashboard";
import CustomerProfile from "../pages/customer/CustomerProfile";
import Notifications from "../pages/customer/Notifications";
import TrackBooking from "../pages/customer/TrackBooking";

/* Provider */

import ProviderDashboard from "../pages/provider/ProviderDashboard";
import ProviderProfileForm from "../pages/provider/ProviderProfileForm";
import ProviderProfile from "../pages/provider/ProviderProfile";
import ProviderJobs from "../pages/provider/ProviderJobs";
import ProviderNotifications from "../pages/provider/ProviderNotifications";
import ProviderReviews from "../pages/provider/ProviderReviews";
import ProviderSettings from "../pages/provider/ProviderSettings";
import Earnings from "../pages/provider/Earnings";
import Availability from "../pages/provider/Availability";

const AppRoutes = () => {
  return (
    <Routes>

      {/* ================= PUBLIC ================= */}

      <Route element={<PublicLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />

        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />

        <Route path="/booking" element={<Bookings />} />

        {/* ✅ Booking Success Route */}

        <Route
          path="/booking/success"
          element={<BookingSuccess />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

      </Route>

      {/* ================= CUSTOMER ================= */}

      <Route
        element={
          <ProtectedRoute allowedRole="customer">
            <CustomerLayout />
          </ProtectedRoute>
        }
      >
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


      {/* ================= PROVIDER ================= */}

      <Route
        element={
          <ProtectedRoute allowedRole="provider">
            <ProviderLayout />
          </ProtectedRoute>
        }
      >

        <Route
          path="/provider/dashboard"
          element={<ProviderDashboard />}
        />

        <Route
          path="/provider/profile-form"
          element={<ProviderProfileForm />}
        />

        <Route
          path="/provider/profile"
          element={<ProviderProfile />}
        />

        <Route
          path="/provider/jobs"
          element={<ProviderJobs />}
        />

        <Route
          path="/provider/notifications"
          element={<ProviderNotifications />}
        />

        <Route
          path="/provider/reviews"
          element={<ProviderReviews />}
        />

        <Route
          path="/provider/earnings"
          element={<Earnings />}
        />

        <Route
          path="/provider/availability"
          element={<Availability />}
        />

        <Route
          path="/provider/settings"
          element={<ProviderSettings />}
        />

      </Route>

    </Routes>
  );
};

export default AppRoutes;