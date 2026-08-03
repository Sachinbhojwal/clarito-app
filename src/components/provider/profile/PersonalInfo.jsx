const PersonalInfo = ({
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
        Personal Information
      </h2>

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        "
      >
        {/* Full Name */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter full name"
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

        {/* Email */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Enter email"
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

        {/* Phone */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
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

        {/* About */}

        <div className="md:col-span-2">
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            About Me
          </label>

          <textarea
            name="about"
            rows={5}
            value={profile.about}
            onChange={handleChange}
            placeholder="Write something about yourself..."
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            resize-none
            focus:border-amber-500
            "
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;