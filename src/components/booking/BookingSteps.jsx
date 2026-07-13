import {
  FaClipboardList,
  FaUserEdit,
  FaCalendarCheck,
  FaHome,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaClipboardList />,
    title: "Choose Service",
    description:
      "Select the home service you need from our verified professionals.",
  },
  {
    id: "02",
    icon: <FaUserEdit />,
    title: "Fill Details",
    description:
      "Enter your personal information, address, preferred date and time.",
  },
  {
    id: "03",
    icon: <FaCalendarCheck />,
    title: "Confirm Booking",
    description:
      "Review your booking details and confirm your appointment securely.",
  },
  {
    id: "04",
    icon: <FaHome />,
    title: "Professional Arrives",
    description:
      "Our verified expert visits your location and completes the service.",
  },
];

const BookingSteps = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            BOOKING PROCESS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Book in 4 Easy Steps
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">
            Booking a home service with Clarito is quick, secure and
            hassle-free.
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
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                text-center
              "
            >

              {/* Step Number */}

              <div className="absolute top-5 right-5 text-4xl font-extrabold text-amber-100">
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

export default BookingSteps;