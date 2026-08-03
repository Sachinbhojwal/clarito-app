import { NavLink } from "react-router-dom";

import SearchBar from "../common/navbar/SearchBar";
import CustomerProfileMenu from "./CustomerProfileMenu";

import useAuth from "../../hooks/useAuth";

const CustomerDesktopNav = () => {
  const { user } = useAuth();

  return (
    <nav
      className="
      hidden
      lg:flex
      items-center
      gap-7
      "
    >
      <NavLink
        to="/customer/dashboard"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-amber-500"
            : "font-semibold hover:text-amber-500"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/customer/services"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-amber-500"
            : "font-semibold hover:text-amber-500"
        }
      >
        Services
      </NavLink>

      <NavLink
        to="/customer/bookings"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-amber-500"
            : "font-semibold hover:text-amber-500"
        }
      >
        My Bookings
      </NavLink>

      <NavLink
        to="/customer/track-booking"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-amber-500"
            : "font-semibold hover:text-amber-500"
        }
      >
        Track Booking
      </NavLink>

      <NavLink
        to="/customer/notifications"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-amber-500"
            : "font-semibold hover:text-amber-500"
        }
      >
        Notifications
      </NavLink>

      <NavLink
        to="/customer/profile"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-amber-500"
            : "font-semibold hover:text-amber-500"
        }
      >
        Profile
      </NavLink>

      <SearchBar />

      <CustomerProfileMenu
        user={user}
      />
    </nav>
  );
};

export default CustomerDesktopNav;