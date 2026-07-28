import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div
      className="
      hidden
      lg:flex
      items-center
      bg-gray-100
      rounded-full
      px-4
      py-2
      "
    >
      <FiSearch className="text-gray-400" />

      <input
        type="text"
        placeholder="Search..."
        className="
        bg-transparent
        outline-none
        ml-2
        text-sm
        w-40
        "
      />
    </div>
  );
};

export default SearchBar;