import EmployeeCard from "./EmployeeCard";

import { employeesData } from "../../../data/employeesData";

const EmployeeList = () => {
  return (
    <section className="mt-10">

      {/* Heading */}

      <div
        className="
        mb-10
        flex
        flex-col
        items-center
        justify-between
        gap-4
        rounded-3xl
        bg-white
        p-6
        shadow-md
        lg:flex-row
        "
      >
        <div>

          <h2
            className="
            text-3xl
            font-bold
            text-gray-900
            "
          >
            All Employees
          </h2>

          <p
            className="
            mt-2
            text-gray-600
            "
          >
            Manage all service providers
            from one place.
          </p>

        </div>

        <div
          className="
          rounded-2xl
          bg-amber-100
          px-6
          py-4
          text-center
          "
        >
          <h3
            className="
            text-3xl
            font-bold
            text-amber-500
            "
          >
            {employeesData.length}
          </h3>

          <p
            className="
            text-sm
            font-medium
            text-gray-700
            "
          >
            Total Employees
          </p>

        </div>

      </div>


      {/* Employee Cards */}

      <div
        className="
        grid
        grid-cols-1
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
        "
      >
        {employeesData.map(
          (employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
            />
          )
        )}
      </div>

    </section>
  );
};

export default EmployeeList;