import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import BookingForm from "../components/booking/BookingForm";
import BookingSummary from "../components/booking/BookingSummary";
import BookingSuccess from "../components/booking/BookingSuccess";

import useBooking from "../hooks/useBooking";
import useAuth from "../hooks/useAuth";

import { services } from "../data/services";

const Booking = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const { user } = useAuth();
  const { addBooking } = useBooking();

  const selectedService = services.find(
    (service) => service.slug === slug
  );

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      addBooking({
        customerName: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        date: formData.date,
        time: formData.time,
        notes: formData.notes,
        service: selectedService.title,
      });

      setSuccess(true);

      setTimeout(() => {
        navigate("/customer-dashboard");
      }, 2500);
    } catch (error) {
      console.error(error);

      alert("Booking Failed");
    } finally {
      setLoading(false);
    }
  };

  if (!selectedService) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            Service Not Found
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  if (success) {
    return (
      <>
        <Navbar />

        <BookingSuccess />

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-16 min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="text-amber-500 font-semibold">
              BOOK SERVICE
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Complete Your Booking
            </h1>

            <p className="text-gray-500 mt-4">
              Fill in your details and confirm your
              booking.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2">

              <BookingForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loading={loading}
              />

            </div>

            <div>

              <BookingSummary
                service={selectedService}
              />

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Booking;