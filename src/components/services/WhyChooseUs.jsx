import {
  FaUserCheck,
  FaBolt,
  FaWallet,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaUserCheck />,
    title: "Verified Professionals",
    description:
      "All service providers are background verified and professionally trained.",
  },
  {
    id: 2,
    icon: <FaBolt />,
    title: "Fast Booking",
    description:
      "Book your favorite home service in just a few clicks anytime.",
  },
  {
    id: 3,
    icon: <FaWallet />,
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden charges and great value for money.",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "24×7 Support",
    description:
      "Our customer support team is always available to help you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Clarito?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            We provide trusted, affordable and professional home
            services with complete customer satisfaction.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (

            <div
              key={item.id}
              className="
                bg-gray-50
                rounded-3xl
                p-8
                text-center
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div
                className="
                  w-20
                  h-20
                  mx-auto
                  rounded-full
                  bg-amber-100
                  text-amber-500
                  flex
                  items-center
                  justify-center
                  text-4xl
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

      </div>

    </section>
  );
};

export default WhyChooseUs;