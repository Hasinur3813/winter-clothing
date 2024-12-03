import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { setCurrentUser, signup, signInWithGoogle, updateUser } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    photoUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (formData.password !== formData.confirmPassword) {
      setError("Password don't match!");
      return;
    }
    if (!regex.test(formData.password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and be a minimum of 6 characters in length."
      );
      return;
    }

    try {
      setError(null);
      setLoading(true);
      await signup(formData.email, formData.password);
      await updateUser(formData.name, formData.photoUrl);
      setCurrentUser((prevUser) => ({
        ...prevUser,
        displayName: formData.name,
        photoURL: formData.photoUrl,
      }));
      setLoading(false);
      navigate("/");
    } catch (e) {
      setError(e.code);
      setLoading(false);
    }
  };

  const hadleGoogleSignIn = async () => {
    try {
      setError(null);
      await signInWithGoogle();
      setLoading(false);
      navigate("/");
    } catch (e) {
      setError(e.code);
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="pt-14 pb-5 bg-secondaryColor min-h-screen">
      <div className="container mx-auto px-3 justify-center items-center flex flex-col lg:flex-row gap-10">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-primaryColor">
            Create an Account
          </h1>
          <p className="max-w-md py-6 text-gray-700">
            Join our community and make a difference this winter. Create an
            account to donate warm clothing and help others stay warm!
          </p>
        </div>

        {/* Signup Form Section */}
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                value={formData.name}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            {/* Photo URL Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photoUrl"
                placeholder="Enter your profile photo URL"
                className="input input-bordered"
                value={formData.photoUrl}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* Password Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered pr-10"
                value={formData.password}
                onChange={(e) => handleChange(e)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-12 text-xl"
              >
                {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                className="input input-bordered pr-10"
                value={formData.confirmPassword}
                onChange={(e) => handleChange(e)}
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-2 top-12  text-xl"
              >
                {confirmPasswordVisible ? (
                  <AiFillEye />
                ) : (
                  <AiFillEyeInvisible />
                )}
              </button>
            </div>

            {error && (
              <div role="alert" className="alert alert-error">
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

            {/* Register Button */}
            <div className="form-control mt-6">
              <button
                disabled={loading}
                className={`${
                  loading && "bg-opacity-50 cursor-not-allowed !bg-primaryColor"
                } btn bg-primaryColor text-white hover:bg-accentColor`}
              >
                {loading ? "Creating an account..." : "Register"}
              </button>
            </div>

            {/* Google Sign-Up Button */}
            <div className="form-control mt-4">
              <button
                onClick={hadleGoogleSignIn}
                className="btn bg-white text-lg text-primaryColor border-2 border-primaryColor hover:bg-primaryColor hover:text-white"
              >
                <FaGoogle className="mr-2" />
                Sign up with Google
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-primaryColor hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
