import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100">

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="
          fixed
          top-4
          left-4
          sm:top-6
          sm:left-6
          md:top-8
          md:left-8
          z-50
          flex
          items-center
          gap-2
          rounded-lg
          bg-white
          px-3
          py-2
          sm:px-4
          sm:py-2.5
          text-sm
          sm:text-base
          font-semibold
          text-gray-700
          shadow-sm
          hover:text-yellow-600
          hover:shadow-md
          transition
        "
      >
        ← Back
      </button>

      {/* Main Content */}
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          px-4
          py-16
          sm:px-6
          sm:py-20
          md:px-8
          lg:px-12
        "
      >
        <RegisterForm />
      </div>

    </section>
  );
};

export default Register;