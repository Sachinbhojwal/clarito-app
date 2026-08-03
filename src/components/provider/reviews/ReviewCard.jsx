import RatingStars from "./RatingStars";

const ReviewCard = ({
  review,
  onView,
}) => {
  return (
    <div
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-6
      shadow-sm
      "
    >
      {/* Header */}

      <div
        className="
        flex
        items-start
        justify-between
        gap-4
        "
      >
        <div>
          <h3
            className="
            text-xl
            font-bold
            "
          >
            {review.customer}
          </h3>

          <p
            className="
            mt-1
            text-gray-500
            "
          >
            {review.service}
          </p>
        </div>

        <span
          className="
          rounded-full
          bg-gray-100
          px-4
          py-2
          text-sm
          text-gray-600
          "
        >
          {review.date}
        </span>
      </div>

      {/* Rating */}

      <div className="mt-5">
        <RatingStars
          rating={review.rating}
        />
      </div>

      {/* Comment */}

      <p
        className="
        mt-5
        leading-7
        text-gray-600
        "
      >
        {review.comment}
      </p>

      {/* Footer */}

      <div
        className="
        mt-6
        flex
        justify-end
        "
      >
        <button
          onClick={() =>
            onView(review)
          }
          className="
          rounded-xl
          bg-amber-500
          px-5
          py-2
          font-semibold
          text-white
          transition
          hover:bg-amber-600
          "
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;