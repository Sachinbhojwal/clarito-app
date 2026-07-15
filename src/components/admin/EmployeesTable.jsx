import {
  FaEdit,
  FaEye,
  FaTrash,
} from "react-icons/fa";

import { employeesData } from "../../data/admin/employeesData";

const EmployeesTable = () => {
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
          Employees List
        </h2>

        <p className="mt-2 text-gray-500">
          Manage all employees from one place.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[1000px]">

          <thead>

            <tr className="border-b">

              <th className="py-4 text-left">
                Employee ID
              </th>

              <th className="py-4 text-left">
                Name
              </th>

              <th className="py-4 text-left">
                Email
              </th>

              <th className="py-4 text-left">
                Designation
              </th>

              <th className="py-4 text-left">
                Salary
              </th>

              <th className="py-4 text-left">
                Joining Date
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

            {employeesData.map((employee) => (

              <tr
                key={employee.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-5 font-semibold">
                  {employee.id}
                </td>

                <td className="py-5">
                  {employee.name}
                </td>

                <td className="py-5">
                  {employee.email}
                </td>

                <td className="py-5">
                  {employee.designation}
                </td>

                <td className="py-5 font-semibold text-green-600">
                  ₹{employee.salary.toLocaleString()}
                </td>

                <td className="py-5">
                  {employee.joiningDate}
                </td>

                <td className="py-5">

                  <span
                    className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    ${employee.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                      }
                    `}
                  >
                    {employee.status}
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

export default EmployeesTable;