const ReviewsFilter = ({
  search,
  setSearch,
  ratingFilter,
  setRatingFilter,
  sortBy,
  setSortBy,
}) => {
  return (
    <section
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-6
      shadow-sm
      "
    >
      <div
        className="
        grid
        gap-5
        lg:grid-cols-3
        "
      >
        {/* Search */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Search Customer
          </label>

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            placeholder="Search customer..."
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-amber-500
            "
          />
        </div>

        {/* Rating */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Rating
          </label>

          <select
            value={ratingFilter}
            onChange={(e) =>
              setRatingFilter(
                e.target.value
              )
            }
            className="
            w-full
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
              All Ratings
            </option>

            <option value="5">
              ⭐ 5 Star
            </option>

            <option value="4">
              ⭐ 4 Star
            </option>

            <option value="3">
              ⭐ 3 Star
            </option>

            <option value="2">
              ⭐ 2 Star
            </option>

            <option value="1">
              ⭐ 1 Star
            </option>
          </select>
        </div>

        {/* Sort */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Sort By
          </label>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value
              )
            }
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-amber-500
            "
          >
            <option value="latest">
              Latest
            </option>

            <option value="oldest">
              Oldest
            </option>

            <option value="highest">
              Highest Rating
            </option>

            <option value="lowest">
              Lowest Rating
            </option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ReviewsFilter;