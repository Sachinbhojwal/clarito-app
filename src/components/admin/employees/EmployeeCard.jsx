import {
  FaStar,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";

const EmployeeCard = ({ employee }) => {
  return (
    <div
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-2xl
      "
    >
      {/* ================= */}
      {/* Employee Image */}
      {/* ================= */}

      <div className="flex justify-center">
        <img
          src={employee.image}
          alt={employee.name}
          className="
          h-28
          w-28
          rounded-full
          border-4
          border-amber-100
          object-cover
          "
        />
      </div>

      {/* ================= */}
      {/* Employee Name */}
      {/* ================= */}

      <div className="mt-5 text-center">
        <h2
          className="
          text-2xl
          font-bold
          text-gray-900
          "
        >
          {employee.name}
        </h2>

        <p
          className="
          mt-1
          font-medium
          text-amber-500
          "
        >
          {employee.service}
        </p>
      </div>

      {/* ================= */}
      {/* Ratings */}
      {/* ================= */}

      <div
        className="
        mt-4
        flex
        items-center
        justify-center
        gap-2
        "
      >
        <FaStar className="text-yellow-500" />

        <span className="font-semibold">
          {employee.rating}
        </span>
      </div>

      {/* ================= */}
      {/* Employee Details */}
      {/* ================= */}

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3">
          <FaPhoneAlt
            className="text-amber-500"
          />

          <p>{employee.phone}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope
            className="text-amber-500"
          />

          <p>{employee.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaUserTie
            className="text-amber-500"
          />

          <p>
            Experience :
            {" "}
            {employee.experience}
          </p>
        </div>

      </div>

      {/* ================= */}
      {/* Stats */}
      {/* ================= */}

      <div
        className="
        mt-6
        grid
        grid-cols-2
        gap-4
        "
      >
        <div
          className="
          rounded-2xl
          bg-gray-50
          p-4
          text-center
          "
        >
          <h3
            className="
            text-xl
            font-bold
            text-amber-500
            "
          >
            {employee.completedJobs}
          </h3>

          <p
            className="
            mt-1
            text-sm
            text-gray-600
            "
          >
            Jobs Completed
          </p>
        </div>

        <div
          className="
          rounded-2xl
          bg-gray-50
          p-4
          text-center
          "
        >
          <h3
            className="
            text-xl
            font-bold
            text-amber-500
            "
          >
            ₹{employee.salary}
          </h3>

          <p
            className="
            mt-1
            text-sm
            text-gray-600
            "
          >
            Monthly Salary
          </p>
        </div>
      </div>

      {/* ================= */}
      {/* Status */}
      {/* ================= */}

      <div
        className="
        mt-6
        flex
        flex-wrap
        items-center
        justify-center
        gap-3
        "
      >
        <span
          className="
          rounded-full
          bg-green-100
          px-4
          py-2
          text-sm
          font-semibold
          text-green-700
          "
        >
          {employee.availability}
        </span>

        <span
          className="
          rounded-full
          bg-blue-100
          px-4
          py-2
          text-sm
          font-semibold
          text-blue-700
          "
        >
          {employee.status}
        </span>

        {employee.verified && (
          <span
            className="
            flex
            items-center
            gap-2
            rounded-full
            bg-amber-100
            px-4
            py-2
            text-sm
            font-semibold
            text-amber-700
            "
          >
            <FaCheckCircle />

            Verified
          </span>
        )}
      </div>

      {/* ================= */}
      {/* Buttons */}
      {/* ================= */}

      <div
        className="
        mt-8
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-3
        "
      >
        <button
          className="
          rounded-xl
          bg-amber-500
          py-3
          font-semibold
          text-white
          transition
          hover:bg-amber-600
          "
        >
          Details
        </button>

        <button
          className="
          rounded-xl
          bg-blue-500
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-600
          "
        >
          Edit
        </button>

        <button
          className="
          rounded-xl
          bg-red-500
          py-3
          font-semibold
          text-white
          transition
          hover:bg-red-600
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;