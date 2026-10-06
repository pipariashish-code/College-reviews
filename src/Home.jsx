import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCalculator,
  FaGraduationCap,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";
import AiCollegeSearchBar from "./components/AiCollegeSearchBar";

const Home = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const featuredTools = [
    {
      title: "College Fee Comparison",
      description:
        "Analyze and compare tuition costs across multiple institutions.",
      icon: FaCalculator,
      color: "text-blue-400",
      path: "/tools/college-fee-comparison",
    },
    {
      title: "Loan Eligibility Calculator",
      description:
        "Discover your potential education financing options instantly.",
      icon: FaChartLine,
      color: "text-green-400",
      path: "/tools/loan-eligibility",
    },
    {
      title: "Scholarship Finder",
      description:
        "Uncover personalized scholarship opportunities tailored to you.",
      icon: FaGraduationCap,
      color: "text-yellow-400",
      path: "/tools/scholarship-finder",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-gray-900/50 to-black pointer-events-none" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `-${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive Gradient Following Mouse */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg opacity-20 group-hover:opacity-30 blur transition duration-1000 group-hover:duration-200" />
                <h1 className="relative text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-500">
                  Discover Your Academic Potential
                </h1>
              </div>
              <p className="text-xl text-blue-100/80">
              Affordable Guidance, One Mentor At A Time
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/register")}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition-all relative group overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button
                  onClick={() => navigate("/colleges")}
                  className="px-8 py-4 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 rounded-xl text-gray-300 font-semibold transition-all"
                >
                  Explore Colleges
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-xl opacity-50 blur-xl transition duration-300" />
              <img
                src="/mentorex-hero.svg"
                alt="A mentor guiding a student toward the right college while she plans her budget on a tablet"
                width="1600"
                height="900"
                className="relative w-full h-auto rounded-xl shadow-2xl shadow-blue-500/10"
              />
            </div>
          </div>

          {/* AI Mode College Search Bar Section */}
          <div className="mt-14 pt-10 border-t border-blue-500/20">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30 mb-3">
                <FaRobot className="text-blue-400 text-sm" /> MentoreX AI Mode Active
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Search Any College with MentoreX AI
              </h2>
              <p className="text-gray-400 text-sm md:text-base mt-1">
                Type any university in India or globally. MentoreX AI fetches verified placement packages (average & peak CTC), placement rates, and tuition fees instantly.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <AiCollegeSearchBar showPopularChips={true} autoNavigate={false} />
            </div>
          </div>
        </div>

        {/* Featured Tools Section */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Powerful Tools for Your Journey
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredTools.map((tool, index) => (
                <div
                  key={index}
                  onClick={() => navigate(tool.path)}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
                  <div className="relative bg-gray-900/60 backdrop-blur-lg p-6 rounded-xl hover:bg-gray-800/60 transition-all duration-300">
                    <div className="bg-blue-500/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                      <tool.icon className={`text-2xl ${tool.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-100">
                      {tool.title}
                    </h3>
                    <p className="text-gray-400">{tool.description}</p>
                    <div className="mt-4 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn More</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaUniversity,
//   FaCalculator,
//   FaGraduationCap,
//   FaSearch,
//   FaChartLine,
//   FaKey,
//   FaHandshake,
// } from "react-icons/fa";

// const Home = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");

//   const featuredTools = [
//     {
//       title: "College Fee Comparison",
//       description:
//         "Analyze and compare tuition costs across multiple institutions.",
//       icon: FaCalculator,
//       color: "text-blue-400",
//       path: "/tools/college-fee-comparison",
//       gradient: "from-blue-500 to-blue-700",
//     },
//     {
//       title: "Loan Eligibility Calculator",
//       description:
//         "Discover your potential education financing options instantly.",
//       icon: FaChartLine,
//       color: "text-green-400",
//       path: "/tools/loan-eligibility",
//       gradient: "from-green-500 to-green-700",
//     },
//     {
//       title: "Scholarship Finder",
//       description:
//         "Uncover personalized scholarship opportunities tailored to you.",
//       icon: FaGraduationCap,
//       color: "text-yellow-400",
//       path: "/tools/scholarship-finder",
//       gradient: "from-yellow-500 to-yellow-700",
//     },
//   ];

//   const handleEmailSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Implement actual newsletter signup logic
//     alert(`Thank you for subscribing with ${email}!`);
//     setEmail("");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 text-gray-100">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="text-center md:text-left">
//               <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-6 leading-tight">
//                 Discover Your
//                 <br />
//                 Academic Potential
//               </h1>
//               <p className="text-xl text-gray-400 mb-8 max-w-xl">
//                 Empowering students with comprehensive insights, financial
//                 tools, and personalized guidance for educational success.
//               </p>
//               <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
//                 <button
//                   onClick={() => navigate("/register")}
//                   className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg"
//                 >
//                   Get Started
//                 </button>
//                 <button
//                   onClick={() => navigate("/colleges")}
//                   className="px-8 py-3 border-2 border-gray-700 hover:bg-gray-800 text-gray-300 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg"
//                 >
//                   Explore Colleges
//                 </button>
//               </div>
//             </div>
//             <div className="hidden md:block">
//               <div className="relative">
//                 <div className="absolute -inset-2 bg-blue-600/30 rounded-full blur-2xl opacity-50"></div>
//                 <img
//                   src="/college-1.webp"
//                   alt="College Campus"
//                   className="relative z-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Featured Tools Section */}
//       <section className="bg-gray-800/50 backdrop-blur-sm py-16 px-4 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">
//             Powerful Tools for Your Journey
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {featuredTools.map((tool, index) => (
//               <div
//                 key={index}
//                 className={`bg-gradient-to-br ${tool.gradient} rounded-2xl p-6 transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl group`}
//                 onClick={() => navigate(tool.path)}
//               >
//                 <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
//                   <tool.icon className={`text-3xl ${tool.color}`} />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-white">
//                   {tool.title}
//                 </h3>
//                 <p className="text-gray-200 opacity-80">{tool.description}</p>
//                 <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <span className="text-sm text-white/80 flex items-center">
//                     Explore Tool
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 ml-2"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// {
//   /* Newsletter Signup */
// }
// {
//   /* <section className="bg-blue-900/30 backdrop-blur-sm py-16 px-4 md:px-12">
//         <div className="max-w-xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4 text-blue-100">
//             Stay Connected
//           </h2>
//           <p className="text-gray-300 mb-8 max-w-md mx-auto">
//             Subscribe to receive the latest educational insights, opportunities,
//             and exclusive tips directly to your inbox.
//           </p>
//           <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
//             <div className="flex rounded-full bg-gray-800 p-1">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="flex-grow bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all"
//               >
//                 Subscribe
//               </button>
//             </div>
//           </form>
//         </div>
//       </section> */
// }

// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   FaUniversity,
// //   FaCalculator,
// //   FaGraduationCap,
// //   FaSearch,
// //   FaChartLine,
// //   FaKey,
// //   FaHandshake,
// // } from "react-icons/fa";

// // const Home = () => {
// //   const navigate = useNavigate();
// //   const [email, setEmail] = useState("");

// //   const featuredTools = [
// //     {
// //       title: "College Fee Comparison",
// //       description:
// //         "Easily compare tuition fees across colleges and find the best fit for your budget.",
// //       icon: FaCalculator,
// //       color: "text-blue-400",
// //       path: "/tools/college-fee-comparison",
// //     },
// //     {
// //       title: "Loan Eligibility Calculator",
// //       description:
// //         "Check your loan eligibility and plan your education financing effectively.",
// //       icon: FaChartLine,
// //       color: "text-green-400",
// //       path: "/tools/loan-eligibility",
// //     },
// //     {
// //       title: "Scholarship Finder",
// //       description:
// //         "Discover personalized scholarship opportunities to support your education journey.",
// //       icon: FaGraduationCap,
// //       color: "text-yellow-400",
// //       path: "/tools/scholarship-finder",
// //     },
// //   ];

// //   const keyFeatures = [
// //     {
// //       title: "Comprehensive College Reviews",
// //       description:
// //         "Unbiased insights from students to help you make informed decisions.",
// //       icon: FaSearch,
// //     },
// //     {
// //       title: "Personalized Mentorship",
// //       description:
// //         "Connect with experienced mentors who guide your academic journey.",
// //       icon: FaHandshake,
// //     },
// //     {
// //       title: "Secure Authentication",
// //       description: "Protected platform with secure login and data privacy.",
// //       icon: FaKey,
// //     },
// //   ];

// //   const handleEmailSubmit = (e) => {
// //     e.preventDefault();
// //     // TODO: Implement newsletter signup logic
// //     alert(`Thank you for subscribing with ${email}!`);
// //     setEmail("");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-gray-100">
// //       {/* Hero Section */}
// //       <section className="relative py-20 px-4 md:px-12">
// //         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
// //           <div className="md:w-1/2 space-y-6 mb-8 md:mb-0">
// //             <h1 className="text-4xl md:text-5xl font-bold text-blue-300">
// //               Discover Your Perfect <br />
// //               Educational Path
// //             </h1>
// //             <p className="text-gray-400 text-lg">
// //               Empowering students with comprehensive college insights, financial
// //               tools, and personalized guidance.
// //             </p>
// //             <div className="flex space-x-4">
// //               <button
// //                 onClick={() => navigate("/register")}
// //                 className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
// //               >
// //                 Get Started
// //               </button>
// //               <button
// //                 onClick={() => navigate("/colleges")}
// //                 className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg transition"
// //               >
// //                 Explore Colleges
// //               </button>
// //             </div>
// //           </div>
// //           <div className="md:w-1/2 flex justify-center">
// //             <img
// //               src="/college-1.webp"
// //               alt="College Campus"
// //               className="rounded-xl shadow-2xl max-w-full h-auto"
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Featured Tools Section */}
// //       <section className="bg-gray-800 py-16 px-4 md:px-12">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">
// //             Powerful Tools for Your Education Journey
// //           </h2>
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {featuredTools.map((tool, index) => (
// //               <div
// //                 key={index}
// //                 onClick={() => navigate(tool.path)}
// //                 className="bg-gray-900 p-6 rounded-xl hover:shadow-lg transition duration-300 cursor-pointer group"
// //               >
// //                 <tool.icon
// //                   className={`text-4xl mb-4 ${tool.color} group-hover:scale-110 transition`}
// //                 />
// //                 <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
// //                 <p className="text-gray-400">{tool.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Key Features Section */}
// //       <section className="py-16 px-4 md:px-12">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">
// //             Why Choose SyncMatch?
// //           </h2>
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {keyFeatures.map((feature, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition"
// //               >
// //                 <feature.icon className="text-4xl mx-auto mb-4 text-blue-400" />
// //                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
// //                 <p className="text-gray-400">{feature.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Newsletter Signup */}
// //       <section className="bg-blue-900 py-16 px-4 md:px-12">
// //         <div className="max-w-xl mx-auto text-center">
// //           <h2 className="text-3xl font-bold mb-4 text-blue-100">
// //             Stay Updated with SyncMatch
// //           </h2>
// //           <p className="text-gray-300 mb-8">
// //             Subscribe to our newsletter for the latest college insights,
// //             scholarship opportunities, and education tips.
// //           </p>
// //           <form onSubmit={handleEmailSubmit} className="flex max-w-md mx-auto">
// //             <input
// //               type="email"
// //               placeholder="Enter your email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               className="flex-grow px-4 py-3 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <button
// //               type="submit"
// //               className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition"
// //             >
// //               Subscribe
// //             </button>
// //           </form>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Home;

// // // import { useNavigate } from "react-router-dom";

// // // const Home = () => {
// // //   const navigate = useNavigate();
// // //   return (
// // //     <div className="min-h-screen bg-gray-900 text-gray-100">
// // //       <main className="container mx-auto px-4 py-12">
// // //         {/* Hero Section */}
// // //         <div className=" flex">
// // //           <section className="  m-5  w-3/4">
// // //             <img
// // //               src="/college-1.webp"
// // //               alt="College Campus"
// // //               className="rounded-lg shadow-lg"
// // //             />
// // //           </section>

// // //           {/* About Section */}
// // //           <section className="m-12 justify-normal content-center">
// // //             <h2 className="text-3xl font-semibold mb-4">
// // //               Why Choose College Reviews?
// // //             </h2>
// // //             <p className="text-gray-400 max-w-2xl mx-auto">
// // //               We provide unbiased reviews and ratings from students to help you
// // //               choose the right college based on values, academic quality, and
// // //               campus life.
// // //             </p>
// // //           </section>
// // //         </div>

// // //         {/* Features Section */}
// // //         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //           {/* College Fee Comparison Tool */}
// // //           <div
// // //             className=" p-10 bg-gray-800 shadow-md rounded-lg hover:bg-gray-700 transition duration-200 cursor-pointer"
// // //             onClick={() => navigate("/tools/college-fee-comparison")}
// // //           >
// // //             <h3 className="text-xl font-bold mb-2 text-blue-400">
// // //               College Fee Comparison
// // //             </h3>
// // //             <p className="text-gray-400">
// // //               Easily compare tuition fees across colleges and find the best fit
// // //               for your budget.
// // //             </p>
// // //           </div>

// // //           {/* Education Loan Calculator Tool */}
// // //           <div
// // //             className="p-10 bg-gray-800 shadow-md rounded-lg hover:bg-gray-700 transition duration-200 cursor-pointer"
// // //             onClick={() => navigate("/tools/loan-eligibility")}
// // //           >
// // //             <h3 className="text-xl font-bold mb-2 text-green-400">
// // //               Education Loan Calculator
// // //             </h3>
// // //             <p className="text-gray-400">
// // //               Check your loan eligibility and plan your education financing
// // //               effectively.
// // //             </p>
// // //           </div>

// // //           {/* Scholarship Finder Tool */}
// // //           <div
// // //             className="p-10 bg-gray-800 shadow-md rounded-lg hover:bg-gray-700 transition duration-200 cursor-pointer"
// // //             onClick={() => navigate("/tools/scholarship-finder")}
// // //           >
// // //             <h3 className="text-xl font-bold mb-2 text-yellow-400">
// // //               Scholarship Finder
// // //             </h3>
// // //             <p className="text-gray-400">
// // //               Discover personalized scholarship opportunities to support your
// // //               education journey.
// // //             </p>
// // //           </div>
// // //         </section>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // // // const Home = () => {
// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50">
// // // //       <header className="bg-blue-600 text-white py-6">
// // // //         <div className="container mx-auto text-center">
// // // //           <h1 className="text-4xl font-bold">Welcome to SyncMatch</h1>
// // // //           <p className="mt-2 text-lg">
// // // //             Your trusted source for college ratings, reviews, and tools to make
// // // //             informed decisions.
// // // //           </p>
// // // //         </div>
// // // //       </header>

// // // //       <main className="container mx-auto px-4 py-8">
// // // //         {/* Hero Section */}
// // // //         <section className="mb-12">
// // // //           <img
// // // //             src="/college-1.webp"
// // // //             alt="College Campus"
// // // //             className="w-full rounded-lg shadow-lg"
// // // //           />
// // // //         </section>

// // // //         {/* About Section */}
// // // //         <section className="text-center mb-12">
// // // //           <h2 className="text-3xl font-semibold mb-4">
// // // //             Why Choose College Reviews?
// // // //           </h2>
// // // //           <p className="text-gray-700 max-w-2xl mx-auto">
// // // //             We provide unbiased reviews and ratings from students to help you
// // // //             choose the right college based on values, academic quality, and
// // // //             campus life.
// // // //           </p>
// // // //         </section>

// // // //         {/* Features Section */}
// // // //         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // // //           <div className="p-6 bg-white shadow-md rounded-lg">
// // // //             <h3 className="text-xl font-bold mb-2">College Fee Comparison</h3>
// // // //             <p className="text-gray-600">
// // // //               Easily compare tuition fees across colleges and find the best fit
// // // //               for your budget.
// // // //             </p>
// // // //           </div>

// // // //           <div className="p-6 bg-white shadow-md rounded-lg">
// // // //             <h3 className="text-xl font-bold mb-2">
// // // //               Education Loan Calculator
// // // //             </h3>
// // // //             <p className="text-gray-600">
// // // //               Check your loan eligibility and plan your education financing
// // // //               effectively.
// // // //             </p>
// // // //           </div>

// // // //           <div className="p-6 bg-white shadow-md rounded-lg">
// // // //             <h3 className="text-xl font-bold mb-2">Scholarship Finder</h3>
// // // //             <p className="text-gray-600">
// // // //               Discover personalized scholarship opportunities to support your
// // // //               education journey.
// // // //             </p>
// // // //           </div>

// // // //           <div className="p-6 bg-white shadow-md rounded-lg">
// // // //             <h3 className="text-xl font-bold mb-2">Financial Literacy Tools</h3>
// // // //             <p className="text-gray-600">
// // // //               Master budgeting, credit score management, and loan payment
// // // //               planning.
// // // //             </p>
// // // //           </div>
// // // //         </section>
// // // //       </main>

// // // //       <footer className="bg-gray-800 text-white py-4">
// // // //         <div className="container mx-auto text-center">
// // // //           <p>&copy; 2024 College Reviews. All rights reserved.</p>
// // // //         </div>
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;
