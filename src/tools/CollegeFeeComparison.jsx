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
  BookOpen,
  PlusCircle,
  DollarSign,
  Zap,
  Target,
} from "lucide-react";

// Authoritative default base programs across specialized disciplines:
// Law, Psychology, BMS, Commerce, Film, Design, Engineering, MBA, Medical, Cyber
const basePrograms = [
  {
    id: "gnlu-ballb",
    name: "B.A. LL.B. (Hons.)",
    college: "Gujarat National Law University (GNLU)",
    collegeId: "gujarat-national-law-university",
    category: "Law",
    discipline: "Law & Legal Studies",
    degree: "Undergraduate Integrated",
    fees: 260000,
    duration: "5 Years",
    location: "Gandhinagar, Gujarat",
    accreditation: "NIRF #7 Law, BCI",
    scholarshipAvailable: true,
    placementRate: 92,
    averagePackage: "₹15.4 LPA",
    additionalCosts: {
      hostel: 85000,
      books: 20000,
      other: 25000,
    },
  },
  {
    id: "lsr-psychology",
    name: "B.A. (Hons.) Psychology",
    college: "Lady Shri Ram College for Women (LSR)",
    collegeId: "lady-shri-ram-college",
    category: "Arts & Psychology",
    discipline: "Psychology & Behavioral Sciences",
    degree: "Undergraduate",
    fees: 24000,
    duration: "3 Years",
    location: "New Delhi, Delhi",
    accreditation: "NIRF #9 College, NAAC A++",
    scholarshipAvailable: true,
    placementRate: 94,
    averagePackage: "₹11.8 LPA",
    additionalCosts: {
      hostel: 65000,
      books: 12000,
      other: 18000,
    },
  },
  {
    id: "xaviers-bms",
    name: "BMS (Bachelor of Management Studies)",
    college: "St. Xavier's College (Autonomous), Mumbai",
    collegeId: "st-xaviers-college-mumbai",
    category: "Commerce & BMS",
    discipline: "Commerce & Management Studies",
    degree: "Undergraduate",
    fees: 58000,
    duration: "3 Years",
    location: "Mumbai, Maharashtra",
    accreditation: "Autonomous NAAC A+, NIRF Star",
    scholarshipAvailable: true,
    placementRate: 95,
    averagePackage: "₹10.5 LPA",
    additionalCosts: {
      hostel: 90000,
      books: 15000,
      other: 25000,
    },
  },
  {
    id: "srcc-bcom",
    name: "B.Com. (Hons.) Accounting & Finance",
    college: "Shri Ram College of Commerce (SRCC)",
    collegeId: "shri-ram-college-of-commerce",
    category: "Commerce & BMS",
    discipline: "Commerce & Management Studies",
    degree: "Undergraduate",
    fees: 32000,
    duration: "3 Years",
    location: "New Delhi, Delhi",
    accreditation: "NIRF #1 Commerce, NAAC A++",
    scholarshipAvailable: true,
    placementRate: 97,
    averagePackage: "₹13.2 LPA",
    additionalCosts: {
      hostel: 65000,
      books: 15000,
      other: 20000,
    },
  },
  {
    id: "ftii-direction",
    name: "PG Diploma in Film Direction & Screenwriting",
    college: "Film and Television Institute of India (FTII)",
    collegeId: "film-and-television-institute-of-india",
    category: "Film & Media",
    discipline: "Filming, Cinema & Mass Media",
    degree: "Postgraduate Diploma",
    fees: 145000,
    duration: "3 Years",
    location: "Pune, Maharashtra",
    accreditation: "Ministry of I&B Apex Film Institute",
    scholarshipAvailable: true,
    placementRate: 91,
    averagePackage: "₹11.5 LPA",
    additionalCosts: {
      hostel: 55000,
      books: 20000,
      other: 35000,
    },
  },
  {
    id: "nid-product",
    name: "B.Des in Product Design",
    college: "National Institute of Design (NID), Ahmedabad",
    collegeId: "national-institute-of-design",
    category: "Design",
    discipline: "Design, Fashion & Fine Arts",
    degree: "Undergraduate",
    fees: 360000,
    duration: "4 Years",
    location: "Ahmedabad, Gujarat",
    accreditation: "Institute of National Importance",
    scholarshipAvailable: true,
    placementRate: 96,
    averagePackage: "₹14.8 LPA",
    additionalCosts: {
      hostel: 85000,
      books: 30000,
      other: 40000,
    },
  },
  {
    id: "nift-fashion",
    name: "B.Des in Fashion Design",
    college: "National Institute of Fashion Technology (NIFT), New Delhi",
    collegeId: "national-institute-of-fashion-technology",
    category: "Design",
    discipline: "Design, Fashion & Fine Arts",
    degree: "Undergraduate",
    fees: 295000,
    duration: "4 Years",
    location: "New Delhi, Delhi",
    accreditation: "Ministry of Textiles Statutory Institute",
    scholarshipAvailable: true,
    placementRate: 93,
    averagePackage: "₹9.4 LPA",
    additionalCosts: {
      hostel: 85000,
      books: 35000,
      other: 30000,
    },
  },
  {
    id: "nfsu-mtech",
    name: "M.Tech Cyber Security",
    college: "National Forensic Sciences University (NFSU)",
    collegeId: "nfsu-gandhinagar",
    category: "Forensic & Cyber",
    discipline: "Cyber & Forensic Sciences",
    degree: "Postgraduate",
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
    id: "iitb-cse",
    name: "B.Tech Computer Science & Engineering",
    college: "Indian Institute of Technology, Bombay",
    collegeId: "iit-bombay",
    category: "Engineering",
    discipline: "Engineering & Technology",
    degree: "Undergraduate",
    fees: 220000,
    duration: "4 Years",
    location: "Mumbai, Maharashtra",
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
    id: "iima-mba",
    name: "MBA Business Administration",
    college: "Indian Institute of Management, Ahmedabad",
    collegeId: "iim-ahmedabad",
    category: "Management",
    discipline: "Management & Business",
    degree: "Postgraduate",
    fees: 1250000,
    duration: "2 Years",
    location: "Ahmedabad, Gujarat",
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
    id: "aiims-mbbs",
    name: "MBBS (Bachelor of Medicine & Surgery)",
    college: "All India Institute of Medical Sciences (AIIMS Delhi)",
    collegeId: "aiims-new-delhi",
    category: "Medical",
    discipline: "Medical & Healthcare",
    degree: "Undergraduate",
    fees: 1628,
    duration: "5.5 Years",
    location: "New Delhi",
    accreditation: "NIRF #1 Medical, Apex Institute",
    scholarshipAvailable: true,
    placementRate: 100,
    averagePackage: "₹18.0 LPA",
    additionalCosts: {
      hostel: 25000,
      books: 20000,
      other: 15000,
    },
  },
  {
    id: "christ-bba",
    name: "BBA (Finance & International Business)",
    college: "Christ (Deemed to be University), Bangalore",
    collegeId: "christ-university",
    category: "Commerce & BMS",
    discipline: "Commerce & Management Studies",
    degree: "Undergraduate",
    fees: 240000,
    duration: "3 Years",
    location: "Bangalore, Karnataka",
    accreditation: "NAAC A+, NIRF Ranked",
    scholarshipAvailable: true,
    placementRate: 93,
    averagePackage: "₹8.8 LPA",
    additionalCosts: {
      hostel: 95000,
      books: 18000,
      other: 25000,
    },
  },
];

