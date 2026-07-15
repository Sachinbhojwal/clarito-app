import { FaStar } from "react-icons/fa";

import { latestReviewsData } from "../../data/admin/latestReviewsData";

const LatestReviews = () => {
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
          Latest Reviews
        </h2>

        <p className="mt-2 text-gray-500">
          Recent customer feedback.
        </p>

      </div>

      <div className="space-y-5">

        {latestReviewsData.map((review) => (

          <div
            key={review.id}
            className="
            rounded-2xl
            border
            border-gray-100
            p-5
            transition
            duration-300
            hover:bg-gray-50
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold text-gray-800">
                  {review.customerName}
                </h3>

                <p className="text-sm text-gray-500">
                  {review.serviceName}
                </p>

              </div>

              <span
                className={`
                rounded-full
                px-4
                py-2
                text-sm
                font-semibold
                ${review.reviewStatus === "Approved"
                    ? "bg-green-100 text-green-600"
                    : "bg-orange-100 text-orange-600"
                  }
                `}
              >
                {review.reviewStatus}
              </span>

            </div>

            <div className="mt-4 flex gap-1">

              {[...Array(review.rating)].map(
                (_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-500"
                  />
                )
              )}

            </div>

            <p className="mt-4 text-gray-600">
              {review.review}
            </p>

            <p className="mt-3 text-sm text-gray-400">
              {review.reviewDate}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default LatestReviews;