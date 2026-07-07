import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-2 items-center">

            {/* Left */}

            <div className="p-8 md:p-12 lg:p-16">

              <span className="inline-block bg-amber-100 text-amber-600 px-4 py-2 rounded-full font-semibold">
                GET STARTED
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Ready to Experience
                <br />
                Premium Home Services?
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Join thousands of happy customers who trust Clarito for
                reliable, verified and affordable home services.
                Book your service today and let our professionals
                handle the rest.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <Link
                  to="/services"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-amber-500
                    hover:bg-amber-600
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  Explore Services
                  <FaArrowRight />
                </Link>

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    border-2
                    border-amber-500
                    text-amber-600
                    hover:bg-amber-500
                    hover:text-white
                    px-8
                    py-4
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  <FaPhoneAlt />
                  Contact Us
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 h-full flex items-center justify-center p-10">

              <div className="text-center text-white">

                <div className="text-6xl mb-6">
                  🏡
                </div>

                <h3 className="text-3xl font-bold">
                  Trusted by 10,000+
                </h3>

                <p className="mt-4 text-white/90 leading-8 max-w-sm mx-auto">
                  From plumbing and electrical work to cleaning,
                  painting and AC repair — we've got your home covered.
                </p>

                <div className="grid grid-cols-2 gap-5 mt-10">

                  <div className="bg-white/20 backdrop-blur rounded-2xl p-5">

                    <h4 className="text-3xl font-bold">
                      500+
                    </h4>

                    <p className="text-sm mt-2">
                      Professionals
                    </p>

                  </div>

                  <div className="bg-white/20 backdrop-blur rounded-2xl p-5">

                    <h4 className="text-3xl font-bold">
                      4.9★
                    </h4>

                    <p className="text-sm mt-2">
                      Rating
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;