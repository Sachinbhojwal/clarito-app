import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory"
import MissionVision from "../components/about/MissionVision";
import WhyChooseUs from "../components/about/WhyChooseUs";
import StatsSection from "../components/about/StatsSection";
import TeamSection from "../components/about/TeamSection";
import WorkProcess from "../components/about/WorkProcess";
import CTASection from "../components/about/CTASection";

const About = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <AboutHero />

      {/* Our Story */}
      <OurStory />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Statistics */}
      <StatsSection />

      {/* Team */}
      <TeamSection />

      {/* Work Process */}
      <WorkProcess />

      {/* Call To Action */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;