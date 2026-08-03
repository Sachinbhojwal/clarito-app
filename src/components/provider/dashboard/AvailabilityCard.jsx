import { useState } from "react";

import {
  FiMapPin,
  FiClock,
} from "react-icons/fi";

const AvailabilityCard = () => {
  const [available, setAvailable] =
    useState(true);

  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        "
      >
        <div>
          <h2
            className="
            text-2xl
            font-bold
            "
          >
            Availability
          </h2>

          <p className="text-gray-500">
            Manage your working status
          </p>
        </div>

        <button
          onClick={() =>
            setAvailable(
              !available
            )
          }
          className={`
          rounded-full
          px-5
          py-2
          font-semibold
          text-white
          transition
          ${available
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
            }
          `}
        >
          {available
            ? "Available"
            : "Offline"}
        </button>
      </div>

      <div className="mt-8 space-y-5">
        <div
          className="
          flex
          items-center
          gap-4
          rounded-2xl
          bg-gray-50
          p-4
          "
        >
          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-blue-100
            text-blue-600
            "
          >
            <FiClock size={22} />
          </div>

          <div>
            <p className="text-gray-500">
              Working Hours
            </p>

            <h3 className="font-bold">
              09:00 AM - 06:00 PM
            </h3>
          </div>
        </div>

        <div
          className="
          flex
          items-center
          gap-4
          rounded-2xl
          bg-gray-50
          p-4
          "
        >
          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-green-100
            text-green-600
            "
          >
            <FiMapPin size={22} />
          </div>

          <div>
            <p className="text-gray-500">
              Service Area
            </p>

            <h3 className="font-bold">
              Surat, Gujarat
            </h3>
          </div>
        </div>
      </div>

      <button
        className="
        mt-8
        w-full
        rounded-2xl
        bg-green-500
        py-3
        font-semibold
        text-white
        transition
        hover:bg-green-600
        "
      >
        Update Availability
      </button>
    </section>
  );
};

export default AvailabilityCard;