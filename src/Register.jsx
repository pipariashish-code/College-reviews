import { useState } from "react";
import axios from "axios";
import { API_URL } from "./config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    city: "",
    state: "",
    password: "",
    // collegeId: "",
    // collegeIdProof: null,
    // resume: null,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formPayload = new FormData();
      Object.keys(formData).forEach((key) => {
        formPayload.append(key, formData[key]);
      });

      // Use different API endpoints based on registration type
      const endpoint =
        activeTab === "mentor"
          ? `${API_URL}/api/register_mentor`
          : `${API_URL}/api/register`;

      const response = await axios.post(endpoint, formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Assuming backend returns token and user info
      const { token, user } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("userInfo", JSON.stringify(user));

      // Redirect based on registration type
      navigate(activeTab === "mentor" ? "/" : "/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-900 via-purple-900 to-black text-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute w-48 h-48 bg-green-500 rounded-full animate-blob top-10 left-20 mix-blend-overlay"></div>
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full animate-blob animation-delay-2000 top-1/3 right-20 mix-blend-overlay"></div>
        <div className="absolute w-56 h-56 bg-pink-500 rounded-full animate-blob animation-delay-4000 bottom-1/4 left-1/4 mix-blend-overlay"></div>
      </div>

      <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-2xl w-full max-w-lg z-10 backdrop-blur-sm border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
          Create Your Account
        </h2>

        {/* Tabs */}
        <div className="flex justify-around mb-6">
          <button
            className={`p-2 w-1/2 text-center transition duration-300 ${
              activeTab === "user"
                ? "border-b-2 border-blue-400 text-blue-400"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("user")}
          >
            User Registration
          </button>
          <button
            className={`p-2 w-1/2 text-center transition duration-300 ${
              activeTab === "mentor"
                ? "border-b-2 border-green-400 text-green-400"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("mentor")}
          >
            Mentor Registration
          </button>
        </div>

        {error && (
          <div className="text-red-500 text-center mb-4 p-3 bg-red-100 bg-opacity-10 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
            className={`w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 ${
              activeTab === "mentor"
                ? "focus:ring-green-400"
                : "focus:ring-blue-400"
            }`}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            className={`w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 ${
              activeTab === "mentor"
                ? "focus:ring-green-400"
                : "focus:ring-blue-400"
            }`}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
            className={`w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 ${
              activeTab === "mentor"
                ? "focus:ring-green-400"
                : "focus:ring-blue-400"
            }`}
          />

          {activeTab === "user" ? (
            <>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleInputChange}
                placeholder="School/College Name"
                required
                className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  required
                  className="w-1/2 p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  required
                  className="w-1/2 p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </>
          ) : (
            <>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleInputChange}
                placeholder="College Name"
                required
                className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                name="collegeId"
                value={formData.collegeId}
                onChange={handleInputChange}
                placeholder="College ID Number"
                required
                className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <div className="space-y-2">
                <label className="text-gray-300">College ID Proof</label>
                <input
                  type="file"
                  name="collegeIdProof"
                  onChange={handleInputChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  // required
                  className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400 file:mr-4 file:rounded file:border-0 file:bg-gray-600 file:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-300">Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  accept=".pdf,.doc,.docx"
                  // required
                  className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400 file:mr-4 file:rounded file:border-0 file:bg-gray-600 file:text-white"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  required
                  className="w-1/2 p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  required
                  className="w-1/2 p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </>
          )}

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your Password"
            required
            className={`w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 ${
              activeTab === "mentor"
                ? "focus:ring-green-400"
                : "focus:ring-blue-400"
            }`}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded text-white font-bold transition duration-200 flex items-center justify-center ${
              activeTab === "mentor"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
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
              `Register as ${activeTab === "user" ? "User" : "Mentor"}`
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

// import { useState } from "react";
// import axios from "axios"; // Make sure to install axios: npm install axios
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [activeTab, setActiveTab] = useState("user");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     school: "",
//     city: "",
//     state: "",
//     password: "",
//     collegeId: "",
//     collegeIdProof: null,
//     resume: null,
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const formPayload = new FormData();
//       Object.keys(formData).forEach((key) => {
//         formPayload.append(key, formData[key]);
//       });
//       formPayload.append("role", activeTab);

//       const response = await axios.post(
//         `${API_URL}/api/register`,
//         formPayload,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       // Assuming backend returns token and user info
//       const { token, user } = response.data;
//       localStorage.setItem("authToken", token);
//       localStorage.setItem("userInfo", JSON.stringify(user));

//       // Redirect based on registration type
//       navigate(activeTab === "mentor" ? "/mentor-onboarding" : "/user-welcome");
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "Registration failed. Please try again."
//       );
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-900 via-purple-900 to-black text-gray-100 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
//         <div className="absolute w-48 h-48 bg-green-500 rounded-full animate-blob top-10 left-20 mix-blend-overlay"></div>
//         <div className="absolute w-64 h-64 bg-purple-500 rounded-full animate-blob animation-delay-2000 top-1/3 right-20 mix-blend-overlay"></div>
//         <div className="absolute w-56 h-56 bg-pink-500 rounded-full animate-blob animation-delay-4000 bottom-1/4 left-1/4 mix-blend-overlay"></div>
//       </div>

//       <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-2xl w-full max-w-lg z-10 backdrop-blur-sm border border-gray-700">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
//           Create Your Account
//         </h2>

//         {/* Tabs */}
//         <div className="flex justify-around mb-6">
//           <button
//             className={`p-2 w-1/2 text-center transition duration-300 ${
//               activeTab === "user"
//                 ? "border-b-2 border-blue-400 text-blue-400"
//                 : "text-gray-400 hover:text-gray-200"
//             }`}
//             onClick={() => setActiveTab("user")}
//           >
//             User Registration
//           </button>
//           <button
//             className={`p-2 w-1/2 text-center transition duration-300 ${
//               activeTab === "mentor"
//                 ? "border-b-2 border-green-400 text-green-400"
//                 : "text-gray-400 hover:text-gray-200"
//             }`}
//             onClick={() => setActiveTab("mentor")}
//           >
//             Mentor Registration
//           </button>
//         </div>

//         {error && <div className="text-red-500 text-center mb-4">{error}</div>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Name"
//             required
//             className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Email"
//             required
//             className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             placeholder="Phone Number"
//             required
//             className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           {activeTab === "user" && (
//             <>
//               <input
//                 type="text"
//                 name="school"
//                 value={formData.school}
//                 onChange={handleInputChange}
//                 placeholder="School/College Name"
//                 required
//                 className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <div className="flex space-x-4">
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   placeholder="City"
//                   required
//                   className="w-1/2 p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleInputChange}
//                   placeholder="State"
//                   required
//                   className="w-1/2 p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//             </>
//           )}

//           {activeTab === "mentor" && (
//             <>
//               <input
//                 type="text"
//                 name="school"
//                 value={formData.school}
//                 onChange={handleInputChange}
//                 placeholder="College Name"
//                 required
//                 className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//               <input
//                 type="text"
//                 name="collegeId"
//                 value={formData.collegeId}
//                 onChange={handleInputChange}
//                 placeholder="College ID Number"
//                 required
//                 className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//               <div className="space-y-2">
//                 <label className="text-gray-300">College ID Proof</label>
//                 <input
//                   type="file"
//                   name="collegeIdProof"
//                   onChange={handleInputChange}
//                   accept=".pdf,.jpg,.jpeg,.png"
//                   required
//                   className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400 file:mr-4 file:rounded file:border-0 file:bg-gray-600 file:text-white"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-gray-300">Resume</label>
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={handleInputChange}
//                   accept=".pdf,.doc,.docx"
//                   required
//                   className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400 file:mr-4 file:rounded file:border-0 file:bg-gray-600 file:text-white"
//                 />
//               </div>
//               <div className="flex space-x-4">
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   placeholder="City"
//                   required
//                   className="w-1/2 p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
//                 />
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleInputChange}
//                   placeholder="State"
//                   required
//                   className="w-1/2 p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
//                 />
//               </div>
//             </>
//           )}

//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Enter your Password"
//             required
//             className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded text-white font-bold transition duration-200 flex items-center justify-center"
//           >
//             {loading ? (
//               <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                 ></path>
//               </svg>
//             ) : (
//               `Register as ${activeTab === "user" ? "User" : "Mentor"}`
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

// // // import { useState } from "react";

// // // const Register = () => {
// // //   const [activeTab, setActiveTab] = useState("user");

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
// // //       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
// // //         <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
// // //           Register
// // //         </h2>

// // //         {/* Tabs */}
// // //         <div className="flex justify-around mb-6">
// // //           <button
// // //             className={`p-2 w-1/2 text-center ${
// // //               activeTab === "user"
// // //                 ? "border-b-2 border-blue-400 text-blue-400"
// // //                 : "text-gray-400"
// // //             }`}
// // //             onClick={() => setActiveTab("user")}
// // //           >
// // //             User Registration
// // //           </button>
// // //           <button
// // //             className={`p-2 w-1/2 text-center ${
// // //               activeTab === "mentor"
// // //                 ? "border-b-2 border-green-400 text-green-400"
// // //                 : "text-gray-400"
// // //             }`}
// // //             onClick={() => setActiveTab("mentor")}
// // //           >
// // //             Mentor Registration
// // //           </button>
// // //         </div>

// // //         {/* User Registration Form */}
// // //         {activeTab === "user" && (
// // //           <form className="space-y-4">
// // //             <input
// // //               type="text"
// // //               placeholder="Name"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //             />
// // //             <input
// // //               type="email"
// // //               placeholder="Email"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="Phone Number"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="School/College Name"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="City"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="State"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //             />
// // //             <input
// // //               type="password"
// // //               placeholder="Enter your Password"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //             />
// // //             <button className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded text-white font-bold">
// // //               Register as User
// // //             </button>
// // //           </form>
// // //         )}

// // //         {/* Mentor Registration Form */}
// // //         {activeTab === "mentor" && (
// // //           <form className="space-y-4">
// // //             <input
// // //               type="text"
// // //               placeholder="Name"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
// // //             />
// // //             <input
// // //               type="email"
// // //               placeholder="Email"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="Phone Number"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="College Name"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="College ID Number"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
// // //             />
// // //             <div> College Id Proof</div>
// // //             <input
// // //               type="file"
// // //               placeholder="Upload your College Id Proof"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="State"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
// // //             />
// // //             <input
// // //               type="text"
// // //               placeholder="City"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
// // //             />
// // //             <div> Upload Your Resume</div>
// // //             <input
// // //               type="file"
// // //               placeholder="Upload your resume"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
// // //             />
// // //             <input
// // //               type="password"
// // //               placeholder="Enter your Password"
// // //               className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
// // //             />
// // //             <button className="w-full bg-green-500 hover:bg-green-600 p-3 rounded text-white font-bold">
// // //               Register as Mentor
// // //             </button>
// // //           </form>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Register;
