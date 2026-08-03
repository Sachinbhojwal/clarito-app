import {
  FiUser,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const CustomerInfo = ({
  customer,
  address,
}) => {
  return (
    <section
      className="
      rounded-3xl
      border
      border-gray-200
      p-6
      "
    >
      {/* Title */}

      <h3
        className="
        mb-5
        text-xl
        font-bold
        "
      >
        Customer Information
      </h3>

      {/* Customer */}

      <div className="space-y-5">

        {/* Name */}

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          <div
            className="
            rounded-xl
            bg-blue-100
            p-3
            text-blue-600
            "
          >
            <FiUser size={20} />
          </div>

          <div>
            <p
              className="
              text-sm
              text-gray-500
              "
            >
              Customer Name
            </p>

            <h4
              className="
              font-semibold
              "
            >
              {customer.name}
            </h4>
          </div>
        </div>

        {/* Phone */}

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          <div
            className="
            rounded-xl
            bg-green-100
            p-3
            text-green-600
            "
          >
            <FiPhone size={20} />
          </div>

          <div className="flex-1">
            <p
              className="
              text-sm
              text-gray-500
              "
            >
              Phone Number
            </p>

            <h4
              className="
              font-semibold
              "
            >
              {customer.phone}
            </h4>
          </div>

          <a
            href={`tel:${customer.phone}`}
            className="
            rounded-xl
            bg-green-500
            px-4
            py-2
            font-semibold
            text-white
            transition
            hover:bg-green-600
            "
          >
            Call
          </a>
        </div>

        {/* Address */}

        <div
          className="
          flex
          items-start
          gap-4
          "
        >
          <div
            className="
            rounded-xl
            bg-red-100
            p-3
            text-red-600
            "
          >
            <FiMapPin size={20} />
          </div>

          <div>
            <p
              className="
              text-sm
              text-gray-500
              "
            >
              Service Address
            </p>

            <h4
              className="
              font-semibold
              leading-7
              "
            >
              {address}
            </h4>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomerInfo;