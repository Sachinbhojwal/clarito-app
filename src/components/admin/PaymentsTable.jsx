import {
  FaEye,
  FaMoneyBillWave,
  FaTrash,
} from "react-icons/fa";

import { paymentsData } from "../../data/admin/paymentsData";

const PaymentsTable = () => {
  const getPaymentStatus = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-600";

      case "Pending":
        return "bg-orange-100 text-orange-600";

      case "Refunded":
        return "bg-blue-100 text-blue-600";

      case "Failed":
        return "bg-red-100 text-red-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-800">
          Payments List
        </h2>

        <p className="mt-2 text-gray-500">
          Manage all payment transactions.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[1200px]">

          <thead>

            <tr className="border-b">

              <th className="py-4 text-left">
                Payment ID
              </th>

              <th className="py-4 text-left">
                Customer
              </th>

              <th className="py-4 text-left">
                Service
              </th>

              <th className="py-4 text-left">
                Amount
              </th>

              <th className="py-4 text-left">
                Method
              </th>

              <th className="py-4 text-left">
                Status
              </th>

              <th className="py-4 text-left">
                Date
              </th>

              <th className="py-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {paymentsData.map((payment) => (

              <tr
                key={payment.id}
                className="
                border-b
                hover:bg-gray-50
                "
              >
                <td className="py-5 font-semibold">
                  {payment.id}
                </td>

                <td className="py-5">
                  {payment.customerName}
                </td>

                <td className="py-5">
                  {payment.serviceName}
                </td>

                <td className="py-5 font-semibold text-green-600">
                  ₹{payment.amount}
                </td>

                <td className="py-5">
                  {payment.paymentMethod}
                </td>

                <td className="py-5">

                  <span
                    className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    ${getPaymentStatus(
                      payment.paymentStatus
                    )}
                    `}
                  >
                    {payment.paymentStatus}
                  </span>

                </td>

                <td className="py-5">
                  {payment.transactionDate}
                </td>

                <td className="py-5">

                  <div className="flex gap-3">

                    <button
                      className="
                      rounded-xl
                      bg-blue-100
                      p-3
                      text-blue-600
                      transition
                      hover:bg-blue-200
                      "
                    >
                      <FaEye />
                    </button>

                    <button
                      className="
                      rounded-xl
                      bg-amber-100
                      p-3
                      text-amber-600
                      transition
                      hover:bg-amber-200
                      "
                    >
                      <FaMoneyBillWave />
                    </button>

                    <button
                      className="
                      rounded-xl
                      bg-red-100
                      p-3
                      text-red-600
                      transition
                      hover:bg-red-200
                      "
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
};

export default PaymentsTable;