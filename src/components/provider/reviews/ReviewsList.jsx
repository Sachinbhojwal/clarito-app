import ReviewCard from "./ReviewCard";

const ReviewsList = ({
  reviews,
  onView,
}) => {
  if (reviews.length === 0) {
    return (
      <section
        className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-16
        text-center
        shadow-sm
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          "
        >
          No Reviews Found
        </h2>

        <p
          className="
          mt-3
          text-gray-500
          "
        >
          No customer reviews match
          your current filters.
        </p>
      </section>
    );
  }

  return (
    <section
      className="
      grid
      gap-6
      "
    >
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          onView={onView}
        />
      ))}
    </section>
  );
};

export default ReviewsList;