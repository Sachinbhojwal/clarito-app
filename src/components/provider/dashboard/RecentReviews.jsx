import {
  FiStar,
  FiMessageCircle,
} from "react-icons/fi";

const RecentReviews = () => {
  const reviews = [
    {
      id: 1,
      customer: "Rahul Sharma",
      rating: 5,
      date: "20 Jul 2026",
      review:
        "Excellent service. Very professional and arrived on time.",
    },

    {
      id: 2,
      customer: "Priya Patel",
      rating: 4,
      date: "18 Jul 2026",
      review:
        "Good work and friendly behaviour. Highly recommended.",
    },

    {
      id: 3,
      customer: "Amit Verma",
      rating: 5,
      date: "15 Jul 2026",
      review:
        "Quick response and quality work. Thank you.",
    },
  ];

  return (
    <section
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
      "
    >
      <div
        className="
        mb-8
        flex
        items-center
        justify-between
        "
      >
        <div>
          <h2
            className="
            text-2xl
            font-bold
            "
          >
            Recent Reviews
          </h2>

          <p className="text-gray-500">
            Latest customer feedback
          </p>
        </div>

        <FiMessageCircle
          size={30}
          className="text-amber-500"
        />
      </div>

      <div className="space-y-5">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="
            rounded-2xl
            border
            border-gray-100
            p-5
            transition
            hover:shadow-md
            "
          >
            <div
              className="
              flex
              flex-col
              gap-4
              md:flex-row
              md:items-center
              md:justify-between
              "
            >
              <div>
                <h3
                  className="
                  text-lg
                  font-bold
                  "
                >
                  {item.customer}
                </h3>

                <p
                  className="
                  mt-2
                  text-gray-500
                  "
                >
                  {item.review}
                </p>
              </div>

              <div
                className="
                text-left
                md:text-right
                "
              >
                <div
                  className="
                  flex
                  gap-1
                  md:justify-end
                  "
                >
                  {[...Array(item.rating)].map(
                    (_, index) => (
                      <FiStar
                        key={index}
                        className="
                        fill-amber-400
                        text-amber-400
                        "
                      />
                    )
                  )}
                </div>

                <p
                  className="
                  mt-2
                  text-sm
                  text-gray-500
                  "
                >
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentReviews;