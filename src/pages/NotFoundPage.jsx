import { Link } from "react-router-dom";
import { FaSnowflake } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-secondaryColor text-primaryColor p-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center items-center space-x-2">
          <FaSnowflake className="text-6xl animate-spin-slow" />
          <h1 className="text-8xl font-bold">404</h1>
          <FaSnowflake className="text-6xl animate-spin-slow" />
        </div>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-lg text-gray-700">
          Sorry, the page you’re looking for doesn’t exist or was moved.
        </p>
        <Link
          to="/"
          className="btn bg-primaryColor hover:bg-accentColor text-white mt-4 px-6 py-3"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
