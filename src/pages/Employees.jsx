import { useState } from "react";
import EmployeeTable from "../components/admin/EmployeeTable";
import { employees } from "../data/employees";

const Employees = () => {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <h1 className="text-3xl font-bold">
          Employees
        </h1>

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-4 py-3 w-full md:w-80"
        />

      </div>

      <EmployeeTable employees={filteredEmployees} />

    </div>
  );
};

export default Employees;