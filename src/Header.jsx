import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt, FaUserCheck, FaChevronDown } from "react-icons/fa";
import Logo from "./Logo";
import GoogleDriveSyncModal from "./components/GoogleDriveSyncModal";
import { HardDrive } from "lucide-react";
import { useAuth } from "./hooks/useAuth";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDriveModalOpen, setIsDriveModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate("/");
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
        <nav className="hidden md:flex items-center space-x-8">
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
            className="flex items-center gap-1.5 hover:text-blue-300 transition duration-200"
          >
            <span>Colleges</span>
            <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/40">
              AI Mode
            </span>
          </Link>

          {/* Tools Menu Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-300 transition duration-200 py-2">
              <span>Tools</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold">
                AI Powered
              </span>
              <svg className="w-3 h-3 ml-0.5 text-gray-300 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-2 z-50">
              <Link
                to="/tools/college-fee-comparison"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-gray-800 text-gray-200 hover:text-blue-300 text-xs font-semibold transition"
              >
                <span className="text-base">⚖️</span>
                <div>
                  <div>Fee & ROI Comparison</div>
                  <div className="text-[10px] text-gray-400 font-normal">Side-by-side college fees</div>
                </div>
              </Link>
              <Link
                to="/tools/loan-eligibility"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-gray-800 text-gray-200 hover:text-emerald-300 text-xs font-semibold transition"
              >
                <span className="text-base">💳</span>
                <div>
                  <div>Loan & EMI Calculator</div>
                  <div className="text-[10px] text-gray-400 font-normal">Salary feasibility check</div>
                </div>
              </Link>
              <Link
                to="/tools/scholarship-finder"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-gray-800 text-gray-200 hover:text-purple-300 text-xs font-semibold transition"
              >
                <span className="text-base">🎓</span>
                <div>
                  <div>Scholarship & Grants Finder</div>
                  <div className="text-[10px] text-gray-400 font-normal">College waivers & NSP</div>
                </div>
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsDriveModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-700/50 hover:bg-blue-600/70 border border-blue-400/30 text-white text-xs font-semibold shadow-sm transition"
            title="Manage Google Drive storage & backups"
          >
            <HardDrive className="w-3.5 h-3.5 text-blue-300" />
            <span>Google Drive</span>
          </button>

          {isLoggedIn && user ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-800/80 hover:bg-blue-700/80 border border-blue-500/40 text-white text-xs font-semibold shadow transition"
              >
                <div className="w-6 h-6 rounded-full bg-amber-400 text-blue-950 font-bold flex items-center justify-center text-xs">
                  {(user.name || user.username || "U").charAt(0).toUpperCase()}
                </div>
                <span className="max-w-[120px] truncate">{user.name || user.username}</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-blue-600/60 rounded text-blue-200 capitalize">
                  {user.role || "student"}
                </span>
                <FaChevronDown className="w-2.5 h-2.5 text-gray-300" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-2 z-50 animate-fadeIn">
                  <div className="px-3 py-2 border-b border-gray-800">
                    <p className="text-xs text-gray-400">Signed in as</p>
                    <p className="text-sm font-bold text-white truncate">{user.name || user.username}</p>
                    <p className="text-[11px] text-blue-400 truncate">{user.email || user.username}</p>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/colleges"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition"
                    >
                      <FaUserCheck className="text-blue-400" />
                      <span>Browse All Colleges & Courses</span>
                    </Link>
                    <Link
                      to="/book-mentor"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition"
                    >
                      <FaUserCircle className="text-emerald-400" />
                      <span>Connect with Mentors</span>
                    </Link>
                  </div>
                  <div className="pt-1 border-t border-gray-800">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded-lg transition text-left"
                    >
                      <FaSignOutAlt />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link
                to="/login"
                className="px-3.5 py-1.5 rounded-lg border border-blue-400/40 hover:bg-blue-800 text-blue-200 hover:text-white text-xs font-semibold transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-gray-950 text-xs font-bold transition duration-200 shadow"
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Google Drive Storage Modal */}
      <GoogleDriveSyncModal
        isOpen={isDriveModalOpen}
        onClose={() => setIsDriveModalOpen(false)}
      />

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
                className="flex items-center justify-between hover:text-blue-400"
                onClick={toggleMenu}
              >
                <span>Colleges</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/30 text-blue-200">AI Mode</span>
              </Link>
            </li>
            <li className="pt-2 pb-1 border-t border-blue-700/60 text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Student AI Tools
            </li>
            <li className="pl-2">
              <Link
                to="/tools/college-fee-comparison"
                className="block text-sm hover:text-blue-300 py-1"
                onClick={toggleMenu}
              >
                ⚖️ Fee & ROI Comparison
              </Link>
            </li>
            <li className="pl-2">
              <Link
                to="/tools/loan-eligibility"
                className="block text-sm hover:text-emerald-300 py-1"
                onClick={toggleMenu}
              >
                💳 Education Loan & EMI
              </Link>
            </li>
            <li className="pl-2">
              <Link
                to="/tools/scholarship-finder"
                className="block text-sm hover:text-purple-300 py-1"
                onClick={toggleMenu}
              >
                🎓 Scholarship & Grants Finder
              </Link>
            </li>
            <li className="pt-2 pb-1 border-t border-blue-700/60">
              <button
                onClick={() => {
                  toggleMenu();
                  setIsDriveModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold text-xs"
              >
                <HardDrive className="w-4 h-4 text-blue-300" />
                <span>Google Drive Storage & Backup</span>
              </button>
            </li>
            <li className="pt-2 pb-1 border-t border-blue-700/60">
              {isLoggedIn && user ? (
                <div className="space-y-2 p-2 bg-blue-900/60 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-400 text-blue-950 font-bold flex items-center justify-center text-sm">
                      {(user.name || user.username || "U").charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">{user.name || user.username}</p>
                      <p className="text-xs text-blue-300 capitalize">{user.role || "student"}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      toggleMenu();
                      handleLogout();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-rose-600/80 hover:bg-rose-500 text-white font-semibold text-xs transition"
                  >
                    <FaSignOutAlt />
                    <span>Log Out</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    to="/login"
                    className="flex items-center justify-center py-2 px-3 rounded-lg border border-blue-400 text-blue-200 text-center font-semibold text-xs"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center justify-center py-2 px-3 rounded-lg bg-amber-400 text-gray-950 text-center font-bold text-xs"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
