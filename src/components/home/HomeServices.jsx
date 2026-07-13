import { Link } from "react-router-dom";

import ServiceCard from "./ServiceCard";

import { services } from "../../data/services";

const HomeServices = () => {
  const popularServices = services.slice(0, 6);

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <span className="inline-block px-5 py-2 bg-amber-100 text-amber-600 rounded-full font-semibold">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Popular Home Services
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Choose from our most popular home services performed by
            experienced and verified professionals.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {popularServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

        <div className="flex justify-center mt-14">

          <Link
            to="/services"
            className="
              inline-flex
              items-center
              gap-3
              bg-amber-500
              hover:bg-amber-600
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            View All Services
          </Link>

        </div>

      </div>

    </section>
  );
};

export default HomeServices;