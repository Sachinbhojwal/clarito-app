import { FaStar } from "react-icons/fa";

import { topServicesData } from "../../data/admin/topServicesData";

const TopServices = () => {
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
          Top Services
        </h2>

        <p className="mt-2 text-gray-500">
          Most booked services this month.
        </p>

      </div>

      <div className="space-y-5">

        {topServicesData.map((service) => (

          <div
            key={service.id}
            className="
            rounded-2xl
            border
            border-gray-100
            p-5
            transition
            duration-300
            hover:bg-gray-50
            "
          >
            <div className="flex items-center justify-between">

              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>

              <div className="flex items-center gap-1">

                <FaStar className="text-yellow-500" />

                <span className="font-semibold">
                  {service.rating}
                </span>

              </div>

            </div>

            <div
              className="
              mt-4
              grid
              gap-4
              sm:grid-cols-2
              "
            >
              <div>

                <p className="text-sm text-gray-500">
                  Total Bookings
                </p>

                <h4 className="mt-1 text-xl font-bold text-gray-800">
                  {service.totalBookings}
                </h4>

              </div>

              <div>

                <p className="text-sm text-gray-500">
                  Revenue
                </p>

                <h4 className="mt-1 text-xl font-bold text-green-600">
                  ₹{service.revenue.toLocaleString()}
                </h4>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default TopServices;