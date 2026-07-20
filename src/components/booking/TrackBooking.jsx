import {
  FaCheckCircle,
  FaClipboardCheck,
  FaMotorcycle,
  FaTools,
  FaUserCheck,
} from "react-icons/fa";

const bookingSteps = [
  {
    id: 1,
    title: "Booking Confirmed",
    description:
      "Your booking has been confirmed successfully.",
    icon: <FaCheckCircle />,
    completed: true,
  },

  {
    id: 2,
    title: "Employee Assigned",
    description:
      "A verified professional has been assigned.",
    icon: <FaUserCheck />,
    completed: true,
  },

  {
    id: 3,
    title: "On The Way",
    description:
      "Our professional is on the way.",
    icon: <FaMotorcycle />,
    completed: true,
  },

  {
    id: 4,
    title: "Service Started",
    description:
      "The requested service has started.",
    icon: <FaTools />,
    completed: false,
  },

  {
    id: 5,
    title: "Service Completed",
    description:
      "Your service will be completed shortly.",
    icon: <FaClipboardCheck />,
    completed: false,
  },
];

const TrackBooking = () => {
  return (
    <section
      className="
      min-h-screen
      bg-gray-50
      py-16
      "
    >
      <div
        className="
        mx-auto
        max-w-5xl
        px-4
        sm:px-6
        lg:px-8
        "
      >
        {/* Heading */}

        <div className="text-center">
          <h1
            className="
            text-4xl
            font-bold
            text-gray-800
            "
          >
            Track Your Booking
          </h1>

          <p
            className="
            mt-4
            text-lg
            leading-8
            text-gray-500
            "
          >
            Stay updated with your service
            progress in real time.
          </p>
        </div>

        {/* Booking Information */}

        <div
          className="
          mt-12
          rounded-3xl
          bg-white
          p-8
          shadow-sm
          "
        >
          <div
            className="
            grid
            gap-6
            sm:grid-cols-2
            "
          >
            <div>
              <p className="text-gray-500">
                Booking ID
              </p>

              <h2
                className="
                mt-2
                text-2xl
                font-bold
                text-gray-800
                "
              >
                CLR-2026-45896
              </h2>
            </div>

            <div>
              <p className="text-gray-500">
                Service Name
              </p>

              <h2
                className="
                mt-2
                text-2xl
                font-bold
                text-gray-800
                "
              >
                AC Repair Service
              </h2>
            </div>

            <div>
              <p className="text-gray-500">
                Scheduled Time
              </p>

              <h2
                className="
                mt-2
                text-xl
                font-bold
                text-gray-800
                "
              >
                Today - 04:00 PM
              </h2>
            </div>

            <div>
              <p className="text-gray-500">
                Payment Status
              </p>

              <h2
                className="
                mt-2
                text-xl
                font-bold
                text-green-600
                "
              >
                Paid Successfully
              </h2>
            </div>
          </div>
        </div>

        {/* Timeline */}

        <div
          className="
          mt-12
          rounded-3xl
          bg-white
          p-8
          shadow-sm
          "
        >
          <h2
            className="
            text-3xl
            font-bold
            text-gray-800
            "
          >
            Booking Progress
          </h2>

          <div className="mt-10 space-y-8">
            {bookingSteps.map((step) => (
              <div
                key={step.id}
                className="
                flex
                items-start
                gap-5
                "
              >
                {/* Icon */}

                <div
                  className={`
flex
h - 16
w - 16
items - center
justify - center
rounded - full
text - 2xl
                  ${step.completed
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-500"
                    }
`}
                >
                  {step.icon}
                </div>

                {/* Content */}

                <div className="flex-1">
                  <h3
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                    mt-2
                    leading-7
                    text-gray-500
                    "
                  >
                    {step.description}
                  </p>

                  <span
                    className={`
mt - 4
inline - block
rounded - full
px - 4
py - 2
text - sm
font - semibold
                    ${step.completed
                        ? "bg-green-100 text-green-600"
                        : "bg-amber-100 text-amber-600"
                      }
`}
                  >
                    {step.completed
                      ? "Completed"
                      : "Pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Employee Details */}

        <div
          className="
          mt-12
          rounded-3xl
          bg-white
          p-8
          shadow-sm
          "
        >
          <h2
            className="
            text-3xl
            font-bold
            text-gray-800
            "
          >
            Assigned Professional
          </h2>

          <div className="mt-6">
            <h3
              className="
              text-2xl
              font-bold
              text-gray-800
              "
            >
              Rahul Sharma
            </h3>

            <p
              className="
              mt-3
              text-gray-500
              "
            >
              Senior AC Repair Specialist
            </p>

            <p
              className="
              mt-2
              font-semibold
              text-green-600
              "
            >
              Contact : +91 XXXXX XXXXX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackBooking;