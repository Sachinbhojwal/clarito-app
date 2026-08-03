import {
  FiCheck,
  FiX,
  FiPlay,
  FiCheckCircle,
  FiDownload,
} from "react-icons/fi";

const JobActions = ({
  job,
  onAccept,
  onReject,
  onStart,
  onComplete,
  onReceipt,
}) => {
  return (
    <section
      className="
      rounded-3xl
      border
      border-gray-200
      p-6
      "
    >
      <h3
        className="
        mb-6
        text-xl
        font-bold
        "
      >
        Job Actions
      </h3>

      <div className="space-y-4">

        {/* Pending */}

        {job.status === "Pending" && (
          <>
            <button
              onClick={() =>
                onAccept(job.id)
              }
              className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-green-500
              py-3
              font-semibold
              text-white
              transition
              hover:bg-green-600
              "
            >
              <FiCheck />

              Accept Job
            </button>

            <button
              onClick={() =>
                onReject(job.id)
              }
              className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-red-500
              py-3
              font-semibold
              text-white
              transition
              hover:bg-red-600
              "
            >
              <FiX />

              Reject Job
            </button>
          </>
        )}

        {/* Accepted */}

        {job.status === "Accepted" && (
          <button
            onClick={() =>
              onStart(job.id)
            }
            className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-purple-500
            py-3
            font-semibold
            text-white
            transition
            hover:bg-purple-600
            "
          >
            <FiPlay />

            Start Work
          </button>
        )}

        {/* In Progress */}

        {job.status ===
          "In Progress" && (
            <button
              onClick={() =>
                onComplete(job.id)
              }
              className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-blue-500
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-600
            "
            >
              <FiCheckCircle />

              Complete Job
            </button>
          )}

        {/* Completed */}

        {job.status ===
          "Completed" && (
            <button
              onClick={() =>
                onReceipt(job.id)
              }
              className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-gray-900
            py-3
            font-semibold
            text-white
            transition
            hover:bg-black
            "
            >
              <FiDownload />

              Download Receipt
            </button>
          )}

      </div>
    </section>
  );
};

export default JobActions;