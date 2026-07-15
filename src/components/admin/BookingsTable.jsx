import {
  FaEdit,
  FaEye,
  FaTrash,
} from "react-icons/fa";

import { bookingsData } from "../../data/admin/bookingsData";

const BookingsTable = () => {
  const getBookingStatus = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";

      case "Confirmed":
        return "bg-blue-100 text-blue-600";

      case "Pending":
        return "bg-orange-100 text-orange-600";

      case "Processing":
        return "bg-purple-100 text-purple-600";

      case "Cancelled":
        return "bg-red-100 text-red-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getPaymentStatus = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-600";

      case "Pending":
        return "bg-orange-100 text-orange-600";

      case "Refunded":
        return "bg-red-100 text-red-600";

      case "Failed":
        return "bg-red-100 text-red-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

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
          Bookings List
        </h2>

        <p className="mt-2 text-gray-500">
          Manage all service bookings.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1300px]">

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
                Employee
              </th>

              <th className="py-4 text-left">
                Amount
              </th>

              <th className="py-4 text-left">
                Payment
              </th>

              <th className="py-4 text-left">
                Booking Status
              </th>

              <th className="py-4 text-left">
                Date
              </th>

              <th className="py-4 text-left">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {bookingsData.map((booking) => (

              <tr
                key={booking.id}
                className="
                border-b
                hover:bg-gray-50
                "
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

                <td className="py-5">
                  {booking.employeeName}
                </td>

                <td className="py-5 font-semibold text-green-600">
                  ₹{booking.amount}
                </td>

                <td className="py-5">
                  <span
                    className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    ${getPaymentStatus(
                      booking.paymentStatus
                    )}
                    `}
                  >
                    {booking.paymentStatus}
                  </span>
                </td>

                <td className="py-5">
                  <span
                    className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    ${getBookingStatus(
                      booking.bookingStatus
                    )}
                    `}
                  >
                    {booking.bookingStatus}
                  </span>
                </td>

                <td className="py-5">
                  {booking.bookingDate}
                </td>

                <td className="py-5">

                  <div className="flex gap-3">

                    <button
                      className="
                      rounded-xl
                      bg-blue-100
                      p-3
                      text-blue-600
                      transition
                      hover:bg-blue-200
                      "
                    >
                      <FaEye />
                    </button>

                    <button
                      className="
                      rounded-xl
                      bg-amber-100
                      p-3
                      text-amber-600
                      transition
                      hover:bg-amber-200
                      "
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="
                      rounded-xl
                      bg-red-100
                      p-3
                      text-red-600
                      transition
                      hover:bg-red-200
                      "
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </section>
  );
};

export default BookingsTable;