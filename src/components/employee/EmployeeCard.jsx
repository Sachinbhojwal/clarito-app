import {
  FaCheckCircle,
  FaPhoneAlt,
  FaStar,
  FaUserTie,
} from "react-icons/fa";

import { assignedEmployeeData } from "../../data/employee/assignedEmployeeData";

const EmployeeCard = () => {
  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      {/* Heading */}

      <div>
        <h2
          className="
          text-2xl
          font-bold
          text-gray-800
          "
        >
          Assigned Professional
        </h2>

        <p
          className="
          mt-2
          text-gray-500
          "
        >
          Your service professional details.
        </p>
      </div>

      {/* Employee Profile */}

      <div
        className="
        mt-8
        flex
        flex-col
        gap-6
        lg:flex-row
        lg:items-center
        "
      >
        {/* Image */}

        <img
          src={assignedEmployeeData.image}
          alt={assignedEmployeeData.name}
          className="
          h-32
          w-32
          rounded-full
          object-cover
          border-4
          border-amber-100
          "
        />

        {/* Details */}

        <div className="flex-1">
          <div
            className="
            flex
            flex-wrap
            items-center
            gap-3
            "
          >
            <h3
              className="
              text-3xl
              font-bold
              text-gray-800
              "
            >
              {assignedEmployeeData.name}
            </h3>

            {assignedEmployeeData.verified && (
              <span
                className="
                flex
                items-center
                gap-2
                rounded-full
                bg-green-100
                px-4
                py-2
                text-sm
                font-semibold
                text-green-600
                "
              >
                <FaCheckCircle />

                Verified
              </span>
            )}
          </div>

          <p
            className="
            mt-3
            text-lg
            text-gray-500
            "
          >
            {assignedEmployeeData.designation}
          </p>

          <div
            className="
            mt-5
            flex
            flex-wrap
            gap-4
            "
          >
            <span
              className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-amber-100
              px-4
              py-2
              font-semibold
              text-amber-600
              "
            >
              <FaStar />

              {assignedEmployeeData.rating} Rating
            </span>

            <span
              className="
              rounded-xl
              bg-blue-100
              px-4
              py-2
              font-semibold
              text-blue-600
              "
            >
              {assignedEmployeeData.experience}
            </span>
          </div>
        </div>
      </div>

      {/* Information Cards */}

      <div
        className="
        mt-10
        grid
        gap-5
        sm:grid-cols-2
        lg:grid-cols-4
        "
      >
        {/* Services */}

        <div
          className="
          rounded-2xl
          bg-gray-50
          p-5
          "
        >
          <p className="text-gray-500">
            Completed Services
          </p>

          <h3
            className="
            mt-3
            text-2xl
            font-bold
            text-gray-800
            "
          >
            {assignedEmployeeData.completedServices}
          </h3>
        </div>

        {/* Arrival */}

        <div
          className="
          rounded-2xl
          bg-gray-50
          p-5
          "
        >
          <p className="text-gray-500">
            Arrival Time
          </p>

          <h3
            className="
            mt-3
            text-2xl
            font-bold
            text-green-600
            "
          >
            {assignedEmployeeData.estimatedArrival}
          </h3>
        </div>

        {/* Status */}

        <div
          className="
          rounded-2xl
          bg-gray-50
          p-5
          "
        >
          <p className="text-gray-500">
            Current Status
          </p>

          <h3
            className="
            mt-3
            text-xl
            font-bold
            text-amber-600
            "
          >
            {assignedEmployeeData.status}
          </h3>
        </div>

        {/* Location */}

        <div
          className="
          rounded-2xl
          bg-gray-50
          p-5
          "
        >
          <p className="text-gray-500">
            Current Location
          </p>

          <h3
            className="
            mt-3
            text-lg
            font-bold
            text-gray-800
            "
          >
            {assignedEmployeeData.currentLocation}
          </h3>
        </div>
      </div>

      {/* Buttons */}

      <div
        className="
        mt-10
        flex
        flex-col
        gap-4
        sm:flex-row
        "
      >
        <button
          className="
          flex
          flex-1
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-green-500
          px-6
          py-4
          text-lg
          font-semibold
          text-white
          transition
          hover:bg-green-600
          "
        >
          <FaPhoneAlt />

          Call Professional
        </button>

        <button
          className="
          flex
          flex-1
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-amber-500
          px-6
          py-4
          text-lg
          font-semibold
          text-white
          transition
          hover:bg-amber-600
          "
        >
          <FaUserTie />

          View Details
        </button>
      </div>
    </section>
  );
};

export default EmployeeCard;