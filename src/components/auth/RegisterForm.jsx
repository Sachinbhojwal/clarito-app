import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });

  // =================================================
  // HANDLE INPUT
  // =================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  // =================================================
  // VALIDATE FORM
  // =================================================

  const validateForm = () => {
    // Name
    if (!formData.name.trim()) {
      return "Please enter your full name.";
    }

    if (formData.name.trim().length < 2) {
      return "Name must be at least 2 characters.";
    }

    // Email
    if (!formData.email.trim()) {
      return "Please enter your email.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    // Phone
    if (!formData.phone.trim()) {
      return "Please enter your phone number.";
    }

    const phoneRegex = /^[6-9][0-9]{9}$/;

    if (!phoneRegex.test(formData.phone.trim())) {
      return "Please enter a valid 10-digit phone number.";
    }

    // Password
    if (!formData.password) {
      return "Please enter your password.";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_\-+=])[A-Za-z\d@$!%*?&#^()_\-+=]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      return "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      return "Please confirm your password.";
    }

    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match.";
    }

    // Role
    if (!["customer", "provider"].includes(formData.role)) {
      return "Please select a valid account type.";
    }

    return null;
  };

  // =================================================
  // SUBMIT
  // =================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Validate form
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      // =================================================
      // PAYLOAD
      // =================================================

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        role: formData.role,
      };

      // Do not print real passwords in console
      console.log("REGISTER PAYLOAD:", {
        ...payload,
        password: "HIDDEN",
        confirmPassword: "HIDDEN",
      });

      // =================================================
      // API CALL
      // =================================================

      console.log("Calling API...");

      const response = await fetch(
        "https://clarito-backend-2.onrender.com/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",

          body: JSON.stringify(payload),
        }
      );

      console.log("API Called");

      console.log("REGISTER STATUS:", response.status);
      console.log("REGISTER OK:", response.ok);

      // =================================================
      // RESPONSE
      // =================================================

      let data = {};

      try {
        data = await response.json();
      } catch (jsonError) {
        console.warn(
          "Response is not valid JSON:",
          jsonError
        );

        data = {};
      }

      console.log("REGISTER RESPONSE:", data);

      // =================================================
      // UNVERIFIED ACCOUNT
      // =================================================

      if (
        data?.needsVerification &&
        data?.email
      ) {
        navigate("/verify-otp", {
          state: {
            email: data.email,
            role: payload.role,
          },
        });

        return;
      }

      // =================================================
      // BACKEND ERROR
      // =================================================

      if (!response.ok) {
        const message =
          data?.message ||
          data?.error ||
          "Registration failed. Please try again.";

        setError(message);

        return;
      }

      // =================================================
      // SUCCESS
      // =================================================

      navigate("/verify-otp", {
        state: {
          email: payload.email,
          role: payload.role,
        },
      });
    } catch (error) {
      console.error("REGISTER ERROR:", error);

      setError(
        "Unable to connect to server. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // =================================================
  // UI
  // =================================================

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8">

      {/* Header */}

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Create Account
        </h2>

        <p className="text-gray-500 mt-2">
          Register to continue
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

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Name */}

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
            disabled={loading}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 disabled:bg-gray-100"
          />
        </div>

        {/* Email */}

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
            disabled={loading}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 disabled:bg-gray-100"
          />
        </div>

        {/* Phone */}

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter 10-digit phone number"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            maxLength={10}
            inputMode="numeric"
            required
            disabled={loading}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 disabled:bg-gray-100"
          />

          <p className="text-xs text-gray-500 mt-1">
            Phone number is required for your account.
            Phone verification is not required.
          </p>
        </div>

        {/* Password */}

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              minLength={8}
              required
              disabled={loading}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 disabled:bg-gray-100"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  (prev) => !prev
                )
              }
              disabled={loading}
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
            >
              {showPassword ? (
                <FaEyeSlash size={18} />
              ) : (
                <FaEye size={18} />
              )}
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-1">
            At least 8 characters, including uppercase,
            lowercase, number and special character.
          </p>
        </div>

        {/* Confirm Password */}

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Confirm Password
          </label>

          <div className="relative">
            <input
              id="confirmPassword"
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              minLength={8}
              required
              disabled={loading}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 disabled:bg-gray-100"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  (prev) => !prev
                )
              }
              disabled={loading}
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={18} />
              ) : (
                <FaEye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Role */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Account Type
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Customer */}

            <label
              className={`cursor-pointer rounded-xl border-2 p-4 transition ${formData.role === "customer"
                ? "border-yellow-500 bg-yellow-50"
                : "border-gray-200 hover:border-yellow-300"
                }`}
            >
              <input
                type="radio"
                name="role"
                value="customer"
                checked={
                  formData.role === "customer"
                }
                onChange={handleChange}
                disabled={loading}
                className="sr-only"
              />

              <div className="text-center">
                <div className="text-3xl mb-2">
                  👤
                </div>

                <h3 className="font-semibold text-gray-800">
                  Customer
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  I want to book services
                </p>
              </div>
            </label>

            {/* Provider */}

            <label
              className={`cursor-pointer rounded-xl border-2 p-4 transition ${formData.role === "provider"
                ? "border-yellow-500 bg-yellow-50"
                : "border-gray-200 hover:border-yellow-300"
                }`}
            >
              <input
                type="radio"
                name="role"
                value="provider"
                checked={
                  formData.role === "provider"
                }
                onChange={handleChange}
                disabled={loading}
                className="sr-only"
              />

              <div className="text-center">
                <div className="text-3xl mb-2">
                  🧑‍💼
                </div>

                <h3 className="font-semibold text-gray-800">
                  Provider
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  I want to provide services
                </p>
              </div>
            </label>

          </div>
        </div>

        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition ${loading
            ? "bg-yellow-400 cursor-not-allowed"
            : "bg-yellow-500 hover:bg-yellow-600"
            }`}
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </button>

        {/* Login */}

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}

          <Link
            to="/login"
            className="font-semibold text-yellow-600 hover:text-yellow-700"
          >
            Login
          </Link>
        </p>

      </form>
    </div>
  );
};

export default RegisterForm;