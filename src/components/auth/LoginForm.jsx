import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const users =
        JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (item) =>
          item.email.trim().toLowerCase() ===
          formData.email.trim().toLowerCase() &&
          item.password === formData.password
      );

      if (!user) {
        alert("Invalid Email or Password");
        return;
      }

      login(user);

      if (rememberMe) {
        localStorage.setItem(
          "rememberUser",
          JSON.stringify(user)
        );
      }

      if (user.role === "provider") {
        navigate("/provider-dashboard");
      } else {
        navigate("/customer-dashboard");
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

        <p className="text-gray-500 mt-3">
          Login to continue using Clarito
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >

        {/* Email */}

        <div>

          <label className="font-semibold block mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
          />

        </div>

        {/* Password */}

        <div>

          <label className="font-semibold block mb-2">
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
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full border rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-amber-500 outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-4 text-gray-500"
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

        <div className="flex justify-between items-center">

          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() =>
                setRememberMe(!rememberMe)
              }
            />

            Remember Me

          </label>

          <Link
            to="/forgot-password"
            className="text-amber-500 font-semibold"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-xl font-bold transition"
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
            className="text-amber-500 font-bold ml-2"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
};

export default LoginForm;