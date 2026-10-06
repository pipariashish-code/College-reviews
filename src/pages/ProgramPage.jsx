import { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, Filter, Book, MapPin, ArrowRight } from "lucide-react";
import { VERIFIED_COLLEGES_CLIENT } from "../data/verifiedCollegesClient";

// Consolidate all courses across all verified institutions
const ALL_COLLEGE_PROGRAMS = VERIFIED_COLLEGES_CLIENT.flatMap((college) => {
  const courses = Array.isArray(college.popularPrograms) ? college.popularPrograms : [];
  return courses.map((course, idx) => {
    let normCategory = "Undergraduate";
    const name = course.name || "";
    if (/integrated|dual degree|5-year|5 year/i.test(name) || course.level === "Integrated Degree") {
      normCategory = "Integrated Degree";
    } else if (/ph\.d|doctor|fellow/i.test(name) || course.level === "Doctoral") {
      normCategory = "Doctoral";
    } else if (/diploma|certificate|pgd/i.test(name) || course.level === "Diploma & Certificate") {
      normCategory = "Diploma & Certificate";
    } else if (/m\.tech|m\.sc|m\.a\.|m\.com|mba|ll\.m\.|m\.des|md|ms|dm|m\.ch/i.test(name) || course.level === "Postgraduate") {
      normCategory = "Postgraduate";
    }

    return {
      id: `${college.id}-${idx}`,
      name: course.name,
      collegeId: college.id,
      collegeName: college.name,
      collegeShortName: college.shortName || college.name,
      location: college.location,
      city: college.city || college.location.split(",")[0],
      state: college.state || "India",
      discipline: college.category || "Engineering",
      category: normCategory,
      duration: course.duration || "3-4 Years",
      department: course.department || `Faculty of ${college.category}`,
      seats: course.seats || 60,
      annualFee: Number(course.annualFee) || college.annualTuitionFee || 150000,
      entranceExam: course.entranceExam || "National / Institute Entrance",
      placementRate: college.additionalOverviewDetails?.jobPlacementRate || 85,
      averagePackage: college.additionalOverviewDetails?.averagePackage || "₹10 LPA",
      eligibility: course.eligibility || "Recognized qualifying examination marks",
      careerScope: course.careerScope || "Industry Specialist, Research Analyst",
    };
  });
});

const ProgramPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    collegeId: "",
    category: "",
    disciplines: [],
    duration: "",
    search: "",
    minFee: "",
    maxFee: "",
    minPlacementRate: "",
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => {
      if (type === "checkbox") {
        return {
          ...prev,
          disciplines: checked
            ? [...prev.disciplines, value]
            : prev.disciplines.filter((d) => d !== value),
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const resetFilters = () => {
    setFilters({
      collegeId: "",
      category: "",
      disciplines: [],
      duration: "",
      search: "",
      minFee: "",
      maxFee: "",
      minPlacementRate: "",
    });
  };

  const filteredPrograms = useMemo(() => {
    return ALL_COLLEGE_PROGRAMS.filter((prog) => {
      // College match
      if (filters.collegeId && prog.collegeId !== filters.collegeId) {
        return false;
      }

      // Category match
      if (filters.category && prog.category !== filters.category) {
        return false;
      }

      // Discipline match
      if (filters.disciplines.length > 0) {
        const matchesAny = filters.disciplines.some((disc) => {
          if (disc === "Engineering" && /engineering|tech|computer/i.test(prog.discipline)) return true;
          if (disc === "Forensic & Cyber" && /forensic|cyber/i.test(prog.discipline)) return true;
          if (disc === "Law" && /law/i.test(prog.discipline)) return true;
          if (disc === "Medical" && /medical|health/i.test(prog.discipline)) return true;
          if (disc === "Management" && /management|business/i.test(prog.discipline)) return true;
          if (disc === "Design" && /design|fashion/i.test(prog.discipline)) return true;
          if (disc === "Film & Media" && /film|media/i.test(prog.discipline)) return true;
          if (disc === "Commerce" && /commerce|bms/i.test(prog.discipline)) return true;
          if (disc === "Sciences & Arts" && /sciences|arts|psychology/i.test(prog.discipline)) return true;
          return prog.discipline.toLowerCase().includes(disc.toLowerCase());
        });
        if (!matchesAny) return false;
      }

      // Search match
      if (filters.search.trim()) {
        const q = filters.search.toLowerCase().trim();
        const inName = prog.name.toLowerCase().includes(q);
        const inCollege = prog.collegeName.toLowerCase().includes(q) || prog.collegeShortName.toLowerCase().includes(q);
        const inDept = prog.department.toLowerCase().includes(q);
        const inExam = prog.entranceExam.toLowerCase().includes(q);
        const inCity = prog.city.toLowerCase().includes(q);
        if (!inName && !inCollege && !inDept && !inExam && !inCity) {
          return false;
        }
      }

      // Fee Range
      if (filters.minFee && prog.annualFee < Number(filters.minFee)) {
        return false;
      }
      if (filters.maxFee && prog.annualFee > Number(filters.maxFee)) {
        return false;
      }

      // Placement Rate
      if (filters.minPlacementRate && prog.placementRate < Number(filters.minPlacementRate)) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleSelectCollege = (collegeId) => {
    navigate("/colleges", { state: { selectedCollegeId: collegeId } });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30 mb-3">
            <Book className="w-3.5 h-3.5" /> All-India Course & Degree Explorer
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Explore All Courses Across Top Colleges
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-2">
            Browse {ALL_COLLEGE_PROGRAMS.length} verified programs across {VERIFIED_COLLEGES_CLIENT.length} top universities. Filter by degree level, branch, annual fee, and accepted entrance exams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 bg-gray-900/90 border border-gray-800 rounded-2xl p-6 h-fit sticky top-6 shadow-xl backdrop-blur-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold flex items-center gap-2 text-white">
                <Filter className="w-5 h-5 text-blue-400" />
                Filter Courses
              </h2>
              <button
                onClick={resetFilters}
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
              >
                Reset All
              </button>
            </div>

            {/* University / College Filter */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                Select Institution
              </label>
              <select
                name="collegeId"
                value={filters.collegeId}
                onChange={handleFilterChange}
                className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-xl text-xs text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Universities ({VERIFIED_COLLEGES_CLIENT.length})</option>
                {VERIFIED_COLLEGES_CLIENT.map((college) => (
                  <option key={college.id} value={college.id}>
                    {college.shortName || college.name} ({college.city})
                  </option>
                ))}
              </select>
            </div>

            {/* Degree Category Filter */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                Degree Level
              </label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-xl text-xs text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Degree Levels</option>
                <option value="Undergraduate">Undergraduate (UG)</option>
                <option value="Postgraduate">Postgraduate (PG)</option>
                <option value="Integrated Degree">Integrated 5-Year</option>
                <option value="Doctoral">Doctoral / Ph.D.</option>
                <option value="Diploma & Certificate">Diploma & Certificate</option>
              </select>
            </div>

            {/* Discipline Categories */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                Academic Disciplines
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {[
                  "Engineering",
                  "Forensic & Cyber",
                  "Law",
                  "Medical",
                  "Management",
                  "Commerce",
                  "Design",
                  "Film & Media",
                  "Sciences & Arts",
                ].map((disc) => (
                  <label key={disc} className="flex items-center space-x-2 text-xs text-gray-300 cursor-pointer">
                    <input
                      type="checkbox"
                      value={disc}
                      checked={filters.disciplines.includes(disc)}
                      onChange={handleFilterChange}
                      className="form-checkbox text-blue-500 bg-gray-800 border-gray-700 rounded"
                    />
                    <span>{disc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Fee Filter */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                Annual Tuition Fee (₹)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  name="minFee"
                  placeholder="Min Fee"
                  value={filters.minFee}
                  onChange={handleFilterChange}
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-200"
                />
                <input
                  type="number"
                  name="maxFee"
                  placeholder="Max Fee"
                  value={filters.maxFee}
                  onChange={handleFilterChange}
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-200"
                />
              </div>
            </div>

            {/* Placement Rate Filter */}
            <div className="mb-2">
              <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                Min. Placement Benchmark (%)
              </label>
              <input
                type="number"
                name="minPlacementRate"
                placeholder="e.g. 80"
                value={filters.minPlacementRate}
                onChange={handleFilterChange}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-200"
              />
            </div>
          </div>

          {/* Main Program Catalog */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-6 relative">
              <input
                type="text"
                name="search"
                placeholder="Search courses by title, university, branch, or exam (e.g. Cyber Security, AI, CLAT, NEET, JEE, MBA)..."
                value={filters.search}
                onChange={handleFilterChange}
                className="w-full p-3.5 pl-11 bg-gray-900/90 border border-gray-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner text-white placeholder-gray-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              {filters.search && (
                <button
                  onClick={() => setFilters((p) => ({ ...p, search: "" }))}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Count and Badges */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-6">
              <h2 className="text-xl font-bold text-white">
                Showing {filteredPrograms.length} Courses
              </h2>
              <span className="text-xs text-gray-400">
                Sorted across {VERIFIED_COLLEGES_CLIENT.length} top national institutions
              </span>
            </div>

            {/* Program Cards Grid */}
            {filteredPrograms.length === 0 ? (
              <div className="text-center py-16 bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <Book className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-300">No courses match your criteria</h3>
                <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
                  Try adjusting the fee threshold, removing search terms, or resetting the filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {filteredPrograms.map((program) => {
                  const isUG = program.category === "Undergraduate";
                  const isPG = program.category === "Postgraduate";
                  const isInt = program.category === "Integrated Degree";
                  const isPhd = program.category === "Doctoral";

                  const badgeColor = isUG
                    ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40"
                    : isPG
                    ? "bg-indigo-950/80 text-indigo-300 border-indigo-500/40"
                    : isInt
                    ? "bg-purple-950/80 text-purple-300 border-purple-500/40"
                    : isPhd
                    ? "bg-amber-950/80 text-amber-300 border-amber-500/40"
                    : "bg-rose-950/80 text-rose-300 border-rose-500/40";

                  return (
                    <div
                      key={program.id}
                      className="bg-gray-900/90 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-2.5">
                          <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${badgeColor}`}>
                            {program.category}
                          </span>
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-800 text-gray-300">
                            ⏱️ {program.duration}
                          </span>
                          <span className="text-[10px] text-gray-400 font-medium truncate max-w-[150px]">
                            {program.discipline}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                          {program.name}
                        </h3>

                        {/* College & Location */}
                        <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold mb-3">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate">{program.collegeName}</span>
                          <span className="text-gray-500 font-normal">({program.city})</span>
                        </div>

                        {/* Department */}
                        <p className="text-xs text-gray-400 mb-4 line-clamp-1">
                          {program.department}
                        </p>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-2 bg-gray-950/60 p-3 rounded-xl border border-gray-800/80 mb-4 text-xs">
                          <div>
                            <span className="text-[10px] text-gray-500 block">Annual Tuition</span>
                            <span className="text-sm font-extrabold text-emerald-400">
                              ₹{program.annualFee.toLocaleString()}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] text-gray-500 block">Admission Route</span>
                            <span className="text-xs font-bold text-blue-300 truncate block" title={program.entranceExam}>
                              {program.entranceExam}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] text-gray-500 block">Intake Capacity</span>
                            <span className="text-xs font-semibold text-gray-300">
                              {program.seats} Seats
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] text-gray-500 block">Placement Rate</span>
                            <span className="text-xs font-bold text-amber-300">
                              {program.placementRate}% Placement
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="pt-2 border-t border-gray-800/80 flex items-center gap-2">
                        <button
                          onClick={() => handleSelectCollege(program.collegeId)}
                          className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow"
                        >
                          <span>View College Profile</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <Link
                          to="/tools/college-fee-comparison"
                          state={{ prefillCollege1: program.collegeName }}
                          className="py-2 px-3 bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 rounded-xl text-xs font-semibold transition"
                          title="Compare course fee"
                        >
                          Compare
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
