import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PersonalDetails from "./form/PersonalDetails";
import AddressDetails from "./form/AddressDetails";
import ProfessionalDetails from "./form/ProfessionalDetails";
import DocumentsDetails from "./form/DocumentsDetails";
import BankDetails from "./form/BankDetails";

const ProviderForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      // Personal
      name: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",

      // Address
      state: "",
      city: "",
      address: "",
      pincode: "",

      // Professional
      experience: "",
      workingRadius: "",
      availability: "",
      services: [],

      // Documents
      profileImage: "",
      aadhaar: "",
      pan: "",

      // Bank
      accountNumber: "",
      ifsc: "",
      upi: "",
    });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user =
      JSON.parse(
        localStorage.getItem("user")
      ) || {};

    const updatedUser = {
      ...user,
      providerProfile:
        formData,
      profileCompleted: true,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(
        updatedUser
      )
    );

    alert(
      "Profile completed successfully!"
    );

    navigate(
      "/provider-dashboard"
    );
  };

  return (
    <section className="bg-white rounded-3xl shadow-lg p-8">
      <h1 className="text-4xl font-bold">
        Complete Provider Profile
      </h1>

      <p className="mt-3 text-gray-500">
        Fill in your details to
        start receiving jobs.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8"
      >
        <PersonalDetails
          formData={formData}
          handleChange={
            handleChange
          }
        />

        <AddressDetails
          formData={formData}
          handleChange={
            handleChange
          }
        />

        <ProfessionalDetails
          formData={formData}
          handleChange={
            handleChange
          }
        />

        <DocumentsDetails
          formData={formData}
          handleChange={
            handleChange
          }
        />

        <BankDetails
          formData={formData}
          handleChange={
            handleChange
          }
        />

        <button
          type="submit"
          className="
            mt-10
            w-full
            rounded-xl
            bg-amber-500
            px-6
            py-4
            font-semibold
            text-white
            hover:bg-amber-600
          "
        >
          Save Profile
        </button>
      </form>
    </section>
  );
};

export default ProviderForm;