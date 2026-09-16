import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";
import BackButton from "../../components/auth/BackButton";

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
    <section className="min-h-screen bg-gray-100 relative">

      {/* Cross Button */}
      <div
        className="
          fixed
          top-4
          right-4
          sm:top-6
          sm:right-6
          md:top-8
          md:right-8
          z-50
        "
      >
        <BackButton />
      </div>

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