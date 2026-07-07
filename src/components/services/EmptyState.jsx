import { FaSearch } from "react-icons/fa";

const EmptyState = ({ clearSearch }) => {
  return (
    <div className="flex justify-center py-20">

      <div className="bg-white shadow-lg rounded-3xl p-10 max-w-lg w-full text-center">

        <div className="w-24 h-24 mx-auto rounded-full bg-amber-100 flex items-center justify-center">
          <FaSearch
            size={40}
            className="text-amber-500"
          />
        </div>

        <h2 className="mt-8 text-3xl font-bold text-gray-800">
          No Services Found
        </h2>

        <p className="mt-4 text-gray-500 leading-7">
          We couldn't find any service matching your search or
          selected category.
          <br />
          Try another keyword or reset your filters.
        </p>

        <button
          onClick={clearSearch}
          className="mt-8 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
        >
          Clear Search
        </button>

      </div>
    </div>
  );
};

export default EmptyState;