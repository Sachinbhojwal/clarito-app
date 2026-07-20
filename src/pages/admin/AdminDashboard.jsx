import DashboardCards from "../../components/admin/DashboardCards";
import RevenueChart from "../../components/admin/RevenueChart";
import RecentBookings from "../../components/admin/RecentBookings";
import RecentCustomers from "../../components/admin/RecentCustomers";
import TopServices from "../../components/admin/TopServices";
import LatestReviews from "../../components/admin/LatestReviews";

const AdminDashboard = () => {
  return (
    <section className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back, Super Admin.
        </p>

      </div>

      <DashboardCards />

      <RevenueChart />

      <div
        className="
        grid
        gap-8
        xl:grid-cols-2
        "
      >
        <RecentBookings />

        <RecentCustomers />
      </div>

      <div
        className="
        grid
        gap-8
        xl:grid-cols-2
        "
      >
        <TopServices />

        <LatestReviews />
      </div>

    </section>
  );
};

export default AdminDashboard;