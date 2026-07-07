import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <Link to={`/services/${service.slug}`}>
      <div className="group relative overflow-hidden rounded-3xl h-[320px] cursor-pointer">

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold">
            {service.title}
          </h3>

          <button
            className="
              mt-4
              bg-yellow-500
              text-black
              px-4
              py-2
              rounded-xl
              font-medium
              opacity-0
              translate-y-4
              group-hover:opacity-100
              group-hover:translate-y-0
              transition
            "
          >
            View Details →
          </button>
        </div>

      </div>
    </Link>
  );
};

export default ServiceCard;