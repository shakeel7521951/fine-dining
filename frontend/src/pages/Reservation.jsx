import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {useCreateOrderMutation} from '../redux/slices/OrderApi'
import { useProfileQuery } from "../redux/slices/UserApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const { data: profileData } = useProfileQuery();
  const navigate = useNavigate();
  const user = profileData?.user;
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    seats: "",
    request: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderData = {
        date: formData.date,
        time: formData.time,
        seats: formData.seats,
        message: formData.request,
      };
      await createOrder(orderData).unwrap();
      navigate('/my-reservations')
      toast.success("Reservation successful!");
      setFormData((prev) => ({
        ...prev,
        date: "",
        time: "",
        seats: "",
        request: "",
      }));
    } catch (error) {
      console.error("Reservation failed:", error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative justify-center items-center">
        <img
          src="./reservation/reservation-page.jpg"
          alt="reservation"
          className="max-h-[50vh] sm:max-h-[83vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center text-white bg-black/40">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Reservation</h1>
            <p className="mt-2 text-lg">
              Call us +1 800 000 111 or complete the form below
            </p>
          </div>
        </div>
      </div>

      {/* Reservation Form Section */}
      <div className="container mx-auto py-10 px-4">
        <h1 className="font-bold text-xl max-w-2xl mx-auto text-center mb-2">
          Reservations are available online 3 weeks before the date of the
          reservation.
        </h1>
        <p className="text-center mb-8">
          We welcome parties of 1 – 20 guests in our main dining room.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow"
        >
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              readOnly
              className="w-full border p-2 rounded bg-gray-100 text-gray-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full border p-2 rounded bg-gray-100 text-gray-600"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium mb-1">
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone || ""}
              readOnly
              className="w-full border p-2 rounded bg-gray-100 text-gray-600"
            />
          </div>

          <div>
            <label htmlFor="date" className="block font-medium mb-1">
              Date*
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="time" className="block font-medium mb-1">
              Time*
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="seats" className="block font-medium mb-1">
              Seats*
            </label>
            <input
              type="number"
              id="seats"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              placeholder="Number of guests"
              className="w-full border p-2 rounded"
              min="1"
              max="20"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="request" className="block font-medium mb-1">
              Special Request
            </label>
            <textarea
              id="request"
              name="request"
              value={formData.request}
              onChange={handleChange}
              rows="4"
              placeholder="Enter your request"
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              disabled={isLoading}
            >
              {isLoading ? "Booking..." : "Book Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
