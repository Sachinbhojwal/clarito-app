import { FaSave } from "react-icons/fa";

const SaveProfile = ({
  onSave,
  loading = false,
}) => {
  return (
    <section
      className="
      flex
      justify-end
      "
    >
      <button
        type="button"
        onClick={onSave}
        disabled={loading}
        className="
        flex
        items-center
        gap-3
        rounded-2xl
        bg-amber-500
        px-8
        py-4
        font-semibold
        text-white
        shadow-lg
        transition
        hover:bg-amber-600
        disabled:cursor-not-allowed
        disabled:opacity-60
        "
      >
        <FaSave />

        {loading
          ? "Saving..."
          : "Save Profile"}
      </button>
    </section>
  );
};

export default SaveProfile;