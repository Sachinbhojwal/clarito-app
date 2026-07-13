import { useState } from "react";
import {
  FaThLarge,
  FaBroom,
  FaBolt,
  FaFaucet,
  FaHammer,
  FaPaintRoller,
  FaSnowflake,
  FaTools,
  FaBug,
  FaCut,
} from "react-icons/fa";

import { serviceCategories } from "../../data/serviceCategories";

const ServiceCategories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const getIcon = (slug) => {
    switch (slug) {
      case "all":
        return <FaThLarge />;

      case "cleaning":
        return <FaBroom />;

      case "electrician":
        return <FaBolt />;

      case "plumber":
        return <FaFaucet />;

      case "carpenter":
        return <FaHammer />;

      case "painting":
        return <FaPaintRoller />;

      case "ac-repair":
        return <FaSnowflake />;

      case "appliance-repair":
        return <FaTools />;

      case "pest-control":
        return <FaBug />;

      case "salon":
        return <FaCut />;

      default:
        return <FaThLarge />;
    }
  };

  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            CATEGORIES
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Browse By Category
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">
            Choose the service category that best matches your home
            service needs.
          </p>

        </div>

        {/* Categories */}

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {serviceCategories.map((category) => (

            <button
              key={category.id}
              onClick={() => setActiveCategory(category.slug)}
              className={`
                rounded-2xl
                border
                p-6
                transition-all
                duration-300
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2

                ${activeCategory === category.slug
                  ? "bg-amber-500 text-white border-amber-500"
                  : "bg-white text-gray-700 border-gray-200"
                }
              `}
            >

              <div className="flex justify-center text-4xl mb-4">
                {getIcon(category.slug)}
              </div>

              <h3 className="font-semibold">
                {category.name}
              </h3>

            </button>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ServiceCategories;