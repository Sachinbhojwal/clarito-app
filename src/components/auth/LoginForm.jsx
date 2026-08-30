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


  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // =====================================================
  // LOGIN
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    try {
      setLoading(true);


      // Get registered users
      const savedUsers =
        localStorage.getItem("users");

      const users = savedUsers
        ? JSON.parse(savedUsers)
        : [];


      // Find user
      const user = users.find(
        (item) =>
          item?.email
            ?.trim()
            .toLowerCase() ===
          formData.email
            .trim()
            .toLowerCase() &&
          item?.password ===
          formData.password
      );


      // Invalid login
      if (!user) {
        alert(
          "Invalid Email or Password"
        );

        return;
      }


      // Normalize role
      const normalizedRole =
        user.role
          ?.trim()
          .toLowerCase();


      // Create clean user object
      const loggedInUser = {
        ...user,
        role: normalizedRole,
      };


      // Save authentication
      login(loggedInUser);


      // Remember user
      if (rememberMe) {
        localStorage.setItem(
          "rememberUser",
          JSON.stringify(loggedInUser)
        );
      } else {
        localStorage.removeItem(
          "rememberUser"
        );
      }


      // =================================================
      // REDIRECT BASED ON ROLE
      // =================================================

      if (
        normalizedRole ===
        "provider"
      ) {
        navigate(
          "/provider/dashboard",
          { replace: true }
        );

        return;
      }


      if (
        normalizedRole ===
        "customer"
      ) {
        navigate(
          "/customer/dashboard",
          { replace: true }
        );

        return;
      }


      if (
        normalizedRole ===
        "admin"
      ) {
        navigate(
          "/admin/dashboard",
          { replace: true }
        );

        return;
      }


      // Unknown role
      alert(
        "Invalid user role"
      );

      navigate(
        "/login",
        { replace: true }
      );

    } catch (error) {

      console.error(
        "Login Error:",
        error
      );

      alert(
        "Login Failed. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <div className="w-full max-w-md">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="text-center">

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-gray-500">
          Login to continue using
          Clarito
        </p>

      </div>


      {/* =================================================
          FORM
      ================================================= */}

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >

        {/* =================================================
            EMAIL
        ================================================= */}

        <div>

          <label className="mb-2 block font-semibold">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            required
            autoComplete="email"
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


        {/* =================================================
            PASSWORD
        ================================================= */}

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
              autoComplete="current-password"
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
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
              onClick={() =>
                setShowPassword(
                  (prev) => !prev
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


        {/* =================================================
            REMEMBER + FORGOT
        ================================================= */}

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
              cursor-pointer
            "
          >

            <input
              type="checkbox"
              checked={
                rememberMe
              }
              onChange={(e) =>
                setRememberMe(
                  e.target.checked
                )
              }
            />

            Remember Me

          </label>


          <Link
            to="/forgot/password"
            className="
              font-semibold
              text-amber-500
              hover:text-amber-600
            "
          >
            Forgot Password?
          </Link>

        </div>


        {/* =================================================
            LOGIN BUTTON
        ================================================= */}

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
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >

          {loading
            ? "Logging In..."
            : "Login"}

        </button>


        {/* =================================================
            REGISTER
        ================================================= */}

        <p className="text-center text-gray-500">

          Don't have an account?

          <Link
            to="/register"
            className="
              ml-2
              font-bold
              text-amber-500
              hover:text-amber-600
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
