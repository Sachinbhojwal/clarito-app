import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative hidden xl:block">
      <input
        type="text"
        placeholder="Search..."
        className="
        w-64
        rounded-full
        border
        border-gray-300
        py-2
        pl-10
        pr-4
        outline-none
        transition
        focus:border-amber-500
        "
      />

      <FaSearch
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-gray-400
        "
      />
    </div>
  );
};

export default SearchBar;