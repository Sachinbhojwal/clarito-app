import {
  FaSearch,
  FaCalendarCheck,
  FaUserCog,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "Choose Service",
    description:
      "Browse our wide range of professional home services and select the one you need.",
  },
  {
    id: 2,
    icon: <FaCalendarCheck />,
    title: "Book Appointment",
    description:
      "Choose your preferred date and time with a simple online booking process.",
  },
  {
    id: 3,
    icon: <FaUserCog />,
    title: "Professional Arrives",
    description:
      "Our verified expert reaches your location on time with the required tools.",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "Service Completed",
    description:
      "Enjoy high-quality service and make secure payment after the work is finished.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Book a Service in 4 Easy Steps
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            Booking a professional home service with Clarito is quick,
            simple, and completely hassle-free.
          </p>

        </div>

        {/* Steps */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step) => (

            <div
              key={step.id}
              className="
                relative
                bg-white
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

              {/* Step Number */}

              <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                {step.id}
              </div>

              {/* Icon */}

              <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 text-amber-500 flex items-center justify-center text-4xl">
                {step.icon}
              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}

              <p className="mt-4 text-gray-600 leading-7">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;