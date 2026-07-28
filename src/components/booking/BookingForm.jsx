import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PersonalInfo from "./PersonalInfo";
import AddressForm from "./AddressForm";
import BookingDetails from "./BookingDetails";
import BookingSummary from "./BookingSummary";

const BookingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Personal
    name: "",
    email: "",
    phone: "",

    // Address
    house: "",
    street: "",
    city: "",
    state: "",
    pincode: "",

    // Booking
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingData = {
      bookingId:
        "CL" +
        Math.floor(
          100000 + Math.random() * 900000
        ),

      ...formData,

      payment: "Cash On Delivery",
      status: "Confirmed",
    };

    // Existing Bookings

    const myBookings =
      JSON.parse(
        localStorage.getItem("myBookings")
      ) || [];

    // Add New Booking

    myBookings.push(bookingData);

    // Save All Bookings

    localStorage.setItem(
      "myBookings",
      JSON.stringify(myBookings)
    );

    // Save Current Booking

    localStorage.setItem(
      "currentBooking",
      JSON.stringify(bookingData)
    );

    alert("Booking Submitted Successfully!");

    navigate("/booking-success");
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-3 gap-10"
        >
          {/* Left Side */}

          <div className="lg:col-span-2">
            <PersonalInfo
              formData={formData}
              handleChange={handleChange}
            />

            <AddressForm
              formData={formData}
              handleChange={handleChange}
            />

            <BookingDetails
              formData={formData}
              handleChange={handleChange}
            />
          </div>

          {/* Right Side */}

          <div>
            <BookingSummary
              formData={formData}
            />

            <button
              type="submit"
              className="
                mt-6
                w-full
                bg-amber-500
                hover:bg-amber-600
                text-white
                py-4
                rounded-2xl
                font-semibold
                transition
              "
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;