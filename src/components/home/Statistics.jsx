import { statistics } from "../../data/statistics";

const Statistics = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center text-white">

          <span className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full font-semibold">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold">
            Trusted By Thousands
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-white/90 leading-8">
            We are proud to deliver quality home services with trusted
            professionals across multiple cities.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
                  <Icon size={40} />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-gray-900">
                  {item.number}
                </h3>

                <p className="mt-3 text-gray-600 font-medium">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Statistics;