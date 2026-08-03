import NotificationCard from "./NotificationCard";

const NotificationsList = ({
  notifications,
  search,
  type,
  status,
  sort,
  onView,
  onMarkAsRead,
  onDelete,
}) => {
  let filteredNotifications = [
    ...notifications,
  ];

  // Search

  if (search.trim()) {
    filteredNotifications =
      filteredNotifications.filter(
        (notification) =>
          notification.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          notification.message
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
  }

  // Type

  if (type !== "All") {
    filteredNotifications =
      filteredNotifications.filter(
        (notification) =>
          notification.type ===
          type
      );
  }

  // Status

  if (status !== "All") {
    filteredNotifications =
      filteredNotifications.filter(
        (notification) =>
          notification.status ===
          status
      );
  }

  // Sort

  if (sort === "Latest") {
    filteredNotifications.reverse();
  }

  return (
    <section
      className="
      space-y-6
      "
    >
      {filteredNotifications
        .length === 0 ? (
        <div
          className="
          rounded-3xl
          bg-white
          p-12
          text-center
          shadow-sm
          "
        >
          <h3
            className="
            text-2xl
            font-bold
            "
          >
            No Notifications
          </h3>

          <p
            className="
            mt-3
            text-gray-500
            "
          >
            No matching
            notifications found.
          </p>
        </div>
      ) : (
        filteredNotifications.map(
          (notification) => (
            <NotificationCard
              key={
                notification.id
              }
              notification={
                notification
              }
              onView={onView}
              onMarkAsRead={
                onMarkAsRead
              }
              onDelete={
                onDelete
              }
            />
          )
        )
      )}
    </section>
  );
};

export default NotificationsList;