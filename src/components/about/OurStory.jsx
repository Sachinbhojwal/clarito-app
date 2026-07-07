import {
  FaCheckCircle,
  FaHome,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaCheckCircle size={20} />,
    title: "Verified Professionals",
    description:
      "Every service provider is carefully verified before joining Clarito.",
  },
  {
    id: 2,
    icon: <FaHome size={20} />,
    title: "Doorstep Services",
    description:
      "Professional home services delivered at your preferred time.",
  },
  {
    id: 3,
    icon: <FaUsers size={20} />,
    title: "Customer First",
    description:
      "We always focus on customer satisfaction and quality service.",
  },
  {
    id: 4,
    icon: <FaHandshake size={20} />,
    title: "Trusted Platform",
    description:
      "Thousands of customers trust Clarito every single day.",
  },
];

const OurStory = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900"
              alt="Our Story"
              className="rounded-3xl shadow-2xl w-full object-cover h-[600px]"
            />

            <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-6">

              <h2 className="text-4xl font-bold text-amber-500">

                10+

              </h2>

              <p className="text-gray-600 mt-2">

                Years of Experience

              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="text-amber-500 font-semibold uppercase tracking-wider">

              Our Story

            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">

              Making Home Services
              <br />
              Simple & Reliable

            </h2>

            <p className="mt-6 text-gray-600 leading-8">

              Clarito started with one simple idea —
              finding trusted professionals for home services
              should be quick, safe and hassle-free.

              Today we connect thousands of customers
              with verified electricians, plumbers,
              cleaners, painters and many other experts.

            </p>

            <p className="mt-5 text-gray-600 leading-8">

              Our mission is to provide quality service,
              transparent pricing and complete customer
              satisfaction while empowering skilled
              professionals across India.

            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              {features.map((item) => (

                <div
                  key={item.id}
                  className="flex gap-4 bg-gray-50 rounded-2xl p-5 hover:shadow-lg transition"
                >

                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-500 flex items-center justify-center">

                    {item.icon}

                  </div>

                  <div>

                    <h3 className="font-bold">

                      {item.title}

                    </h3>

                    <p className="text-gray-500 text-sm mt-2 leading-6">

                      {item.description}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurStory;