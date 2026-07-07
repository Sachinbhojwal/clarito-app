import {
  FaUserCheck,
  FaClock,
  FaShieldAlt,
  FaMoneyBillWave,
  FaTools,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaUserCheck size={28} />,
    title: "Verified Professionals",
    description:
      "Every service provider goes through identity verification and quality checks before joining Clarito.",
  },
  {
    id: 2,
    icon: <FaClock size={28} />,
    title: "On-Time Service",
    description:
      "We value your time and ensure professionals arrive as scheduled.",
  },
  {
    id: 3,
    icon: <FaShieldAlt size={28} />,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with trusted professionals and secure bookings.",
  },
  {
    id: 4,
    icon: <FaMoneyBillWave size={28} />,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Get fair and transparent pricing before the service starts.",
  },
  {
    id: 5,
    icon: <FaTools size={28} />,
    title: "Quality Work",
    description:
      "Experienced experts delivering professional and reliable home services.",
  },
  {
    id: 6,
    icon: <FaHeadset size={28} />,
    title: "24/7 Customer Support",
    description:
      "Our support team is always ready to help you before and after every booking.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-amber-100 text-amber-600 px-4 py-2 rounded-full font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Thousands of Customers
            <br className="hidden md:block" />
            Trust Clarito
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We are committed to providing safe, reliable and professional
            home services with complete customer satisfaction.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item) => (

            <div
              key={item.id}
              className="
                group
                bg-gray-50
                rounded-3xl
                p-8
                hover:bg-white
                hover:shadow-2xl
                transition-all
                duration-300
                border
                border-transparent
                hover:border-amber-200
              "
            >

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-amber-100
                  text-amber-500
                  flex
                  items-center
                  justify-center
                  group-hover:bg-amber-500
                  group-hover:text-white
                  transition
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        {/* Bottom Banner */}

        <div
          className="
            mt-20
            bg-gradient-to-r
            from-amber-500
            via-yellow-500
            to-orange-500
            rounded-3xl
            px-8
            py-12
            lg:px-16
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8
          "
        >

          <div className="text-center lg:text-left">

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Book a Trusted Professional?
            </h3>

            <p className="text-white/90 mt-4 max-w-2xl leading-7">
              Join thousands of satisfied customers who trust Clarito
              for fast, affordable and reliable home services.
            </p>

          </div>

          <button
            className="
              bg-white
              text-amber-600
              font-semibold
              px-8
              py-4
              rounded-xl
              hover:scale-105
              transition
              whitespace-nowrap
            "
          >
            Book a Service
          </button>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;