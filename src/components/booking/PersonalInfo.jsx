const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Personal Information
        </h2>

        <p className="mt-2 text-gray-600">
          Please enter your personal details.
        </p>

      </div>

      {/* Name */}

      <div className="mb-6">

        <label className="block mb-2 font-semibold text-gray-700">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="
            w-full
            border
            border-gray-300
            rounded-xl
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-amber-500
          "
        />

      </div>

      {/* Email + Mobile */}

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-amber-500
            "
          />

        </div>

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Mobile Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter mobile number"
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-amber-500
            "
          />

        </div>

      </div>

    </div>
  );
};

export default PersonalInfo;