import {
  FaGooglePay,
  FaCreditCard,
  FaWallet,
  FaMoneyBillWave,
  FaUniversity,
  FaShieldAlt,
} from "react-icons/fa";

const paymentMethods = [
  {
    id: 1,
    title: "UPI Payments",
    description:
      "Pay instantly using any UPI application.",
    icon: <FaGooglePay />,
    color: "bg-green-100 text-green-600",
  },

  {
    id: 2,
    title: "Credit Card",
    description:
      "Secure payments using all major credit cards.",
    icon: <FaCreditCard />,
    color: "bg-blue-100 text-blue-600",
  },

  {
    id: 3,
    title: "Debit Card",
    description:
      "Fast and secure payments using debit cards.",
    icon: <FaCreditCard />,
    color: "bg-purple-100 text-purple-600",
  },

  {
    id: 4,
    title: "Net Banking",
    description:
      "Pay directly from your bank account.",
    icon: <FaUniversity />,
    color: "bg-amber-100 text-amber-600",
  },

  {
    id: 5,
    title: "Wallet Payment",
    description:
      "Use your preferred digital wallet securely.",
    icon: <FaWallet />,
    color: "bg-pink-100 text-pink-600",
  },

  {
    id: 6,
    title: "Cash On Service",
    description:
      "Pay after the service has been completed.",
    icon: <FaMoneyBillWave />,
    color: "bg-red-100 text-red-600",
  },
];

const PaymentMethods = () => {
  return (
    <section className="bg-gray-50 py-16">
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
            Secure Payment Methods
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
            Choose your preferred payment
            option for a fast and secure
            booking experience.
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
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="
              rounded-3xl
              bg-white
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
                ${method.color}
`}
              >
                {method.icon}
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
                {method.title}
              </h3>

              {/* Description */}

              <p
                className="
                mt-4
                leading-7
                text-gray-500
                "
              >
                {method.description}
              </p>
            </div>
          ))}
        </div>

        {/* Security Section */}

        <div
          className="
          mt-16
          rounded-3xl
          bg-white
          p-8
          text-center
          shadow-sm
          "
        >
          <div
            className="
            flex
            justify-center
            "
          >
            <div
              className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-green-100
              text-5xl
              text-green-600
              "
            >
              <FaShieldAlt />
            </div>
          </div>

          <h3
            className="
            mt-6
            text-3xl
            font-bold
            text-gray-800
            "
          >
            100% Secure Payments
          </h3>

          <p
            className="
            mx-auto
            mt-4
            max-w-3xl
            leading-8
            text-gray-500
            "
          >
            All transactions are protected
            using secure payment gateways
            and encrypted technologies to
            keep your information safe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;