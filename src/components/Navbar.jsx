import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout()
      .then(() => toast.success("Logout Successful", { autoClose: 1500 }))
      .catch(() =>
        toast.error("Something went wrong!", {
          autoClose: 1500,
        })
      );
  };

  return (
    <div className="navbar bg-base-100 shadow-lg px-5">
      {/* Navbar Start */}
      <div className="navbar-start !w-10/12 sm:w-1/2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Dropdown Menu for Mobile */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-10 text-base"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/donation-campaign">Donation Campaigns</NavLink>
            </li>
            <li>
              <NavLink to="/how-to-help">How to Help</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        {/* Logo Text */}
        <Link
          to="/"
          className=" font-bold text-lg sm:text-xl hover:!bg-transparent text-primaryColor"
        >
          Winter Donation
        </Link>
      </div>

      {/* Navbar Center - NavLinks for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base gap-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/donation-campaign">Donation Campaigns</NavLink>
          </li>
          <li>
            <NavLink to="/how-to-help">How to Help</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End - Profile/Login */}
      <div className="navbar-end">
        {currentUser ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full">
                <img
                  alt={currentUser?.diplayName}
                  src={currentUser?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="px-6 py-2  rounded-lg bg-primaryColor hover:!bg-accentColor text-white font-semibold shadow-md transform transition-transform hover:shadow-lg"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
