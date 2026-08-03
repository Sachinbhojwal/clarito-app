const DocumentsDetails = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">
        Documents Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mt-6">

        {/* Profile Photo */}

        <div>
          <label className="font-medium">
            Profile Photo URL
          </label>

          <input
            type="text"
            name="profileImage"
            value={
              formData.profileImage
            }
            onChange={handleChange}
            placeholder="Enter Image URL"
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

        {/* Aadhaar */}

        <div>
          <label className="font-medium">
            Aadhaar Number
          </label>

          <input
            type="text"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={handleChange}
            placeholder="XXXX XXXX XXXX"
            className="
              mt-2
              w-full
              border
              rounded-xl
              px-4
              py-3
            "
            maxLength={12}
          />
        </div>

        {/* PAN */}

        <div>
          <label className="font-medium">
            PAN Number
          </label>

          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            placeholder="ABCDE1234F"
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

      </div>
    </div>
  );
};

export default DocumentsDetails;