import {
  FaCheck,
  FaEye,
  FaStar,
  FaTrash,
} from "react-icons/fa";

import { reviewsData } from "../../data/admin/reviewsData";

const ReviewsTable = () => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-600";

      case "Pending":
        return "bg-orange-100 text-orange-600";

      case "Reported":
        return "bg-red-100 text-red-600";

      case "Rejected":
        return "bg-gray-100 text-gray-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

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
          Reviews List
        </h2>

        <p className="mt-2 text-gray-500">
          Manage all customer reviews and ratings.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1300px]">

          <thead>
            <tr className="border-b">

              <th className="py-4 text-left">
                Review ID
              </th>

              <th className="py-4 text-left">
                Customer
              </th>

              <th className="py-4 text-left">
                Service
              </th>

              <th className="py-4 text-left">
                Rating
              </th>

              <th className="py-4 text-left">
                Review
              </th>

              <th className="py-4 text-left">
                Status
              </th>

              <th className="py-4 text-left">
                Date
              </th>

              <th className="py-4 text-left">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {reviewsData.map((review) => (

              <tr
                key={review.id}
                className="
                border-b
                hover:bg-gray-50
                "
              >
                <td className="py-5 font-semibold">
                  {review.id}
                </td>

                <td className="py-5">
                  {review.customerName}
                </td>

                <td className="py-5">
                  {review.serviceName}
                </td>

                <td className="py-5">

                  <div className="flex items-center gap-2">

                    <FaStar className="text-yellow-500" />

                    <span className="font-semibold">
                      {review.rating}
                    </span>

                  </div>

                </td>

                <td className="py-5 max-w-xs">
                  <p className="line-clamp-2 text-gray-600">
                    {review.review}
                  </p>
                </td>

                <td className="py-5">

                  <span
                    className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    ${getStatusBadge(
                      review.status
                    )}
                    `}
                  >
                    {review.status}
                  </span>

                </td>

                <td className="py-5">
                  {review.reviewDate}
                </td>

                <td className="py-5">

                  <div className="flex gap-3">

                    <button
                      className="
                      rounded-xl
                      bg-blue-100
                      p-3
                      text-blue-600
                      transition
                      hover:bg-blue-200
                      "
                    >
                      <FaEye />
                    </button>

                    <button
                      className="
                      rounded-xl
                      bg-green-100
                      p-3
                      text-green-600
                      transition
                      hover:bg-green-200
                      "
                    >
                      <FaCheck />
                    </button>

                    <button
                      className="
                      rounded-xl
                      bg-red-100
                      p-3
                      text-red-600
                      transition
                      hover:bg-red-200
                      "
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
};

export default ReviewsTable;