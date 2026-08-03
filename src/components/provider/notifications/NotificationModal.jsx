import {
  FaBell,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaStar,
  FaTimesCircle,
  FaTimes,
} from "react-icons/fa";

const NotificationModal = ({
  notification,
  onClose,
}) => {
  if (!notification) {
    return null;
  }

  const getIcon = () => {
    switch (notification.type) {
      case "Booking":
        return (
          <FaCalendarCheck className="text-3xl text-blue-600" />
        );

      case "Payment":
        return (
          <FaMoneyBillWave className="text-3xl text-green-600" />
        );

      case "Review":
        return (
          <FaStar className="text-3xl text-yellow-500" />
        );

      case "Cancelled":
        return (
          <FaTimesCircle className="text-3xl text-red-500" />
        );

      default:
        return (
          <FaBell className="text-3xl text-amber-500" />
        );
    }
  };

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/50
      p-5
      "
    >
      <div
        className="
        w-full
        max-w-2xl
        rounded-3xl
        bg-white
        p-8
        shadow-xl
        "
      >
        {/* Header */}

        <div
          className="
          flex
          items-start
          justify-between
          gap-5
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
              rounded-2xl
              bg-gray-100
              p-4
              "
            >
              {getIcon()}
            </div>

            <div>
              <h2
                className="
                text-2xl
                font-bold
                "
              >
                {notification.title}
              </h2>

              <p
                className="
                mt-2
                text-gray-500
                "
              >
                {notification.type}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="
            rounded-xl
            bg-gray-100
            p-3
            hover:bg-gray-200
            "
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}

        <div className="mt-8 space-y-5">
          <div>
            <h3 className="font-semibold">
              Message
            </h3>

            <p
              className="
              mt-2
              leading-7
              text-gray-600
              "
            >
              {notification.message}
            </p>
          </div>

          <div
            className="
            grid
            gap-5
            md:grid-cols-2
            "
          >
            <div>
              <h4 className="font-semibold">
                Date
              </h4>

              <p className="mt-2 text-gray-600">
                {notification.date}
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Time
              </h4>

              <p className="mt-2 text-gray-600">
                {notification.time}
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Type
              </h4>

              <p className="mt-2 text-gray-600">
                {notification.type}
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Status
              </h4>

              <span
                className={`
                mt-2
                inline-block
                rounded-full
                px-4
                py-2
                text-sm
                font-semibold

                ${notification.status ===
                    "Unread"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                  }
                `}
              >
                {notification.status}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
          mt-10
          flex
          justify-end
          "
        >
          <button
            onClick={onClose}
            className="
            rounded-xl
            bg-amber-500
            px-6
            py-3
            font-semibold
            text-white
            hover:bg-amber-600
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;