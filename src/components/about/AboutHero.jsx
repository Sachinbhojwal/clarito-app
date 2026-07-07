import {
  FaUsers,
  FaCheckCircle,
  FaAward,
  FaHeadset,
} from "react-icons/fa";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500">

      {/* Background Circles */}

      <div className="absolute inset-0 opacity-10">

        <div className="absolute w-72 h-72 bg-white rounded-full -top-20 -left-20"></div>

        <div className="absolute w-96 h-96 bg-white rounded-full -bottom-32 -right-32"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div className="text-white">

            <span className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full font-semibold">

              ABOUT CLARITO

            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">

              India's Trusted
              <br />

              Home Service Platform

            </h1>

            <p className="mt-6 text-lg text-white/90 leading-8">

              Clarito connects customers with trusted professionals
              for Electrical, Plumbing, Cleaning, Painting,
              AC Repair and many more services.

              Our mission is to provide fast,
              reliable and affordable home services
              at your doorstep.

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-white text-amber-600 px-7 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition">

                Explore Services

              </button>

              <button className="border border-white px-7 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transition">

                Contact Us

              </button>

            </div>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl p-7 shadow-xl hover:-translate-y-2 transition">

              <FaUsers
                className="text-amber-500"
                size={40}
              />

              <h2 className="text-4xl font-bold mt-5">

                10K+

              </h2>

              <p className="text-gray-500 mt-2">

                Happy Customers

              </p>

            </div>

            <div className="bg-white rounded-3xl p-7 shadow-xl hover:-translate-y-2 transition">

              <FaCheckCircle
                className="text-green-500"
                size={40}
              />

              <h2 className="text-4xl font-bold mt-5">

                500+

              </h2>

              <p className="text-gray-500 mt-2">

                Verified Professionals

              </p>

            </div>

            <div className="bg-white rounded-3xl p-7 shadow-xl hover:-translate-y-2 transition">

              <FaAward
                className="text-orange-500"
                size={40}
              />

              <h2 className="text-4xl font-bold mt-5">

                4.9★

              </h2>

              <p className="text-gray-500 mt-2">

                Customer Rating

              </p>

            </div>

            <div className="bg-white rounded-3xl p-7 shadow-xl hover:-translate-y-2 transition">

              <FaHeadset
                className="text-blue-500"
                size={40}
              />

              <h2 className="text-4xl font-bold mt-5">

                24×7

              </h2>

              <p className="text-gray-500 mt-2">

                Customer Support

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;