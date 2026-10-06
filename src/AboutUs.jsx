import { useNavigate } from "react-router-dom";
import {
  FaUniversity,
  FaCalculator,
  FaHandshake,
  FaLaptopCode,
  FaMedal,
  FaClipboardList,
  FaChartLine,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

const AboutUs = () => {
  const navigate = useNavigate();

  const missionHighlights = [
    {
      title: "Personalized Mentorship",
      description:
        "Connect with experienced mentors who provide tailored guidance for your academic journey.",
      icon: FaHandshake,
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "Financial Empowerment",
      description:
        "Access comprehensive tools for fee comparison, loan eligibility, and scholarship discovery.",
      icon: FaCalculator,
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Learning Opportunities",
      description:
        "Explore a marketplace of freelance projects to gain practical, real-world experience.",
      icon: FaLaptopCode,
      gradient: "from-blue-500 to-blue-700",
    },
  ];

  const coreValues = [
    {
      title: "Student-Centric Approach",
      description:
        "Putting students' needs and aspirations at the heart of everything we do.",
      icon: FaUsers,
      color: "text-blue-400",
    },
    {
      title: "Transparency",
      description:
        "Providing honest, unbiased information to empower informed decisions.",
      icon: FaHeart,
      color: "text-red-400",
    },
    {
      title: "Innovation",
      description:
        "Continuously evolving to provide cutting-edge educational insights and tools.",
      icon: FaChartLine,
      color: "text-green-400",
    },
  ];

  const evaluationMetrics = [
    {
      title: "Academic Program Quality",
      icon: FaClipboardList,
      description:
        "Comprehensive assessment of curriculum, course offerings, and academic rigor.",
      metrics: [
        "Curriculum Depth",
        "Faculty Expertise",
        "Research Opportunities",
        "Academic Resources",
      ],
    },
    {
      title: "Financial Considerations",
      icon: FaMedal,
      description:
        "Transparent analysis of tuition, scholarships, grants, and overall affordability.",
      metrics: [
        "Tuition Costs",
        "Scholarship Availability",
        "Financial Aid Options",
        "Return on Investment",
      ],
    },
    {
      title: "Career Prospects",
      icon: FaUniversity,
      description:
        "Detailed insights into job placement rates, internship programs, and career support.",
      metrics: [
        "Job Placement Rates",
        "Alumni Success",
        "Internship Opportunities",
        "Industry Connections",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-6 leading-tight">
              MentoreX: Empowering Academic Success
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              We are dedicated to transforming the educational landscape by
              providing students with comprehensive tools, personalized
              guidance, and actionable insights.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Highlights */}
      <section className="bg-gray-800/50 backdrop-blur-sm py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {missionHighlights.map((highlight, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${highlight.gradient} rounded-2xl p-6 transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl`}
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <highlight.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-200 opacity-80">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 md:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 text-center transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
              >
                <value.icon
                  className={`text-4xl mx-auto mb-4 ${value.color}`}
                />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Evaluation Approach */}
      <section className="bg-gray-800/50 backdrop-blur-sm py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">
            Our Evaluation Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {evaluationMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-6 transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
              >
                <div className="bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <metric.icon className="text-3xl text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {metric.title}
                </h3>
                <p className="text-gray-400 mb-4">{metric.description}</p>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">
                    Key Metrics
                  </h4>
                  <ul className="space-y-2">
                    {metric.metrics.map((item, idx) => (
                      <li key={idx} className="text-gray-500 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900/30 backdrop-blur-sm py-16 px-4 md:px-12">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-100">
            Join MentoreX Today
          </h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            Take the first step towards a brighter academic future. Discover
            opportunities, gain insights, and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Sign Up Now
            </button>
            <button
              onClick={() => navigate("/tools")}
              className="px-8 py-3 border-2 border-gray-700 hover:bg-gray-800 text-gray-300 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Explore Tools
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
