import { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

const DeleteAccount = () => {
  const [confirmed, setConfirmed] =
    useState(false);

  const handleDelete = () => {
    if (!confirmed) {
      alert(
        "Please confirm before deleting your account."
      );
      return;
    }

    const isConfirmed =
      window.confirm(
        "Are you sure you want to permanently delete your account? This action cannot be undone."
      );

    if (!isConfirmed) {
      return;
    }

    // Future Backend API

    alert(
      "Your account deletion request has been submitted."
    );
  };

  return (
    <section
      className="
      rounded-3xl
      border
      border-red-200
      bg-red-50
      p-8
      shadow-sm
      "
    >
      {/* Header */}

      <h2
        className="
        text-2xl
        font-bold
        text-red-600
        "
      >
        Danger Zone
      </h2>

      <p
        className="
        mt-3
        text-gray-600
        leading-7
        "
      >
        Deleting your account will permanently remove your
        profile, bookings, earnings, reviews and all related
        data. This action cannot be undone.
      </p>

      {/* Confirmation */}

      <label
        className="
        mt-8
        flex
        items-start
        gap-3
        "
      >
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) =>
            setConfirmed(
              e.target.checked
            )
          }
          className="
          mt-1
          h-5
          w-5
          "
        />

        <span
          className="
          text-gray-700
          "
        >
          I understand that this action is permanent and I
          want to delete my account.
        </span>
      </label>

      {/* Button */}

      <div className="mt-8">
        <button
          type="button"
          onClick={handleDelete}
          disabled={!confirmed}
          className="
          flex
          items-center
          gap-3
          rounded-xl
          bg-red-600
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-red-700
          disabled:cursor-not-allowed
          disabled:opacity-50
          "
        >
          <FaTrashAlt />

          Delete Account
        </button>
      </div>
    </section>
  );
};

export default DeleteAccount;