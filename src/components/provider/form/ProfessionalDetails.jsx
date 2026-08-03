const ProfessionalDetails = ({
  formData,
  handleChange,
}) => {
  const services = [
    "Electrician",
    "Plumber",
    "Carpenter",
    "Cleaning",
    "AC Repair",
    "Painter",
    "Appliance Repair",
  ];

  const handleServiceChange = (
    service
  ) => {
    const updatedServices =
      formData.services.includes(
        service
      )
        ? formData.services.filter(
          (item) =>
            item !== service
        )
        : [
          ...formData.services,
          service,
        ];

    handleChange({
      target: {
        name: "services",
        value:
          updatedServices,
      },
    });
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">
        Professional Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mt-6">

        {/* Experience */}

        <div>
          <label className="font-medium">
            Experience
          </label>

          <input
            type="text"
            name="experience"
            value={
              formData.experience
            }
            onChange={handleChange}
            placeholder="Eg. 3 Years"
            className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
            "
          />
        </div>

        {/* Working Radius */}

        <div>
          <label className="font-medium">
            Working Radius
          </label>

          <select
            name="workingRadius"
            value={
              formData.workingRadius
            }
            onChange={handleChange}
            className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
            "
          >
            <option value="">
              Select Radius
            </option>

            <option value="5 KM">
              5 KM
            </option>

            <option value="10 KM">
              10 KM
            </option>

            <option value="15 KM">
              15 KM
            </option>

            <option value="20 KM">
              20 KM
            </option>
          </select>
        </div>

        {/* Availability */}

        <div>
          <label className="font-medium">
            Availability
          </label>

          <select
            name="availability"
            value={
              formData.availability
            }
            onChange={handleChange}
            className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
            "
          >
            <option value="">
              Select Status
            </option>

            <option value="Available">
              Available
            </option>

            <option value="Unavailable">
              Unavailable
            </option>
          </select>
        </div>

      </div>

      {/* Services */}

      <div className="mt-8">
        <label className="font-medium">
          Select Services
        </label>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {services.map(
            (service) => (
              <label
                key={service}
                className={`
                  border
                  rounded-xl
                  p-4
                  cursor-pointer
                  text-center

                  ${formData.services.includes(
                  service
                )
                    ? "bg-yellow-50 border-yellow-500"
                    : ""
                  }
                `}
              >
                <input
                  type="checkbox"
                  checked={formData.services.includes(
                    service
                  )}
                  onChange={() =>
                    handleServiceChange(
                      service
                    )
                  }
                  className="hidden"
                />

                {service}
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;