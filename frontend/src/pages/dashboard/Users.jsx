import { useState, useEffect } from "react";
import { LuPencilLine } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {
  useAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
} from "../../redux/slices/UserApi";

const Users = () => {
  const { data: users = [], isLoading, isError } = useAllUsersQuery();
  const [deleteUserApi] = useDeleteUserMutation();
  const [updateUserRoleApi] = useUpdateUserRoleMutation();

  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [localUsers, setLocalUsers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    if (users?.length > 0) {
      setLocalUsers(users);
    }
  }, [users]);

  const toggleModal = (user = null) => {
    setSelectedUser(user);
    setFormData(
      user
        ? { name: user.name, email: user.email, role: user.role }
        : { name: "", email: "", role: "" }
    );
    setModal(!modal);
  };

  // 🔴 Delete from API and update UI
  const handleDeleteUser = async (id) => {
    try {
      await deleteUserApi(id).unwrap();
      setLocalUsers(localUsers.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  // ✅ Update role only
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedUser) {
      try {
        await updateUserRoleApi({ userId: selectedUser._id, role: formData.role }).unwrap();

        // Update UI state
        const updatedUsers = localUsers.map((u) =>
          u._id === selectedUser._id ? { ...u, role: formData.role } : u
        );
        setLocalUsers(updatedUsers);
        toggleModal();
      } catch (err) {
        console.error("Failed to update role:", err);
      }
    }
  };

  return (
    <>
      <div className="w-full md:w-[75%] sm:absolute sm:right-0 top-0">
        <div className="border-0 border-l-2 py-2 border-yellow-500 bg-gray-800">
          <h1 className="mx-4 font-bold sm:text-3xl text-xl sm:text-start text-center text-white">
            Users
          </h1>
        </div>

        {isLoading && <p className="text-center py-4 text-white">Loading users...</p>}
        {isError && <p className="text-center py-4 text-red-500">Error fetching users.</p>}

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-2 text-start text-xs sm:text-lg">UserName</th>
                <th className="border p-2 text-start text-xs sm:text-lg">Email</th>
                <th className="border p-2 text-start text-xs sm:text-lg">Role</th>
                <th className="border p-2 text-start text-xs sm:text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {localUsers.map((user) => (
                <tr key={user._id}>
                  <td className="border p-2 text-xs sm:text-lg">{user.name}</td>
                  <td className="border p-2 text-xs sm:text-lg">{user.email}</td>
                  <td className="border p-2 text-xs sm:text-lg">{user.role}</td>
                  <td className="border">
                    <div className="flex justify-evenly items-center">
                      <span
                        className="text-xl cursor-pointer text-blue-600"
                        onClick={() => toggleModal(user)}
                      >
                        <LuPencilLine />
                      </span>
                      <span
                        className="text-xl cursor-pointer text-red-600"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        <MdDeleteSweep />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              {localUsers.length === 0 && !isLoading && (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Modal Section */}
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
              Update User Role
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  readOnly
                  className="w-full border border-gray-300 p-2 rounded bg-gray-100"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  readOnly
                  className="w-full border border-gray-300 p-2 rounded bg-gray-100"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  <option value="">Select role</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-900 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
