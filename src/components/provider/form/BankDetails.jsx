const BankDetails = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">
        Bank Details
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mt-6">

        {/* Account Number */}

        <div>
          <label className="font-medium">
            Account Number
          </label>

          <input
            type="text"
            name="accountNumber"
            value={
              formData.accountNumber
            }
            onChange={handleChange}
            placeholder="Enter Account Number"
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

        {/* IFSC */}

        <div>
          <label className="font-medium">
            IFSC Code
          </label>

          <input
            type="text"
            name="ifsc"
            value={formData.ifsc}
            onChange={handleChange}
            placeholder="SBIN0001234"
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

        {/* UPI */}

        <div className="md:col-span-2">
          <label className="font-medium">
            UPI ID
          </label>

          <input
            type="text"
            name="upi"
            value={formData.upi}
            onChange={handleChange}
            placeholder="example@upi"
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

export default BankDetails;