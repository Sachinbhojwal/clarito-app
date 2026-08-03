import JobHeader from "./JobHeader";
import CustomerInfo from "./CustomerInfo";
import BookingInfo from "./BookingInfo";
import JobActions from "./JobActions";

const JobDetailsModal = ({
  job,
  onClose,
  onAccept,
  onReject,
  onStart,
  onComplete,
  onReceipt,
}) => {
  if (!job) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/50
      p-5
      "
    >
      <div
        className="
        w-full
        max-w-6xl
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-2xl
        "
      >
        {/* Header */}

        <JobHeader
          bookingId={job.bookingId}
          onClose={onClose}
        />

        {/* Body */}

        <div
          className="
          grid
          gap-6
          p-6
          lg:grid-cols-2
          "
        >
          <CustomerInfo
            customer={job.customer}
            address={job.address}
          />

          <BookingInfo
            job={job}
          />
        </div>

        {/* Footer */}

        <div
          className="
          border-t
          p-6
          "
        >
          <JobActions
            job={job}
            onAccept={onAccept}
            onReject={onReject}
            onStart={onStart}
            onComplete={onComplete}
            onReceipt={onReceipt}
          />
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;