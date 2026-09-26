import { useState } from "react";
import { Link } from "react-router-dom";
import { programsData } from "./data/updated_programsData";

import {
  FaUniversity,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLink,
  FaChartLine,
  FaStar,
  FaBookOpen,
  FaBriefcase,
  FaChalkboardTeacher,
  FaChalkboard,
  FaMoneyBillWave,
  FaClipboardList,
  FaUserGraduate,
  FaFlask,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const nfsuData = {
  name: "National Forensic Sciences University (NFSU)",
  location: "Gandhinagar, Gujarat, India",
  established: 2008,
  type: "Public University",
  website: "https://www.nfsu.ac.in",
  overview: `NFSU is a premier university dedicated to the study of forensic sciences and cyber security. It offers a wide range of undergraduate, postgraduate, and doctoral programs focusing on forensic investigation, cyber security, digital forensics, and related fields.`,
  additionalOverviewDetails: {
    jobPlacementRate: 92,
    professorStudentRatio: "1:15",
    academicPrograms: [
      "Forensic Science",
      "Cyber Security",
      "Artificial Intelligence",
      "Digital Forensics",
    ],
    financialAid: {
      scholarships: "Up to 50% tuition waiver",
      governmentSchemes: "Multiple state and central government schemes",
      researchGrants: "Available for meritorious students",
    },
  },
  rankings: {
    nationalRank: 12,
    researchScore: 8.5,
    placementRate: 92,
    starRatings: {
      campusLife: 4.2,
      graduationRate: 4.5,
      careerOpportunities: 4.7,
    },
  },
  facilities: [
    "State-of-the-art Forensic Labs",
    "Cyber Security Research Center",
    "Advanced Digital Forensics Infrastructure",
    "Collaboration with Law Enforcement Agencies",
  ],
};

const ProgramStarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <FaStar
            key={i}
            className="text-yellow-400 text-xl transition-colors duration-300"
          />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <FaStarHalfAlt
            key={i}
            className="text-yellow-400 text-xl transition-colors duration-300"
          />
        );
      } else {
        stars.push(
          <FaRegStar
            key={i}
            className="text-gray-600 text-xl transition-colors duration-300"
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex items-center bg-gray-800/50 p-3 rounded-xl">
      <div className="flex space-x-1">{renderStars()}</div>
      <span className="ml-3 text-gray-400 font-medium">
        ({rating.toFixed(1)})
      </span>
    </div>
  );
};

const AnimatedCard = ({ children, className = "" }) => (
  <div
    className={`
      bg-gradient-to-br from-gray-800 to-gray-900 
      border border-gray-700 
      rounded-2xl 
      shadow-2xl 
      hover:scale-[1.02] 
      transition-all 
      duration-300 
      ease-in-out 
      hover:shadow-4xl 
      ${className}
    `}
  >
    {children}
  </div>
);

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`
              ${
                ratingValue <= Math.round(rating)
                  ? "text-yellow-400"
                  : "text-gray-600"
              }
              text-xl transition-colors duration-300
            `}
          />
        );
      })}
      <span className="ml-2 text-gray-400 font-semibold">
        ({rating.toFixed(1)}/5)
      </span>
    </div>
  );
};

const IconMetric = ({ icon: Icon, value, label, bgColor }) => (
  <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-xl">
    <div className={`p-3 ${bgColor} rounded-full`}>
      <Icon className="text-2xl text-white" />
    </div>
    <div>
      <p className="text-xl font-bold text-blue-300">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  </div>
);

