import { NavLink } from "react-router-dom";

import SearchBar from "../common/navbar/SearchBar";
import ProviderProfileMenu from "./ProviderProfileMenu";

import useAuth from "../../hooks/useAuth";

const ProviderDesktopNav = () => {
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
        to="/provider/dashboard"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-green-600"
            : "font-semibold hover:text-green-600 transition"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/provider/jobs"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-green-600"
            : "font-semibold hover:text-green-600 transition"
        }
      >
        Jobs
      </NavLink>

      <NavLink
        to="/provider/availability"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-green-600"
            : "font-semibold hover:text-green-600 transition"
        }
      >
        Availability
      </NavLink>

      <NavLink
        to="/provider/earnings"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-green-600"
            : "font-semibold hover:text-green-600 transition"
        }
      >
        Earnings
      </NavLink>

      <NavLink
        to="/provider/reviews"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-green-600"
            : "font-semibold hover:text-green-600 transition"
        }
      >
        Reviews
      </NavLink>

      <SearchBar />

      <ProviderProfileMenu
        user={user}
      />
    </nav>
  );
};

export default ProviderDesktopNav;