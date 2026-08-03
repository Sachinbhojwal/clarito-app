import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  FiChevronDown,
  FiHome,
  FiUser,
  FiTool,
  FiClock,
  FiDollarSign,
  FiStar,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import useAuth from "../../hooks/useAuth";

const ProviderProfileMenu = ({
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
          bg-green-500
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

          <p
            className="
            text-xs
            text-gray-500
            "
          >
            {user?.service}
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

          <div className="bg-green-50 p-5">
            <div className="flex items-center gap-4">
              <div
                className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-green-500
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

                <span
                  className="
                  text-xs
                  text-green-600
                  font-semibold
                  "
                >
                  {user?.service}
                </span>
              </div>
            </div>
          </div>

          <Link
            to="/provider-dashboard"
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
            to="/provider/profile"
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
            My Profile
          </Link>

          <Link
            to="/provider/jobs"
            className="
            flex
            items-center
            gap-3
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            <FiTool />
            My Jobs
          </Link>

          <Link
            to="/provider/availability"
            className="
            flex
            items-center
            gap-3
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            <FiClock />
            Availability
          </Link>

          <Link
            to="/provider/earnings"
            className="
            flex
            items-center
            gap-3
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            <FiDollarSign />
            Earnings
          </Link>

          <Link
            to="/provider/reviews"
            className="
            flex
            items-center
            gap-3
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            <FiStar />
            Reviews
          </Link>

          <Link
            to="/provider/settings"
            className="
            flex
            items-center
            gap-3
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            <FiSettings />
            Settings
          </Link>

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

export default ProviderProfileMenu;