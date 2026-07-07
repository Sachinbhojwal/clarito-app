import { Link } from "react-router-dom";
import { heroSlides } from "../../data/heroSliders";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <span className="inline-block px-3 sm:px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-xs sm:text-sm font-medium">
              Trusted Home Services
            </span>

            <h1 className="mt-5 sm:mt-6 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Book Trusted{" "}
              <span className="text-yellow-500">
                Professionals
              </span>{" "}
              For Every Home Service
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              From electricians and cleaners to plumbers and AC technicians,
              Clarito helps you find verified professionals near you.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 sm:mt-8 justify-center lg:justify-start">

              <Link
                to="/services"
                className="bg-yellow-500 text-white px-5 sm:px-6 py-3 rounded-xl hover:bg-yellow-600 transition text-sm sm:text-base"
              >
                Book Now
              </Link>

              <Link
                to="/services"
                className="border border-gray-300 px-5 sm:px-6 py-3 rounded-xl hover:bg-gray-100 transition text-sm sm:text-base"
              >
                Explore Services
              </Link>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 mt-8 sm:mt-10">

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">500+</h3>
                <p className="text-gray-500 text-sm sm:text-base">Professionals</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">10K+</h3>
                <p className="text-gray-500 text-sm sm:text-base">Bookings</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">4.8 ★</h3>
                <p className="text-gray-500 text-sm sm:text-base">Rating</p>
              </div>

            </div>
          </div>

          {/* RIGHT SWIPER */}
          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
            >
              {heroSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative">

                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* BADGE */}
                    <div className="absolute top-4 sm:top-5 left-4 sm:left-5">
                      <span className="bg-yellow-500 text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                        {slide.title}
                      </span>
                    </div>

                    {/* TEXT */}
                    <div className="absolute bottom-5 sm:bottom-6 left-4 sm:left-6 text-white">
                      <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold">
                        {slide.title}
                      </h3>

                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base">
                        Trusted Professionals Near You
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