const PaymentHistory = ({
  transactions,
}) => {
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
      <div
        className="
        mb-6
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
          Payment History
        </h2>

        <button
          className="
          rounded-xl
          border
          border-gray-300
          px-4
          py-2
          text-sm
          font-semibold
          transition
          hover:bg-gray-100
          "
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map(
          (transaction) => (
            <div
              key={transaction.id}
              className="
              flex
              flex-col
              gap-4
              rounded-2xl
              border
              border-gray-200
              p-5
              md:flex-row
              md:items-center
              md:justify-between
              "
            >
              {/* Left */}

              <div>
                <h3
                  className="
                  text-lg
                  font-semibold
                  "
                >
                  {
                    transaction.customer
                  }
                </h3>

                <p
                  className="
                  mt-1
                  text-gray-500
                  "
                >
                  {
                    transaction.service
                  }
                </p>

                <p
                  className="
                  mt-1
                  text-sm
                  text-gray-400
                  "
                >
                  {
                    transaction.date
                  }
                </p>
              </div>

              {/* Right */}

              <div
                className="
                text-right
                "
              >
                <h3
                  className="
                  text-2xl
                  font-bold
                  text-green-600
                  "
                >
                  ₹
                  {
                    transaction.amount
                  }
                </h3>

                <span
                  className={`
                    mt-2
                    inline-block
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold

                    ${transaction.status ===
                      "Paid"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                    }
                  `}
                >
                  {
                    transaction.status
                  }
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default PaymentHistory;