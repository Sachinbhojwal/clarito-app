const AddressDetails = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">
        Address Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mt-6">

        {/* State */}

        <div>
          <label className="font-medium">
            State
          </label>

          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter State"
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

        {/* City */}

        <div>
          <label className="font-medium">
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter City"
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

        {/* Address */}

        <div className="md:col-span-2">
          <label className="font-medium">
            Full Address
          </label>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Full Address"
            rows="4"
            className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              resize-none
            "
            required
          />
        </div>

        {/* Pincode */}

        <div>
          <label className="font-medium">
            Pincode
          </label>

          <input
            type="number"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Enter Pincode"
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

      </div>
    </div>
  );
};

export default AddressDetails;