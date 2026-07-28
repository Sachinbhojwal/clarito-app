import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiLogOut,
} from "react-icons/fi";

import { navLinks } from "../../../data/NavLinks";

const MobileMenu = ({
  isOpen,
  setIsOpen,
  user,
  handleLogout,
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t shadow-lg">
      <div className="flex flex-col gap-2 p-5">

        {/* Main Navigation */}

        {navLinks?.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="
            px-3
            py-3
            rounded-lg
            font-semibold
            hover:bg-gray-100
            "
          >
            {link.name}
          </NavLink>
        ))}

        {/* Search */}

        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-3 mt-2">
          <FiSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="
            bg-transparent
            outline-none
            ml-2
            w-full
            "
          />
        </div>

        {!user ? (
          <>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="
              mt-4
              bg-amber-500
              text-white
              py-3
              rounded-lg
              text-center
              font-semibold
              "
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="
              border
              border-amber-500
              text-amber-500
              py-3
              rounded-lg
              text-center
              font-semibold
              "
            >
              Register
            </Link>
          </>
        ) : (
          <>
            {/* User Info */}

            <div className="flex items-center gap-3 mt-4 border-b pb-4">
              <div
                className="
                w-12
                h-12
                rounded-full
                bg-amber-500
                flex
                items-center
                justify-center
                text-white
                font-bold
                "
              >
                {user?.name
                  ? user.name
                    .charAt(0)
                    .toUpperCase()
                  : "U"}
              </div>

              <div>
                <h3 className="font-semibold">
                  {user?.name}
                </h3>

                <p className="text-sm capitalize text-gray-500">
                  {user?.role}
                </p>
              </div>
            </div>

            {/* Customer */}

            {user?.role === "customer" && (
              <>
                <p className="font-semibold mt-4 text-gray-500">
                  My Account
                </p>

                <Link
                  to="/customer-dashboard"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-gray-100"
                >
                  Dashboard
                </Link>

                <Link
                  to="/my-bookings"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-gray-100"
                >
                  My Bookings
                </Link>

                <Link
                  to="/track-booking"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-gray-100"
                >
                  Track Booking
                </Link>

                <Link
                  to="/notifications"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-gray-100"
                >
                  Notifications
                </Link>
              </>
            )}

            {/* Provider */}

            {user?.role === "provider" && (
              <>
                <p className="font-semibold mt-4 text-gray-500">
                  Provider
                </p>

                <Link
                  to="/provider-dashboard"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-gray-100"
                >
                  Dashboard
                </Link>

                <Link
                  to="/provider-jobs"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-gray-100"
                >
                  Jobs
                </Link>

                <Link
                  to="/earnings"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-gray-100"
                >
                  Earnings
                </Link>
              </>
            )}

            {/* Logout */}

            <button
              onClick={handleLogout}
              className="
              mt-5
              bg-red-500
              text-white
              py-3
              rounded-lg
              flex
              items-center
              justify-center
              gap-2
              "
            >
              <FiLogOut />
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;