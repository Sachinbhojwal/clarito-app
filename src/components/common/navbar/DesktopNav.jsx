import { Link, NavLink } from "react-router-dom";

import SearchBar from "./SearchBar";
import CustomerMenu from "./CustomerMenu";
import ProviderMenu from "./ProviderMenu";

import { navLinks } from "../../../data/NavLinks";

const DesktopNav = ({
  user,
  handleLogout,
}) => {
  return (
    <nav
      className="
      hidden
      md:flex
      items-center
      gap-7
      "
    >
      {/* Navigation Links */}

      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          end={link.path === "/"}
          className={({ isActive }) =>
            isActive
              ? "text-amber-500 font-semibold"
              : "text-gray-700 font-semibold hover:text-amber-500"
          }
        >
          {link.name}
        </NavLink>
      ))}

      <SearchBar />

      {!user ? (
        <>
          <Link
            to="/login"
            className="
            font-semibold
            hover:text-amber-500
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
            bg-amber-500
            hover:bg-amber-600
            text-white
            px-5
            py-2
            rounded-full
            "
          >
            Register
          </Link>
        </>
      ) : (
        <>
          {/* Role Based Dropdown */}

          {user?.role === "customer" && (
            <CustomerMenu
              user={user}
              handleLogout={handleLogout}
            />
          )}

          {user?.role === "provider" && (
            <ProviderMenu
              user={user}
              handleLogout={handleLogout}
            />
          )}
        </>
      )}
    </nav>
  );
};

export default DesktopNav;