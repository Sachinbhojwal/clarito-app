import { FiSearch } from "react-icons/fi";

const statusList = [
  "All",
  "Pending",
  "Accepted",
  "In Progress",
  "Completed",
];

const JobsFilter = ({
  selectedStatus,
  setSelectedStatus,
  search,
  setSearch,
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
        gap-5
        lg:flex-row
        lg:items-center
        lg:justify-between
        "
      >
        {/* Status Filter */}

        <div
          className="
          flex
          flex-wrap
          gap-3
          "
        >
          {statusList.map(
            (status) => (
              <button
                key={status}
                onClick={() =>
                  setSelectedStatus(
                    status
                  )
                }
                className={`
                rounded-full
                px-5
                py-2
                text-sm
                font-semibold
                transition

                ${selectedStatus ===
                    status
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }
                `}
              >
                {status}
              </button>
            )
          )}
        </div>

        {/* Search */}

        <div
          className="
          relative
          w-full
          lg:w-80
          "
        >
          <FiSearch
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
            w-full
            rounded-2xl
            border
            border-gray-200
            py-3
            pl-11
            pr-4
            outline-none
            focus:border-green-500
            "
          />
        </div>
      </div>
    </section>
  );
};

export default JobsFilter;