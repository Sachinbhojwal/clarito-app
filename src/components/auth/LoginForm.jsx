import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  // Handle Input

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  // Login

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const users =
        JSON.parse(
          localStorage.getItem("users")
        ) || [];

      const user = users.find(
        (item) =>
          item.email
            .trim()
            .toLowerCase() ===
          formData.email
            .trim()
            .toLowerCase() &&
          item.password ===
          formData.password
      );

      if (!user) {
        alert(
          "Invalid Email or Password"
        );
        return;
      }

      login(user);

      if (rememberMe) {
        localStorage.setItem(
          "rememberUser",
          JSON.stringify(user)
        );
      }

      // Redirect

      if (user.role === "provider") {
        navigate(
          "/provider/dashboard"
        );
      } else if (
        user.role === "customer"
      ) {
        navigate(
          "/customer/dashboard"
        );
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);

      alert("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-gray-500">
          Login to continue using
          Clarito
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >
        {/* Email */}

        <div>
          <label className="mb-2 block font-semibold">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="
            w-full
            rounded-xl
            border
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-amber-500
            "
          />
        </div>

        {/* Password */}

        <div>
          <label className="mb-2 block font-semibold">
            Password
          </label>

          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              required
              value={
                formData.password
              }
              onChange={
                handleChange
              }
              placeholder="Enter Password"
              className="
              w-full
              rounded-xl
              border
              px-4
              py-3
              pr-12
              outline-none
              focus:ring-2
              focus:ring-amber-500
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="
              absolute
              right-4
              top-4
              text-gray-500
              "
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>
        </div>

        {/* Remember */}

        <div
          className="
          flex
          items-center
          justify-between
          "
        >
          <label
            className="
            flex
            items-center
            gap-2
            "
          >
            <input
              type="checkbox"
              checked={
                rememberMe
              }
              onChange={() =>
                setRememberMe(
                  !rememberMe
                )
              }
            />

            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="
            font-semibold
            text-amber-500
            "
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}

        <button
          type="submit"
          disabled={loading}
          className="
          w-full
          rounded-xl
          bg-amber-500
          py-4
          font-bold
          text-white
          transition
          hover:bg-amber-600
          "
        >
          {loading
            ? "Logging In..."
            : "Login"}
        </button>

        {/* Register */}

        <p className="text-center text-gray-500">
          Don't have an account?

          <Link
            to="/register"
            className="
            ml-2
            font-bold
            text-amber-500
            "
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;