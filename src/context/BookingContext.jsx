import { createContext, useEffect, useState } from "react";

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  // Load bookings from localStorage
  useEffect(() => {
    try {
      const storedBookings = JSON.parse(
        localStorage.getItem("bookings")
      );

      if (storedBookings) {
        setBookings(storedBookings);
      }
    } catch (error) {
      console.error("Failed to load bookings:", error);
    }
  }, []);

  // Save bookings whenever they change
  useEffect(() => {
    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );
  }, [bookings]);

  // Add Booking
  const addBooking = (booking) => {
    try {
      const newBooking = {
        id: Date.now(),
        ...booking,
        status: "Pending",
        createdAt: new Date().toISOString(),
      };

      setBookings((prev) => [...prev, newBooking]);
    } catch (error) {
      console.error("Add Booking Error:", error);
    }
  };

  // Cancel Booking
  const cancelBooking = (id) => {
    try {
      setBookings((prev) =>
        prev.filter((booking) => booking.id !== id)
      );
    } catch (error) {
      console.error("Cancel Booking Error:", error);
    }
  };

  // Accept Booking
  const acceptBooking = (id, providerName) => {
    try {
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === id
            ? {
              ...booking,
              status: "Accepted",
              providerName,
            }
            : booking
        )
      );
    } catch (error) {
      console.error("Accept Booking Error:", error);
    }
  };

  // Complete Booking
  const completeBooking = (id) => {
    try {
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === id
            ? {
              ...booking,
              status: "Completed",
            }
            : booking
        )
      );
    } catch (error) {
      console.error("Complete Booking Error:", error);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        cancelBooking,
        acceptBooking,
        completeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;