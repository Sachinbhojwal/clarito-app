import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaShieldAlt,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";

const values = [
  {
    id: 1,
    icon: <FaHeart size={24} />,
    title: "Customer First",
    description:
      "Our customers are at the heart of everything we do. We always strive to exceed expectations.",
  },
  {
    id: 2,
    icon: <FaShieldAlt size={24} />,
    title: "Trust & Safety",
    description:
      "Every professional is verified to ensure secure, reliable and high-quality service.",
  },
  {
    id: 3,
    icon: <FaHandshake size={24} />,
    title: "Integrity",
    description:
      "We believe in transparency, honest pricing and long-term relationships.",
  },
  {
    id: 4,
    icon: <FaLightbulb size={24} />,
    title: "Innovation",
    description:
      "We continuously improve our platform to provide a smarter booking experience.",
  },
];

const MissionVision = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-amber-500 font-semibold uppercase tracking-wider">
            Mission & Vision
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Driven by Purpose,
            <br />
            Inspired by Excellence
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Our vision is to transform home services by making them
            more reliable, affordable and accessible for every family.
          </p>

        </div>

        {/* Mission & Vision */}

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* Mission */}

          <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition">

            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-500">

              <FaBullseye size={28} />

            </div>

            <h3 className="text-3xl font-bold mt-6">
              Our Mission
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              To simplify home services by connecting customers with
              trusted and verified professionals while delivering
              outstanding quality, transparent pricing and complete
              satisfaction.
            </p>

          </div>

          {/* Vision */}

          <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 transition">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">

              <FaEye size={28} />

            </div>

            <h3 className="text-3xl font-bold mt-6">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              To become India's most trusted home service platform by
              delivering exceptional experiences through technology,
              skilled professionals and customer-focused innovation.
            </p>

          </div>

        </div>

        {/* Core Values */}

        <div className="mt-20">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Our Core Values
            </h2>

            <p className="mt-4 text-gray-600">
              The principles that guide every decision we make.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            {values.map((value) => (

              <div
                key={value.id}
                className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-500 flex items-center justify-center">

                  {value.icon}

                </div>

                <h3 className="text-xl font-bold mt-6">

                  {value.title}

                </h3>

                <p className="text-gray-600 mt-4 leading-7">

                  {value.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;