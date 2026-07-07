import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { services } from "../data/services";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // IMPORTANT: convert id to number
  const service = services.find(
    (s) => s.id === Number(id)
  );

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold text-red-500">
            Service Not Found
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold">
          {service.title}
        </h1>

        <p className="text-gray-500 mt-2">
          {service.category}
        </p>

        <p className="mt-6 text-gray-700">
          {service.description}
        </p>

        <div className="mt-6 text-green-600 font-bold text-2xl">
          ₹299 onwards
        </div>

        <button
          onClick={() =>
            navigate(`/booking/${service.id}`)
          }
          className="mt-8 w-full bg-amber-500 text-white py-3 rounded-xl hover:bg-amber-600"
        >
          Book Now
        </button>

      </main>

      <Footer />
    </>
  );
};

export default ServiceDetails;