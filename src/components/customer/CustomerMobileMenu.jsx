import { Link, NavLink } from "react-router-dom";

import {
  FiHome,
  FiTool,
  FiClipboard,
  FiMapPin,
  FiBell,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

import SearchBar from "../common/navbar/SearchBar";

import useAuth from "../../hooks/useAuth";

const CustomerMobileMenu = ({
  isOpen,
  setIsOpen,
}) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
      lg:hidden
      border-t
      bg-white
      shadow-lg
      "
    >
      <div className="space-y-2 p-5">

        {/* Search */}

        <SearchBar />

        {/* Dashboard */}

        <NavLink
          to="/customer/dashboard"
          onClick={() => setIsOpen(false)}
          className="
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          hover:bg-gray-100
          "
        >
          <FiHome />
          Dashboard
        </NavLink>

        {/* Services */}

        <NavLink
          to="/customer/services"
          onClick={() => setIsOpen(false)}
          className="
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          hover:bg-gray-100
          "
        >
          <FiTool />
          Services
        </NavLink>

        {/* My Bookings */}

        <NavLink
          to="/customer/bookings"
          onClick={() => setIsOpen(false)}
          className="
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          hover:bg-gray-100
          "
        >
          <FiClipboard />
          My Bookings
        </NavLink>

        {/* Track Booking */}

        <NavLink
          to="/customer/track-booking"
          onClick={() => setIsOpen(false)}
          className="
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          hover:bg-gray-100
          "
        >
          <FiMapPin />
          Track Booking
        </NavLink>

        {/* Notifications */}

        <NavLink
          to="/customer/notifications"
          onClick={() => setIsOpen(false)}
          className="
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          hover:bg-gray-100
          "
        >
          <FiBell />
          Notifications
        </NavLink>

        {/* Profile */}

        <Link
          to="/customer/profile"
          onClick={() => setIsOpen(false)}
          className="
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          hover:bg-gray-100
          "
        >
          <FiUser />
          My Profile
        </Link>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="
          flex
          w-full
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          text-red-500
          hover:bg-red-50
          "
        >
          <FiLogOut />
          Logout
        </button>

      </div>
    </div>
  );
};

export default CustomerMobileMenu;