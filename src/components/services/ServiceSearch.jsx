import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { serviceCategories } from "../../data/serviceCategories";

const ServiceSearch = () => {
  return (
    <section className="bg-gray-50 py-14">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Search */}

            <div className="relative">

              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search services..."
                className="
                  w-full
                  pl-11
                  pr-4
                  py-4
                  rounded-xl
                  border
                  border-gray-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-amber-500
                "
              />

            </div>

            {/* Category */}

            <select
              className="
                w-full
                py-4
                px-4
                rounded-xl
                border
                border-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-amber-500
              "
            >

              {serviceCategories.map((category) => (

                <option
                  key={category.id}
                  value={category.slug}
                >
                  {category.name}
                </option>

              ))}

            </select>

            {/* Location */}

            <div className="relative">

              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Enter your location"
                className="
                  w-full
                  pl-11
                  pr-4
                  py-4
                  rounded-xl
                  border
                  border-gray-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-amber-500
                "
              />

            </div>

            {/* Button */}

            <button
              className="
                bg-amber-500
                hover:bg-amber-600
                text-white
                rounded-xl
                py-4
                font-semibold
                transition
                duration-300
                shadow-lg
              "
            >
              Search Service
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceSearch;