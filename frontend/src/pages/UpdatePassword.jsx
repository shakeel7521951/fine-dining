import React, { useState } from "react";
import { toast } from "react-toastify";
import { useUpdatePasswordMutation } from "../redux/slices/UserApi";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  const validatePassword = (password) => {
    return password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New password and confirm password must match!");
      return;
    }

    if (!validatePassword(formData.newPassword)) {
      toast.error("Password must be at least 8 characters long, contain an uppercase letter, and a number.");
      return;
    }

    try {
      const response = await updatePassword(formData).unwrap();
      toast.success(response.message || "Password updated successfully!", {
        position: "top-center",
      });
      navigate("/my-profile");
    } catch (error) {
      toast.error(error.data?.message || "Password update failed!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fff8f0] px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl border border-orange-100">
        <h2 className="text-3xl font-semibold text-center text-orange-600 mb-6">
          Update Your Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {["currentPassword", "newPassword", "confirmPassword"].map((field, index) => (
            <div key={index} className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field === "currentPassword"
                  ? "Current Password"
                  : field === "newPassword"
                  ? "New Password"
                  : "Confirm Password"}
              </label>
              <input
                type={showPassword[field] ? "text" : "password"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder={`Enter ${field === "currentPassword" ? "current" : field === "newPassword" ? "new" : "confirm"} password`}
                required
              />
              <span
                onClick={() => togglePassword(field)}
                className="absolute right-3 top-[38px] cursor-pointer text-orange-500"
                title="Toggle Password"
              >
                {showPassword[field] ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
          ))}

          <button
            type="submit"
            className={`w-full py-2 text-white text-lg font-medium rounded-lg shadow-md transition duration-300 ${
              isLoading
                ? "bg-orange-300 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
