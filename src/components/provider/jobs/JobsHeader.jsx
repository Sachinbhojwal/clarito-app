import {
  FiBriefcase,
  FiClock,
  FiSearch,
} from "react-icons/fi";

const JobsHeader = ({
  totalJobs,
  pendingJobs,
}) => {
  return (
    <section
      className="
      mb-8
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      <div
        className="
        flex
        flex-col
        gap-6
        lg:flex-row
        lg:items-center
        lg:justify-between
        "
      >
        {/* Left */}

        <div>
          <h1
            className="
            text-3xl
            font-bold
            "
          >
            My Jobs
          </h1>

          <p
            className="
            mt-2
            text-gray-500
            "
          >
            Manage all your service bookings
          </p>
        </div>

        {/* Right */}

        <div
          className="
          flex
          flex-wrap
          gap-4
          "
        >
          {/* Total */}

          <div
            className="
            flex
            items-center
            gap-4
            rounded-2xl
            bg-blue-50
            px-5
            py-4
            "
          >
            <div
              className="
              rounded-xl
              bg-blue-500
              p-3
              text-white
              "
            >
              <FiBriefcase size={22} />
            </div>

            <div>
              <p
                className="
                text-sm
                text-gray-500
                "
              >
                Total Jobs
              </p>

              <h3
                className="
                text-2xl
                font-bold
                "
              >
                {totalJobs}
              </h3>
            </div>
          </div>

          {/* Pending */}

          <div
            className="
            flex
            items-center
            gap-4
            rounded-2xl
            bg-yellow-50
            px-5
            py-4
            "
          >
            <div
              className="
              rounded-xl
              bg-yellow-500
              p-3
              text-white
              "
            >
              <FiClock size={22} />
            </div>

            <div>
              <p
                className="
                text-sm
                text-gray-500
                "
              >
                Pending
              </p>

              <h3
                className="
                text-2xl
                font-bold
                "
              >
                {pendingJobs}
              </h3>
            </div>
          </div>

          {/* Search */}

          <button
            className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-green-500
            px-6
            py-4
            font-semibold
            text-white
            transition
            hover:bg-green-600
            "
          >
            <FiSearch />

            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobsHeader;