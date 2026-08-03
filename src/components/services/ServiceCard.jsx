import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaStar,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const location = useLocation();

  const isCustomer =
    location.pathname.startsWith("/customer");

  const detailsPath = isCustomer
    ? `/customer/services/${service.slug}`
    : `/services/${service.slug}`;

  const bookingPath = isCustomer
    ? "/customer/booking"
    : "/booking";

  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-gray-200
      bg-white
      shadow-md
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
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
          left-4
          top-4
          rounded-full
          bg-amber-500
          px-4
          py-2
          text-xs
          font-semibold
          text-white
          shadow-lg
          "
        >
          {service.category}
        </span>

        {/* Rating */}

        <div
          className="
          absolute
          right-4
          top-4
          flex
          items-center
          gap-2
          rounded-full
          bg-white
          px-3
          py-2
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
          line-clamp-3
          leading-7
          text-gray-600
          "
        >
          {service.description}
        </p>

        {/* Price */}

        <div
          className="
          mt-6
          flex
          items-center
          justify-between
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
            to={detailsPath}
            state={{ service }}
            className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-xl
            border-2
            border-amber-500
            py-3
            font-semibold
            text-amber-500
            transition
            hover:bg-amber-500
            hover:text-white
            "
          >
            Details

            <FaArrowRight />
          </Link>

          <Link
            to={bookingPath}
            state={{ service }}
            className="
            flex-1
            rounded-xl
            bg-amber-500
            py-3
            text-center
            font-semibold
            text-white
            transition
            hover:bg-amber-600
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