import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Users = () => {
  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  // Sample Users Data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Shakeel Ahmad",
      email: "Shakeel034@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Asad Ullah",
      email: "asad@gmail.com",
      role: "Editor",
    },
  ]);

  // Open/Close Modal & Fill form fields if editing
  const toggleModal = (user = null) => {
    setSelectedUser(user);
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    } else {
      setName("");
      setEmail("");
      setRole("");
    }
    setModal(!modal);
  };

  // Delete User
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Update or Add User
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedUser) {
      // Update existing user
      const updatedUsers = users.map((u) =>
        u.id === selectedUser.id ? { ...u, name, email, role } : u
      );
      setUsers(updatedUsers);
    } else {
      // Optionally add a new user
      const newUser = {
        id: Date.now(),
        name,
        email,
        role,
      };
      setUsers([...users, newUser]);
    }

    toggleModal();
  };

  return (
    <>
      <div className="w-full md:w-[75%] sm:absolute sm:right-0 top-0">
        <div className="border-0 border-l-2 py-2 border-yellow-500 bg-gray-800">
          <h1 className="mx-4 font-bold sm:text-3xl text-xl sm:text-start text-center text-white">Users</h1>
        </div>

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
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border p-2 text-xs sm:text-lg">{user.name}</td>
                  <td className="border p-2 text-xs sm:text-lg">{user.email}</td>
                  <td className="border p-2 text-xs sm:text-lg">{user.role}</td>
                  <td className=" border ">
                    <div className=" flex justify-evenly items-center">
                      <span
                        className="text-xl cursor-pointer text-blue-600"
                        onClick={() => toggleModal(user)}
                      >
                        <LuPencilLine />
                      </span>
                      <span
                        className="text-xl cursor-pointer text-red-600"
                        onClick={() => deleteUser(user.id)}
                      >
                        <MdDeleteSweep />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
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
            {/* Close Button */}
            <button
              onClick={() => toggleModal()}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              <IoClose />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              {selectedUser ? "Update User" : "Add User"}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Role
                </label>
                <select
                  id="role"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select role</option>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
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
