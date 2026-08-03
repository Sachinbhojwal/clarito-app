import { FaStar } from "react-icons/fa";

const RatingStars = ({
  rating,
  size = 18,
  showValue = true,
}) => {
  return (
    <div
      className="
      flex
      items-center
      gap-2
      "
    >
      <div
        className="
        flex
        items-center
        gap-1
        "
      >
        {[1, 2, 3, 4, 5].map(
          (star) => (
            <FaStar
              key={star}
              size={size}
              className={
                star <= rating
                  ? "text-yellow-400"
                  : "text-gray-300"
              }
            />
          )
        )}
      </div>

      {showValue && (
        <span
          className="
          font-semibold
          text-gray-700
          "
        >
          {rating}/5
        </span>
      )}
    </div>
  );
};

export default RatingStars;