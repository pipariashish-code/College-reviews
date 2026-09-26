import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">MentroeX</h3>
            <p className="text-gray-400 mb-4">
              Empowering students with comprehensive insights, financial tools,
              and personalized guidance for educational success.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/colleges"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Colleges
                </Link>
              </li>
              <li>
                <Link
                  to="/book-mentor"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Book a Mentor
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-4">
              Our Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/tools/college-fee-comparison"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  College Fee Comparison
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/loan-eligibility"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Loan Eligibility Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/scholarship-finder"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Scholarship Finder
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-4">
              Stay Connected
            </h4>
            <form className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 bg-gray-800 text-white rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full p-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div>
              <p className="text-gray-400 text-sm">
                Contact: ashish.maurya.workmail@gmail.com
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Phone: +91 7897629080
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} SyncMatch. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
