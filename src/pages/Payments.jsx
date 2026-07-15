import {
  FaDownload,
  FaSearch,
} from "react-icons/fa";

import { paymentsData } from "../data/admin/paymentsData";
import PaymentsTable from "../components/admin/PaymentsTable";

const Payments = () => {
  const totalRevenue = paymentsData
    .filter(
      (payment) =>
        payment.paymentStatus === "Paid"
    )
    .reduce(
      (total, payment) =>
        total + payment.amount,
      0
    );

  const pendingPayments = paymentsData.filter(
    (payment) =>
      payment.paymentStatus === "Pending"
  ).length;

  const refundedPayments = paymentsData.filter(
    (payment) =>
      payment.paymentStatus === "Refunded"
  ).length;

  return (
    <section className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Payments
        </h1>

        <p className="mt-2 text-gray-500">
          Manage all payment transactions and
          revenue analytics.
        </p>

      </div>

      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
        "
      >

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            Total Revenue
          </p>

          <h2 className="mt-3 text-4xl font-bold text-green-600">
            ₹{totalRevenue.toLocaleString()}
          </h2>

        </div>

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            Total Transactions
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            {paymentsData.length}
          </h2>

        </div>

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            Pending Payments
          </p>

          <h2 className="mt-3 text-4xl font-bold text-orange-600">
            {pendingPayments}
          </h2>

        </div>

        <div
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >
          <p className="text-gray-500">
            Refunded Payments
          </p>

          <h2 className="mt-3 text-4xl font-bold text-blue-600">
            {refundedPayments}
          </h2>

        </div>

      </div>

      <div
        className="
        flex
        flex-col
        gap-5
        rounded-3xl
        bg-white
        p-6
        shadow-sm
        lg:flex-row
        lg:items-center
        lg:justify-between
        "
      >

        <div className="relative w-full lg:max-w-md">

          <input
            type="text"
            placeholder="Search payment..."
            className="
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            py-3
            pl-12
            pr-4
            outline-none
            focus:border-amber-500
            focus:bg-white
            "
          />

          <FaSearch
            className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-gray-400
            "
          />

        </div>

        <button
          className="
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-amber-500
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-amber-600
          "
        >
          <FaDownload />

          Download Report

        </button>

      </div>

      <PaymentsTable />

    </section>
  );
};

export default Payments;