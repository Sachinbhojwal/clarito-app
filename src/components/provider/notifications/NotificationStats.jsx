import {
  FaBell,
  FaEnvelopeOpen,
  FaEnvelope,
  FaCalendarDay,
} from "react-icons/fa";

const NotificationStats = ({
  notifications,
}) => {
  const total =
    notifications.length;

  const unread =
    notifications.filter(
      (notification) =>
        notification.status ===
        "Unread"
    ).length;

  const read =
    notifications.filter(
      (notification) =>
        notification.status ===
        "Read"
    ).length;

  const today = new Date()
    .toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    )
    .replace(/ /g, " ");

  const todayCount =
    notifications.filter(
      (notification) =>
        notification.date === today
    ).length;

  const cards = [
    {
      id: 1,
      title:
        "Total Notifications",
      value: total,
      icon: FaBell,
      color:
        "bg-blue-100 text-blue-600",
    },

    {
      id: 2,
      title: "Unread",
      value: unread,
      icon: FaEnvelope,
      color:
        "bg-red-100 text-red-600",
    },

    {
      id: 3,
      title: "Read",
      value: read,
      icon: FaEnvelopeOpen,
      color:
        "bg-green-100 text-green-600",
    },

    {
      id: 4,
      title: "Today",
      value: todayCount,
      icon: FaCalendarDay,
      color:
        "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <section
      className="
      grid
      gap-6
      md:grid-cols-2
      xl:grid-cols-4
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.id}
            className="
            rounded-3xl
            bg-white
            p-6
            shadow-sm
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
                <p
                  className="
                  text-gray-500
                  "
                >
                  {card.title}
                </p>

                <h2
                  className="
                  mt-3
                  text-3xl
                  font-bold
                  "
                >
                  {card.value}
                </h2>
              </div>

              <div
                className={`
                rounded-2xl
                p-4

                ${card.color}
                `}
              >
                <Icon
                  className="
                  text-2xl
                  "
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default NotificationStats;