import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import useBooking from "../hooks/useBooking";
import useAuth from "../hooks/useAuth";

const CustomerDashboard = () => {
  const { bookings, cancelBooking } = useBooking();
  const { user } = useAuth();

  const myBookings = bookings.filter(
    (booking) => booking.customerName === user?.name
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6">

          {/* Welcome */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h1 className="text-4xl font-bold">
              Welcome, {user?.name}
            </h1>

            <p className="text-gray-500 mt-2">
              Track all your bookings here.
            </p>
          </div>

          {/* Bookings */}
          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-6">
              My Bookings
            </h2>

            {myBookings.length === 0 ? (
              <div className="bg-white rounded-3xl shadow p-10 text-center">
                <h3 className="text-2xl font-semibold">
                  No Booking Found
                </h3>

                <p className="text-gray-500 mt-3">
                  Book your first service.
                </p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6">

                {myBookings.map((booking) => (

                  <div
                    key={booking.id}
                    className="bg-white rounded-3xl shadow-lg p-6"
                  >

                    <div className="flex justify-between items-center">

                      <h3 className="text-2xl font-bold">
                        {booking.service}
                      </h3>

                      <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>

                    </div>

                    <div className="space-y-2 mt-5">

                      <p>
                        <strong>Date:</strong> {booking.date}
                      </p>

                      <p>
                        <strong>Time:</strong> {booking.time}
                      </p>

                      <p>
                        <strong>Address:</strong> {booking.address}
                      </p>

                      <p>
                        <strong>Phone:</strong> {booking.phone}
                      </p>

                      {booking.providerName && (
                        <p>
                          <strong>Provider:</strong>{" "}
                          {booking.providerName}
                        </p>
                      )}

                    </div>

                    {booking.status === "Pending" && (
                      <button
                        onClick={() =>
                          cancelBooking(booking.id)
                        }
                        className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold"
                      >
                        Cancel Booking
                      </button>
                    )}

                  </div>

                ))}

              </div>
            )}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default CustomerDashboard; 