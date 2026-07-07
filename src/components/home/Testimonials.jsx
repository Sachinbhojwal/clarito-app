import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center">
          <span className="text-yellow-500 font-semibold text-sm sm:text-base">
            TESTIMONIALS
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Trusted by homeowners across the city.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition duration-300"
            >

              {/* STARS */}
              <div className="text-yellow-500 text-base sm:text-lg">
                ★★★★★
              </div>

              {/* REVIEW */}
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                "{item.review}"
              </p>

              {/* USER INFO */}
              <div className="mt-6">
                <h4 className="font-bold text-base sm:text-lg">
                  {item.name}
                </h4>

                <span className="text-gray-500 text-xs sm:text-sm">
                  {item.service}
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;