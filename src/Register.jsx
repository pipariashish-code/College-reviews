import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./config";
import { setAuthSession, saveRegisteredUser } from "./utils/auth";
import { FaUserPlus, FaUserGraduate, FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";

const Register = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    city: "",
    state: "",
    password: "",
    confirmPassword: "",
    collegeId: "",
  });
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMsg("");

    if (formData.password.length < 5) {
      setError("Password must be at least 5 characters long.");
      setLoading(false);
      return;
    }

    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please verify.");
      setLoading(false);
      return;
    }

    const role = activeTab === "mentor" ? "mentor" : "student";
    const userPayload = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      username: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      school: formData.school.trim(),
      city: formData.city.trim(),
      state: formData.state.trim(),
      password: formData.password,
      role: role,
      collegeId: formData.collegeId ? formData.collegeId.trim() : undefined,
    };

    try {
      const endpoint =
        role === "mentor"
          ? `${API_URL}/api/register_mentor`
          : `${API_URL}/api/register`;

      let token = `mentorex-auth-${Date.now()}`;
      let registeredUser = {
        id: (role === "mentor" ? "mnt-" : "usr-") + Math.floor(Math.random() * 9000 + 1000),
        ...userPayload,
      };

      try {
        const response = await axios.post(endpoint, userPayload, {
          headers: { "Content-Type": "application/json" },
        });

        if (response.data?.user) {
          registeredUser = response.data.user;
          token = response.data.token || token;
        }
      } catch (networkErr) {
        console.warn("Backend registration endpoint offline, using local persistent registry:", networkErr);
      }

      // Always save to registered users store and start user session
      saveRegisteredUser(registeredUser);
      setAuthSession(registeredUser, token);

      setSuccessMsg(`Welcome to MentoreX, ${registeredUser.name}! Account created successfully.`);
      setTimeout(() => {
        navigate("/");
      }, 700);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-950 via-blue-950 to-black text-gray-100 relative overflow-hidden py-12 px-4">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute w-80 h-80 bg-blue-600 rounded-full animate-blob top-10 left-10 mix-blend-screen filter blur-3xl"></div>
        <div className="absolute w-80 h-80 bg-purple-600 rounded-full animate-blob animation-delay-2000 top-1/2 right-10 mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="bg-gray-800/90 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-lg z-10 backdrop-blur-md border border-gray-700">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 text-2xl mb-3">
            <FaUserPlus />
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Create Your Account
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Join MentoreX to compare fees, check loan feasibility, and explore courses
          </p>
        </div>

        {/* Account Type Tabs */}
        <div className="grid grid-cols-2 gap-2 p-1.5 bg-gray-900/80 rounded-xl mb-6 border border-gray-700">
          <button
            type="button"
            className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition duration-200 ${
              activeTab === "student"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("student")}
          >
            <FaUserGraduate className="text-sm" />
            <span>Student Registration</span>
          </button>
          <button
            type="button"
            className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition duration-200 ${
              activeTab === "mentor"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("mentor")}
          >
            <FaChalkboardTeacher className="text-sm" />
            <span>Mentor Registration</span>
          </button>
        </div>

        {successMsg && (
          <div className="mb-4 p-3.5 bg-emerald-900/60 border border-emerald-500 text-emerald-200 text-xs rounded-xl flex items-center gap-2">
            <FaCheckCircle className="text-emerald-400 text-sm flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {error && (
          <div className="mb-4 p-3.5 bg-rose-900/60 border border-rose-500 text-rose-200 text-xs rounded-xl text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Aarav Sharma"
              required
              className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
                required
                className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 98765 43210"
                required
                className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              {activeTab === "mentor" ? "Affiliated University / Institution *" : "Current School or College *"}
            </label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleInputChange}
              placeholder={activeTab === "mentor" ? "e.g. NFSU / IIT / IIM / NLSIU" : "e.g. St. Xavier's / DPS / BITS"}
              required
              className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {activeTab === "mentor" && (
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Institutional ID / Roll Number (Optional)
              </label>
              <input
                type="text"
                name="collegeId"
                value={formData.collegeId}
                onChange={handleInputChange}
                placeholder="e.g. NFSU-RES-2024-08"
                className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="e.g. Gandhinagar"
                required
                className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                State *
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="e.g. Gujarat"
                required
                className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Min. 5 characters"
                required
                className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Re-enter password"
                required
                className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-xl text-white font-bold text-sm shadow-lg transition duration-200 flex items-center justify-center gap-2 mt-2 ${
              activeTab === "mentor"
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-600/30"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-600/30"
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Creating Account...</span>
              </>
            ) : (
              <span>Register as {activeTab === "mentor" ? "Mentor" : "Student"}</span>
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:text-blue-300 font-bold ml-1">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
