import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "How do I book a service?",
    answer:
      "Choose your preferred service, fill in your details, select a date and time, and click Confirm Booking.",
  },
  {
    id: 2,
    question: "Can I reschedule my booking?",
    answer:
      "Yes. You can contact our support team to reschedule your booking before the service starts.",
  },
  {
    id: 3,
    question: "Are your professionals verified?",
    answer:
      "Absolutely. Every professional is background verified and trained before joining Clarito.",
  },
  {
    id: 4,
    question: "Which payment methods do you accept?",
    answer:
      "We accept Cash, UPI, Credit Card, Debit Card and Net Banking.",
  },
  {
    id: 5,
    question: "Do you provide same-day service?",
    answer:
      "Yes. Same-day booking is available depending on the professional's availability in your area.",
  },
  {
    id: 6,
    question: "How can I contact customer support?",
    answer:
      "You can reach us through the Contact page, phone or email. Our support team is available 24×7.",
  },
];

const BookingFAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            BOOKING FAQ
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Everything you need to know before booking a service with Clarito.
          </p>

        </div>

        {/* FAQ List */}

        <div className="mt-14 space-y-5">

          {faqs.map((faq) => (

            <div
              key={faq.id}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >

              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition"
              >

                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>

                {openId === faq.id ? (
                  <FaMinus className="text-amber-500" />
                ) : (
                  <FaPlus className="text-amber-500" />
                )}

              </button>

              {openId === faq.id && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default BookingFAQ;