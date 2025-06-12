import React, { useState, useRef } from "react";
import {
  useForgotpasswordotpMutation,
  useVerifyOTPMutation,
} from "../redux/slices/UserApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputRefs = useRef([]);
  const [forgotpasswordotp, { isLoading, error }] = useForgotpasswordotpMutation();
  const [verifyOTP, { isLoading: verifyOtpLoading }] = useVerifyOTPMutation();

  const handleSendOtp = async () => {
    try {
      const response = await forgotpasswordotp(email).unwrap();
      toast.success(response.message, { position: "top-center" });
      if (response.message === "OTP sent successfully!") {
        setOtpSent(true);
      }
    } catch (err) {
      toast.error(err.data?.message || "Failed to send OTP.", {
        position: "top-center",
      });
    }
  };

  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 4) {
      toast.error("Please enter a valid 4-digit OTP.", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await verifyOTP({ email, otp: enteredOtp }).unwrap();
      toast.success(response.message, { position: "top-center" });
      navigate("/reset-password", { state: { email } });
    } catch (err) {
      toast.error(err.data?.message || "Failed to verify OTP.", {
        position: "top-center",
      });
    }
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      otpInputRefs.current[index + 1].focus();
    }
  };

 if (isLoading) return <Loader />;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Something went wrong. Please try again later!
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <div className="p-8 rounded-xl shadow-lg bg-white w-full max-w-md border-t-8 border-orange-500">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          Forgot Password
        </h1>

        {!otpSent ? (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-orange-500 text-black"
            />
            <button
              onClick={handleSendOtp}
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md w-full font-semibold transition duration-300"
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <p className="text-center text-gray-700">
              Enter the OTP sent to your email
            </p>
            <div className="flex justify-center gap-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  ref={(el) => (otpInputRefs.current[index] = el)}
                  className="w-14 h-14 text-xl text-center border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500 text-black"
                />
              ))}
            </div>
            <button
              onClick={handleVerifyOtp}
              disabled={verifyOtpLoading}
              className={`${
                verifyOtpLoading
                  ? "bg-orange-300"
                  : "bg-orange-500 hover:bg-orange-600"
              } text-white py-2 rounded-md w-full font-semibold transition duration-300`}
            >
              {verifyOtpLoading ? "Verifying..." : "Verify OTP"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
