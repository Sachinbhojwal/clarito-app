import LoginForm from "../../components/auth/LoginForm";
import LoginSlider from "../../components/auth/LoginSlider";

const Login = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}

            <LoginSlider />

            {/* Right Side */}

            <div
              className="
              flex
              items-center
              justify-center
              p-8
              lg:p-14
              "
            >
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;