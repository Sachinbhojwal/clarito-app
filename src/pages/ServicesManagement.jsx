import { FaPlus, FaSearch } from "react-icons/fa";

import { servicesManagementData } from "../data/admin/servicesManagementData";
import ServicesTable from "../components/admin/ServicesTable";

const ServicesManagement = () => {
  return (
    <section className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Services Management
        </h1>

        <p className="mt-2 text-gray-500">
          Manage all services from one place.
        </p>

      </div>

      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
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
            Total Services
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            {servicesManagementData.length}
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
            Active Services
          </p>

          <h2 className="mt-3 text-4xl font-bold text-green-600">
            {
              servicesManagementData.filter(
                (service) =>
                  service.status === "Active"
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
            Inactive Services
          </p>

          <h2 className="mt-3 text-4xl font-bold text-red-600">
            {
              servicesManagementData.filter(
                (service) =>
                  service.status === "Inactive"
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
            Top Rated Service
          </p>

          <h2 className="mt-3 text-4xl font-bold text-yellow-500">
            {Math.max(
              ...servicesManagementData.map(
                (service) => service.rating
              )
            )}
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
            placeholder="Search service..."
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

          Add Service

        </button>

      </div>

      <ServicesTable />

    </section>
  );
};

export default ServicesManagement;