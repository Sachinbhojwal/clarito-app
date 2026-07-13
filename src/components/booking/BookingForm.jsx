import { useState } from "react";

import PersonalInfo from "./PersonalInfo";
import AddressForm from "./AddressForm";
import BookingDetails from "./BookingDetails";
import BookingSummary from "./BookingSummary";

const BookingForm = () => {
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

    console.log(formData);

    alert("Booking Submitted Successfully!");
  };

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-3 gap-10"
        >

          {/* Left */}

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

          {/* Right */}

          <div>

            <BookingSummary
              formData={formData}
            />

          </div>

        </form>

      </div>

    </section>
  );
};

export default BookingForm;