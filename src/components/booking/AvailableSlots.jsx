import { useState } from "react";

const AvailableSlots = () => {
  const [selectedSlot, setSelectedSlot] = useState("");

  const slots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Available Time Slots
          </h2>

          <p className="mt-4 text-gray-500">
            Select your preferred booking time.
          </p>
        </div>

        {/* Slots */}

        <div
          className="
          mt-12
          grid
          gap-5
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          "
        >
          {slots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`
                rounded-2xl
                border
                px-6
                py-5
                font-semibold
                transition
                duration-300

                ${selectedSlot === slot
                  ? "border-amber-500 bg-amber-500 text-white shadow-lg"
                  : "border-gray-200 bg-gray-50 text-gray-700 hover:border-amber-500 hover:bg-white"
                }
              `}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Selected Slot */}

        {selectedSlot && (
          <div
            className="
            mt-10
            rounded-3xl
            border
            border-green-200
            bg-green-50
            p-6
            text-center
            "
          >
            <h3
              className="
              text-2xl
              font-bold
              text-green-700
              "
            >
              Selected Slot
            </h3>

            <p className="mt-3 text-lg font-semibold text-gray-700">
              {selectedSlot}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AvailableSlots;