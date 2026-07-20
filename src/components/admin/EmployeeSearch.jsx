import { FaSearch, FaFilter } from "react-icons/fa";

const EmployeeSearch = ({
  searchTerm,
  setSearchTerm,
  filterStatus,
  setFilterStatus,
}) => {
  return (
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
        flex-col
        gap-5
        lg:flex-row
        lg:items-center
        lg:justify-between
        "
      >
        {/* Search Box */}

        <div
          className="
          relative
          w-full
          lg:max-w-xl
          "
        >
          <input
            type="text"
            value={searchTerm}
            placeholder="
            Search by Name,
            Phone or Service...
            "
            onChange={(event) =>
              setSearchTerm(
                event.target.value
              )
            }
            className="
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            py-4
            pl-14
            pr-4
            outline-none
            transition
            focus:border-amber-500
            focus:bg-white
            "
          />

          <FaSearch
            className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-gray-400
            "
          />
        </div>

        {/* Filter */}

        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          <FaFilter
            className="
            text-xl
            text-gray-500
            "
          />

          <select
            value={filterStatus}
            onChange={(event) =>
              setFilterStatus(
                event.target.value
              )
            }
            className="
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-5
            py-4
            outline-none
            focus:border-amber-500
            "
          >
            <option value="All">
              All Employees
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>

            <option value="Available">
              Available
            </option>

            <option value="Unavailable">
              Unavailable
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSearch;