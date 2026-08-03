const AccountSettings = ({
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
        Account Settings
      </h2>

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        "
      >
        {/* Account Status */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Account Status
          </label>

          <select
            name="accountStatus"
            value={
              settings.accountStatus
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
            <option value="Active">
              Active
            </option>

            <option value="Offline">
              Offline
            </option>

            <option value="Vacation">
              Vacation
            </option>
          </select>
        </div>

        {/* Language */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Preferred Language
          </label>

          <select
            name="language"
            value={
              settings.language
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
            <option value="English">
              English
            </option>

            <option value="Hindi">
              Hindi
            </option>

            <option value="Gujarati">
              Gujarati
            </option>
          </select>
        </div>

        {/* Time Zone */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Time Zone
          </label>

          <select
            name="timeZone"
            value={
              settings.timeZone
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
            <option value="Asia/Kolkata">
              Asia/Kolkata
            </option>

            <option value="UTC">
              UTC
            </option>

            <option value="America/New_York">
              America/New_York
            </option>
          </select>
        </div>

        {/* Currency */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Currency
          </label>

          <select
            name="currency"
            value={
              settings.currency
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
            <option value="INR">
              INR (₹)
            </option>

            <option value="USD">
              USD ($)
            </option>

            <option value="EUR">
              EUR (€)
            </option>
          </select>
        </div>

        {/* Date Format */}

        <div className="md:col-span-2">
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Date Format
          </label>

          <select
            name="dateFormat"
            value={
              settings.dateFormat
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
            <option value="DD/MM/YYYY">
              DD/MM/YYYY
            </option>

            <option value="MM/DD/YYYY">
              MM/DD/YYYY
            </option>

            <option value="YYYY-MM-DD">
              YYYY-MM-DD
            </option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;