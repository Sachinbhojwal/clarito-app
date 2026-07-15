import { FaFilter, FaSearch } from "react-icons/fa";

import ReviewsTable from "../components/admin/ReviewsTable";
import { reviewsData } from "../data/admin/reviewsData";

const Reviews = () => {
  const totalReviews = reviewsData.length;

  const approvedReviews = reviewsData.filter(
    (review) => review.status === "Approved"
  ).length;

  const pendingReviews = reviewsData.filter(
    (review) => review.status === "Pending"
  ).length;

  const averageRating = (
    reviewsData.reduce(
      (total, review) => total + review.rating,
      0
    ) / reviewsData.length
  ).toFixed(1);

  return (
    <section className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Reviews Management
        </h1>

        <p className="mt-2 text-gray-500">
          Manage customer reviews, ratings and
          feedback analytics.
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
        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            Total Reviews
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            {totalReviews}
          </h2>
        </div>

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            Approved Reviews
          </p>

          <h2 className="mt-3 text-4xl font-bold text-green-600">
            {approvedReviews}
          </h2>
        </div>

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            Pending Reviews
          </p>

          <h2 className="mt-3 text-4xl font-bold text-orange-600">
            {pendingReviews}
          </h2>
        </div>

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            Average Rating
          </p>

          <h2 className="mt-3 text-4xl font-bold text-yellow-500">
            {averageRating}
          </h2>
        </div>

      </div>

      {/* Search & Filter */}

      <div
        className="
        flex
        flex-col
        gap-5
        rounded-3xl
        bg-white
        p-6
        shadow-sm
        lg:flex-row
        lg:items-center
        lg:justify-between
        "
      >
        <div className="relative w-full lg:max-w-md">

          <input
            type="text"
            placeholder="Search review..."
            className="
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            py-3
            pl-12
            pr-4
            outline-none
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

        <button
          className="
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-amber-500
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-amber-600
          "
        >
          <FaFilter />

          Filter Reviews

        </button>

      </div>

      {/* Reviews Table */}

      <ReviewsTable />

    </section>
  );
};

export default Reviews;