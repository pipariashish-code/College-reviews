export interface College {
  id: string;
  name: string;
  shortName: string;
  location: string;
  city?: string;
  state?: string;
  country: string;
  established: number;
  type: string;
  category:
    | "Engineering"
    | "Management"
    | "Medical"
    | "Forensic & Cyber"
    | "Law"
    | "Sciences & Arts"
    | "Commerce & BMS"
    | "Arts & Psychology"
    | "Design"
    | "Film & Media"
    | "General";
  website: string;
  imageUrl?: string;
  overview: string;
  additionalOverviewDetails: {
    jobPlacementRate: number;
    averagePackage?: string;
    highestPackage?: string;
    professorStudentRatio: string;
    academicPrograms: string[];
    topRecruiters?: string[];
    financialAid: {
      scholarships: string;
      governmentSchemes: string;
      researchGrants: string;
    };
  };
  rankings: {
    nationalRank: number | string;
    rankingBody?: string;
    researchScore: number;
    placementRate: number;
    starRatings: {
      campusLife: number;
      graduationRate: number;
      careerOpportunities: number;
      infrastructure?: number;
    };
  };
  facilities: string[];
  admissionProcess?: string;
  feeRange?: string;
  popularPrograms?: Array<{
    name: string;
    degree: string;
    duration: string;
    annualFee: number;
    seats?: number;
  }>;
  source?: "seed" | "live_fetch";
  verifiedSource?: string;
  sourceType?: string;
  aiMode?: boolean;
  modelUsed?: string;
}

