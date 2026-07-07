import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { heroSlides } from "../../data/heroSliders";

const LoginSlider = () => {
  return (
    <div className="hidden lg:block h-full">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="h-full min-h-[750px]"
      >

        {heroSlides.map((slide) => (

          <SwiperSlide key={slide.id}>

            <div className="relative h-full">

              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[750px] object-cover"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/55"></div>

              {/* Content */}

              <div className="absolute inset-0 flex flex-col justify-center px-14 text-white">

                <span className="bg-amber-500 w-fit px-5 py-2 rounded-full font-semibold">
                  Welcome to Clarito
                </span>

                <h1 className="text-6xl font-extrabold mt-6 leading-tight">
                  Home Services
                  <br />
                  Made Easy
                </h1>

                <p className="mt-6 text-xl text-gray-200 max-w-lg">
                  {slide.title}
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6">

                  <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
                    <h3 className="text-3xl font-bold">
                      500+
                    </h3>

                    <p className="mt-2">
                      Verified Professionals
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
                    <h3 className="text-3xl font-bold">
                      10K+
                    </h3>

                    <p className="mt-2">
                      Happy Customers
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
                    <h3 className="text-3xl font-bold">
                      24×7
                    </h3>

                    <p className="mt-2">
                      Customer Support
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
                    <h3 className="text-3xl font-bold">
                      ★ 4.9
                    </h3>

                    <p className="mt-2">
                      Customer Rating
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  );
};

export default LoginSlider;