import { useGetUserOrdersQuery } from "../redux/slices/OrderApi";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const UserReservations = () => {
  const { data, isLoading, error } = useGetUserOrdersQuery();
  const reservations = Array.isArray(data) ? data : data?.orders || [];

  if (isLoading)
    return <p className="text-center py-10 text-gray-500">Loading reservations...</p>;

  if (error)
    return <p className="text-center py-10 text-red-500">Failed to load reservations.</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">My Reservations</h1>

      {reservations.length === 0 ? (
        <p className="text-center text-gray-600">No reservations found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reservations.map((res, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-sm p-6 bg-white hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Reservation #{index + 1}</h2>
                <span
                  className={`text-sm px-3 py-1 rounded-full font-medium ${
                    statusColors[res.status?.toLowerCase()] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {res.status || "Unknown"}
                </span>
              </div>
              <div className="text-gray-700 space-y-1">
                <p><span className="font-medium">Date:</span> {res.date}</p>
                <p><span className="font-medium">Time:</span> {res.time}</p>
                <p><span className="font-medium">Seats:</span> {res.seats}</p>
                {res.message && (
                  <p><span className="font-medium">Request:</span> {res.message}</p>
                )}
                <p className="text-sm text-gray-500 pt-2">
                  <span className="font-medium">Booked on:</span>{" "}
                  {new Date(res.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserReservations;
