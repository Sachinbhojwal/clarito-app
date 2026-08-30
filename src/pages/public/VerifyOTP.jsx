import { useState } from "react";
import {
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";

const VerifyOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email =
    location.state?.email || "";

  const role =
    location.state?.role ||
    "customer";

  const [otp, setOtp] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  // =================================================
  // OTP INPUT
  // =================================================

  const handleChange = (e) => {
    const value =
      e.target.value
        .replace(/\D/g, "")
        .slice(0, 6);

    setOtp(value);
    setError("");
    setSuccess("");
  };

  // =================================================
  // VERIFY OTP
  // =================================================

  const handleVerify = async (
    e
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email) {
      setError(
        "Email information is missing. Please register again."
      );

      return;
    }

    if (otp.length !== 6) {
      setError(
        "Please enter the 6-digit OTP."
      );

      return;
    }

    try {
      setLoading(true);

      const response =
        await fetch(
          "https://clarito-backend-2.onrender.com/api/auth/verify-otp",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              email,
              otp,
            }),
          }
        );

      const data =
        await response.json();

      console.log(
        "VERIFY OTP STATUS:",
        response.status
      );

      console.log(
        "VERIFY OTP RESPONSE:",
        data
      );

      if (!response.ok) {
        setError(
          data?.message ||
          "Invalid or expired OTP."
        );

        return;
      }

      setSuccess(
        data?.message ||
        "Email verified successfully!"
      );

      setTimeout(() => {
        navigate("/login", {
          state: {
            email,
            role,
          },
        });
      }, 1500);
    } catch (error) {
      console.error(
        "VERIFY OTP ERROR:",
        error
      );

      setError(
        "Unable to connect to server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // =================================================
  // RESEND OTP
  // =================================================

  const handleResendOTP =
    async () => {
      setError("");
      setSuccess("");

      if (!email) {
        setError(
          "Email information is missing."
        );

        return;
      }

      try {
        setLoading(true);

        const response =
          await fetch(
            "https://clarito-backend-2.onrender.com/api/auth/resend-otp",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                email,
              }),
            }
          );

        const data =
          await response.json();

        console.log(
          "RESEND OTP STATUS:",
          response.status
        );

        console.log(
          "RESEND OTP RESPONSE:",
          data
        );

        if (!response.ok) {
          setError(
            data?.message ||
            "Unable to resend OTP."
          );

          return;
        }

        setSuccess(
          data?.message ||
          "A new OTP has been sent to your email."
        );

        setOtp("");
      } catch (error) {
        console.error(
          "RESEND OTP ERROR:",
          error
        );

        setError(
          "Unable to connect to server. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

  // =================================================
  // UI
  // =================================================

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

        {/* Header */}

        <div className="text-center mb-8">

          <div className="text-5xl mb-4">
            📧
          </div>

          <h2 className="text-3xl font-bold text-gray-800">
            Verify Your Email
          </h2>

          <p className="text-gray-500 mt-2">
            Enter the 6-digit OTP sent to
          </p>

          <p className="font-semibold text-gray-800 mt-1 break-all">
            {email ||
              "your email"}
          </p>

        </div>

        {/* Error */}

        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">

            <p className="text-sm text-red-600">
              {error}
            </p>

          </div>
        )}

        {/* Success */}

        {success && (
          <div className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3">

            <p className="text-sm text-green-600">
              {success}
            </p>

          </div>
        )}

        {/* Form */}

        <form
          onSubmit={handleVerify}
          className="space-y-5"
        >

          <div>

            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter OTP
            </label>

            <input
              id="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={handleChange}
              maxLength={6}
              disabled={loading}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-center text-2xl tracking-[0.5em] font-semibold outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 disabled:bg-gray-100"
            />

          </div>

          <button
            type="submit"
            disabled={
              loading ||
              otp.length !== 6
            }
            className={`w-full py-3 rounded-lg font-semibold text-white transition ${loading ||
                otp.length !== 6
                ? "bg-yellow-300 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600"
              }`}
          >
            {loading
              ? "Verifying..."
              : "Verify Email"}
          </button>

        </form>

        {/* Resend */}

        <div className="text-center mt-6">

          <p className="text-sm text-gray-500 mb-2">
            Didn't receive the OTP?
          </p>

          <button
            type="button"
            onClick={
              handleResendOTP
            }
            disabled={loading}
            className="font-semibold text-yellow-600 hover:text-yellow-700 disabled:text-gray-400"
          >
            Resend OTP
          </button>

        </div>

        {/* Back */}

        <div className="text-center mt-6">

          <Link
            to="/register"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            ← Back to Registration
          </Link>

        </div>

      </div>

    </div>
  );
};

export default VerifyOTP;
