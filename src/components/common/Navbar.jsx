import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiLogOut,
} from "react-icons/fi";

import useAuth from "../../hooks/useAuth";
import { navLinks } from "../../data/NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            className="text-3xl font-extrabold text-amber-500"
          >
            Clarito
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (

              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative py-2 font-semibold transition-all duration-300 ${isActive
                    ? "text-amber-500"
                    : "text-gray-700 hover:text-amber-500"
                  }`
                }
              >

                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-amber-500 transition-all duration-300 ${isActive
                          ? "w-full"
                          : "w-0"
                        }`}
                    ></span>

                  </>
                )}

              </NavLink>

            ))}

            {/* Search */}

            <div className="hidden xl:flex items-center bg-gray-100 rounded-full px-4 py-2">

              <FiSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none ml-2 text-sm w-40"
              />

            </div>

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="font-semibold hover:text-amber-500"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">

                    {user.name.charAt(0).toUpperCase()}

                  </div>

                  <div>

                    <h4 className="font-semibold">
                      {user.name}
                    </h4>

                    <p className="text-xs capitalize text-gray-500">
                      {user.role}
                    </p>

                  </div>

                </div>

                <Link
                  to={
                    user.role === "provider"
                      ? "/provider-dashboard"
                      : "/customer-dashboard"
                  }
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full transition"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-500 hover:text-red-600"
                >
                  <FiLogOut />

                  Logout

                </button>
              </>
            )}

          </nav>

          {/* Mobile Button */}

          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="lg:hidden bg-white border-t shadow-lg">

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((link) => (

              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500 font-semibold"
                    : "text-gray-700"
                }
              >
                {link.name}
              </NavLink>

            ))}

            {!user ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="bg-amber-500 text-white py-3 rounded-xl text-center"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="border border-amber-500 text-amber-500 py-3 rounded-xl text-center"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={
                    user.role === "provider"
                      ? "/provider-dashboard"
                      : "/customer-dashboard"
                  }
                  onClick={() => setIsOpen(false)}
                  className="bg-green-500 text-white py-3 rounded-xl text-center"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white py-3 rounded-xl"
                >
                  Logout
                </button>
              </>
            )}

          </div>

        </div>

      )}

    </header>
  );
};

export default Navbar;