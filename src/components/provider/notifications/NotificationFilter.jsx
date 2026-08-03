import { FaSearch } from "react-icons/fa";

const NotificationFilter = ({
  search,
  setSearch,
  type,
  setType,
  status,
  setStatus,
  sort,
  setSort,
}) => {
  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      <div
        className="
        grid
        gap-5
        lg:grid-cols-4
        "
      >
        {/* Search */}

        <div className="relative">
          <FaSearch
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
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            placeholder="Search notifications..."
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            py-3
            pl-11
            pr-4
            outline-none
            focus:border-amber-500
            "
          />
        </div>

        {/* Type */}

        <select
          value={type}
          onChange={(e) =>
            setType(
              e.target.value
            )
          }
          className="
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          outline-none
          focus:border-amber-500
          "
        >
          <option value="All">
            All Types
          </option>

          <option value="Booking">
            Booking
          </option>

          <option value="Payment">
            Payment
          </option>

          <option value="Review">
            Review
          </option>

          <option value="Cancelled">
            Cancelled
          </option>

          <option value="System">
            System
          </option>
        </select>

        {/* Status */}

        <select
          value={status}
          onChange={(e) =>
            setStatus(
              e.target.value
            )
          }
          className="
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          outline-none
          focus:border-amber-500
          "
        >
          <option value="All">
            All Status
          </option>

          <option value="Unread">
            Unread
          </option>

          <option value="Read">
            Read
          </option>
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) =>
            setSort(
              e.target.value
            )
          }
          className="
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          outline-none
          focus:border-amber-500
          "
        >
          <option value="Latest">
            Latest First
          </option>

          <option value="Oldest">
            Oldest First
          </option>
        </select>
      </div>
    </section>
  );
};

export default NotificationFilter;