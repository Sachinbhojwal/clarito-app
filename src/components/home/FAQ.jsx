import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { faqs } from "../../data/faqs";

const FAQ = () => {
  const [activeId, setActiveId] = useState(1);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            Find answers to the most common questions about Clarito services.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq) => (

            <div
              key={faq.id}
              className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
            >

              <button
                onClick={() => handleToggle(faq.id)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >

                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                {activeId === faq.id ? (
                  <FaChevronUp className="text-amber-500" />
                ) : (
                  <FaChevronDown className="text-amber-500" />
                )}

              </button>

              {activeId === faq.id && (

                <div className="px-6 pb-6 text-gray-600 leading-8">

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

export default FAQ;