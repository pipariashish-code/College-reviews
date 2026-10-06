import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./config";
import { setAuthSession, authenticateLocally, DEMO_USERS } from "./utils/auth";
import { FaUserCheck, FaSignInAlt, FaLock, FaUser } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/";

  const completeLogin = (user, token) => {
    setAuthSession(user, token);
    setSuccessMsg(`Welcome back, ${user.name || user.username}! Logging in...`);
    setTimeout(() => {
      navigate(redirectPath);
    }, 600);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMsg("");

    try {
      // 1. Attempt backend authentication
      const response = await axios.post(`${API_URL}/api/login`, {
        username,
        password,
      });

      const { token, user } = response.data;
      completeLogin(user, token);
    } catch (err) {
      console.warn("Backend login failed or offline, checking local registry...", err);
      // 2. Intelligent local fallback (supports offline testing, demo accounts & registered users)
      const localResult = authenticateLocally(username, password);
      if (localResult.success) {
        completeLogin(localResult.user, localResult.token);
      } else {
        setError(
          err.response?.data?.message ||
          localResult.error ||
          "Login failed. Please check your credentials."
        );
        setLoading(false);
      }
    }
  };

  const handleGuestLogin = () => {
    completeLogin(DEMO_USERS.guest, "mock-guest-token");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-950 via-slate-900 to-black text-gray-100 relative overflow-hidden py-12 px-4">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-25 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full animate-blob top-10 left-20 mix-blend-screen filter blur-3xl"></div>
        <div className="absolute w-80 h-80 bg-purple-500 rounded-full animate-blob animation-delay-2000 top-1/3 right-20 mix-blend-screen filter blur-3xl"></div>
        <div className="absolute w-64 h-64 bg-emerald-500 rounded-full animate-blob animation-delay-4000 bottom-1/4 left-1/4 mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="bg-gray-800/90 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md z-10 backdrop-blur-md border border-gray-700">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600/30 border border-blue-400/40 text-blue-300 text-2xl mb-3 shadow-inner">
            <FaSignInAlt />
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Access your MentoreX college directory & mentoring dashboard
          </p>
        </div>

        {successMsg && (
          <div className="mb-4 p-3.5 bg-emerald-900/60 border border-emerald-500 text-emerald-200 text-xs rounded-xl flex items-center gap-2">
            <FaUserCheck className="text-emerald-400 text-sm flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {error && (
          <div className="mb-4 p-3.5 bg-rose-900/60 border border-rose-500 text-rose-200 text-xs rounded-xl text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Username or Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaUser className="w-3.5 h-3.5" />
              </span>
              <input
                type="text"
                value={username}
                placeholder="e.g. student@mentorex.co.in or rahul123"
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                className="w-full pl-9 pr-3 py-2.5 bg-gray-900/90 border border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-semibold text-gray-300">
                Password
              </label>
              <Link
                to="/forgot-password"
                state={{ email: username.trim() }}
                className="text-xs text-blue-400 hover:text-blue-300"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaLock className="w-3.5 h-3.5" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full pl-9 pr-10 py-2.5 bg-gray-900/90 border border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-200"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition duration-200 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Authenticating...</span>
              </>
            ) : (
              <span>Sign In to Account</span>
            )}
          </button>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="flex-shrink mx-3 text-[11px] text-gray-500 uppercase tracking-wider">or</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          <button
            type="button"
            className="w-full py-2.5 px-4 bg-gray-700/80 hover:bg-gray-600/80 border border-gray-600 rounded-xl text-gray-200 font-semibold text-xs transition duration-200"
            onClick={handleGuestLogin}
          >
            Continue as Guest
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          Don't have an account yet?{" "}
          <Link to="/register" className="text-blue-400 hover:text-blue-300 font-bold ml-1">
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
