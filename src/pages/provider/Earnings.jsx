import EarningsHeader from "../../components/provider/earnings/EarningsHeader";
import EarningsSummary from "../../components/provider/earnings/EarningsSummary";
import EarningsChart from "../../components/provider/earnings/EarningsChart";
import WithdrawCard from "../../components/provider/earnings/WithdrawCard";
import RecentTransactions from "../../components/provider/earnings/RecentTransactions";
import PaymentHistory from "../../components/provider/earnings/PaymentHistory";

import { earningsSummary } from "../../data/provider/earningsSummary";
import { transactions } from "../../data/provider/transactions";

const Earnings = () => {
  return (
    <section
      className="
      space-y-8
      "
    >
      {/* Header */}

      <EarningsHeader />

      {/* Summary Cards */}

      <EarningsSummary
        summary={earningsSummary}
      />

      {/* Chart + Withdraw */}

      <div
        className="
        grid
        gap-8
        xl:grid-cols-3
        "
      >
        <div className="xl:col-span-2">
          <EarningsChart />
        </div>

        <WithdrawCard
          availableBalance={
            earningsSummary.pending
          }
        />
      </div>

      {/* Recent Transactions */}

      <RecentTransactions
        transactions={transactions}
      />

      {/* Payment History */}

      <PaymentHistory
        transactions={transactions}
      />
    </section>
  );
};

export default Earnings;