import DashboardCards from "../components/admin/DashboardCards";

const recentBookings = [
  {
    id: "BK001",
    customer: "Rahul Sharma",
    service: "Electrician",
    employee: "Amit Kumar",
    status: "Completed",
  },
  {
    id: "BK002",
    customer: "Priya Singh",
    service: "Plumbing",
    employee: "Ravi Patel",
    status: "Pending",
  },
  {
    id: "BK003",
    customer: "Mohit Verma",
    service: "AC Repair",
    employee: "Sanjay Kumar",
    status: "In Progress",
  },
  {
    id: "BK004",
    customer: "Neha Gupta",
    service: "Cleaning",
    employee: "Ankit Yadav",
    status: "Completed",
  },
];

const topEmployees = [
  {
    id: 1,
    name: "Amit Kumar",
    service: "Electrician",
    jobs: 126,
    rating: "4.9",
  },
  {
    id: 2,
    name: "Ravi Patel",
    service: "Plumber",
    jobs: 118,
    rating: "4.8",
  },
  {
    id: 3,
    name: "Sanjay Kumar",
    service: "AC Repair",
    jobs: 109,
    rating: "4.9",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "In Progress":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const AdminDashboard = () => {
  return (
    <div className="space-y-8">

      {/* Dashboard Cards */}
      <DashboardCards />

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Recent Bookings */}
        <div className="bg-white rounded-3xl shadow-md p-6">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Recent Bookings
            </h2>

            <button className="text-amber-500 font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="border rounded-2xl p-4 hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">
                      {booking.customer}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {booking.service}
                    </p>

                    <p className="text-sm text-gray-400">
                      Employee: {booking.employee}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Top Employees */}
        <div className="bg-white rounded-3xl shadow-md p-6">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Top Employees
            </h2>

            <button className="text-amber-500 font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {topEmployees.map((employee) => (
              <div
                key={employee.id}
                className="flex items-center justify-between border rounded-2xl p-4 hover:bg-gray-50 transition"
              >
                <div>
                  <h3 className="font-semibold">
                    {employee.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {employee.service}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold">
                    {employee.jobs} Jobs
                  </p>

                  <p className="text-amber-500">
                    ⭐ {employee.rating}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;