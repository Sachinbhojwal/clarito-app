const PrivacySettings = ({
  settings,
  setSettings,
}) => {
  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = (
    field
  ) => {
    setSettings((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const ToggleItem = ({
    title,
    description,
    field,
  }) => (
    <div
      className="
      flex
      items-center
      justify-between
      gap-5
      rounded-2xl
      border
      border-gray-200
      p-5
      "
    >
      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p
          className="
          mt-1
          text-sm
          text-gray-500
          "
        >
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() =>
          handleToggle(field)
        }
        className={`
          relative
          h-7
          w-14
          rounded-full
          transition

          ${settings[field]
            ? "bg-green-500"
            : "bg-gray-300"
          }
        `}
      >
        <span
          className={`
            absolute
            top-1
            h-5
            w-5
            rounded-full
            bg-white
            transition

            ${settings[field]
              ? "left-8"
              : "left-1"
            }
          `}
        />
      </button>
    </div>
  );

  return (
    <section
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-8
      shadow-sm
      "
    >
      <h2
        className="
        mb-8
        text-2xl
        font-bold
        "
      >
        Privacy Settings
      </h2>

      {/* Visibility */}

      <div className="mb-8">
        <label
          className="
          mb-2
          block
          font-semibold
          "
        >
          Profile Visibility
        </label>

        <select
          name="profileVisibility"
          value={
            settings.profileVisibility
          }
          onChange={handleChange}
          className="
          w-full
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          outline-none
          focus:border-amber-500
          "
        >
          <option value="Public">
            Public
          </option>

          <option value="Private">
            Private
          </option>

          <option value="Only Customers">
            Only Customers
          </option>
        </select>
      </div>

      <div className="space-y-5">
        <ToggleItem
          title="Two-Factor Authentication"
          description="Add an extra layer of security to your account."
          field="twoFactorAuth"
        />

        <ToggleItem
          title="Show Phone Number"
          description="Allow customers to see your contact number."
          field="showPhone"
        />

        <ToggleItem
          title="Show Address"
          description="Display your service address on your profile."
          field="showAddress"
        />

        <ToggleItem
          title="Allow Customer Search"
          description="Allow customers to find your profile in search results."
          field="allowSearch"
        />
      </div>
    </section>
  );
};

export default PrivacySettings;