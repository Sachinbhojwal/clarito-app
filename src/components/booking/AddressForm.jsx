const AddressForm = ({ formData, handleChange }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 mt-8">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Address Details
        </h2>

        <p className="mt-2 text-gray-600">
          Enter the address where you want the service.
        </p>

      </div>

      {/* House No */}

      <div className="mb-6">

        <label className="block mb-2 font-semibold text-gray-700">
          House / Flat No.
        </label>

        <input
          type="text"
          name="house"
          value={formData.house}
          onChange={handleChange}
          placeholder="House / Flat Number"
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

      {/* Street */}

      <div className="mb-6">

        <label className="block mb-2 font-semibold text-gray-700">
          Street / Area
        </label>

        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street / Area"
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

      {/* City + State */}

      <div className="grid md:grid-cols-2 gap-6 mb-6">

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
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
            State
          </label>

          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
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

      {/* PIN */}

      <div>

        <label className="block mb-2 font-semibold text-gray-700">
          PIN Code
        </label>

        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="PIN Code"
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
  );
};

export default AddressForm;