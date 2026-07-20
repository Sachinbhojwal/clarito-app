import { FaPlus, FaSearch, FaDownload } from "react-icons/fa";

import { customersData } from "../../data/admin/customersData";
import CustomersTable from "../../components/admin/CustomersTable";

const Customers = () => {
  const totalCustomers = customersData.length;

  const activeCustomers = customersData.filter(
    (customer) => customer.status === "Active"
  ).length;

  const blockedCustomers = customersData.filter(
    (customer) => customer.status === "Blocked"
  ).length;

  // Future API Integration
  const todaysRegistrations = 25;

  return (
    <section className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Customers
        </h1>

        <p className="mt-2 text-gray-500">
          Manage all customers from one place.
        </p>
      </div>

      {/* Statistics Cards */}

      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
        "
      >
        {/* Total */}

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-gray-500">
            Total Customers
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            {totalCustomers}
          </h2>
        </div>

        {/* Active */}

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-gray-500">
            Active Customers
          </p>

          <h2 className="mt-3 text-4xl font-bold text-green-600">
            {activeCustomers}
          </h2>
        </div>

        {/* Blocked */}

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-gray-500">
            Blocked Customers
          </p>

          <h2 className="mt-3 text-4xl font-bold text-red-600">
            {blockedCustomers}
          </h2>
        </div>

        {/* Today's Registration */}

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-gray-500">
            Today's Registrations
          </p>

          <h2 className="mt-3 text-4xl font-bold text-blue-600">
            {todaysRegistrations}
          </h2>
        </div>
      </div>

      {/* Search & Filter Section */}

      <div
        className="
        rounded-3xl
        bg-white
        p-6
        shadow-sm
        "
      >
        <div
          className="
          flex
          flex-col
          gap-5
          xl:flex-row
          xl:items-center
          xl:justify-between
          "
        >
          {/* Search */}

          <div className="relative w-full xl:max-w-md">
            <input
              type="text"
              placeholder="Search Name, Email or Phone..."
              className="
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              py-4
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

          {/* Right Section */}

          <div
            className="
            flex
            flex-col
            gap-4
            sm:flex-row
            "
          >
            {/* Filter */}

            <select
              className="
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              px-5
              py-4
              outline-none
              focus:border-amber-500
              "
            >
              <option>All Customers</option>

              <option>Active</option>

              <option>Blocked</option>

              <option>Inactive</option>
            </select>

            {/* Export */}

            <button
              className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-blue-500
              px-6
              py-4
              font-semibold
              text-white
              transition
              hover:bg-blue-600
              "
            >
              <FaDownload />

              Export
            </button>

            {/* Add Customer */}

            <button
              className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-amber-500
              px-6
              py-4
              font-semibold
              text-white
              transition
              hover:bg-amber-600
              "
            >
              <FaPlus />

              Add Customer
            </button>
          </div>
        </div>
      </div>

      {/* Customers Table */}

      <CustomersTable />
    </section>
  );
};

export default Customers;