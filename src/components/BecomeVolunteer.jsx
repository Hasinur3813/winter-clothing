import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const BecomeVolunteer = () => {
  const { currentUser } = useAuth();

  return (
    <section className="py-10 md:py-16 bg-primaryColor text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
          Become a Volunteer
        </h2>
        {currentUser ? (
          <div data-aos="fade-up" className="max-w-3xl mx-auto">
            <p className="text-base mb-2">
              Thank you for being a part of our mission,{" "}
              <strong>{currentUser.displayName || "Valued Volunteer"}</strong>!
            </p>
            <p className="text-base mb-6">
              Check out the latest opportunities to make an impact. Your efforts
              help us bring warmth and hope to those in need.
            </p>
            <Link
              to="/donation-campaign"
              className="btn text-lg bg-white text-primaryColor hover:bg-secondaryColor"
            >
              Show Campaigns
            </Link>
          </div>
        ) : (
          <div data-aos="fade-up" className="max-w-3xl mx-auto">
            <p className="text-base mb-2">
              Help us spread warmth this winter by becoming a volunteer. Join
              our team of passionate individuals dedicated to making a
              difference.
            </p>
            <p className="mb-6 text-base">
              Volunteers will assist in collecting, sorting, and distributing
              winter clothing to people in need across Bangladesh.
            </p>
            <Link
              to="/signup"
              className="btn text-lg bg-white text-primaryColor hover:bg-secondaryColor"
            >
              Sign Up Now
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BecomeVolunteer;
