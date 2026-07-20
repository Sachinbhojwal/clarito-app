import { Link } from "react-router-dom";

import {
  FaCalendarAlt,
  FaDownload,
  FaEye,
  FaStar,
  FaClock,
} from "react-icons/fa";

const bookingHistory = [
  {
    id: "CLR-2026-45896",
    service: "AC Repair Service",
    date: "18 July 2026",
    status: "Completed",
    payment: "Paid",
    amount: 799,
  },

  {
    id: "CLR-2026-45897",
    service: "Home Cleaning",
    date: "20 July 2026",
    status: "Upcoming",
    payment: "Paid",
    amount: 1499,
  },

  {
    id: "CLR-2026-45898",
    service: "Electrician Service",
    date: "10 July 2026",
    status: "Cancelled",
    payment: "Refunded",
    amount: 599,
  },
];

const BookingHistory = () => {
  return (
    <section
      className="
      min-h-screen
      bg-gray-50
      py-16
      "
    >
      <div
        className="
        mx-auto
        max-w-7xl
        px-4
        sm:px-6
        lg:px-8
        "
      >
        {/* Heading */}

        <div>
          <h1
            className="
            text-4xl
            font-bold
            text-gray-800
            "
          >
            Booking History
          </h1>

          <p
            className="
            mt-4
            text-lg
            text-gray-500
            "
          >
            View all your bookings,
            payments and invoices in one
            place.
          </p>
        </div>

        {/* Statistics */}

        <div
          className="
          mt-12
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-gray-500">
              Total Bookings
            </h3>

            <h2
              className="
              mt-4
              text-4xl
              font-bold
              text-gray-800
              "
            >
              25
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-gray-500">
              Upcoming
            </h3>

            <h2
              className="
              mt-4
              text-4xl
              font-bold
              text-blue-600
              "
            >
              05
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-gray-500">
              Completed
            </h3>

            <h2
              className="
              mt-4
              text-4xl
              font-bold
              text-green-600
              "
            >
              18
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-gray-500">
              Cancelled
            </h3>

            <h2
              className="
              mt-4
              text-4xl
              font-bold
              text-red-600
              "
            >
              02
            </h2>
          </div>
        </div>

        {/* Cards */}

        <div className="mt-14 space-y-6">
          {bookingHistory.map((booking) => (
            <div
              key={booking.id}
              className="
              rounded-3xl
              bg-white
              p-8
              shadow-sm
              "
            >
              <div
                className="
                flex
                flex-col
                gap-6
                lg:flex-row
                lg:items-center
                lg:justify-between
                "
              >
                {/* Left Side */}

                <div>
                  <h2
                    className="
                    text-2xl
                    font-bold
                    text-gray-800
                    "
                  >
                    {booking.service}
                  </h2>

                  <p
                    className="
                    mt-3
                    text-gray-500
                    "
                  >
                    Booking ID :
                    {" "}
                    {booking.id}
                  </p>

                  <div
                    className="
                    mt-4
                    flex
                    items-center
                    gap-3
                    text-gray-500
                    "
                  >
                    <FaCalendarAlt />

                    <span>
                      {booking.date}
                    </span>
                  </div>

                  <div
                    className="
                    mt-3
                    flex
                    items-center
                    gap-3
                    text-gray-500
                    "
                  >
                    <FaClock />

                    <span>
                      Payment :
                      {" "}
                      {booking.payment}
                    </span>
                  </div>

                  <h3
                    className="
                    mt-5
                    text-3xl
                    font-bold
                    text-amber-500
                    "
                  >
                    ₹{booking.amount}
                  </h3>
                </div>

                {/* Status */}

                <div>
                  <span
                    className={`
rounded - full
px - 5
py - 3
font - semibold
                    ${booking.status ===
                        "Completed"
                        ? "bg-green-100 text-green-600"
                        : booking.status ===
                          "Upcoming"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-red-100 text-red-600"
                      }
`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>

              {/* Buttons */}

              <div
                className="
                mt-8
                flex
                flex-col
                gap-4
                sm:flex-row
                "
              >
                <Link
                  to="/track-booking"
                  className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-amber-500
                  px-6
                  py-4
                  font-semibold
                  text-white
                  hover:bg-amber-600
                  "
                >
                  <FaEye />

                  View Details
                </Link>

                <button
                  className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-blue-500
                  px-6
                  py-4
                  font-semibold
                  text-white
                  hover:bg-blue-600
                  "
                >
                  <FaDownload />

                  Download Invoice
                </button>

                <button
                  className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-green-500
                  px-6
                  py-4
                  font-semibold
                  text-white
                  hover:bg-green-600
                  "
                >
                  <FaStar />

                  Rate Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingHistory;
