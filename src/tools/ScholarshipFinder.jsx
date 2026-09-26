import { useState, useEffect, useMemo } from "react";
import { Search, Filter, Award, Sliders } from "lucide-react";

// Mock scholarship data - replace with your actual data source
const scholarships = [
  {
    id: 1,
    name: "Academic Excellence Scholarship",
    region: "Maharashtra",
    amount: 100000,
    eligibility: "10+ CGPA, Annual Family Income < ₹5,00,000",
    category: ["Academic", "Merit-Based"],
    educationLevel: ["Undergraduate"],
  },
  {
    id: 2,
    name: "Minority Student Support Fund",
    region: "Delhi",
    amount: 75000,
    eligibility:
      "Minority community students, Annual Family Income < ₹3,00,000",
    category: ["Minority", "Need-Based"],
    educationLevel: ["Undergraduate", "Postgraduate"],
  },
  {
    id: 3,
    name: "Women in STEM Scholarship",
    region: "Karnataka",
    amount: 120000,
    eligibility:
      "Female students pursuing STEM, Annual Family Income < ₹6,00,000",
    category: ["Women", "Merit-Based"],
    educationLevel: ["Undergraduate", "Postgraduate"],
  },
  {
    id: 4,
    name: "National Merit Scholarship",
    region: "Pan India",
    amount: 150000,
    eligibility: "Top 10% of class, Annual Family Income < ₹4,00,000",
    category: ["Academic", "Merit-Based"],
    educationLevel: ["Undergraduate"],
  },
  {
    id: 5,
    name: "Rural Development Scholarship",
    region: "Bihar",
    amount: 80000,
    eligibility: "Students from rural areas, Annual Family Income < ₹2,50,000",
    category: ["Rural", "Need-Based"],
    educationLevel: ["Undergraduate"],
  },
  {
    id: 6,
    name: "SC/ST Empowerment Fund",
    region: "Tamil Nadu",
    amount: 90000,
    eligibility: "SC/ST category students, Annual Family Income < ₹3,00,000",
    category: ["SC/ST", "Need-Based"],
    educationLevel: ["Undergraduate", "Postgraduate"],
  },
  {
    id: 7,
    name: "Differently-Abled Student Grant",
    region: "Punjab",
    amount: 110000,
    eligibility: "Students with disabilities, Annual Family Income < ₹4,00,000",
    category: ["Differently-Abled", "Need-Based"],
    educationLevel: ["Undergraduate", "Postgraduate"],
  },
  {
    id: 8,
    name: "Postgraduate Research Fellowship",
    region: "West Bengal",
    amount: 200000,
    eligibility: "Postgraduate students pursuing research",
    category: ["Research", "Merit-Based"],
    educationLevel: ["Postgraduate"],
  },
  {
    id: 9,
    name: "Sports Excellence Scholarship",
    region: "Rajasthan",
    amount: 95000,
    eligibility: "State/National-level athletes",
    category: ["Sports", "Merit-Based"],
    educationLevel: ["Undergraduate"],
  },
  {
    id: 10,
    name: "International Study Scholarship",
    region: "Kerala",
    amount: 300000,
    eligibility: "Students accepted into international universities",
    category: ["International", "Merit-Based"],
    educationLevel: ["Postgraduate"],
  },
  {
    id: 11,
    name: "Single Parent Support Scholarship",
    region: "Madhya Pradesh",
    amount: 70000,
    eligibility:
      "Students raised by a single parent, Annual Family Income < ₹3,50,000",
    category: ["Need-Based"],
    educationLevel: ["Undergraduate"],
  },
  {
    id: 12,
    name: "Creative Arts Scholarship",
    region: "Uttar Pradesh",
    amount: 85000,
    eligibility:
      "Students excelling in fine arts, Annual Family Income < ₹4,00,000",
    category: ["Arts", "Merit-Based"],
    educationLevel: ["Undergraduate"],
  },
];

// export default scholarships;

