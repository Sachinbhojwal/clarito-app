const EarningsCard = ({
  title,
  amount,
  color,
}) => {
  return (
    <div
      className="
      rounded-3xl
      bg-white
      border
      border-gray-200
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
        text-3xl
        font-bold

        ${color}
        `}
      >
        ₹{amount}
      </h2>
    </div>
  );
};

export default EarningsCard;