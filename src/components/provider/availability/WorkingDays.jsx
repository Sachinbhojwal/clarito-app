const WorkingDays = ({
  days,
  setDays,
}) => {
  const toggleDay = (id) => {
    setDays((prev) =>
      prev.map((day) =>
        day.id === id
          ? {
            ...day,
            active: !day.active,
          }
          : day
      )
    );
  };

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
      <h2
        className="
        mb-6
        text-2xl
        font-bold
        "
      >
        Working Days
      </h2>

      <div className="space-y-4">
        {days.map((day) => (
          <div
            key={day.id}
            className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-gray-200
            p-4
            "
          >
            <div>
              <h3
                className="
                text-lg
                font-semibold
                "
              >
                {day.day}
              </h3>

              <p
                className="
                text-sm
                text-gray-500
                "
              >
                {day.active
                  ? "Available"
                  : "Day Off"}
              </p>
            </div>

            <button
              onClick={() =>
                toggleDay(day.id)
              }
              className={`
                relative
                h-8
                w-16
                rounded-full
                transition-all
                duration-300

                ${day.active
                  ? "bg-green-500"
                  : "bg-gray-300"
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

                  ${day.active
                    ? "left-9"
                    : "left-1"
                  }
                `}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingDays;