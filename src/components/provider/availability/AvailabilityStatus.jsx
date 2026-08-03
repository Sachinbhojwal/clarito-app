const AvailabilityStatus = ({
  isAvailable,
  setIsAvailable,
}) => {
  return (
    <section
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-6
      shadow-sm
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        "
      >
        <div>
          <h2
            className="
            text-2xl
            font-bold
            "
          >
            Availability Status
          </h2>

          <p
            className="
            mt-2
            text-gray-500
            "
          >
            Turn this off if you're not
            accepting new bookings.
          </p>
        </div>

        {/* Toggle */}

        <button
          onClick={() =>
            setIsAvailable(
              !isAvailable
            )
          }
          className={`
            relative
            h-8
            w-16
            rounded-full
            transition-all
            duration-300

            ${isAvailable
              ? "bg-green-500"
              : "bg-red-500"
            }
          `}
        >
          <span
            className={`
              absolute
              top-1
              h-6
              w-6
              rounded-full
              bg-white
              transition-all
              duration-300

              ${isAvailable
                ? "left-9"
                : "left-1"
              }
            `}
          />
        </button>
      </div>

      <div
        className={`
        mt-6
        rounded-2xl
        p-4
        font-semibold
        text-center
        ${isAvailable
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
          }
      `}
      >
        {isAvailable
          ? "🟢 You are currently Available for Booking"
          : "🔴 You are currently Unavailable"}
      </div>
    </section >
  );
};

export default AvailabilityStatus;