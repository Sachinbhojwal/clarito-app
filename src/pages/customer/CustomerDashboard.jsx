import { Link } from "react-router-dom";

import {
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaTools,
} from "react-icons/fa";

const CustomerDashboard = () => {
  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const bookings =
    JSON.parse(
      localStorage.getItem("myBookings")
    ) || [];

  const totalBookings =
    bookings.length;

  const pending =
    bookings.filter(
      (item) =>
        item.status === "Pending"
    ).length;

  const completed =
    bookings.filter(
      (item) =>
        item.status === "Completed"
    ).length;

  const cancelled =
    bookings.filter(
      (item) =>
        item.status === "Cancelled"
    ).length;

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Welcome */}

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold">
            Welcome Back, {user.name} 👋
          </h1>

          <p className="mt-3 text-gray-500">
            Manage all your bookings
            from one place.
          </p>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-3xl p-6 shadow">
            <FaClipboardList
              className="text-amber-500"
              size={35}
            />

            <h2 className="text-4xl font-bold mt-4">
              {totalBookings}
            </h2>

            <p className="text-gray-500 mt-2">
              Total Bookings
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <FaClock
              className="text-blue-500"
              size={35}
            />

            <h2 className="text-4xl font-bold mt-4">
              {pending}
            </h2>

            <p className="text-gray-500 mt-2">
              Pending
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <FaCheckCircle
              className="text-green-500"
              size={35}
            />

            <h2 className="text-4xl font-bold mt-4">
              {completed}
            </h2>

            <p className="text-gray-500 mt-2">
              Completed
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <FaTimesCircle
              className="text-red-500"
              size={35}
            />

            <h2 className="text-4xl font-bold mt-4">
              {cancelled}
            </h2>

            <p className="text-gray-500 mt-2">
              Cancelled
            </p>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="mt-10">
          <h2 className="text-3xl font-bold">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">

            <Link
              to="/my-bookings"
              className="
                bg-white
                rounded-3xl
                p-6
                shadow
                hover:shadow-lg
              "
            >
              <FaClipboardList
                size={35}
                className="text-amber-500"
              />

              <h3 className="mt-4 text-xl font-bold">
                My Bookings
              </h3>
            </Link>

            <Link
              to="/track-booking"
              className="
                bg-white
                rounded-3xl
                p-6
                shadow
                hover:shadow-lg
              "
            >
              <FaSearch
                size={35}
                className="text-blue-500"
              />

              <h3 className="mt-4 text-xl font-bold">
                Track Booking
              </h3>
            </Link>

            <Link
              to="/services"
              className="
                bg-white
                rounded-3xl
                p-6
                shadow
                hover:shadow-lg
              "
            >
              <FaTools
                size={35}
                className="text-green-500"
              />

              <h3 className="mt-4 text-xl font-bold">
                Browse Services
              </h3>
            </Link>

          </div>
        </div>

        {/* Recent Bookings */}

        <div className="mt-10 bg-white rounded-3xl shadow p-8">

          <h2 className="text-3xl font-bold">
            Recent Bookings
          </h2>

          {bookings.length === 0 ? (
            <p className="mt-6 text-gray-500">
              No bookings available.
            </p>
          ) : (
            <div className="space-y-5 mt-8">

              {bookings
                .slice(-5)
                .reverse()
                .map((booking) => (
                  <div
                    key={booking.bookingId}
                    className="
                      border
                      rounded-2xl
                      p-5
                      flex
                      flex-col
                      md:flex-row
                      md:justify-between
                    "
                  >
                    <div>
                      <h3 className="font-bold text-xl">
                        {booking.service}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        ID:
                        {" "}
                        {booking.bookingId}
                      </p>
                    </div>

                    <div className="mt-4 md:mt-0">
                      <p>{booking.date}</p>

                      <p className="font-semibold text-green-600">
                        {booking.status}
                      </p>
                    </div>
                  </div>
                ))}

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default CustomerDashboard;