import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { heroSlides } from "../../data/heroSliders";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (<section className="bg-gray-50 py-10 sm:py-14 lg:py-20"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* ===================== */}
      {/* Mobile First Slider */}
      {/* ===================== */}

      <div className="order-1 lg:order-2">

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
                  className="
                  w-full
                  h-[260px]
                  sm:h-[400px]
                  lg:h-[600px]
                  object-cover
                  "
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div
                  className="
                  absolute
                  top-4
                  left-4
                  rounded-full
                  bg-amber-500
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                  "
                >
                  {slide.title}
                </div>

                <div
                  className="
                  absolute
                  bottom-6
                  left-6
                  text-white
                  "
                >
                  <h2
                    className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    "
                  >
                    {slide.title}
                  </h2>

                  <p className="mt-2 text-sm sm:text-base text-gray-200">
                    Trusted Professionals At Your Doorstep
                  </p>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* ===================== */}
      {/* Content Section */}
      {/* ===================== */}

      <div className="order-2 lg:order-1 text-center lg:text-left">

        <span
          className="
          inline-flex
          rounded-full
          bg-amber-100
          px-4
          py-2
          text-sm
          font-semibold
          text-amber-600
          "
        >
          Trusted Home Services
        </span>

        <h1
          className="
          mt-6
          text-4xl
          sm:text-5xl
          lg:text-6xl
          font-extrabold
          leading-tight
          text-gray-900
          "
        >
          Book Trusted{" "}
          <span className="text-amber-500">
            Professionals
          </span>
          <br />
          For Every Home Service
        </h1>

        <p
          className="
          mt-6
          max-w-xl
          mx-auto
          lg:mx-0
          text-base
          sm:text-lg
          leading-8
          text-gray-600
          "
        >
          From electricians and plumbers to cleaning and AC repair,
          Clarito connects you with trusted professionals for fast,
          reliable and affordable home services.
        </p>

        {/* Buttons */}

        <div
          className="
          mt-10
          flex
          flex-col
          sm:flex-row
          gap-4
          justify-center
          lg:justify-start
          "
        >

          <Link
            to="/booking"
            className="
            w-full
            sm:w-auto
            rounded-xl
            bg-amber-500
            px-8
            py-4
            text-center
            font-semibold
            text-white
            transition
            hover:bg-amber-600
            "
          >
            Book Now
          </Link>

          <Link
            to="/services"
            className="
            w-full
            sm:w-auto
            rounded-xl
            border
            border-gray-300
            px-8
            py-4
            text-center
            font-semibold
            transition
            hover:bg-gray-100
            "
          >
            Explore Services
          </Link>

        </div>

        {/* Stats */}

        <div
          className="
          mt-12
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-5
          "
        >

          <div className="rounded-2xl bg-white p-5 text-center shadow">
            <h3 className="text-3xl font-bold text-amber-500">
              500+
            </h3>

            <p className="mt-2 text-gray-600">
              Professionals
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow">
            <h3 className="text-3xl font-bold text-amber-500">
              10K+
            </h3>

            <p className="mt-2 text-gray-600">
              Bookings
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow">
            <h3 className="text-3xl font-bold text-amber-500">
              4.9★
            </h3>

            <p className="mt-2 text-gray-600">
              Rating
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
  </section>


  );
};

export default Hero;
