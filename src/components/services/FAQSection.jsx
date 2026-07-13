import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "How do I book a home service?",
    answer:
      "Choose your required service, select a suitable date and time, and confirm your booking in just a few clicks.",
  },
  {
    id: 2,
    question: "Are your professionals verified?",
    answer:
      "Yes. Every professional is background verified and trained before joining the Clarito platform.",
  },
  {
    id: 3,
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes. You can cancel or reschedule your booking before the scheduled service time from your account.",
  },
  {
    id: 4,
    question: "What payment methods are available?",
    answer:
      "We support Cash, UPI, Credit Card, Debit Card and Net Banking.",
  },
  {
    id: 5,
    question: "Do you provide same-day service?",
    answer:
      "Yes. Same-day service is available in selected locations depending on professional availability.",
  },
  {
    id: 6,
    question: "How can I contact customer support?",
    answer:
      "You can contact us by phone, email, or by using the Contact page on our website.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Find answers to the most common questions about our home services.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-14 space-y-5">

          {faqs.map((faq) => (

            <div
              key={faq.id}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >

              <button
                onClick={() => handleToggle(faq.id)}
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

export default FAQSection;