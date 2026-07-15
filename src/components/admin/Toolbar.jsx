import { FaBell, FaSearch } from "react-icons/fa";

import { adminProfile } from "../../data/admin/adminProfile";

const Topbar = () => {
  return (
    <header
      className="
      sticky
      top-0
      z-40
      border-b
      border-gray-200
      bg-white
      shadow-sm
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        gap-5
        px-4
        py-5
        sm:px-6
        lg:px-8
        "
      >
        <div className="hidden md:block relative">

          <input
            type="text"
            placeholder="Search here..."
            className="
            w-80
            rounded-2xl
            border
            border-gray-200
            bg-gray-100
            py-3
            pl-12
            pr-5
            outline-none
            transition
            focus:border-amber-500
            focus:bg-white
            "
          />

          <FaSearch
            className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-gray-400
            "
          />

        </div>

        <div className="flex items-center gap-6 ml-auto">

          <button
            className="
            relative
            rounded-full
            p-2
            transition
            hover:bg-gray-100
            "
          >
            <FaBell className="text-2xl text-gray-700" />

            <span
              className="
              absolute
              -right-1
              -top-1
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-red-500
              text-xs
              font-semibold
              text-white
              "
            >
              5
            </span>
          </button>

          <div
            className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-gray-50
            px-4
            py-2
            "
          >
            <img
              src={adminProfile.image}
              alt={adminProfile.name}
              className="
              h-12
              w-12
              rounded-full
              border-2
              border-amber-500
              object-cover
              "
            />

            <div className="hidden sm:block">

              <h3 className="font-semibold text-gray-800">
                {adminProfile.name}
              </h3>

              <p className="text-sm text-gray-500">
                {adminProfile.role}
              </p>

            </div>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Topbar;