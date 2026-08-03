import { useState } from "react";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSave,
} from "react-icons/fa";

const CustomerProfile = () => {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    address: user.address || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedUser = {
      ...user,
      ...formData,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    alert("Profile Updated Successfully");
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-4xl px-5">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          {/* Header */}

          <div className="flex flex-col items-center">
            <div
              className="
              flex
              h-28
              w-28
              items-center
              justify-center
              rounded-full
              bg-amber-500
              text-4xl
              font-bold
              text-white
              "
            >
              {formData.name
                ? formData.name
                  .charAt(0)
                  .toUpperCase()
                : "C"}
            </div>

            <h1 className="mt-5 text-3xl font-bold">
              Customer Profile
            </h1>

            <p className="mt-2 text-gray-500">
              Update your personal information.
            </p>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}

              <div>
                <label className="mb-2 flex items-center gap-2 font-semibold">
                  <FaUser />
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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

              {/* Email */}

              <div>
                <label className="mb-2 flex items-center gap-2 font-semibold">
                  <FaEnvelope />
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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

              {/* Phone */}

              <div>
                <label className="mb-2 flex items-center gap-2 font-semibold">
                  <FaPhone />
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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

              {/* Address */}

              <div>
                <label className="mb-2 flex items-center gap-2 font-semibold">
                  <FaMapMarkerAlt />
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
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
            </div>

            {/* Button */}

            <button
              type="submit"
              className="
              flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-amber-500
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-amber-600
              "
            >
              <FaSave />
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CustomerProfile;