import {
  FaEdit,
  FaEye,
  FaTrash,
} from "react-icons/fa";

import { employeesData } from "../../data/admin/employeesData";

const EmployeesTable = () => {
  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-sm
      "
    >
      {/* Desktop Table */}

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full">

          <thead className="bg-gray-50">
            <tr>

              <th className="px-6 py-5 text-left">
                Employee
              </th>

              <th className="px-6 py-5 text-left">
                Service
              </th>

              <th className="px-6 py-5 text-left">
                Experience
              </th>

              <th className="px-6 py-5 text-left">
                Status
              </th>

              <th className="px-6 py-5 text-left">
                Availability
              </th>

              <th className="px-6 py-5 text-left">
                Rating
              </th>

              <th className="px-6 py-5 text-center">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>
            {employeesData.map(
              (employee) => (
                <tr
                  key={employee.id}
                  className="
                  border-t
                  border-gray-100
                  hover:bg-gray-50
                  "
                >
                  {/* Image */}

                  <td className="px-6 py-5">

                    <div
                      className="
                      flex
                      items-center
                      gap-4
                      "
                    >
                      <img
                        src={employee.image}
                        alt={employee.name}
                        className="
                        h-14
                        w-14
                        rounded-full
                        object-cover
                        "
                      />

                      <div>
                        <h3 className="font-bold">
                          {employee.name}
                        </h3>

                        <p
                          className="
                          text-sm
                          text-gray-500
                          "
                        >
                          {employee.email}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Service */}

                  <td className="px-6 py-5">
                    {employee.service}
                  </td>

                  {/* Experience */}

                  <td className="px-6 py-5">
                    {employee.experience}
                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    <span
                      className={`
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-semibold

                      ${employee.status ===
                          "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {employee.status}
                    </span>

                  </td>

                  {/* Availability */}

                  <td className="px-6 py-5">

                    <span
                      className={`
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-semibold

                      ${employee.availability ===
                          "Available"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-200 text-gray-700"
                        }
                      `}
                    >
                      {employee.availability}
                    </span>

                  </td>

                  {/* Rating */}

                  <td className="px-6 py-5">
                    {employee.rating} ★
                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">

                    <div
                      className="
                      flex
                      items-center
                      justify-center
                      gap-3
                      "
                    >
                      <button
                        className="
                        rounded-xl
                        bg-blue-100
                        p-3
                        text-blue-600
                        transition
                        hover:bg-blue-600
                        hover:text-white
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
                        hover:bg-amber-500
                        hover:text-white
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
                        hover:bg-red-500
                        hover:text-white
                        "
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>
              )
            )}
          </tbody>

        </table>
      </div>

      {/* Mobile View */}

      <div className="space-y-5 p-5 lg:hidden">

        {employeesData.map(
          (employee) => (
            <div
              key={employee.id}
              className="
              rounded-3xl
              border
              border-gray-100
              p-5
              shadow-sm
              "
            >
              <div
                className="
                flex
                items-center
                gap-4
                "
              >
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="
                  h-20
                  w-20
                  rounded-full
                  object-cover
                  "
                />

                <div>
                  <h3 className="font-bold">
                    {employee.name}
                  </h3>

                  <p className="text-gray-500">
                    {employee.service}
                  </p>

                  <p className="text-sm">
                    {employee.rating} ★
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <p>
                  Experience :
                  {" "}
                  {employee.experience}
                </p>

                <p>
                  Status :
                  {" "}
                  {employee.status}
                </p>

                <p>
                  Available :
                  {" "}
                  {employee.availability}
                </p>
              </div>

              <div
                className="
                mt-6
                grid
                grid-cols-3
                gap-3
                "
              >
                <button
                  className="
                  rounded-xl
                  bg-blue-500
                  py-3
                  text-white
                  "
                >
                  <FaEye className="mx-auto" />
                </button>

                <button
                  className="
                  rounded-xl
                  bg-amber-500
                  py-3
                  text-white
                  "
                >
                  <FaEdit className="mx-auto" />
                </button>

                <button
                  className="
                  rounded-xl
                  bg-red-500
                  py-3
                  text-white
                  "
                >
                  <FaTrash className="mx-auto" />
                </button>
              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
};

export default EmployeesTable;