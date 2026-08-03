import { useParams, useNavigate } from "react-router-dom";

import {
  FaClock,
  FaStar,
  FaTag,
} from "react-icons/fa";

import { services } from "../../data/services";

const ServiceDetails = () => {
  const { slug } = useParams();

  const navigate = useNavigate();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500">
            Service Not Found
          </h1>

          <button
            onClick={() =>
              navigate("/services")
            }
            className="
            mt-8
            rounded-xl
            bg-amber-500
            px-8
            py-3
            text-white
            transition
            hover:bg-amber-600
            "
          >
            Back To Services
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="
              h-[500px]
              w-full
              rounded-3xl
              object-cover
              shadow-xl
              "
            />
          </div>

          <div>
            <span
              className="
              inline-block
              rounded-full
              bg-amber-100
              px-5
              py-2
              font-semibold
              text-amber-600
              "
            >
              {service.category}
            </span>

            <h1 className="mt-6 text-5xl font-bold text-gray-900">
              {service.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <FaStar className="text-amber-500" />

                <span className="font-semibold">
                  {service.rating} Rating
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaClock className="text-amber-500" />

                <span>
                  {service.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaTag className="text-amber-500" />

                <span>
                  Starting ₹{service.price}
                </span>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <h3 className="text-2xl font-bold">
                Why Choose This Service?
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>
                  ✔ Verified Professionals
                </li>

                <li>
                  ✔ Affordable Pricing
                </li>

                <li>
                  ✔ Same Day Service
                </li>

                <li>
                  ✔ Quality Guaranteed
                </li>

                <li>
                  ✔ 24×7 Customer Support
                </li>
              </ul>
            </div>

            <button
              onClick={() =>
                navigate(
                  `/booking?service=${service.slug}`
                )
              }
              className="
              mt-10
              rounded-xl
              bg-amber-500
              px-10
              py-4
              font-semibold
              text-white
              transition
              hover:bg-amber-600
              "
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetails;