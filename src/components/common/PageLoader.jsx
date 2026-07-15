import Loader from "./Loader";

const PageLoader = () => {
  return (
    <section
      className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-white
      "
    >
      <div className="text-center">
        <Loader />

        <h2
          className="
          mt-4
          text-xl
          font-semibold
          text-gray-700
          "
        >
          Please Wait...
        </h2>

        <p className="mt-2 text-gray-500">
          Loading your content.
        </p>
      </div>
    </section>
  );
};

export default PageLoader;