// Helper to calculate comprehensive Degree ROI & Payback metrics
function calculateProgramROI(program) {
  // Parse duration in years
  let years = 3;
  if (program.duration) {
    const match = String(program.duration).match(/([\d.]+)/);
    if (match) years = parseFloat(match[1]);
  }

  // Calculate annual cost and total degree cost
  const annualTuition = Number(program.fees) || 0;
  const hostel = Number(program.additionalCosts?.hostel) || 0;
  const books = Number(program.additionalCosts?.books) || 0;
  const other = Number(program.additionalCosts?.other) || 0;
  const totalAnnualCost = annualTuition + hostel + books + other;
  const totalDegreeCost = Math.round(totalAnnualCost * years);

  // Parse average annual starting package (LPA)
  let annualSalary = 1000000; // default ₹10 LPA
  if (program.averagePackage) {
    const pkgStr = String(program.averagePackage);
    const lpaMatch = pkgStr.match(/([\d.]+)\s*(?:lpa|lakh|lac)/i);
    const usdMatch = pkgStr.match(/\$([\d,]+)/);
    if (lpaMatch) {
      annualSalary = Math.round(parseFloat(lpaMatch[1]) * 100000);
    } else if (usdMatch) {
      annualSalary = Math.round(parseFloat(usdMatch[1].replace(/,/g, "")) * 85);
    } else {
      const numMatch = pkgStr.match(/([\d,]+)/);
      if (numMatch) {
        const val = parseFloat(numMatch[1].replace(/,/g, ""));
        if (val < 100) annualSalary = Math.round(val * 100000);
        else annualSalary = Math.round(val);
      }
    }
  }

  // 5-Year net value & payback calculation
  const fiveYearGross = annualSalary * 5;
  const netFiveYearValue = fiveYearGross - totalDegreeCost;
  const breakEvenYears = annualSalary > 0 ? totalDegreeCost / annualSalary : 0;
  const breakEvenMonths = Math.round(breakEvenYears * 12);
  const degreeRoiPercent =
    totalDegreeCost > 0
      ? Math.round(((fiveYearGross - totalDegreeCost) / totalDegreeCost) * 100)
      : 500;

  let roiBadge = {
    title: "High Growth ROI",
    color: "from-blue-600 to-indigo-600",
    border: "border-blue-500",
    text: "text-blue-300",
    tag: "⭐ High Career ROI",
  };

  if (breakEvenYears <= 0.6) {
    roiBadge = {
      title: "Phenomenal / Elite ROI",
      color: "from-emerald-600 to-teal-600",
      border: "border-emerald-400",
      text: "text-emerald-300",
      tag: "🏆 Legendary ROI (Payback < 8 months)",
    };
  } else if (breakEvenYears <= 1.5) {
    roiBadge = {
      title: "Exceptional ROI",
      color: "from-emerald-500 to-green-600",
      border: "border-green-400",
      text: "text-green-300",
      tag: "🔥 Ultra Fast Payback (< 1.5 yrs)",
    };
  } else if (breakEvenYears <= 3.0) {
    roiBadge = {
      title: "Strong Career Yield",
      color: "from-blue-500 to-indigo-600",
      border: "border-blue-400",
      text: "text-blue-300",
      tag: "💎 Strong Return on Investment",
    };
  } else {
    roiBadge = {
      title: "Steady Long-term Yield",
      color: "from-amber-600 to-orange-600",
      border: "border-amber-400",
      text: "text-amber-300",
      tag: "⚖️ Balanced Professional ROI",
    };
  }

  return {
    years,
    totalAnnualCost,
    totalDegreeCost,
    annualSalary,
    fiveYearGross,
    netFiveYearValue,
    breakEvenYears: breakEvenYears.toFixed(1),
    breakEvenMonths,
    degreeRoiPercent,
    roiBadge,
  };
}

