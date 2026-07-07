import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import LoginForm from "../components/auth/LoginForm";
import LoginSlider from "../components/auth/LoginSlider";

const Login = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-[calc(100vh-80px)] bg-gray-100">

        <div className="max-w-7xl mx-auto px-4 py-10">

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

            <div className="grid lg:grid-cols-2">

              {/* Left Side */}

              <LoginSlider />

              {/* Right Side */}

              <div className="flex items-center justify-center p-8 lg:p-14">

                <LoginForm />

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Login;