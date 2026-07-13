import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { testimonials } from "../../data/testimonials";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Thousands of customers trust Clarito for reliable and professional
            home services.
          </p>

        </div>

        <div className="mt-16">

          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >

            {testimonials.map((item) => (

              <SwiperSlide key={item.id}>

                <div className="bg-white rounded-3xl shadow-lg p-8 h-full">

                  <div className="flex items-center gap-4">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />

                    <div>

                      <h3 className="text-xl font-bold">
                        {item.name}
                      </h3>

                      <p className="text-gray-500">
                        {item.city}
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-1 text-amber-500 mt-6">

                    {[...Array(item.rating)].map((_, index) => (
                      <FaStar key={index} />
                    ))}

                  </div>

                  <p className="mt-6 text-gray-600 leading-8">
                    "{item.review}"
                  </p>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;