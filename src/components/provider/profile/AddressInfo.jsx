const AddressInfo = ({
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
        Address Information
      </h2>

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        "
      >
        {/* Full Address */}

        <div className="md:col-span-2">
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Full Address
          </label>

          <textarea
            name="address"
            rows={4}
            value={profile.address}
            onChange={handleChange}
            placeholder="Enter your complete address"
            className="
            w-full
            resize-none
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

        {/* City */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            City
          </label>

          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={handleChange}
            placeholder="Enter city"
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

        {/* State */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            State
          </label>

          <input
            type="text"
            name="state"
            value={profile.state}
            onChange={handleChange}
            placeholder="Enter state"
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

        {/* Pincode */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Pincode
          </label>

          <input
            type="text"
            name="pincode"
            value={
              profile.pincode ||
              ""
            }
            onChange={handleChange}
            placeholder="Enter pincode"
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

        {/* Google Map */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Google Map Link
          </label>

          <input
            type="url"
            name="mapLocation"
            value={
              profile.mapLocation ||
              ""
            }
            onChange={handleChange}
            placeholder="https://maps.google.com/..."
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

export default AddressInfo;