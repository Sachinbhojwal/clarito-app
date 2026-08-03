const ProfileCompletion = ({
  profile,
}) => {
  const fields = [
    "name",
    "email",
    "phone",
    "about",
    "service",
    "experience",
    "startingPrice",
    "languages",
    "availableSince",
    "address",
    "city",
    "state",
    "pincode",
    "bankName",
    "accountHolder",
    "accountNumber",
    "ifsc",
    "upiId",
    "aadhaar",
    "pan",
  ];

  const completedFields =
    fields.filter((field) => {
      const value =
        profile[field];

      return (
        value !== undefined &&
        value !== null &&
        String(value)
          .trim()
          .length > 0
      );
    }).length;

  const percentage =
    Math.round(
      (completedFields /
        fields.length) *
      100
    );

  const missingFields =
    fields.filter((field) => {
      const value =
        profile[field];

      return (
        value === undefined ||
        value === null ||
        String(value)
          .trim() === ""
      );
    });

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
      {/* Header */}

      <div
        className="
        flex
        items-center
        justify-between
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          "
        >
          Profile Completion
        </h2>

        <span
          className="
          text-2xl
          font-bold
          text-green-600
          "
        >
          {percentage}%
        </span>
      </div>

      {/* Progress */}

      <div
        className="
        mt-6
        h-4
        overflow-hidden
        rounded-full
        bg-gray-200
        "
      >
        <div
          style={{
            width: `${percentage}%`,
          }}
          className="
          h-full
          rounded-full
          bg-green-500
          transition-all
          duration-500
          "
        />
      </div>

      {/* Status */}

      <p
        className="
        mt-4
        text-gray-600
        "
      >
        {completedFields} of{" "}
        {fields.length} profile
        fields completed.
      </p>

      {/* Missing */}

      {missingFields.length >
        0 && (
          <div className="mt-8">
            <h3
              className="
            mb-3
            font-semibold
            text-red-500
            "
            >
              Missing Information
            </h3>

            <ul
              className="
            list-disc
            space-y-2
            pl-5
            text-gray-600
            "
            >
              {missingFields.map(
                (field) => (
                  <li key={field}>
                    {field}
                  </li>
                )
              )}
            </ul>
          </div>
        )}

      {percentage === 100 && (
        <div
          className="
          mt-8
          rounded-2xl
          bg-green-50
          p-5
          text-green-600
          font-semibold
          "
        >
          🎉 Congratulations!
          Your profile is
          complete.
        </div>
      )}
    </section>
  );
};

export default ProfileCompletion;