import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useProfileQuery } from "../redux/slices/UserApi";
import { clearProfile, setProfile } from "../redux/slices/UserSlice";

const MyProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: profileData, isLoading, error } = useProfileQuery();

  useEffect(() => {
    if (profileData?.user) {
      dispatch(setProfile(profileData.user));
    }
  }, [profileData, dispatch]);

  const profile = useSelector((state) => state.user.profile);

  const handleDeleteProfile = async () => {
    try {
      dispatch(clearProfile());
      navigate("/");
      toast.success("Logout Successfully!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Failed to delete profile.", { position: "top-center" });
    }
  };

  if (isLoading) return <div className="text-center mt-10 text-white">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error loading profile</div>;
  if (!profile) return <div className="text-center mt-10 text-white">No profile found</div>;

  const userInitial = profile?.name?.charAt(0).toUpperCase() || "U";

  return (
    <div className="flex justify-center my-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Profile image or initial */}
        <div className="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center bg-black text-3xl font-bold text-orange-400 mx-auto">
          {profile.profilePic ? (
            <img
              src={profile.profilePic}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            userInitial
          )}
        </div>

        <h2 className="text-2xl font-extrabold mt-5 text-black">Welcome, {profile.name}</h2>
        <p className="text-md text-gray-700 mt-1">{profile.email}</p>
        <p className="text-sm text-gray-500 mt-1">Role: {profile.role}</p>

        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <Link
            to="/update-password"
            className="w-full sm:w-1/2 py-2 rounded-full text-white font-semibold bg-orange-500 hover:bg-orange-600 transition duration-300"
          >
            Update Password
          </Link>
          <button
            onClick={handleDeleteProfile}
            className="w-full sm:w-1/2 py-2 rounded-full text-white font-semibold bg-black border-2 border-orange-500 hover:bg-orange-500 hover:text-black transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
