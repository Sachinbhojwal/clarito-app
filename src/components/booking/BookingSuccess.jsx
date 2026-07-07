import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const BookingSuccess = () => {
  const bookingId =
    "CL" + Math.floor(100000 + Math.random() * 900000);

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-5 py-10">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8 md:p-10 text-center">

        {/* Success Icon */}
        <div className="flex justify-center">
          <FaCheckCircle className="text-green-500 text-8xl animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mt-8">
          Booking Confirmed 🎉
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Thank you for choosing{" "}
          <span className="text-amber-500 font-bold">
            Clarito
          </span>
          .
          <br />
          Your booking has been submitted successfully.
        </p>

        {/* Booking Details */}
        <div className="bg-gray-50 rounded-2xl p-6 mt-10">

          <div className="flex justify-between py-3 border-b">
            <span className="font-medium">
              Booking ID
            </span>

            <span className="font-bold text-amber-500">
              {bookingId}
            </span>
          </div>

          <div className="flex justify-between py-3 border-b">
            <span>Status</span>

            <span className="text-yellow-600 font-semibold">
              Pending
            </span>
          </div>

          <div className="flex justify-between py-3 border-b">
            <span>Provider</span>

            <span>Assigning...</span>
          </div>

          <div className="flex justify-between py-3">
            <span>Estimated Arrival</span>

            <span>30 - 60 Minutes</span>
          </div>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-3 gap-4 mt-8">

          <div className="bg-green-50 rounded-xl p-5">
            <div className="text-4xl">
              ✅
            </div>

            <h3 className="font-bold mt-2">
              Verified Professional
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Trusted & verified experts.
            </p>

          </div>

          <div className="bg-blue-50 rounded-xl p-5">

            <div className="text-4xl">
              📱
            </div>

            <h3 className="font-bold mt-2">
              Live Status
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Track your booking anytime.
            </p>

          </div>

          <div className="bg-yellow-50 rounded-xl p-5">

            <div className="text-4xl">
              ⭐
            </div>

            <h3 className="font-bold mt-2">
              Quality Service
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Best service experience.
            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="grid md:grid-cols-2 gap-5 mt-10">

          <Link
            to="/customer-dashboard"
            className="bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-2xl font-bold transition"
          >
            View My Bookings
          </Link>

          <Link
            to="/"
            className="border-2 border-gray-300 hover:border-amber-500 hover:text-amber-500 py-4 rounded-2xl font-bold transition"
          >
            Back To Home
          </Link>

        </div>

      </div>
    </section>
  );
};

export default BookingSuccess;