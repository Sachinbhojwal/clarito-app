import { NavLink } from "react-router-dom";
import { LogOut, X } from "lucide-react";

import { adminMenu } from "../../data/adminMenu";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <aside
      className={`
        fixed
        top-0
        left-0
        z-50
        h-screen
        w-72
        bg-white
        border-r
        border-gray-200
        shadow-xl
        transition-transform
        duration-300

        ${sidebarOpen
          ? "translate-x-0"
          : "-translate-x-full"
        }

        lg:translate-x-0
      `}
    >
      {/* Logo */}

      <div className="flex items-center justify-between h-20 px-6 border-b">

        <div>

          <h2 className="text-3xl font-extrabold text-amber-500">
            Clarito
          </h2>

          <p className="text-sm text-gray-500">
            Admin Panel
          </p>

        </div>

        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden"
        >
          <X size={24} />
        </button>

      </div>

      {/* Menu */}

      <nav className="flex-1 px-4 py-6 overflow-y-auto">

        {adminMenu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() =>
                setSidebarOpen(false)
              }
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-4
                px-5
                py-4
                rounded-xl
                mb-2
                font-medium
                transition-all
                duration-300

                ${isActive
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-amber-100 hover:text-amber-600"
                }
              `
              }
            >
              <Icon size={22} />

              <span>{item.title}</span>

            </NavLink>
          );
        })}

      </nav>

      {/* Footer */}

      <div className="absolute bottom-0 left-0 w-full p-5 border-t bg-white">

        <button
          className="
            flex
            items-center
            justify-center
            gap-3
            w-full
            py-3
            rounded-xl
            bg-red-500
            hover:bg-red-600
            text-white
            font-semibold
            transition
          "
        >
          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;