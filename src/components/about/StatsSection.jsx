import {
  FaUsers,
  FaTools,
  FaSmile,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUsers />,
    number: "10,000+",
    title: "Happy Customers",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    icon: <FaTools />,
    number: "500+",
    title: "Verified Professionals",
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 3,
    icon: <FaSmile />,
    number: "25,000+",
    title: "Services Completed",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    icon: <FaStar />,
    number: "4.9 / 5",
    title: "Customer Rating",
    color: "bg-pink-100 text-pink-600",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center text-white">

          <span className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full font-semibold">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Numbers That Speak
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/90 leading-8">
            We are proud to serve thousands of customers with
            trusted professionals across multiple home services.
          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {stats.map((item) => (

            <div
              key={item.id}
              className="
                bg-white
                rounded-3xl
                p-8
                text-center
                shadow-xl
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              <div
                className={`
                  w-16
                  h-16
                  mx-auto
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-3xl
                  ${item.color}
                `}
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-4xl font-extrabold text-gray-900">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default StatsSection;