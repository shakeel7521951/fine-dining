// App.jsx
import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useProfileQuery } from "./redux/slices/UserApi";
import { clearProfile, setProfile } from "./redux/slices/UserSlice";

// Layout Components
import Navbar from "./components/workpratices/Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Sidebaar from "./components/dashboard/Sidebaar";
import Loader from "./components/Loader";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import TeamSection from "./components/workpratices/TeamSection";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OtpVerification from "./pages/OtpVerification";
import MyProfile from "./pages/MyProfile";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import UserReservations from "./pages/UserReservations";

// Dashboard Pages
import Users from "./pages/dashboard/Users";
import Reservations from "./pages/dashboard/Reservations";
import Menus from "./pages/dashboard/Menus";

// Admin Route Guard
import AdminRoute from "./AdminRoute";

// ========== Main Layout ==========
const MainFunction = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

// ========== Admin Layout ==========
const AdminDashboard = () => {
  return (
    <div>
      <Sidebaar />
      <Outlet />
    </div>
  );
};

// ========== Router ==========
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainFunction />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/team", element: <TeamSection /> },
      { path: "/reservation", element: <Reservation /> },
      { path: "/contact", element: <Contact /> },
      { path: "/my-profile", element: <MyProfile /> },
      { path: "/update-password", element: <UpdatePassword /> },
      { path: "/my-reservations", element: <UserReservations /> },
    ],
  },
  {
    path: "/admin",
    element: (
        <AdminDashboard />
    ),
    children: [
      { path: "users", element: <Users /> },
      { path: "reservations", element: <Reservations /> },
      { path: "menu", element: <Menus /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/otp-verification", element: <OtpVerification /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
]);

// ========== Root App ==========
function App() {
  const dispatch = useDispatch();
  const { data: profileData, isLoading } = useProfileQuery();

  useEffect(() => {
    if (profileData?.user) {
      dispatch(setProfile(profileData.user));
    } else {
      dispatch(clearProfile());
    }
  }, [profileData, dispatch]);

  if (isLoading) return <Loader />;

  return <RouterProvider router={router} />;
}

export default App;
