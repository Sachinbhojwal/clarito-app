import { FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { settingsData } from "../../data/admin/settingsData";

const SettingsCards = () => {
  const navigate = useNavigate();

  const handleManage = (title) => {
    const slug = title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\s+/g, "-");

    navigate(`/admin/settings/${slug}`);
  };

  return (
    <section
      className="
      grid
      gap-6
      sm:grid-cols-2
      xl:grid-cols-3
      "
    >
      {settingsData.map((setting) => (
        <div
          key={setting.id}
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          transition
          hover:-translate-y-1
          hover:shadow-lg
          "
        >
          <div
            className="
            flex
            items-center
            justify-between
            "
          >
            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-amber-100
              text-xl
              text-amber-600
              "
            >
              <FaCog />
            </div>

            <span
              className="
              rounded-full
              bg-green-100
              px-4
              py-2
              text-sm
              font-semibold
              text-green-600
              "
            >
              {setting.status}
            </span>
          </div>

          <h2
            className="
            mt-5
            text-2xl
            font-bold
            text-gray-800
            "
          >
            {setting.title}
          </h2>

          <p
            className="
            mt-3
            leading-7
            text-gray-500
            "
          >
            {setting.description}
          </p>

          <button
            onClick={() =>
              handleManage(setting.title)
            }
            className="
            mt-6
            flex
            w-full
            items-center
            justify-center
            rounded-2xl
            bg-amber-500
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-amber-600
            "
          >
            Manage Settings
          </button>
        </div>
      ))}
    </section>
  );
};

export default SettingsCards;