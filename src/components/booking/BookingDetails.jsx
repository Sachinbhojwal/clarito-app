import { services } from "../../data/services";

const BookingDetails = ({ formData, handleChange }) => {
  const timeSlots = [
    "09:00 AM - 11:00 AM",
    "11:00 AM - 01:00 PM",
    "01:00 PM - 03:00 PM",
    "03:00 PM - 05:00 PM",
    "05:00 PM - 07:00 PM",
    "07:00 PM - 09:00 PM",
  ];

  return (
    <div className="bg-white rounded-3xl shadow-md p-8 mt-8">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Booking Details
        </h2>

        <p className="mt-2 text-gray-600">
          Select your preferred service, booking date and time.
        </p>

      </div>

      {/* Service */}

      <div className="mb-6">

        <label className="block mb-2 font-semibold text-gray-700">
          Select Service
        </label>

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
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
        >

          <option value="">
            Select a Service
          </option>

          {services.map((service) => (

            <option
              key={service.id}
              value={service.title}
            >
              {service.title}
            </option>

          ))}

        </select>

      </div>

      {/* Date + Time */}

      <div className="grid md:grid-cols-2 gap-6 mb-6">

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Booking Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
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
            Time Slot
          </label>

          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
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
          >

            <option value="">
              Select Time
            </option>

            {timeSlots.map((slot) => (

              <option
                key={slot}
                value={slot}
              >
                {slot}
              </option>

            ))}

          </select>

        </div>

      </div>

      {/* Notes */}

      <div>

        <label className="block mb-2 font-semibold text-gray-700">
          Special Instructions
        </label>

        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="5"
          placeholder="Write any special instructions (Optional)"
          className="
            w-full
            border
            border-gray-300
            rounded-xl
            px-4
            py-3
            resize-none
            outline-none
            focus:ring-2
            focus:ring-amber-500
          "
        ></textarea>

      </div>

    </div>
  );
};

export default BookingDetails;