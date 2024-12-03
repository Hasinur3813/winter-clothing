import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { login, signInWithGoogle } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setLoading(true);
      await login(email, password);
      toast.success("Successfully Logged in", {
        autoClose: 1500,
      });
      setLoading(false);
      navigate(`${location?.state ? location.state : "/"}`);
    } catch {
      setError("Email or Password is incorrect!");
      setLoading(false);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      setError(null);
      await signInWithGoogle();
      toast.success("Successfully Logged in", {
        autoClose: 1500,
      });
      setLoading(false);
      navigate(`${location?.state ? location.state : "/"}`);
    } catch (e) {
      setError(e.code);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleResetPassword = () => {
    navigate("/forget-password", { state: email });
  };
  return (
    <div className="pt-14 bg-secondaryColor min-h-screen pb-5">
      <div className="container mx-auto px-3 justify-center items-center flex flex-col lg:flex-row gap-10">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-primaryColor">
            Login now!
          </h1>
          <p className="max-w-md py-6 text-gray-700">
            Join our community and make a difference this winter. Donate warm
            clothing and help others stay warm!
          </p>
        </div>

        {/* Login Form Section */}
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-xl"
              >
                {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>

              <label className="label">
                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="label-text-alt link link-hover text-primaryColor"
                >
                  Forgot password?
                </button>
              </label>
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

            {/* Login Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading && "bg-opacity-50  !bg-primaryColor"
                } btn bg-primaryColor text-white hover:bg-accentColor text-lg`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            {/* Google Sign-In Button */}
            <div className="form-control mt-4">
              <button
                onClick={handleGoogleLogin}
                className="btn text-lg bg-white text-primaryColor border-2 border-primaryColor hover:bg-primaryColor hover:text-white"
              >
                <FaGoogle className="mr-2" />
                Sign in with Google
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?
                <Link
                  to="/signup"
                  className="text-primaryColor hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
