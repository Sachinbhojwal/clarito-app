import {
  FaBriefcase,
  FaMoneyBillWave,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const EmployeeAnalytics = () => {
  return (
    <section className="space-y-8">

      {/* Heading */}

      <div>
        <h1
          className="
          text-3xl
          font-bold
          text-gray-800
          sm:text-4xl
          "
        >
          Employee Analytics
        </h1>

        <p className="mt-2 text-gray-500">
          Track employee performance,
          earnings and bookings.
        </p>
      </div>


      {/* Analytics Cards */}

      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
        "
      >

        {/* Total Employees */}

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
            items-center
            justify-between
            "
          >
            <p className="text-gray-500">
              Employees
            </p>

            <FaUsers
              className="
              text-3xl
              text-amber-500
              "
            />
          </div>

          <h2
            className="
            mt-5
            text-4xl
            font-bold
            text-gray-800
            "
          >
            500+
          </h2>

        </div>


        {/* Earnings */}

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
            items-center
            justify-between
            "
          >
            <p className="text-gray-500">
              Total Earnings
            </p>

            <FaMoneyBillWave
              className="
              text-3xl
              text-green-600
              "
            />
          </div>

          <h2
            className="
            mt-5
            text-4xl
            font-bold
            text-green-600
            "
          >
            ₹5L+
          </h2>

        </div>


        {/* Jobs */}

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
            items-center
            justify-between
            "
          >
            <p className="text-gray-500">
              Completed Jobs
            </p>

            <FaBriefcase
              className="
              text-3xl
              text-blue-600
              "
            />
          </div>

          <h2
            className="
            mt-5
            text-4xl
            font-bold
            text-blue-600
            "
          >
            1200+
          </h2>

        </div>


        {/* Ratings */}

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
            items-center
            justify-between
            "
          >
            <p className="text-gray-500">
              Average Rating
            </p>

            <FaStar
              className="
              text-3xl
              text-yellow-500
              "
            />
          </div>

          <h2
            className="
            mt-5
            text-4xl
            font-bold
            text-yellow-500
            "
          >
            4.9
          </h2>

        </div>

      </div>



      {/* Monthly Performance */}

      <div
        className="
        rounded-3xl
        bg-white
        p-8
        shadow-sm
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          text-gray-800
          "
        >
          Monthly Performance
        </h2>

        <p className="mt-2 text-gray-500">
          Analytics chart will be
          connected in future.
        </p>

        <div
          className="
          mt-8
          flex
          h-72
          items-center
          justify-center
          rounded-3xl
          border-2
          border-dashed
          border-gray-300
          "
        >
          <p className="text-gray-400">
            Monthly Analytics Graph
          </p>
        </div>

      </div>



      {/* Booking Statistics */}

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
          <h3
            className="
            text-2xl
            font-bold
            text-gray-800
            "
          >
            Today's Bookings
          </h3>

          <p
            className="
            mt-5
            text-5xl
            font-bold
            text-amber-500
            "
          >
            50
          </p>

        </div>



        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <h3
            className="
            text-2xl
            font-bold
            text-gray-800
            "
          >
            Pending Jobs
          </h3>

          <p
            className="
            mt-5
            text-5xl
            font-bold
            text-red-500
            "
          >
            12
          </p>

        </div>



        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <h3
            className="
            text-2xl
            font-bold
            text-gray-800
            "
          >
            Completed Jobs
          </h3>

          <p
            className="
            mt-5
            text-5xl
            font-bold
            text-green-600
            "
          >
            38
          </p>

        </div>

      </div>

    </section>
  );
};

export default EmployeeAnalytics;