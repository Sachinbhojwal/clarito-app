import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUserShield,
} from "react-icons/fa";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  // ==========================
  // Handle Input Change
  // ==========================

  const handleChange = (event) => {
    const { name, value } =
      event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================
  // Handle Login
  // ==========================

  const handleSubmit = (event) => {
    event.preventDefault();

    // Temporary Admin Credentials

    if (
      formData.email ===
      "admin@clarito.com" &&
      formData.password ===
      "Admin@123"
    ) {
      // Save Data

      localStorage.setItem(
        "token",
        "123456789"
      );

      localStorage.setItem(
        "role",
        "admin"
      );

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Super Admin",
          email:
            "admin@clarito.com",
        })
      );

      // Redirect

      navigate("/admin");
    } else {
      alert(
        "Invalid Email or Password."
      );
    }
  };

  return (
    <section
      className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-gray-100
      px-6
      py-12
      "
    >
      <div
        className="
        w-full
        max-w-lg
        rounded-3xl
        bg-white
        p-8
        shadow-xl
        "
      >
        {/* Logo */}

        <div className="text-center">
          <h1
            className="
            text-5xl
            font-bold
            text-amber-500
            "
          >
            CLARITO
          </h1>

          <p className="mt-3 text-gray-500">
            Super Admin Login Panel
          </p>
        </div>

        {/* Admin Icon */}

        <div
          className="
          mt-8
          flex
          justify-center
          "
        >
          <div
            className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-amber-100
            text-4xl
            text-amber-500
            "
          >
            <FaUserShield />
          </div>
        </div>

        {/* Login Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          {/* Email */}

          <div>
            <label
              className="
              mb-2
              block
              font-semibold
              text-gray-700
              "
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              px-5
              py-4
              outline-none
              focus:border-amber-500
              focus:bg-white
              "
            />
          </div>

          {/* Password */}

          <div>
            <label
              className="
              mb-2
              block
              font-semibold
              text-gray-700
              "
            >
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
                placeholder="Enter password"
                className="
                w-full
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                px-5
                py-4
                pr-14
                outline-none
                focus:border-amber-500
                focus:bg-white
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
                right-5
                top-1/2
                -translate-y-1/2
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

          {/* Remember Me */}

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
              text-gray-600
              "
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() =>
                  setRememberMe(
                    !rememberMe
                  )
                }
              />

              Remember Me
            </label>

            <Link
              to="/"
              className="
              font-semibold
              text-amber-500
              hover:text-amber-600
              "
            >
              Back to Home
            </Link>
          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-amber-500
            py-4
            text-lg
            font-semibold
            text-white
            transition
            duration-300
            hover:bg-amber-600
            "
          >
            <FaLock />

            Login as Admin
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;