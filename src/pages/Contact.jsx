import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import FAQSection from "../components/contact/FAQSection";
import MapSection from "../components/contact/MapSection";
import CTASection from "../components/contact/CATSection";

const Contact = () => {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        <ContactHero />

        <ContactInfo />

        <ContactForm />

        <FAQSection />

        <MapSection />

        <CTASection />

      </main>

      <Footer />
    </>
  );
};

export default Contact;