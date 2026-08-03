const BreakTime = ({
  breakTime,
  setBreakTime,
}) => {
  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setBreakTime((prev) => ({
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
        Break Time
      </h2>

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        "
      >
        {/* Break Start */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Break Start
          </label>

          <input
            type="time"
            name="startTime"
            value={
              breakTime.startTime
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

        {/* Break End */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Break End
          </label>

          <input
            type="time"
            name="endTime"
            value={
              breakTime.endTime
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
      </div>

      <p
        className="
        mt-4
        text-sm
        text-gray-500
        "
      >
        Customers won't be able to book
        appointments during this break.
      </p>
    </section>
  );
};

export default BreakTime;