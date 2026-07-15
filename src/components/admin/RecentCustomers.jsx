import { recentCustomers } from "../../data/admin/recentCustomers";

const RecentCustomers = () => {
  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-800">
          Recent Customers
        </h2>

        <p className="mt-2 text-gray-500">
          Newly joined customers.
        </p>

      </div>

      <div className="space-y-5">

        {recentCustomers.map((customer) => (

          <div
            key={customer.id}
            className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-gray-100
            p-4
            transition
            duration-300
            hover:bg-gray-50
            "
          >
            <div className="flex items-center gap-4">

              <img
                src={customer.image}
                alt={customer.name}
                className="
                h-14
                w-14
                rounded-full
                object-cover
                "
              />

              <div>

                <h3 className="font-semibold text-gray-800">
                  {customer.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {customer.email}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Joined : {customer.joinedDate}
                </p>

              </div>

            </div>

            <span
              className={`
              rounded-full
              px-4
              py-2
              text-sm
              font-semibold
              ${customer.status === "Active"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
                }
              `}
            >
              {customer.status}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default RecentCustomers;