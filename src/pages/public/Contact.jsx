import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import FAQSection from "../../components/contact/FAQSection";
import MapSection from "../../components/contact/MapSection";
import CTASection from "../../components/contact/CATSection";

const Contact = () => {
  return (
    <main className="bg-white">
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <FAQSection />

      <MapSection />

      <CTASection />
    </main>
  );
};

export default Contact;