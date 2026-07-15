import {
  FaEdit,
  FaEye,
  FaTrash,
} from "react-icons/fa";

import { customersData } from "../../data/admin/customersData";

const CustomersTable = () => {
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
          Customers List
        </h2>

        <p className="mt-2 text-gray-500">
          Manage all customers from one place.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[1100px]">

          <thead>

            <tr className="border-b">

              <th className="py-4 text-left">
                Customer ID
              </th>

              <th className="py-4 text-left">
                Name
              </th>

              <th className="py-4 text-left">
                Email
              </th>

              <th className="py-4 text-left">
                Phone
              </th>

              <th className="py-4 text-left">
                Bookings
              </th>

              <th className="py-4 text-left">
                Total Spent
              </th>

              <th className="py-4 text-left">
                Joined Date
              </th>

              <th className="py-4 text-left">
                Status
              </th>

              <th className="py-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {customersData.map((customer) => (

              <tr
                key={customer.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-5 font-semibold">
                  {customer.id}
                </td>

                <td className="py-5">
                  {customer.name}
                </td>

                <td className="py-5">
                  {customer.email}
                </td>

                <td className="py-5">
                  {customer.phone}
                </td>

                <td className="py-5 font-semibold text-blue-600">
                  {customer.totalBookings}
                </td>

                <td className="py-5 font-semibold text-green-600">
                  ₹
                  {customer.totalSpent.toLocaleString()}
                </td>

                <td className="py-5">
                  {customer.joinedDate}
                </td>

                <td className="py-5">

                  <span
                    className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    ${customer.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                      }
                    `}
                  >
                    {customer.status}
                  </span>

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

export default CustomersTable;