import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaHome,
  FaTools,
  FaClipboardCheck,
  FaListAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const BookingSuccess = () => {
  const bookingId = `CL${Date.now()
    .toString()
    .slice(-6)}`;

  // Future: Backend/LocalStorage
  const booking = {
    service: "Plumber",
    date: "27 July 2026",
    time: "11:00 AM",
    address: "Surat, Gujarat",
    payment: "Cash On Delivery",
    amount: 499,
  };

  return (
    <section className="min-h-screen bg-gray-100 py-20 px-4">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        {/* Success Icon */}

        <div className="flex justify-center">
          <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center">

            <FaCheckCircle
              size={70}
              className="text-green-500"
            />

          </div>
        </div>

        {/* Heading */}

        <div className="text-center">

          <h1 className="mt-8 text-4xl font-bold">
            Booking Confirmed 🎉
          </h1>

          <p className="mt-4 text-gray-600 text-lg leading-8">
            Thank you for choosing Clarito.
            <br />
            Your booking has been confirmed successfully.
          </p>

        </div>

        {/* Booking Details */}

        <div className="mt-10 bg-gray-50 rounded-2xl p-8 space-y-5">

          <div className="flex justify-between border-b pb-4">
            <span>Booking ID</span>

            <span className="font-bold text-amber-500">
              #{bookingId}
            </span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Service</span>

            <span className="font-semibold">
              {booking.service}
            </span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Date</span>

            <span>{booking.date}</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Time</span>

            <span>{booking.time}</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Address</span>

            <span>{booking.address}</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Payment Method</span>

            <span>{booking.payment}</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Amount Paid</span>

            <span className="font-bold text-green-600">
              ₹{booking.amount}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Status</span>

            <span className="text-green-600 font-semibold">
              Confirmed
            </span>
          </div>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-3 gap-5 mt-10">

          <div className="bg-amber-50 rounded-2xl p-5 text-center">

            <FaTools
              size={35}
              className="mx-auto text-amber-500"
            />

            <h3 className="mt-3 font-bold">
              Verified Professional
            </h3>

          </div>

          <div className="bg-blue-50 rounded-2xl p-5 text-center">

            <FaClipboardCheck
              size={35}
              className="mx-auto text-blue-500"
            />

            <h3 className="mt-3 font-bold">
              Live Updates
            </h3>

          </div>

          <div className="bg-green-50 rounded-2xl p-5 text-center">

            <FaMapMarkerAlt
              size={35}
              className="mx-auto text-green-500"
            />

            <h3 className="mt-3 font-bold">
              Doorstep Service
            </h3>

          </div>

        </div>

        {/* Action Buttons */}

        <div className="mt-10 grid md:grid-cols-3 gap-4">

          <Link
            to="/customer/track-booking"
            className="
            flex
            items-center
            justify-center
            gap-2
            bg-blue-500
            hover:bg-blue-600
            text-white
            py-4
            rounded-xl
            font-semibold
            transition
            "
          >
            <FaMapMarkerAlt />

            Track Booking
          </Link>

          <Link
            to="/customer/bookings"
            className="
            flex
            items-center
            justify-center
            gap-2
            bg-green-500
            hover:bg-green-600
            text-white
            py-4
            rounded-xl
            font-semibold
            transition
            "
          >
            <FaListAlt />

            My Bookings
          </Link>

          <Link
            to="/"
            className="
            flex
            items-center
            justify-center
            gap-2
            bg-amber-500
            hover:bg-amber-600
            text-white
            py-4
            rounded-xl
            font-semibold
            transition
            "
          >
            <FaHome />

            Home
          </Link>

        </div>

      </div>

    </section>
  );
};

export default BookingSuccess;