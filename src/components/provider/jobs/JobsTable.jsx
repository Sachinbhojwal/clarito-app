import {
  FiEye,
  FiCheck,
  FiX,
  FiPlay,
} from "react-icons/fi";

import JobStatusBadge from "./JobStatusBadge";

const JobsTable = ({
  jobs,
}) => {
  return (
    <section
      className="
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-sm
      "
    >
      {/* ========================= */}
      {/* Desktop */}
      {/* ========================= */}

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-5 text-left">
                Booking ID
              </th>

              <th className="px-6 py-5 text-left">
                Customer
              </th>

              <th className="px-6 py-5 text-left">
                Service
              </th>

              <th className="px-6 py-5 text-left">
                Date
              </th>

              <th className="px-6 py-5 text-left">
                Amount
              </th>

              <th className="px-6 py-5 text-left">
                Status
              </th>

              <th className="px-6 py-5 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="
                border-t
                border-gray-100
                "
              >
                <td className="px-6 py-5 font-semibold">
                  {job.bookingId}
                </td>

                <td className="px-6 py-5">
                  <div>
                    <h4 className="font-semibold">
                      {job.customer.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {job.customer.phone}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-5">
                  {job.service}
                </td>

                <td className="px-6 py-5">
                  <div>
                    <p>{job.bookingDate}</p>

                    <p className="text-sm text-gray-500">
                      {job.bookingTime}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-5 font-bold text-green-600">
                  ₹{job.amount}
                </td>

                <td className="px-6 py-5">
                  <JobStatusBadge
                    status={job.status}
                  />
                </td>

                <td className="px-6 py-5">
                  <div
                    className="
                    flex
                    justify-center
                    gap-2
                    "
                  >
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

                    {job.status ===
                      "Pending" && (
                        <>
                          <button
                            className="
                          rounded-xl
                          bg-green-500
                          p-3
                          text-white
                          hover:bg-green-600
                          "
                          >
                            <FiCheck />
                          </button>

                          <button
                            className="
                          rounded-xl
                          bg-red-500
                          p-3
                          text-white
                          hover:bg-red-600
                          "
                          >
                            <FiX />
                          </button>
                        </>
                      )}

                    {job.status ===
                      "Accepted" && (
                        <button
                          className="
                        rounded-xl
                        bg-purple-500
                        p-3
                        text-white
                        hover:bg-purple-600
                        "
                        >
                          <FiPlay />
                        </button>
                      )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ========================= */}
      {/* Mobile */}
      {/* ========================= */}

      <div className="space-y-5 p-5 lg:hidden">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="
            rounded-3xl
            border
            border-gray-200
            p-5
            "
          >
            <div
              className="
              flex
              items-center
              justify-between
              "
            >
              <h3 className="font-bold">
                {job.customer.name}
              </h3>

              <JobStatusBadge
                status={job.status}
              />
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p>
                <strong>Booking:</strong>{" "}
                {job.bookingId}
              </p>

              <p>
                <strong>Service:</strong>{" "}
                {job.service}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {job.bookingDate}
              </p>

              <p>
                <strong>Time:</strong>{" "}
                {job.bookingTime}
              </p>

              <p>
                <strong>Amount:</strong>{" "}
                ₹{job.amount}
              </p>
            </div>

            <div
              className="
              mt-5
              flex
              flex-wrap
              gap-3
              "
            >
              <button
                className="
                rounded-xl
                bg-blue-500
                p-3
                text-white
                "
              >
                <FiEye />
              </button>

              {job.status ===
                "Pending" && (
                  <>
                    <button
                      className="
                    rounded-xl
                    bg-green-500
                    p-3
                    text-white
                    "
                    >
                      <FiCheck />
                    </button>

                    <button
                      className="
                    rounded-xl
                    bg-red-500
                    p-3
                    text-white
                    "
                    >
                      <FiX />
                    </button>
                  </>
                )}

              {job.status ===
                "Accepted" && (
                  <button
                    className="
                  rounded-xl
                  bg-purple-500
                  p-3
                  text-white
                  "
                  >
                    <FiPlay />
                  </button>
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default JobsTable;