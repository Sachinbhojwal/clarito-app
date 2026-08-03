import {
  FaBell,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaStar,
  FaTimesCircle,
  FaEye,
  FaCheck,
  FaTrash,
} from "react-icons/fa";

const NotificationCard = ({
  notification,
  onView,
  onMarkAsRead,
  onDelete,
}) => {
  const getIcon = () => {
    switch (notification.type) {
      case "Booking":
        return (
          <FaCalendarCheck className="text-blue-600 text-2xl" />
        );

      case "Payment":
        return (
          <FaMoneyBillWave className="text-green-600 text-2xl" />
        );

      case "Review":
        return (
          <FaStar className="text-yellow-500 text-2xl" />
        );

      case "Cancelled":
        return (
          <FaTimesCircle className="text-red-500 text-2xl" />
        );

      default:
        return (
          <FaBell className="text-amber-500 text-2xl" />
        );
    }
  };

  return (
    <div
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      transition
      hover:shadow-md
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
        <div className="flex gap-4">
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
            <h3
              className="
              text-lg
              font-bold
              "
            >
              {notification.title}
            </h3>

            <p
              className="
              mt-2
              text-gray-600
              "
            >
              {notification.message}
            </p>

            <p
              className="
              mt-3
              text-sm
              text-gray-400
              "
            >
              {notification.date} •{" "}
              {notification.time}
            </p>
          </div>
        </div>

        <span
          className={`
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

      {/* Actions */}

      <div
        className="
        mt-6
        flex
        flex-wrap
        gap-3
        "
      >
        <button
          onClick={() =>
            onView(notification)
          }
          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-blue-500
          px-4
          py-3
          text-white
          hover:bg-blue-600
          "
        >
          <FaEye />

          View
        </button>

        {notification.status ===
          "Unread" && (
            <button
              onClick={() =>
                onMarkAsRead(
                  notification.id
                )
              }
              className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-green-500
            px-4
            py-3
            text-white
            hover:bg-green-600
            "
            >
              <FaCheck />

              Mark Read
            </button>
          )}

        <button
          onClick={() =>
            onDelete(
              notification.id
            )
          }
          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-red-500
          px-4
          py-3
          text-white
          hover:bg-red-600
          "
        >
          <FaTrash />

          Delete
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;