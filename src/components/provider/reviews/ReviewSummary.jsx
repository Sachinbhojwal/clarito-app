import RatingCard from "./RatingCard";

const ReviewSummary = ({
  reviews,
}) => {
  const totalReviews =
    reviews.length;

  const averageRating =
    totalReviews > 0
      ? (
        reviews.reduce(
          (sum, review) =>
            sum + review.rating,
          0
        ) / totalReviews
      ).toFixed(1)
      : 0;

  const fiveStarReviews =
    reviews.filter(
      (review) =>
        review.rating === 5
    ).length;

  const positiveReviews =
    reviews.filter(
      (review) =>
        review.rating >= 4
    ).length;

  const positivePercentage =
    totalReviews > 0
      ? Math.round(
        (positiveReviews /
          totalReviews) *
        100
      )
      : 0;

  return (
    <section
      className="
      grid
      gap-6
      sm:grid-cols-2
      xl:grid-cols-4
      "
    >
      <RatingCard
        title="Average Rating"
        value={averageRating}
        rating={Math.round(
          averageRating
        )}
        color="text-yellow-500"
      />

      <RatingCard
        title="Total Reviews"
        value={totalReviews}
        rating={5}
        color="text-blue-600"
      />

      <RatingCard
        title="5 Star Reviews"
        value={fiveStarReviews}
        rating={5}
        color="text-green-600"
      />

      <RatingCard
        title="Positive Reviews"
        value={`${positivePercentage}%`}
        rating={4}
        color="text-purple-600"
      />
    </section>
  );
};

export default ReviewSummary;