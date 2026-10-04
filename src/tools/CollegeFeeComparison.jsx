import { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import { fetchCollegeClientSide } from "../utils/collegeClientFetcher.js";
import {
  GitCompare,
  School,
  Clock,
  MapPin,
  Trash2,
  Filter,
  BarChart,
  Sparkles,
  TrendingUp,
  CreditCard,
  Award,
} from "lucide-react";

// Default base programs
const basePrograms = [
  {
    id: "nfsu-mtech",
    name: "M.Tech Cyber Security",
    college: "National Forensic Sciences University (NFSU)",
    fees: 160000,
    duration: "2 Years",
    location: "Gandhinagar, Gujarat",
    accreditation: "Institute of National Importance",
    scholarshipAvailable: true,
    placementRate: 92,
    averagePackage: "₹12.5 LPA",
    additionalCosts: {
      hostel: 70000,
      books: 15000,
      other: 20000,
    },
  },
  {
    id: "iitd-cs",
    name: "B.Tech Computer Science",
    college: "Indian Institute of Technology, Delhi",
    fees: 250000,
    duration: "4 Years",
    location: "Delhi",
    accreditation: "NIRF #2, NBA",
    scholarshipAvailable: true,
    placementRate: 97,
    averagePackage: "₹25.8 LPA",
    additionalCosts: {
      hostel: 120000,
      books: 20000,
      other: 30000,
    },
  },
  {
    id: "iima-mba",
    name: "MBA Business Administration",
    college: "Indian Institute of Management, Ahmedabad",
    fees: 1250000,
    duration: "2 Years",
    location: "Ahmedabad",
    accreditation: "NIRF #1, AACSB",
    scholarshipAvailable: true,
    placementRate: 100,
    averagePackage: "₹34.4 LPA",
    additionalCosts: {
      hostel: 180000,
      books: 25000,
      other: 50000,
    },
  },
  {
    id: "iitb-cse",
    name: "B.Tech Computer Science & Engineering",
    college: "Indian Institute of Technology, Bombay",
    fees: 220000,
    duration: "4 Years",
    location: "Mumbai",
    accreditation: "NIRF #3, Institute of National Importance",
    scholarshipAvailable: true,
    placementRate: 98,
    averagePackage: "₹26.0 LPA",
    additionalCosts: {
      hostel: 140000,
      books: 20000,
      other: 40000,
    },
  },
  {
    id: "bits-cs",
    name: "B.E. Computer Science",
    college: "BITS Pilani",
    fees: 495000,
    duration: "4 Years",
    location: "Pilani",
    accreditation: "Institute of Eminence",
    scholarshipAvailable: true,
    placementRate: 95,
    averagePackage: "₹20.5 LPA",
    additionalCosts: {
      hostel: 110000,
      books: 20000,
      other: 30000,
    },
  },
];

const CollegeFeesComparison = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [collegePrograms, setCollegePrograms] = useState(basePrograms);
  const [selectedPrograms, setSelectedPrograms] = useState([basePrograms[0], basePrograms[1]]);
  const [liveQuery, setLiveQuery] = useState("");
  const [fetchingLive, setFetchingLive] = useState(false);
  const [fetchMessage, setFetchMessage] = useState(null);

  const [filters, setFilters] = useState({
    minFees: "",
    maxFees: "",
    location: "",
    duration: "",
    scholarshipOnly: false,
    minPlacementRate: "",
  });

  const loadCollegesFromApi = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/colleges`);
      if (res.data && res.data.success && Array.isArray(res.data.data)) {
        const loadedPrograms = [];
        res.data.data.forEach((college) => {
          const avgPkg =
            college.additionalOverviewDetails?.averagePackage || "₹10.5 LPA";
          if (college.popularPrograms && college.popularPrograms.length > 0) {
            college.popularPrograms.forEach((p, idx) => {
              loadedPrograms.push({
                id: `${college.id}-${idx}`,
                name: p.name,
                college: college.name,
                fees: p.annualFee || 200000,
                duration: p.duration || "4 Years",
                location: college.city || college.location,
                accreditation: college.rankings?.rankingBody || "NIRF Accredited",
                scholarshipAvailable: Boolean(
                  college.additionalOverviewDetails?.financialAid?.scholarships
                ),
                placementRate: college.additionalOverviewDetails?.jobPlacementRate || 88,
                averagePackage: avgPkg,
                additionalCosts: {
                  hostel: 110000,
                  books: 20000,
                  other: 30000,
                },
              });
            });
          } else {
            loadedPrograms.push({
              id: `${college.id}-gen`,
              name: college.category === "Medical" ? "MBBS" : "B.Tech Engineering",
              college: college.name,
              fees: 195000,
              duration: "4 Years",
              location: college.city || college.location,
              accreditation: college.rankings?.rankingBody || "NIRF Accredited",
              scholarshipAvailable: true,
              placementRate: college.additionalOverviewDetails?.jobPlacementRate || 85,
              averagePackage: avgPkg,
              additionalCosts: {
                hostel: 100000,
                books: 18000,
                other: 25000,
              },
            });
          }
        });

        // Merge with base programs without duplicates
        setCollegePrograms((prev) => {
          const map = new Map();
          [...prev, ...loadedPrograms].forEach((p) => map.set(p.id, p));
          return Array.from(map.values());
        });
      }
    } catch (err) {
      console.warn("Could not load colleges from API for comparison:", err);
    }
  }, []);

  useEffect(() => {
    loadCollegesFromApi();
  }, [loadCollegesFromApi]);

  // Handle URL pre-fill from AI search (?college=...)
  useEffect(() => {
    const urlCollege = searchParams.get("college");
    if (!urlCollege) return;

    // Check if already in programs
    const match = collegePrograms.find(
      (p) =>
        p.college.toLowerCase().includes(urlCollege.toLowerCase()) ||
        p.id.toLowerCase().includes(urlCollege.toLowerCase())
    );

    if (match) {
      setSelectedPrograms((prev) => {
        if (prev.some((p) => p.id === match.id)) return prev;
        return [match, ...prev].slice(0, 4);
      });
    } else {
      // Trigger fetch automatically
      fetchAndAddCollegeByName(urlCollege);
    }
  }, [searchParams, collegePrograms]);

  const fetchAndAddCollegeByName = async (collegeNameToFetch) => {
    if (!collegeNameToFetch.trim()) return;
    setFetchingLive(true);
    setFetchMessage(null);

    let fetchedCollege = null;
    try {
      // 1. Try dedicated AI search with persistent DB caching
      const aiRes = await axios.post(
        `${API_URL}/api/colleges/ai-search`,
        { name: collegeNameToFetch.trim() },
        { timeout: 7000 }
      );
      if (aiRes.data && aiRes.data.success && aiRes.data.data) {
        fetchedCollege = aiRes.data.data;
      }
    } catch (err) {
      // 2. Fallback to /api/colleges/fetch
      try {
        const res = await axios.post(
          `${API_URL}/api/colleges/fetch`,
          { name: collegeNameToFetch.trim() },
          { timeout: 5000 }
        );
        if (res.data && res.data.success && res.data.data) {
          fetchedCollege = res.data.data;
        }
      } catch (fErr) {
        console.warn("Server fetch fallback error:", fErr);
      }
    }

    if (!fetchedCollege) {
      try {
        fetchedCollege = await fetchCollegeClientSide(collegeNameToFetch.trim());
      } catch (fallbackErr) {
        console.error("Client fallback error in comparison:", fallbackErr);
      }
    }

    if (fetchedCollege) {
      const c = fetchedCollege;
      const annualFee =
        c.popularPrograms?.[0]?.annualFee ||
        c.annualTuitionFee ||
        (c.feeRange ? parseInt(c.feeRange.replace(/[^\d]/g, ""), 10) : 195000) ||
        195000;

      const newProg = {
        id: `${c.id}-live`,
        name: c.popularPrograms?.[0]?.name || `${c.category || "Degree"} Program`,
        college: c.name,
        fees: annualFee > 0 ? annualFee : 195000,
        duration: c.popularPrograms?.[0]?.duration || "4 Years",
        location: c.city || c.location,
        accreditation: c.rankings?.nationalRank || c.rankings?.rankingBody || "NIRF Accredited",
        scholarshipAvailable: Boolean(c.additionalOverviewDetails?.financialAid?.scholarships),
        placementRate: c.additionalOverviewDetails?.jobPlacementRate || 90,
        averagePackage: c.additionalOverviewDetails?.averagePackage || "₹10.5 LPA",
        additionalCosts: {
          hostel: 90000,
          books: 18000,
          other: 25000,
        },
      };

      setCollegePrograms((prev) => [newProg, ...prev]);
      setSelectedPrograms((prev) => {
        if (prev.some((p) => p.college === newProg.college)) return prev;
        return [newProg, ...prev].slice(0, 4);
      });
      setFetchMessage({
        type: "success",
        text: `Loaded "${c.name}" with AI verification & added to comparison!`,
      });
      setLiveQuery("");
    } else {
      setFetchMessage({
        type: "error",
        text: "Could not fetch college data. Please try another name.",
      });
    }
    setFetchingLive(false);
  };

  const handleFetchAndAdd = async (e) => {
    e.preventDefault();
    fetchAndAddCollegeByName(liveQuery);
  };

  const filteredPrograms = useMemo(() => {
    return collegePrograms.filter((program) => {
      const matchFeeMin =
        !filters.minFees || program.fees >= parseInt(filters.minFees, 10);
      const matchFeeMax =
        !filters.maxFees || program.fees <= parseInt(filters.maxFees, 10);
      const matchLocation =
        !filters.location ||
        program.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchDuration =
        !filters.duration || program.duration === filters.duration;
      const matchScholarship =
        !filters.scholarshipOnly || program.scholarshipAvailable;
      const matchPlacementRate =
        !filters.minPlacementRate ||
        program.placementRate >= parseInt(filters.minPlacementRate, 10);

      return (
        matchFeeMin &&
        matchFeeMax &&
        matchLocation &&
        matchDuration &&
        matchScholarship &&
        matchPlacementRate
      );
    });
  }, [filters, collegePrograms]);

  const handleSelect = (e) => {
    const selectedId = e.target.value;
    if (!selectedId) return;
    if (!selectedPrograms.some((program) => program.id === selectedId)) {
      const selectedProgram = collegePrograms.find(
        (program) => program.id === selectedId
      );
      if (selectedProgram) {
        setSelectedPrograms((prev) => [...prev, selectedProgram].slice(0, 4));
      }
    }
  };

  const handleRemove = (id) => {
    setSelectedPrograms((prev) => prev.filter((program) => program.id !== id));
  };

  const calculateTotalCost = (program) => {
    return (
      program.fees +
      program.additionalCosts.hostel +
      program.additionalCosts.books +
      program.additionalCosts.other
    );
  };

  const resetFilters = () => {
    setFilters({
      minFees: "",
      maxFees: "",
      location: "",
      duration: "",
      scholarshipOnly: false,
      minPlacementRate: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center flex items-center justify-center gap-4">
          <GitCompare className="w-10 h-10 text-blue-400" />
          Live College Fees & ROI Comparison
        </h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8 text-sm">
          Compare tuition, hostel, books, and total expenses side-by-side across universities. Type any college to fetch its live statistics on demand!
        </p>

        {/* Live Fetch Input Bar */}
        <div className="max-w-4xl mx-auto mb-8 bg-gray-800/90 border border-blue-500/30 rounded-2xl p-4 shadow-xl">
          <form onSubmit={handleFetchAndAdd} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={liveQuery}
                onChange={(e) => setLiveQuery(e.target.value)}
                placeholder="Fetch and add ANY college (e.g. NFSU, SIBM Pune, RVCE, COEP, Harvard)..."
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={fetchingLive}
              />
            </div>
            <button
              type="submit"
              disabled={fetchingLive || !liveQuery.trim()}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition whitespace-nowrap"
            >
              {fetchingLive ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Fetching with AI...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" /> AI Fetch & Compare
                </>
              )}
            </button>
          </form>

          {/* Quick Add Chips */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2 border-t border-gray-700/60">
            <span className="text-xs text-gray-400 font-medium mr-1">Quick Add:</span>
            {["NFSU", "SIBM Pune", "RVCE", "COEP", "IIT Kharagpur", "Anna University"].map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => fetchAndAddCollegeByName(chip)}
                className="text-xs px-2.5 py-1 bg-gray-900/80 hover:bg-blue-900/50 hover:text-blue-300 text-gray-300 rounded-lg border border-gray-700 transition"
              >
                + {chip}
              </button>
            ))}
          </div>

          {fetchMessage && (
            <p className={`text-xs mt-2 ${fetchMessage.type === "success" ? "text-green-400" : "text-red-400"}`}>
              {fetchMessage.text}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Section */}
          <div className="lg:col-span-1 bg-gray-800 rounded-xl p-6 h-fit sticky top-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Filter className="w-6 h-6 text-blue-400" />
                Filters
              </h2>
              <button
                onClick={resetFilters}
                className="text-sm text-blue-400 hover:underline"
              >
                Reset
              </button>
            </div>

            {/* Fee Range Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Fee Range (INR)</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minFees}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, minFees: e.target.value }))
                  }
                  className="w-1/2 p-2 bg-gray-700 rounded text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxFees}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, maxFees: e.target.value }))
                  }
                  className="w-1/2 p-2 bg-gray-700 rounded text-sm"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Location</label>
              <input
                type="text"
                placeholder="City / State"
                value={filters.location}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, location: e.target.value }))
                }
                className="w-full p-2 bg-gray-700 rounded text-sm"
              />
            </div>

            {/* Placement Rate Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Min Placement Rate (%)</label>
              <input
                type="number"
                placeholder="e.g. 90"
                value={filters.minPlacementRate}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    minPlacementRate: e.target.value,
                  }))
                }
                className="w-full p-2 bg-gray-700 rounded text-sm"
              />
            </div>

            {/* Scholarship Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="scholarshipCheckbox"
                checked={filters.scholarshipOnly}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    scholarshipOnly: e.target.checked,
                  }))
                }
                className="mr-2"
              />
              <label htmlFor="scholarshipCheckbox" className="text-sm">
                Scholarship Available
              </label>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="lg:col-span-3">
            {/* Program Selection Dropdown */}
            <div className="mb-6 relative">
              <select
                onChange={handleSelect}
                value=""
                className="w-full p-3 bg-gray-800 rounded-xl focus:ring-2 focus:ring-blue-400 text-sm text-gray-200 border border-gray-700"
              >
                <option value="">
                  + Select a College Program from Catalog ({filteredPrograms.length} available)
                </option>
                {filteredPrograms
                  .filter(
                    (program) =>
                      !selectedPrograms.some(
                        (selected) => selected.id === program.id
                      )
                  )
                  .map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.college} — {program.name} (₹{program.fees.toLocaleString()}/yr)
                    </option>
                  ))}
              </select>
            </div>

            {/* Selected Programs Comparison Grid */}
            {selectedPrograms.length === 0 ? (
              <div className="text-center py-16 bg-gray-800/40 rounded-2xl border border-gray-800">
                <School className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-300 mb-2">No Colleges Selected</h3>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                  Select programs from the dropdown above or fetch any university using the search bar to compare fees side-by-side.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {selectedPrograms.map((program) => (
                  <div
                    key={program.id}
                    className="bg-gray-800 rounded-2xl p-6 relative border border-gray-700 hover:border-blue-500 transition duration-300 shadow-xl flex flex-col justify-between"
                  >
                    <button
                      onClick={() => handleRemove(program.id)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
                      aria-label="Remove college"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                    <div>
                      <h3 className="text-xl font-bold text-blue-300 pr-8 mb-1">
                        {program.college}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium mb-4">
                        {program.name}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-300">
                          <MapPin className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                          <span>{program.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <Clock className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <BarChart className="w-4 h-4 mr-2 text-yellow-400 flex-shrink-0" />
                          <span>Placement Rate: {program.placementRate}%</span>
                        </div>
                        {program.averagePackage && (
                          <div className="flex items-center text-sm font-semibold text-emerald-400">
                            <TrendingUp className="w-4 h-4 mr-2 text-emerald-400 flex-shrink-0" />
                            <span>Avg Package: {program.averagePackage}</span>
                          </div>
                        )}
                      </div>

                      {/* Cost Breakdown */}
                      <div className="bg-gray-900/80 rounded-xl p-4 space-y-2 mb-4 text-sm border border-gray-800">
                        <div className="flex justify-between text-gray-300">
                          <span>Annual Tuition:</span>
                          <span className="font-semibold text-white">
                            ₹{program.fees.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-gray-400 text-xs">
                          <span>Hostel & Mess:</span>
                          <span>₹{program.additionalCosts.hostel.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-gray-400 text-xs">
                          <span>Books & Supplies:</span>
                          <span>₹{program.additionalCosts.books.toLocaleString()}</span>
                        </div>
                        <div className="border-t border-gray-700/80 pt-2 flex justify-between font-bold text-blue-300 text-base">
                          <span>Total Est. / Year:</span>
                          <span>₹{calculateTotalCost(program).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2.5 py-1 bg-blue-900/60 text-blue-300 rounded-md border border-blue-700/60">
                          {program.accreditation}
                        </span>
                        {program.scholarshipAvailable && (
                          <span className="text-xs px-2.5 py-1 bg-green-900/60 text-green-300 rounded-md border border-green-700/60">
                            Scholarship Available
                          </span>
                        )}
                      </div>

                      {/* Cross-Tool Actions */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-700/60">
                        <button
                          type="button"
                          onClick={() =>
                            navigate(
                              `/tools/loan-eligibility?college=${encodeURIComponent(
                                program.college
                              )}`
                            )
                          }
                          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-300 text-xs font-semibold rounded-lg border border-emerald-600/40 transition"
                        >
                          <CreditCard className="w-3.5 h-3.5" />
                          <span>Check Loan</span>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            navigate(
                              `/tools/scholarship-finder?college=${encodeURIComponent(
                                program.college
                              )}`
                            )
                          }
                          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-purple-900/40 hover:bg-purple-800/60 text-purple-300 text-xs font-semibold rounded-lg border border-purple-600/40 transition"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Scholarships</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFeesComparison;
