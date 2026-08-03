import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  FiChevronDown,
  FiLogOut,
  FiUser,
  FiHome,
  FiClipboard,
  FiMapPin,
  FiBell,
} from "react-icons/fi";

import useAuth from "../../hooks/useAuth";

const CustomerProfileMenu = ({
  user,
}) => {
  const [isOpen, setIsOpen] =
    useState(false);

  const { logout } = useAuth();

  const navigate =
    useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <div className="relative">
      {/* Profile Button */}

      <button
        onClick={() =>
          setIsOpen(!isOpen)
        }
        className="
        flex
        items-center
        gap-3
        rounded-2xl
        px-3
        py-2
        hover:bg-gray-100
        transition
        "
      >
        <div
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-amber-500
          font-bold
          text-white
          "
        >
          {user?.name
            ?.charAt(0)
            .toUpperCase()}
        </div>

        <div className="text-left">
          <h3 className="font-semibold">
            {user?.name}
          </h3>

          <p className="text-xs text-gray-500">
            Customer
          </p>
        </div>

        <FiChevronDown
          className={`transition ${isOpen
            ? "rotate-180"
            : ""
            }`}
        />
      </button>

      {/* Dropdown */}

      {isOpen && (
        <div
          className="
          absolute
          right-0
          mt-3
          w-72
          overflow-hidden
          rounded-3xl
          border
          bg-white
          shadow-2xl
          z-50
          "
        >
          {/* Header */}

          <div className="bg-gray-50 p-5">
            <div className="flex items-center gap-4">
              <div
                className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-amber-500
                text-xl
                font-bold
                text-white
                "
              >
                {user?.name
                  ?.charAt(0)
                  .toUpperCase()}
              </div>

              <div>
                <h3 className="font-bold">
                  {user?.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Menu */}

          <Link
            to="/customer/dashboard"
            className="
            flex
            items-center
            gap-3
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            <FiHome />
            Dashboard
          </Link>

          <Link
            to="/customer/bookings"
            className="
            flex
            items-center
            gap-3
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            <FiClipboard />
            My Bookings
          </Link>

          <Link
            to="/customer/track-booking"
            className="
            flex
            items-center
            gap-3
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            <FiMapPin />
            Track Booking
          </Link>

          <Link
            to="/customer/notifications"
            className="
            flex
            items-center
            gap-3
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            <FiBell />
            Notifications
          </Link>

          <Link
            to="/customer/profile"
            className="
            flex
            items-center
            gap-3
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            <FiUser />
            Profile
          </Link>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="
            flex
            w-full
            items-center
            gap-3
            border-t
            px-6
            py-4
            text-red-500
            hover:bg-red-50
            "
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomerProfileMenu;