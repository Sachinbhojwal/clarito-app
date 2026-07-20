import {
  FaBell,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTrash,
} from "react-icons/fa";

const NotificationCard = ({
  title,
  message,
  time,
  type,
  read,
}) => {
  const getNotificationIcon = () => {
    switch (type) {
      case "success":
        return (
          <FaCheckCircle className="text-green-600" />
        );

      case "warning":
        return (
          <FaExclamationTriangle className="text-amber-500" />
        );

      case "info":
        return (
          <FaInfoCircle className="text-blue-600" />
        );

      default:
        return (
          <FaBell className="text-gray-600" />
        );
    }
  };

  const getNotificationStyle = () => {
    switch (type) {
      case "success":
        return "bg-green-50";

      case "warning":
        return "bg-amber-50";

      case "info":
        return "bg-blue-50";

      default:
        return "bg-gray-50";
    }
  };

  return (
    <div
      className={`
      rounded-3xl
      p-6
      shadow-sm
      transition
      duration-300
      hover:shadow-md
      ${getNotificationStyle()}
      `}
    >
      {/* Header */}

      <div
        className="
        flex
        items-start
        justify-between
        gap-4
        "
      >
        <div
          className="
          flex
          flex-1
          gap-4
          "
        >
          {/* Icon */}

          <div
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-white
            text-2xl
            shadow-sm
            "
          >
            {getNotificationIcon()}
          </div>

          {/* Content */}

          <div className="flex-1">
            <h2
              className="
              text-xl
              font-bold
              text-gray-800
              "
            >
              {title}
            </h2>

            <p
              className="
              mt-3
              leading-7
              text-gray-600
              "
            >
              {message}
            </p>

            <p
              className="
              mt-4
              text-sm
              font-semibold
              text-gray-500
              "
            >
              {time}
            </p>
          </div>
        </div>

        {/* Read Status */}

        {!read && (
          <span
            className="
            rounded-full
            bg-red-500
            px-3
            py-1
            text-xs
            font-semibold
            text-white
            "
          >
            New
          </span>
        )}
      </div>

      {/* Buttons */}

      <div
        className="
        mt-8
        flex
        flex-col
        gap-4
        sm:flex-row
        "
      >
        {/* Mark as Read */}

        <button
          className="
          flex-1
          rounded-2xl
          bg-green-500
          px-5
          py-3
          font-semibold
          text-white
          transition
          hover:bg-green-600
          "
        >
          Mark as Read
        </button>

        {/* View Details */}

        <button
          className="
          flex-1
          rounded-2xl
          bg-amber-500
          px-5
          py-3
          font-semibold
          text-white
          transition
          hover:bg-amber-600
          "
        >
          View Details
        </button>

        {/* Delete */}

        <button
          className="
          flex
          items-center
          justify-center
          rounded-2xl
          bg-red-500
          px-5
          py-3
          text-white
          transition
          hover:bg-red-600
          "
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;