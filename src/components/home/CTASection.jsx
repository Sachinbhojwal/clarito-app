import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 text-center border border-white/20">

          <span className="inline-block bg-white text-amber-600 px-5 py-2 rounded-full font-semibold">
            GET STARTED TODAY
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Need a Trusted Professional?
            <br />
            Book Your Service Today
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90 leading-8">
            From cleaning and plumbing to electrical work and AC repair,
            Clarito connects you with verified professionals who deliver
            quality service at your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

            <Link
              to="/booking"
              className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Book Now
            </Link>

            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transition"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;