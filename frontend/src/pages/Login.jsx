import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/slices/UserApi";
import { toast } from "react-toastify";
import { setProfile } from "../redux/slices/UserSlice";
import Loader from "../components/Loader";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData).unwrap();
      setProfile(response.user);
      toast.success(response.message);
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

    if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-white to-orange-500">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        {/* Logo or Branding */}
        <div className="mb-6 text-center">
          <div className="w-16 h-16 mx-auto mb-2 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            🍽️
          </div>
          <h2 className="text-2xl font-bold text-black">Restaurant Login</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
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
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="w-full text-right mb-1">
            <Link
              to="/forgot-password"
              className=" text-sm text-orange-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">
              {error?.data?.message || "Login failed. Please try again."}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full ${
              isLoading ? "bg-orange-300" : "bg-orange-500 hover:bg-orange-600"
            } text-white font-semibold py-3 rounded transition`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-500 cursor-pointer hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
