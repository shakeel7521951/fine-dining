import React, { useState, useRef, useEffect } from 'react';
import { useVerifyUserMutation } from '../redux/slices/UserApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const location = useLocation();
  const email = location.state?.email || '';
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();
  const [verifyUser, { isLoading, isSuccess, isError, error }] = useVerifyUserMutation();

  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (timer === 0) return;
    const countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    return () => clearTimeout(countdown);
  }, [timer]);

  // Handle OTP input
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (!value) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to next input
    if (index < 3 && value) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const updatedOtp = [...otp];
      updatedOtp[index - 1] = '';
      setOtp(updatedOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 4) {
      alert('Please enter a valid 4-digit OTP.');
      return;
    }

    try {
      await verifyUser({ otp: enteredOtp, email }).unwrap();
      toast('OTP verified successfully!');
      navigate('/')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-white to-orange-400 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">OTP Verification</h2>
        <p className="text-gray-600 mb-6">Enter the 4-digit code sent to <strong>{email}</strong></p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-4 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-xl text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            ))}
          </div>

          {isError && (
            <p className="text-red-500 text-sm mb-4">
              {error?.data?.message || 'OTP verification failed'}
            </p>
          )}

          {isSuccess && (
            <p className="text-green-600 text-sm mb-4">OTP verified successfully!</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition"
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </button>

          <div className="mt-4 text-sm text-gray-600">
            Didn't receive the code?{' '}
            {timer > 0 ? (
              <span className="text-gray-400">Resend in {timer}s</span>
            ) : (
              <button
                type="button"
                onClick={() => setTimer(60)}
                className="text-orange-500 hover:underline"
              >
                Resend OTP
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
