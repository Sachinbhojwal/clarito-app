import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const service =
    searchParams.get("service") || "Home Cleaning";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    date: "",
    time: "",
    payment: "COD",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      bookingId:
        "CL" +
        Math.floor(
          100000 + Math.random() * 900000
        ),

      service,
      amount: 499,
      status: "Confirmed",

      ...formData,
    };

    // Current Booking
    localStorage.setItem(
      "currentBooking",
      JSON.stringify(bookingData)
    );

    // My Bookings

    const allBookings =
      JSON.parse(
        localStorage.getItem("myBookings")
      ) || [];

    allBookings.push(bookingData);

    localStorage.setItem(
      "myBookings",
      JSON.stringify(allBookings)
    );

    navigate("/booking-success");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-3xl font-bold mb-8">
          Booking Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Full Name */}

          <div>
            <label className="block mb-2 font-semibold">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-amber-500
              "
            />
          </div>

          {/* Email */}

          <div>
            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-amber-500
              "
            />
          </div>

          {/* Phone */}

          <div>
            <label className="block mb-2 font-semibold">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-amber-500
              "
            />
          </div>

          {/* Address */}

          <div>
            <label className="block mb-2 font-semibold">
              Address
            </label>

            <textarea
              name="address"
              required
              rows="4"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Full Address"
              className="
              w-full
              border
              rounded-xl
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-amber-500
              "
            />
          </div>

          {/* City + Pincode */}

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 font-semibold">
                City
              </label>

              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Pincode
              </label>

              <input
                type="text"
                name="pincode"
                required
                value={formData.pincode}
                onChange={handleChange}
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                "
              />
            </div>

          </div>

          {/* Date + Time */}

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 font-semibold">
                Date
              </label>

              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Time
              </label>

              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                "
              >
                <option value="">
                  Select Time
                </option>

                <option>
                  09:00 AM
                </option>

                <option>
                  11:00 AM
                </option>

                <option>
                  02:00 PM
                </option>

                <option>
                  05:00 PM
                </option>

              </select>
            </div>

          </div>

          {/* Payment */}

          <div>
            <label className="block mb-3 font-semibold">
              Payment Method
            </label>

            <div className="flex gap-5">

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={
                    formData.payment === "COD"
                  }
                  onChange={handleChange}
                />

                <span className="ml-2">
                  Cash On Delivery
                </span>
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={
                    formData.payment === "UPI"
                  }
                  onChange={handleChange}
                />

                <span className="ml-2">
                  UPI
                </span>
              </label>

            </div>

          </div>

          {/* Service */}

          <div className="bg-amber-50 rounded-xl p-5">

            <p>
              <strong>Service:</strong>{" "}
              {service}
            </p>

            <p className="mt-2">
              <strong>Amount:</strong> ₹499
            </p>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="
            w-full
            bg-amber-500
            hover:bg-amber-600
            text-white
            py-4
            rounded-xl
            font-bold
            transition
            "
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </section>
  );
};

export default BookingForm;