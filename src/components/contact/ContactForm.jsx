import { useState } from "react";
import { contactServices } from "../../data/contactServices";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Your message has been sent successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-flex items-center bg-amber-100 text-amber-600 px-5 py-2 rounded-full font-semibold">
              CONTACT US
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let's Start A Conversation
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              We'd love to hear from you. Whether you need a service,
              have a question, or want to share feedback, simply fill
              out the form and our team will contact you shortly.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 text-xl">
                  📞
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Call Us
                  </h3>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 text-xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    support@clarito.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 text-xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Office
                  </h3>

                  <p className="text-gray-600">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Select Service
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {contactServices.map((service) => (
                    <option
                      key={service.id}
                      value={service.value}
                    >
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  bg-amber-500
                  hover:bg-amber-600
                  text-white
                  font-semibold
                  py-4
                  rounded-xl
                  transition-all
                  duration-300
                  shadow-lg
                  hover:shadow-xl
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;