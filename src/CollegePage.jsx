import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./config";

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
  FaRegStar,
  FaStarHalfAlt,
  FaSearch,
  FaCode,
  FaCheckCircle,
  FaBuilding,
  FaGlobe,
  FaCopy,
  FaRobot,
} from "react-icons/fa";

import { resolveCollegeQuery } from "./utils/collegeResolver.js";
import AiCollegeSearchBar from "./components/AiCollegeSearchBar";

const ProgramStarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const validRating = typeof rating === "number" ? rating : 4.5;
    const fullStars = Math.floor(validRating);
    const hasHalfStar = validRating % 1 >= 0.5;

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
        ({(typeof rating === "number" ? rating : 4.5).toFixed(1)})
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
      hover:scale-[1.01] 
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
  const numRating = typeof rating === "number" ? rating : 4.5;
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`
              ${
                ratingValue <= Math.round(numRating)
                  ? "text-yellow-400"
                  : "text-gray-600"
              }
              text-xl transition-colors duration-300
            `}
          />
        );
      })}
      <span className="ml-2 text-gray-400 font-semibold">
        ({numRating.toFixed(1)}/5)
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
  const [colleges, setColleges] = useState([]);
  const [selectedCollegeId, setSelectedCollegeId] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [showApiDocs, setShowApiDocs] = useState(false);
  const [codeCopied, setCodeCopied] = useState("");

  const fetchCollegesList = useCallback(async (selectNewId = null) => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/api/colleges?limit=250`);
      if (res.data && res.data.success && res.data.data?.length > 0) {
        setColleges(res.data.data);
        if (selectNewId) {
          setSelectedCollegeId(selectNewId);
        } else if (res.data.data.length > 0) {
          setSelectedCollegeId((prev) => prev || res.data.data[0].id);
        }
      }
    } catch (err) {
      console.error("Failed to load colleges from API:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCollegesList();
  }, [fetchCollegesList]);

  const copySnippet = (text, key) => {
    navigator.clipboard.writeText(text);
    setCodeCopied(key);
    setTimeout(() => setCodeCopied(""), 2500);
  };

  const [aiFetching, setAiFetching] = useState(false);

  const handleAiSelect = (college) => {
    if (!college) return;
    setColleges((prev) => {
      const exists = prev.some((c) => c.id === college.id);
      if (!exists) return [college, ...prev];
      return prev.map((c) => (c.id === college.id ? college : c));
    });
    setSelectedCollegeId(college.id);
    setActiveTab("overview");
  };

  const handleAiSearch = async (term) => {
    if (!term || !term.trim()) return;
    setAiFetching(true);
    try {
      let collegeData = null;
      try {
        const res = await axios.post(`${API_URL}/api/colleges/ai-search`, {
          name: term.trim(),
        });
        if (res.data?.success && res.data?.data) {
          collegeData = res.data.data;
        }
      } catch (e1) {
        console.warn("AI search route fallback:", e1);
      }

      if (!collegeData) {
        try {
          const res2 = await axios.post(`${API_URL}/api/colleges/fetch`, {
            name: term.trim(),
          });
          if (res2.data?.success && res2.data?.data) {
            collegeData = res2.data.data;
          }
        } catch (e2) {
          console.warn("Fetch route fallback:", e2);
        }
      }

      if (!collegeData) {
        try {
          const res3 = await axios.get(
            `${API_URL}/api/colleges?search=${encodeURIComponent(term.trim())}`
          );
          if (res3.data?.success && Array.isArray(res3.data?.data) && res3.data.data.length > 0) {
            collegeData = res3.data.data[0];
          }
        } catch (e3) {
          console.warn("Search query fallback:", e3);
        }
      }

      if (collegeData) {
        handleAiSelect(collegeData);
        setSearchTerm("");
      }
    } catch (e) {
      console.error("AI search error:", e);
    } finally {
      setAiFetching(false);
    }
  };

  const selectedCollege =
    colleges.find((c) => c.id === selectedCollegeId) || colleges[0];

  const filteredColleges = colleges.filter((c) => {
    if (!c) return false;
    const cat = (c.category || "").toLowerCase();
    const catMatches =
      categoryFilter === "All" || cat.includes(categoryFilter.toLowerCase());

    if (!searchTerm.trim()) {
      return catMatches;
    }

    const term = searchTerm.toLowerCase().trim();
    const resolved = resolveCollegeQuery(searchTerm).toLowerCase().trim();

    const name = (c.name || "").toLowerCase();
    const shortName = (c.shortName || "").toLowerCase();
    const id = (c.id || "").toLowerCase();
    const location = (c.location || "").toLowerCase();

    const coursesMatch =
      c.additionalOverviewDetails?.academicPrograms?.some((p) =>
        p.toLowerCase().includes(term)
      ) ||
      c.popularPrograms?.some((p) =>
        p.name.toLowerCase().includes(term)
      );

    const matchesSearch =
      name.includes(term) ||
      shortName.includes(term) ||
      id.includes(term) ||
      cat.includes(term) ||
      (resolved && name.includes(resolved)) ||
      (resolved && shortName.includes(resolved)) ||
      location.includes(term) ||
      Boolean(coursesMatch);

    return matchesSearch && (categoryFilter === "All" || catMatches);
  });

  const renderTabContent = () => {
    if (!selectedCollege) {
      return (
        <div className="text-center py-12 text-gray-400">
          No college data available.
        </div>
      );
    }

    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            <AnimatedCard className="p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
                <FaBookOpen className="mr-3 text-blue-400" />
                University Overview
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {selectedCollege.overview}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {selectedCollege.feeRange && (
                  <div className="inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-700/60 text-emerald-200 px-4 py-2 rounded-xl text-sm">
                    <span className="font-bold text-white">Verified Annual Tuition:</span>
                    <span className="font-semibold text-emerald-300">{selectedCollege.feeRange}</span>
                  </div>
                )}
                {selectedCollege.verifiedSource && (
                  <div className="inline-flex items-center gap-1.5 bg-blue-950/60 border border-blue-800/60 text-blue-200 px-3.5 py-2 rounded-xl text-xs">
                    <FaCheckCircle className="text-emerald-400" />
                    <span>Audited Source: {selectedCollege.verifiedSource}</span>
                  </div>
                )}
              </div>
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
                    value={
                      selectedCollege.additionalOverviewDetails.jobPlacementRate &&
                      selectedCollege.additionalOverviewDetails.jobPlacementRate > 0
                        ? `${selectedCollege.additionalOverviewDetails.jobPlacementRate}%`
                        : "Not Publicly Disclosed (Audit Pending)"
                    }
                    label="Job Placement Rate"
                    bgColor="bg-green-600"
                  />
                  <div className="flex items-start space-x-4 bg-gray-800 p-4 rounded-xl">
                    <div className="p-3 bg-purple-600 rounded-full flex-shrink-0 mt-0.5">
                      <FaUniversity className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-blue-300 leading-snug">
                        {selectedCollege.additionalOverviewDetails.professorStudentRatio ||
                          "Varies by Dept & Program (UGC ~1:15-1:20)"}
                      </p>
                      <p className="text-xs text-gray-400">Faculty-to-Student Ratio</p>
                      <p className="text-[11px] text-purple-300/80 mt-1 italic leading-normal">
                        *Ratio varies across departments, undergraduate courses, and specialized PG/PhD research wings.
                      </p>
                    </div>
                  </div>
                  <IconMetric
                    icon={FaMoneyBillWave}
                    value={
                      selectedCollege.additionalOverviewDetails.averagePackage &&
                      !selectedCollege.additionalOverviewDetails.averagePackage.includes("Not Publicly")
                        ? selectedCollege.additionalOverviewDetails.averagePackage
                        : "Not Publicly Disclosed"
                    }
                    label="Average Placement Package"
                    bgColor="bg-emerald-600"
                  />
                  <IconMetric
                    icon={FaChartLine}
                    value={
                      selectedCollege.additionalOverviewDetails.highestPackage &&
                      !selectedCollege.additionalOverviewDetails.highestPackage.includes("Not Publicly")
                        ? selectedCollege.additionalOverviewDetails.highestPackage
                        : "Not Publicly Disclosed"
                    }
                    label="Highest Package Offered"
                    bgColor="bg-amber-600"
                  />
                </div>
              </AnimatedCard>

              <AnimatedCard className="p-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                  <FaMoneyBillWave className="mr-3 text-indigo-400" />
                  Financial Support & Aid
                </h4>
                <div className="space-y-4 text-gray-300">
                  {selectedCollege.additionalOverviewDetails?.financialAid &&
                    Object.entries(
                      selectedCollege.additionalOverviewDetails.financialAid
                    ).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex flex-col border-b border-gray-700/80 pb-3"
                      >
                        <span className="capitalize text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span className="text-gray-300 text-sm">{value}</span>
                      </div>
                    ))}
                </div>

                {selectedCollege.additionalOverviewDetails?.topRecruiters && (
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <h5 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                      <FaBriefcase /> Top Recruiters
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedCollege.additionalOverviewDetails.topRecruiters.map(
                        (recruiter, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-800 text-gray-300 text-xs px-3 py-1.5 rounded-full border border-gray-700"
                          >
                            {recruiter}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
              </AnimatedCard>
            </div>

            {selectedCollege.facilities && selectedCollege.facilities.length > 0 && (
              <div>
                <h4 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                  <FaBuilding className="text-blue-400" /> Campus Infrastructure & Facilities
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {selectedCollege.facilities.map((facility, index) => (
                    <AnimatedCard
                      key={index}
                      className="p-5 flex items-center space-x-4 hover:bg-gray-700/60"
                    >
                      <FaUniversity className="text-blue-400 text-2xl flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-snug">{facility}</p>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case "programs":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-bold text-blue-300 flex items-center gap-2">
                <FaBookOpen className="text-blue-400" /> Academic Programs & Courses
              </h3>
              <span className="text-sm text-gray-400">
                Category: <span className="text-blue-300 font-semibold">{selectedCollege.category}</span>
              </span>
            </div>

            {selectedCollege.popularPrograms && selectedCollege.popularPrograms.length > 0 ? (
              selectedCollege.popularPrograms.map((program, idx) => (
                <AnimatedCard key={idx} className="p-8 hover:border-blue-600">
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-blue-400">{program.name}</h4>
                      <p className="text-sm text-gray-400">
                        Offered by {selectedCollege.name}
                      </p>
                      <ProgramStarRating rating={selectedCollege.rankings.starRatings.careerOpportunities} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-900/80 text-blue-300 text-sm px-4 py-1.5 rounded-full border border-blue-700">
                        {program.duration}
                      </span>
                      <span className="bg-purple-900/80 text-purple-300 text-sm px-4 py-1.5 rounded-full border border-purple-700">
                        {program.degree}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <IconMetric
                      icon={FaMoneyBillWave}
                      value={
                        program.annualFee && program.annualFee > 0
                          ? `₹${program.annualFee.toLocaleString()}`
                          : selectedCollege.feeRange || "Refer to Prospectus"
                      }
                      label="Approx. Annual Fee"
                      bgColor="bg-green-600"
                    />
                    <IconMetric
                      icon={FaBriefcase}
                      value={program.seats ? `${program.seats} Seats` : "Department Intake Norm"}
                      label="Available Seats"
                      bgColor="bg-pink-600"
                    />
                    <IconMetric
                      icon={FaUserGraduate}
                      value={
                        selectedCollege.additionalOverviewDetails.jobPlacementRate &&
                        selectedCollege.additionalOverviewDetails.jobPlacementRate > 0
                          ? `${selectedCollege.additionalOverviewDetails.jobPlacementRate}%`
                          : "Audit Pending / Not Disclosed"
                      }
                      label="Placement Rate"
                      bgColor="bg-yellow-600"
                    />
                  </div>
                </AnimatedCard>
              ))
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {selectedCollege.additionalOverviewDetails.academicPrograms.map(
                  (prog, idx) => (
                    <AnimatedCard key={idx} className="p-5 flex items-center space-x-3">
                      <FaGraduationCap className="text-blue-400 text-2xl flex-shrink-0" />
                      <span className="text-gray-200 font-medium">{prog}</span>
                    </AnimatedCard>
                  )
                )}
              </div>
            )}

            {selectedCollege.admissionProcess && (
              <AnimatedCard className="p-6 mt-6">
                <h4 className="text-xl font-bold text-gray-200 mb-3 flex items-center gap-2">
                  <FaClipboardList className="text-green-400" /> Admission Process & Eligibility
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {selectedCollege.admissionProcess}
                </p>
              </AnimatedCard>
            )}
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
                  value: typeof selectedCollege.rankings.nationalRank === "number"
                    ? `#${selectedCollege.rankings.nationalRank}`
                    : selectedCollege.rankings.nationalRank,
                  sub: selectedCollege.rankings.rankingBody || "NIRF / QS",
                  bgColor: "bg-blue-600",
                },
                {
                  icon: FaGraduationCap,
                  title: "Research Score",
                  value: `${selectedCollege.rankings.researchScore}/10`,
                  sub: "Institutional Academic Research",
                  bgColor: "bg-green-600",
                },
                {
                  icon: FaMapMarkerAlt,
                  title: "Placement Rate",
                  value: `${selectedCollege.rankings.placementRate}%`,
                  sub: "Campus Employment Record",
                  bgColor: "bg-yellow-600",
                },
              ].map((metric, index) => (
                <AnimatedCard key={index} className="p-8 text-center">
                  <div
                    className={`mx-auto mb-4 w-20 h-20 rounded-full flex items-center justify-center ${metric.bgColor}`}
                  >
                    <metric.icon className="text-4xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-200 mb-1">
                    {metric.title}
                  </h3>
                  <p className="text-3xl font-bold text-blue-300 mb-1">
                    {metric.value}
                  </p>
                  <p className="text-xs text-gray-400">{metric.sub}</p>
                </AnimatedCard>
              ))}
            </div>

            <AnimatedCard className="p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">
                Star Ratings & Student Perception
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {selectedCollege.rankings?.starRatings &&
                  Object.entries(selectedCollege.rankings.starRatings).map(
                    ([key, rating]) => (
                      <div key={key} className="text-center p-4 bg-gray-800/40 rounded-xl">
                        <h4 className="font-semibold text-gray-200 mb-3 capitalize text-sm">
                          {key.replace(/([A-Z])/g, " $1")}
                        </h4>
                        <div className="flex justify-center">
                          <StarRating rating={rating} />
                        </div>
                      </div>
                    )
                  )}
              </div>
            </AnimatedCard>
          </div>
        );

      case "integration":
        return (
          <div className="space-y-8">
            <AnimatedCard className="p-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <FaCode className="text-blue-400" />
                How to Integrate Live Results with Your Website
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                You can call the live backend API from anywhere on your website (such as search boxes, calculator tools, program pages, or mentor booking). Below are copy-paste integration examples for React, Vanilla JavaScript, and cURL.
              </p>

              {/* Code Snippet 1: React Live Search Hook */}
              <div className="space-y-6">
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      Option A: React Component (Instant Live Search & Fetch)
                    </span>
                    <button
                      onClick={() =>
                        copySnippet(
`import { useState } from 'react';
import axios from 'axios';

export function CollegeLiveSearch({ onSelectCollege }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [collegeData, setCollegeData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);

    try {
      // 1. Fetch live college data (fetches from Wikipedia/AI if not already cached)
      const res = await axios.post('/api/colleges/fetch', { name: query });
      if (res.data.success) {
        setCollegeData(res.data.data);
        if (onSelectCollege) onSelectCollege(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching college:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search any university (e.g. IIT Kharagpur)..."
          className="p-3 bg-gray-800 text-white rounded-lg flex-1 border border-gray-700"
        />
        <button type="submit" disabled={loading} className="px-5 py-3 bg-blue-600 text-white rounded-lg font-bold">
          {loading ? 'Fetching Live...' : 'Search'}
        </button>
      </form>

      {collegeData && (
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-blue-300">{collegeData.name}</h3>
          <p className="text-sm text-gray-400">{collegeData.location} • Est: {collegeData.established}</p>
          <p className="text-gray-300 mt-2">{collegeData.overview}</p>
          <div className="mt-3 flex gap-4 text-sm font-semibold">
            <span className="text-green-400">Avg Package: {collegeData.additionalOverviewDetails.averagePackage}</span>
            <span className="text-yellow-400">Placement: {collegeData.additionalOverviewDetails.jobPlacementRate}%</span>
          </div>
        </div>
      )}
    </div>
  );
}`,
                          "react-snippet"
                        )
                      }
                      className="text-xs flex items-center gap-1.5 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded border border-gray-600 transition"
                    >
                      <FaCopy /> {codeCopied === "react-snippet" ? "Copied!" : "Copy React Code"}
                    </button>
                  </div>
                  <pre className="text-xs text-gray-300 font-mono overflow-x-auto bg-black/60 p-4 rounded-lg">
{`// 1. Send query to POST /api/colleges/fetch
const response = await fetch('/api/colleges/fetch', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'IIT Kharagpur' })
});
const { data: college } = await response.json();
console.log(college.name, college.location, college.overview);`}
                  </pre>
                </div>

                {/* Code Snippet 2: cURL / Backend */}
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                      Option B: Direct REST API (cURL or Python)
                    </span>
                    <button
                      onClick={() =>
                        copySnippet(
`curl -X POST http://localhost:3000/api/colleges/fetch \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Jadavpur University"}'`,
                          "curl-snippet"
                        )
                      }
                      className="text-xs flex items-center gap-1.5 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded border border-gray-600 transition"
                    >
                      <FaCopy /> {codeCopied === "curl-snippet" ? "Copied!" : "Copy cURL"}
                    </button>
                  </div>
                  <pre className="text-xs text-gray-300 font-mono overflow-x-auto bg-black/60 p-4 rounded-lg">
{`curl -X POST http://localhost:3000/api/colleges/fetch \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Jadavpur University"}'`}
                  </pre>
                </div>

                {/* Key Benefits */}
                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                  <div className="p-4 bg-gray-800/60 rounded-xl border border-gray-700/60">
                    <h5 className="font-bold text-blue-300 mb-1 text-sm">1. Zero Key Dependency</h5>
                    <p className="text-xs text-gray-400">
                      Fetches live verified encyclopedic data, real photos, established years, and locations via Wikipedia & HipoLabs open APIs even without an external API key.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-800/60 rounded-xl border border-gray-700/60">
                    <h5 className="font-bold text-green-300 mb-1 text-sm">2. Automatic In-Memory Caching</h5>
                    <p className="text-xs text-gray-400">
                      Once a college is fetched, it is stored in the server's cache so subsequent searches by any user load instantaneously.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-800/60 rounded-xl border border-gray-700/60">
                    <h5 className="font-bold text-purple-300 mb-1 text-sm">3. Optional Gemini AI Turbo</h5>
                    <p className="text-xs text-gray-400">
                      If <code>GEMINI_API_KEY</code> is set in <code>.env</code>, it automatically upgrades to Gemini 3.8 Flash for deep NIRF ranking parsing and detailed recruiter extraction.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Banner with Live Fetch Bar */}
        <div className="bg-gradient-to-r from-blue-900/60 via-indigo-950/80 to-purple-900/60 border border-blue-500/30 rounded-3xl p-6 md:p-8 backdrop-blur shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-400/30 mb-3">
                <FaGlobe className="text-blue-400" /> Live Multi-Source University Engine
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Live College Explorer & Ingestion
              </h1>
              <p className="text-gray-300 text-sm md:text-base mt-1 max-w-2xl">
                Search verified university profiles or type any university in India or worldwide to fetch its live statistics, rankings, placement records, and campus photos.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("integration")}
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600/80 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl border border-blue-500 transition duration-200"
              >
                <FaCode /> Integration Guide
              </button>
              <button
                onClick={() => setShowApiDocs(!showApiDocs)}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-800/80 hover:bg-gray-700 text-blue-300 text-sm font-semibold rounded-xl border border-gray-600 transition duration-200"
              >
                {showApiDocs ? "Hide Docs" : "Quick API"}
              </button>
            </div>
          </div>

          {/* AI Mode College Search Bar */}
          <div className="mt-6 pt-6 border-t border-blue-500/20">
            <label className="block text-sm font-semibold text-blue-200 mb-2">
              Search or fetch live stats for ANY college using Gemini AI Mode:
            </label>
            <AiCollegeSearchBar
              onSelectCollege={handleAiSelect}
              showPopularChips={true}
              autoNavigate={false}
            />
          </div>

          {/* API Documentation Drawer */}
          {showApiDocs && (
            <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-300 space-y-4 bg-black/40 p-4 rounded-xl border border-gray-800">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <FaCode className="text-blue-400" /> College Intelligence REST API Reference
              </h3>
              <p className="text-gray-400 text-xs">
                You can query this API programmatically from any frontend, mobile app, or external script:
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
                  <span className="text-green-400 font-bold">GET</span>{" "}
                  <span className="text-blue-300">/api/colleges</span>
                  <p className="text-gray-400 font-sans mt-1">
                    List colleges with optional filters: <code className="text-purple-300">?search=IIT&category=Engineering&sort=placement</code>
                  </p>
                </div>

                <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
                  <span className="text-green-400 font-bold">GET</span>{" "}
                  <span className="text-blue-300">/api/colleges/:id</span>
                  <p className="text-gray-400 font-sans mt-1">
                    Retrieve complete verified profile by college slug (e.g. <code className="text-purple-300">/api/colleges/iit-bombay</code>)
                  </p>
                </div>

                <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
                  <span className="text-yellow-400 font-bold">POST</span>{" "}
                  <span className="text-blue-300">/api/colleges/fetch</span>
                  <p className="text-gray-400 font-sans mt-1">
                    Body: <code className="text-yellow-300">&#123; "name": "Stanford University", "stream": "Engineering" &#125;</code>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* College Selector / Filter Bar */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              {[
                "All",
                "Arts & Psychology",
                "Commerce & BMS",
                "Film & Media",
                "Design",
                "Engineering",
                "Management",
                "Medical",
                "Law",
                "Forensic & Cyber",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                    categoryFilter === cat
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input with Autocomplete Dropdown */}
            <div className="relative w-full sm:w-80">
              <FaSearch className="absolute left-3 top-3 text-gray-500 text-sm z-10" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (filteredColleges.length > 0) {
                      setSelectedCollegeId(filteredColleges[0].id);
                      setSearchTerm("");
                      if (activeTab === "integration") setActiveTab("overview");
                    } else if (searchTerm.trim()) {
                      handleAiSearch(searchTerm);
                    }
                  }
                }}
                placeholder="Search university (e.g. GNLU, IITB)..."
                className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-9 pr-16 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <div className="absolute right-1.5 top-1.5 flex items-center gap-1">
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="p-1 text-gray-400 hover:text-white rounded-lg text-xs"
                    title="Clear"
                  >
                    ✕
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    if (filteredColleges.length > 0) {
                      setSelectedCollegeId(filteredColleges[0].id);
                      setSearchTerm("");
                      if (activeTab === "integration") setActiveTab("overview");
                    } else if (searchTerm.trim()) {
                      handleAiSearch(searchTerm);
                    }
                  }}
                  className="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition"
                >
                  Go
                </button>
              </div>

              {searchTerm.trim().length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden max-h-60 overflow-y-auto">
                  {filteredColleges.slice(0, 5).map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        setSelectedCollegeId(c.id);
                        setSearchTerm("");
                        if (activeTab === "integration") setActiveTab("overview");
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-gray-700 text-sm flex items-center justify-between border-b border-gray-700/50"
                    >
                      <div>
                        <span className="font-semibold text-white">{c.name}</span>
                        <span className="block text-xs text-gray-400">{c.location}</span>
                      </div>
                      <span className="text-xs bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded">
                        {c.category}
                      </span>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAiSearch(searchTerm)}
                    disabled={aiFetching}
                    className="w-full text-left px-4 py-3 bg-blue-900/40 hover:bg-blue-800/60 text-blue-300 text-xs font-semibold flex items-center gap-2 border-t border-blue-800/50 transition cursor-pointer"
                  >
                    <FaRobot className="text-blue-400" />
                    <span>{aiFetching ? "Gemini AI is analyzing..." : `Search & Fetch "${searchTerm}" with AI Mode`}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick College Selector Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-gray-800">
            {loading ? (
              <div className="text-sm text-gray-500 py-2">Loading colleges...</div>
            ) : filteredColleges.length === 0 ? (
              <div className="flex items-center gap-3 py-2">
                <span className="text-sm text-gray-400">
                  No college matched "{searchTerm}".
                </span>
                <button
                  onClick={() => handleAiSearch(searchTerm)}
                  disabled={aiFetching}
                  className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition cursor-pointer"
                >
                  <FaRobot /> {aiFetching ? "Analyzing with AI..." : `Fetch "${searchTerm}" with AI Mode`}
                </button>
              </div>
            ) : (
              filteredColleges.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCollegeId(c.id);
                    if (activeTab === "integration") setActiveTab("overview");
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-2 ${
                    selectedCollege?.id === c.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                      : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700/50"
                  }`}
                >
                  <span>{c.shortName || c.name}</span>
                  {c.source === "live_fetch" && (
                    <span className="text-[10px] bg-purple-500/30 text-purple-200 px-1.5 py-0.5 rounded">
                      Live
                    </span>
                  )}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Selected College Main Display */}
        {selectedCollege && (
          <div>
            <AnimatedCard className="mb-10 p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex items-start gap-5">
                  {selectedCollege.imageUrl && (
                    <div className="hidden sm:flex w-20 h-20 bg-white p-2 rounded-2xl items-center justify-center flex-shrink-0 shadow-md">
                      <img
                        src={selectedCollege.imageUrl}
                        alt={`${selectedCollege.name} crest`}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-300 tracking-tight">
                        {selectedCollege.name}
                      </h2>
                      {selectedCollege.verifiedSource ? (
                        <span className="text-xs bg-emerald-950/90 text-emerald-300 border border-emerald-500/60 px-3 py-1 rounded-full font-medium flex items-center gap-1.5 shadow-sm">
                          <FaCheckCircle className="text-emerald-400 text-xs" />
                          <span>Audited Source: {selectedCollege.verifiedSource}</span>
                        </span>
                      ) : selectedCollege.source === "live_fetch" ? (
                        <span className="text-xs bg-purple-600/40 text-purple-200 border border-purple-500/40 px-2.5 py-1 rounded-full font-medium">
                          Fetched Live
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1.5">
                        <FaMapMarkerAlt className="text-blue-400" />
                        <span>{selectedCollege.location}</span>
                      </div>
                      {selectedCollege.website && (
                        <div className="flex items-center space-x-1.5">
                          <FaLink className="text-blue-400" />
                          <a
                            href={selectedCollege.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 underline transition"
                          >
                            Official Website
                          </a>
                        </div>
                      )}
                      <span className="text-gray-500">•</span>
                      <span className="text-blue-400 font-medium">
                        Category: {selectedCollege.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs px-3.5 py-1.5 bg-blue-900/80 text-blue-300 rounded-full border border-blue-700">
                    Est: {selectedCollege.established}
                  </span>
                  <span className="text-xs px-3.5 py-1.5 bg-green-900/80 text-green-300 rounded-full border border-green-700">
                    {selectedCollege.type}
                  </span>
                  <Link
                    to="/book-mentor"
                    className="
                      flex items-center space-x-2
                      bg-gradient-to-r from-blue-600 to-purple-700 
                      text-white 
                      px-5 py-2.5 
                      rounded-full 
                      text-sm font-semibold 
                      hover:scale-105 
                      transition-all 
                      duration-300 
                      shadow-lg 
                      hover:shadow-xl
                    "
                  >
                    <FaChalkboard className="mr-1.5" />
                    Meet the Mentor
                  </Link>
                </div>
              </div>
            </AnimatedCard>

            {/* Navigation Tabs */}
            <nav className="mb-10 flex justify-center space-x-3 md:space-x-6 flex-wrap gap-y-2">
              {[
                { id: "overview", label: "Overview" },
                { id: "programs", label: "Programs & Fees" },
                { id: "rankings", label: "Rankings & Metrics" },
                { id: "integration", label: "Integration Guide" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    capitalize px-5 py-2.5 rounded-full transition duration-300 
                    font-semibold tracking-wide text-sm md:text-base
                    ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg scale-105 shadow-blue-600/30"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Tab Body */}
            <main className="bg-transparent">{renderTabContent()}</main>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegePage;
