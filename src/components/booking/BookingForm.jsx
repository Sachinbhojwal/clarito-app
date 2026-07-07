const BookingForm = ({
  formData,
  handleChange,
  handleSubmit,
  loading,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-2">
        Booking Details
      </h2>

      <p className="text-gray-500 mb-8">
        Please fill all required information.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Name */}

        <div>
          <label className="block font-semibold mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        {/* Email */}

        <div>
          <label className="block font-semibold mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        {/* Phone */}

        <div>
          <label className="block font-semibold mb-2">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        {/* Date */}

        <div>
          <label className="block font-semibold mb-2">
            Booking Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        {/* Time */}

        <div>
          <label className="block font-semibold mb-2">
            Preferred Time
          </label>

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

      </div>

      {/* Address */}

      <div className="mt-6">

        <label className="block font-semibold mb-2">
          Full Address
        </label>

        <textarea
          rows="4"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter complete address"
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none resize-none"
        />

      </div>

      {/* Notes */}

      <div className="mt-6">

        <label className="block font-semibold mb-2">
          Additional Notes
        </label>

        <textarea
          rows="4"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any special instructions..."
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none resize-none"
        />

      </div>

      {/* Features */}

      <div className="grid md:grid-cols-3 gap-5 mt-8">

        <div className="bg-gray-50 rounded-2xl p-4 text-center">

          <div className="text-3xl mb-2">
            ✅
          </div>

          <h4 className="font-semibold">
            Verified Professionals
          </h4>

        </div>

        <div className="bg-gray-50 rounded-2xl p-4 text-center">

          <div className="text-3xl mb-2">
            ⚡
          </div>

          <h4 className="font-semibold">
            Fast Service
          </h4>

        </div>

        <div className="bg-gray-50 rounded-2xl p-4 text-center">

          <div className="text-3xl mb-2">
            🛡️
          </div>

          <h4 className="font-semibold">
            Secure Booking
          </h4>

        </div>

      </div>

      {/* Submit */}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full mt-10 bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-2xl text-lg font-bold transition duration-300 disabled:opacity-60"
      >
        {loading
          ? "Booking..."
          : "Confirm Booking"}
      </button>

    </div>
  );
};

export default BookingForm;