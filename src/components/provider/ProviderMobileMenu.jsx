import { Link, NavLink } from "react-router-dom";

import {
  FiHome,
  FiTool,
  FiClock,
  FiDollarSign,
  FiStar,
  FiUser,
  FiSettings,
  FiBell,
  FiLogOut,
} from "react-icons/fi";

import SearchBar from "../common/navbar/SearchBar";

import useAuth from "../../hooks/useAuth";

const ProviderMobileMenu = ({
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
          to="/provider/dashboard"
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

        {/* Jobs */}

        <NavLink
          to="/provider/jobs"
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
          My Jobs
        </NavLink>

        {/* Availability */}

        <NavLink
          to="/provider/availability"
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
          <FiClock />
          Availability
        </NavLink>

        {/* Earnings */}

        <NavLink
          to="/provider/earnings"
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
          <FiDollarSign />
          Earnings
        </NavLink>

        {/* Reviews */}

        <NavLink
          to="/provider/reviews"
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
          <FiStar />
          Reviews
        </NavLink>

        {/* Notifications */}

        <NavLink
          to="/provider/notifications"
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
          to="/provider/profile"
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

        {/* Settings */}

        <Link
          to="/provider/settings"
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
          <FiSettings />
          Settings
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

export default ProviderMobileMenu;