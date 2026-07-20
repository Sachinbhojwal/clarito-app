import {
  FaUserCheck,
  FaShieldAlt,
  FaHeadset,
  FaMoneyCheckAlt,
  FaUndoAlt,
  FaSmile,
} from "react-icons/fa";

const benefits = [
  {
    id: 1,
    title: "Verified Professionals",
    description:
      "All service providers are verified and trained professionals.",
    icon: <FaUserCheck />,
    color: "bg-green-100 text-green-600",
  },

  {
    id: 2,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Pay only for the services you choose.",
    icon: <FaShieldAlt />,
    color: "bg-blue-100 text-blue-600",
  },

  {
    id: 3,
    title: "24/7 Customer Support",
    description:
      "Our support team is always available to assist you anytime.",
    icon: <FaHeadset />,
    color: "bg-purple-100 text-purple-600",
  },

  {
    id: 4,
    title: "Secure Payments",
    description:
      "Your payments are protected with secure payment gateways.",
    icon: <FaMoneyCheckAlt />,
    color: "bg-amber-100 text-amber-600",
  },

  {
    id: 5,
    title: "Easy Cancellation",
    description:
      "Cancel or reschedule your booking quickly and easily.",
    icon: <FaUndoAlt />,
    color: "bg-red-100 text-red-600",
  },

  {
    id: 6,
    title: "100% Satisfaction",
    description:
      "We are committed to providing quality services for every booking.",
    icon: <FaSmile />,
    color: "bg-pink-100 text-pink-600",
  },
];

const BookingBenefits = () => {
  return (
    <section className="py-16 bg-white">
      <div
        className="
        mx-auto
        max-w-7xl
        px-4
        sm:px-6
        lg:px-8
        "
      >
        {/* Heading */}

        <div className="text-center">
          <h2
            className="
            text-4xl
            font-bold
            text-gray-800
            "
          >
            Why Choose CLARITO?
          </h2>

          <p
            className="
            mx-auto
            mt-4
            max-w-3xl
            text-lg
            leading-8
            text-gray-500
            "
          >
            We provide trusted professionals,
            secure payments and excellent
            customer support to ensure the
            best service experience.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          mt-14
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="
              rounded-3xl
              bg-gray-50
              p-8
              shadow-sm
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              "
            >
              {/* Icon */}

              <div
                className={`
flex
h - 20
w - 20
items - center
justify - center
rounded - full
text - 4xl
                ${benefit.color}
`}
              >
                {benefit.icon}
              </div>

              {/* Title */}

              <h3
                className="
                mt-6
                text-2xl
                font-bold
                text-gray-800
                "
              >
                {benefit.title}
              </h3>

              {/* Description */}

              <p
                className="
                mt-4
                leading-7
                text-gray-500
                "
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingBenefits;