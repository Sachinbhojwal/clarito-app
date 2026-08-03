import EarningsCard from "./EarningsCard";

const EarningsSummary = ({
  summary,
}) => {
  return (
    <section
      className="
      grid
      gap-6
      sm:grid-cols-2
      xl:grid-cols-4
      "
    >
      <EarningsCard
        title="Total Earnings"
        amount={summary.total}
        color="text-green-600"
      />

      <EarningsCard
        title="Monthly Earnings"
        amount={summary.monthly}
        color="text-blue-600"
      />

      <EarningsCard
        title="Weekly Earnings"
        amount={summary.weekly}
        color="text-purple-600"
      />

      <EarningsCard
        title="Pending Payments"
        amount={summary.pending}
        color="text-red-600"
      />
    </section>
  );
};

export default EarningsSummary;