const CollegePage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderProgramDetails = (program) => (
    <AnimatedCard key={program.id} className="p-8 hover:border-blue-600">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-blue-400">{program.name}</h3>
          <ProgramStarRating rating={program.courseRating} />
        </div>
        <div className="flex space-x-4">
          <span className="bg-blue-900 text-blue-300 px-4 py-2 rounded-full">
            {program.duration}
          </span>
          <span className="bg-purple-900 text-purple-300 px-4 py-2 rounded-full">
            {program.category}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <IconMetric
            icon={FaMapMarkerAlt}
            value={program.campus}
            label="Campus"
            bgColor="bg-cyan-600"
          />
          <IconMetric
            icon={FaBriefcase}
            value={program.seats}
            label="Total Seats"
            bgColor="bg-pink-600"
          />
          <IconMetric
            icon={FaMoneyBillWave}
            value={`₹${program.annualFee.toLocaleString()}`}
            label="Annual Fee"
            bgColor="bg-green-600"
          />
          <IconMetric
            icon={FaUserGraduate}
            value={`${program.placementRate}%`}
            label="Placement Rate"
            bgColor="bg-yellow-600"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
              <FaClipboardList className="mr-2 text-blue-400" />
              Eligibility Criteria
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>Minimum Marks: {program.eligibilityCriteria.minMarks}%</li>
              <li>Entrance: {program.eligibilityCriteria.entrance}</li>
              {program.eligibilityCriteria.additionalRequirements.map(
                (req, idx) => (
                  <li key={idx}>{req}</li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
              <FaFlask className="mr-2 text-green-400" />
              Lab Facilities
            </h4>
            <ul className="space-y-2 text-gray-400">
              {program.labFacilities.map((facility, idx) => (
                <li
                  key={idx}
                  className="flex items-center before:content-['▶'] before:text-blue-400 before:mr-3"
                >
                  {facility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            <AnimatedCard className="p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
                <FaBookOpen className="mr-3 text-blue-400" />
                University Overview
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {nfsuData.overview}
              </p>
            </AnimatedCard>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedCard className="p-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                  <FaChalkboardTeacher className="mr-3 text-green-400" />
                  Academic Insights
                </h4>
                <div className="space-y-4">
                  <IconMetric
                    icon={FaGraduationCap}
                    value={`${nfsuData.additionalOverviewDetails.jobPlacementRate}%`}
                    label="Job Placement Rate"
                    bgColor="bg-green-600"
                  />
                  <IconMetric
                    icon={FaUniversity}
                    value={
                      nfsuData.additionalOverviewDetails.professorStudentRatio
                    }
                    label="Professor-Student Ratio"
                    bgColor="bg-purple-600"
                  />
                </div>
              </AnimatedCard>

              <AnimatedCard className="p-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                  <FaMoneyBillWave className="mr-3 text-indigo-400" />
                  Financial Support
                </h4>
                <div className="space-y-3 text-gray-400">
                  {Object.entries(
                    nfsuData.additionalOverviewDetails.financialAid
                  ).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between border-b border-gray-700 pb-2"
                    >
                      <span className="capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <span className="font-semibold text-blue-300">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {nfsuData.facilities.map((facility, index) => (
                <AnimatedCard
                  key={index}
                  className="p-5 flex items-center space-x-4 hover:bg-gray-700"
                >
                  <FaUniversity className="text-blue-400 text-3xl" />
                  <p className="text-gray-300">{facility}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        );
      case "programs":
        return (
          <div className="space-y-8">
            {programsData.map((program) => renderProgramDetails(program))}
          </div>
        );
      case "rankings":
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaChartLine,
                  title: "National Rank",
                  value: nfsuData.rankings.nationalRank,
                  bgColor: "bg-blue-600",
                },
                {
                  icon: FaGraduationCap,
                  title: "Research Score",
                  value: `${nfsuData.rankings.researchScore}/10`,
                  bgColor: "bg-green-600",
                },
                {
                  icon: FaMapMarkerAlt,
                  title: "Placement Rate",
                  value: `${nfsuData.rankings.placementRate}%`,
                  bgColor: "bg-yellow-600",
                },
              ].map((metric, index) => (
                <AnimatedCard key={index} className="p-8 text-center">
                  <div
                    className={`mx-auto mb-4 w-20 h-20 rounded-full flex items-center justify-center ${metric.bgColor}`}
                  >
                    <metric.icon className="text-4xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-200 mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-3xl font-bold text-blue-300">
                    {metric.value}
                  </p>
                </AnimatedCard>
              ))}
            </div>

            <AnimatedCard className="p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">
                Star Ratings
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(nfsuData.rankings.starRatings).map(
                  ([key, rating]) => (
                    <div key={key} className="text-center">
                      <h4 className="font-semibold text-gray-200 mb-3 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </h4>
                      <StarRating rating={rating} />
                    </div>
                  )
                )}
              </div>
            </AnimatedCard>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedCard className="mb-12 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-4 text-blue-300 tracking-tight">
                {nfsuData.name}
              </h1>
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>{nfsuData.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaLink className="text-blue-400" />
                  <a
                    href={nfsuData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition"
                  >
                    Official Website
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm px-4 py-2 bg-blue-900 text-blue-300 rounded-full">
                Established: {nfsuData.established}
              </span>
              <span className="text-sm px-4 py-2 bg-green-900 text-green-300 rounded-full">
                {nfsuData.type}
              </span>
              <Link
                to="/book-mentor"
                className="
                  flex items-center space-x-2
                  bg-gradient-to-r from-blue-600 to-purple-700 
                  text-white 
                  px-6 py-3 
                  rounded-full 
                  font-semibold 
                  hover:scale-105 
                  transition-all 
                  duration-300 
                  shadow-lg 
                  hover:shadow-xl
                "
              >
                <FaChalkboard className="mr-2" />
                Meet the Mentor
              </Link>
            </div>
          </div>
        </AnimatedCard>

        <nav className="mb-12 flex justify-center space-x-6">
          {["overview", "programs", "rankings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                capitalize px-6 py-3 rounded-full transition duration-300 
                font-semibold tracking-wide
                ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-lg scale-110"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </nav>

        <main className="bg-transparent">{renderTabContent()}</main>
      </div>
    </div>
  );
};

export default CollegePage;
