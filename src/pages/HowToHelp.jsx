import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const HowToHelp = () => {
  const { currentUser } = useAuth();
  return (
    <section className="py-10 min-h-screen bg-gray-50 text-primaryColor">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">How You Can Help</h1>
        <p className="text-base mb-8">
          Whether it’s through donations, volunteering, or spreading the word,
          every action helps us bring warmth and hope to those in need.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Donate Clothes Section */}
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Donate Clothes</h2>
            <p className="text-base flex-grow mb-6">
              Share the warmth! Donate winter clothes, blankets, and other
              essentials. Every piece counts.
            </p>
            <Link
              to="/donation-campaign"
              className="btn bg-primaryColor text-white hover:!bg-accentColor mt-auto"
            >
              Donate Now
            </Link>
          </div>

          {/* Become a Volunteer Section */}
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Become a Volunteer</h2>
            <p className="text-base flex-grow mb-6">
              Join our amazing team of volunteers to help collect, sort, and
              distribute winter clothing to those in need.
            </p>
            <Link
              to={`${currentUser ? "/donation-campaign" : "/signup"}`}
              className="btn bg-primaryColor text-white hover:!bg-accentColor mt-auto"
            >
              {currentUser ? "Explore" : "Sign Up"}
            </Link>
          </div>

          {/* Spread Awareness Section */}
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Spread Awareness</h2>
            <p className="text-base flex-grow mb-6">
              Help us amplify our message! Share our campaign on social media
              and inspire others to take action.
            </p>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-primaryColor text-white hover:!bg-accentColor mt-auto"
            >
              Share Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
