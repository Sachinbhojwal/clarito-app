const TimeSlots = ({
  timeSlots,
  setTimeSlots,
}) => {
  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setTimeSlots((prev) => ({
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
        Working Hours
      </h2>

      <div
        className="
        grid
        gap-6
        md:grid-cols-3
        "
      >
        {/* Start Time */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Start Time
          </label>

          <input
            type="time"
            name="startTime"
            value={
              timeSlots.startTime
            }
            onChange={
              handleChange
            }
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
          />
        </div>

        {/* End Time */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            End Time
          </label>

          <input
            type="time"
            name="endTime"
            value={
              timeSlots.endTime
            }
            onChange={
              handleChange
            }
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
          />
        </div>

        {/* Slot Duration */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Slot Duration
          </label>

          <select
            name="slotDuration"
            value={
              timeSlots.slotDuration
            }
            onChange={
              handleChange
            }
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
            <option value="30">
              30 Minutes
            </option>

            <option value="60">
              1 Hour
            </option>

            <option value="90">
              1 Hour 30 Minutes
            </option>

            <option value="120">
              2 Hours
            </option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default TimeSlots;