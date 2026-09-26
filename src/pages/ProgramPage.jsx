// import { useState, useMemo, useEffect } from "react";
// import { Search, Filter, Book, MapPin, Clock, Users } from "lucide-react";

// const ProgramPage = () => {
//   const [programs, setPrograms] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [filters, setFilters] = useState({
//     campus: "",
//     category: "",
//     disciplines: [],
//     duration: "",
//     search: "",
//     minFee: "",
//     maxFee: "",
//     minPlacementRate: "",
//   });

//   useEffect(() => {
//     const fetchPrograms = async () => {
//       try {
//         const response = await fetch("http://192.168.0.103:5000/api/programs");
//         const data = await response.json();
//         if (data.status === "success") {
//           setPrograms(data.data);
//         } else {
//           setError("Failed to fetch programs");
//         }
//       } catch (error) {
//         setError("Error connecting to server");
//         console.error("Error fetching programs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPrograms();
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFilters((prev) => {
//       if (type === "checkbox") {
//         return {
//           ...prev,
//           disciplines: checked
//             ? [...prev.disciplines, value]
//             : prev.disciplines.filter((d) => d !== value),
//         };
//       }
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

//   const filteredPrograms = useMemo(() => {
//     return programs.filter((program) => {
//       const matchesCampus =
//         !filters.campus || program.Campus === filters.campus;
//       const matchesSearch =
//         !filters.search ||
//         program["Program Name"]
//           .toLowerCase()
//           .includes(filters.search.toLowerCase());
//       const matchesDiscipline =
//         filters.disciplines.length === 0 ||
//         filters.disciplines.includes(program.Department);
//       const matchesDuration =
//         !filters.duration || program.Duration === filters.duration;

//       return (
//         matchesCampus && matchesSearch && matchesDiscipline && matchesDuration
//       );
//     });
//   }, [filters, programs]);

//   const resetFilters = () => {
//     setFilters({
//       campus: "",
//       category: "",
//       disciplines: [],
//       duration: "",
//       search: "",
//       minFee: "",
//       maxFee: "",
//       minPlacementRate: "",
//     });
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
//         <div className="text-xl">Loading programs...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
//         <div className="text-xl text-red-500">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-4">
//           <Book className="w-10 h-10 text-blue-400" />
//           Academic Programs
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           {/* Filters Section */}
//           <div className="lg:col-span-1 bg-gray-800 rounded-xl p-6 h-fit sticky top-4">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-bold flex items-center gap-2">
//                 <Filter className="w-6 h-6 text-blue-400" />
//                 Filters
//               </h2>
//               <button
//                 onClick={resetFilters}
//                 className="text-sm text-blue-400 hover:underline"
//               >
//                 Reset
//               </button>
//             </div>

//             {/* Campus Filter */}
//             <div className="mb-4">
//               <label className="block mb-2 font-semibold">Campus</label>
//               <select
//                 name="campus"
//                 value={filters.campus}
//                 onChange={handleFilterChange}
//                 className="w-full p-2 bg-gray-700 rounded"
//               >
//                 <option value="">All Campuses</option>
//                 {[...new Set(programs.map((p) => p.Campus))].map((campus) => (
//                   <option key={campus} value={campus}>
//                     {campus}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Department Filter */}
//             <div className="mb-4">
//               <label className="block mb-2 font-semibold">Department</label>
//               <div className="space-y-2">
//                 {[...new Set(programs.map((p) => p.Department))].map(
//                   (department) => (
//                     <label
//                       key={department}
//                       className="flex items-center space-x-2"
//                     >
//                       <input
//                         type="checkbox"
//                         value={department}
//                         checked={filters.disciplines.includes(department)}
//                         onChange={handleFilterChange}
//                         className="form-checkbox text-blue-400 bg-gray-700"
//                       />
//                       <span>{department}</span>
//                     </label>
//                   )
//                 )}
//               </div>
//             </div>

//             {/* Duration Filter */}
//             <div className="mb-4">
//               <label className="block mb-2 font-semibold">Duration</label>
//               <select
//                 name="duration"
//                 value={filters.duration}
//                 onChange={handleFilterChange}
//                 className="w-full p-2 bg-gray-700 rounded"
//               >
//                 <option value="">All Durations</option>
//                 {[...new Set(programs.map((p) => p.Duration))].map(
//                   (duration) => (
//                     <option key={duration} value={duration}>
//                       {duration}
//                     </option>
//                   )
//                 )}
//               </select>
//             </div>
//           </div>

//           {/* Programs Section */}
//           <div className="lg:col-span-3">
//             {/* Search Bar */}
//             <div className="mb-6 relative">
//               <input
//                 type="text"
//                 name="search"
//                 placeholder="Search Programs..."
//                 value={filters.search}
//                 onChange={handleFilterChange}
//                 className="w-full p-3 pl-10 bg-gray-800 rounded-full focus:ring-2 focus:ring-blue-400"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>

//             {/* Programs Count */}
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold">
//                 Available Programs ({filteredPrograms.length})
//               </h2>
//             </div>

//             {/* Program Grid */}
//             {filteredPrograms.length === 0 ? (
//               <div className="text-center text-gray-500 py-12">
//                 No programs match your filters
//               </div>
//             ) : (
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredPrograms.map((program) => (
//                   <div
//                     key={program._id}
//                     className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                   >
//                     <h3 className="text-xl font-bold mb-2 text-blue-400">
//                       {program["Program Name"]}
//                     </h3>
//                     <div className="space-y-2 text-gray-400 mb-4">
//                       <p className="flex items-center gap-2">
//                         <Book className="w-5 h-5 text-blue-300" />
//                         {program.Department}
//                       </p>
//                       <p className="flex items-center gap-2">
//                         <MapPin className="w-5 h-5 text-blue-300" />
//                         {program.Campus}
//                       </p>
//                       <p className="flex items-center gap-2">
//                         <Clock className="w-5 h-5 text-blue-300" />
//                         {program.Duration}
//                       </p>
//                       <p className="flex items-center gap-2">
//                         <Users className="w-5 h-5 text-blue-300" />
//                         {program["Program Type"]}
//                       </p>
//                     </div>
//                     <button className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
//                       View Details
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgramPage;

import { useState, useMemo } from "react";
import { Search, Filter, Book, MapPin, Clock, Users } from "lucide-react";
import programsData from "../data/updated_programsData";

const ProgramPage = () => {
  const [filters, setFilters] = useState({
    campus: "",
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

  const getDisciplineKeywords = (discipline) => {
    const keywordMap = {
      Management: ["management", "business", "mba", "commerce"],
      Technology: ["tech", "technology", "engineering", "computer"],
      Forensic: ["forensic", "criminology", "investigation"],
      Law: ["law", "legal", "justice", "advocate"],
    };
    return keywordMap[discipline] || [];
  };

  const filteredPrograms = useMemo(() => {
    return programsData.filter((program) => {
      const matchesCampus =
        !filters.campus || program.campus === filters.campus;
      const matchesCategory =
        !filters.category || program.category === filters.category;
      // New discipline matching logic
      const matchesDiscipline =
        filters.disciplines.length === 0 ||
        filters.disciplines.some((discipline) => {
          const keywords = getDisciplineKeywords(discipline);
          return keywords.some(
            (keyword) =>
              program.name.toLowerCase().includes(keyword) ||
              program.department.toLowerCase().includes(keyword)
          );
        });

      const matchesDuration =
        !filters.duration || program.duration === filters.duration;
      const matchesSearch =
        !filters.search ||
        program.name.toLowerCase().includes(filters.search.toLowerCase());
      const matchesFeeMin =
        !filters.minFee || program.annualFee >= parseInt(filters.minFee);
      const matchesFeeMax =
        !filters.maxFee || program.annualFee <= parseInt(filters.maxFee);
      const matchesPlacementRate =
        !filters.minPlacementRate ||
        program.placementRate >= parseInt(filters.minPlacementRate);

      return (
        matchesCampus &&
        matchesCategory &&
        matchesDiscipline &&
        matchesDuration &&
        matchesSearch &&
        matchesFeeMin &&
        matchesFeeMax &&
        matchesPlacementRate
      );
    });
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      campus: "",
      category: "",
      disciplines: [],
      duration: "",
      search: "",
      minFee: "",
      maxFee: "",
      minPlacementRate: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-4">
          <Book className="w-10 h-10 text-blue-400" />
          Academic Programs
        </h1>

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

            {/* Campus Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Campus</label>
              <select
                name="campus"
                value={filters.campus}
                onChange={handleFilterChange}
                className="w-full p-2 bg-gray-700 rounded"
              >
                <option value="">All Campuses</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Category</label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full p-2 bg-gray-700 rounded"
              >
                <option value="">All Categories</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
            </div>

            {/* Discipline Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Discipline</label>
              <div className="space-y-2">
                {["Management", "Technology", "Forensic", "Law"].map(
                  (discipline) => (
                    <label
                      key={discipline}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        value={discipline}
                        checked={filters.disciplines.includes(discipline)}
                        onChange={handleFilterChange}
                        className="form-checkbox text-blue-400 bg-gray-700"
                      />
                      <span>{discipline}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Annual Fee Range
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  name="minFee"
                  placeholder="Min Fee"
                  value={filters.minFee}
                  onChange={handleFilterChange}
                  className="w-1/2 p-2 bg-gray-700 rounded"
                />
                <input
                  type="number"
                  name="maxFee"
                  placeholder="Max Fee"
                  value={filters.maxFee}
                  onChange={handleFilterChange}
                  className="w-1/2 p-2 bg-gray-700 rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Min Placement Rate (%)
              </label>
              <input
                type="number"
                name="minPlacementRate"
                placeholder="Minimum Placement %"
                value={filters.minPlacementRate}
                onChange={handleFilterChange}
                className="w-full p-2 bg-gray-700 rounded"
              />
            </div>
          </div>

          {/* Programs Section */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-6 relative">
              <input
                type="text"
                name="search"
                placeholder="Search Programs..."
                value={filters.search}
                onChange={handleFilterChange}
                className="w-full p-3 pl-10 bg-gray-800 rounded-full focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Programs Count */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Available Programs ({filteredPrograms.length})
              </h2>
            </div>

            {/* Program Grid */}
            {filteredPrograms.length === 0 ? (
              <div className="text-center text-gray-500 py-12">
                No programs match your filters
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program) => (
                  <div
                    key={program.id}
                    className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <h3 className="text-xl font-bold mb-2 text-blue-400">
                      {program.name}
                    </h3>
                    <div className="space-y-2 text-gray-400 mb-4">
                      <p className="flex items-center gap-2">
                        <Book className="w-5 h-5 text-blue-300" />
                        {program.department}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-300" />
                        {program.campus}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-300" />
                        {program.duration}
                      </p>
                      <p className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-300" />
                        {program.seats} Seats
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 font-semibold">
                        ₹{program.annualFee.toLocaleString()}
                      </span>
                      <span className="text-blue-400 font-semibold">
                        {program.placementRate}% Placement
                      </span>
                    </div>
                    <button className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                      View Details
                    </button>
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

export default ProgramPage;
