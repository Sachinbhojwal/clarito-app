import { FaSearch, FaShieldAlt } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiServerFill } from "react-icons/ri";

import SettingsCards from "../../components/admin/SettingsCards";
import { settingsData } from "../../data/admin/settingsData";

const Settings = () => {
  const totalSettings = settingsData.length;

  const activeSettings = settingsData.filter(
    (setting) => setting.status === "Active"
  ).length;

  return (
    <section className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Settings Management
        </h1>

        <p className="mt-2 text-gray-500">
          Manage application settings, security,
          payments and system configurations.
        </p>
      </div>

      {/* Analytics Cards */}

      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
        "
      >
        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-500">
              Total Settings
            </p>

            <MdSettings className="text-2xl text-amber-500" />
          </div>

          <h2 className="mt-4 text-4xl font-bold text-gray-800">
            {totalSettings}
          </h2>
        </div>

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-500">
              Active Settings
            </p>

            <BsCheckCircleFill className="text-2xl text-green-500" />
          </div>

          <h2 className="mt-4 text-4xl font-bold text-green-600">
            {activeSettings}
          </h2>
        </div>

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-500">
              System Status
            </p>

            <RiServerFill className="text-2xl text-blue-500" />
          </div>

          <h2 className="mt-4 text-2xl font-bold text-blue-600">
            Running
          </h2>
        </div>

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-500">
              Security Status
            </p>

            <FaShieldAlt className="text-2xl text-purple-500" />
          </div>

          <h2 className="mt-4 text-2xl font-bold text-purple-600">
            Protected
          </h2>
        </div>
      </div>

      {/* Search Box */}

      <div
        className="
        rounded-3xl
        bg-white
        p-6
        shadow-sm
        "
      >
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search settings..."
            className="
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            py-3
            pl-12
            pr-4
            outline-none
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
      </div>

      {/* Settings Cards */}

      <SettingsCards />
    </section>
  );
};

export default Settings;