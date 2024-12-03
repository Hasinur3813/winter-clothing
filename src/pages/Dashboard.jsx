import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Welcome, {currentUser.displayName || "User"}!
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Here&apos;s an overview of your profile details.
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Profile Image */}
            <div className="bg-primaryColor flex flex-col items-center justify-center py-10">
              {currentUser.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt="Profile"
                  className="object-cover w-36 h-36 rounded-full border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-36 h-36 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-3xl">
                  {currentUser.displayName?.charAt(0) || "?"}
                </div>
              )}

              <h2 className="text-2xl font-semibold text-white mt-4">
                {currentUser.displayName || "User"}
              </h2>
            </div>

            {/* Profile Information */}
            <div className="col-span-2 py-10 px-6 md:px-12">
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg text-gray-600">Name</h3>
                  <p className="text-xl md:text-2xl font-semibold text-gray-800">
                    {currentUser.displayName || "Not Set"}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg text-gray-600">Email</h3>
                  <p className="text-xl md:text-2xl font-semibold text-gray-800">
                    {currentUser.email}
                  </p>
                </div>
              </div>

              {/* Update Profile Button */}
              <div className="mt-10">
                <button
                  onClick={() => navigate("/update-profile")}
                  className="flex items-center gap-2 px-6 py-3 bg-primaryColor text-white rounded-md hover:bg-accentColor transition duration-200"
                >
                  <MdEdit size={24} />
                  <span>Update Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
