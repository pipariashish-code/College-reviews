import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./config";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/api/request-password-change`,
        { email }
      );

      if (response.status === 200) {
        setMessage(response.data.message || "OTP sent to your email.");
        setStep(2);
      } else {
        setError("Email not found.");
      }
    } catch (error) {
      setError(error.response?.data.detail || "Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckOtp = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/api/verify-otp-my`,
        { email, otp }
      );

      if (response.status === 200) {
        setMessage("OTP verified. You can now reset your password.");
        setStep(3);
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError(error.response?.data.detail || "Error verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/password-change`,
        { email, otp, new_password: newPassword }
      );

      if (response.status === 200) {
        alert(
          "Password reset successful. You can now log in with your new password."
        );
        navigate("/login");
      } else {
        setError(
          "Failed to reset password. Please check your OTP and try again."
        );
      }
    } catch (error) {
      setError(error.response?.data.detail || "Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-300 p-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

        {step === 1 && (
          <form onSubmit={handleSendOtp}>
            <div className="mb-4">
              <label className="block mb-2">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {message && <div className="text-green-500 mb-4">{message}</div>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleCheckOtp}>
            <div className="mb-4">
              <label className="block mb-2">OTP:</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {message && <div className="text-green-500 mb-4">{message}</div>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded"
            >
              {loading ? "Verifying OTP..." : "Verify OTP"}
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword}>
            <div className="mb-4">
              <label className="block mb-2">New Password:</label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? "👁️" : "🙈"}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Confirm Password:</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "👁️" : "🙈"}
                </span>
              </div>
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}
            {message && <div className="text-green-500 mb-4">{message}</div>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded"
            >
              {loading ? "Resetting Password..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
