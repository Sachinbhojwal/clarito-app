const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="mt-10">

      {/* Heading */}

      <div className="flex items-center justify-between flex-wrap gap-4">

        <h3 className="text-2xl font-bold">
          Browse Categories
        </h3>

        <span className="text-gray-500">
          Select a category
        </span>

      </div>

      {/* Category Buttons */}

      <div className="flex flex-wrap gap-4 mt-6">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border
              ${selectedCategory === category
                ? "bg-amber-500 text-white border-amber-500 shadow-lg scale-105"
                : "bg-white text-gray-700 border-gray-200 hover:border-amber-500 hover:text-amber-500 hover:shadow-md"
              }`}
          >
            {category}
          </button>
        ))}

      </div>

    </div>
  );
};

export default CategoryFilter;