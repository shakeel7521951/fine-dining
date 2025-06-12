import React, { useState } from "react";
import { useUserRegistrationMutation } from "../redux/slices/UserApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [userRegistration, { isLoading }] = useUserRegistrationMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await userRegistration({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      }).unwrap();
      toast.success(response.message || "User registered successfully");
      navigate('/otp-verification',{state:{email:formData.email}})
    } catch (error) {
      console.error("Signup failed:", error);

      const errorMsg =
        (error?.data && error.data.message) ||
        error?.error ||
        "Signup failed. Please try again.";

      setErrorMessage(errorMsg);
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-white to-orange-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        {/* Logo / Heading */}
        <div className="mb-6 text-center">
          <div className="w-16 h-16 mx-auto mb-2 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            🍴
          </div>
          <h2 className="text-2xl font-bold text-black">Create an Account</h2>
        </div>

        {errorMessage && (
          <p className="text-sm text-center text-red-600 mb-4">
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-black"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="+1 800 000 111"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-black"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full ${
              isLoading ? "bg-orange-300" : "bg-orange-500 hover:bg-orange-600"
            } text-white font-semibold py-3 rounded transition`}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <span className="text-orange-500 cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
