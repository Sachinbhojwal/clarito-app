import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import { heroSlides } from "../../data/heroSliders";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: "customer",
    });

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (
        formData.password !==
        formData.confirmPassword
      ) {
        alert(
          "Passwords do not match."
        );
        return;
      }

      const users =
        JSON.parse(
          localStorage.getItem(
            "users"
          )
        ) || [];

      const userExists =
        users.find(
          (user) =>
            user.email ===
            formData.email
        );

      if (userExists) {
        alert(
          "Email already registered."
        );
        return;
      }

      const newUser = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password:
          formData.password,
        role: formData.role,
      };

      users.push(newUser);

      localStorage.setItem(
        "users",
        JSON.stringify(users)
      );

      alert(
        "Registration Successful!"
      );

      navigate("/login");
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100">
      {/* Back Button */}

      <button
        onClick={handleBack}
        className="
        absolute
        top-8
        left-8
        z-50
        font-semibold
        hover:text-yellow-500
        transition
        "
      >
        ← Back
      </button>

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT SIDE SWIPER */}

        <div className="hidden lg:block relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction:
                false,
            }}
            loop={true}
            className="h-screen"
          >
            {heroSlides.map(
              (slide) => (
                <SwiperSlide
                  key={slide.id}
                >
                  <div className="relative h-screen">
                    <img
                      src={
                        slide.image
                      }
                      alt={
                        slide.title
                      }
                      className="
                      w-full
                      h-full
                      object-cover
                      "
                    />

                    <div className="absolute inset-0 bg-black/50"></div>

                    <div
                      className="
                      absolute
                      inset-0
                      flex
                      flex-col
                      justify-center
                      items-center
                      text-white
                      px-10
                      "
                    >
                      <h1 className="text-6xl font-bold">
                        Clarito
                      </h1>

                      <p className="mt-4 text-3xl font-semibold">
                        {
                          slide.title
                        }
                      </p>

                      <p className="mt-4 text-center max-w-md text-lg">
                        Join
                        India's
                        trusted
                        home
                        service
                        platform.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* RIGHT SIDE FORM */}

        <div className="flex items-center justify-center px-6 py-12">
          <div
            className="
            w-full
            max-w-md
            bg-white
            p-8
            rounded-3xl
            shadow-lg
            "
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold">
                Create
                Account
              </h2>

              <p className="mt-2 text-gray-500">
                Register to get
                started
              </p>
            </div>

            <form
              onSubmit={
                handleSubmit
              }
              className="mt-8 space-y-5"
            >
              {/* Name */}

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={
                    formData.name
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter full name"
                  required
                  className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-500
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter email"
                  required
                  className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-500
                  "
                />
              </div>

              {/* Phone */}

              <div>
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={
                    formData.phone
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter phone number"
                  required
                  className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-500
                  "
                />
              </div>

              {/* Password */}

              <div>
                <label className="block mb-2 font-medium">
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
                    value={
                      formData.password
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Create password"
                    required
                    className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-3
                    pr-12
                    focus:outline-none
                    focus:ring-2
                    focus:ring-yellow-500
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

              {/* Confirm Password */}

              <div>
                <label className="block mb-2 font-medium">
                  Confirm
                  Password
                </label>

                <div className="relative">
                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    value={
                      formData.confirmPassword
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Confirm password"
                    required
                    className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-3
                    pr-12
                    focus:outline-none
                    focus:ring-2
                    focus:ring-yellow-500
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="
                    absolute
                    right-4
                    top-4
                    text-gray-500
                    "
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>
                </div>
              </div>

              {/* Role */}

              <div>
                <label className="block mb-3 font-medium">
                  Select
                  Role
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`border rounded-xl p-4 cursor-pointer text-center ${formData.role ===
                        "customer"
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-gray-300"
                      }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="customer"
                      checked={
                        formData.role ===
                        "customer"
                      }
                      onChange={
                        handleChange
                      }
                      className="hidden"
                    />

                    Customer
                  </label>

                  <label
                    className={`border rounded-xl p-4 cursor-pointer text-center ${formData.role ===
                        "provider"
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-gray-300"
                      }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="provider"
                      checked={
                        formData.role ===
                        "provider"
                      }
                      onChange={
                        handleChange
                      }
                      className="hidden"
                    />

                    Provider
                  </label>
                </div>
              </div>

              {/* Button */}

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                bg-yellow-500
                hover:bg-yellow-600
                text-white
                py-3
                rounded-xl
                font-semibold
                transition
                "
              >
                {loading
                  ? "Creating Account..."
                  : "Create Account"}
              </button>

              {/* Login */}

              <p className="text-center text-gray-600">
                Already have an
                account?{" "}
                <Link
                  to="/login"
                  className="text-yellow-500 font-semibold"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;