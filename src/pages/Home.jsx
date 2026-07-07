import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import HowItWork from "../components/home/HowItWork";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />

        <ServicesSection />

        <HowItWork />

        <WhyChooseUs />

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default Home;