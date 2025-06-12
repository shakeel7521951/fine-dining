import { useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import { MdDeleteSweep } from "react-icons/md";
import { IoClose } from "react-icons/io5";


const Reservations = () => {
    const [modal, setModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    // Form States
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [role, setRole] = useState("");
    const [seats, setSeats] = useState("");

    // Sample Users Data
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Tomato Bruschetta",
            time: new Date().toTimeString().slice(0, 5), // "HH:mm"
            seats: 8,
            role: "Reserved",
        },
        {
            id: 2,
            name: "Marinated Grilled Shrimp",
            time: new Date().toTimeString().slice(0, 5),
            seats: 3,
            role: "Pending",
        },
    ]);


    // Open/Close Modal & Fill form fields if editing
    const toggleModal = (user = null) => {
        setSelectedUser(user);
        if (user) {
            setName(user.name);
            setTime(user.time);
            // setSeats(user.seats);
            setRole(user.role);
        } else {
            setName("");
            setTime("");
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
                u.id === selectedUser.id ? { ...u, name, time, seats, role } : u
            );
            setUsers(updatedUsers);
        } else {
            // Optionally add a new user
            const newUser = {
                id: Date.now(),
                name,
                time,
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
                    <h1 className="mx-4 font-bold sm:text-start text-center sm:text-3xl text-white">Reservations</h1>
                </div>

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
                                <tr key={user.id}>
                                    <td className="border p-2  text-xs sm:text-lg">{user.name}</td>
                                    <td className="border p-2 text-md text-xs text-nowrap sm:text-lg">
                                        {new Date(`1970-01-01T${user.time}:00`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </td>

                                    <td className="border p-2 text-xs sm:text-lg">{user.seats}</td>
                                    <td className="border p-2 text-xs sm:text-lg">{user.role}</td>
                                    <td className="  border  text-xs sm:text-lg">
                                        <div className=" flex justify-evenly w-full items-center">
                                            <span
                                                className=" h-full text-xl cursor-pointer text-blue-600"
                                                onClick={() => toggleModal(user)}
                                            >
                                                <LuPencilLine />
                                            </span>
                                            <span
                                                className="text-xl h-full cursor-pointer text-red-600"
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
                                        No Reserved Product available
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
                            {selectedUser ? "Update Status" : "Add User"}
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
                                    readOnly

                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Time
                                </label>
                                <input
                                    type="time"
                                    id="email"
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                                    placeholder="Enter your time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}

                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="seats"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Seats
                                </label>
                                <input
                                    type="number"
                                    id="seats"
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                                    placeholder="Enter your seats"
                                    value={seats}
                                    onChange={(e) => setSeats(e.target.value)}
                                    readOnly
                                />
                            </div>


                            <div className="mb-4">
                                <label
                                    htmlFor="role"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Status
                                </label>
                                <select
                                    id="role"
                                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    required

                                >
                                    <option value="">Status</option>
                                    <option value="reserved">Reserved</option>
                                    <option value="pending">Pending</option>
                                    <option value="Cancel">Cancel</option>
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

export default Reservations;
