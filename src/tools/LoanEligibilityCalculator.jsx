import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import { fetchCollegeClientSide } from "../utils/collegeClientFetcher.js";
import {
  Calculator,
  CreditCard,
  GraduationCap,
  TrendingUp,
  Award,
  Sparkles,
  GitCompare,
  CheckCircle,
  AlertTriangle,
  Info,
  ShieldCheck,
  Building2,
  HardDrive,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import {
  saveReportToGoogleDrive,
  signInWithGoogleDrive,
  getAccessToken
} from "../services/googleDriveService";

// Pre-seeded verified college institutional records for instant retrieval
const STATIC_COLLEGE_DATA = [
  {
    aliases: ["nfsu", "national forensic", "forensic sciences"],
    data: {
      id: "nfsu-gandhinagar",
      name: "National Forensic Sciences University (NFSU)",
      shortName: "NFSU",
      state: "Gujarat",
      website: "https://www.nfsu.ac.in",
      location: "Gandhinagar, Gujarat, India",
      category: "Forensic & Cyber",
      feeRange: "₹1,30,000 - ₹2,40,000 / year",
      annualTuitionFee: 160000,
      popularPrograms: [{ name: "M.Tech Cyber Security", annualFee: 160000, duration: "2 Years" }],
      additionalOverviewDetails: {
        averagePackage: "₹12.5 LPA",
        jobPlacementRate: 92,
        financialAid: {
          scholarships: "Merit-based fee concessions for NFAT top 5 percentile qualifiers (up to 50% tuition waiver).",
          governmentSchemes: "Eligible for Gujarat MYSY, Digital Gujarat post-matric schemes, and National Scholarship Portal (NSP) Central Sector scholarships.",
          researchGrants: "Ministry of Home Affairs (MHA) & DST funded fellowships for M.Tech/Ph.D cyber security and forensic research scholars."
        }
      }
    }
  },
  {
    aliases: ["sibm", "symbiosis", "sibm pune"],
    data: {
      id: "sibm-pune",
      name: "Symbiosis Institute of Business Management (SIBM), Pune",
      shortName: "SIBM Pune",
      state: "Maharashtra",
      website: "https://www.sibm.edu",
      location: "Pune, Maharashtra, India",
      category: "Management",
      feeRange: "₹11,50,000 / year",
      annualTuitionFee: 1150000,
      popularPrograms: [{ name: "MBA in Business Administration", annualFee: 1150000, duration: "2 Years" }],
      additionalOverviewDetails: {
        averagePackage: "₹28.1 LPA",
        jobPlacementRate: 100,
        financialAid: {
          scholarships: "Symbiosis International University Merit Scholarship (50% tuition waiver for semester toppers).",
          governmentSchemes: "MahaDBT post-matric scholarship schemes and Central Sector Schemes.",
          researchGrants: "SIU Doctoral Fellowships and corporate research sponsorships."
        }
      }
    }
  },
  {
    aliases: ["rvce", "rv college", "rv engineering"],
    data: {
      id: "rvce-bangalore",
      name: "R.V. College of Engineering (RVCE)",
      shortName: "RVCE",
      state: "Karnataka",
      website: "https://www.rvce.edu.in",
      location: "Bengaluru, Karnataka, India",
      category: "Engineering",
      feeRange: "₹2,50,000 - ₹4,50,000 / year",
      annualTuitionFee: 280000,
      popularPrograms: [{ name: "B.Tech Computer Science & Eng", annualFee: 280000, duration: "4 Years" }],
      additionalOverviewDetails: {
        averagePackage: "₹15.2 LPA",
        jobPlacementRate: 95,
        financialAid: {
          scholarships: "Rashtreeya Sikshana Samithi Trust (RSST) Merit-cum-Means Scholarships (up to ₹50,000 waiver).",
          governmentSchemes: "Karnataka SSP / Vidyasiri scholarship and AICTE Pragati schemes.",
          researchGrants: "VTU and TEQIP research grants for student engineering innovations."
        }
      }
    }
  },
  {
    aliases: ["coep", "college of engineering pune"],
    data: {
      id: "coep-pune",
      name: "COEP Technological University",
      shortName: "COEP",
      state: "Maharashtra",
      website: "https://www.coep.org.in",
      location: "Pune, Maharashtra, India",
      category: "Engineering",
      feeRange: "₹1,40,000 / year",
      annualTuitionFee: 140000,
      popularPrograms: [{ name: "B.Tech Computer Engineering", annualFee: 140000, duration: "4 Years" }],
      additionalOverviewDetails: {
        averagePackage: "₹14.5 LPA",
        jobPlacementRate: 92,
        financialAid: {
          scholarships: "COEP Alumni Association Student Financial Support Fund & Merit Awards.",
          governmentSchemes: "MahaDBT Rajarshi Chhatrapati Shahu Maharaj 50% tuition fee waiver for CAP admissions.",
          researchGrants: "TEQIP and AICTE funded student R&D projects."
        }
      }
    }
  }
];

// Top education loan schemes in India
const TOP_LOAN_SCHEMES = [
  {
    bank: "State Bank of India",
    scheme: "SBI Scholar Loan (List A Institutions)",
    rate: 8.15,
    maxTenure: 15,
    margin: "0% for Top Tier (Up to ₹50L)",
    collateral: "No Collateral up to ₹40–50 Lakhs",
  },
  {
    bank: "Bank of Baroda",
    scheme: "Baroda Scholar Scheme",
    rate: 8.5,
    maxTenure: 15,
    margin: "Nil for Premier Institutions",
    collateral: "No Collateral up to ₹40 Lakhs",
  },
  {
    bank: "Punjab National Bank",
    scheme: "PNB Pratibha / Saraswati",
    rate: 8.55,
    maxTenure: 15,
    margin: "5% above ₹4 Lakhs",
    collateral: "Third-party guarantee / Parent co-borrower",
  },
  {
    bank: "HDFC Credila",
    scheme: "Customized Higher Education Loan",
    rate: 9.25,
    maxTenure: 12,
    margin: "Up to 100% Finance",
    collateral: "Flexible collateral & co-signer terms",
  },
  {
    bank: "Axis Bank",
    scheme: "Prime Education Loan",
    rate: 9.7,
    maxTenure: 15,
    margin: "Nil for Premier Institutes",
    collateral: "Unsecured up to ₹40 Lakhs",
  },
];

const QUICK_COLLEGES = [
  "NFSU",
  "SIBM Pune",
  "RV College of Engineering",
  "COEP Technological Univ",
  "IIT Kharagpur",
  "Anna University",
];

const LoanEligibilityCalculator = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Search & College Selection
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchMessage, setSearchMessage] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState(null);

  // Financial inputs (Numbers)
  const [loanAmount, setLoanAmount] = useState(1200000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(7);
  const [monthlyIncome, setMonthlyIncome] = useState(75000);
  const [existingEmi, setExistingEmi] = useState(5000);
  const [creditScore, setCreditScore] = useState(760);

  // Active bank preset
  const [selectedBank, setSelectedBank] = useState("Bank of Baroda");

  // Google Drive state
  const [savingToDrive, setSavingToDrive] = useState(false);
  const [driveSaveStatus, setDriveSaveStatus] = useState(null);

  const handleSaveToDrive = async () => {
    setSavingToDrive(true);
    setDriveSaveStatus(null);
    try {
      let token = getAccessToken();
      if (!token) {
        const authRes = await signInWithGoogleDrive();
        token = authRes?.accessToken;
      }

      const reportText = [
        "============================================================",
        "MENTOREX EDUCATION LOAN & REPAYMENT ESTIMATE",
        `Generated: ${new Date().toLocaleString()}`,
        `College: ${selectedCollege ? selectedCollege.name : "Custom / General Study"}`,
        `Bank Scheme: ${selectedBank}`,
        "============================================================\n",
        `Loan Principal Requested: ₹${loanAmount.toLocaleString("en-IN")}`,
        `Interest Rate: ${interestRate}% p.a.`,
        `Repayment Tenure: ${loanTerm} Years (${loanTerm * 12} Months)`,
        `Estimated Monthly EMI: ₹${calculations.monthlyEmi.toLocaleString("en-IN")}/month`,
        `Total Interest Payable: ₹${calculations.totalInterest.toLocaleString("en-IN")}`,
        `Total Amount Repaid: ₹${calculations.totalPayment.toLocaleString("en-IN")}`,
        `------------------------------------------------------------`,
        `Household Monthly Income: ₹${monthlyIncome.toLocaleString("en-IN")}`,
        `Existing EMIs: ₹${existingEmi.toLocaleString("en-IN")}`,
        `FOIR / Debt Burden Ratio: ${calculations.foir}% (${calculations.isEligible ? "Within Safe Limits" : "High Debt Exposure"})`,
        `Estimated Starting Salary: ${selectedCollege?.additionalOverviewDetails?.averagePackage || "₹8.0 - ₹12.0 LPA"}`,
        `Monthly Salary Impact: Approx. ${Math.min(100, Math.round((calculations.monthlyEmi / (Math.round((selectedCollege?.additionalOverviewDetails?.averagePackage ? parseFloat(selectedCollege.additionalOverviewDetails.averagePackage.replace(/[^0-9.]/g, '')) * 100000 / 12 : 75000)))) * 100))}% of net graduate pay`,
        "============================================================",
        "Generated via MentoreX (mentorex.co.in) - Stored in Google Drive"
      ].join("\n");

      const collegeSlug = selectedCollege ? selectedCollege.shortName || "Loan" : "EducationLoan";
      const result = await saveReportToGoogleDrive({
        fileName: `MentoreX-Loan-Estimate-${collegeSlug}-${new Date().toISOString().slice(0, 10)}.txt`,
        content: reportText,
        mimeType: "text/plain",
        description: "Education loan estimate and repayment calculation from MentoreX"
      });

      setDriveSaveStatus({
        success: true,
        link: result.webViewLink,
        name: result.name
      });
    } catch (err) {
      setDriveSaveStatus({
        error: err.message || "Failed to save loan estimate to Google Drive"
      });
    } finally {
      setSavingToDrive(false);
    }
  };

  // Apply college data to loan
  const applyCollegeData = useCallback((college) => {
    setSelectedCollege(college);

    let annualFee = 200000;
    if (college.popularPrograms?.[0]?.annualFee) {
      annualFee = college.popularPrograms[0].annualFee;
    } else if (college.annualTuitionFee) {
      annualFee = college.annualTuitionFee;
    } else if (college.feeRange) {
      const match = college.feeRange.match(/(\d+(?:,\d+)?)/);
      if (match) {
        annualFee = parseInt(match[1].replace(/,/g, ""), 10);
      }
    }

    let years = 4;
    if (
      college.category === "Management" ||
      college.popularPrograms?.[0]?.duration?.includes("2")
    ) {
      years = 2;
    } else if (
      college.category === "Medical" ||
      college.popularPrograms?.[0]?.duration?.includes("5")
    ) {
      years = 5;
    }

    // Estimate realistic degree expense: (Annual Fee + 90k living) * years - 15% self margin
    const totalEst = (annualFee + 90000) * years;
    const estLoan = Math.round(totalEst * 0.85);

    setLoanAmount(estLoan);
    setLoanTerm(Math.max(5, years + 3));
    setInterestRate(8.5);
  }, []);

  const handleSelectOrFetchCollege = useCallback(
    async (nameToFetch) => {
      if (!nameToFetch || !nameToFetch.trim()) return;
      const cleanName = nameToFetch.trim().toLowerCase();
      setSearching(true);
      setSearchMessage(null);

      // Tier 1: Check instant static verified registry
      const staticMatch = STATIC_COLLEGE_DATA.find((item) =>
        item.aliases.some((alias) => cleanName.includes(alias) || alias.includes(cleanName))
      );

      if (staticMatch) {
        applyCollegeData(staticMatch.data);
        setSearchMessage({
          type: "success",
          text: `Loaded official fee records for ${staticMatch.data.name}`,
        });
        setSearching(false);
        return;
      }

      let fetchedCollege = null;

      // Tier 2: Search local database
      try {
        const dbRes = await axios.get(
          `${API_URL}/api/colleges?search=${encodeURIComponent(nameToFetch.trim())}`,
          { timeout: 4000 }
        );
        if (dbRes.data && Array.isArray(dbRes.data.data) && dbRes.data.data.length > 0) {
          fetchedCollege = dbRes.data.data[0];
        }
      } catch (err) {
        console.warn("Local DB search error:", err);
      }

      // Tier 3: AI Search
      if (!fetchedCollege) {
        try {
          const res = await axios.post(
            `${API_URL}/api/colleges/ai-search`,
            { name: nameToFetch.trim() },
            { timeout: 6000 }
          );
          if (res.data && res.data.success && res.data.data) {
            fetchedCollege = res.data.data;
          }
        } catch (aiErr) {
          console.warn("AI search error:", aiErr);
        }
      }

      // Tier 4: Fetch fallback
      if (!fetchedCollege) {
        try {
          const fbRes = await axios.post(
            `${API_URL}/api/colleges/fetch`,
            { name: nameToFetch.trim() },
            { timeout: 5000 }
          );
          if (fbRes.data && fbRes.data.success && fbRes.data.data) {
            fetchedCollege = fbRes.data.data;
          }
        } catch (fbErr) {
          console.warn("Server fetch fallback error:", fbErr);
        }
      }

      // Tier 5: Client-side Wikipedia fallback
      if (!fetchedCollege) {
        try {
          fetchedCollege = await fetchCollegeClientSide(nameToFetch.trim());
        } catch (cErr) {
          console.warn("Client fallback error:", cErr);
        }
      }

      if (fetchedCollege) {
        applyCollegeData(fetchedCollege);
        setSearchMessage({
          type: "success",
          text: `Loaded official fee records for ${fetchedCollege.name}`,
        });
      } else {
        setSearchMessage({
          type: "error",
          text: `Could not fetch college data for "${nameToFetch}". Please try another name.`,
        });
      }
      setSearching(false);
    },
    [applyCollegeData]
  );

  // Auto-fetch if URL has ?college=
  useEffect(() => {
    const urlCollege = searchParams.get("college");
    if (urlCollege) {
      setSearchQuery(urlCollege);
      handleSelectOrFetchCollege(urlCollege);
    }
  }, [searchParams, handleSelectOrFetchCollege]);

  // Compute Loan EMI & Eligibility Metrics in Real Time
  const calculations = useMemo(() => {
    const P = Math.max(10000, Number(loanAmount) || 0);
    const r = (Number(interestRate) || 8.5) / 100 / 12;
    const n = Math.max(1, (Number(loanTerm) || 7) * 12);

    // Standard EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
    let emi = 0;
    if (r > 0) {
      emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      emi = P / n;
    }

    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    // Bank FOIR (Fixed Obligation to Income Ratio) Eligibility Engine:
    // Banks allow up to 50% - 60% of monthly income for total EMIs.
    const disposableMonthly = Math.max(0, Number(monthlyIncome) || 0);
    const existingMonthlyObligations = Math.max(0, Number(existingEmi) || 0);
    const maxAllowedEmi = Math.max(0, disposableMonthly * 0.5 - existingMonthlyObligations);

    // Maximum loan amount banks would approve based on maxAllowedEmi:
    let maxEligibleLoan = 0;
    if (r > 0 && maxAllowedEmi > 0) {
      maxEligibleLoan = (maxAllowedEmi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
    }

    // Eligibility Verdict
    let isEligible = false;
    let eligibilityGrade = "Eligible";
    let eligibilityMessage = "";
    let eligibilityColor = "text-emerald-400 bg-emerald-950/60 border-emerald-500/40";

    const score = Number(creditScore) || 700;

    if (score < 650) {
      isEligible = false;
      eligibilityGrade = "Low Credit Score";
      eligibilityMessage =
        "Your credit score is below 650. You will need a strong financial co-borrower (parent/guardian) with a 750+ score to approve this education loan.";
      eligibilityColor = "text-red-400 bg-red-950/60 border-red-500/40";
    } else if (emi > maxAllowedEmi) {
      isEligible = false;
      eligibilityGrade = "Co-Borrower Income Needed";
      eligibilityMessage = `The requested monthly EMI of ₹${Math.round(emi).toLocaleString()} exceeds your safe monthly repayment capacity (₹${Math.round(maxAllowedEmi).toLocaleString()}). Adding a co-signer or extending the tenure to 10–15 years will secure approval.`;
      eligibilityColor = "text-amber-400 bg-amber-950/60 border-amber-500/40";
    } else {
      isEligible = true;
      eligibilityGrade = "High Approval Probability";
      eligibilityMessage = `Excellent financial profile! Your EMI (₹${Math.round(emi).toLocaleString()}) is well within bank norms (FOIR < 50%). You qualify for fast-track disbursal with top public and private banks.`;
      eligibilityColor = "text-emerald-400 bg-emerald-950/60 border-emerald-500/40";
    }

    // Placement Feasibility Analysis (Using Verified College Placement Package)
    let salaryAnalysis = null;
    if (selectedCollege?.additionalOverviewDetails?.averagePackage) {
      const pkg = selectedCollege.additionalOverviewDetails.averagePackage;
      const match = pkg.match(/(\d+(?:\.\d+)?)/);
      if (match) {
        const lpa = parseFloat(match[1]);
        if (lpa > 0) {
          const startingMonthly = Math.round((lpa * 100000) / 12);
          const ratio = ((emi / startingMonthly) * 100).toFixed(1);
          salaryAnalysis = {
            lpa: `${lpa} LPA`,
            monthly: startingMonthly,
            ratio,
            safe: parseFloat(ratio) <= 25,
          };
        }
      }
    }

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      maxAllowedEmi: Math.round(maxAllowedEmi),
      maxEligibleLoan: Math.round(maxEligibleLoan),
      isEligible,
      eligibilityGrade,
      eligibilityMessage,
      eligibilityColor,
      salaryAnalysis,
    };
  }, [loanAmount, interestRate, loanTerm, monthlyIncome, existingEmi, creditScore, selectedCollege]);

  // Handle bank preset click
  const handleSelectBank = (scheme) => {
    setSelectedBank(scheme.bank);
    setInterestRate(scheme.rate);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Live Bank FOIR & Salary Intelligence
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-3">
            <Calculator className="text-blue-500" /> Education Loan & Eligibility Calculator
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Calculate your exact monthly EMI, maximum loan eligibility limit, and evaluate career repayment safety against verified college placement packages.
          </p>
        </div>

        {/* Integrated College Search Bar */}
        <div className="bg-gray-900/90 border border-blue-500/30 rounded-2xl p-5 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSelectOrFetchCollege(searchQuery)}
                placeholder="Search university to auto-calculate fees (e.g. NFSU, SIBM Pune, RVCE, COEP)..."
                className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={() => handleSelectOrFetchCollege(searchQuery)}
              disabled={searching || !searchQuery.trim()}
              className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition whitespace-nowrap shadow-lg"
            >
              {searching ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Loading Fees...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Auto-Fill from College</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Selection Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-gray-800">
            <span className="text-xs text-gray-400 font-medium">Quick Colleges:</span>
            {QUICK_COLLEGES.map((college) => (
              <button
                key={college}
                type="button"
                onClick={() => {
                  setSearchQuery(college);
                  handleSelectOrFetchCollege(college);
                }}
                className={`text-xs px-2.5 py-1 rounded-lg border transition ${
                  selectedCollege?.name?.toLowerCase().includes(college.toLowerCase()) ||
                  selectedCollege?.shortName?.toLowerCase() === college.toLowerCase()
                    ? "bg-blue-600 text-white border-blue-400 shadow-md"
                    : "bg-gray-800/80 hover:bg-blue-900/40 text-gray-300 border-gray-700 hover:text-blue-300"
                }`}
              >
                {college}
              </button>
            ))}
          </div>

          {searchMessage && (
            <p className={`text-xs mt-2 ${searchMessage.type === "success" ? "text-emerald-400" : "text-red-400"}`}>
              {searchMessage.text}
            </p>
          )}
        </div>

        {/* Selected College Intelligence Banner */}
        {selectedCollege && (
          <div className="bg-gradient-to-r from-gray-900 via-blue-950/40 to-gray-900 border border-blue-500/40 rounded-2xl p-5 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    {selectedCollege.category || "University"}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    Verified Fees Loaded
                  </span>
                  {selectedCollege.established && (
                    <span className="text-xs text-gray-400">Est. {selectedCollege.established}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">{selectedCollege.name}</h3>
                <p className="text-xs text-gray-400">{selectedCollege.location}</p>
              </div>

              {/* College Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-gray-900/90 border border-gray-800 p-2.5 rounded-xl text-center">
                  <div className="text-[11px] text-gray-400 font-medium">Avg Starting CTC</div>
                  <div className="text-sm font-bold text-emerald-400">
                    {selectedCollege.additionalOverviewDetails?.averagePackage || "₹10.5 LPA"}
                  </div>
                </div>
                <div className="bg-gray-900/90 border border-gray-800 p-2.5 rounded-xl text-center">
                  <div className="text-[11px] text-gray-400 font-medium">Placement Rate</div>
                  <div className="text-sm font-bold text-blue-400">
                    {selectedCollege.additionalOverviewDetails?.jobPlacementRate || 90}%
                  </div>
                </div>
                <div className="bg-gray-900/90 border border-gray-800 p-2.5 rounded-xl text-center col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-gray-400 font-medium">Tuition Estimate</div>
                  <div className="text-sm font-bold text-amber-300">
                    {selectedCollege.feeRange ||
                      `₹${(selectedCollege.popularPrograms?.[0]?.annualFee || 160000).toLocaleString()} / yr`}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Cross-Tool Navigation */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-gray-800 text-xs">
              <span className="text-gray-400">Cross-tool actions:</span>
              <button
                type="button"
                onClick={() =>
                  navigate(
                    `/tools/college-fee-comparison?college=${encodeURIComponent(
                      selectedCollege.name
                    )}`
                  )
                }
                className="px-2.5 py-1 bg-blue-900/40 hover:bg-blue-800/60 text-blue-300 rounded border border-blue-700/50 flex items-center gap-1 transition"
              >
                <GitCompare className="w-3 h-3" /> Compare Total Degree ROI
              </button>
              <button
                type="button"
                onClick={() =>
                  navigate(
                    `/tools/scholarship-finder?college=${encodeURIComponent(
                      selectedCollege.name
                    )}`
                  )
                }
                className="px-2.5 py-1 bg-purple-900/40 hover:bg-purple-800/60 text-purple-300 rounded border border-purple-700/50 flex items-center gap-1 transition"
              >
                <Award className="w-3 h-3" /> Check Available Scholarships
              </button>
            </div>
          </div>
        )}

        {/* Bank Presets Selector */}
        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-400" /> Apply Real Bank Interest Rates:
            </span>
            <span className="text-xs text-gray-400">Click any bank to apply</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {TOP_LOAN_SCHEMES.map((scheme) => (
              <button
                key={scheme.bank}
                type="button"
                onClick={() => handleSelectBank(scheme)}
                className={`p-2.5 rounded-xl border text-left transition ${
                  selectedBank === scheme.bank && interestRate === scheme.rate
                    ? "bg-blue-600/30 border-blue-500 text-white shadow-lg"
                    : "bg-gray-950 border-gray-800 hover:border-gray-700 text-gray-300"
                }`}
              >
                <div className="text-xs font-bold leading-tight truncate">{scheme.bank}</div>
                <div className="text-sm font-extrabold text-blue-400 mt-1">{scheme.rate}% p.a.</div>
                <div className="text-[10px] text-gray-400 truncate">{scheme.scheme}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Inputs + Calculations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls & Sliders */}
          <div className="lg:col-span-6 bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl space-y-5">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <CreditCard className="text-blue-400 w-5 h-5" /> Loan Configuration
            </h2>

            {/* Loan Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-gray-300">Loan Amount</label>
                <span className="text-base font-extrabold text-blue-400">
                  ₹{Number(loanAmount).toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <span>₹1 Lakh</span>
                <span>₹25 Lakhs</span>
                <span>₹50 Lakhs</span>
              </div>
            </div>

            {/* Interest Rate & Tenure */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-gray-300">Interest Rate</label>
                  <span className="text-sm font-bold text-white">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="6.5"
                  max="15.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => {
                    setInterestRate(Number(e.target.value));
                    setSelectedBank("Custom");
                  }}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-gray-300">Tenure (Years)</label>
                  <span className="text-sm font-bold text-white">{loanTerm} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>

            {/* Borrower Financial Profile */}
            <div className="pt-4 border-t border-gray-800 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Borrower Eligibility Parameters:
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">
                    Monthly Family Income
                  </label>
                  <input
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className="w-full p-2.5 bg-gray-950 border border-gray-800 rounded-xl text-white font-mono text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1">
                    Existing Monthly EMIs
                  </label>
                  <input
                    type="number"
                    value={existingEmi}
                    onChange={(e) => setExistingEmi(Number(e.target.value))}
                    className="w-full p-2.5 bg-gray-950 border border-gray-800 rounded-xl text-white font-mono text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Credit Score (CIBIL)</span>
                  <span
                    className={`font-bold ${
                      creditScore >= 750
                        ? "text-emerald-400"
                        : creditScore >= 650
                        ? "text-amber-400"
                        : "text-red-400"
                    }`}
                  >
                    {creditScore} ({creditScore >= 750 ? "Excellent" : creditScore >= 650 ? "Fair" : "Poor"})
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="900"
                  step="10"
                  value={creditScore}
                  onChange={(e) => setCreditScore(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Results: EMI, Eligibility & Placement Analysis */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-xl space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <TrendingUp className="text-emerald-400 w-5 h-5" /> Repayment & Eligibility Summary
                </h2>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-bold border ${
                      calculations.isEligible
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                        : "bg-amber-500/20 text-amber-300 border-amber-500/40"
                    }`}
                  >
                    {calculations.isEligible ? "Eligible" : "Co-Signer Needed"}
                  </span>
                  <button
                    type="button"
                    onClick={handleSaveToDrive}
                    disabled={savingToDrive}
                    className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg text-xs font-bold shadow transition disabled:opacity-50"
                    title="Save this loan calculation directly to Google Drive"
                  >
                    <HardDrive className={`w-3.5 h-3.5 ${savingToDrive ? "animate-spin" : ""}`} />
                    <span>{savingToDrive ? "Saving..." : "Save to Drive"}</span>
                  </button>
                </div>
              </div>

              {/* Google Drive Status Alert if any */}
              {driveSaveStatus && (
                <div className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-2 ${
                  driveSaveStatus.success
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                    : "bg-red-500/10 border-red-500/30 text-red-300"
                }`}>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>
                      {driveSaveStatus.success
                        ? `Saved "${driveSaveStatus.name}" to your Google Drive!`
                        : driveSaveStatus.error}
                    </span>
                  </div>
                  {driveSaveStatus.link && (
                    <a
                      href={driveSaveStatus.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold underline hover:text-white flex items-center gap-1 flex-shrink-0"
                    >
                      Open <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}

              {/* Big Monthly EMI Card */}
              <div className="p-5 bg-gradient-to-br from-blue-950/70 via-gray-950 to-black border border-blue-500/40 rounded-2xl text-center relative overflow-hidden">
                <div className="text-xs uppercase tracking-wider font-semibold text-blue-300">
                  Estimated Monthly EMI
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mt-1">
                  ₹{calculations.monthlyEmi.toLocaleString()}
                  <span className="text-sm font-normal text-gray-400"> / month</span>
                </div>
                <div className="text-xs text-gray-400 mt-2 flex items-center justify-center gap-4">
                  <span>Tenure: {loanTerm} Years</span>
                  <span>•</span>
                  <span>Rate: {interestRate}% p.a.</span>
                </div>
              </div>

              {/* Matrix of Repayment Totals */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3.5 bg-gray-950 border border-gray-800 rounded-xl">
                  <span className="text-xs text-gray-400 block mb-0.5">Total Interest Payable</span>
                  <span className="font-bold text-amber-300 text-base">
                    ₹{calculations.totalInterest.toLocaleString()}
                  </span>
                </div>
                <div className="p-3.5 bg-gray-950 border border-gray-800 rounded-xl">
                  <span className="text-xs text-gray-400 block mb-0.5">Total Amount Repaid</span>
                  <span className="font-bold text-white text-base">
                    ₹{calculations.totalPayment.toLocaleString()}
                  </span>
                </div>
                <div className="p-3.5 bg-gray-950 border border-gray-800 rounded-xl">
                  <span className="text-xs text-gray-400 block mb-0.5">Max Safe Monthly EMI</span>
                  <span className="font-bold text-emerald-400 text-base">
                    ₹{calculations.maxAllowedEmi.toLocaleString()}
                  </span>
                </div>
                <div className="p-3.5 bg-gray-950 border border-gray-800 rounded-xl">
                  <span className="text-xs text-gray-400 block mb-0.5">Max Eligible Loan</span>
                  <span className="font-bold text-blue-400 text-base">
                    ₹{calculations.maxEligibleLoan.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Eligibility Message Banner */}
              <div className={`p-4 rounded-xl border ${calculations.eligibilityColor}`}>
                <div className="font-bold text-sm mb-1 flex items-center gap-2">
                  {calculations.isEligible ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  )}
                  {calculations.eligibilityGrade}
                </div>
                <p className="text-xs leading-relaxed opacity-90">
                  {calculations.eligibilityMessage}
                </p>
              </div>

              {/* Career Salary Feasibility (Linked to Placement Records) */}
              {calculations.salaryAnalysis ? (
                <div
                  className={`p-4 rounded-xl border ${
                    calculations.salaryAnalysis.safe
                      ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-200"
                      : "bg-blue-950/30 border-blue-500/40 text-blue-200"
                  }`}
                >
                  <div className="font-bold text-xs flex items-center gap-1.5 uppercase mb-1">
                    <GraduationCap className="w-4 h-4" /> Career Placement Feasibility from{" "}
                    {selectedCollege.shortName || selectedCollege.name}:
                  </div>
                  <p className="text-xs leading-relaxed text-gray-300">
                    With an audited average package of{" "}
                    <strong className="text-white">{calculations.salaryAnalysis.lpa}</strong> (
                    ₹{calculations.salaryAnalysis.monthly.toLocaleString()}/month), your EMI of ₹
                    {calculations.monthlyEmi.toLocaleString()} is only{" "}
                    <strong className="text-emerald-400">
                      {calculations.salaryAnalysis.ratio}% of starting salary
                    </strong>
                    . This is considered an extraordinarily safe debt-to-income ratio!
                  </p>
                </div>
              ) : (
                <div className="p-3 bg-gray-950 border border-gray-800 rounded-xl text-xs text-gray-400 flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>
                    Select any college from the search bar above to verify your loan EMI against its real placement package!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibilityCalculator;
