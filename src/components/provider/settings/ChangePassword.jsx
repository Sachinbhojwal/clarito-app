import { useState } from "react";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const ChangePassword = () => {
  const [form, setForm] =
    useState({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  const [showPassword, setShowPassword] =
    useState({
      current: false,
      new: false,
      confirm: false,
    });

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const renderInput = (
    label,
    name,
    field
  ) => (
    <div>
      <label
        className="
        mb-2
        block
        font-semibold
        "
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={
            showPassword[field]
              ? "text"
              : "password"
          }
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={label}
          className="
          w-full
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          pr-12
          outline-none
          focus:border-amber-500
          "
        />

        <button
          type="button"
          onClick={() =>
            togglePassword(field)
          }
          className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-gray-500
          "
        >
          {showPassword[field] ? (
            <FaEyeSlash />
          ) : (
            <FaEye />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <section
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-8
      shadow-sm
      "
    >
      <h2
        className="
        mb-8
        text-2xl
        font-bold
        "
      >
        Change Password
      </h2>

      <div
        className="
        space-y-6
        "
      >
        {renderInput(
          "Current Password",
          "currentPassword",
          "current"
        )}

        {renderInput(
          "New Password",
          "newPassword",
          "new"
        )}

        {renderInput(
          "Confirm Password",
          "confirmPassword",
          "confirm"
        )}
      </div>
    </section>
  );
};

export default ChangePassword;