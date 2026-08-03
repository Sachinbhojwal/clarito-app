import { useState } from "react";

import NotificationsHeader from "../../components/provider/notifications/NotificationsHeader";
import NotificationStats from "../../components/provider/notifications/NotificationStats";
import NotificationFilter from "../../components/provider/notifications/NotificationFilter";
import NotificationsList from "../../components/provider/notifications/NotificationsList";
import NotificationModal from "../../components/provider/notifications/NotificationModal";

import { notificationsData } from "../../data/provider/notificationsData";

const ProviderNotifications = () => {
  const [notifications, setNotifications] =
    useState(notificationsData);

  const [search, setSearch] =
    useState("");

  const [type, setType] =
    useState("All");

  const [status, setStatus] =
    useState("All");

  const [sort, setSort] =
    useState("Latest");

  const [selectedNotification, setSelectedNotification] =
    useState(null);

  const handleView = (
    notification
  ) => {
    setSelectedNotification(
      notification
    );
  };

  const handleCloseModal =
    () => {
      setSelectedNotification(
        null
      );
    };

  const handleMarkAsRead = (
    id
  ) => {
    setNotifications((prev) =>
      prev.map(
        (notification) =>
          notification.id === id
            ? {
              ...notification,
              status: "Read",
            }
            : notification
      )
    );
  };

  const handleDelete = (
    id
  ) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this notification?"
      );

    if (!confirmDelete) {
      return;
    }

    setNotifications((prev) =>
      prev.filter(
        (notification) =>
          notification.id !== id
      )
    );
  };

  return (
    <section
      className="
      space-y-8
      "
    >
      {/* Header */}

      <NotificationsHeader />

      {/* Statistics */}

      <NotificationStats
        notifications={
          notifications
        }
      />

      {/* Filter */}

      <NotificationFilter
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        status={status}
        setStatus={setStatus}
        sort={sort}
        setSort={setSort}
      />

      {/* List */}

      <NotificationsList
        notifications={
          notifications
        }
        search={search}
        type={type}
        status={status}
        sort={sort}
        onView={handleView}
        onMarkAsRead={
          handleMarkAsRead
        }
        onDelete={handleDelete}
      />

      {/* Modal */}

      <NotificationModal
        notification={
          selectedNotification
        }
        onClose={
          handleCloseModal
        }
      />
    </section>
  );
};

export default ProviderNotifications;