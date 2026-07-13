import { howItWorks } from "../../data/howItWorks";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Book a Service in 4 Easy Steps
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Booking a home service with Clarito is simple, fast and hassle-free.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {howItWorks.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative bg-gray-50 rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                  {step.id}
                </div>

                <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mt-4">
                  <Icon size={36} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;