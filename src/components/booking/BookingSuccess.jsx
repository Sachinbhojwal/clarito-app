import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaHome,
  FaTools,
  FaClipboardCheck,
} from "react-icons/fa";

const BookingSuccess = () => {
  const bookingId = `CL${Date.now().toString().slice(-6)}`;

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-20 px-4">

      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center">

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

        <h1 className="mt-8 text-4xl font-bold text-gray-900">
          Booking Confirmed 🎉
        </h1>

        <p className="mt-4 text-lg text-gray-600 leading-8">
          Thank you for choosing Clarito.
          <br />
          Your booking has been successfully confirmed.
        </p>

        {/* Booking Card */}

        <div className="mt-10 bg-gray-50 rounded-2xl p-8">

          <div className="flex justify-between border-b pb-4">

            <span className="text-gray-500">
              Booking ID
            </span>

            <span className="font-bold text-amber-500">
              #{bookingId}
            </span>

          </div>

          <div className="flex justify-between border-b py-4">

            <span className="text-gray-500">
              Status
            </span>

            <span className="text-green-600 font-semibold">
              Confirmed
            </span>

          </div>

          <div className="flex justify-between pt-4">

            <span className="text-gray-500">
              Estimated Arrival
            </span>

            <span className="font-semibold">
              Within 60 Minutes
            </span>

          </div>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-3 gap-5 mt-10">

          <div className="bg-amber-50 rounded-2xl p-5">

            <FaTools
              className="mx-auto text-amber-500"
              size={35}
            />

            <h3 className="mt-3 font-bold">
              Verified Professional
            </h3>

          </div>

          <div className="bg-blue-50 rounded-2xl p-5">

            <FaClipboardCheck
              className="mx-auto text-blue-500"
              size={35}
            />

            <h3 className="mt-3 font-bold">
              Live Updates
            </h3>

          </div>

          <div className="bg-green-50 rounded-2xl p-5">

            <FaHome
              className="mx-auto text-green-500"
              size={35}
            />

            <h3 className="mt-3 font-bold">
              Doorstep Service
            </h3>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/"
            className="
              bg-amber-500
              hover:bg-amber-600
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            Back To Home
          </Link>

          <Link
            to="/services"
            className="
              border-2
              border-amber-500
              text-amber-500
              hover:bg-amber-500
              hover:text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            Explore More Services
          </Link>

        </div>

      </div>

    </section>
  );
};

export default BookingSuccess;