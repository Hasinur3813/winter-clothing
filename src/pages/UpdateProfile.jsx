import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider"; // Assuming you have AuthContext
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { currentUser, updateUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(currentUser?.displayName || "");
  const [photoUrl, setPhotoUrl] = useState(currentUser?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setLoading(true);
      await updateUser(name, photoUrl);
      setCurrentUser((prev) => ({
        ...prev,
        displayName: name,
        photoURL: photoUrl,
      }));
      setLoading(false);
      navigate("/dashboard");
    } catch {
      setLoading(false);
      setError("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className=" py-20 bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Update Profile
        </h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleUpdate}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ec4b6]"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm mb-2"
              htmlFor="photoUrl"
            >
              Photo URL
            </label>
            <input
              type="url"
              id="photoUrl"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ec4b6]"
              placeholder="Enter photo URL"
              required
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full bg-[#2ec4b6] text-white py-2 rounded-lg hover:bg-[#24b1a3] transition duration-300"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>

        {/* Cancel Link */}
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-sm text-gray-600 hover:underline"
          >
            Cancel and Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
