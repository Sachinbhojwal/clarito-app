import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { contactInfo } from "../../data/contactInfo";

const ContactInfo = () => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "phone":
        return <FaPhoneAlt size={30} />;

      case "email":
        return <FaEnvelope size={30} />;

      case "location":
        return <FaMapMarkerAlt size={30} />;

      case "clock":
        return <FaClock size={30} />;

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-amber-100 text-amber-600 font-semibold">
            CONTACT INFORMATION
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            We're Here To Help
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-8">
            Reach out to us through any of the following contact
            methods. Our team is always ready to assist you.
          </p>

        </div>

        <div className="grid gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-4">

          {contactInfo.map((item) => (

            <div
              key={item.id}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                p-8
                text-center
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                border
                border-gray-100
              "
            >

              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-2xl
                  bg-amber-100
                  text-amber-500
                  flex
                  items-center
                  justify-center
                "
              >
                {renderIcon(item.icon)}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 font-semibold text-amber-600">
                {item.value}
              </p>

              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;