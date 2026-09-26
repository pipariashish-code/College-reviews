import { useState, useMemo } from "react";
import {
  GitCompare,
  School,
  IndianRupee,
  Clock,
  MapPin,
  Trash2,
  Filter,
  BarChart,
} from "lucide-react";

// Enhanced data structure with more comprehensive college program information
const collegePrograms = [
  {
    id: 1,
    name: "B.Tech Computer Science",
    college: "Indian Institute of Technology, Delhi",
    fees: 250000,
    duration: "4 Years",
    location: "Delhi",
    accreditation: "NBA, AICTE",
    scholarshipAvailable: true,
    placementRate: 96,
    additionalCosts: {
      hostel: 120000,
      books: 20000,
      other: 30000,
    },
  },
  {
    id: 2,
    name: "MBA Business Administration",
    college: "Indian Institute of Management, Ahmedabad",
    fees: 450000,
    duration: "2 Years",
    location: "Ahmedabad",
    accreditation: "AACSB, NAAC A++",
    scholarshipAvailable: true,
    placementRate: 98,
    additionalCosts: {
      hostel: 180000,
      books: 25000,
      other: 50000,
    },
  },
  {
    id: 3,
    name: "B.Sc. Data Science",
    college: "Manipal Institute of Technology, Goa",
    fees: 300000,
    duration: "3 Years",
    location: "Goa",
    accreditation: "NAAC A",
    scholarshipAvailable: false,
    placementRate: 85,
    additionalCosts: {
      hostel: 100000,
      books: 15000,
      other: 25000,
    },
  },
  {
    id: 4,
    name: "M.Tech Artificial Intelligence",
    college: "Indian Institute of Technology, Bombay",
    fees: 350000,
    duration: "2 Years",
    location: "Mumbai",
    accreditation: "NBA, AICTE",
    scholarshipAvailable: true,
    placementRate: 92,
    additionalCosts: {
      hostel: 150000,
      books: 22000,
      other: 40000,
    },
  },
];

