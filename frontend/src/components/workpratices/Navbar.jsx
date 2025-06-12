  import React, { useState } from "react";
  import { ImCross } from "react-icons/im";
  import { FaBars } from "react-icons/fa6";
  import { useDispatch } from "react-redux";
  import { useNavigate, Link } from "react-router-dom";
  import "./navbar.css";
  import { useLogoutMutation, useProfileQuery } from "../../redux/slices/UserApi";
  import { clearProfile } from "../../redux/slices/UserSlice";

  const NavBar = () => {
    const [underLine, setUnderLine] = useState("home");
    const { data: profile } = useProfileQuery();
    const [icon, setIcon] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutApi] = useLogoutMutation();

    // Safe access to user profile data or fallback
    const userProfile = profile?.user || {};
    const getInitial = (name) => {
      return name ? name.charAt(0).toUpperCase() : "";
    };
  console.log(userProfile)
    const handleLogout = async () => {
      try {
        await logoutApi();
        dispatch(clearProfile());
        setShowDropdown(false);
        navigate("/login");
      } catch (err) {
        console.error("Logout failed:", err);
      }
    };

    return (
      <div>
        <nav className="flex bg-[#333] text-white justify-around items-center h-[80px] relative">
          {/* Brand Logo */}
          <Link className="navbar-brand fs-5" to="/">
            <h1>
              <img
                src="https://matchthemes.com/demohtml/caverta/images/caverta-logo.png"
                alt="Brand Logo"
              />
            </h1>
          </Link>

          {/* Navigation Links */}
          <ul className={icon ? "hideNav" : "showNav"}>
            <Link to="/">
              <li
                onClick={() => setUnderLine("home")}
                className={
                  underLine === "home"
                    ? "bg-black px-7 py-2 border-b-4 border-amber-500"
                    : "hover:bg-black px-7 py-2"
                }
              >
                HOME
              </li>
            </Link>
            <Link to="/menu">
              <li
                onClick={() => setUnderLine("menu")}
                className={
                  underLine === "menu"
                    ? "bg-black px-7 py-2 border-b-4 border-amber-500"
                    : "hover:bg-black px-7 py-2"
                }
              >
                MENU
              </li>
            </Link>
            <Link to="/reservation">
              <li
                onClick={() => setUnderLine("reservation")}
                className={
                  underLine === "reservation"
                    ? "bg-black px-7 py-2 border-b-4 border-amber-500"
                    : "hover:bg-black px-7 py-2"
                }
              >
                RESERVATIONS
              </li>
            </Link>
            <Link to="/blog">
              <li
                onClick={() => setUnderLine("blog")}
                className={
                  underLine === "blog"
                    ? "bg-black px-7 py-2 border-b-4 border-amber-500"
                    : "hover:bg-black px-7 py-2"
                }
              >
                BLOG
              </li>
            </Link>
            <Link to="/team">
              <li
                onClick={() => setUnderLine("team")}
                className={
                  underLine === "team"
                    ? "bg-black px-7 py-2 border-b-4 border-amber-500"
                    : "hover:bg-black px-7 py-2"
                }
              >
                TEAM
              </li>
            </Link>
            <Link to="/contact">
              <li
                onClick={() => setUnderLine("contact")}
                className={
                  underLine === "contact"
                    ? "bg-black px-7 py-2 border-b-4 border-amber-500"
                    : "hover:bg-black px-7 py-2"
                }
              >
                CONTACT
              </li>
            </Link>
          </ul>

          {/* User Auth Section */}
          <div className="relative">
            {profile ? (
              <>
                {/* Show user initial or name as button */}
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="bg-amber-500 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold"
                  title={userProfile.name || "User"}
                >
                  {getInitial(userProfile.name)}
                </button>

                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute right-0 top-12 bg-white shadow-lg border rounded-md py-2 z-50 min-w-[160px] text-black">
                    <Link
                      to="/my-profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setShowDropdown(false)}
                    >
                      My Profile
                    </Link>

                    {userProfile.role === "Admin" && (
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setShowDropdown(false)}
                      >
                        Dashboard
                      </Link>
                    )}
                    {userProfile.role === "User" && (
                      <Link
                        to="/my-reservations"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setShowDropdown(false)}
                      >
                        My Reservations
                      </Link>
                    )}

                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex gap-2 ">
                <Link to="/login">
                  <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition-colors duration-300">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="icons">
            {icon ? (
              <FaBars
                onClick={() => setIcon(!icon)}
                className="text-3xl cursor-pointer"
              />
            ) : (
              <ImCross
                onClick={() => setIcon(!icon)}
                className="text-3xl cursor-pointer"
              />
            )}
          </div>
        </nav>
      </div>
    );
  };

  export default NavBar;
