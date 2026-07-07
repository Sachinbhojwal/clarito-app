import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import useBooking from "../hooks/useBooking";
import useAuth from "../hooks/useAuth";

const ProviderDashboard = () => {
  const { bookings, acceptBooking, completeBooking } = useBooking();

  const { user } = useAuth();

  const pendingJobs = bookings.filter(
    (booking) => booking.status === "Pending"
  );

  const acceptedJobs = bookings.filter(
    (booking) =>
      booking.status === "Accepted" &&
      booking.providerName === user?.name
  );

  const completedJobs = bookings.filter(
    (booking) =>
      booking.status === "Completed" &&
      booking.providerName === user?.name
  );

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-10">

        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}

          <div className="bg-white rounded-3xl shadow p-8">

            <h1 className="text-4xl font-bold">
              Welcome, {user?.name}
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your service requests.
            </p>

          </div>

          {/* Pending Jobs */}

          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-6">
              Pending Jobs
            </h2>

            {pendingJobs.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center text-gray-500">
                No Pending Jobs
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6">

                {pendingJobs.map((job) => (

                  <div
                    key={job.id}
                    className="bg-white rounded-3xl shadow-lg p-6"
                  >

                    <div className="flex justify-between items-center">

                      <h3 className="text-2xl font-bold">
                        {job.service}
                      </h3>

                      <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm">
                        {job.status}
                      </span>

                    </div>

                    <div className="mt-6 space-y-2">

                      <p>
                        <strong>Customer :</strong> {job.customerName}
                      </p>

                      <p>
                        <strong>Phone :</strong> {job.phone}
                      </p>

                      <p>
                        <strong>Address :</strong> {job.address}
                      </p>

                      <p>
                        <strong>Date :</strong> {job.date}
                      </p>

                      <p>
                        <strong>Time :</strong> {job.time}
                      </p>

                    </div>

                    <button
                      onClick={() =>
                        acceptBooking(job.id, user.name)
                      }
                      className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
                    >
                      Accept Job
                    </button>

                  </div>

                ))}

              </div>
            )}

          </div>

          {/* Accepted Jobs */}

          <div className="mt-14">

            <h2 className="text-3xl font-bold mb-6">
              Accepted Jobs
            </h2>

            {acceptedJobs.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center text-gray-500">
                No Accepted Jobs
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6">

                {acceptedJobs.map((job) => (

                  <div
                    key={job.id}
                    className="bg-white rounded-3xl shadow-lg p-6"
                  >

                    <div className="flex justify-between">

                      <h3 className="text-2xl font-bold">
                        {job.service}
                      </h3>

                      <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full">
                        {job.status}
                      </span>

                    </div>

                    <p className="mt-5">
                      <strong>Customer :</strong> {job.customerName}
                    </p>

                    <button
                      onClick={() =>
                        completeBooking(job.id)
                      }
                      className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold"
                    >
                      Complete Job
                    </button>

                  </div>

                ))}

              </div>
            )}

          </div>

          {/* Completed Jobs */}

          <div className="mt-14 mb-10">

            <h2 className="text-3xl font-bold mb-6">
              Completed Jobs
            </h2>

            {completedJobs.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center text-gray-500">
                No Completed Jobs
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6">

                {completedJobs.map((job) => (

                  <div
                    key={job.id}
                    className="bg-white rounded-3xl shadow-lg p-6"
                  >

                    <div className="flex justify-between">

                      <h3 className="text-2xl font-bold">
                        {job.service}
                      </h3>

                      <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">
                        Completed
                      </span>

                    </div>

                    <div className="mt-5 space-y-2">

                      <p>
                        <strong>Customer :</strong> {job.customerName}
                      </p>

                      <p>
                        <strong>Address :</strong> {job.address}
                      </p>

                    </div>

                  </div>

                ))}

              </div>
            )}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default ProviderDashboard;