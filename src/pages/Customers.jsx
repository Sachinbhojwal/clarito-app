import { FaPlus, FaSearch } from "react-icons/fa";

import { customersData } from "../data/admin/customersData";
import CustomersTable from "../components/admin/CustomersTable";

const Customers = () => {
  return (
    <section className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Customers
        </h1>

        <p className="mt-2 text-gray-500">
          Manage all customers from one place.
        </p>

      </div>

      <div
        className="
        grid
        gap-6
        lg:grid-cols-3
        "
      >

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            Total Customers
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            {customersData.length}
          </h2>

        </div>

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            Active Customers
          </p>

          <h2 className="mt-3 text-4xl font-bold text-green-600">
            {
              customersData.filter(
                (customer) =>
                  customer.status === "Active"
              ).length
            }
          </h2>

        </div>

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            Inactive Customers
          </p>

          <h2 className="mt-3 text-4xl font-bold text-red-600">
            {
              customersData.filter(
                (customer) =>
                  customer.status === "Inactive"
              ).length
            }
          </h2>

        </div>

      </div>

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

        <div className="relative w-full lg:max-w-md">

          <input
            type="text"
            placeholder="Search customer..."
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

        <button
          className="
          flex
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
          "
        >
          <FaPlus />

          Add Customer

        </button>

      </div>

      <CustomersTable />

    </section>
  );
};

export default Customers;