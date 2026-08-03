import { useMemo, useState } from "react";

import ReviewsHeader from "../../components/provider/reviews/ReviewsHeader";
import ReviewSummary from "../../components/provider/reviews/ReviewSummary";
import ReviewsFilter from "../../components/provider/reviews/ReviewsFilter";
import ReviewsList from "../../components/provider/reviews/ReviewsList";
import ReviewModal from "../../components/provider/reviews/ReviewModal";

import { reviewsData } from "../../data/provider/reviewsData";

const ProviderReviews = () => {
  const [search, setSearch] =
    useState("");

  const [
    ratingFilter,
    setRatingFilter,
  ] = useState("All");

  const [sortBy, setSortBy] =
    useState("latest");

  const [
    selectedReview,
    setSelectedReview,
  ] = useState(null);

  const filteredReviews =
    useMemo(() => {
      let data = [...reviewsData];

      // Search

      if (search.trim()) {
        data = data.filter((review) =>
          review.customer
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        );
      }

      // Rating Filter

      if (
        ratingFilter !== "All"
      ) {
        data = data.filter(
          (review) =>
            review.rating ===
            Number(ratingFilter)
        );
      }

      // Sort

      switch (sortBy) {
        case "highest":
          data.sort(
            (a, b) =>
              b.rating - a.rating
          );
          break;

        case "lowest":
          data.sort(
            (a, b) =>
              a.rating - b.rating
          );
          break;

        case "oldest":
          data.reverse();
          break;

        default:
          break;
      }

      return data;
    }, [
      search,
      ratingFilter,
      sortBy,
    ]);

  return (
    <section
      className="
      space-y-8
      "
    >
      {/* Header */}

      <ReviewsHeader />

      {/* Summary */}

      <ReviewSummary
        reviews={reviewsData}
      />

      {/* Filters */}

      <ReviewsFilter
        search={search}
        setSearch={setSearch}
        ratingFilter={
          ratingFilter
        }
        setRatingFilter={
          setRatingFilter
        }
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Reviews */}

      <ReviewsList
        reviews={
          filteredReviews
        }
        onView={
          setSelectedReview
        }
      />

      {/* Modal */}

      <ReviewModal
        review={selectedReview}
        onClose={() =>
          setSelectedReview(null)
        }
      />
    </section>
  );
};

export default ProviderReviews;