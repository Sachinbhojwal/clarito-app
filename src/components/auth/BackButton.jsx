import {
  useNavigate,
} from "react-router-dom";

const BackButton = () => {
  const navigate =
    useNavigate();

  const handleBack = () => {
    if (
      window.history.length > 1
    ) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="
      flex
      items-center
      gap-2
      text-gray-700
      hover:text-yellow-500
      font-semibold
      transition
      "
    >
      ← Back
    </button>
  );
};

export default BackButton;