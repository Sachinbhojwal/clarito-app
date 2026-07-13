import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}

            <div>

              <span className="inline-block bg-white/20 text-white px-5 py-2 rounded-full font-semibold">
                GET STARTED
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                Need a Trusted Professional?
              </h2>

              <p className="mt-6 text-lg text-white/90 leading-8">
                From electricians and plumbers to home cleaning and AC
                repair, Clarito connects you with verified professionals
                for fast, reliable, and affordable services.
              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col sm:flex-row gap-5 lg:justify-end">

              <Link
                to="/services"
                className="
                  bg-white
                  text-amber-600
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  text-center
                  shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Book a Service
              </Link>

              <a
                href="tel:+919876543210"
                className="
                  border-2
                  border-white
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  text-center
                  hover:bg-white
                  hover:text-amber-600
                  transition-all
                  duration-300
                "
              >
                Call Now
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;