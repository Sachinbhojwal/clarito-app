import RatingStars from "./RatingStars";

const RatingCard = ({
  title,
  value,
  rating,
  color,
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
      <p
        className="
        text-gray-500
        "
      >
        {title}
      </p>

      <h2
        className={`
        mt-3
        text-4xl
        font-bold

        ${color}
        `}
      >
        {value}
      </h2>

      <div className="mt-4">
        <RatingStars
          rating={rating}
        />
      </div>
    </div>
  );
};

export default RatingCard;