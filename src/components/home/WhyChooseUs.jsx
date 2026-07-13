import { whyChooseUs } from "../../data/whyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            WHY CHOOSE CLARITO
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Why Thousands Trust Clarito
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            We provide trusted, verified and affordable home services with
            experienced professionals dedicated to delivering the best customer
            experience.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-20 h-20 rounded-2xl bg-amber-100 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition">

                  <Icon size={40} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;