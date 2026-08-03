const RecentTransactions = ({
  transactions,
}) => {
  return (
    <section
      className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      shadow-sm
      "
    >
      {/* Header */}

      <div
        className="
        border-b
        border-gray-200
        p-6
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          "
        >
          Recent Transactions
        </h2>
      </div>

      {/* Desktop */}

      <div
        className="
        hidden
        overflow-x-auto
        lg:block
        "
      >
        <table className="w-full">
          <thead
            className="
            bg-gray-50
            "
          >
            <tr>
              <th className="px-6 py-4 text-left">
                Customer
              </th>

              <th className="px-6 py-4 text-left">
                Service
              </th>

              <th className="px-6 py-4 text-left">
                Date
              </th>

              <th className="px-6 py-4 text-left">
                Amount
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(
              (transaction) => (
                <tr
                  key={transaction.id}
                  className="
                  border-t
                  border-gray-100
                  "
                >
                  <td className="px-6 py-5">
                    {transaction.customer}
                  </td>

                  <td className="px-6 py-5">
                    {transaction.service}
                  </td>

                  <td className="px-6 py-5">
                    {transaction.date}
                  </td>

                  <td
                    className="
                    px-6
                    py-5
                    font-semibold
                    text-green-600
                    "
                  >
                    ₹
                    {transaction.amount}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`
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
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile */}

      <div
        className="
        space-y-4
        p-5
        lg:hidden
        "
      >
        {transactions.map(
          (transaction) => (
            <div
              key={transaction.id}
              className="
              rounded-2xl
              border
              border-gray-200
              p-5
              "
            >
              <div
                className="
                flex
                items-center
                justify-between
                "
              >
                <h3 className="font-bold">
                  {transaction.customer}
                </h3>

                <span
                  className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-semibold

                    ${transaction.status ===
                      "Paid"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                    }
                  `}
                >
                  {transaction.status}
                </span>
              </div>

              <p className="mt-3 text-gray-600">
                Service :
                {" "}
                {transaction.service}
              </p>

              <p className="text-gray-600">
                Date :
                {" "}
                {transaction.date}
              </p>

              <p
                className="
                mt-3
                font-bold
                text-green-600
                "
              >
                ₹
                {transaction.amount}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default RecentTransactions;