import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const chartData = [
  {
    month: "Jan",
    earnings: 12000,
  },
  {
    month: "Feb",
    earnings: 15000,
  },
  {
    month: "Mar",
    earnings: 18000,
  },
  {
    month: "Apr",
    earnings: 14000,
  },
  {
    month: "May",
    earnings: 22000,
  },
  {
    month: "Jun",
    earnings: 19000,
  },
  {
    month: "Jul",
    earnings: 24000,
  },
  {
    month: "Aug",
    earnings: 26000,
  },
];

const EarningsChart = () => {
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
        mb-6
        text-2xl
        font-bold
        "
      >
        Monthly Earnings
      </h2>

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart
            data={chartData}
          >
            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
            />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="earnings"
              stroke="#f59e0b"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default EarningsChart;