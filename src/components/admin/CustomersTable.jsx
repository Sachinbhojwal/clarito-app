import {
  FaEdit,
  FaEye,
  FaTrash,
  FaLock,
  FaUnlock,
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
      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Customers List
        </h2>

        <p className="mt-2 text-gray-500">
          Manage all customers from one place.
        </p>
      </div>

      {/* Desktop */}

      <div className="hidden overflow-x-auto xl:block">
        <table className="w-full min-w-[1300px]">
          <thead>
            <tr className="border-b">
              <th className="py-5 text-left">
                Customer ID
              </th>

              <th className="py-5 text-left">
                Name
              </th>

              <th className="py-5 text-left">
                Email
              </th>

              <th className="py-5 text-left">
                Phone
              </th>

              <th className="py-5 text-left">
                Bookings
              </th>

              <th className="py-5 text-left">
                Total Spent
              </th>

              <th className="py-5 text-left">
                Joined Date
              </th>

              <th className="py-5 text-left">
                Status
              </th>

              <th className="py-5 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {customersData.map((customer) => (
              <tr
                key={customer.id}
                className="
                border-b
                transition
                hover:bg-gray-50
                "
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
rounded - full
px - 4
py - 2
text - sm
font - semibold
                    ${customer.status ===
                        "Active"
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
                      bg-purple-100
                      p-3
                      text-purple-600
                      transition
                      hover:bg-purple-200
                      "
                    >
                      {customer.status ===
                        "Blocked" ? (
                        <FaUnlock />
                      ) : (
                        <FaLock />
                      )}
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

      {/* Mobile & Tablet */}

      <div className="space-y-5 xl:hidden">
        {customersData.map((customer) => (
          <div
            key={customer.id}
            className="
            rounded-3xl
            border
            border-gray-200
            p-6
            "
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                {customer.name}
              </h3>

              <p className="text-gray-500">
                {customer.email}
              </p>

              <p className="text-gray-500">
                {customer.phone}
              </p>
            </div>

            <div
              className="
              mt-5
              grid
              gap-3
              sm:grid-cols-2
              "
            >
              <p>
                <span className="font-semibold">
                  Customer ID :
                </span>
                {" "}
                {customer.id}
              </p>

              <p>
                <span className="font-semibold">
                  Bookings :
                </span>
                {" "}
                {customer.totalBookings}
              </p>

              <p>
                <span className="font-semibold">
                  Total Spent :
                </span>
                {" "}
                ₹
                {customer.totalSpent.toLocaleString()}
              </p>

              <p>
                <span className="font-semibold">
                  Joined :
                </span>
                {" "}
                {customer.joinedDate}
              </p>
            </div>

            <div className="mt-5">
              <span
                className={`
rounded - full
px - 4
py - 2
text - sm
font - semibold
                ${customer.status ===
                    "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                  }
`}
              >
                {customer.status}
              </span>
            </div>

            <div
              className="
              mt-6
              grid
              grid-cols-4
              gap-3
              "
            >
              <button
                className="
                rounded-xl
                bg-blue-100
                p-3
                text-blue-600
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
                "
              >
                <FaEdit />
              </button>

              <button
                className="
                rounded-xl
                bg-purple-100
                p-3
                text-purple-600
                "
              >
                {customer.status ===
                  "Blocked" ? (
                  <FaUnlock />
                ) : (
                  <FaLock />
                )}
              </button>

              <button
                className="
                rounded-xl
                bg-red-100
                p-3
                text-red-600
                "
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersTable;
