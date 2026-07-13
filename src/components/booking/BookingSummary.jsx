import { services } from "../../data/services";

const BookingSummary = ({ formData }) => {
  const selectedService = services.find(
    (service) => service.title === formData.service
  );

  const price = selectedService ? selectedService.price : 0;

  return (
    <div className="sticky top-24">

      <div className="bg-white rounded-3xl shadow-xl p-8">

        {/* Heading */}

        <h2 className="text-3xl font-bold text-gray-900">
          Booking Summary
        </h2>

        <p className="mt-2 text-gray-500">
          Review your booking details.
        </p>

        {/* Summary */}

        <div className="mt-8 space-y-5">

          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-500">
              Service
            </span>

            <span className="font-semibold text-right">
              {formData.service || "-"}
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-500">
              Customer
            </span>

            <span className="font-semibold text-right">
              {formData.name || "-"}
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-500">
              Booking Date
            </span>

            <span className="font-semibold text-right">
              {formData.date || "-"}
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-500">
              Time Slot
            </span>

            <span className="font-semibold text-right">
              {formData.time || "-"}
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-500">
              Mobile
            </span>

            <span className="font-semibold text-right">
              {formData.phone || "-"}
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-500">
              Address
            </span>

            <span className="font-semibold text-right">
              {formData.house
                ? `${formData.house}, ${formData.street}, ${formData.city}`
                : "-"}
            </span>
          </div>

        </div>

        {/* Price */}

        <div className="mt-8 border-t pt-6">

          <div className="flex justify-between items-center">

            <span className="text-xl font-semibold">
              Total Amount
            </span>

            <span className="text-3xl font-bold text-amber-500">
              ₹{price}
            </span>

          </div>

        </div>

        {/* Button */}

        <button
          type="submit"
          className="
            mt-8
            w-full
            bg-amber-500
            hover:bg-amber-600
            text-white
            py-4
            rounded-xl
            font-semibold
            transition
          "
        >
          Confirm Booking
        </button>

      </div>

    </div>
  );
};

export default BookingSummary;