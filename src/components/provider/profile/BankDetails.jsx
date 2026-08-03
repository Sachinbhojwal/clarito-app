const BankDetails = ({
  profile,
  setProfile,
}) => {
  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        Bank Details
      </h2>

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        "
      >
        {/* Bank Name */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Bank Name
          </label>

          <input
            type="text"
            name="bankName"
            value={profile.bankName}
            onChange={handleChange}
            placeholder="State Bank of India"
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-amber-500
            "
          />
        </div>

        {/* Account Holder */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Account Holder Name
          </label>

          <input
            type="text"
            name="accountHolder"
            value={
              profile.accountHolder ||
              ""
            }
            onChange={handleChange}
            placeholder="Enter account holder name"
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-amber-500
            "
          />
        </div>

        {/* Account Number */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            Account Number
          </label>

          <input
            type="text"
            name="accountNumber"
            value={
              profile.accountNumber
            }
            onChange={handleChange}
            placeholder="Enter account number"
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-amber-500
            "
          />
        </div>

        {/* IFSC */}

        <div>
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            IFSC Code
          </label>

          <input
            type="text"
            name="ifsc"
            value={profile.ifsc}
            onChange={handleChange}
            placeholder="SBIN0001234"
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            uppercase
            outline-none
            focus:border-amber-500
            "
          />
        </div>

        {/* UPI */}

        <div className="md:col-span-2">
          <label
            className="
            mb-2
            block
            font-semibold
            "
          >
            UPI ID
          </label>

          <input
            type="text"
            name="upiId"
            value={
              profile.upiId || ""
            }
            onChange={handleChange}
            placeholder="example@upi"
            className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            focus:border-amber-500
            "
          />
        </div>
      </div>
    </section>
  );
};

export default BankDetails;