const ScholarshipFinder = () => {
  const [filters, setFilters] = useState({
    region: "",
    category: "",
    educationLevel: "",
    minAmount: "",
    maxAmount: "",
  });

  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [isAdvancedFilterOpen, setIsAdvancedFilterOpen] = useState(false);

  // Memoized unique values
  const uniqueValues = useMemo(
    () => ({
      regions: [...new Set(scholarships.map((s) => s.region))],
      categories: [...new Set(scholarships.flatMap((s) => s.category))],
      educationLevels: [
        ...new Set(scholarships.flatMap((s) => s.educationLevel)),
      ],
    }),
    []
  );

  // Advanced filtering logic
  useEffect(() => {
    const results = scholarships.filter((scholarship) => {
      const regionMatch =
        !filters.region ||
        scholarship.region.toLowerCase().includes(filters.region.toLowerCase());

      const categoryMatch =
        !filters.category || scholarship.category.includes(filters.category);

      const educationLevelMatch =
        !filters.educationLevel ||
        scholarship.educationLevel.includes(filters.educationLevel);

      const amountMatch =
        (!filters.minAmount ||
          scholarship.amount >= parseFloat(filters.minAmount)) &&
        (!filters.maxAmount ||
          scholarship.amount <= parseFloat(filters.maxAmount));

      return regionMatch && categoryMatch && educationLevelMatch && amountMatch;
    });

    setFilteredScholarships(results);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      region: "",
      category: "",
      educationLevel: "",
      minAmount: "",
      maxAmount: "",
    });
  };

  return (
    <div className=" h-auto p-8">
      <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-gray-100 rounded-lg shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Award className="mr-3 text-blue-400" size={32} />
            <h2 className="text-3xl font-bold text-blue-300">
              Scholarship Finder
            </h2>
          </div>
          <button
            onClick={() => setIsAdvancedFilterOpen(!isAdvancedFilterOpen)}
            className="flex items-center text-blue-300 hover:text-blue-200"
          >
            <Sliders className="mr-2" size={20} />
            {isAdvancedFilterOpen ? "Hide" : "Advanced Filters"}
          </button>
        </div>

        {/* Advanced Filters Section */}
        {isAdvancedFilterOpen && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-gray-800 p-4 rounded-lg">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Region</label>
              <select
                name="region"
                value={filters.region}
                onChange={handleFilterChange}
                className="w-full p-2 bg-gray-700 rounded"
              >
                <option value="">All Regions</option>
                {uniqueValues.regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Category
              </label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full p-2 bg-gray-700 rounded"
              >
                <option value="">All Categories</option>
                {uniqueValues.categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Education Level
              </label>
              <select
                name="educationLevel"
                value={filters.educationLevel}
                onChange={handleFilterChange}
                className="w-full p-2 bg-gray-700 rounded"
              >
                <option value="">All Levels</option>
                {uniqueValues.educationLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Min Amount (₹)
              </label>
              <input
                type="number"
                name="minAmount"
                value={filters.minAmount}
                onChange={handleFilterChange}
                placeholder="Minimum Amount"
                className="w-full p-2 bg-gray-700 rounded"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Max Amount (₹)
              </label>
              <input
                type="number"
                name="maxAmount"
                value={filters.maxAmount}
                onChange={handleFilterChange}
                placeholder="Maximum Amount"
                className="w-full p-2 bg-gray-700 rounded"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={resetFilters}
                className="w-full p-2 bg-red-600 rounded hover:bg-red-700 text-white"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* Scholarship Results */}
        <div>
          {filteredScholarships.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {filteredScholarships.map((scholarship) => (
                <div
                  key={scholarship.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-blue-300">
                      {scholarship.name}
                    </h3>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                      ₹{scholarship.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>
                      <strong className="text-gray-400">Region:</strong>{" "}
                      {scholarship.region}
                    </p>
                    <p>
                      <strong className="text-gray-400">Eligibility:</strong>{" "}
                      {scholarship.eligibility}
                    </p>
                    <div className="flex space-x-2 mt-2">
                      {scholarship.category.map((cat) => (
                        <span
                          key={cat}
                          className="bg-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-800 rounded-lg">
              <Search className="mx-auto mb-4 text-gray-600" size={48} />
              <p className="text-gray-500">
                {filters.region ||
                filters.category ||
                filters.educationLevel ||
                filters.minAmount ||
                filters.maxAmount
                  ? "No scholarships match your current filters."
                  : "Start exploring scholarships by applying filters."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipFinder;

// // src/components/ScholarshipFinder.jsx

// import { useState } from "react";
// import scholarships from "./scholarshipData";

// const ScholarshipFinder = () => {
//   const [region, setRegion] = useState("");
//   const [filteredScholarships, setFilteredScholarships] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   // Get unique regions from the scholarships data
//   const regions = [
//     ...new Set(scholarships.map((scholarship) => scholarship.region)),
//   ];

//   const handleSearch = () => {
//     if (!region) {
//       alert("Please select or enter a region.");
//       return;
//     }
//     const results = scholarships.filter((scholarship) =>
//       scholarship.region.toLowerCase().includes(region.toLowerCase())
//     );
//     setFilteredScholarships(results);
//   };

//   const handleRegionSelect = (selectedRegion) => {
//     setRegion(selectedRegion);
//     setShowSuggestions(false);
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-gray-100 rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Scholarship Finder</h2>

//       {/* Region Input with Dropdown Suggestions */}
//       <div className="mb-4 relative">
//         <input
//           type="text"
//           placeholder="Enter or select a region (e.g., Delhi, Maharashtra)"
//           value={region}
//           onChange={(e) => {
//             setRegion(e.target.value);
//             setShowSuggestions(true);
//           }}
//           onFocus={() => setShowSuggestions(true)}
//           className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         {/* Dropdown Suggestions */}
//         {showSuggestions && (
//           <ul className="absolute left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded max-h-48 overflow-auto z-10">
//             {regions
//               .filter((r) => r.toLowerCase().includes(region.toLowerCase()))
//               .map((r, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleRegionSelect(r)}
//                   className="p-2 hover:bg-gray-700 cursor-pointer"
//                 >
//                   {r}
//                 </li>
//               ))}
//           </ul>
//         )}
//       </div>

//       {/* Search Button */}
//       <button
//         onClick={handleSearch}
//         className="w-full p-3 bg-blue-600 rounded hover:bg-blue-700"
//       >
//         Find Scholarships
//       </button>

//       {/* Display Scholarships */}
//       {filteredScholarships.length > 0 && (
//         <div className="mt-6">
//           <h3 className="text-xl font-semibold mb-2">
//             Available Scholarships:
//           </h3>
//           <ul className="space-y-4">
//             {filteredScholarships.map((scholarship) => (
//               <li
//                 key={scholarship.id}
//                 className="p-4 bg-gray-800 rounded shadow-md"
//               >
//                 <h4 className="text-lg font-bold">{scholarship.name}</h4>
//                 <p>
//                   <strong>Region:</strong> {scholarship.region}
//                 </p>
//                 <p>
//                   <strong>Amount:</strong> ₹
//                   {scholarship.amount.toLocaleString()}
//                 </p>
//                 <p>
//                   <strong>Eligibility:</strong> {scholarship.eligibility}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* No Results Found */}
//       {filteredScholarships.length === 0 && region && (
//         <p className="mt-6 text-red-500 font-semibold">
//           No scholarships found for "{region}".
//         </p>
//       )}
//     </div>
//   );
// };

// export default ScholarshipFinder;

// // import { useState } from "react";

// // const scholarships = [
// //   { name: "Merit Scholarship", criteria: "merit", amount: 2000 },
// //   { name: "Need-Based Scholarship", criteria: "need", amount: 3000 },
// //   { name: "Sports Scholarship", criteria: "sports", amount: 1500 },
// // ];

// // const ScholarshipFinder = () => {
// //   const [criteria, setCriteria] = useState("");
// //   const [results, setResults] = useState([]);

// //   const findScholarships = () => {
// //     const filtered = scholarships.filter((scholarship) =>
// //       scholarship.criteria.includes(criteria.toLowerCase())
// //     );
// //     setResults(filtered);
// //   };

// //   return (
// //     <div className="bg-gray-900 p-8 rounded-md text-white">
// //       <h2 className="text-2xl font-bold mb-4">Scholarship Finder</h2>
// //       <input
// //         type="text"
// //         placeholder="Enter criteria (e.g., merit, need, sports)"
// //         className="p-2 rounded bg-gray-800 text-white w-full mb-4"
// //         value={criteria}
// //         onChange={(e) => setCriteria(e.target.value)}
// //       />
// //       <button
// //         onClick={findScholarships}
// //         className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
// //       >
// //         Find Scholarships
// //       </button>
// //       <ul className="mt-4">
// //         {results.length > 0 ? (
// //           results.map((scholarship, index) => (
// //             <li key={index} className="mb-2">
// //               {scholarship.name} - ${scholarship.amount}
// //             </li>
// //           ))
// //         ) : (
// //           <p>No scholarships found.</p>
// //         )}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ScholarshipFinder;
