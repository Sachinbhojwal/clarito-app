import { useState } from "react";

const WithdrawCard = ({
  availableBalance,
}) => {
  const [amount, setAmount] =
    useState("");

  const handleWithdraw = () => {
    if (!amount) {
      alert(
        "Please enter an amount."
      );
      return;
    }

    if (
      Number(amount) >
      availableBalance
    ) {
      alert(
        "Insufficient balance."
      );
      return;
    }

    alert(
      `₹${amount} withdrawal request submitted successfully.`
    );

    setAmount("");
  };

  return (
    <section
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-6
      shadow-sm
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        "
      >
        Withdraw Earnings
      </h2>

      <p
        className="
        mt-2
        text-gray-500
        "
      >
        Transfer your earnings
        directly to your bank account.
      </p>

      {/* Balance */}

      <div
        className="
        mt-6
        rounded-2xl
        bg-green-50
        p-5
        "
      >
        <p
          className="
          text-gray-600
          "
        >
          Available Balance
        </p>

        <h3
          className="
          mt-2
          text-3xl
          font-bold
          text-green-600
          "
        >
          ₹{availableBalance}
        </h3>
      </div>

      {/* Bank */}

      <div className="mt-6">
        <label
          className="
          mb-2
          block
          font-semibold
          "
        >
          Bank Account
        </label>

        <input
          type="text"
          value="XXXX XXXX XXXX 4589"
          readOnly
          className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-gray-100
          px-4
          py-3
          "
        />
      </div>

      {/* Amount */}

      <div className="mt-5">
        <label
          className="
          mb-2
          block
          font-semibold
          "
        >
          Withdraw Amount
        </label>

        <input
          type="number"
          value={amount}
          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }
          placeholder="Enter amount"
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

      {/* Button */}

      <button
        onClick={
          handleWithdraw
        }
        className="
        mt-6
        w-full
        rounded-2xl
        bg-amber-500
        py-3
        font-semibold
        text-white
        transition
        hover:bg-amber-600
        "
      >
        Withdraw Now
      </button>
    </section>
  );
};

export default WithdrawCard;