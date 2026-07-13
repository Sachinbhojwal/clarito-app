import { Link } from "react-router-dom";

import {
  FaStar,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-white
        border
        border-gray-200
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={service.image}
          alt={service.title}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Category */}

        <span
          className="
            absolute
            top-4
            left-4
            bg-amber-500
            text-white
            px-4
            py-2
            rounded-full
            text-xs
            font-semibold
            shadow-lg
          "
        >
          {service.category}
        </span>

        {/* Rating */}

        <div
          className="
            absolute
            top-4
            right-4
            bg-white
            rounded-full
            px-3
            py-2
            flex
            items-center
            gap-2
            shadow-lg
          "
        >
          <FaStar className="text-yellow-400" />

          <span className="font-semibold">
            {service.rating}
          </span>

        </div>

      </div>

      {/* Body */}

      <div className="p-6">

        <h3
          className="
            text-2xl
            font-bold
            text-gray-900
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-4
            text-gray-600
            leading-7
            line-clamp-3
          "
        >
          {service.description}
        </p>

        {/* Price & Duration */}

        <div
          className="
            mt-6
            flex
            justify-between
            items-center
          "
        >
          <div>

            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h4
              className="
                text-3xl
                font-bold
                text-amber-500
              "
            >
              ₹{service.price}
            </h4>

          </div>

          <div
            className="
              flex
              items-center
              gap-2
              text-gray-500
            "
          >
            <FaClock />

            <span>
              {service.duration}
            </span>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

          <Link
            to={`/services/${service.slug}`}
            className="
              flex-1
              border-2
              border-amber-500
              text-amber-500
              py-3
              rounded-xl
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              hover:bg-amber-500
              hover:text-white
              transition
            "
          >
            Details

            <FaArrowRight />
          </Link>

          <Link
            to="/booking"
            state={{ service }}
            className="
              flex-1
              bg-amber-500
              text-white
              py-3
              rounded-xl
              font-semibold
              text-center
              hover:bg-amber-600
              transition
            "
          >
            Book Now
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ServiceCard;