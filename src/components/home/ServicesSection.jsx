import { services } from "../../data/services";
import ServiceCard from "../home/ServiceCard";

const Services = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center">
          <span className="text-yellow-500 font-semibold text-sm sm:text-base">
            OUR SERVICES
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Popular Home Services
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Find trusted professionals for all your home service needs.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;