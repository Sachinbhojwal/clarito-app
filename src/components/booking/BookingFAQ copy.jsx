import { useState } from "react";

import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question:
      "How can I book a service on CLARITO?",
    answer:
      "Select your preferred service, choose the date and time slot, complete the payment process and confirm your booking.",
  },

  {
    id: 2,
    question:
      "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking before the service starts. Cancellation charges may apply depending on the cancellation time.",
  },

  {
    id: 3,
    question:
      "Can I reschedule my booking?",
    answer:
      "Yes, customers can reschedule their bookings based on service availability.",
  },

  {
    id: 4,
    question:
      "Which payment methods are available?",
    answer:
      "We support UPI, Debit Cards, Credit Cards, Net Banking, Wallet Payments and Cash On Service for selected services.",
  },

  {
    id: 5,
    question:
      "Are the professionals verified?",
    answer:
      "Yes, every professional goes through document verification and skill validation before joining CLARITO.",
  },

  {
    id: 6,
    question:
      "How will I receive my booking confirmation?",
    answer:
      "Booking confirmations are sent instantly through notifications, email and SMS after successful payment or booking confirmation.",
  },

  {
    id: 7,
    question:
      "Will I get a refund after cancellation?",
    answer:
      "Eligible refunds are processed according to our refund policy and are generally credited within a few business days.",
  },

  {
    id: 8,
    question:
      "How can I contact customer support?",
    answer:
      "Our customer support team is available 24/7 to assist you with bookings, payments and service-related issues.",
  },
];

const BookingFAQ = () => {
  const [activeFAQ, setActiveFAQ] =
    useState(null);

  const handleToggle = (id) => {
    if (activeFAQ === id) {
      setActiveFAQ(null);
      return;
    }

    setActiveFAQ(id);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div
        className="
        mx-auto
        max-w-5xl
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
            Frequently Asked Questions
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
            Find answers to the most
            commonly asked questions
            related to bookings, payments,
            cancellations and refunds.
          </p>
        </div>

        {/* FAQ Section */}

        <div className="mt-14 space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-sm
              "
            >
              <button
                onClick={() =>
                  handleToggle(faq.id)
                }
                className="
                flex
                w-full
                items-center
                justify-between
                gap-4
                px-6
                py-6
                text-left
                transition
                duration-300
                hover:bg-gray-50
                "
              >
                <h3
                  className="
                  text-lg
                  font-semibold
                  text-gray-800
                  "
                >
                  {faq.question}
                </h3>

                {activeFAQ === faq.id ? (
                  <FaChevronUp
                    className="
                    text-amber-500
                    "
                  />
                ) : (
                  <FaChevronDown
                    className="
                    text-gray-500
                    "
                  />
                )}
              </button>

              {activeFAQ === faq.id && (
                <div
                  className="
                  border-t
                  border-gray-100
                  px-6
                  py-5
                  "
                >
                  <p
                    className="
                    leading-8
                    text-gray-600
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Section */}

        <div
          className="
          mt-16
          rounded-3xl
          bg-amber-500
          p-8
          text-center
          text-white
          "
        >
          <h3
            className="
            text-3xl
            font-bold
            "
          >
            Still Have Questions?
          </h3>

          <p
            className="
            mx-auto
            mt-4
            max-w-2xl
            leading-8
            "
          >
            Our customer support team is
            available 24/7 to help you with
            your bookings and service
            requests.
          </p>

          <button
            className="
            mt-8
            rounded-2xl
            bg-white
            px-8
            py-4
            font-semibold
            text-amber-500
            transition
            duration-300
            hover:bg-gray-100
            "
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingFAQ;