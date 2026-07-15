import { dashboardStats } from "../../data/admin/dashboardStats";

const DashboardCards = () => {
  return (
    <section
      className="
      grid
      gap-6
      sm:grid-cols-2
      xl:grid-cols-3
      "
    >
      {dashboardStats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="
            rounded-3xl
            bg-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            "
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-800">
                  {item.value}
                </h2>
              </div>

              <div
                className={`
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                ${item.bgColor}
                `}
              >
                <Icon
                  className={`
                  text-3xl
                  ${item.color}
                  `}
                />
              </div>

            </div>

            <div className="mt-6 flex items-center justify-between">

              <p className="text-sm text-gray-500">
                Updated Today
              </p>

              <span
                className="
                rounded-full
                bg-green-100
                px-3
                py-1
                text-sm
                font-semibold
                text-green-600
                "
              >
                +12%
              </span>

            </div>

          </div>
        );
      })}
    </section>
  );
};

export default DashboardCards;