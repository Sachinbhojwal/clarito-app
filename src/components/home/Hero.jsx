import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { heroSlides } from "../../data/heroSliders";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-center lg:text-left">

            <span className="inline-flex px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold">
              Trusted Home Services
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Book Trusted{" "}
              <span className="text-amber-500">
                Professionals
              </span>
              <br />
              For Every Home Service
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-8">
              From electricians and plumbers to cleaning and AC repair,
              Clarito connects you with trusted professionals for fast,
              reliable and affordable home services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

              <Link
                to="/booking"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Book Now
              </Link>

              <Link
                to="/services"
                className="border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition"
              >
                Explore Services
              </Link>

            </div>

            <div className="grid grid-cols-3 gap-5 mt-12">

              <div className="bg-white rounded-2xl shadow p-5 text-center">
                <h3 className="text-3xl font-bold text-amber-500">
                  500+
                </h3>

                <p className="text-gray-600 mt-2">
                  Professionals
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-5 text-center">
                <h3 className="text-3xl font-bold text-amber-500">
                  10K+
                </h3>

                <p className="text-gray-600 mt-2">
                  Bookings
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-5 text-center">
                <h3 className="text-3xl font-bold text-amber-500">
                  4.9★
                </h3>

                <p className="text-gray-600 mt-2">
                  Rating
                </p>
              </div>

            </div>

          </div>

          <div>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop
              className="rounded-3xl overflow-hidden shadow-2xl"
            >

              {heroSlides.map((slide) => (

                <SwiperSlide key={slide.id}>

                  <div className="relative">

                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[300px] sm:h-[420px] lg:h-[600px] object-cover"
                    />

                    <div className="absolute inset-0 bg-black/35"></div>

                    <div className="absolute top-6 left-6 bg-amber-500 text-white px-5 py-2 rounded-full font-semibold">
                      {slide.title}
                    </div>

                    <div className="absolute bottom-8 left-8 text-white">

                      <h2 className="text-3xl font-bold">
                        {slide.title}
                      </h2>

                      <p className="mt-2 text-gray-200">
                        Trusted Professionals At Your Doorstep
                      </p>

                    </div>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;