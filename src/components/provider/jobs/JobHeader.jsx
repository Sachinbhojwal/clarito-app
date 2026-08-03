import { FiX } from "react-icons/fi";

const JobHeader = ({
  bookingId,
  onClose,
}) => {
  return (
    <div
      className="
      flex
      items-center
      justify-between
      border-b
      p-6
      "
    >
      <div>
        <h2
          className="
          text-2xl
          font-bold
          "
        >
          Job Details
        </h2>

        <p
          className="
          mt-1
          text-gray-500
          "
        >
          Booking ID : {bookingId}
        </p>
      </div>

      <button
        onClick={onClose}
        className="
        rounded-xl
        p-3
        hover:bg-gray-100
        "
      >
        <FiX size={24} />
      </button>
    </div>
  );
};

export default JobHeader;