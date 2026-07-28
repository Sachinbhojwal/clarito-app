import { useState } from "react";

import { Link } from "react-router-dom";

import {
  FiChevronDown,
  FiLogOut,
} from "react-icons/fi";

const ProviderMenu = ({
  user,
  handleLogout,
}) => {
  const [isOpen, setIsOpen] =
    useState(false);

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
        px-3
        py-2
        rounded-2xl
        hover:bg-gray-100
        transition
        "
      >
        <div
          className="
          w-11
          h-11
          rounded-full
          bg-green-500
          text-white
          flex
          items-center
          justify-center
          font-bold
          "
        >
          {user?.name
            ? user.name
              .charAt(0)
              .toUpperCase()
            : "P"}
        </div>

        <span className="font-semibold">
          {user?.name ||
            "Provider"}
        </span>

        <FiChevronDown
          className={`transition ${isOpen
              ? "rotate-180"
              : ""
            } `}
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
          bg-white
          rounded-3xl
          shadow-2xl
          border
          overflow-hidden
          z-50
          "
        >
          {/* Header */}

          <div className="p-5 bg-gray-50">
            <div className="flex items-center gap-4">
              <div
                className="
                w-14
                h-14
                rounded-full
                bg-green-500
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-xl
                "
              >
                {user?.name
                  ?.charAt(0)
                  .toUpperCase()}
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  {user?.name}
                </h3>

                <p
                  className="
                  text-sm
                  text-gray-500
                  capitalize
                  "
                >
                  {user?.role}
                </p>
              </div>
            </div>
          </div>

          {/* Menu */}

          <Link
            to="/provider-dashboard"
            className="
            block
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            Dashboard
          </Link>

          <Link
            to="/provider-jobs"
            className="
            block
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            Jobs
          </Link>

          <Link
            to="/earnings"
            className="
            block
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            Earnings
          </Link>

          <Link
            to="/reviews"
            className="
            block
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            Reviews
          </Link>

          <Link
            to="/settings"
            className="
            block
            px-6
            py-4
            hover:bg-gray-100
            "
          >
            Settings
          </Link>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="
            w-full
            px-6
            py-4
            text-left
            text-red-500
            hover:bg-red-50
            border-t
            flex
            items-center
            gap-2
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

export default ProviderMenu;