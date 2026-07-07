import { ArrowUpRight } from "lucide-react";
import { dashboardCards } from "../../data/dashboardCards";

const DashboardCards = () => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {dashboardCards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.id}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-gray-500 text-sm">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-800">
                  {card.value}
                </h2>

                <div className="mt-4 flex items-center gap-2 text-green-600 font-semibold">

                  <ArrowUpRight size={18} />

                  <span>{card.change}</span>

                  <span className="text-gray-400 font-normal">
                    this month
                  </span>

                </div>

              </div>

              <div
                className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white`}
              >
                <Icon size={30} />
              </div>

            </div>

          </div>
        );
      })}

    </section>
  );
};

export default DashboardCards;