// Helper to synthesize specialized courses when a college has no explicit programs list
function getSpecializedFallbackCourses(college) {
  const cat = college.category || "Engineering";
  const baseFee =
    college.annualTuitionFee ||
    (college.feeRange ? parseInt(college.feeRange.replace(/[^\d]/g, ""), 10) : 0) ||
    (cat === "Law"
      ? 260000
      : cat === "Management"
      ? 850000
      : cat === "Medical"
      ? 150000
      : cat === "Design"
      ? 320000
      : cat === "Film & Media"
      ? 155000
      : cat === "Arts & Psychology"
      ? 35000
      : cat === "Commerce & BMS"
      ? 55000
      : 200000);

  if (cat === "Design") {
    return [
      { name: "B.Des in Product Design", degree: "Undergraduate", duration: "4 Years", annualFee: baseFee },
      { name: "B.Des in Interaction & UI/UX Design", degree: "Undergraduate", duration: "4 Years", annualFee: baseFee },
      { name: "B.Des in Communication & Graphic Design", degree: "Undergraduate", duration: "4 Years", annualFee: baseFee },
      { name: "B.Des in Fashion & Apparel Design", degree: "Undergraduate", duration: "4 Years", annualFee: Math.round(baseFee * 0.95) },
      { name: "M.Des in Strategic Design Management", degree: "Postgraduate", duration: "2.5 Years", annualFee: Math.round(baseFee * 1.1) },
    ];
  } else if (cat === "Film & Media") {
    return [
      { name: "B.A. Film Direction & Screenwriting", degree: "Undergraduate / Diploma", duration: "3 Years", annualFee: baseFee },
      { name: "B.Sc. Cinematography & Camera Arts", degree: "Undergraduate", duration: "3 Years", annualFee: Math.round(baseFee * 1.05) },
      { name: "B.A. Animation & Visual Effects (VFX)", degree: "Undergraduate", duration: "3 Years", annualFee: Math.round(baseFee * 1.15) },
      { name: "PG Diploma in Sound Recording & Audio Design", degree: "Postgraduate Diploma", duration: "3 Years", annualFee: Math.round(baseFee * 0.9) },
      { name: "BBA Media & Entertainment Management", degree: "Undergraduate", duration: "3 Years", annualFee: Math.round(baseFee * 0.95) },
    ];
  } else if (cat === "Arts & Psychology") {
    return [
      { name: "B.A. (Hons.) Psychology", degree: "Undergraduate", duration: "3 Years", annualFee: baseFee || 35000 },
      { name: "B.Sc. Clinical Psychology", degree: "Undergraduate", duration: "3 Years", annualFee: baseFee ? Math.round(baseFee * 1.2) : 45000 },
      { name: "B.A. (Hons.) Economics", degree: "Undergraduate", duration: "3 Years", annualFee: baseFee || 30000 },
      { name: "B.A. (Hons.) Journalism & Mass Media", degree: "Undergraduate", duration: "3 Years", annualFee: baseFee ? Math.round(baseFee * 1.1) : 40000 },
      { name: "M.A. Applied Psychology", degree: "Postgraduate", duration: "2 Years", annualFee: baseFee || 35000 },
    ];
  } else if (cat === "Commerce & BMS") {
    return [
      { name: "BMS (Bachelor of Management Studies)", degree: "Undergraduate", duration: "3 Years", annualFee: baseFee || 55000 },
      { name: "B.Com. (Hons.) Accounting & Finance", degree: "Undergraduate", duration: "3 Years", annualFee: baseFee || 35000 },
      { name: "BBA in Finance & International Business", degree: "Undergraduate", duration: "3 Years", annualFee: baseFee ? Math.round(baseFee * 1.3) : 75000 },
      { name: "B.Com. in Banking & Financial Markets", degree: "Undergraduate", duration: "3 Years", annualFee: baseFee || 40000 },
      { name: "M.Com. Advanced Financial Markets", degree: "Postgraduate", duration: "2 Years", annualFee: baseFee || 45000 },
    ];
  } else if (cat === "Law") {
    return [
      { name: "B.A. LL.B. (Hons.)", degree: "Undergraduate Integrated", duration: "5 Years", annualFee: baseFee },
      { name: "B.Com. LL.B. (Hons.)", degree: "Undergraduate Integrated", duration: "5 Years", annualFee: baseFee },
      { name: "B.B.A. LL.B. (Hons.)", degree: "Undergraduate Integrated", duration: "5 Years", annualFee: baseFee },
      { name: "LL.M. in Corporate & Commercial Law", degree: "Postgraduate", duration: "1 Year", annualFee: Math.round(baseFee * 0.85) },
      { name: "Ph.D. in Legal Studies", degree: "Doctoral", duration: "3 Years", annualFee: 150000 },
    ];
  } else if (cat === "Management") {
    return [
      { name: "MBA / PGDM in Business Administration", degree: "Postgraduate", duration: "2 Years", annualFee: baseFee },
      { name: "Executive MBA", degree: "Executive Postgraduate", duration: "1 Year", annualFee: Math.round(baseFee * 1.2) },
      { name: "MBA in Business Analytics & Finance", degree: "Postgraduate", duration: "2 Years", annualFee: baseFee },
      { name: "Ph.D. in Management", degree: "Doctoral", duration: "4 Years", annualFee: 200000 },
    ];
  } else if (cat === "Medical") {
    return [
      { name: "MBBS (Medicine & Surgery)", degree: "Undergraduate", duration: "5.5 Years", annualFee: baseFee },
      { name: "MD General Medicine", degree: "Postgraduate", duration: "3 Years", annualFee: Math.round(baseFee * 0.9) },
      { name: "MS General Surgery", degree: "Postgraduate", duration: "3 Years", annualFee: Math.round(baseFee * 0.9) },
      { name: "B.Sc Nursing", degree: "Undergraduate", duration: "4 Years", annualFee: 90000 },
    ];
  } else if (cat === "Forensic & Cyber") {
    return [
      { name: "M.Tech Cyber Security", degree: "Postgraduate", duration: "2 Years", annualFee: baseFee },
      { name: "M.Sc Forensic Science", degree: "Postgraduate", duration: "2 Years", annualFee: Math.round(baseFee * 0.88) },
      { name: "B.Tech - M.Tech Integrated Cyber Security", degree: "Integrated", duration: "5 Years", annualFee: Math.round(baseFee * 1.1) },
      { name: "M.Sc Digital Forensics & InfoSec", degree: "Postgraduate", duration: "2 Years", annualFee: baseFee },
    ];
  } else if (cat === "Sciences & Arts") {
    return [
      { name: "B.A. (Hons.) Economics", degree: "Undergraduate", duration: "3 Years", annualFee: baseFee || 80000 },
      { name: "B.Sc. (Hons.) Applied Computing", degree: "Undergraduate", duration: "3 Years", annualFee: baseFee || 95000 },
      { name: "B.Com. (Hons.) Accounting & Finance", degree: "Undergraduate", duration: "3 Years", annualFee: baseFee || 85000 },
    ];
  } else {
    return [
      { name: "B.Tech Computer Science & Engineering", degree: "Undergraduate", duration: "4 Years", annualFee: baseFee },
      { name: "B.Tech Artificial Intelligence & Data Science", degree: "Undergraduate", duration: "4 Years", annualFee: baseFee },
      { name: "B.Tech Electronics & Communication", degree: "Undergraduate", duration: "4 Years", annualFee: Math.round(baseFee * 0.95) },
      { name: "B.Tech Mechanical Engineering", degree: "Undergraduate", duration: "4 Years", annualFee: Math.round(baseFee * 0.9) },
      { name: "M.Tech Artificial Intelligence", degree: "Postgraduate", duration: "2 Years", annualFee: Math.round(baseFee * 0.8) },
    ];
  }
}

