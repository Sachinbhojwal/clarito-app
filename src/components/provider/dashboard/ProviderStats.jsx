import {
  FiClipboard,
  FiClock,
  FiDollarSign,
  FiStar,
} from "react-icons/fi";

const ProviderStats = () => {
  const stats = [
    {
      id: 1,
      title: "Total Jobs",
      value: "124",
      icon: <FiClipboard size={28} />,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },

    {
      id: 2,
      title: "Pending Jobs",
      value: "08",
      icon: <FiClock size={28} />,
      bg: "bg-yellow-100",
      color: "text-yellow-600",
    },

    {
      id: 3,
      title: "Rating",
      value: "4.9",
      icon: <FiStar size={28} />,
      bg: "bg-amber-100",
      color: "text-amber-600",
    },

    {
      id: 4,
      title: "Total Earnings",
      value: "₹48,500",
      icon: <FiDollarSign size={28} />,
      bg: "bg-green-100",
      color: "text-green-600",
    },
  ];

  return (
    <section
      className="
      mt-8
      grid
      gap-6
      sm:grid-cols-2
      xl:grid-cols-4
      "
    >
      {stats.map((item) => (
        <div
          key={item.id}
          className="
          rounded-3xl
          border
          border-gray-100
          bg-white
          p-6
          shadow-sm
          transition
          hover:-translate-y-1
          hover:shadow-lg
          "
        >
          <div
            className="
            flex
            items-center
            justify-between
            "
          >
            <div>
              <p className="text-gray-500">
                {item.title}
              </p>

              <h2
                className="
                mt-2
                text-3xl
                font-bold
                "
              >
                {item.value}
              </h2>
            </div>

            <div
              className={`
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              ${item.bg}
              ${item.color}
              `}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProviderStats;