import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import BookingHero from "../components/booking/BookingHero";
import BookingSteps from "../components/booking/BookingSteps";
import BookingForm from "../components/booking/BookingForm";
import BookingFAQ from "../components/booking/BookingFAQ";

const Booking = () => {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50">
        <BookingHero />

        <BookingSteps />

        <BookingForm />

        <BookingFAQ />
      </main>

      <Footer />
    </>
  );
};

export default Booking;