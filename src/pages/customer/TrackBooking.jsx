import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import EmployeeCard from "../../components/employee/EmployeeCard";

import {
  FaCheckCircle,
  FaClock,
  FaTools,
  FaTruckMoving,
} from "react-icons/fa";

const TrackBooking = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        {/* Heading */}

        <section className="px-5 py-10">

          <div className="mx-auto max-w-7xl">

            <h1
              className="
              text-4xl
              font-bold
              text-gray-800
              "
            >
              Track Your Booking
            </h1>

            <p
              className="
              mt-3
              text-gray-500
              "
            >
              Stay updated with your service
              professional and booking status.
            </p>

          </div>

        </section>

        {/* Booking Details */}

        <section className="px-5">

          <div
            className="
            mx-auto
            max-w-7xl
            rounded-3xl
            bg-white
            p-6
            shadow-sm
            "
          >
            <div
              className="
              flex
              flex-col
              gap-4
              lg:flex-row
              lg:justify-between
              "
            >
              <div>

                <p className="text-gray-500">
                  Booking ID
                </p>

                <h2
                  className="
                  mt-2
                  text-2xl
                  font-bold
                  text-gray-800
                  "
                >
                  CLR-458964
                </h2>

              </div>

              <div>

                <p className="text-gray-500">
                  Service Name
                </p>

                <h2
                  className="
                  mt-2
                  text-2xl
                  font-bold
                  text-gray-800
                  "
                >
                  AC Repair Service
                </h2>

              </div>

              <div>

                <p className="text-gray-500">
                  Booking Date
                </p>

                <h2
                  className="
                  mt-2
                  text-xl
                  font-semibold
                  text-gray-800
                  "
                >
                  18 July 2026
                </h2>

              </div>

            </div>

          </div>

        </section>


        {/* Employee Card */}

        <section className="px-5 py-10">

          <div className="mx-auto max-w-7xl">

            <EmployeeCard />

          </div>

        </section>


        {/* Service Timeline */}

        <section className="px-5 pb-12">

          <div
            className="
            mx-auto
            max-w-7xl
            rounded-3xl
            bg-white
            p-8
            shadow-sm
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              text-gray-800
              "
            >
              Service Status
            </h2>


            <div className="mt-10 space-y-8">


              {/* Assigned */}

              <div className="flex gap-5">

                <FaCheckCircle
                  className="
                  text-3xl
                  text-green-500
                  "
                />

                <div>
                  <h3
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                  >
                    Employee Assigned
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Your service professional
                    has been assigned.
                  </p>
                </div>

              </div>


              {/* On The Way */}

              <div className="flex gap-5">

                <FaTruckMoving
                  className="
                  text-3xl
                  text-amber-500
                  "
                />

                <div>

                  <h3
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                  >
                    On The Way
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Your professional will
                    arrive in approximately
                    20 minutes.
                  </p>

                </div>

              </div>


              {/* Service Started */}

              <div className="flex gap-5">

                <FaTools
                  className="
                  text-3xl
                  text-blue-500
                  "
                />

                <div>

                  <h3
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                  >
                    Service Started
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Service will begin after
                    arrival confirmation.
                  </p>

                </div>

              </div>


              {/* OTP */}

              <div className="flex gap-5">

                <FaClock
                  className="
                  text-3xl
                  text-red-500
                  "
                />

                <div>

                  <h3
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                  >
                    OTP Verification
                  </h3>

                  <p className="mt-2 text-gray-500">
                    OTP verification will be
                    required after service
                    completion.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
};

export default TrackBooking;