import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Go back"
      title="Go back"
      className="
        flex
        items-center
        justify-center
        w-10
        h-10
        rounded-full
        text-gray-600
        hover:text-white
        hover:bg-red-500
        transition-all
        duration-200
        text-2xl
        font-bold
        leading-none
      "
    >
      ×
    </button>
  );
};

export default BackButton;