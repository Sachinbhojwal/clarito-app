import { Link } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="relative overflow-hidden">

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

        <span className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {service.category}
        </span>

      </div>

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-bold text-gray-900">
            {service.title}
          </h3>

          <div className="flex items-center gap-1 text-amber-500">

            <FaStar />

            <span className="font-semibold">
              {service.rating}
            </span>

          </div>

        </div>

        <p className="mt-4 text-gray-600 leading-7 line-clamp-3">
          {service.description}
        </p>

        <Link
          to={`/services/${service.slug}`}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            font-semibold
            text-amber-500
            hover:text-amber-600
            transition
          "
        >
          View Service

          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>

      </div>

    </div>
  );
};

export default ServiceCard;