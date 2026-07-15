import {
  FaEdit,
  FaEye,
  FaStar,
  FaTrash,
} from "react-icons/fa";

import { servicesManagementData } from "../../data/admin/servicesManagementData";

const ServicesTable = () => {
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
          Services List
        </h2>

        <p className="mt-2 text-gray-500">
          Manage all services from one place.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[1200px]">

          <thead>

            <tr className="border-b">

              <th className="py-4 text-left">
                Service ID
              </th>

              <th className="py-4 text-left">
                Service Name
              </th>

              <th className="py-4 text-left">
                Category
              </th>

              <th className="py-4 text-left">
                Price
              </th>

              <th className="py-4 text-left">
                Total Bookings
              </th>

              <th className="py-4 text-left">
                Rating
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

            {servicesManagementData.map((service) => (

              <tr
                key={service.id}
                className="
                border-b
                hover:bg-gray-50
                "
              >
                <td className="py-5 font-semibold">
                  {service.id}
                </td>

                <td className="py-5">
                  {service.title}
                </td>

                <td className="py-5">
                  {service.category}
                </td>

                <td className="py-5 font-semibold text-green-600">
                  ₹{service.price}
                </td>

                <td className="py-5 font-semibold text-blue-600">
                  {service.totalBookings}
                </td>

                <td className="py-5">

                  <div className="flex items-center gap-2">

                    <FaStar className="text-yellow-500" />

                    <span className="font-semibold">
                      {service.rating}
                    </span>

                  </div>

                </td>

                <td className="py-5">

                  <span
                    className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    ${service.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                      }
                    `}
                  >
                    {service.status}
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

export default ServicesTable;