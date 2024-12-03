import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi"; // React Icon for email input
import { useAuth } from "../contexts/AuthProvider";

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState(location?.state || "");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setSuccess(null);
      setLoading(true);
      await resetPassword(email);
      setLoading(false);
      setSuccess(true);
      window.open("https://mail.google.com", "_blank");
    } catch (e) {
      setError(e.code);
      setLoading(false);
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2ec4b6] to-[#cbf3f0]">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-2xl font-bold text-[#2ec4b6] mb-4 text-center">
          Forgot Password?
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your email address to receive a password reset link.
        </p>
        <form onSubmit={handleResetPassword}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-gray-600">Email Address</span>
            </label>
            <div className="input-group">
              <span className="input-group-text bg-primaryColor text-white">
                <FiMail />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full focus:outline-primaryColor"
                required
              />
            </div>
          </div>

          {/* success alert  */}
          {success && (
            <div role="alert" className="alert alert-success mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Password reset link has been sent to your Email!</span>
            </div>
          )}

          {/* error alert */}

          {error && (
            <div role="alert" className="alert alert-error mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading && "bg-opacity-50 !bg-primaryColor"
            } btn w-full mb-4 bg-primaryColor hover:bg-[#249e8e] text-white border-none`}
          >
            {loading ? "Sending reset link..." : "Send Reset Link"}
          </button>
        </form>
        <button
          className="btn btn-outline w-full text-[#2ec4b6] border-[#2ec4b6] hover:bg-[#2ec4b6] hover:text-white"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
