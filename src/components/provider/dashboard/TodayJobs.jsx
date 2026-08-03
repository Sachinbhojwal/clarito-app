import {
  FiEye,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

const TodayJobs = () => {
  const jobs = [
    {
      id: 1,
      customer: "Rahul Sharma",
      service: "Electrician",
      address: "Surat, Gujarat",
      time: "09:30 AM",
      status: "Pending",
    },

    {
      id: 2,
      customer: "Priya Patel",
      service: "Cleaning",
      address: "Ahmedabad, Gujarat",
      time: "11:00 AM",
      status: "Accepted",
    },

    {
      id: 3,
      customer: "Amit Verma",
      service: "Plumber",
      address: "Vadodara, Gujarat",
      time: "02:00 PM",
      status: "Completed",
    },
  ];

  const getStatusStyle = (
    status
  ) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Accepted":
        return "bg-blue-100 text-blue-700";

      case "Completed":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section
      className="
      mt-8
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      <div
        className="
        mb-6
        flex
        items-center
        justify-between
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          "
        >
          Today's Jobs
        </h2>

        <button
          className="
          rounded-xl
          bg-green-500
          px-5
          py-2
          font-semibold
          text-white
          hover:bg-green-600
          "
        >
          View All
        </button>
      </div>

      {/* Desktop */}

      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead
            className="
            border-b
            "
          >
            <tr>
              <th className="py-4 text-left">
                Customer
              </th>

              <th className="text-left">
                Service
              </th>

              <th className="text-left">
                Address
              </th>

              <th className="text-left">
                Time
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="
                border-b
                last:border-none
                "
              >
                <td className="py-5">
                  {job.customer}
                </td>

                <td>
                  {job.service}
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    <FiMapPin />
                    {job.address}
                  </div>
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    <FiClock />
                    {job.time}
                  </div>
                </td>

                <td>
                  <span
                    className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    ${getStatusStyle(
                      job.status
                    )}
                    `}
                  >
                    {job.status}
                  </span>
                </td>

                <td className="text-center">
                  <button
                    className="
                    rounded-xl
                    bg-blue-500
                    p-3
                    text-white
                    hover:bg-blue-600
                    "
                  >
                    <FiEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}

      <div className="space-y-5 lg:hidden">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="
            rounded-2xl
            border
            p-5
            "
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold">
                {job.customer}
              </h3>

              <span
                className={`
                rounded-full
                px-3
                py-1
                text-xs
                font-semibold
                ${getStatusStyle(
                  job.status
                )}
                `}
              >
                {job.status}
              </span>
            </div>

            <p className="mt-3">
              {job.service}
            </p>

            <p className="mt-2 text-gray-500">
              📍 {job.address}
            </p>

            <p className="text-gray-500">
              🕒 {job.time}
            </p>

            <button
              className="
              mt-5
              w-full
              rounded-xl
              bg-blue-500
              py-3
              font-semibold
              text-white
              hover:bg-blue-600
              "
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodayJobs;