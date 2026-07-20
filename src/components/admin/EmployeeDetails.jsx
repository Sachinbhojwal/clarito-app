import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaStar,
  FaBriefcase,
  FaMoneyBillWave,
  FaUserCheck,
} from "react-icons/fa";

const EmployeeDetails = ({ employee }) => {
  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      {/* ==================== */}
      {/* Profile Section */}
      {/* ==================== */}

      <div
        className="
        flex
        flex-col
        gap-6
        lg:flex-row
        lg:items-center
        "
      >
        <img
          src={employee.image}
          alt={employee.name}
          className="
          h-40
          w-40
          rounded-full
          object-cover
          border-4
          border-amber-100
          "
        />

        <div className="space-y-3">

          <h1
            className="
            text-4xl
            font-bold
            text-gray-800
            "
          >
            {employee.name}
          </h1>

          <p
            className="
            text-lg
            font-semibold
            text-amber-500
            "
          >
            {employee.service}
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-3
            "
          >
            <span
              className="
              rounded-full
              bg-green-100
              px-4
              py-2
              text-green-700
              "
            >
              {employee.status}
            </span>

            <span
              className="
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-blue-700
              "
            >
              {employee.availability}
            </span>
          </div>

        </div>
      </div>


      {/* ==================== */}
      {/* Information */}
      {/* ==================== */}

      <div
        className="
        mt-10
        grid
        gap-6
        md:grid-cols-2
        "
      >
        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          <FaPhoneAlt
            className="
            text-xl
            text-amber-500
            "
          />

          <p>{employee.phone}</p>
        </div>

        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          <FaEnvelope
            className="
            text-xl
            text-amber-500
            "
          />

          <p>{employee.email}</p>
        </div>

        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          <FaBriefcase
            className="
            text-xl
            text-amber-500
            "
          />

          <p>
            Experience :
            {" "}
            {employee.experience}
          </p>
        </div>

        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          <FaMoneyBillWave
            className="
            text-xl
            text-amber-500
            "
          />

          <p>
            Salary :
            {" "}
            ₹{employee.salary}
          </p>
        </div>

      </div>


      {/* ==================== */}
      {/* Address */}
      {/* ==================== */}

      <div className="mt-10">

        <h3
          className="
          mb-3
          text-2xl
          font-bold
          "
        >
          Address
        </h3>

        <div
          className="
          flex
          items-start
          gap-3
          rounded-2xl
          bg-gray-50
          p-5
          "
        >
          <FaMapMarkerAlt
            className="
            mt-1
            text-xl
            text-red-500
            "
          />

          <p>
            {employee.address}
          </p>

        </div>

      </div>


      {/* ==================== */}
      {/* Statistics */}
      {/* ==================== */}

      <div
        className="
        mt-10
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
        "
      >

        <div
          className="
          rounded-3xl
          bg-gray-50
          p-6
          text-center
          "
        >
          <h2
            className="
            text-4xl
            font-bold
            text-amber-500
            "
          >
            {employee.completedJobs}
          </h2>

          <p className="mt-2">
            Completed Jobs
          </p>
        </div>


        <div
          className="
          rounded-3xl
          bg-gray-50
          p-6
          text-center
          "
        >
          <h2
            className="
            text-4xl
            font-bold
            text-yellow-500
            "
          >
            {employee.rating}
          </h2>

          <p className="mt-2">
            Ratings
          </p>
        </div>


        <div
          className="
          rounded-3xl
          bg-gray-50
          p-6
          text-center
          "
        >
          <h2
            className="
            text-4xl
            font-bold
            text-green-600
            "
          >
            ₹{employee.salary}
          </h2>

          <p className="mt-2">
            Monthly Salary
          </p>
        </div>


        <div
          className="
          rounded-3xl
          bg-gray-50
          p-6
          text-center
          "
        >
          <FaUserCheck
            className="
            mx-auto
            text-4xl
            text-blue-600
            "
          />

          <p className="mt-3">
            Verified Employee
          </p>
        </div>

      </div>


      {/* ==================== */}
      {/* Buttons */}
      {/* ==================== */}

      <div
        className="
        mt-10
        grid
        gap-4
        md:grid-cols-3
        "
      >
        <button
          className="
          rounded-2xl
          bg-amber-500
          py-4
          font-semibold
          text-white
          hover:bg-amber-600
          "
        >
          Edit Employee
        </button>

        <button
          className="
          rounded-2xl
          bg-blue-500
          py-4
          font-semibold
          text-white
          hover:bg-blue-600
          "
        >
          Assign Booking
        </button>

        <button
          className="
          rounded-2xl
          bg-red-500
          py-4
          font-semibold
          text-white
          hover:bg-red-600
          "
        >
          Delete Employee
        </button>

      </div>

    </section>
  );
};

export default EmployeeDetails;