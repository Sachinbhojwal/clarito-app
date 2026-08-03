const PersonalDetails = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">
        Personal Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mt-6">

        {/* Full Name */}

        <div>
          <label className="font-medium">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
            required
          />
        </div>

        {/* Email */}

        <div>
          <label className="font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
            required
          />
        </div>

        {/* Phone */}

        <div>
          <label className="font-medium">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
            required
          />
        </div>

        {/* DOB */}

        <div>
          <label className="font-medium">
            Date of Birth
          </label>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          />
        </div>

        {/* Gender */}

        <div>
          <label className="font-medium">
            Gender
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
            "
          >
            <option value="">
              Select Gender
            </option>

            <option value="male">
              Male
            </option>

            <option value="female">
              Female
            </option>

            <option value="other">
              Other
            </option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default PersonalDetails;