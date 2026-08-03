import Hero from "../../components/home/Hero";
import HomeServices from "../../components/home/HomeServices";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import HowItWorks from "../../components/home/HowItWorks";
import Statistics from "../../components/home/Statistics";
import FeaturedProfessionals from "../../components/home/FeaturedProfessionals";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";
import CTASection from "../../components/home/CTASection";

const Home = () => {
  return (
    <main className="bg-gray-50">
      <Hero />

      <HomeServices />

      <WhyChooseUs />

      <HowItWorks />

      <Statistics />

      <FeaturedProfessionals />

      <Testimonials />

      <FAQ />

      <CTASection />
    </main>
  );
};

export default Home;