import ServiceCard from "../home/ServiceCard";

const ServiceGrid = ({ services }) => {
  return (
    <div className="mt-10">
      {services.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-gray-700">
            No Services Available
          </h2>

          <p className="mt-3 text-gray-500">
            Please try another category or search keyword.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="transition duration-300 hover:-translate-y-2"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceGrid;