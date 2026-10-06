import { useState, useMemo } from "react";
import {
  FaVideo,
  FaCommentDots,
  FaBriefcase,
  FaUniversity,
  FaStar,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const mentors = [
  {
    id: 1,
    name: "Emily Rodriguez",
    expertise: "College Admissions",
    university: "NSFU",
    experience: "8 years",
    rating: 4.8,
    specialties: ["Ivy League Applications", "Scholarship Guidance"],
    avatar: "/api/placeholder/150/150",
    courses: ["Computer Science", "Business Administration"],
  },
  {
    id: 2,
    name: "Michael Chen",
    expertise: "STEM Mentorship",
    university: "NSFU",
    experience: "12 years",
    rating: 4.9,
    specialties: ["Engineering Admissions", "Research Opportunities"],
    avatar: "/api/placeholder/150/150",
    courses: ["Engineering", "Data Science", "Artificial Intelligence"],
  },
  {
    id: 3,
    name: "Sarah Williams",
    expertise: "Financial Aid Expert",
    university: "NSFU",
    experience: "10 years",
    rating: 4.7,
    specialties: ["Loan Counseling", "Scholarship Matching"],
    avatar: "/api/placeholder/150/150",
    courses: ["Economics", "Finance", "Business Administration"],
  },
];

const COURSE_OPTIONS = [
  "Computer Science",
  "Business Administration",
  "Engineering",
  "Data Science",
  "Artificial Intelligence",
  "Economics",
  "Finance",
];

const EXPERTISE_OPTIONS = [
  "College Admissions",
  "STEM Mentorship",
  "Financial Aid",
  "Career Guidance",
];

const BookMentor = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [bookingMode, setBookingMode] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) => {
      // Search filter
      const matchesSearch =
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.expertise.toLowerCase().includes(searchTerm.toLowerCase());

      // Course filter
      const matchesCourses =
        selectedCourses.length === 0 ||
        selectedCourses.some((course) => mentor.courses.includes(course));

      // Expertise filter
      const matchesExpertise =
        selectedExpertise.length === 0 ||
        selectedExpertise.includes(mentor.expertise);

      // Rating filter
      const matchesRating = mentor.rating >= minRating;

      return (
        matchesSearch && matchesCourses && matchesExpertise && matchesRating
      );
    });
  }, [searchTerm, selectedCourses, selectedExpertise, minRating]);

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor);
    setBookingMode(null);
  };

  const handleBookingMode = (mode) => {
    setBookingMode(mode);
  };

  const toggleCourseFilter = (course) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  const toggleExpertiseFilter = (expertise) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((e) => e !== expertise)
        : [...prev, expertise]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 text-gray-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
          Connect with Your Mentor
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Get personalized guidance from experienced professionals who
          understand your academic journey.
        </p>
      </div>

      {/* Search and Filters */}
      <section className="max-w-7xl mx-auto px-4 mb-8">
        <div className="relative">
          <div className="flex items-center">
            <div className="relative flex-grow mr-4">
              <input
                type="text"
                placeholder="Search mentors by name or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800 text-white p-3 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-600 transition"
            >
              <FaFilter />
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 bg-gray-800 p-6 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Courses Filter */}
                <div>
                  <h4 className="text-blue-300 font-semibold mb-4">Courses</h4>
                  <div className="space-y-2">
                    {COURSE_OPTIONS.map((course) => (
                      <label key={course} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCourses.includes(course)}
                          onChange={() => toggleCourseFilter(course)}
                          className="mr-2 text-blue-500 focus:ring-blue-500"
                        />
                        <span>{course}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Expertise Filter */}
                <div>
                  <h4 className="text-blue-300 font-semibold mb-4">
                    Expertise
                  </h4>
                  <div className="space-y-2">
                    {EXPERTISE_OPTIONS.map((expertise) => (
                      <label key={expertise} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedExpertise.includes(expertise)}
                          onChange={() => toggleExpertiseFilter(expertise)}
                          className="mr-2 text-blue-500 focus:ring-blue-500"
                        />
                        <span>{expertise}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="text-blue-300 font-semibold mb-4">
                    Minimum Rating
                  </h4>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.1"
                      value={minRating}
                      onChange={(e) => setMinRating(parseFloat(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-4 text-white">
                      {minRating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className={`bg-gray-800 rounded-2xl p-6 transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl ${
                selectedMentor?.id === mentor.id ? "ring-4 ring-blue-500" : ""
              }`}
              onClick={() => handleMentorSelect(mentor)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{mentor.expertise}</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-400">
                  <FaUniversity className="mr-2 text-blue-400" />
                  <span>{mentor.university}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <FaBriefcase className="mr-2 text-green-400" />
                  <span>{mentor.experience} Experience</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.floor(mentor.rating)
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }
                    />
                  ))}
                  <span className="ml-2 text-gray-400">({mentor.rating})</span>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-sm font-semibold text-blue-300 mb-2">
                  Course Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.courses.map((course, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
                <div className="mt-2">
                  <h4 className="text-sm font-semibold text-blue-300 mb-2">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-900/30 text-green-300 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No mentors found matching your search criteria.
          </div>
        )}
      </section>

      {/* Booking Options */}
      {selectedMentor && (
        <section className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-300">
            Book a Session with {selectedMentor.name}
          </h2>
          {!bookingMode ? (
            <div className="flex justify-center space-x-8">
              <button
                onClick={() => handleBookingMode("video")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 flex items-center space-x-2 transform transition-all hover:-translate-y-2"
              >
                <FaVideo className="text-2xl" />
                <span>Book Video Call</span>
              </button>
              <button
                onClick={() => handleBookingMode("chat")}
                className="px-8 py-4 border-2 border-gray-700 text-gray-300 rounded-full hover:bg-gray-800 flex items-center space-x-2 transform transition-all hover:-translate-y-2"
              >
                <FaCommentDots className="text-2xl" />
                <span>Start Chat</span>
              </button>
            </div>
          ) : (
            <div className="bg-gray-800 rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">
                {bookingMode === "video"
                  ? "Video Call Booking"
                  : "Chat Session"}
              </h3>
              <form className="space-y-4">
                <input
                  type="date"
                  className="w-full bg-gray-900 p-3 rounded-lg text-white"
                />
                <input
                  type="time"
                  className="w-full bg-gray-900 p-3 rounded-lg text-white"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800"
                >
                  Confirm {bookingMode === "video" ? "Video Call" : "Chat"}
                </button>
              </form>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default BookMentor;
