import { useState } from "react";

import {
  FaUserPlus,
  FaUpload,
} from "react-icons/fa";

const AddEmployee = () => {
  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      email: "",
      service: "",
      experience: "",
      salary: "",
      address: "",
      availability: "Available",
      status: "Active",
    });

  const handleChange = (event) => {
    const { name, value } =
      event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    alert(
      "Employee Added Successfully."
    );

    // Future API Integration
  };

  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      {/* Heading */}

      <div>
        <h2
          className="
          text-3xl
          font-bold
          text-gray-800
          "
        >
          Add New Employee
        </h2>

        <p className="mt-2 text-gray-500">
          Register a new service
          provider.
        </p>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        {/* Inputs */}

        <div
          className="
          grid
          gap-6
          md:grid-cols-2
          "
        >
          {/* Name */}

          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-5
            py-4
            outline-none
            focus:border-amber-500
            "
          />

          {/* Phone */}

          <input
            type="number"
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-5
            py-4
            outline-none
            focus:border-amber-500
            "
          />

          {/* Email */}

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-5
            py-4
            outline-none
            focus:border-amber-500
            "
          />

          {/* Experience */}

          <input
            type="text"
            name="experience"
            required
            placeholder="Experience"
            value={
              formData.experience
            }
            onChange={handleChange}
            className="
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-5
            py-4
            outline-none
            focus:border-amber-500
            "
          />

          {/* Salary */}

          <input
            type="number"
            name="salary"
            required
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-5
            py-4
            outline-none
            focus:border-amber-500
            "
          />

          {/* Services */}

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-5
            py-4
            outline-none
            focus:border-amber-500
            "
          >
            <option value="">
              Select Service
            </option>

            <option>
              Electrician
            </option>

            <option>
              Plumber
            </option>

            <option>
              Cleaning
            </option>

            <option>
              Carpenter
            </option>

            <option>
              AC Technician
            </option>

            <option>
              Painter
            </option>

            <option>
              Pest Control
            </option>
          </select>
        </div>

        {/* Address */}

        <textarea
          rows="4"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="
          w-full
          rounded-2xl
          border
          border-gray-200
          bg-gray-50
          p-5
          outline-none
          focus:border-amber-500
          "
        />

        {/* Status */}

        <div
          className="
          grid
          gap-6
          md:grid-cols-2
          "
        >
          <select
            name="availability"
            value={
              formData.availability
            }
            onChange={handleChange}
            className="
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-5
            py-4
            "
          >
            <option>
              Available
            </option>

            <option>
              Unavailable
            </option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            px-5
            py-4
            "
          >
            <option>
              Active
            </option>

            <option>
              Inactive
            </option>
          </select>
        </div>

        {/* Upload */}

        <label
          className="
          flex
          cursor-pointer
          items-center
          justify-center
          gap-3
          rounded-2xl
          border-2
          border-dashed
          border-gray-300
          p-8
          text-gray-600
          "
        >
          <FaUpload />

          Upload Profile Image

          <input
            type="file"
            hidden
          />
        </label>

        {/* Button */}

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
          font-semibold
          text-white
          transition
          hover:bg-amber-600
          "
        >
          <FaUserPlus />

          Add Employee
        </button>
      </form>
    </section>
  );
};

export default AddEmployee;