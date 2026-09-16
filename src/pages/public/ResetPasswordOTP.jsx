import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import BackButton from "../../components/auth/BackButton";

const ResetPasswordOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 6);

    setOtp(value);
    setError("");
    setSuccess("");
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email) {
      setError(
        "Email information is missing. Please start the password reset process again."
      );
      return;
    }

    if (otp.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://clarito-backend-lh55.onrender.com/api/auth/verify-reset-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
          }),
        }
      );

      const data = await response.json();

      console.log(
        "VERIFY RESET OTP STATUS:",
        response.status
      );

      console.log(
        "VERIFY RESET OTP RESPONSE:",
        data
      );

      if (!response.ok) {
        setError(
          data?.message ||
          "Invalid or expired OTP."
        );
        return;
      }

      if (!data?.resetToken) {
        setError(
          "Reset token was not received."
        );
        return;
      }

      setSuccess(
        data?.message ||
        "OTP verified successfully."
      );

      setTimeout(() => {
        navigate("/reset-password", {
          state: {
            email,
            resetToken: data.resetToken,
          },
        });
      }, 800);
    } catch (error) {
      console.error(
        "VERIFY RESET OTP ERROR:",
        error
      );

      setError(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6">
      <div className="relative flex min-h-[calc(100vh-3rem)] items-center justify-center">

        <div className="absolute left-0 top-0">
          <BackButton />
        </div>

        <section
          className="
            w-full
            max-w-[380px]
            rounded-2xl
            bg-white
            px-5 py-7
            shadow-lg
            sm:max-w-[430px]
            sm:px-7 sm:py-8
          "
        >
          <div className="text-center">
            <div className="mb-4 text-5xl">
              🔐
            </div>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Verify Reset OTP
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
              Enter the 6-digit OTP sent to
            </p>

            <p className="mt-1 break-all font-semibold text-gray-800">
              {email || "your email"}
            </p>
          </div>

          {error && (
            <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm text-red-600">
                {error}
              </p>
            </div>
          )}

          {success && (
            <div className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3">
              <p className="text-sm text-green-600">
                {success}
              </p>
            </div>
          )}

          <form
            onSubmit={handleVerify}
            className="mt-7 space-y-5"
          >
            <div>
              <label
                htmlFor="resetOtp"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Enter OTP
              </label>

              <input
                id="resetOtp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                value={otp}
                onChange={handleChange}
                disabled={loading}
                placeholder="Enter 6-digit OTP"
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-3
                  text-center
                  text-2xl
                  font-semibold
                  tracking-[0.5em]
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                  disabled:bg-gray-100
                "
              />
            </div>

            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="
                w-full
                rounded-xl
                bg-blue-600
                px-4
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading
                ? "Verifying..."
                : "Verify OTP"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-5 text-gray-400 sm:text-sm">
            This OTP is valid for 5 minutes.
          </p>
        </section>
      </div>
    </main>
  );
};

export default ResetPasswordOTP;