export const initialColleges: College[] = [
  {
    id: "nfsu-gandhinagar",
    name: "National Forensic Sciences University (NFSU)",
    shortName: "NFSU",
    location: "Gandhinagar, Gujarat, India",
    city: "Gandhinagar",
    state: "Gujarat",
    country: "India",
    established: 2008,
    type: "Central University / Institute of National Importance",
    category: "Forensic & Cyber",
    website: "https://www.nfsu.ac.in",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/NFSU_Logo.png/220px-NFSU_Logo.png",
    overview:
      "NFSU is the world's first and only university dedicated to forensic science, cyber security, behavioral forensics, and homeland security, designated as an Institute of National Importance by the Parliament of India.",
    additionalOverviewDetails: {
      jobPlacementRate: 92,
      averagePackage: "₹12.5 LPA",
      highestPackage: "₹45.0 LPA",
      professorStudentRatio: "1:15",
      academicPrograms: [
        "Forensic Science",
        "Cyber Security",
        "Artificial Intelligence",
        "Digital Forensics",
        "Homeland Security",
        "Forensic Accounting",
      ],
      topRecruiters: [
        "Deloitte",
        "EY",
        "PwC",
        "KPMG",
        "Cisco",
        "Central Forensic Science Laboratories",
        "Indian Cyber Crime Coordination Centre",
      ],
      financialAid: {
        scholarships: "Up to 50% tuition waiver for top rankers in NFAT",
        governmentSchemes: "Central Sector Scheme, NSP & State Post-Matric schemes",
        researchGrants: "Available for meritorious M.Sc, M.Tech, and PhD scholars",
      },
    },
    rankings: {
      nationalRank: 12,
      rankingBody: "Specialized Category Excellence",
      researchScore: 8.5,
      placementRate: 92,
      starRatings: {
        campusLife: 4.2,
        graduationRate: 4.5,
        careerOpportunities: 4.7,
        infrastructure: 4.8,
      },
    },
    facilities: [
      "Ballistics and DNA Profiling Laboratory",
      "Centre of Excellence in Cyber Security",
      "High-Throughput Sequencing Facility",
      "Advanced Digital Forensics Infrastructure",
      "Collaborative Crime Scene Simulation Arenas",
    ],
    admissionProcess:
      "Admission through National Forensic Admission Test (NFAT) and valid GATE/GPAT scores for postgraduate courses.",
    feeRange: "₹1,10,000 - ₹2,40,000 / year",
    popularPrograms: [
      { name: "M.Sc. Forensic Science", degree: "Postgraduate", duration: "2 Years", annualFee: 140000, seats: 40 },
      { name: "M.Tech Cyber Security", degree: "Postgraduate", duration: "2 Years", annualFee: 180000, seats: 50 },
      { name: "B.Tech-M.Tech Computer Science (Cyber Security)", degree: "Dual Degree", duration: "5 Years", annualFee: 210000, seats: 60 },
    ],
    source: "seed",
  },
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    shortName: "IIT Bombay",
    location: "Powai, Mumbai, Maharashtra, India",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    established: 1958,
    type: "Institute of National Importance",
    category: "Engineering",
    website: "https://www.iitb.ac.in",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/250px-Indian_Institute_of_Technology_Bombay_Logo.svg.png",
    overview:
      "IIT Bombay is globally renowned as one of India's apex engineering and technology institutions. Located on the banks of Powai Lake in Mumbai, it is known for cutting-edge scientific research, prominent startup incubation at SINE, and global leadership.",
    additionalOverviewDetails: {
      jobPlacementRate: 98,
      averagePackage: "₹23.5 LPA",
      highestPackage: "₹1.68 CPA",
      professorStudentRatio: "1:10",
      academicPrograms: [
        "Computer Science & Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Aerospace Engineering",
        "Data Science & AI",
        "Chemical Engineering",
      ],
      topRecruiters: [
        "Google",
        "Microsoft",
        "Qualcomm",
        "Apple",
        "Jane Street",
        "Tower Research",
        "Goldman Sachs",
      ],
      financialAid: {
        scholarships: "Merit-cum-Means (MCM) scholarship with 100% tuition waiver",
        governmentSchemes: "Free Messing and pocket allowance for SC/ST students",
        researchGrants: "Prime Minister's Research Fellowship (PMRF) up to ₹80,000/month",
      },
    },
    rankings: {
      nationalRank: 3,
      rankingBody: "NIRF Overall 2024 (#1 in India QS World)",
      researchScore: 9.8,
      placementRate: 98,
      starRatings: {
        campusLife: 4.9,
        graduationRate: 4.8,
        careerOpportunities: 4.9,
        infrastructure: 4.9,
      },
    },
    facilities: [
      "High-Performance Computing Cluster (Spacetime)",
      "Society for Innovation and Entrepreneurship (SINE)",
      "Olympic-size Swimming Pool and Gymnasium",
      "Centre of Excellence in Nanoelectronics",
      "Powai Lakefront Innovation Hub",
    ],
    admissionProcess:
      "Undergraduate admissions via JEE Advanced. Postgraduate admissions via GATE, JAM, and CEED.",
    feeRange: "₹2,20,000 / year",
    popularPrograms: [
      { name: "B.Tech Computer Science & Engineering", degree: "Undergraduate", duration: "4 Years", annualFee: 220000, seats: 120 },
      { name: "B.Tech Electrical Engineering", degree: "Undergraduate", duration: "4 Years", annualFee: 220000, seats: 90 },
      { name: "M.Tech Artificial Intelligence & Data Science", degree: "Postgraduate", duration: "2 Years", annualFee: 85000, seats: 45 },
    ],
    source: "seed",
  },
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    location: "Hauz Khas, New Delhi, India",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    established: 1961,
    type: "Institute of National Importance",
    category: "Engineering",
    website: "https://home.iitd.ac.in",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/250px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
    overview:
      "IIT Delhi is a premier public technical and research university in Hauz Khas, Delhi. Recognized as an Institute of Eminence, it is celebrated for high-impact research, innovation parks, and unicorn founders.",
    additionalOverviewDetails: {
      jobPlacementRate: 97,
      averagePackage: "₹24.1 LPA",
      highestPackage: "₹2.0 CPA",
      professorStudentRatio: "1:11",
      academicPrograms: [
        "Computer Science",
        "Mathematics & Computing",
        "Biochemical Engineering",
        "Energy Science",
        "Civil Engineering",
      ],
      topRecruiters: [
        "Google",
        "Microsoft",
        "Rubrik",
        "Uber",
        "Texas Instruments",
        "McKinsey & Co",
      ],
      financialAid: {
        scholarships: "MCM scholarships and alumni-funded endowments",
        governmentSchemes: "NSP schemes & full fee remissions for family income < 1 LPA",
        researchGrants: "PMRF fellowships up to ₹80,000/month",
      },
    },
    rankings: {
      nationalRank: 2,
      rankingBody: "NIRF Engineering 2024",
      researchScore: 9.7,
      placementRate: 97,
      starRatings: {
        campusLife: 4.8,
        graduationRate: 4.9,
        careerOpportunities: 4.9,
        infrastructure: 4.8,
      },
    },
    facilities: [
      "Center for Atmospheric Sciences",
      "Central Research Facility (CRF)",
      "Foundation for Innovation and Technology Transfer (FITT)",
      "Central Library with 300,000+ volumes",
    ],
    admissionProcess:
      "Undergraduate admissions through JEE Advanced. Postgraduate via GATE and JAM.",
    feeRange: "₹2,25,000 / year",
    popularPrograms: [
      { name: "B.Tech Computer Science", degree: "Undergraduate", duration: "4 Years", annualFee: 225000, seats: 110 },
      { name: "B.Tech Mathematics and Computing", degree: "Undergraduate", duration: "4 Years", annualFee: 225000, seats: 75 },
    ],
    source: "seed",
  },
  {
    id: "iit-madras",
    name: "Indian Institute of Technology Madras",
    shortName: "IIT Madras",
    location: "Chennai, Tamil Nadu, India",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    established: 1959,
    type: "Institute of National Importance",
    category: "Engineering",
    website: "https://www.iitm.ac.in",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/250px-IIT_Madras_Logo.svg.png",
    overview:
      "IIT Madras has been ranked the #1 engineering institution in India by NIRF for multiple consecutive years. It is home to India's first university-based research park (IITM Research Park), propelling deep-tech innovation and industry partnerships.",
    additionalOverviewDetails: {
      jobPlacementRate: 96,
      averagePackage: "₹21.5 LPA",
      highestPackage: "₹1.9 CPA",
      professorStudentRatio: "1:10",
      academicPrograms: [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Ocean Engineering",
        "Aerospace Engineering",
      ],
      topRecruiters: ["Microsoft", "Google", "Texas Instruments", "Qualcomm", "Amazon", "Bain & Co"],
      financialAid: {
        scholarships: "Institute Merit-cum-Means and donor scholarships",
        governmentSchemes: "Central Sector Scholarship & PMRF",
        researchGrants: "NRP and IC&SR research grants",
      },
    },
    rankings: {
      nationalRank: 1,
      rankingBody: "NIRF Engineering 2024 (#1 Overall in India)",
      researchScore: 9.9,
      placementRate: 96,
      starRatings: {
        campusLife: 4.8,
        graduationRate: 4.9,
        careerOpportunities: 4.9,
        infrastructure: 4.9,
      },
    },
    facilities: [
      "IITM Research Park (India's premier deep-tech incubator)",
      "National Centre for Combustion R&D",
      "5G Testbed and Hyperloop Pod Track",
      "Lush Guindy National Park contiguous campus",
    ],
    admissionProcess: "Admission through JEE Advanced for B.Tech; GATE for M.Tech.",
    feeRange: "₹2,15,000 / year",
    popularPrograms: [
      { name: "B.Tech Computer Science & Engineering", degree: "Undergraduate", duration: "4 Years", annualFee: 215000, seats: 110 },
      { name: "Dual Degree Data Science", degree: "Dual Degree", duration: "5 Years", annualFee: 215000, seats: 60 },
    ],
    source: "seed",
  },
  {
    id: "bits-pilani",
    name: "Birla Institute of Technology and Science, Pilani",
    shortName: "BITS Pilani",
    location: "Pilani, Rajasthan, India",
    city: "Pilani",
    state: "Rajasthan",
    country: "India",
    established: 1964,
    type: "Deemed University / Institute of Eminence",
    category: "Engineering",
    website: "https://www.bits-pilani.ac.in",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/250px-BITS_Pilani-Logo.svg.png",
    overview:
      "BITS Pilani is a prestigious private deemed research institute renowned for its zero-attendance policy, Practice School internship program, and top-tier entrepreneurial startup ecosystem with alumni creating unicorns.",
    additionalOverviewDetails: {
      jobPlacementRate: 95,
      averagePackage: "₹19.8 LPA",
      highestPackage: "₹60.7 LPA",
      professorStudentRatio: "1:14",
      academicPrograms: [
        "Computer Science",
        "Electrical & Electronics",
        "Economics Dual Degree",
        "Mechanical Engineering",
        "Pharmacy",
      ],
      topRecruiters: [
        "Amazon",
        "Nvidia",
        "Microsoft",
        "DE Shaw",
        "Oracle",
        "Credit Suisse",
      ],
      financialAid: {
        scholarships: "Merit and Merit-cum-Need scholarships covering 25% to 100% of tuition",
        governmentSchemes: "State scholarships and corporate sponsorships",
        researchGrants: "Seed research grants for undergraduate researchers",
      },
    },
    rankings: {
      nationalRank: 20,
      rankingBody: "NIRF Overall 2024",
      researchScore: 8.9,
      placementRate: 95,
      starRatings: {
        campusLife: 4.8,
        graduationRate: 4.7,
        careerOpportunities: 4.8,
        infrastructure: 4.7,
      },
    },
    facilities: [
      "Practice School (industry-embedded 6-month internship)",
      "Pilani Innovation and Entrepreneurship Development Society (PIEDS)",
      "Telepresence Classrooms connecting Pilani, Goa & Hyderabad campuses",
    ],
    admissionProcess:
      "Admission strictly through BITSAT (BITS Admission Test) entrance examination.",
    feeRange: "₹4,80,000 - ₹5,40,000 / year",
    popularPrograms: [
      { name: "B.E. Computer Science", degree: "Undergraduate", duration: "4 Years", annualFee: 495000, seats: 140 },
      { name: "M.Sc. Economics + B.E. CS (Dual)", degree: "Dual Degree", duration: "5 Years", annualFee: 495000, seats: 90 },
    ],
    source: "seed",
  },
  {
    id: "aiims-new-delhi",
    name: "All India Institute of Medical Sciences, New Delhi",
    shortName: "AIIMS Delhi",
    location: "Ansari Nagar, New Delhi, India",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    established: 1956,
    type: "Institute of National Importance",
    category: "Medical",
    website: "https://www.aiims.edu",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/All_India_Institute_of_Medical_Sciences%2C_New_Delhi_logo.svg/220px-All_India_Institute_of_Medical_Sciences%2C_New_Delhi_logo.svg.png",
    overview:
      "AIIMS New Delhi is India's apex medical college and hospital, consistently ranked as the number one healthcare institution in the country. It combines clinical service with pioneering medical research and subsidized medical education.",
    additionalOverviewDetails: {
      jobPlacementRate: 100,
      averagePackage: "₹18.0 LPA",
      highestPackage: "₹40.0 LPA",
      professorStudentRatio: "1:4",
      academicPrograms: [
        "MBBS",
        "MD / MS Specializations",
        "M.Ch Surgical Super-specialties",
        "B.Sc Nursing (Hons)",
      ],
      topRecruiters: [
        "Fortis Healthcare",
        "Apollo Hospitals",
        "Max Healthcare",
        "WHO",
        "Top Global Academic Hospitals (US/UK)",
      ],
      financialAid: {
        scholarships: "Almost fully subsidized tuition (under ₹2,000 total course fee for MBBS)",
        governmentSchemes: "Stipends of ₹26,000/month during mandatory internship and ₹90,000+/month for Resident Doctors",
        researchGrants: "ICMR STS research grants",
      },
    },
    rankings: {
      nationalRank: 1,
      rankingBody: "NIRF Medical 2024",
      researchScore: 9.9,
      placementRate: 100,
      starRatings: {
        campusLife: 4.6,
        graduationRate: 4.9,
        careerOpportunities: 5.0,
        infrastructure: 4.9,
      },
    },
    facilities: [
      "2,500+ Bed Multi-specialty Hospital",
      "National Trauma Center & National Cancer Institute",
      "High-end Genomic and Robotic Surgery Labs",
      "Dedicated 24x7 Medical Library",
    ],
    admissionProcess:
      "MBBS admission through NEET-UG (typically top 50 AIR rankers). PG via INI-CET.",
    feeRange: "₹1,628 / entire course",
    popularPrograms: [
      { name: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", degree: "Undergraduate", duration: "5.5 Years", annualFee: 1628, seats: 125 },
      { name: "MD General Medicine", degree: "Postgraduate", duration: "3 Years", annualFee: 2000, seats: 25 },
    ],
    source: "seed",
  },
  {
    id: "iim-ahmedabad",
    name: "Indian Institute of Management Ahmedabad",
    shortName: "IIM Ahmedabad",
    location: "Vastrapur, Ahmedabad, Gujarat, India",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    established: 1961,
    type: "Institute of National Importance",
    category: "Management",
    website: "https://www.iima.ac.in",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/IIM_Ahmedabad_Logo.svg/250px-IIM_Ahmedabad_Logo.svg.png",
    overview:
      "IIM Ahmedabad (IIMA) is India's foremost management institution, renowned internationally for its rigorous case-study methodology, world-class faculty, and distinguished leaders in business, banking, and public policy.",
    additionalOverviewDetails: {
      jobPlacementRate: 100,
      averagePackage: "₹34.3 LPA",
      highestPackage: "₹1.15 CPA",
      professorStudentRatio: "1:7",
      academicPrograms: [
        "Post Graduate Programme in Management (PGP/MBA)",
        "PGP in Food & Agri-Business Management (PGP-FABM)",
        "ePGP Executive MBA",
        "PhD in Management",
      ],
      topRecruiters: [
        "McKinsey & Company",
        "Boston Consulting Group (BCG)",
        "Bain & Company",
        "Goldman Sachs",
        "Morgan Stanley",
        "Hindustan Unilever",
      ],
      financialAid: {
        scholarships: "Special Need-Based Scholarship Scheme (covering up to 100% of tuition)",
        governmentSchemes: "Central Sector Merit scholarships & Top Class Education schemes",
        researchGrants: "Full tuition waiver and stipend for PhD scholars",
      },
    },
    rankings: {
      nationalRank: 1,
      rankingBody: "NIRF Management 2024 / FT Global MBA",
      researchScore: 9.8,
      placementRate: 100,
      starRatings: {
        campusLife: 4.8,
        graduationRate: 4.9,
        careerOpportunities: 5.0,
        infrastructure: 4.9,
      },
    },
    facilities: [
      "Iconic Louis Kahn Red-Brick Campus",
      "Vikram Sarabhai Library (one of Asia's finest business libraries)",
      "CIIE.CO (Top Startup Incubator)",
      "Harvard-style Harvard Business School amphitheatre lecture halls",
    ],
    admissionProcess:
      "Admission via Common Admission Test (CAT) followed by Analytical Writing Test (AWT) and Personal Interview (PI).",
    feeRange: "₹25,00,000 / 2-year program",
    popularPrograms: [
      { name: "Post Graduate Programme in Management (PGP / MBA)", degree: "Postgraduate", duration: "2 Years", annualFee: 1250000, seats: 395 },
    ],
    source: "seed",
  },
  {
    id: "vellore-institute-of-technology",
    name: "Vellore Institute of Technology",
    shortName: "VIT",
    location: "Vellore, Tamil Nadu, India",
    city: "Vellore",
    state: "Tamil Nadu",
    country: "India",
    established: 1984,
    type: "Deemed University / Institute of Eminence",
    category: "Engineering",
    website: "https://vit.ac.in",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/220px-Vellore_Institute_of_Technology_seal_2017.svg.png",
    overview:
      "Vellore Institute of Technology is a premier private deemed research university located in Vellore, Tamil Nadu. Renowned for its ABET-accredited engineering programs, Fully Flexible Credit System (FFCS), and extensive global university partnerships.",
    additionalOverviewDetails: {
      jobPlacementRate: 92,
      averagePackage: "₹9.2 LPA",
      highestPackage: "₹1.02 CPA",
      professorStudentRatio: "1:16",
      academicPrograms: [
        "Computer Science and Engineering",
        "Electronics and Communication",
        "Biotechnology",
        "Mechanical Engineering",
        "Information Technology",
      ],
      topRecruiters: [
        "Microsoft",
        "Amazon",
        "AppDynamics",
        "Qualcomm",
        "DE Shaw",
        "TCS Digital",
        "Cognizant",
      ],
      financialAid: {
        scholarships: "GV School Development Programme (GVSDP) offering 100% tuition waiver to state & central board toppers",
        governmentSchemes: "State BC/MBC/SC/ST scholarships eligible",
        researchGrants: "Seed money grants for student publications and patents",
      },
    },
    rankings: {
      nationalRank: 11,
      rankingBody: "NIRF Engineering 2024",
      researchScore: 8.5,
      placementRate: 92,
      starRatings: {
        campusLife: 4.6,
        graduationRate: 4.7,
        careerOpportunities: 4.6,
        infrastructure: 4.8,
      },
    },
    facilities: [
      "Technology Tower & Smart Lecture Theatres",
      "Periyar Central Library with over 250,000 books",
      "Olympic-size swimming pool & multi-sport stadiums",
      "Center for Biomaterials, Cellular & Molecular Theranostics",
    ],
    admissionProcess:
      "Admission to B.Tech programs through VITEEE (VIT Engineering Entrance Examination).",
    feeRange: "₹1,98,000 - ₹3,05,000 / year",
    popularPrograms: [
      { name: "B.Tech Computer Science and Engineering", degree: "Undergraduate", duration: "4 Years", annualFee: 198000, seats: 600 },
      { name: "B.Tech Electronics & Communication", degree: "Undergraduate", duration: "4 Years", annualFee: 198000, seats: 360 },
    ],
    source: "seed",
  },
  {
    id: "manipal-academy-of-higher-education",
    name: "Manipal Academy of Higher Education (MAHE)",
    shortName: "Manipal",
    location: "Manipal, Karnataka, India",
    city: "Manipal",
    state: "Karnataka",
    country: "India",
    established: 1953,
    type: "Deemed University / Institute of Eminence",
    category: "Engineering",
    website: "https://manipal.edu",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Manipal_Academy_of_Higher_Education_logo.svg/250px-Manipal_Academy_of_Higher_Education_logo.svg.png",
    overview:
      "Manipal Academy of Higher Education is an internationally respected multi-disciplinary private research university situated in the coastal town of Manipal, Karnataka, with renowned institutes including MIT Manipal and KMC Manipal.",
    additionalOverviewDetails: {
      jobPlacementRate: 91,
      averagePackage: "₹10.5 LPA",
      highestPackage: "₹54.0 LPA",
      professorStudentRatio: "1:12",
      academicPrograms: [
        "Computer Science Engineering",
        "Medicine (MBBS - KMC)",
        "Aerospace Engineering",
        "Pharmacy (MCOPS)",
        "Architecture",
      ],
      topRecruiters: [
        "Microsoft",
        "Amazon",
        "Goldman Sachs",
        "Cisco",
        "Siemens",
        "Philips Healthcare",
      ],
      financialAid: {
        scholarships: "Freeship and Scholar scholarships for top rankers in MET",
        governmentSchemes: "State post-matric and national loan subsidies",
        researchGrants: "Student Research Forum fellowships",
      },
    },
    rankings: {
      nationalRank: 16,
      rankingBody: "NIRF Overall 2024",
      researchScore: 8.7,
      placementRate: 91,
      starRatings: {
        campusLife: 4.8,
        graduationRate: 4.7,
        careerOpportunities: 4.7,
        infrastructure: 4.9,
      },
    },
    facilities: [
      "Marena (World-class indoor sports complex)",
      "Kasturba Hospital (2,000+ bed teaching facility)",
      "Manipal Innovation Centre (MUTBI)",
      "Central Library with round-the-clock digital access",
    ],
    admissionProcess:
      "Admission via Manipal Entrance Test (MET) for engineering and NEET for medical/dental.",
    feeRange: "₹3,35,000 - ₹4,50,000 / year",
    popularPrograms: [
      { name: "B.Tech Computer Science and Engineering", degree: "Undergraduate", duration: "4 Years", annualFee: 335000, seats: 240 },
      { name: "MBBS (Kasturba Medical College)", degree: "Undergraduate", duration: "5.5 Years", annualFee: 1450000, seats: 250 },
    ],
    source: "seed",
  },
  {
    id: "nlsiu-bangalore",
    name: "National Law School of India University",
    shortName: "NLSIU Bangalore",
    location: "Nagarbhavi, Bengaluru, Karnataka, India",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    established: 1987,
    type: "State University / Premier National Law University",
    category: "Law",
    website: "https://www.nls.ac.in",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/National_Law_School_of_India_University_logo.png/220px-National_Law_School_of_India_University_logo.png",
    overview:
      "NLSIU is India's pioneer National Law University and the benchmark for legal education in South Asia. It revolutionized legal training by introducing the integrated 5-year B.A., LL.B. (Hons.) degree.",
    additionalOverviewDetails: {
      jobPlacementRate: 98,
      averagePackage: "₹18.5 LPA",
      highestPackage: "₹45.0 LPA",
      professorStudentRatio: "1:12",
      academicPrograms: [
        "B.A., LL.B. (Hons.)",
        "LL.M. (Master of Laws)",
        "Master of Public Policy (MPP)",
        "PhD in Law",
      ],
      topRecruiters: [
        "Shardul Amarchand Mangaldas",
        "Cyril Amarchand Mangaldas",
        "AZB & Partners",
        "Khaitan & Co",
        "Trilegal",
        "Linklaters (UK)",
      ],
      financialAid: {
        scholarships: "Need-based financial aid covering up to 100% of fees",
        governmentSchemes: "Eligible for central/state SC/ST/OBC scholarships",
        researchGrants: "Centre for Child and Law & Environmental Law grants",
      },
    },
    rankings: {
      nationalRank: 1,
      rankingBody: "NIRF Law 2024",
      researchScore: 9.6,
      placementRate: 98,
      starRatings: {
        campusLife: 4.7,
        graduationRate: 4.8,
        careerOpportunities: 4.9,
        infrastructure: 4.8,
      },
    },
    facilities: [
      "Sri Narayan Rao Melgiri National Law Library",
      "Moot Court Halls and Dispute Resolution Laboratories",
      "Legal Services Clinic for pro bono community assistance",
    ],
    admissionProcess:
      "Admission via Common Law Admission Test (CLAT).",
    feeRange: "₹3,50,000 / year",
    popularPrograms: [
      { name: "B.A., LL.B. (Hons.)", degree: "Undergraduate Dual", duration: "5 Years", annualFee: 350000, seats: 240 },
      { name: "LL.M. in International Law", degree: "Postgraduate", duration: "1 Year", annualFee: 280000, seats: 100 },
    ],
    source: "seed",
  },
  {
    id: "dtu-delhi",
    name: "Delhi Technological University",
    shortName: "DTU",
    location: "Shahbad Daulatpur, Delhi, India",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    established: 1941,
    type: "State Public University",
    category: "Engineering",
    website: "http://dtu.ac.in",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Delhi_Technological_University_logo.png/220px-Delhi_Technological_University_logo.png",
    overview:
      "Formerly known as Delhi College of Engineering (DCE), DTU is one of India's oldest and most prestigious technical universities, acclaimed for its alumni network, campus culture, and massive placement packages.",
    additionalOverviewDetails: {
      jobPlacementRate: 94,
      averagePackage: "₹16.5 LPA",
      highestPackage: "₹1.2 CPA",
      professorStudentRatio: "1:15",
      academicPrograms: [
        "Computer Engineering",
        "Information Technology",
        "Software Engineering",
        "Electronics & Communication",
        "Mechanical Engineering",
      ],
      topRecruiters: [
        "Amazon",
        "Microsoft",
        "Adobe",
        "Samsung R&D",
        "TCS",
        "Maruti Suzuki",
      ],
      financialAid: {
        scholarships: "Merit scholarships for university toppers and fee waiver for economically weaker students",
        governmentSchemes: "Delhi Government Higher Education and Skill Development Guarantee Scheme",
        researchGrants: "Vice Chancellor research seed grants",
      },
    },
    rankings: {
      nationalRank: 29,
      rankingBody: "NIRF Engineering 2024",
      researchScore: 8.6,
      placementRate: 94,
      starRatings: {
        campusLife: 4.7,
        graduationRate: 4.7,
        careerOpportunities: 4.8,
        infrastructure: 4.6,
      },
    },
    facilities: [
      "164-acre lush green campus",
      "DTU Innovation and Incubation Foundation",
      "High-speed 10 Gbps NKN Campus Network",
      "Open Air Amphitheatre & Sports Complex",
    ],
    admissionProcess:
      "Admission through Joint Admission Counselling (JAC Delhi) based on JEE Main ranks.",
    feeRange: "₹2,10,000 / year",
    popularPrograms: [
      { name: "B.Tech Computer Engineering", degree: "Undergraduate", duration: "4 Years", annualFee: 210000, seats: 480 },
      { name: "B.Tech Software Engineering", degree: "Undergraduate", duration: "4 Years", annualFee: 210000, seats: 180 },
    ],
    source: "seed",
  },
  {
    id: "mit-cambridge",
    name: "Massachusetts Institute of Technology (MIT)",
    shortName: "MIT",
    location: "Cambridge, Massachusetts, United States",
    city: "Cambridge",
    state: "Massachusetts",
    country: "United States",
    established: 1861,
    type: "Private Research University",
    category: "Engineering",
    website: "https://www.mit.edu",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/250px-MIT_logo.svg.png",
    overview:
      "MIT is universally recognized as one of the world's most prestigious science and technology universities, pioneering artificial intelligence, space exploration, nuclear physics, and biotechnology.",
    additionalOverviewDetails: {
      jobPlacementRate: 96,
      averagePackage: "$130,000 / year",
      highestPackage: "$350,000 / year",
      professorStudentRatio: "1:3",
      academicPrograms: [
        "Computer Science and Artificial Intelligence (Course 6)",
        "Mechanical Engineering",
        "Physics",
        "Aeronautics & Astronautics",
        "Economics",
      ],
      topRecruiters: [
        "Google",
        "Apple",
        "NASA / JPL",
        "OpenAI",
        "Goldman Sachs",
        "SpaceX",
      ],
      financialAid: {
        scholarships: "Need-blind admission for all applicants with 100% demonstrated financial need met",
        governmentSchemes: "US Federal Pell grants and MIT full scholarship grants",
        researchGrants: "Undergraduate Research Opportunities Program (UROP)",
      },
    },
    rankings: {
      nationalRank: 1,
      rankingBody: "QS World University Rankings 2025 (#1 Globally)",
      researchScore: 10.0,
      placementRate: 96,
      starRatings: {
        campusLife: 4.8,
        graduationRate: 4.9,
        careerOpportunities: 5.0,
        infrastructure: 5.0,
      },
    },
    facilities: [
      "MIT Media Lab",
      "Computer Science and Artificial Intelligence Laboratory (CSAIL)",
      "MIT Plasma Science and Fusion Center",
      "The Engine (Hard-tech Incubator)",
    ],
    admissionProcess:
      "Holistic admission through MIT Application portal, SAT/ACT, recommendations, and creative portfolio.",
    feeRange: "$60,150 / year tuition",
    popularPrograms: [
      { name: "B.S. in Electrical Engineering and Computer Science", degree: "Undergraduate", duration: "4 Years", annualFee: 5000000, seats: 300 },
    ],
    source: "seed",
  },
  {
    id: "stanford-university",
    name: "Stanford University",
    shortName: "Stanford",
    location: "Stanford, California, United States",
    city: "Stanford",
    state: "California",
    country: "United States",
    established: 1885,
    type: "Private Research University",
    category: "Engineering",
    website: "https://www.stanford.edu",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/220px-Stanford_Cardinal_logo.svg.png",
    overview:
      "Stanford University is located in the heart of California's Silicon Valley. It has fostered the creation of iconic technology companies like Google, HP, Cisco, and Yahoo, maintaining an unmatched reputation for innovation.",
    additionalOverviewDetails: {
      jobPlacementRate: 97,
      averagePackage: "$135,000 / year",
      highestPackage: "$400,000 / year",
      professorStudentRatio: "1:4",
      academicPrograms: [
        "Computer Science",
        "Artificial Intelligence",
        "Bioengineering",
        "MBA (Stanford GSB)",
        "Economics",
      ],
      topRecruiters: ["Apple", "Google", "Meta", "Sequoia Capital", "Nvidia", "McKinsey"],
      financialAid: {
        scholarships: "Full tuition covered for families with income under $150,000",
        governmentSchemes: "Cal Grants, Pell Grants, and Stanford Fellowships",
        researchGrants: "Stanford Undergraduate Research Grants",
      },
    },
    rankings: {
      nationalRank: 2,
      rankingBody: "QS World University Rankings 2025",
      researchScore: 9.9,
      placementRate: 97,
      starRatings: {
        campusLife: 4.9,
        graduationRate: 4.9,
        careerOpportunities: 5.0,
        infrastructure: 5.0,
      },
    },
    facilities: [
      "Stanford AI Lab (SAIL)",
      "SLAC National Accelerator Laboratory",
      "8,180-acre expansive Silicon Valley campus",
      "Cantor Arts Center & Bing Concert Hall",
    ],
    admissionProcess: "Holistic review via Common App, essays, and academic rigor.",
    feeRange: "$62,484 / year tuition",
    popularPrograms: [
      { name: "B.S. in Computer Science", degree: "Undergraduate", duration: "4 Years", annualFee: 5200000, seats: 280 },
    ],
    source: "seed",
  },
  {
    id: "university-of-oxford",
    name: "University of Oxford",
    shortName: "Oxford",
    location: "Oxford, Oxfordshire, United Kingdom",
    city: "Oxford",
    state: "Oxfordshire",
    country: "United Kingdom",
    established: 1096,
    type: "Collegiate Public Research University",
    category: "Sciences & Arts",
    website: "https://www.ox.ac.uk",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/220px-Oxford-University-Circlet.svg.png",
    overview:
      "The University of Oxford is the oldest university in the English-speaking world. Composed of 39 constituent colleges, it is globally revered for academic rigor, the tutorial teaching system, and producing world leaders.",
    additionalOverviewDetails: {
      jobPlacementRate: 96,
      averagePackage: "£55,000 / year",
      highestPackage: "£180,000 / year",
      professorStudentRatio: "1:3",
      academicPrograms: [
        "Philosophy, Politics and Economics (PPE)",
        "Computer Science",
        "Medicine",
        "Law (Jurisprudence)",
        "Mathematical Sciences",
      ],
      topRecruiters: ["Goldman Sachs", "McKinsey & Co", "UK Civil Service", "NHS", "Google DeepMind"],
      financialAid: {
        scholarships: "Rhodes Scholarships, Clarendon Fund, and Reach Oxford Scholarships",
        governmentSchemes: "UK Student Finance and international grants",
        researchGrants: "Wellcome Trust & Oxford research fellowships",
      },
    },
    rankings: {
      nationalRank: 1,
      rankingBody: "Times Higher Education World #1 (8 consecutive years)",
      researchScore: 10.0,
      placementRate: 96,
      starRatings: {
        campusLife: 4.8,
        graduationRate: 4.9,
        careerOpportunities: 4.9,
        infrastructure: 5.0,
      },
    },
    facilities: [
      "Bodleian Library (one of Europe's oldest reference libraries)",
      "Oxford University Press",
      "Ashmolean Museum of Art and Archaeology",
      "Oxford Botanic Garden",
    ],
    admissionProcess: "UCAS application, entrance tests (MAT, PAT, TSA, LNAT), and tutorial interviews.",
    feeRange: "£9,250 (Home) / £35,000 - £48,000 (International) / year",
    popularPrograms: [
      { name: "BA in Philosophy, Politics and Economics", degree: "Undergraduate", duration: "3 Years", annualFee: 3200000, seats: 240 },
    ],
    source: "seed",
  }
];
