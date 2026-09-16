import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/auth/BackButton";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    const normalizedEmail = email.trim().toLowerCase();

    // =================================================
    // VALIDATION
    // =================================================

    if (!normalizedEmail) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      // =================================================
      // SEND RESET OTP
      // =================================================

      const response = await fetch(
        "https://clarito-backend-lh55.onrender.com/api/auth/forgot/password",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: normalizedEmail,
          }),
        }
      );

      const data = await response.json();

      console.log(
        "FORGOT PASSWORD STATUS:",
        response.status
      );

      console.log(
        "FORGOT PASSWORD RESPONSE:",
        data
      );

      // =================================================
      // ERROR RESPONSE
      // =================================================

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to send password reset OTP."
        );
      }

      // =================================================
      // SUCCESS
      // =================================================

      setMessage(
        data?.message ||
          "Password reset OTP sent successfully."
      );

      // =================================================
      // GO TO OTP PAGE
      // =================================================

      setTimeout(() => {
        navigate("/reset-password-otp", {
          state: {
            email: normalizedEmail,
          },
        });
      }, 800);
    } catch (error) {
      console.error(
        "FORGOT PASSWORD ERROR:",
        error
      );

      setError(
        error?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
        min-h-screen
        bg-slate-50
        px-4
        py-6
        sm:px-6
        sm:py-8
        md:px-8
        lg:px-12
      "
    >
      {/* =================================================
          PAGE CONTAINER
      ================================================= */}

      <div
        className="
          relative
          flex
          min-h-[calc(100vh-3rem)]
          items-center
          justify-center
          sm:min-h-[calc(100vh-4rem)]
        "
      >
        {/* =================================================
            BACK BUTTON
        ================================================= */}

        <div
          className="
            absolute
            left-0
            top-0
            z-10
          "
        >
          <BackButton />
        </div>

        {/* =================================================
            CARD
        ================================================= */}

        <section
          className="
            w-full
            max-w-[380px]
            rounded-2xl
            bg-white
            px-5
            py-7
            shadow-lg

            sm:max-w-[430px]
            sm:px-7
            sm:py-8

            md:max-w-[460px]
            md:px-9
            md:py-9

            lg:max-w-[480px]
            lg:px-10
            lg:py-10
          "
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <div className="text-center">
            <div
              className="
                mb-4
                text-4xl
                sm:text-5xl
              "
            >
              🔐
            </div>

            <h1
              className="
                text-2xl
                font-bold
                text-gray-900

                sm:text-3xl
              "
            >
              Forgot Password
            </h1>

            <p
              className="
                mx-auto
                mt-3
                max-w-md
                text-sm
                leading-6
                text-gray-500

                sm:text-base
              "
            >
              Enter your registered email address
              and we will send you an OTP to reset
              your password.
            </p>
          </div>

          {/* =================================================
              ERROR MESSAGE
          ================================================= */}

          {error && (
            <div
              className="
                mt-5
                rounded-lg
                border
                border-red-200
                bg-red-50
                px-4
                py-3
              "
            >
              <p
                className="
                  text-sm
                  leading-5
                  text-red-600
                "
              >
                {error}
              </p>
            </div>
          )}

          {/* =================================================
              SUCCESS MESSAGE
          ================================================= */}

          {message && (
            <div
              className="
                mt-5
                rounded-lg
                border
                border-green-200
                bg-green-50
                px-4
                py-3
              "
            >
              <p
                className="
                  text-sm
                  leading-5
                  text-green-600
                "
              >
                {message}
              </p>
            </div>
          )}

          {/* =================================================
              FORM
          ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="mt-7 sm:mt-8"
          >
            {/* =================================================
                EMAIL
            ================================================= */}

            <div>
              <label
                htmlFor="email"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-gray-700

                  sm:text-base
                "
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setMessage("");
                }}
                placeholder="Enter your email"
                autoComplete="email"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-gray-900
                  outline-none
                  transition

                  placeholder:text-gray-400

                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100

                  disabled:cursor-not-allowed
                  disabled:bg-gray-100

                  sm:text-base
                "
              />
            </div>

            {/* =================================================
                SEND OTP BUTTON
            ================================================= */}

            <button
              type="submit"
              disabled={loading}
              className="
                mt-6
                w-full
                rounded-xl
                bg-blue-600
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200

                hover:bg-blue-700

                focus:outline-none
                focus:ring-2
                focus:ring-blue-200

                disabled:cursor-not-allowed
                disabled:opacity-60

                sm:py-3.5
                sm:text-base
              "
            >
              {loading
                ? "Sending OTP..."
                : "Send OTP"}
            </button>
          </form>

          {/* =================================================
              FOOT NOTE
          ================================================= */}

          <p
            className="
              mt-6
              text-center
              text-xs
              leading-5
              text-gray-400

              sm:text-sm
            "
          >
            You will receive a verification code
            on your registered email address.
          </p>
        </section>
      </div>
    </main>
  );
};

export default ForgotPassword;