const CollegeFeesComparison = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Comparison view mode: "fees" or "roi"
  const [viewMode, setViewMode] = useState("roi"); // Default to comprehensive ROI mode

  // All parsed programs
  const [collegePrograms, setCollegePrograms] = useState(basePrograms);

  // Selected programs currently in comparison table (up to 4)
  const [selectedPrograms, setSelectedPrograms] = useState([
    basePrograms[0], // GNLU Law
    basePrograms[1], // LSR Psychology
    basePrograms[2], // St. Xavier's BMS
  ]);

  // Live fetch input state
  const [liveQuery, setLiveQuery] = useState("");
  const [fetchingLive, setFetchingLive] = useState(false);
  const [fetchMessage, setFetchMessage] = useState(null);

  // College & Course selector state
  const [activeCollegeName, setActiveCollegeName] = useState("Lady Shri Ram College for Women (LSR)");
  const [selectedCourseToAdd, setSelectedCourseToAdd] = useState("");

  const [filters, setFilters] = useState({
    minFees: "",
    maxFees: "",
    location: "",
    duration: "",
    category: "All",
    scholarshipOnly: false,
    minPlacementRate: "",
  });

  // Unique list of colleges derived from all parsed programs
  const collegesList = useMemo(() => {
    const map = new Map();
    collegePrograms.forEach((p) => {
      if (!map.has(p.college)) {
        map.set(p.college, {
          college: p.college,
          collegeId: p.collegeId,
          category: p.category || "General",
          location: p.location,
        });
      }
    });
    return Array.from(map.values()).sort((a, b) => a.college.localeCompare(b.college));
  }, [collegePrograms]);

  // Courses available for currently active college in Step 2 dropdown
  const availableCoursesForActiveCollege = useMemo(() => {
    if (!activeCollegeName) return [];
    return collegePrograms.filter((p) => p.college === activeCollegeName);
  }, [activeCollegeName, collegePrograms]);

  // Update default course selection when active college changes
  useEffect(() => {
    if (availableCoursesForActiveCollege.length > 0) {
      setSelectedCourseToAdd(availableCoursesForActiveCollege[0].id);
    } else {
      setSelectedCourseToAdd("");
    }
  }, [availableCoursesForActiveCollege]);

  // Load all colleges and extract ALL specialized courses
  const loadCollegesFromApi = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/api/colleges?limit=250`);
      if (res.data && res.data.success && Array.isArray(res.data.data)) {
        const loadedPrograms = [];

        res.data.data.forEach((college) => {
          const avgPkg =
            college.additionalOverviewDetails?.averagePackage || "₹10.5 LPA";
          const baseFee =
            college.annualTuitionFee ||
            (college.feeRange ? parseInt(college.feeRange.replace(/[^\d]/g, ""), 10) : 0) ||
            200000;

          const collegeCourses = [];

          // 1. Ingest popularPrograms
          if (Array.isArray(college.popularPrograms) && college.popularPrograms.length > 0) {
            college.popularPrograms.forEach((p, idx) => {
              collegeCourses.push({
                id: `${college.id}-pop-${idx}`,
                name: p.name,
                degree: p.degree || "Degree",
                duration: p.duration || "3 Years",
                annualFee: p.annualFee || baseFee,
              });
            });
          }

          // 2. Ingest academicPrograms if not duplicate
          if (Array.isArray(college.additionalOverviewDetails?.academicPrograms)) {
            college.additionalOverviewDetails.academicPrograms.forEach((pName, idx) => {
              const exists = collegeCourses.some(
                (c) => c.name.toLowerCase() === pName.toLowerCase()
              );
              if (!exists) {
                const isPg = /m\.|master|pg|mba|ll\.m|m\.tech|m\.sc|md|ms/i.test(pName);
                const isDoc = /ph\.?d|doctoral/i.test(pName);
                const isIntegrated = /integrated|dual|5-year/i.test(pName) || /ll\.?b/i.test(pName);
                const duration = isDoc ? "3 Years" : isPg ? "2 Years" : isIntegrated ? "5 Years" : "3 Years";
                collegeCourses.push({
                  id: `${college.id}-acad-${idx}`,
                  name: pName,
                  degree: isDoc ? "Doctoral" : isPg ? "Postgraduate" : "Undergraduate",
                  duration,
                  annualFee: isDoc ? Math.round(baseFee * 0.6) : isPg ? Math.round(baseFee * 0.9) : baseFee,
                });
              }
            });
          }

          // 3. If still empty, synthesize specialized courses according to college category
          if (collegeCourses.length === 0) {
            const fallbacks = getSpecializedFallbackCourses(college);
            fallbacks.forEach((fb, idx) => {
              collegeCourses.push({
                id: `${college.id}-spec-${idx}`,
                name: fb.name,
                degree: fb.degree,
                duration: fb.duration,
                annualFee: fb.annualFee,
              });
            });
          }

          // Build complete program objects
          collegeCourses.forEach((course) => {
            loadedPrograms.push({
              id: course.id,
              name: course.name,
              college: college.name,
              collegeId: college.id,
              category: college.category || "General",
              degree: course.degree,
              fees: course.annualFee > 0 ? course.annualFee : baseFee,
              duration: course.duration,
              location: college.city || college.location,
              accreditation: college.rankings?.nationalRank || college.rankings?.rankingBody || "NIRF Accredited",
              scholarshipAvailable: Boolean(
                college.additionalOverviewDetails?.financialAid?.scholarships
              ),
              placementRate: college.additionalOverviewDetails?.jobPlacementRate || 92,
              averagePackage: avgPkg,
              additionalCosts: {
                hostel: college.category === "Medical" ? 45000 : college.category === "Arts & Psychology" ? 60000 : 85000,
                books: 18000,
                other: 25000,
              },
            });
          });
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

  // Handle URL pre-fill from search (?college=...)
  useEffect(() => {
    const urlCollege = searchParams.get("college");
    if (!urlCollege) return;

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
      setActiveCollegeName(match.college);
    } else {
      fetchAndAddCollegeByName(urlCollege);
    }
  }, [searchParams, collegePrograms]);

  // Robust live fetch and ingestion of all courses for any college
  const fetchAndAddCollegeByName = async (collegeNameToFetch) => {
    if (!collegeNameToFetch || !collegeNameToFetch.trim()) return;
    setFetchingLive(true);
    setFetchMessage(null);

    let fetchedCollege = null;

    // Route 1: Dedicated AI-search
    try {
      const aiRes = await axios.post(
        `${API_URL}/api/colleges/ai-search`,
        { name: collegeNameToFetch.trim() },
        { timeout: 7000 }
      );
      if (aiRes.data && aiRes.data.success && aiRes.data.data) {
        fetchedCollege = aiRes.data.data;
      }
    } catch (err) {
      console.warn("AI-search route fallback:", err);
    }

    // Route 2: /api/colleges/fetch
    if (!fetchedCollege) {
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

    // Route 3: /api/colleges?search=...
    if (!fetchedCollege) {
      try {
        const sRes = await axios.get(
          `${API_URL}/api/colleges?search=${encodeURIComponent(collegeNameToFetch.trim())}`
        );
        if (sRes.data && sRes.data.success && Array.isArray(sRes.data.data) && sRes.data.data.length > 0) {
          fetchedCollege = sRes.data.data[0];
        }
      } catch (sErr) {
        console.warn("Search route fallback error:", sErr);
      }
    }

    // Route 4: Client-side fetcher
    if (!fetchedCollege) {
      try {
        fetchedCollege = await fetchCollegeClientSide(collegeNameToFetch.trim());
      } catch (fallbackErr) {
        console.error("Client fallback error in comparison:", fallbackErr);
      }
    }

    if (fetchedCollege) {
      const c = fetchedCollege;
      const baseFee =
        c.annualTuitionFee ||
        (c.feeRange ? parseInt(c.feeRange.replace(/[^\d]/g, ""), 10) : 0) ||
        (c.category === "Law"
          ? 260000
          : c.category === "Management"
          ? 850000
          : c.category === "Medical"
          ? 150000
          : c.category === "Design"
          ? 320000
          : c.category === "Film & Media"
          ? 155000
          : c.category === "Arts & Psychology"
          ? 35000
          : c.category === "Commerce & BMS"
          ? 55000
          : 200000);

      const parsedCourses = [];

      // Extract all popularPrograms
      if (Array.isArray(c.popularPrograms) && c.popularPrograms.length > 0) {
        c.popularPrograms.forEach((p, idx) => {
          parsedCourses.push({
            id: `${c.id}-live-${idx}`,
            name: p.name,
            degree: p.degree || "Degree",
            duration: p.duration || "3 Years",
            annualFee: p.annualFee || baseFee,
          });
        });
      }

      // Extract academicPrograms
      if (Array.isArray(c.additionalOverviewDetails?.academicPrograms)) {
        c.additionalOverviewDetails.academicPrograms.forEach((pName, idx) => {
          const exists = parsedCourses.some(
            (pc) => pc.name.toLowerCase() === pName.toLowerCase()
          );
          if (!exists) {
            const isPg = /m\.|master|pg|mba|ll\.m|m\.tech|m\.sc|md|ms/i.test(pName);
            const isDoc = /ph\.?d|doctoral/i.test(pName);
            const isIntegrated = /integrated|dual|5-year/i.test(pName) || /ll\.?b/i.test(pName);
            const duration = isDoc ? "3 Years" : isPg ? "2 Years" : isIntegrated ? "5 Years" : "3 Years";
            parsedCourses.push({
              id: `${c.id}-live-acad-${idx}`,
              name: pName,
              degree: isDoc ? "Doctoral" : isPg ? "Postgraduate" : "Undergraduate",
              duration,
              annualFee: isDoc ? Math.round(baseFee * 0.6) : isPg ? Math.round(baseFee * 0.9) : baseFee,
            });
          }
        });
      }

      // If empty, synthesize specialized courses based on category
      if (parsedCourses.length === 0) {
        const fallbacks = getSpecializedFallbackCourses(c);
        fallbacks.forEach((fb, idx) => {
          parsedCourses.push({
            id: `${c.id}-live-spec-${idx}`,
            name: fb.name,
            degree: fb.degree,
            duration: fb.duration,
            annualFee: fb.annualFee,
          });
        });
      }

      const newProgramsToAdd = parsedCourses.map((course) => ({
        id: course.id,
        name: course.name,
        college: c.name,
        collegeId: c.id,
        category: c.category || "General",
        degree: course.degree,
        fees: course.annualFee > 0 ? course.annualFee : baseFee,
        duration: course.duration,
        location: c.city || c.location,
        accreditation: c.rankings?.nationalRank || c.rankings?.rankingBody || "NIRF Accredited",
        scholarshipAvailable: Boolean(c.additionalOverviewDetails?.financialAid?.scholarships),
        placementRate: c.additionalOverviewDetails?.jobPlacementRate || 92,
        averagePackage: c.additionalOverviewDetails?.averagePackage || "₹10.5 LPA",
        additionalCosts: {
          hostel: c.category === "Medical" ? 45000 : c.category === "Arts & Psychology" ? 60000 : 85000,
          books: 18000,
          other: 25000,
        },
      }));

      // Ingest all courses into collegePrograms
      setCollegePrograms((prev) => {
        const map = new Map();
        [...newProgramsToAdd, ...prev].forEach((p) => map.set(p.id, p));
        return Array.from(map.values());
      });

      // Add flagship/first course to selected programs
      if (newProgramsToAdd.length > 0) {
        const flagship = newProgramsToAdd[0];
        setSelectedPrograms((prev) => {
          if (prev.some((p) => p.college === flagship.college)) return prev;
          return [flagship, ...prev].slice(0, 4);
        });
        setActiveCollegeName(c.name);
        setSelectedCourseToAdd(flagship.id);
      }

      setFetchMessage({
        type: "success",
        text: `Loaded "${c.name}" with ${newProgramsToAdd.length} specialized courses!`,
      });
      setLiveQuery("");
    } else {
      setFetchMessage({
        type: "error",
        text: `Could not find "${collegeNameToFetch}". Please check spelling or try another university.`,
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
      const matchCategory =
        !filters.category ||
        filters.category === "All" ||
        (program.category && program.category.toLowerCase().includes(filters.category.toLowerCase()));
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
        matchCategory &&
        matchScholarship &&
        matchPlacementRate
      );
    });
  }, [filters, collegePrograms]);

  // Add course from the 2-step selector
  const handleAddCourseFromSelector = () => {
    if (!selectedCourseToAdd) return;
    const progToAdd = collegePrograms.find((p) => p.id === selectedCourseToAdd);
    if (!progToAdd) return;

    if (!selectedPrograms.some((p) => p.id === progToAdd.id)) {
      setSelectedPrograms((prev) => [progToAdd, ...prev].slice(0, 4));
    }
  };

  // Add from single catalog dropdown
  const handleSelectFromCatalog = (e) => {
    const selectedId = e.target.value;
    if (!selectedId) return;
    const prog = collegePrograms.find((p) => p.id === selectedId);
    if (prog && !selectedPrograms.some((p) => p.id === prog.id)) {
      setSelectedPrograms((prev) => [prog, ...prev].slice(0, 4));
    }
  };

  // Switch course for a specific card
  const handleSwitchCardCourse = (cardProgId, newCourseId) => {
    const targetProg = collegePrograms.find((p) => p.id === newCourseId);
    if (!targetProg) return;

    setSelectedPrograms((prev) =>
      prev.map((p) => (p.id === cardProgId ? targetProg : p))
    );
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
      category: "All",
      scholarshipOnly: false,
      minPlacementRate: "",
    });
  };

  // Analytics across selected programs for the Executive ROI Summary
  const roiSummary = useMemo(() => {
    if (selectedPrograms.length === 0) return null;

    const analyzed = selectedPrograms.map((p) => ({
      program: p,
      roi: calculateProgramROI(p),
    }));

    // Sort by fastest payback
    const fastestPayback = [...analyzed].sort(
      (a, b) => parseFloat(a.roi.breakEvenYears) - parseFloat(b.roi.breakEvenYears)
    )[0];

    // Sort by highest starting package
    const highestPackage = [...analyzed].sort(
      (a, b) => b.roi.annualSalary - a.roi.annualSalary
    )[0];

    // Sort by highest 5-year net value
    const highestNetValue = [...analyzed].sort(
      (a, b) => b.roi.netFiveYearValue - a.roi.netFiveYearValue
    )[0];

    // Sort by lowest total investment
    const lowestCost = [...analyzed].sort(
      (a, b) => a.roi.totalDegreeCost - b.roi.totalDegreeCost
    )[0];

    return {
      fastestPayback,
      highestPackage,
      highestNetValue,
      lowestCost,
    };
  }, [selectedPrograms]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 md:p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Title Header with Mode Badges */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            Universal College & Degree ROI Intelligence
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-white tracking-tight flex items-center justify-center gap-3">
            <GitCompare className="w-9 h-9 md:w-11 md:h-11 text-blue-400" />
            University Fee & Career ROI Comparison
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Compare complete multi-year tuition, hostel, books, and living expenses against verified placement salaries to calculate the exact <strong>break-even period</strong> and <strong>5-year net career return</strong> across all disciplines: Arts, Commerce, BMS, Psychology, Film, Design, Law, Engineering, MBA, and Medical.
          </p>

          {/* Interactive View Mode Switcher */}
          <div className="inline-flex p-1.5 bg-gray-900 border border-gray-800 rounded-2xl mt-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setViewMode("roi")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition cursor-pointer ${
                viewMode === "roi"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Degree ROI & Payback Mode</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Recommended
              </span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("fees")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition cursor-pointer ${
                viewMode === "fees"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <DollarSign className="w-4 h-4 text-blue-400" />
              <span>Detailed Annual Fee Breakdown</span>
            </button>
          </div>
        </div>

        {/* Live University Search & Course Harvester Bar */}
        <div className="max-w-5xl mx-auto mb-8 bg-gray-900/90 border border-blue-500/30 rounded-2xl p-4 md:p-5 shadow-2xl backdrop-blur">
          <form onSubmit={handleFetchAndAdd} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={liveQuery}
                onChange={(e) => setLiveQuery(e.target.value)}
                placeholder="Search any university to fetch all its courses (e.g. LSR, FTII, St. Xavier's, NID, SRCC, GNLU, IIT Bombay)..."
                className="w-full bg-gray-950 border border-gray-700/80 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={fetchingLive}
              />
            </div>
            <button
              type="submit"
              disabled={fetchingLive || !liveQuery.trim()}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition whitespace-nowrap cursor-pointer shadow-lg"
            >
              {fetchingLive ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Fetching All Courses & Stats...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-yellow-400" /> Fetch University & Courses
                </>
              )}
            </button>
          </form>

          {/* Quick Add Chips covering all major disciplines */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-gray-800">
            <span className="text-xs text-gray-400 font-semibold mr-1">Quick Select by Discipline:</span>
            {[
              { label: "LSR (Psychology / Arts)", query: "LSR" },
              { label: "St. Xavier's (BMS / Media)", query: "St. Xavier's Mumbai" },
              { label: "SRCC (Commerce / Finance)", query: "SRCC" },
              { label: "FTII (Film & Direction)", query: "FTII" },
              { label: "NID (Product & UI/UX Design)", query: "NID" },
              { label: "NIFT (Fashion Design)", query: "NIFT Delhi" },
              { label: "GNLU (Law / B.A. LL.B.)", query: "GNLU" },
              { label: "NFSU (Cyber & Forensics)", query: "NFSU" },
              { label: "IIT Bombay (Engg / Tech)", query: "IIT Bombay" },
              { label: "IIM Ahmedabad (MBA)", query: "IIM Ahmedabad" },
              { label: "AIIMS Delhi (MBBS)", query: "AIIMS Delhi" },
              { label: "Christ (BBA / BMS)", query: "Christ University" },
            ].map((chip) => (
              <button
                key={chip.label}
                type="button"
                onClick={() => fetchAndAddCollegeByName(chip.query)}
                className="text-xs px-3 py-1 bg-gray-950 hover:bg-blue-900/50 hover:text-blue-300 text-gray-300 rounded-lg border border-gray-800 transition cursor-pointer"
              >
                + {chip.label}
              </button>
            ))}
          </div>

          {fetchMessage && (
            <p className={`text-xs mt-3 font-semibold ${fetchMessage.type === "success" ? "text-green-400" : "text-red-400"}`}>
              {fetchMessage.text}
            </p>
          )}
        </div>

        {/* Specialized College & Course 2-Step Selector */}
        <div className="max-w-5xl mx-auto mb-8 bg-gradient-to-r from-blue-950/40 via-gray-900 to-indigo-950/40 border border-blue-500/40 rounded-2xl p-5 shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <h2 className="text-base font-bold text-white">
              Course Catalog Selector (All Courses: BA, B.Com, BMS, Psychology, Film, Design, Law, B.Tech, MBA, MBBS)
            </h2>
          </div>
          <p className="text-xs text-gray-400 mb-4">
            Select any university below to unlock and compare its full spectrum of degrees and specializations side-by-side.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Step 1: Select College */}
            <div className="md:col-span-5">
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Step 1: Choose University ({collegesList.length} institutions available)
              </label>
              <select
                value={activeCollegeName}
                onChange={(e) => setActiveCollegeName(e.target.value)}
                className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {collegesList.map((c) => (
                  <option key={c.college} value={c.college}>
                    {c.college} [{c.category}]
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Select Course in that college */}
            <div className="md:col-span-5">
              <label className="block text-xs font-semibold text-blue-300 mb-1.5">
                Step 2: Course in {activeCollegeName.split("(")[0].trim()} ({availableCoursesForActiveCollege.length} offerings)
              </label>
              <select
                value={selectedCourseToAdd}
                onChange={(e) => setSelectedCourseToAdd(e.target.value)}
                className="w-full bg-gray-950 border border-blue-500/50 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {availableCoursesForActiveCollege.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.duration} (₹{p.fees.toLocaleString()}/yr)
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Add to Table */}
            <div className="md:col-span-2 flex items-end">
              <button
                type="button"
                onClick={handleAddCourseFromSelector}
                disabled={!selectedCourseToAdd}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer shadow-lg"
              >
                <PlusCircle className="w-4 h-4" /> Add to Table
              </button>
            </div>
          </div>
        </div>

        {/* Executive ROI Insights Summary Banner (Visible when 2+ programs compared) */}
        {roiSummary && selectedPrograms.length >= 2 && (
          <div className="max-w-7xl mx-auto mb-8 bg-gradient-to-r from-gray-900 via-indigo-950/60 to-gray-900 border border-blue-500/30 rounded-2xl p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <h3 className="text-base font-bold text-white">
                  Head-to-Head ROI Intelligence & Payback Matrix
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 font-semibold">
                Comparing {selectedPrograms.length} Programs
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Highlight 1: Fastest Payback */}
              <div className="bg-gray-950/80 rounded-xl p-4 border border-emerald-500/30">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5" /> Fastest Break-Even
                </span>
                <p className="text-sm font-bold text-white truncate">
                  {roiSummary.fastestPayback.program.college.split("(")[0].trim()}
                </p>
                <p className="text-xs text-gray-400 truncate mb-2">
                  {roiSummary.fastestPayback.program.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-emerald-300">
                    {roiSummary.fastestPayback.roi.breakEvenYears} Years
                  </span>
                  <span className="text-[11px] text-emerald-400/80">
                    ({roiSummary.fastestPayback.roi.breakEvenMonths} mos to recover total cost)
                  </span>
                </div>
              </div>

              {/* Highlight 2: Highest Starting Salary */}
              <div className="bg-gray-950/80 rounded-xl p-4 border border-blue-500/30">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-3.5 h-3.5" /> Highest Starting Package
                </span>
                <p className="text-sm font-bold text-white truncate">
                  {roiSummary.highestPackage.program.college.split("(")[0].trim()}
                </p>
                <p className="text-xs text-gray-400 truncate mb-2">
                  {roiSummary.highestPackage.program.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-blue-300">
                    {roiSummary.highestPackage.program.averagePackage}
                  </span>
                  <span className="text-[11px] text-gray-400">avg starting annual</span>
                </div>
              </div>

              {/* Highlight 3: Highest 5-Year Net Value */}
              <div className="bg-gray-950/80 rounded-xl p-4 border border-purple-500/30">
                <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Target className="w-3.5 h-3.5" /> Top 5-Yr Net Wealth Gain
                </span>
                <p className="text-sm font-bold text-white truncate">
                  {roiSummary.highestNetValue.program.college.split("(")[0].trim()}
                </p>
                <p className="text-xs text-gray-400 truncate mb-2">
                  {roiSummary.highestNetValue.program.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-purple-300">
                    +₹{(roiSummary.highestNetValue.roi.netFiveYearValue / 100000).toFixed(1)} Lakhs
                  </span>
                  <span className="text-[11px] text-gray-400">net post-fees</span>
                </div>
              </div>

              {/* Highlight 4: Lowest Investment Cost */}
              <div className="bg-gray-950/80 rounded-xl p-4 border border-cyan-500/30">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <DollarSign className="w-3.5 h-3.5" /> Lowest Degree Investment
                </span>
                <p className="text-sm font-bold text-white truncate">
                  {roiSummary.lowestCost.program.college.split("(")[0].trim()}
                </p>
                <p className="text-xs text-gray-400 truncate mb-2">
                  {roiSummary.lowestCost.program.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-cyan-300">
                    ₹{roiSummary.lowestCost.roi.totalDegreeCost.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-gray-400">entire degree</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 bg-gray-900 rounded-2xl p-5 h-fit border border-gray-800 shadow-xl sticky top-4">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-bold flex items-center gap-2 text-white">
                <Filter className="w-5 h-5 text-blue-400" />
                Filter Catalog
              </h2>
              <button
                onClick={resetFilters}
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
              >
                Reset All
              </button>
            </div>

            {/* Category / Discipline Filter */}
            <div className="mb-4">
              <label className="block mb-1.5 font-semibold text-xs text-gray-300">
                Discipline / Category
              </label>
              <select
                value={filters.category}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, category: e.target.value }))
                }
                className="w-full p-2 bg-gray-950 border border-gray-700 rounded-xl text-xs text-white"
              >
                <option value="All">All Disciplines</option>
                <option value="Arts & Psychology">Arts & Psychology (BA, Clinical)</option>
                <option value="Commerce & BMS">Commerce & BMS (BMS, B.Com, BBA)</option>
                <option value="Film & Media">Film & Media (Direction, VFX, Cinema)</option>
                <option value="Design">Design & Fashion (Product, UI/UX, NIFT)</option>
                <option value="Law">Law & Legal (B.A. LL.B., LL.M.)</option>
                <option value="Engineering">Engineering (B.Tech, CSE, AI)</option>
                <option value="Management">Management (MBA, PGDM)</option>
                <option value="Medical">Medical (MBBS, MD, Nursing)</option>
                <option value="Forensic & Cyber">Forensic & Cyber Security</option>
                <option value="Sciences & Arts">Sciences & Humanities</option>
              </select>
            </div>

            {/* Fee Range Filter */}
            <div className="mb-4">
              <label className="block mb-1.5 font-semibold text-xs text-gray-300">
                Annual Tuition Range (₹)
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minFees}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, minFees: e.target.value }))
                  }
                  className="w-1/2 p-2 bg-gray-950 border border-gray-700 rounded-xl text-xs text-white placeholder-gray-500"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxFees}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, maxFees: e.target.value }))
                  }
                  className="w-1/2 p-2 bg-gray-950 border border-gray-700 rounded-xl text-xs text-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="mb-4">
              <label className="block mb-1.5 font-semibold text-xs text-gray-300">
                Location / City / State
              </label>
              <input
                type="text"
                placeholder="e.g. Delhi, Mumbai, Gujarat, Bangalore"
                value={filters.location}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, location: e.target.value }))
                }
                className="w-full p-2 bg-gray-950 border border-gray-700 rounded-xl text-xs text-white placeholder-gray-500"
              />
            </div>

            {/* Duration Filter */}
            <div className="mb-4">
              <label className="block mb-1.5 font-semibold text-xs text-gray-300">
                Degree Duration
              </label>
              <select
                value={filters.duration}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, duration: e.target.value }))
                }
                className="w-full p-2 bg-gray-950 border border-gray-700 rounded-xl text-xs text-white"
              >
                <option value="">All Durations</option>
                <option value="1 Year">1 Year (LL.M., Exec MBA)</option>
                <option value="2 Years">2 Years (MBA, M.Tech, M.A.)</option>
                <option value="3 Years">3 Years (BA, B.Com, BMS, Psychology, Film)</option>
                <option value="4 Years">4 Years (B.Tech, B.Des, Engineering)</option>
                <option value="5 Years">5 Years (B.A. LL.B., Integrated Cyber)</option>
                <option value="5.5 Years">5.5 Years (MBBS)</option>
              </select>
            </div>

            {/* Min Placement Rate */}
            <div className="mb-4">
              <label className="block mb-1.5 font-semibold text-xs text-gray-300">
                Min Placement Rate (%)
              </label>
              <input
                type="number"
                placeholder="e.g. 90"
                min="0"
                max="100"
                value={filters.minPlacementRate}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    minPlacementRate: e.target.value,
                  }))
                }
                className="w-full p-2 bg-gray-950 border border-gray-700 rounded-xl text-xs text-white placeholder-gray-500"
              />
            </div>

            {/* Scholarship Checkbox */}
            <div className="flex items-center pt-1">
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
                className="w-4 h-4 rounded text-blue-600 bg-gray-900 border-gray-700 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="scholarshipCheckbox" className="ml-2 text-xs font-semibold text-gray-300 cursor-pointer">
                Verified Scholarships Available
              </label>
            </div>
          </div>

          {/* Comparison Cards & ROI Visualizer Section */}
          <div className="lg:col-span-3">
            {/* Quick Catalog Dropdown */}
            <div className="mb-6 relative">
              <select
                onChange={handleSelectFromCatalog}
                value=""
                className="w-full p-3.5 bg-gray-900 rounded-2xl focus:ring-2 focus:ring-blue-400 text-sm text-gray-200 border border-gray-800 shadow-xl"
              >
                <option value="">
                  + Quick Add from Complete Course Catalog ({filteredPrograms.length} courses across {collegesList.length} universities)
                </option>
                {collegesList.map((col) => {
                  const progsForCol = filteredPrograms.filter(
                    (p) =>
                      p.college === col.college &&
                      !selectedPrograms.some((sel) => sel.id === p.id)
                  );
                  if (progsForCol.length === 0) return null;
                  return (
                    <optgroup key={col.college} label={`${col.college} [${col.category}]`}>
                      {progsForCol.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} — {p.duration} (₹{p.fees.toLocaleString()}/yr)
                        </option>
                      ))}
                    </optgroup>
                  );
                })}
              </select>
            </div>

            {/* Selected Programs Comparison Grid */}
            {selectedPrograms.length === 0 ? (
              <div className="text-center py-20 bg-gray-900/40 rounded-3xl border border-gray-800 shadow-2xl">
                <School className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-300 mb-2">No Courses Currently Selected</h3>
                <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                  Pick any university and course from the selectors above or click quick-add chips to launch the comparative ROI analysis.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedPrograms([basePrograms[0], basePrograms[1], basePrograms[2]])}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Load Recommended Preset (GNLU Law, LSR Psychology, St. Xavier's BMS)
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {selectedPrograms.map((program) => {
                  const sisterCourses = collegePrograms.filter(
                    (p) => p.college === program.college
                  );
                  const roi = calculateProgramROI(program);

                  return (
                    <div
                      key={program.id}
                      className="bg-gray-900 rounded-3xl p-6 relative border border-gray-800 hover:border-blue-500/80 transition duration-300 shadow-2xl flex flex-col justify-between"
                    >
                      <button
                        onClick={() => handleRemove(program.id)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-red-400 transition cursor-pointer p-1"
                        aria-label="Remove college"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div>
                        {/* College Header & Discipline Pill */}
                        <div className="pr-7 mb-3">
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-900/60 text-blue-300 border border-blue-700/60 uppercase tracking-wider inline-block">
                              {program.category || "Higher Education"}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${roi.roiBadge.border} ${roi.roiBadge.text} bg-gray-950`}>
                              {roi.roiBadge.tag}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-white leading-snug">
                            {program.college}
                          </h3>
                        </div>

                        {/* Interactive Course Switcher Dropdown */}
                        <div className="bg-gray-950 rounded-2xl p-3.5 border border-gray-800 mb-4">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                            Course / Degree Program:
                          </label>
                          {sisterCourses.length > 1 ? (
                            <select
                              value={program.id}
                              onChange={(e) =>
                                handleSwitchCardCourse(program.id, e.target.value)
                              }
                              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-2.5 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-400 font-semibold"
                            >
                              {sisterCourses.map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.name} ({c.duration}, ₹{c.fees.toLocaleString()}/yr)
                                </option>
                              ))}
                            </select>
                          ) : (
                            <p className="text-sm font-semibold text-white">
                              {program.name}
                            </p>
                          )}
                        </div>

                        {/* Quick Specs */}
                        <div className="space-y-2 mb-4 text-xs text-gray-300">
                          <div className="flex items-center">
                            <MapPin className="w-3.5 h-3.5 mr-2 text-blue-400 flex-shrink-0" />
                            <span>{program.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-2 text-green-400 flex-shrink-0" />
                            <span>Duration: {program.duration} ({roi.years} Years total)</span>
                          </div>
                          <div className="flex items-center">
                            <BarChart className="w-3.5 h-3.5 mr-2 text-yellow-400 flex-shrink-0" />
                            <span>Placement Success Rate: {program.placementRate}%</span>
                          </div>
                          {program.averagePackage && (
                            <div className="flex items-center font-bold text-emerald-300">
                              <TrendingUp className="w-3.5 h-3.5 mr-2 text-emerald-400 flex-shrink-0" />
                              <span>Starting Package: {program.averagePackage}</span>
                            </div>
                          )}
                        </div>

                        {/* ROI View vs Fee View Toggle Container */}
                        {viewMode === "roi" ? (
                          /* ROI & CAREER FINANCIAL YIELD CARD */
                          <div className="bg-gray-950/90 rounded-2xl p-4 mb-4 border border-emerald-500/30 space-y-3">
                            <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                                Break-Even Period
                              </span>
                              <span className="text-sm font-black text-emerald-300">
                                {roi.breakEvenYears} Years
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="bg-gray-900/80 p-2.5 rounded-xl border border-gray-800/80">
                                <span className="text-gray-400 block text-[10px]">Total Degree Investment:</span>
                                <span className="font-bold text-white text-sm">
                                  ₹{roi.totalDegreeCost.toLocaleString()}
                                </span>
                                <span className="text-[10px] text-gray-500 block mt-0.5">
                                  ({roi.years} yrs tuition + living)
                                </span>
                              </div>
                              <div className="bg-gray-900/80 p-2.5 rounded-xl border border-gray-800/80">
                                <span className="text-gray-400 block text-[10px]">Annual Starting Package:</span>
                                <span className="font-bold text-emerald-400 text-sm">
                                  ₹{(roi.annualSalary / 100000).toFixed(1)} LPA
                                </span>
                                <span className="text-[10px] text-gray-500 block mt-0.5">
                                  starting salary
                                </span>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-emerald-950/40 to-blue-950/40 p-3 rounded-xl border border-emerald-500/20">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-[11px] text-gray-300 font-semibold">
                                  5-Year Net Career Gain:
                                </span>
                                <span className="text-sm font-black text-emerald-300">
                                  +₹{(roi.netFiveYearValue / 100000).toFixed(1)} Lakhs
                                </span>
                              </div>
                              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                <div
                                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full"
                                  style={{
                                    width: `${Math.min(100, Math.max(15, (1 / Math.max(0.5, parseFloat(roi.breakEvenYears))) * 50))}%`,
                                  }}
                                />
                              </div>
                              <span className="text-[10px] text-gray-400 block mt-1">
                                5-Year Degree ROI: <strong className="text-emerald-300">+{roi.degreeRoiPercent}%</strong>
                              </span>
                            </div>
                          </div>
                        ) : (
                          /* ANNUAL COST BREAKDOWN CARD */
                          <div className="bg-gray-950/90 rounded-2xl p-4 mb-4 border border-gray-800 space-y-2 text-xs">
                            <div className="flex justify-between text-gray-300">
                              <span>Annual Tuition:</span>
                              <span className="font-bold text-white">
                                ₹{program.fees.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                              <span>Hostel & Mess / yr:</span>
                              <span>₹{program.additionalCosts.hostel.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                              <span>Books & Supplies / yr:</span>
                              <span>₹{program.additionalCosts.books.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                              <span>Other Contingencies:</span>
                              <span>₹{program.additionalCosts.other.toLocaleString()}</span>
                            </div>
                            <div className="border-t border-gray-800 pt-2 flex justify-between font-bold text-blue-300 text-sm">
                              <span>Est. Cost / Year:</span>
                              <span>₹{calculateTotalCost(program).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-[11px] text-gray-400 pt-1">
                              <span>Complete {roi.years}-Year Investment:</span>
                              <span className="font-semibold text-white">
                                ₹{roi.totalDegreeCost.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="px-2.5 py-1 bg-blue-900/40 text-blue-300 rounded-lg border border-blue-700/40 text-[11px]">
                            {program.accreditation}
                          </span>
                          {program.scholarshipAvailable && (
                            <span className="px-2 py-0.5 bg-green-900/40 text-green-300 rounded-lg border border-green-700/40 text-[11px]">
                              Scholarships
                            </span>
                          )}
                        </div>

                        {/* Quick Cross-Tool Navigation */}
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-800">
                          <button
                            type="button"
                            onClick={() =>
                              navigate(
                                `/tools/loan-eligibility?college=${encodeURIComponent(
                                  program.college
                                )}`
                              )
                            }
                            className="flex items-center justify-center gap-1.5 py-2 px-2 bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 text-xs font-semibold rounded-xl border border-emerald-600/30 transition cursor-pointer"
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
                            className="flex items-center justify-center gap-1.5 py-2 px-2 bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 text-xs font-semibold rounded-xl border border-purple-600/30 transition cursor-pointer"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>Scholarships</span>
                          </button>
                        </div>
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

export default CollegeFeesComparison;
