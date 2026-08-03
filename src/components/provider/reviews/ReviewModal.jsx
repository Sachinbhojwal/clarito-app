import { FaTimes } from "react-icons/fa";

import RatingStars from "./RatingStars";

const ReviewModal = ({
  review,
  onClose,
}) => {
  if (!review) {
    return null;
  }

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/50
      p-5
      "
    >
      <div
        className="
        relative
        w-full
        max-w-2xl
        rounded-3xl
        bg-white
        p-8
        shadow-2xl
        "
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="
          absolute
          right-6
          top-6
          text-2xl
          text-gray-500
          transition
          hover:text-red-500
          "
        >
          <FaTimes />
        </button>

        {/* Header */}

        <div
          className="
          flex
          items-center
          gap-5
          "
        >
          <div
            className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-amber-500
            text-2xl
            font-bold
            text-white
            "
          >
            {review.customer
              .charAt(0)
              .toUpperCase()}
          </div>

          <div>
            <h2
              className="
              text-2xl
              font-bold
              "
            >
              {review.customer}
            </h2>

            <p
              className="
              mt-1
              text-gray-500
              "
            >
              {review.service}
            </p>
          </div>
        </div>

        {/* Rating */}

        <div className="mt-8">
          <h3
            className="
            mb-3
            font-semibold
            "
          >
            Rating
          </h3>

          <RatingStars
            rating={review.rating}
            size={22}
          />
        </div>

        {/* Date */}

        <div className="mt-8">
          <h3
            className="
            mb-2
            font-semibold
            "
          >
            Review Date
          </h3>

          <p className="text-gray-600">
            {review.date}
          </p>
        </div>

        {/* Comment */}

        <div className="mt-8">
          <h3
            className="
            mb-2
            font-semibold
            "
          >
            Customer Review
          </h3>

          <div
            className="
            rounded-2xl
            bg-gray-50
            p-5
            leading-8
            text-gray-600
            "
          >
            {review.comment}
          </div>
        </div>

        {/* Footer */}

        <div
          className="
          mt-8
          flex
          justify-end
          "
        >
          <button
            onClick={onClose}
            className="
            rounded-xl
            bg-amber-500
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-amber-600
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;