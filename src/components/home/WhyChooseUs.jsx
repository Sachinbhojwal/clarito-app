import { whyChooseUs } from "../../data/whyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center">
          <span className="text-yellow-500 font-semibold text-sm sm:text-base">
            WHY CHOOSE US
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Why Choose Clarito?
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We make home services simple, reliable and affordable.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-14">

          {whyChooseUs.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition duration-300 bg-white border border-gray-100 text-center sm:text-left"
            >

              {/* ICON */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto sm:mx-0 rounded-full bg-yellow-500 flex items-center justify-center text-xl sm:text-2xl font-bold text-black">
                ✓
              </div>

              {/* TITLE */}
              <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;