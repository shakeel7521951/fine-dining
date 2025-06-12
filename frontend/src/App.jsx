// App.jsx
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/workpratices/Navbar";
import Home from "./pages/Home";
import Footer from "./Footer";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import TeamSection from "./components/workpratices/TeamSection";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useDispatch } from "react-redux";
import { useProfileQuery } from "./redux/slices/UserApi";
import { clearProfile, setProfile } from "./redux/slices/UserSlice";
import OtpVerification from "./pages/OtpVerification";
import MyProfile from "./pages/MyProfile";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Loader from "./components/Loader";
import UpdatePassword from "./pages/UpdatePassword";
import UserReservations from "./pages/UserReservations";
import Sidebaar from "./components/dashboard/Sidebaar";
import Users from "./pages/dashboard/Users";
// import About from "./pages/About";      // Make sure you import About
// import Explore from "./pages/Explore";  // Make sure you import Explore

// Layout with Navbar, Footer, and Outlet for nested routes
const MainFunction = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div>
      <Sidebaar />
      <Outlet />
    </div>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainFunction />, // Layout component
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/team", element: <TeamSection /> },
      { path: "/reservation", element: <Reservation /> },
      // { path: "/about", element: <About /> },
      // { path: "/explore", element: <Explore /> },
      { path: "/contact", element: <Contact /> },
      { path: "/my-profile", element: <MyProfile /> },
      { path: "/update-password", element: <UpdatePassword /> },
      { path: "/my-reservations", element: <UserReservations /> },
    ],
  },
   {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      { path: "", element: <Users /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/otp-verification", element: <OtpVerification /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
]);

// Root App component
function App() {
  const dispatch = useDispatch();
  const { data: profileData, isLoading } = useProfileQuery();

  useEffect(() => {
    if (profileData) {
      dispatch(setProfile(profileData.user));
    } else {
      dispatch(clearProfile());
    }
  }, [profileData, dispatch]);
  if (isLoading) return <Loader />;
  return <RouterProvider router={router} />;
}

export default App;
