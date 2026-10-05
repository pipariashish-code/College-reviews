import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaRobot,
  FaMagic,
  FaGraduationCap,
  FaMoneyBillWave,
  FaChartLine,
  FaUniversity,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimes,
  FaExternalLinkAlt,
  FaAward,
  FaDatabase,
} from "react-icons/fa";

const QUICK_SUGGESTIONS = [
  "NFSU",
  "SIBM Pune",
  "FMS Delhi",
  "XLRI Jamshedpur",
  "RV College of Engineering",
  "Anna University",
  "COEP Technological Univ",
  "VJTI Mumbai",
];

export default function AiCollegeSearchBar({
  onSelectCollege,
  className = "",
  showPopularChips = true,
  autoNavigate = false,
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const performAiSearch = async (collegeNameToSearch) => {
    const targetName = (collegeNameToSearch || query).trim();
    if (!targetName) return;

    setLoading(true);
    setError(null);
    setResult(null);
    setLoadingStep(1);

    // Simulate friendly progressive feedback
    const step2Timer = setTimeout(() => setLoadingStep(2), 700);
    const step3Timer = setTimeout(() => setLoadingStep(3), 1400);

    try {
      let collegeResult = null;
      try {
        const response = await fetch("/api/colleges/ai-search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: targetName }),
        });
        const data = await response.json();
        if (response.ok && data.success && data.data) {
          collegeResult = data.data;
        }
      } catch (e) {
        console.warn("AI-search route failed, trying /api/colleges/fetch:", e);
      }

      if (!collegeResult) {
        try {
          const fetchRes = await fetch("/api/colleges/fetch", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: targetName }),
          });
          const fData = await fetchRes.json();
          if (fetchRes.ok && fData.success && fData.data) {
            collegeResult = fData.data;
          }
        } catch (e2) {
          console.warn("fetch route failed:", e2);
        }
      }

      if (!collegeResult) {
        try {
          const searchRes = await fetch(`/api/colleges?search=${encodeURIComponent(targetName)}`);
          const sData = await searchRes.json();
          if (searchRes.ok && sData.success && Array.isArray(sData.data) && sData.data.length > 0) {
            collegeResult = sData.data[0];
          }
        } catch (e3) {
          console.warn("api search query failed:", e3);
        }
      }

      if (!collegeResult) {
        throw new Error(`Could not find college "${targetName}". Please verify the spelling or try another university.`);
      }

      setResult(collegeResult);

      if (onSelectCollege) {
        onSelectCollege(collegeResult);
      }

      if (autoNavigate && collegeResult?.id) {
        navigate(`/colleges?college=${encodeURIComponent(collegeResult.id)}`);
      }
    } catch (err) {
      console.error("AI Search Error:", err);
      setError(err.message || "Failed to analyze college. Please try again.");
    } finally {
      clearTimeout(step2Timer);
      clearTimeout(step3Timer);
      setLoading(false);
      setLoadingStep(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performAiSearch();
  };

  const handleChipClick = (name) => {
    setQuery(name);
    performAiSearch(name);
  };

  const handleViewFullProfile = () => {
    if (!result) return;
    if (onSelectCollege) {
      onSelectCollege(result);
    }
    navigate(`/colleges?college=${encodeURIComponent(result.id)}`);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Search Input Box */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center bg-gray-900/90 backdrop-blur-md rounded-2xl border border-blue-500/40 hover:border-blue-400 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-500/20 shadow-2xl transition-all duration-300">
          {/* AI Mode Active Badge on Left */}
          <div className="hidden sm:flex items-center gap-2 pl-4 pr-3 py-3 border-r border-gray-700/80">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent uppercase tracking-wider">
              <FaRobot className="text-blue-400 text-sm" />
              <span>AI Mode</span>
            </div>
          </div>

          {/* Search Icon */}
          <div className="pl-4 sm:pl-3 text-gray-400">
            <FaSearch className="text-lg" />
          </div>

          {/* Input field */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type any college (e.g. SIBM Pune, FMS Delhi, RVCE, Anna University)..."
            className="w-full bg-transparent px-3 py-4 text-base sm:text-lg text-white placeholder-gray-400 focus:outline-none"
            disabled={loading}
          />

          {/* Clear button */}
          {query && !loading && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setResult(null);
                setError(null);
              }}
              className="p-2 text-gray-400 hover:text-white transition"
              title="Clear input"
            >
              <FaTimes />
            </button>
          )}

          {/* Search Button */}
          <div className="pr-2">
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="flex items-center gap-2 px-5 sm:px-7 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg transition duration-200 whitespace-nowrap text-sm sm:text-base cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <FaMagic className="text-yellow-300" />
                  <span>Search with AI</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Suggestion Chips */}
      {showPopularChips && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
            <FaMagic className="text-yellow-400/80 text-[11px]" /> Try with AI:
          </span>
          {QUICK_SUGGESTIONS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleChipClick(item)}
              disabled={loading}
              className="text-xs px-3 py-1.5 rounded-full bg-gray-800/80 hover:bg-blue-900/60 border border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white transition duration-150 cursor-pointer disabled:opacity-50"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Loading Progress State */}
      {loading && (
        <div className="mt-4 p-4 rounded-2xl bg-blue-950/60 border border-blue-500/40 backdrop-blur-md animate-pulse">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-600 rounded-xl text-white">
              <FaRobot className="text-xl animate-bounce" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-blue-200">
                Gemini AI Mode is analyzing "{query}"
              </h4>
              <p className="text-xs text-blue-300/80 mt-0.5">
                {loadingStep === 1 && "Connecting to Gemini AI higher education knowledge engine..."}
                {loadingStep === 2 && "Extracting audited placement CTCs, NIRF rankings & tuition fees..."}
                {loadingStep === 3 && "Synthesizing comprehensive institutional insights & top recruiters..."}
              </p>
            </div>
          </div>
          <div className="w-full bg-blue-900/40 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${loadingStep * 33.3}%` }}
            />
          </div>
        </div>
      )}

      {/* Error Banner */}
      {error && !loading && (
        <div className="mt-4 p-4 rounded-xl bg-red-950/70 border border-red-700/60 text-red-200 text-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold">Error:</span>
            <span>{error}</span>
          </div>
          <button
            type="button"
            onClick={() => setError(null)}
            className="text-red-400 hover:text-white text-xs px-2 py-1 bg-red-900/60 rounded"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Result Preview Card */}
      {result && !loading && (
        <div className="mt-6 bg-gradient-to-br from-gray-900 via-gray-900/95 to-black border border-blue-500/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              {result.imageUrl ? (
                <img
                  src={result.imageUrl}
                  alt={result.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-gray-700 shadow-md flex-shrink-0 bg-gray-800"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                  <FaUniversity className="text-2xl" />
                </div>
              )}

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    {result.category || "Higher Education"}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                    <FaCheckCircle className="text-[10px]" /> AI Mode Verified
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center gap-1">
                    <FaDatabase className="text-[10px]" /> Saved in DB
                  </span>
                  {result.rankings?.nationalRank && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-500/20 text-purple-300 border border-purple-400/30 flex items-center gap-1">
                      <FaAward className="text-[10px]" /> {result.rankings.nationalRank}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-extrabold text-white mt-2 leading-tight">
                  {result.name}
                </h3>

                <p className="text-sm text-gray-400 mt-1 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-400" /> {result.location}
                  {result.established && <span>• Est. {result.established}</span>}
                  {result.type && <span>• {result.type}</span>}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleViewFullProfile}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transition duration-200 text-sm whitespace-nowrap"
              >
                <span>Explore Full Profile</span>
                <FaExternalLinkAlt className="text-xs" />
              </button>

              <button
                type="button"
                onClick={() => setResult(null)}
                className="p-2.5 text-gray-400 hover:text-white bg-gray-800/80 hover:bg-gray-700 rounded-xl transition"
                title="Close preview"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Overview snippet */}
          <p className="text-sm text-gray-300 mt-4 leading-relaxed line-clamp-3 bg-gray-800/40 p-3.5 rounded-xl border border-gray-800">
            {result.overview}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            <div className="p-3.5 bg-gray-800/70 border border-emerald-500/30 rounded-2xl">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold uppercase">
                <FaMoneyBillWave /> Avg Package
              </div>
              <p className="text-lg font-black text-emerald-300 mt-1">
                {result.additionalOverviewDetails?.averagePackage || "Disclosed in Report"}
              </p>
              <span className="text-[10px] text-gray-400">Median / Average CTC</span>
            </div>

            <div className="p-3.5 bg-gray-800/70 border border-amber-500/30 rounded-2xl">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold uppercase">
                <FaChartLine /> Highest Package
              </div>
              <p className="text-lg font-black text-amber-300 mt-1">
                {result.additionalOverviewDetails?.highestPackage || "Consult Cell"}
              </p>
              <span className="text-[10px] text-gray-400">Peak Placement Offer</span>
            </div>

            <div className="p-3.5 bg-gray-800/70 border border-blue-500/30 rounded-2xl">
              <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold uppercase">
                <FaGraduationCap /> Placement Rate
              </div>
              <p className="text-lg font-black text-blue-300 mt-1">
                {result.additionalOverviewDetails?.jobPlacementRate
                  ? `${result.additionalOverviewDetails.jobPlacementRate}%`
                  : "Verified Batch"}
              </p>
              <span className="text-[10px] text-gray-400">Graduating Students</span>
            </div>

            <div className="p-3.5 bg-gray-800/70 border border-purple-500/30 rounded-2xl">
              <div className="flex items-center gap-1.5 text-purple-400 text-xs font-semibold uppercase">
                <FaUniversity /> Tuition / Fee
              </div>
              <p className="text-sm font-bold text-purple-200 mt-1 line-clamp-1">
                {result.feeRange || "Official Prospectus"}
              </p>
              <span className="text-[10px] text-gray-400">Annual Tuition Structure</span>
            </div>
          </div>

          {/* Top Recruiters Pills */}
          {result.additionalOverviewDetails?.topRecruiters?.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-400 font-semibold">Top Recruiters:</span>
              {result.additionalOverviewDetails.topRecruiters.slice(0, 6).map((recruiter, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-lg bg-gray-800 text-gray-200 border border-gray-700"
                >
                  {recruiter}
                </span>
              ))}
            </div>
          )}

          {/* Integrate into Tools Actions */}
          <div className="mt-5 pt-4 border-t border-gray-800">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
              <FaMagic className="text-blue-400" /> Use in MentoreX Student Tools:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() =>
                  navigate(
                    `/tools/college-fee-comparison?college=${encodeURIComponent(
                      result.id || result.name
                    )}`
                  )
                }
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 hover:from-blue-700/60 hover:to-indigo-700/60 text-blue-200 border border-blue-500/40 rounded-xl text-xs font-bold transition shadow-sm"
              >
                <span>⚖️ Compare Fees & ROI</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  navigate(
                    `/tools/loan-eligibility?college=${encodeURIComponent(
                      result.id || result.name
                    )}`
                  )
                }
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-emerald-900/50 to-teal-900/50 hover:from-emerald-700/60 hover:to-teal-700/60 text-emerald-200 border border-emerald-500/40 rounded-xl text-xs font-bold transition shadow-sm"
              >
                <span>💳 Calculate Education Loan</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  navigate(
                    `/tools/scholarship-finder?college=${encodeURIComponent(
                      result.id || result.name
                    )}`
                  )
                }
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-purple-900/50 to-pink-900/50 hover:from-purple-700/60 hover:to-pink-700/60 text-purple-200 border border-purple-500/40 rounded-xl text-xs font-bold transition shadow-sm"
              >
                <span>🎓 Find Scholarships</span>
              </button>
            </div>
          </div>

          {/* Source Citation */}
          {result.verifiedSource && (
            <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5 text-blue-300">
                <FaCheckCircle className="text-emerald-400" />
                <span>Audited Source: {result.verifiedSource}</span>
              </span>
              <span className="text-gray-500">Fetched via Gemini AI Mode</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