const CollegeFeesComparison = () => {
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [filters, setFilters] = useState({
    minFees: "",
    maxFees: "",
    location: "",
    duration: "",
    scholarshipOnly: false,
    minPlacementRate: "",
  });

  const filteredPrograms = useMemo(() => {
    return collegePrograms.filter((program) => {
      const matchFeeMin =
        !filters.minFees || program.fees >= parseInt(filters.minFees);
      const matchFeeMax =
        !filters.maxFees || program.fees <= parseInt(filters.maxFees);
      const matchLocation =
        !filters.location || program.location === filters.location;
      const matchDuration =
        !filters.duration || program.duration === filters.duration;
      const matchScholarship =
        !filters.scholarshipOnly || program.scholarshipAvailable;
      const matchPlacementRate =
        !filters.minPlacementRate ||
        program.placementRate >= parseInt(filters.minPlacementRate);

      return (
        matchFeeMin &&
        matchFeeMax &&
        matchLocation &&
        matchDuration &&
        matchScholarship &&
        matchPlacementRate
      );
    });
  }, [filters]);

  const handleSelect = (e) => {
    const selectedId = parseInt(e.target.value);
    if (!selectedPrograms.some((program) => program.id === selectedId)) {
      const selectedProgram = collegePrograms.find(
        (program) => program.id === selectedId
      );
      setSelectedPrograms((prev) => [...prev, selectedProgram]);
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
        <h1 className="text-4xl font-bold mb-8 text-center flex items-center justify-center gap-4">
          <GitCompare className="w-10 h-10 text-blue-400" />
          College Fees Comparison
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

            {/* Fee Range Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Fee Range (INR)
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min Fees"
                  value={filters.minFees}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, minFees: e.target.value }))
                  }
                  className="w-1/2 p-2 bg-gray-700 rounded"
                />
                <input
                  type="number"
                  placeholder="Max Fees"
                  value={filters.maxFees}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, maxFees: e.target.value }))
                  }
                  className="w-1/2 p-2 bg-gray-700 rounded"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Location</label>
              <select
                value={filters.location}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, location: e.target.value }))
                }
                className="w-full p-2 bg-gray-700 rounded"
              >
                <option value="">All Locations</option>
                <option value="Delhi">Delhi</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Goa">Goa</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>

            {/* Duration Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Duration</label>
              <select
                value={filters.duration}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, duration: e.target.value }))
                }
                className="w-full p-2 bg-gray-700 rounded"
              >
                <option value="">All Durations</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
              </select>
            </div>

            {/* Scholarship and Placement Filters */}
            <div className="mb-4 space-y-4">
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
                <label htmlFor="scholarshipCheckbox">
                  Scholarship Available
                </label>
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Min Placement Rate
                </label>
                <input
                  type="number"
                  placeholder="Minimum %"
                  value={filters.minPlacementRate}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      minPlacementRate: e.target.value,
                    }))
                  }
                  className="w-full p-2 bg-gray-700 rounded"
                />
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="lg:col-span-3">
            {/* Program Selection Dropdown */}
            <div className="mb-6 relative">
              <select
                onChange={handleSelect}
                className="w-full p-3 bg-gray-800 rounded-full focus:ring-2 focus:ring-blue-400"
              >
                <option value="">
                  Select a College Program for Comparison
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
                      {program.name} - {program.college}
                    </option>
                  ))}
              </select>
            </div>

            {/* Comparison Table */}
            {selectedPrograms.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full table-auto text-gray-100 border-collapse">
                  <thead>
                    <tr className="bg-gray-700">
                      <th className="p-3 text-left">
                        <School className="inline-block mr-2" /> College
                      </th>
                      <th className="p-3 text-left">
                        <BarChart className="inline-block mr-2" /> Program
                      </th>
                      <th className="p-3 text-left">
                        <IndianRupee className="inline-block mr-2" /> Tuition
                        Fees
                      </th>
                      <th className="p-3 text-left">
                        <IndianRupee className="inline-block mr-2" /> Total Cost
                      </th>
                      <th className="p-3 text-left">
                        <Clock className="inline-block mr-2" /> Duration
                      </th>
                      <th className="p-3 text-left">
                        <MapPin className="inline-block mr-2" /> Location
                      </th>
                      <th className="p-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedPrograms.map((program) => (
                      <tr
                        key={program.id}
                        className="bg-gray-800 hover:bg-gray-700 transition"
                      >
                        <td className="p-3">{program.college}</td>
                        <td className="p-3">{program.name}</td>
                        <td className="p-3">
                          ₹{program.fees.toLocaleString()}
                        </td>
                        <td className="p-3">
                          ₹{calculateTotalCost(program).toLocaleString()}
                        </td>
                        <td className="p-3">{program.duration}</td>
                        <td className="p-3">{program.location}</td>
                        <td className="p-3">
                          <button
                            onClick={() => handleRemove(program.id)}
                            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 flex items-center"
                          >
                            <Trash2 className="mr-1" size={16} /> Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Additional Insights */}
            {selectedPrograms.length > 1 && (
              <div className="mt-6 bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  Comparative Insights
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Lowest Total Cost</h4>
                    <p>
                      {
                        selectedPrograms.reduce((prev, current) =>
                          calculateTotalCost(prev) < calculateTotalCost(current)
                            ? prev
                            : current
                        ).college
                      }
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Highest Placement Rate
                    </h4>
                    <p>
                      {
                        selectedPrograms.reduce((prev, current) =>
                          prev.placementRate > current.placementRate
                            ? prev
                            : current
                        ).college
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFeesComparison;

// // src/components/CollegeFeesComparison.jsx

// import { useState } from "react";
// import collegePrograms from "./tempData";

// const CollegeFeesComparison = () => {
//   const [selectedPrograms, setSelectedPrograms] = useState([]);

//   const handleSelect = (e) => {
//     const selectedId = parseInt(e.target.value);
//     if (!selectedPrograms.some((program) => program.id === selectedId)) {
//       const selectedProgram = collegePrograms.find(
//         (program) => program.id === selectedId
//       );
//       setSelectedPrograms((prev) => [...prev, selectedProgram]);
//     }
//   };

//   const handleRemove = (id) => {
//     setSelectedPrograms((prev) => prev.filter((program) => program.id !== id));
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-gray-100 rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">College Fees Comparison</h2>

//       {/* Dropdown for Selecting Programs */}
//       <div className="mb-4">
//         <select
//           onChange={handleSelect}
//           className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           <option value="">Select a College Program</option>
//           {collegePrograms.map((program) => (
//             <option key={program.id} value={program.id}>
//               {program.name} - {program.college}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Display Selected Programs for Comparison */}
//       {selectedPrograms.length > 0 && (
//         <div className="overflow-x-auto">
//           <table className="w-full table-auto text-gray-100">
//             <thead>
//               <tr className="bg-gray-700">
//                 <th className="p-3">College</th>
//                 <th className="p-3">Program</th>
//                 <th className="p-3">Fees (INR)</th>
//                 <th className="p-3">Duration</th>
//                 <th className="p-3">Location</th>
//                 <th className="p-3">Accreditation</th>
//                 <th className="p-3">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {selectedPrograms.map((program) => (
//                 <tr key={program.id} className="bg-gray-800">
//                   <td className="p-3">{program.college}</td>
//                   <td className="p-3">{program.name}</td>
//                   <td className="p-3">{program.fees.toLocaleString()}</td>
//                   <td className="p-3">{program.duration}</td>
//                   <td className="p-3">{program.location}</td>
//                   <td className="p-3">{program.accreditation}</td>
//                   <td className="p-3">
//                     <button
//                       onClick={() => handleRemove(program.id)}
//                       className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CollegeFeesComparison;

// // import { useState } from "react";

// // const FeeComparison = () => {
// //   const [colleges, setColleges] = useState([{ name: "", fee: "" }]);
// //   const [comparisonResult, setComparisonResult] = useState(null);

// //   const handleAddCollege = () => {
// //     setColleges([...colleges, { name: "", fee: "" }]);
// //   };

// //   const handleInputChange = (index, field, value) => {
// //     const updatedColleges = [...colleges];
// //     updatedColleges[index][field] = value;
// //     setColleges(updatedColleges);
// //   };

// //   const handleCompare = () => {
// //     const sortedColleges = colleges
// //       .filter((college) => college.name && college.fee)
// //       .sort((a, b) => parseFloat(a.fee) - parseFloat(b.fee));

// //     setComparisonResult(sortedColleges);
// //   };

// //   return (
// //     <div className="bg-gray-900 p-8 rounded-md text-white">
// //       <h2 className="text-2xl font-bold mb-4">College Fee Comparison Tool</h2>
// //       {colleges.map((college, index) => (
// //         <div key={index} className="mb-4">
// //           <input
// //             type="text"
// //             placeholder="College Name"
// //             className="p-2 rounded bg-gray-800 text-white mr-2"
// //             value={college.name}
// //             onChange={(e) => handleInputChange(index, "name", e.target.value)}
// //           />
// //           <input
// //             type="number"
// //             placeholder="Fee Amount"
// //             className="p-2 rounded bg-gray-800 text-white"
// //             value={college.fee}
// //             onChange={(e) => handleInputChange(index, "fee", e.target.value)}
// //           />
// //         </div>
// //       ))}
// //       <button
// //         onClick={handleAddCollege}
// //         className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded mb-4"
// //       >
// //         Add College
// //       </button>
// //       <button
// //         onClick={handleCompare}
// //         className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded ml-2"
// //       >
// //         Compare Fees
// //       </button>

// //       {comparisonResult && (
// //         <div className="mt-6">
// //           <h3 className="text-xl font-semibold mb-2">Comparison Result</h3>
// //           <ul>
// //             {comparisonResult.map((college, index) => (
// //               <li key={index} className="mb-1">
// //                 {college.name}: ${college.fee}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default FeeComparison;
