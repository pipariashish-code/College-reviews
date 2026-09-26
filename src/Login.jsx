import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure to install axios: npm install axios
import { API_URL } from "./config";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${API_URL}/api/login`, {
        username,
        password,
      });

      // Assume the backend returns a token and user info
      const { token, user } = response.data;

      // Store token in localStorage
      localStorage.setItem("authToken", token);

      // Store user info
      localStorage.setItem("userInfo", JSON.stringify(user));

      // Redirect based on user role
      if (user.role === "mentor") {
        navigate("/");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
      setLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    // try {
    //   const response = await axios.post("/api/login", {
    //     username: "guest",
    //     password: "guestpassword",
    //   });

    //   const { token, user } = response.data;
    //   localStorage.setItem("authToken", token);
    //   localStorage.setItem("userInfo", JSON.stringify(user));

      navigate("/");
    // } catch (err) {
    //   setError("Guest login failed");
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-900 via-purple-900 to-black text-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute w-48 h-48 bg-green-500 rounded-full animate-blob top-10 left-20 mix-blend-overlay"></div>
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full animate-blob animation-delay-2000 top-1/3 right-20 mix-blend-overlay"></div>
        <div className="absolute w-56 h-56 bg-pink-500 rounded-full animate-blob animation-delay-4000 bottom-1/4 left-1/4 mix-blend-overlay"></div>
      </div>

      <form
        className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-2xl w-full max-w-md z-10 backdrop-blur-sm border border-gray-700"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
          Welcome Back
        </h2>

        <div className="mb-4">
          <label className="block mb-2 text-gray-300">Username or Email:</label>
          <input
            type="text"
            value={username}
            placeholder="Enter your Username or Email"
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-300">Password:</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>
        </div>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded text-white font-bold transition duration-200 mb-4 flex items-center justify-center"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Login"
          )}
        </button>

        <button
          type="button"
          className="w-full bg-gray-700 hover:bg-gray-600 p-3 rounded text-white font-bold transition duration-200"
          onClick={handleGuestLogin}
        >
          Login as Guest
        </button>

        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-blue-400 hover:underline mr-4"
          >
            Forgot Password?
          </Link>
          <Link to="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     console.log({ username, password });
//   };

//   const handleGuestLogin = () => {
//     navigate("/");
//     console.log("Guest login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
//       <form
//         className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
//           Login
//         </h2>

//         <div className="mb-4">
//           <label className="block mb-2">Username or Email:</label>
//           <input
//             type="text"
//             value={username}
//             placeholder="Enter your Username or Email"
//             onChange={(e) => setUsername(e.target.value)}
//             autoComplete="username"
//             required
//             className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2">Password:</label>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               placeholder="Enter your Password"
//               onChange={(e) => setPassword(e.target.value)}
//               autoComplete="current-password"
//               required
//               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <span
//               className="absolute right-3 top-3 cursor-pointer text-gray-400"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "👁️" : "🙈"}
//             </span>
//           </div>
//         </div>

//         {error && <div className="text-red-500 mb-4">{error}</div>}

//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded text-white font-bold transition duration-200"
//         >
//           Login
//         </button>

//         <button
//           type="button"
//           className="w-full bg-gray-700 hover:bg-gray-600 p-3 rounded text-white font-bold mt-4 transition duration-200"
//           onClick={handleGuestLogin}
//         >
//           Login as Guest
//         </button>

//         <p className="mt-4 text-left">
//           Forgot your password?{" "}
//           <Link to="/forgot-password" className="text-blue-400 hover:underline">
//             Click here
//           </Link>
//         </p>
//         <p className="mt-2 text-left">
//           Not registered?{" "}
//           <Link to="/register" className="text-blue-400 hover:underline">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
