import ProviderHeader from "../../components/provider/dashboard/ProviderHeader";
import ProviderStats from "../../components/provider/dashboard/ProviderStats";
import QuickActions from "../../components/provider/dashboard/QuickActions";
import TodayJobs from "../../components/provider/dashboard/TodayJobs";
import EarningsCard from "../../components/provider/dashboard/EarningsCard";
import RecentReviews from "../../components/provider/dashboard/RecentReviews";
import AvailabilityCard from "../../components/provider/dashboard/AvailabilityCard";

const ProviderDashboard = () => {
  return (
    <main
      className="
      min-h-screen
      bg-gray-100
      py-8
      "
    >
      <div
        className="
        mx-auto
        max-w-7xl
        space-y-8
        px-5
        "
      >
        <ProviderHeader />

        <ProviderStats />

        <QuickActions />

        <TodayJobs />

        <div
          className="
          grid
          gap-8
          lg:grid-cols-2
          "
        >
          <EarningsCard />

          <AvailabilityCard />
        </div>

        <RecentReviews />
      </div>
    </main>
  );
};

export default ProviderDashboard;