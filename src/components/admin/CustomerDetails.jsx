import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaStar,
  FaUserCheck,
  FaShoppingBag,
} from "react-icons/fa";

const CustomerDetails = ({ customer }) => {
  return (
    <section
      className="
      space-y-8
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      {/* Profile Section */}

      <div
        className="
        flex
        flex-col
        gap-6
        lg:flex-row
        lg:items-center
        "
      >
        <img
          src={customer.image}
          alt={customer.name}
          className="
          h-40
          w-40
          rounded-full
          object-cover
          border-4
          border-amber-100
          "
        />

        <div>
          <h1
            className="
            text-4xl
            font-bold
            text-gray-800
            "
          >
            {customer.name}
          </h1>

          <p className="mt-2 text-gray-500">
            Customer ID : {customer.id}
          </p>

          <div className="mt-5 flex gap-3">
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

            <span
              className="
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-600
              "
            >
              Verified Customer
            </span>
          </div>
        </div>
      </div>

      {/* Information */}

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        "
      >
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-xl text-amber-500" />

          <p>{customer.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-xl text-amber-500" />

          <p>{customer.phone}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-xl text-amber-500" />

          <p>{customer.joinedDate}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-xl text-amber-500" />

          <p>{customer.address}</p>
        </div>
      </div>

      {/* Analytics Cards */}

      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
        "
      >
        <div
          className="
          rounded-3xl
          bg-gray-50
          p-6
          text-center
          "
        >
          <FaShoppingBag
            className="
            mx-auto
            text-4xl
            text-blue-600
            "
          />

          <h2
            className="
            mt-4
            text-4xl
            font-bold
            text-blue-600
            "
          >
            {customer.totalBookings}
          </h2>

          <p className="mt-2">
            Total Bookings
          </p>
        </div>

        <div
          className="
          rounded-3xl
          bg-gray-50
          p-6
          text-center
          "
        >
          <FaMoneyBillWave
            className="
            mx-auto
            text-4xl
            text-green-600
            "
          />

          <h2
            className="
            mt-4
            text-4xl
            font-bold
            text-green-600
            "
          >
            ₹
            {customer.totalSpent.toLocaleString()}
          </h2>

          <p className="mt-2">
            Total Spent
          </p>
        </div>

        <div
          className="
          rounded-3xl
          bg-gray-50
          p-6
          text-center
          "
        >
          <FaStar
            className="
            mx-auto
            text-4xl
            text-yellow-500
            "
          />

          <h2
            className="
            mt-4
            text-4xl
            font-bold
            text-yellow-500
            "
          >
            4.9
          </h2>

          <p className="mt-2">
            Ratings
          </p>
        </div>

        <div
          className="
          rounded-3xl
          bg-gray-50
          p-6
          text-center
          "
        >
          <FaUserCheck
            className="
            mx-auto
            text-4xl
            text-purple-600
            "
          />

          <h2
            className="
            mt-4
            text-4xl
            font-bold
            text-purple-600
            "
          >
            Yes
          </h2>

          <p className="mt-2">
            Verified
          </p>
        </div>
      </div>

      {/* Buttons */}

      <div
        className="
        grid
        gap-4
        md:grid-cols-3
        "
      >
        <button
          className="
          rounded-2xl
          bg-amber-500
          py-4
          font-semibold
          text-white
          hover:bg-amber-600
          "
        >
          Edit Customer
        </button>

        <button
          className="
          rounded-2xl
          bg-blue-500
          py-4
          font-semibold
          text-white
          hover:bg-blue-600
          "
        >
          Booking History
        </button>

        <button
          className="
          rounded-2xl
          bg-red-500
          py-4
          font-semibold
          text-white
          hover:bg-red-600
          "
        >
          Block Customer
        </button>
      </div>
    </section>
  );
};

export default CustomerDetails;