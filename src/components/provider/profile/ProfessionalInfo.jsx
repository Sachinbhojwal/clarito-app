const ProfessionalInfo = ({
  profile,
  setProfile,
}) => {
  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setProfile((prev) => ({
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
        Professional Information
      </h2>

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        "
      >
        {/* Service */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Service Category
          </label>

          <select
            name="service"
            value={profile.service}
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
            <option value="">
              Select Service
            </option>

            <option value="Electrician">
              Electrician
            </option>

            <option value="Plumber">
              Plumber
            </option>

            <option value="Carpenter">
              Carpenter
            </option>

            <option value="Cleaning">
              Cleaning
            </option>

            <option value="AC Repair">
              AC Repair
            </option>

            <option value="Painting">
              Painting
            </option>
          </select>
        </div>

        {/* Experience */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Experience
          </label>

          <input
            type="text"
            name="experience"
            value={profile.experience}
            onChange={handleChange}
            placeholder="e.g. 5 Years"
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

        {/* Starting Price */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Starting Price (₹)
          </label>

          <input
            type="number"
            name="startingPrice"
            value={
              profile.startingPrice ||
              ""
            }
            onChange={handleChange}
            placeholder="500"
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

        {/* Languages */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Languages Known
          </label>

          <input
            type="text"
            name="languages"
            value={
              profile.languages ||
              ""
            }
            onChange={handleChange}
            placeholder="Hindi, English"
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

        {/* Available Since */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Available Since
          </label>

          <input
            type="date"
            name="availableSince"
            value={
              profile.availableSince ||
              ""
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
          />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalInfo;