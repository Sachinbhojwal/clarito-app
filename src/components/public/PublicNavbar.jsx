import { Link, NavLink } from "react-router-dom";

import { publicNavLinks } from "../../data/publicNavLinks";

const PublicNavbar = () => {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-white
      border-b
      shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-5">
        <div
          className="
          flex
          items-center
          justify-between
          h-20
          "
        >
          {/* Logo */}

          <Link
            to="/"
            className="
            text-3xl
            font-bold
            text-amber-500
            "
          >
            Clarito
          </Link>

          {/* Nav Links */}

          <nav
            className="
            hidden
            md:flex
            items-center
            gap-8
            "
          >
            {publicNavLinks.map(
              (item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({
                    isActive,
                  }) =>
                    isActive
                      ? "font-semibold text-amber-500"
                      : "font-semibold text-gray-700 hover:text-amber-500"
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>

          {/* Buttons */}

          <div className="flex items-center gap-4">
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
              px-5
              py-2
              rounded-full
              bg-amber-500
              text-white
              hover:bg-amber-600
              "
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;