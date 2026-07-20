import { Link } from "react-router-dom";

import {
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaReceipt,
  FaUserCheck,
} from "react-icons/fa";

const BookingSuccess = () => {
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
        max-w-5xl
        px-4
        sm:px-6
        lg:px-8
        "
      >
        {/* Success Card */}

        <div
          className="
          rounded-3xl
          bg-white
          p-8
          shadow-sm
          lg:p-12
          "
        >
          {/* Success Icon */}

          <div className="text-center">
            <div
              className="
              mx-auto
              flex
              h-32
              w-32
              items-center
              justify-center
              rounded-full
              bg-green-100
              text-7xl
              text-green-600
              "
            >
              <FaCheckCircle />
            </div>

            <h1
              className="
              mt-8
              text-4xl
              font-bold
              text-gray-800
              "
            >
              Booking Confirmed
            </h1>

            <p
              className="
              mt-4
              text-lg
              leading-8
              text-gray-500
              "
            >
              Thank you for choosing
              CLARITO. Your booking has
              been successfully created.
            </p>
          </div>

          {/* Booking Details */}

          <div
            className="
            mt-14
            grid
            gap-6
            sm:grid-cols-2
            "
          >
            {/* Booking ID */}

            <div
              className="
              rounded-3xl
              bg-gray-50
              p-6
              "
            >
              <div className="flex gap-4">
                <FaReceipt
                  className="
                  text-3xl
                  text-amber-500
                  "
                />

                <div>
                  <p className="text-gray-500">
                    Booking ID
                  </p>

                  <h3
                    className="
                    mt-2
                    text-2xl
                    font-bold
                    text-gray-800
                    "
                  >
                    CLR-2026-45896
                  </h3>
                </div>
              </div>
            </div>

            {/* Payment Status */}

            <div
              className="
              rounded-3xl
              bg-gray-50
              p-6
              "
            >
              <div className="flex gap-4">
                <FaCheckCircle
                  className="
                  text-3xl
                  text-green-600
                  "
                />

                <div>
                  <p className="text-gray-500">
                    Payment Status
                  </p>

                  <h3
                    className="
                    mt-2
                    text-2xl
                    font-bold
                    text-green-600
                    "
                  >
                    Successful
                  </h3>
                </div>
              </div>
            </div>

            {/* Service Time */}

            <div
              className="
              rounded-3xl
              bg-gray-50
              p-6
              "
            >
              <div className="flex gap-4">
                <FaClock
                  className="
                  text-3xl
                  text-blue-600
                  "
                />

                <div>
                  <p className="text-gray-500">
                    Service Timing
                  </p>

                  <h3
                    className="
                    mt-2
                    text-xl
                    font-bold
                    text-gray-800
                    "
                  >
                    Today - 04:00 PM
                  </h3>
                </div>
              </div>
            </div>

            {/* Employee Status */}

            <div
              className="
              rounded-3xl
              bg-gray-50
              p-6
              "
            >
              <div className="flex gap-4">
                <FaUserCheck
                  className="
                  text-3xl
                  text-purple-600
                  "
                />

                <div>
                  <p className="text-gray-500">
                    Employee Status
                  </p>

                  <h3
                    className="
                    mt-2
                    text-xl
                    font-bold
                    text-gray-800
                    "
                  >
                    Assigning Soon
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}

          <div
            className="
            mt-10
            rounded-3xl
            bg-amber-50
            p-8
            "
          >
            <div className="flex gap-4">
              <FaMapMarkerAlt
                className="
                mt-1
                text-3xl
                text-amber-500
                "
              />

              <div>
                <h3
                  className="
                  text-2xl
                  font-bold
                  text-gray-800
                  "
                >
                  Service Address
                </h3>

                <p
                  className="
                  mt-4
                  leading-8
                  text-gray-600
                  "
                >
                  Your selected service
                  address will be shown here
                  after booking confirmation.
                </p>
              </div>
            </div>
          </div>

          {/* Information */}

          <div
            className="
            mt-10
            rounded-3xl
            bg-blue-50
            p-8
            "
          >
            <h3
              className="
              text-2xl
              font-bold
              text-gray-800
              "
            >
              What's Next?
            </h3>

            <ul
              className="
              mt-6
              space-y-4
              leading-8
              text-gray-600
              "
            >
              <li>
                • Admin will assign a
                verified professional.
              </li>

              <li>
                • You'll receive booking
                notifications instantly.
              </li>

              <li>
                • Track your booking in
                real time.
              </li>

              <li>
                • Download invoices after
                service completion.
              </li>
            </ul>
          </div>

          {/* Buttons */}

          <div
            className="
            mt-14
            flex
            flex-col
            gap-5
            sm:flex-row
            "
          >
            <Link
              to="/track-booking"
              className="
              flex-1
              rounded-2xl
              bg-amber-500
              py-4
              text-center
              text-lg
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-amber-600
              "
            >
              Track Your Booking
            </Link>

            <Link
              to="/services"
              className="
              flex-1
              rounded-2xl
              border
              border-gray-300
              py-4
              text-center
              text-lg
              font-semibold
              text-gray-700
              transition
              duration-300
              hover:bg-gray-100
              "
            >
              Explore More Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSuccess;