import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  const popularSearches = [
    "Electrician",
    "Plumber",
    "Cleaning",
    "AC Repair",
  ];

  return (
    <div className="max-w-4xl mx-auto -mt-12 relative z-20">

      <div className="bg-white rounded-3xl shadow-2xl p-6">

        {/* Search Box */}
        <div className="relative">

          <FaSearch
            className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-500"
            size={20}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Electrician, Plumber, AC Repair..."
            className="w-full h-16 rounded-2xl border border-gray-200 pl-14 pr-14 text-lg outline-none transition-all duration-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition"
            >
              <FaTimes className="text-red-500" />
            </button>
          )}

        </div>

        {/* Popular Searches */}
        <div className="mt-6 flex flex-wrap items-center gap-3">

          <span className="text-gray-500 font-medium">
            Popular:
          </span>

          {popularSearches.map((item) => (
            <button
              key={item}
              onClick={() => setSearch(item)}
              className="px-4 py-2 rounded-full bg-amber-50 text-amber-600 font-medium hover:bg-amber-500 hover:text-white transition"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
};

export default SearchBar;