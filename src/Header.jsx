import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" px-6 bg-blue-900 text-gray-100 shadow-md">
      <div className="container mx-auto p-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          aria-label="MentoreX home"
          className="flex items-center gap-3 text-2xl font-bold text-white hover:text-blue-200 transition duration-200"
        >
          <Logo size={40} variant="light" />
          <span style={{ fontFamily: "Sora, sans-serif", letterSpacing: "-0.02em" }}>
            Mentore<span className="text-amber-400">X</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <Link to="/" className="hover:text-blue-400 transition duration-200">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/programs"
            className="hover:text-blue-400 transition duration-200"
          >
            View Programs
          </Link>
          <Link
            to="/colleges"
            className="hover:text-blue-400 transition duration-200"
          >
            Colleges
          </Link>
          {/* <Link
            to="/tools"
            className="hover:text-blue-400 transition duration-200"
          >
            Tools
          </Link> */}
          <Link
            to="/login"
            className="hover:text-green-400 transition duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="hover:text-yellow-400 transition duration-200"
          >
            Signup
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-blue-800">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                to="/"
                className="block hover:text-blue-400"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block hover:text-blue-400"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/colleges"
                className="block hover:text-blue-400"
                onClick={toggleMenu}
              >
                Colleges
              </Link>
            </li>
            {/* <li>
              <Link
                to="/tools"
                className="block hover:text-blue-400"
                onClick={toggleMenu}
              >
                Tools
              </Link>
            </li> */}
            <li>
              <Link
                to="/login"
                className="block hover:text-green-400"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
