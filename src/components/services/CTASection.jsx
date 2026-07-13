import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 py-20">

      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      {/* Content */}

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

        <span className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full font-semibold">
          GET STARTED
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
          Ready To Book
          <br />
          Your Home Service?
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90 leading-8">
          Choose from our trusted professionals and enjoy fast,
          reliable, and affordable home services right at your doorstep.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            to="/booking"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              bg-white
              text-amber-600
              px-8
              py-4
              rounded-xl
              font-semibold
              shadow-lg
              hover:scale-105
              transition
            "
          >
            Book Now

            <FaArrowRight />
          </Link>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              border-2
              border-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-white
              hover:text-amber-600
              transition
            "
          >
            <FaPhoneAlt />

            Contact Us
          </Link>

        </div>

        {/* Stats */}

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>

            <h3 className="text-3xl font-bold">
              500+
            </h3>

            <p className="text-white/80 mt-2">
              Professionals
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-bold">
              10K+
            </h3>

            <p className="text-white/80 mt-2">
              Happy Customers
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-bold">
              4.9★
            </h3>

            <p className="text-white/80 mt-2">
              Customer Rating
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-bold">
              24×7
            </h3>

            <p className="text-white/80 mt-2">
              Customer Support
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;