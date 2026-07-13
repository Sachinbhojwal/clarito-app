import { Link } from "react-router-dom";
import { FaBriefcase, FaStar } from "react-icons/fa";

import { professionals } from "../../data/professionals";

const FeaturedProfessionals = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            OUR PROFESSIONALS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Meet Our Verified Experts
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Highly skilled professionals committed to delivering quality home services.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {professionals.map((person) => (

            <div
              key={person.id}
              className="group bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="overflow-hidden">

                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900">
                  {person.name}
                </h3>

                <p className="text-amber-500 font-semibold mt-2">
                  {person.profession}
                </p>

                <div className="flex items-center justify-between mt-5">

                  <div className="flex items-center gap-2 text-gray-600">

                    <FaBriefcase />

                    <span>{person.experience}</span>

                  </div>

                  <div className="flex items-center gap-1 text-amber-500">

                    <FaStar />

                    <span className="font-semibold">
                      {person.rating}
                    </span>

                  </div>

                </div>

                <Link
                  to="/booking"
                  className="block mt-8 text-center bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition"
                >
                  Book Now
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProfessionals;