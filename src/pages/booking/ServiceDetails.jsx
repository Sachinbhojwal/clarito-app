import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import { FaClock, FaStar, FaTag } from "react-icons/fa";

import { services } from "../../data/services";

const ServiceDetails = () => {
  const { slug } = useParams();

  const navigate = useNavigate();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center bg-gray-50">

          <div className="text-center">

            <h1 className="text-4xl font-bold text-red-500">
              Service Not Found
            </h1>

            <button
              onClick={() => navigate("/services")}
              className="mt-8 bg-amber-500 text-white px-8 py-3 rounded-xl hover:bg-amber-600 transition"
            >
              Back To Services
            </button>

          </div>

        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-gray-50">

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
                {service.category}
              </span>

              <h1 className="mt-6 text-5xl font-bold text-gray-900">
                {service.title}
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-6 mt-8">

                <div className="flex items-center gap-2">

                  <FaStar className="text-amber-500" />

                  <span className="font-semibold">
                    {service.rating} Rating
                  </span>

                </div>

                <div className="flex items-center gap-2">

                  <FaClock className="text-amber-500" />

                  <span>{service.duration}</span>

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

                  <li>✔ Verified Professionals</li>

                  <li>✔ Affordable Pricing</li>

                  <li>✔ Same Day Service</li>

                  <li>✔ Quality Guaranteed</li>

                  <li>✔ 24×7 Customer Support</li>

                </ul>

              </div>

              <button
                onClick={() =>
                  navigate(`/booking?service=${service.slug}`)
                }
                className="mt-10 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-semibold transition"
              >
                Book Now
              </button>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default ServiceDetails;