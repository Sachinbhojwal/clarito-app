import { Link } from "react-router-dom";

import {
  FiCheckCircle,
  FiCalendar,
  FiDollarSign,
  FiUser,
} from "react-icons/fi";

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: "Accept Jobs",
      description:
        "View pending service requests",
      icon: <FiCheckCircle size={30} />,
      path: "/provider/jobs",
      color:
        "bg-green-500 hover:bg-green-600",
    },

    {
      id: 2,
      title: "Availability",
      description:
        "Update your working schedule",
      icon: <FiCalendar size={30} />,
      path: "/provider/availability",
      color:
        "bg-blue-500 hover:bg-blue-600",
    },

    {
      id: 3,
      title: "Earnings",
      description:
        "Check your income",
      icon: <FiDollarSign size={30} />,
      path: "/provider/earnings",
      color:
        "bg-amber-500 hover:bg-amber-600",
    },

    {
      id: 4,
      title: "Profile",
      description:
        "Edit your profile",
      icon: <FiUser size={30} />,
      path: "/provider/profile",
      color:
        "bg-purple-500 hover:bg-purple-600",
    },
  ];

  return (
    <section className="mt-8">
      <h2
        className="
        mb-6
        text-2xl
        font-bold
        "
      >
        Quick Actions
      </h2>

      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
        "
      >
        {actions.map((action) => (
          <Link
            key={action.id}
            to={action.path}
            className={`
            rounded-3xl
            p-6
            text-white
            shadow-lg
            transition
            hover:-translate-y-1
            ${action.color}
            `}
          >
            <div className="mb-5">
              {action.icon}
            </div>

            <h3
              className="
              text-xl
              font-bold
              "
            >
              {action.title}
            </h3>

            <p
              className="
              mt-2
              text-sm
              text-white/90
              "
            >
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;