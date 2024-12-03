import { Link } from "react-router-dom";
import img from "../assets/slider3.jpg";

const About = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-6 lg:px-12">
        {/* Image Section */}
        <div data-aos="fade-up" className="w-full lg:w-1/2">
          <img
            src={img}
            alt="Helping Hands"
            className="w-full h-96 rounded-lg shadow-xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-primaryColor"
          >
            About Us
          </h2>
          <p data-aos="fade-up" className="text-base text-gray-700">
            We believe in making this winter a bit warmer for everyone. Our
            mission is to collect and distribute warm clothing to those who need
            it most, helping families and individuals stay safe and comfortable
            during the cold months.
          </p>
          <p data-aos="fade-up" className="text-base text-gray-700">
            By joining our cause, you can make a tangible difference. Donate
            your gently used winter wear, volunteer to help with collections, or
            spread the word to amplify our reach. Together, we’re creating a
            community of warmth and compassion.
          </p>
          <Link
            data-aos="fade-up"
            to="/how-to-help"
            className="mt-6 px-6 py-2 text-lg font-semibold bg-primaryColor text-white rounded-full hover:!bg-accentColor inline-block transition ease-in-out duration-300"
          >
            Learn How to Contribute
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
