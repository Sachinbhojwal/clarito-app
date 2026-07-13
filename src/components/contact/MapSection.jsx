const MapSection = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-amber-100 text-amber-600 font-semibold">
            OUR LOCATION
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Visit Our Office
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-8">
            We'd love to meet you. Visit our office or contact us
            anytime for assistance.
          </p>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-10 mt-14">

          {/* Map */}

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
              title="Clarito Office"
              src="https://www.google.com/maps?q=Ahmedabad,Gujarat&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              className="border-0"
            ></iframe>

          </div>

          {/* Office Details */}

          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">

            <h3 className="text-3xl font-bold text-gray-900">
              Clarito Office
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              We are committed to providing trusted home services with
              fast response and professional support.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <h4 className="font-semibold text-gray-900">
                  📍 Address
                </h4>

                <p className="mt-2 text-gray-600">
                  Ahmedabad, Gujarat, India
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  📞 Phone
                </h4>

                <p className="mt-2 text-gray-600">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  ✉️ Email
                </h4>

                <p className="mt-2 text-gray-600">
                  support@clarito.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  🕒 Working Hours
                </h4>

                <p className="mt-2 text-gray-600">
                  Monday – Saturday
                  <br />
                  9:00 AM – 8:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MapSection;