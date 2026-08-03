import {
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

const EarningsCard = () => {
  const earnings = [
    {
      month: "January",
      amount: "₹18,500",
    },

    {
      month: "February",
      amount: "₹22,000",
    },

    {
      month: "March",
      amount: "₹26,300",
    },

    {
      month: "April",
      amount: "₹31,500",
    },
  ];

  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      <div
        className="
        mb-6
        flex
        items-center
        justify-between
        "
      >
        <div>
          <h2
            className="
            text-2xl
            font-bold
            "
          >
            Earnings
          </h2>

          <p className="text-gray-500">
            Monthly Income
          </p>
        </div>

        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-green-100
          text-green-600
          "
        >
          <FiDollarSign size={28} />
        </div>
      </div>

      <div
        className="
        mb-6
        rounded-2xl
        bg-green-50
        p-5
        "
      >
        <p className="text-gray-500">
          Total Earnings
        </p>

        <h3
          className="
          mt-2
          text-4xl
          font-bold
          text-green-600
          "
        >
          ₹98,300
        </h3>

        <div
          className="
          mt-3
          flex
          items-center
          gap-2
          text-green-600
          "
        >
          <FiTrendingUp />

          <span>
            +12% this month
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {earnings.map((item) => (
          <div
            key={item.month}
            className="
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-gray-100
            p-4
            "
          >
            <span
              className="
              font-medium
              "
            >
              {item.month}
            </span>

            <span
              className="
              font-bold
              text-green-600
              "
            >
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EarningsCard;