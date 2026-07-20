import { useState } from "react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import NotificationCard from "../../components/notifications/NotificationCard";

// import { notificationsData } from "../data/notification/notificationsData";

import {
  FaBell,
  FaCheckDouble,
  FaTrash,
} from "react-icons/fa";

const Notifications = () => {
  const [notifications, setNotifications] =
    useState(notificationsData);

  // Mark All As Read

  const handleMarkAllRead = () => {
    const updatedNotifications =
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }));

    setNotifications(updatedNotifications);
  };

  // Clear All Notifications

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        {/* Heading */}

        <section className="px-5 py-10">

          <div className="mx-auto max-w-7xl">

            <div
              className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-center
              lg:justify-between
              "
            >
              <div>
                <h1
                  className="
                  text-4xl
                  font-bold
                  text-gray-800
                  "
                >
                  Notifications
                </h1>

                <p
                  className="
                  mt-3
                  text-gray-500
                  "
                >
                  Stay updated with your
                  latest bookings and services.
                </p>
              </div>

              {/* Buttons */}

              <div
                className="
                flex
                flex-col
                gap-4
                sm:flex-row
                "
              >
                <button
                  onClick={handleMarkAllRead}
                  className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-green-500
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-green-600
                  "
                >
                  <FaCheckDouble />

                  Mark All Read
                </button>


                <button
                  onClick={handleClearAll}
                  className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-red-500
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-red-600
                  "
                >
                  <FaTrash />

                  Clear All
                </button>
              </div>

            </div>

          </div>

        </section>


        {/* Notification List */}

        <section className="px-5 pb-12">

          <div className="mx-auto max-w-7xl">

            {notifications.length > 0 ? (

              <div className="space-y-6">

                {notifications.map(
                  (notification) => (

                    <NotificationCard
                      key={notification.id}
                      title={notification.title}
                      message={
                        notification.message
                      }
                      time={notification.time}
                      type={notification.type}
                      read={notification.read}
                    />

                  )
                )}

              </div>

            ) : (

              <div
                className="
                rounded-3xl
                bg-white
                p-12
                text-center
                shadow-sm
                "
              >
                <FaBell
                  className="
                  mx-auto
                  text-6xl
                  text-gray-300
                  "
                />

                <h2
                  className="
                  mt-6
                  text-3xl
                  font-bold
                  text-gray-800
                  "
                >
                  No Notifications
                </h2>

                <p
                  className="
                  mt-4
                  text-gray-500
                  "
                >
                  You're all caught up.
                </p>

              </div>

            )}

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
};

export default Notifications;