const NotificationSettings = ({
  settings,
  setSettings,
}) => {
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
      gap-6
      rounded-2xl
      border
      border-gray-200
      p-5
      "
    >
      <div>
        <h3
          className="
          font-semibold
          "
        >
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
        Notification Settings
      </h2>

      <div
        className="
        space-y-5
        "
      >
        <ToggleItem
          title="Email Notifications"
          description="Receive booking and account updates by email."
          field="emailNotifications"
        />

        <ToggleItem
          title="SMS Notifications"
          description="Receive important alerts through SMS."
          field="smsNotifications"
        />

        <ToggleItem
          title="Push Notifications"
          description="Receive instant notifications on your device."
          field="pushNotifications"
        />

        <ToggleItem
          title="Booking Notifications"
          description="Get notified whenever a new booking is received."
          field="bookingNotifications"
        />

        <ToggleItem
          title="Payment Notifications"
          description="Receive alerts for completed payments and withdrawals."
          field="paymentNotifications"
        />
      </div>
    </section>
  );
};

export default NotificationSettings;