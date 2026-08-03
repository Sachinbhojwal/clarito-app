import {
  FiCalendar,
  FiClock,
  FiTool,
  FiCreditCard,
  FiHash,
} from "react-icons/fi";

import JobStatusBadge from "./JobStatusBadge";

const BookingInfo = ({
  job,
}) => {
  return (
    <section
      className="
      rounded-3xl
      border
      border-gray-200
      p-6
      "
    >
      {/* Title */}

      <h3
        className="
        mb-6
        text-xl
        font-bold
        "
      >
        Booking Information
      </h3>

      <div className="space-y-5">

        {/* Booking ID */}

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          <div
            className="
            rounded-xl
            bg-blue-100
            p-3
            text-blue-600
            "
          >
            <FiHash size={20} />
          </div>

          <div>
            <p
              className="
              text-sm
              text-gray-500
              "
            >
              Booking ID
            </p>

            <h4 className="font-semibold">
              {job.bookingId}
            </h4>
          </div>
        </div>

        {/* Service */}

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          <div
            className="
            rounded-xl
            bg-purple-100
            p-3
            text-purple-600
            "
          >
            <FiTool size={20} />
          </div>

          <div>
            <p
              className="
              text-sm
              text-gray-500
              "
            >
              Service
            </p>

            <h4 className="font-semibold">
              {job.service}
            </h4>
          </div>
        </div>

        {/* Date */}

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          <div
            className="
            rounded-xl
            bg-orange-100
            p-3
            text-orange-600
            "
          >
            <FiCalendar size={20} />
          </div>

          <div>
            <p
              className="
              text-sm
              text-gray-500
              "
            >
              Booking Date
            </p>

            <h4 className="font-semibold">
              {job.bookingDate}
            </h4>
          </div>
        </div>

        {/* Time */}

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          <div
            className="
            rounded-xl
            bg-indigo-100
            p-3
            text-indigo-600
            "
          >
            <FiClock size={20} />
          </div>

          <div>
            <p
              className="
              text-sm
              text-gray-500
              "
            >
              Booking Time
            </p>

            <h4 className="font-semibold">
              {job.bookingTime}
            </h4>
          </div>
        </div>

        {/* Amount */}

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          <div
            className="
            rounded-xl
            bg-green-100
            p-3
            text-green-600
            "
          >
            <FiCreditCard size={20} />
          </div>

          <div>
            <p
              className="
              text-sm
              text-gray-500
              "
            >
              Amount
            </p>

            <h4
              className="
              font-bold
              text-green-600
              "
            >
              ₹{job.amount}
            </h4>
          </div>
        </div>

        {/* Status */}

        <div
          className="
          border-t
          pt-5
          "
        >
          <p
            className="
            mb-3
            text-sm
            text-gray-500
            "
          >
            Current Status
          </p>

          <JobStatusBadge
            status={job.status}
          />
        </div>

      </div>
    </section>
  );
};

export default BookingInfo;