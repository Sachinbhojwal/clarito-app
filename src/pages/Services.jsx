import { useState } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ServicesHero from "../components/services/ServicesHero";
import ServiceSearch from "../components/services/ServiceSearch";
import ServiceCategories from "../components/services/ServiceCategories";
import ServiceGrid from "../components/services/ServiceGrid";
import WhyChooseUs from "../components/services/WhyChooseUs";
import HowItWorks from "../components/services/HowItWorks";
import FAQSection from "../components/services/FAQSection";
import CTASection from "../components/services/CTASection";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <Navbar />

      <main>

        <ServicesHero />

        <ServiceSearch />

        <ServiceCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ServiceGrid
          selectedCategory={selectedCategory}
        />

        <WhyChooseUs />

        <HowItWorks />

        <FAQSection />

        <CTASection />

      </main>

      <Footer />
    </>
  );
};

export default Services;