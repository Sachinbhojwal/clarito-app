import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import BackButton from "../../components/auth/BackButton";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";
  const resetToken =
    location.state?.resetToken || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email || !resetToken) {
      setError(
        "Reset session is missing. Please start again."
      );
      return;
    }

    if (!password || !confirmPassword) {
      setError("Please fill in both password fields.");
      return;
    }

    if (password.length < 8) {
      setError(
        "Password must be at least 8 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://clarito-backend-lh55.onrender.com/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            confirmPassword,
            resetToken,
          }),
        }
      );

      const data = await response.json();

      console.log(
        "RESET PASSWORD STATUS:",
        response.status
      );

      console.log(
        "RESET PASSWORD RESPONSE:",
        data
      );

      if (!response.ok) {
        setError(
          data?.message ||
          "Unable to reset password."
        );
        return;
      }

      setSuccess(
        data?.message ||
        "Password reset successfully."
      );

      setTimeout(() => {
        navigate("/login", {
          state: {
            email,
          },
        });
      }, 1200);
    } catch (error) {
      console.error(
        "RESET PASSWORD ERROR:",
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
              🔑
            </div>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Reset Password
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
              Create a new password for your Clarito account.
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
            onSubmit={handleSubmit}
            className="mt-7 space-y-5"
          >
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                New Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter new password"
                autoComplete="new-password"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-3
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                  disabled:bg-gray-100
                "
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Confirm new password"
                autoComplete="new-password"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-3
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                  disabled:bg-gray-100
                "
              />
            </div>

            <p className="text-xs text-gray-400">
              Password must be at least 8 characters.
            </p>

            <button
              type="submit"
              disabled={loading}
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
                ? "Resetting Password..."
                : "Reset Password"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ResetPassword;