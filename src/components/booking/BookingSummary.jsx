const BookingSummary = ({ service }) => {
  return (
    <div className="sticky top-28">

      {/* Service Card */}

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">

          <span className="bg-amber-100 text-amber-600 px-4 py-1 rounded-full text-sm font-semibold">
            Selected Service
          </span>

          <h2 className="text-3xl font-bold mt-4">
            {service.title}
          </h2>

          <p className="text-gray-500 mt-3">
            {service.description}
          </p>

          {/* Price */}

          <div className="flex justify-between items-center mt-8 border-b pb-4">

            <span className="text-gray-600">
              Starting Price
            </span>

            <span className="text-2xl font-bold text-amber-500">
              ₹499
            </span>

          </div>

          {/* Duration */}

          <div className="flex justify-between items-center py-4 border-b">

            <span className="text-gray-600">
              Estimated Time
            </span>

            <span className="font-semibold">
              1 - 2 Hours
            </span>

          </div>

          {/* Availability */}

          <div className="flex justify-between items-center py-4">

            <span className="text-gray-600">
              Availability
            </span>

            <span className="text-green-600 font-semibold">
              Available Today
            </span>

          </div>

        </div>

      </div>

      {/* Benefits */}

      <div className="bg-white rounded-3xl shadow-xl p-6 mt-6">

        <h3 className="text-2xl font-bold mb-6">
          Why Choose Clarito?
        </h3>

        <div className="space-y-5">

          <div className="flex gap-4">

            <div className="text-3xl">
              ✅
            </div>

            <div>

              <h4 className="font-semibold">
                Verified Professionals
              </h4>

              <p className="text-gray-500 text-sm">
                Every service provider is verified before joining.
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <div className="text-3xl">
              ⚡
            </div>

            <div>

              <h4 className="font-semibold">
                Fast Booking
              </h4>

              <p className="text-gray-500 text-sm">
                Book your service in just a few clicks.
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <div className="text-3xl">
              🛡️
            </div>

            <div>

              <h4 className="font-semibold">
                Safe & Secure
              </h4>

              <p className="text-gray-500 text-sm">
                Your personal information is protected.
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <div className="text-3xl">
              📞
            </div>

            <div>

              <h4 className="font-semibold">
                24/7 Customer Support
              </h4>

              <p className="text-gray-500 text-sm">
                Our team is always ready to help you.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Booking Summary */}

      <div className="bg-amber-500 text-white rounded-3xl p-6 mt-6">

        <h3 className="text-2xl font-bold">
          Booking Summary
        </h3>

        <div className="mt-5 space-y-3">

          <div className="flex justify-between">

            <span>Service Charge</span>

            <span>₹499</span>

          </div>

          <div className="flex justify-between">

            <span>Platform Fee</span>

            <span>₹49</span>

          </div>

          <div className="flex justify-between">

            <span>GST</span>

            <span>₹99</span>

          </div>

          <hr className="border-white/30" />

          <div className="flex justify-between text-xl font-bold">

            <span>Total</span>

            <span>₹647</span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookingSummary;