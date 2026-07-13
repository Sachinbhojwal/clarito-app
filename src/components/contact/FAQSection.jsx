import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqData } from "../../data/faq";

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-amber-100 text-amber-600 font-semibold">
            FAQs
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
            Find answers to the most commonly asked questions about
            Clarito services, bookings, payments, and customer support.
          </p>

        </div>

        {/* FAQ List */}

        <div className="mt-14 space-y-5">

          {faqData.map((faq) => (

            <div
              key={faq.id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                overflow-hidden
                transition-all
                duration-300
              "
            >

              <button
                onClick={() => toggleFAQ(faq.id)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  text-left
                "
              >

                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <span className="text-amber-500 text-lg">

                  {activeId === faq.id ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}

                </span>

              </button>

              {activeId === faq.id && (

                <div className="px-6 pb-6">

                  <p className="text-gray-600 leading-8">
                    {faq.answer}
                  </p>

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