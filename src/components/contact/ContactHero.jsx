import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section
      className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/contact-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Decorative Blur */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-56 h-56 bg-orange-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        {/* Badge */}
        <span className="inline-block bg-amber-500/90 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
          CONTACT CLARITO
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
          We're Here To Help
          <br />
          Contact Our Team
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-8">
          Have questions, need assistance, or want to book a service?
          Our friendly support team is always ready to help you.
          Reach out to us anytime and we'll respond as quickly as possible.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            to="/services"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg"
          >
            Book a Service
          </Link>

          <a
            href="tel:+919876543210"
            className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition duration-300"
          >
            Call Now
          </a>

        </div>

        {/* Feature Chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            📞 Call Support
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            📧 Email Support
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            📍 Visit Our Office
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            ⚡ Quick Response
          </div>

        </div>

      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 fill-gray-50"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactHero;