import React from "react";
import { howItWork } from "../../data/HowItWork";

const HowItWork = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center">
          <span className="text-yellow-500 font-semibold text-sm sm:text-base">
            HOW IT WORKS
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Simple Booking Process
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Book a trusted professional in just a few steps.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14 lg:mt-16">

          {howItWork.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-yellow-500 text-black flex items-center justify-center text-xl sm:text-2xl font-bold">
                {step.id}
              </div>

              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWork;