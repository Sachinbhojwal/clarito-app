import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import BookingHero from "../../components/booking/BookingHero";
import BookingSteps from "../../components/booking/BookingSteps";
import BookingForm from "../../components/booking/BookingForm";
import BookingBenefits from "../../components/booking/BookingBenefits";
import PaymentMethods from "../../components/booking/PaymentMethods";
import CustomerReviews from "../../components/booking/CustomerReviews";
import BookingFAQ from "../../components/booking/BookingFAQ";
import AvailableSlots from
  "../../components/booking/AvailableSlots";

const Bookings = () => {
  return (
    <>
      {/* Navbar */}

      <Navbar />

      {/* Main Section */}

      <main className="bg-gray-50">
        {/* Hero Section */}

        <BookingHero />

        {/* Booking Process */}

        <BookingSteps />

        {/* Booking Form */}

        <BookingForm />

        {/* Booking Benefits */}

        <AvailableSlots />

        <BookingBenefits />

        {/* Payment Methods */}

        <PaymentMethods />

        {/* Customer Reviews */}

        <CustomerReviews />

        {/* FAQs */}

        <BookingFAQ />
      </main>

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Bookings;