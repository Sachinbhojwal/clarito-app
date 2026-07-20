import {
  FaQuoteLeft,
  FaStar,
  FaUserCircle,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    service: "AC Repair Service",
    rating: 5,
    review:
      "Excellent service. The technician arrived on time and completed the work professionally.",
  },

  {
    id: 2,
    name: "Priya Patel",
    service: "Home Cleaning",
    rating: 5,
    review:
      "Very satisfied with the service. Booking was easy and the staff was polite and professional.",
  },

  {
    id: 3,
    name: "Amit Verma",
    service: "Electrician Service",
    rating: 4,
    review:
      "Quick response and affordable pricing. Highly recommended for home services.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-white py-16">
      <div
        className="
        mx-auto
        max-w-7xl
        px-4
        sm:px-6
        lg:px-8
        "
      >
        {/* Heading */}

        <div className="text-center">
          <h2
            className="
            text-4xl
            font-bold
            text-gray-800
            "
          >
            What Our Customers Say
          </h2>

          <p
            className="
            mx-auto
            mt-4
            max-w-3xl
            text-lg
            leading-8
            text-gray-500
            "
          >
            Thousands of happy customers
            trust CLARITO for reliable and
            professional home services.
          </p>
        </div>

        {/* Reviews */}

        <div
          className="
          mt-14
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="
              rounded-3xl
              bg-gray-50
              p-8
              shadow-sm
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              "
            >
              {/* Quote */}

              <FaQuoteLeft
                className="
                text-4xl
                text-amber-500
                "
              />

              {/* Review */}

              <p
                className="
                mt-6
                leading-8
                text-gray-600
                "
              >
                {review.review}
              </p>

              {/* Rating */}

              <div
                className="
                mt-6
                flex
                gap-1
                text-yellow-500
                "
              >
                {[...Array(review.rating)].map(
                  (_, index) => (
                    <FaStar key={index} />
                  )
                )}
              </div>

              {/* Customer */}

              <div
                className="
                mt-8
                flex
                items-center
                gap-4
                "
              >
                <div
                  className="
                  text-5xl
                  text-amber-500
                  "
                >
                  <FaUserCircle />
                </div>

                <div>
                  <h3
                    className="
                    text-lg
                    font-bold
                    text-gray-800
                    "
                  >
                    {review.name}
                  </h3>

                  <p className="text-gray-500">
                    {review.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}

        <div
          className="
          mt-16
          grid
          gap-6
          rounded-3xl
          bg-amber-500
          p-8
          text-white
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              10K+
            </h2>

            <p className="mt-3">
              Happy Customers
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold">
              4.9★
            </h2>

            <p className="mt-3">
              Average Rating
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold">
              500+
            </h2>

            <p className="mt-3">
              Professionals
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold">
              24/7
            </h2>

            <p className="mt-3">
              Customer Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;