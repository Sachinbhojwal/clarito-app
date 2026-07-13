import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

const ServiceGrid = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Explore Our Services
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            Book trusted professionals for all your home service needs.
            We provide fast, reliable and affordable services at your
            doorstep.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

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

export default ServiceGrid;