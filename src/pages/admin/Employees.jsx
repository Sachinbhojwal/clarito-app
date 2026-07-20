import {
  FaPlus,
  FaSearch,
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaBriefcase,
} from "react-icons/fa";

import { employeesData } from "../../data/admin/employeesData";

import EmployeesTable from "../../components/admin/EmployeesTable";

const Employees = () => {
  const totalEmployees =
    employeesData.length;

  const activeEmployees =
    employeesData.filter(
      (employee) =>
        employee.status === "Active"
    ).length;

  const inactiveEmployees =
    employeesData.filter(
      (employee) =>
        employee.status === "Inactive"
    ).length;

  const availableEmployees =
    employeesData.filter(
      (employee) =>
        employee.availability ===
        "Available"
    ).length;

  return (<section className="space-y-8">

    {/* ===================== */}
    {/* Page Header */}
    {/* ===================== */}

    <div>
      <h1
        className="
      text-3xl
      font-bold
      text-gray-800
      sm:text-4xl
      "
      >
        Employees
      </h1>

      <p className="mt-2 text-gray-500">
        Manage all employees from
        one place.
      </p>
    </div>

    {/* ===================== */}
    {/* Statistics Cards */}
    {/* ===================== */}

    <div
      className="
    grid
    gap-6
    sm:grid-cols-2
    xl:grid-cols-4
    "
    >

      {/* Total */}

      <div
        className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      transition
      hover:shadow-lg
      "
      >
        <div
          className="
        flex
        items-center
        justify-between
        "
        >
          <p className="text-gray-500">
            Total Employees
          </p>

          <FaUsers
            className="
          text-2xl
          text-amber-500
          "
          />
        </div>

        <h2
          className="
        mt-4
        text-4xl
        font-bold
        text-gray-800
        "
        >
          {totalEmployees}
        </h2>
      </div>

      {/* Active */}

      <div
        className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      transition
      hover:shadow-lg
      "
      >
        <div
          className="
        flex
        items-center
        justify-between
        "
        >
          <p className="text-gray-500">
            Active Employees
          </p>

          <FaUserCheck
            className="
          text-2xl
          text-green-600
          "
          />
        </div>

        <h2
          className="
        mt-4
        text-4xl
        font-bold
        text-green-600
        "
        >
          {activeEmployees}
        </h2>
      </div>

      {/* Inactive */}

      <div
        className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      transition
      hover:shadow-lg
      "
      >
        <div
          className="
        flex
        items-center
        justify-between
        "
        >
          <p className="text-gray-500">
            Inactive Employees
          </p>

          <FaUserTimes
            className="
          text-2xl
          text-red-600
          "
          />
        </div>

        <h2
          className="
        mt-4
        text-4xl
        font-bold
        text-red-600
        "
        >
          {inactiveEmployees}
        </h2>
      </div>

      {/* Available */}

      <div
        className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      transition
      hover:shadow-lg
      "
      >
        <div
          className="
        flex
        items-center
        justify-between
        "
        >
          <p className="text-gray-500">
            Available
          </p>

          <FaBriefcase
            className="
          text-2xl
          text-blue-600
          "
          />
        </div>

        <h2
          className="
        mt-4
        text-4xl
        font-bold
        text-blue-600
        "
        >
          {availableEmployees}
        </h2>
      </div>

    </div>

    {/* ===================== */}
    {/* Search & Button */}
    {/* ===================== */}

    <div
      className="
    flex
    flex-col
    gap-5
    rounded-3xl
    bg-white
    p-6
    shadow-sm
    lg:flex-row
    lg:items-center
    lg:justify-between
    "
    >

      {/* Search */}

      <div
        className="
      relative
      w-full
      lg:max-w-md
      "
      >
        <input
          type="text"
          placeholder="Search employee..."
          className="
        w-full
        rounded-2xl
        border
        border-gray-200
        bg-gray-50
        py-3
        pl-12
        pr-4
        outline-none
        transition
        focus:border-amber-500
        focus:bg-white
        "
        />

        <FaSearch
          className="
        absolute
        left-5
        top-1/2
        -translate-y-1/2
        text-gray-400
        "
        />
      </div>

      {/* Button */}

      <button
        className="
      flex
      w-full
      items-center
      justify-center
      gap-3
      rounded-2xl
      bg-amber-500
      px-6
      py-3
      font-semibold
      text-white
      transition
      hover:bg-amber-600
      lg:w-auto
      "
      >
        <FaPlus />

        Add Employee
      </button>

    </div>

    {/* ===================== */}
    {/* Employees Table */}
    {/* ===================== */}

    <EmployeesTable />

  </section>

  );
};

export default Employees;
