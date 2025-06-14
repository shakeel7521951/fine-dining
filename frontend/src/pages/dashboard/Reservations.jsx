import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useDeleteOrderMutation,
} from "../../redux/slices/OrderApi";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Reservations = () => {
  const { data, isLoading, isError } = useGetAllOrdersQuery();
  const users = data?.orders || [];

  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const [deleteOrder] = useDeleteOrderMutation();

  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [role, setRole] = useState("");
  const [seats, setSeats] = useState("");

  const toggleModal = (user = null) => {
    setSelectedUser(user);
    if (user) {
      setName(user.name);
      setTime(user.time);
      setSeats(user.seats);
      setRole(user.status || user.role);
    } else {
      setName("");
      setTime("");
      setSeats("");
      setRole("");
    }
    setModal(!modal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedUser) return;
    try {
      await updateOrderStatus({
        orderId: selectedUser._id,
        status: role,
      }).unwrap();
      toast.success("Order status updated!");
      toggleModal();
    } catch (error) {
      toast.error("Failed to update order status");
    }
  };

  const confirmDelete = async () => {
    if (!selectedUser) return;
    try {
      await deleteOrder(selectedUser._id).unwrap();
      toast.success("Order deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete order.");
    }
    setDeleteModal(false);
    setSelectedUser(null);
  };

  return (
    <>
      <ToastContainer />

      <div className="w-full md:w-[75%] sm:absolute sm:right-0 top-0">
        <div className="border-0 border-l-2 py-2 border-yellow-500 bg-gray-800">
          <h1 className="mx-4 font-bold sm:text-start text-center sm:text-3xl text-white">
            Reservations
          </h1>
        </div>

        {isLoading && (
          <p className="text-white text-center py-4">Loading reservations...</p>
        )}
        {isError && (
          <p className="text-red-500 text-center py-4">
            Failed to fetch reservations.
          </p>
        )}

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-2 text-start text-xs sm:text-lg">Name</th>
                <th className="border p-2 text-start text-xs sm:text-lg">Time</th>
                <th className="border p-2 text-start text-xs sm:text-lg">Seats</th>
                <th className="border p-2 text-start text-xs sm:text-lg">Status</th>
                <th className="border p-2 text-start text-xs sm:text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="border p-2 text-xs sm:text-lg">
                    {user?.user?.name || "Unknown"}
                  </td>
                  <td className="border p-2 text-xs sm:text-lg text-nowrap">
                    {user.time
                      ? new Date(`1970-01-01T${user.time}:00`).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "--"}
                  </td>
                  <td className="border p-2 text-xs sm:text-lg">{user.seats}</td>
                  <td className="border p-2 text-xs sm:text-lg">
                    <span
                      className={`px-2 py-1 rounded text-xs sm:text-sm font-medium ${
                        user.status === "confirmed"
                          ? "text-green-600"
                          : user.status === "pending"
                          ? "text-yellow-500"
                          : user.status === "cancelled"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {(user.status || user.role)?.charAt(0).toUpperCase() +
                        (user.status || user.role)?.slice(1)}
                    </span>
                  </td>
                  <td className="border text-xs sm:text-lg">
                    <div className="flex justify-evenly items-center gap-3">
                      <span
                        className="text-xl cursor-pointer text-blue-600"
                        onClick={() => toggleModal(user)}
                      >
                        <LuPencilLine />
                      </span>
                      <span
                        className="text-xl text-red-500 cursor-pointer hover:text-red-700"
                        onClick={() => {
                          setSelectedUser(user);
                          setDeleteModal(true);
                        }}
                      >
                        <MdDeleteSweep />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              {users.length === 0 && !isLoading && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-white">
                    No Reserved Product available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Update Status Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
            <button
              onClick={() => toggleModal()}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              <IoClose />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Update Status
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={name}
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={time}
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Seats</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 p-2 rounded"
                  value={seats}
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  className="w-full border border-gray-300 p-2 rounded"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-900"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Delete Confirmation Modal */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Are you sure?</h2>
            <p className="text-sm text-gray-600 mb-6">
              This action will permanently delete the reservation.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setDeleteModal(false);
                  setSelectedUser(null);
                }}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Reservations;
