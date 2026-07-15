import { recentBookings } from "../../data/admin/recentBookings";

const RecentBookings = () => {
  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-800">
          Recent Bookings
        </h2>

        <p className="mt-2 text-gray-500">
          Latest customer bookings.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-4 text-left">
                Booking ID
              </th>

              <th className="py-4 text-left">
                Customer
              </th>

              <th className="py-4 text-left">
                Service
              </th>

              <th className="py-4 text-left">
                Amount
              </th>

              <th className="py-4 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {recentBookings.map((booking) => (

              <tr
                key={booking.id}
                className="border-b"
              >
                <td className="py-5 font-semibold">
                  {booking.id}
                </td>

                <td className="py-5">
                  {booking.customerName}
                </td>

                <td className="py-5">
                  {booking.serviceName}
                </td>

                <td className="py-5 text-green-600 font-semibold">
                  ₹{booking.amount}
                </td>

                <td className="py-5">

                  <span
                    className="
                    rounded-full
                    bg-green-100
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-green-600
                    "
                  >
                    {booking.bookingStatus}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
};

export default RecentBookings;