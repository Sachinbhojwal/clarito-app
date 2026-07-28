import { useState } from "react";
import {
  FaSearch,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const TrackBooking = () => {
  const [bookingId, setBookingId] =
    useState("");

  const [booking, setBooking] =
    useState(null);

  const handleTrack = () => {
    const bookings =
      JSON.parse(
        localStorage.getItem(
          "myBookings"
        )
      ) || [];

    const foundBooking =
      bookings.find(
        (item) =>
          item.bookingId ===
          bookingId.trim()
      );

    if (!foundBooking) {
      alert("Booking Not Found");
      setBooking(null);
      return;
    }

    setBooking(foundBooking);
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">

      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h1 className="text-4xl font-bold text-center">
            Track Booking
          </h1>

          <p className="text-gray-500 text-center mt-3">
            Enter your Booking ID to
            check the status.
          </p>

          {/* Search */}

          <div className="mt-10 flex gap-4">

            <input
              type="text"
              placeholder="Enter Booking ID"
              value={bookingId}
              onChange={(e) =>
                setBookingId(
                  e.target.value
                )
              }
              className="
              flex-1
              border
              rounded-xl
              px-4
              py-4
              outline-none
              focus:ring-2
              focus:ring-amber-500
              "
            />

            <button
              onClick={handleTrack}
              className="
              bg-amber-500
              hover:bg-amber-600
              text-white
              px-8
              rounded-xl
              flex
              items-center
              gap-2
              "
            >
              <FaSearch />
              Track
            </button>

          </div>

          {/* Result */}

          {booking && (
            <div className="mt-10 border rounded-3xl p-8">

              <div className="flex justify-between border-b pb-4">

                <span className="text-gray-500">
                  Booking ID
                </span>

                <span className="font-bold text-amber-500">
                  {booking.bookingId}
                </span>

              </div>

              <div className="flex justify-between py-4 border-b">

                <span className="text-gray-500">
                  Service
                </span>

                <span>
                  {booking.service}
                </span>

              </div>

              <div className="flex justify-between py-4 border-b">

                <span className="text-gray-500">
                  Customer
                </span>

                <span>
                  {booking.fullName}
                </span>

              </div>

              <div className="flex justify-between py-4 border-b">

                <span className="text-gray-500">
                  Date
                </span>

                <span>
                  {booking.date}
                </span>

              </div>

              <div className="flex justify-between py-4 border-b">

                <span className="text-gray-500">
                  Time
                </span>

                <span>
                  {booking.time}
                </span>

              </div>

              <div className="flex justify-between py-4 border-b">

                <span className="text-gray-500">
                  Payment
                </span>

                <span>
                  {booking.payment}
                </span>

              </div>

              <div className="flex justify-between pt-4">

                <span className="text-gray-500">
                  Status
                </span>

                <span className="flex items-center gap-2 text-green-600 font-semibold">

                  <FaCheckCircle />

                  {booking.status}

                </span>

              </div>

              {/* Timeline */}

              <div className="mt-10 grid md:grid-cols-3 gap-5">

                <div className="bg-green-50 rounded-2xl p-5 text-center">

                  <FaCheckCircle
                    className="mx-auto text-green-500"
                    size={30}
                  />

                  <h3 className="mt-3 font-bold">
                    Booking Confirmed
                  </h3>

                </div>

                <div className="bg-blue-50 rounded-2xl p-5 text-center">

                  <FaClock
                    className="mx-auto text-blue-500"
                    size={30}
                  />

                  <h3 className="mt-3 font-bold">
                    Professional Assigned
                  </h3>

                </div>

                <div className="bg-amber-50 rounded-2xl p-5 text-center">

                  <FaClock
                    className="mx-auto text-amber-500"
                    size={30}
                  />

                  <h3 className="mt-3 font-bold">
                    Arriving Soon
                  </h3>

                </div>

              </div>

            </div>
          )}

        </div>

      </div>

    </section>
  );
};

export default TrackBooking;