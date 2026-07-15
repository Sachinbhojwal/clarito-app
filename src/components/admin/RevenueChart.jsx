import { revenueData } from "../../data/admin/revenueData";

const RevenueChart = () => {

  const maxRevenue = Math.max(
    ...revenueData.map((item) => item.revenue)
  );

  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      <div className="mb-8">

        <h2 className="text-2xl font-bold text-gray-800">
          Revenue Analytics
        </h2>

        <p className="mt-2 text-gray-500">
          Monthly revenue performance.
        </p>

      </div>

      <div
        className="
        flex
        h-80
        items-end
        justify-between
        gap-4
        "
      >
        {revenueData.map((item) => {

          const height =
            (item.revenue / maxRevenue) * 100;

          return (
            <div
              key={item.id}
              className="
              flex
              flex-1
              flex-col
              items-center
              "
            >
              <p className="mb-2 text-sm font-semibold">
                ₹{item.revenue}
              </p>

              <div
                style={{
                  height: `${height}%`,
                }}
                className="
                w-full
                rounded-t-3xl
                bg-amber-500
                transition-all
                duration-300
                hover:bg-amber-600
                "
              />

              <p className="mt-3 font-semibold text-gray-600">
                {item.month}
              </p>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RevenueChart;