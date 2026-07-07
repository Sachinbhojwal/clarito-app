import {
  Menu,
  Bell,
  Mail,
  Search,
  ChevronDown,
} from "lucide-react";

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">

      <div className="flex items-center justify-between h-20 px-6">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Menu size={24} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              Welcome back, Admin 👋
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 h-11 w-72">

            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent flex-1 px-3 outline-none text-sm"
            />

          </div>

          {/* Notification */}
          <button className="relative p-3 rounded-xl bg-gray-100 hover:bg-amber-100 transition">

            <Bell size={20} />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

          </button>

          {/* Messages */}
          <button className="relative p-3 rounded-xl bg-gray-100 hover:bg-amber-100 transition">

            <Mail size={20} />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500"></span>

          </button>

          {/* Admin Profile */}
          <button className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-xl px-3 py-2 transition">

            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Admin"
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="hidden md:block text-left">

              <h3 className="font-semibold text-gray-800">
                Admin
              </h3>

              <p className="text-xs text-gray-500">
                Super Admin
              </p>

            </div>

            <ChevronDown size={18} />

          </button>

        </div>

      </div>

    </header>
  );
};

export default Header;