import { FaFileUpload } from "react-icons/fa";

const Documents = ({
  profile,
  setProfile,
}) => {
  const handleFileChange = (
    event
  ) => {
    const { name, files } =
      event.target;

    if (!files.length) {
      return;
    }

    setProfile((prev) => ({
      ...prev,
      [name]: files[0].name,
    }));
  };

  const UploadField = ({
    label,
    name,
  }) => (
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

      <label
        className="
        flex
        cursor-pointer
        items-center
        justify-between
        rounded-2xl
        border
        border-dashed
        border-gray-300
        px-5
        py-4
        transition
        hover:border-amber-500
        "
      >
        <div>
          <p className="font-medium">
            {profile[name]
              ? profile[name]
              : "Choose File"}
          </p>

          <p
            className="
            mt-1
            text-sm
            text-gray-500
            "
          >
            PDF, JPG or PNG
          </p>
        </div>

        <FaFileUpload
          className="
          text-2xl
          text-amber-500
          "
        />

        <input
          type="file"
          name={name}
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={
            handleFileChange
          }
          className="hidden"
        />
      </label>
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
        Verification Documents
      </h2>

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        "
      >
        <UploadField
          label="Aadhaar Card"
          name="aadhaar"
        />

        <UploadField
          label="PAN Card"
          name="pan"
        />

        <UploadField
          label="Experience Certificate"
          name="experienceCertificate"
        />

        <div
          className="
          rounded-2xl
          border
          border-gray-200
          bg-green-50
          p-6
          "
        >
          <h3
            className="
            text-lg
            font-semibold
            "
          >
            Verification Status
          </h3>

          <p
            className="
            mt-3
            font-bold
            text-green-600
            "
          >
            Verified ✅
          </p>

          <p
            className="
            mt-2
            text-sm
            text-gray-500
            "
          >
            Your submitted
            documents have been
            successfully verified.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Documents;