const EmployeeTable = ({ employees }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">Name</th>

            <th className="p-4 text-left">Service</th>

            <th className="p-4 text-left">Phone</th>

            <th className="p-4 text-left">City</th>

            <th className="p-4 text-left">Rating</th>

            <th className="p-4 text-left">Status</th>

          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-4">{employee.name}</td>

              <td className="p-4">{employee.service}</td>

              <td className="p-4">{employee.phone}</td>

              <td className="p-4">{employee.city}</td>

              <td className="p-4">
                ⭐ {employee.rating}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${employee.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                    }`}
                >
                  {employee.status}
                </span>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default EmployeeTable;