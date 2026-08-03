const SaveAvailability = ({
  loading,
  onSave,
  onReset,
}) => {
  return (
    <section
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-6
      shadow-sm
      "
    >
      <div
        className="
        flex
        flex-col
        gap-4
        sm:flex-row
        sm:justify-end
        "
      >
        {/* Reset */}

        <button
          type="button"
          onClick={onReset}
          className="
          rounded-2xl
          border
          border-gray-300
          px-8
          py-3
          font-semibold
          transition
          hover:bg-gray-100
          "
        >
          Reset Changes
        </button>

        {/* Save */}

        <button
          type="button"
          disabled={loading}
          onClick={onSave}
          className="
          rounded-2xl
          bg-amber-500
          px-8
          py-3
          font-semibold
          text-white
          transition
          hover:bg-amber-600
          disabled:cursor-not-allowed
          disabled:opacity-70
          "
        >
          {loading
            ? "Saving..."
            : "Save Availability"}
        </button>
      </div>
    </section>
  );
};

export default SaveAvailability;