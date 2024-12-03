import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-base mb-2">Phone: +880 123 456 789</p>
            <p className="text-base mb-2">Email: info@winterdonate.com</p>
            <p className="text-base">
              Address: 123 Winter Street, Dhaka, Bangladesh
            </p>
          </div>

          {/* Social Media Links */}
          <div className="footer_links flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:bg-none hover:text-secondaryColor text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondaryColor text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondaryColor text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondaryColor text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} Winter Clothing Donation. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
