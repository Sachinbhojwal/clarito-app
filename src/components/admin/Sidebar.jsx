import { NavLink } from "react-router-dom";

import { FaSignOutAlt } from "react-icons/fa";

import { sidebarData } from "../../data/admin/sidebarData";

const Sidebar = () => {
  return (
    <aside
      className="
      fixed
      top-0
      left-0
      z-50
      hidden
      h-screen
      w-72
      flex-col
      overflow-y-auto
      border-r
      border-gray-200
      bg-white
      shadow-lg
      lg:flex
      "
    >
      <div className="border-b border-gray-200 px-8 py-8">
        <h1 className="text-4xl font-bold text-amber-500">
          CLARITO
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Super Admin Dashboard
        </p>
      </div>

      <nav className="flex-1 space-y-3 px-5 py-8">
        {sidebarData.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.slug}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4
                text-base
                font-semibold
                transition-all
                duration-300
                ${isActive
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                }
                `
              }
            >
              <Icon className="text-xl" />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-gray-200 p-5">
        <button
          className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-red-500
          py-4
          font-semibold
          text-white
          transition
          duration-300
          hover:bg-red-600
          "
        >
          <FaSignOutAlt className="text-lg" />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;