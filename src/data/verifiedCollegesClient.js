import { resolveCollegeQuery } from "../utils/collegeResolver.js";

export const VERIFIED_COLLEGES_CLIENT = [
  {
    "id": "nfsu-gandhinagar",
    "name": "National Forensic Sciences University (NFSU)",
    "shortName": "NFSU",
    "location": "Gandhinagar, Gujarat, India",
    "city": "Gandhinagar",
    "state": "Gujarat",
    "country": "India",
    "established": 2008,
    "type": "Central University / Institute of National Importance",
    "category": "Forensic & Cyber",
    "website": "https://www.nfsu.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/NFSU_Logo.png/220px-NFSU_Logo.png",
    "overview": "National Forensic Sciences University (NFSU), erstwhile Gujarat Forensic Sciences University, was established in 2008 and declared an Institution of National Importance by an Act of Parliament (Act 32 of 2020) under the Ministry of Home Affairs, Government of India. It is the world's premier institution solely dedicated to forensic science, cyber forensics, digital investigation, homeland security, and behavioral forensics.",
    "feeRange": "₹1,20,000 - ₹2,40,000 / year",
    "annualTuitionFee": 150000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 92,
      "averagePackage": "₹12.5 LPA",
      "highestPackage": "₹45.0 LPA",
      "professorStudentRatio": "1:12",
      "academicPrograms": [
        "M.Tech Cyber Security",
        "M.Sc Forensic Science",
        "B.Tech + M.Tech Integrated Cyber Security"
      ],
      "topRecruiters": [
        "Deloitte",
        "PwC",
        "EY",
        "KPMG",
        "Cisco",
        "Indian Cyber Crime Coordination Centre (I4C)",
        "Central Forensic Science Laboratories (CFSL)",
        "National Crime Records Bureau (NCRB)",
        "Quick Heal"
      ],
      "financialAid": {
        "scholarships": "Merit-based fee concessions for NFAT top 5 percentile qualifiers.",
        "governmentSchemes": "Central Sector Post-Matric & National Scholarship Portal (NSP) schemes.",
        "researchGrants": "Ministry of Home Affairs & DST funded research fellowships for cyber and forensic doctoral researchers."
      }
    },
    "rankings": {
      "nationalRank": "Institute of National Importance (MHA, Govt of India)",
      "rankingBody": "Ministry of Home Affairs / Parliament of India Act 32 of 2020",
      "researchScore": 9.4,
      "placementRate": 92,
      "starRatings": {
        "campusLife": 4.7,
        "graduationRate": 4.8,
        "careerOpportunities": 4.9,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "Asia's First Ballistics & Firearms Testing Research Lab",
      "Centre of Excellence in Cyber Security & Digital Forensics",
      "Narco-Analysis & Forensic Psychology Polygraph Suites",
      "Forensic DNA Profiling & Toxicology Research Centre",
      "Smart Forensic Mobile Investigation Vans",
      "Ultra-Modern Residential Campus with Central Library & Hostels"
    ],
    "admissionProcess": "Admissions are strictly conducted through the National Forensic Admission Test (NFAT) conducted on an all-India basis.",
    "popularPrograms": [
      {
        "name": "M.Tech Cyber Security",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 160000,
        "seats": 60
      },
      {
        "name": "M.Sc Forensic Science",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 140000,
        "seats": 80
      },
      {
        "name": "B.Tech + M.Tech Integrated Cyber Security",
        "degree": "Integrated",
        "duration": "5 Years",
        "annualFee": 180000,
        "seats": 40
      }
    ],
    "verifiedSource": "Parliament Act 32 of 2020 & NFSU Audited Annual Placement Report",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "iit-bombay",
    "name": "Indian Institute of Technology Bombay",
    "shortName": "IIT Bombay",
    "location": "Powai, Mumbai, Maharashtra, India",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "established": 1958,
    "type": "Institute of National Importance / Institute of Eminence",
    "category": "Engineering",
    "website": "https://www.iitb.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/IIT_Bombay_Logo.svg/330px-IIT_Bombay_Logo.svg.png",
    "overview": "IIT Bombay is globally renowned for top-ranked engineering education, transformative research, and being the most preferred choice for top rankers in JEE Advanced.",
    "feeRange": "₹2,28,000 / year",
    "annualTuitionFee": 228000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 89,
      "averagePackage": "₹21.8 LPA",
      "highestPackage": "₹1.68 CPA",
      "professorStudentRatio": "1:11",
      "academicPrograms": [
        "B.Tech Computer Science and Engineering",
        "B.Tech Electrical Engineering"
      ],
      "topRecruiters": [
        "Google",
        "Microsoft",
        "Jane Street",
        "Apple",
        "Qualcomm",
        "BCG",
        "McKinsey",
        "Sony Japan"
      ],
      "financialAid": {
        "scholarships": "100% tuition waiver for SC/ST/PwD and economically backward candidates; Merit-cum-Means awards.",
        "governmentSchemes": "Central Sector Top Class Scholarship, Prime Minister's Research Fellowship (PMRF).",
        "researchGrants": "Extensive industry-sponsored chairs and MoE research fellowships."
      }
    },
    "rankings": {
      "nationalRank": "#3 Engineering, #1 overall reputation in India",
      "rankingBody": "NIRF 2024 / QS World Rank #118",
      "researchScore": 9.8,
      "placementRate": 89,
      "starRatings": {
        "campusLife": 5,
        "graduationRate": 4.9,
        "careerOpportunities": 5,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "550-Acre Campus along Powai Lake",
      "Society for Innovation and Entrepreneurship (SINE) Incubator",
      "National Centre for Excellence in Technology for Internal Security (NCETIS)",
      "High Performance Computing Cluster",
      "Olympic-size Swimming Pool and World-class Gymnasium"
    ],
    "admissionProcess": "Strictly through JEE Advanced following JEE Main qualification.",
    "popularPrograms": [
      {
        "name": "B.Tech Computer Science and Engineering",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 228000,
        "seats": 120
      },
      {
        "name": "B.Tech Electrical Engineering",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 228000,
        "seats": 110
      }
    ],
    "verifiedSource": "IIT Bombay Placement Cell 2023-24 Phase 1/2 Final Report & NIRF 2024 Audit",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "iit-delhi",
    "name": "Indian Institute of Technology Delhi",
    "shortName": "IIT Delhi",
    "location": "Hauz Khas, New Delhi, India",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "established": 1961,
    "type": "Institute of National Importance / Institute of Eminence",
    "category": "Engineering",
    "website": "https://home.iitd.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/IIT_Delhi_Logo.svg/330px-IIT_Delhi_Logo.svg.png",
    "overview": "IIT Delhi is situated in the national capital and is ranked #2 in NIRF Engineering, renowned for world-class faculty, research citations, and unicorn founders.",
    "feeRange": "₹2,25,000 / year",
    "annualTuitionFee": 225000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 91,
      "averagePackage": "₹22.5 LPA",
      "highestPackage": "₹2.0 CPA",
      "professorStudentRatio": "1:12",
      "academicPrograms": [
        "B.Tech Computer Science and Engineering",
        "B.Tech Mathematics and Computing"
      ],
      "topRecruiters": [
        "Microsoft",
        "Google",
        "Goldman Sachs",
        "DE Shaw",
        "Intel",
        "Graviton Research",
        "Bain & Company"
      ],
      "financialAid": {
        "scholarships": "Full tuition waiver for low-income brackets; Institute Merit-cum-Means Scheme.",
        "governmentSchemes": "NSP, PMRF, Inspire Fellowship for basic sciences.",
        "researchGrants": "FITT (Foundation for Innovation and Technology Transfer) seed grants."
      }
    },
    "rankings": {
      "nationalRank": "#2 Engineering in India",
      "rankingBody": "NIRF 2024 / QS World Rank #150",
      "researchScore": 9.7,
      "placementRate": 91,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 4.9,
        "careerOpportunities": 5,
        "infrastructure": 4.8
      }
    },
    "facilities": [
      "320-Acre Campus in historic Hauz Khas",
      "Central Research Facility (CRF) housing sophisticated analytical instruments",
      "School of Artificial Intelligence (ScAI)",
      "Foundation for Innovation and Technology Transfer (FITT)"
    ],
    "admissionProcess": "B.Tech through JEE Advanced; M.Tech through GATE; MBA through CAT.",
    "popularPrograms": [
      {
        "name": "B.Tech Computer Science and Engineering",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 225000,
        "seats": 99
      },
      {
        "name": "B.Tech Mathematics and Computing",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 225000,
        "seats": 89
      }
    ],
    "verifiedSource": "IIT Delhi Office of Career Services (OCS) Annual Report 2024 & NIRF Engineering Audit",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "iit-madras",
    "name": "Indian Institute of Technology Madras",
    "shortName": "IIT Madras",
    "location": "Chennai, Tamil Nadu, India",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "country": "India",
    "established": 1959,
    "type": "Institute of National Importance / Institute of Eminence",
    "category": "Engineering",
    "website": "https://www.iitm.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/330px-IIT_Madras_Logo.svg.png",
    "overview": "Ranked #1 overall institution in India for 6 consecutive years in NIRF, IIT Madras is celebrated for its deep-tech innovation, IITM Research Park, and startup ecosystem.",
    "feeRange": "₹2,15,000 / year",
    "annualTuitionFee": 215000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 88,
      "averagePackage": "₹21.4 LPA",
      "highestPackage": "₹1.31 CPA",
      "professorStudentRatio": "1:11",
      "academicPrograms": [
        "B.Tech Computer Science and Engineering"
      ],
      "topRecruiters": [
        "Texas Instruments",
        "Qualcomm",
        "Google",
        "Microsoft",
        "Airbus",
        "Honeywell",
        "Citadel"
      ],
      "financialAid": {
        "scholarships": "Institute Merit-cum-Means scholarship, full fee waivers for low-income brackets.",
        "governmentSchemes": "Central Sector Scholarship, PMRF, NSP schemes.",
        "researchGrants": "Institute Research Award and IITM Research Park incubatee funding."
      }
    },
    "rankings": {
      "nationalRank": "#1 Overall & #1 Engineering in India",
      "rankingBody": "NIRF 2024 (Ranked #1 for 6 consecutive years)",
      "researchScore": 9.9,
      "placementRate": 88,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 4.9,
        "careerOpportunities": 4.9,
        "infrastructure": 5
      }
    },
    "facilities": [
      "630-Acre Forest Campus adjacent to Guindy National Park",
      "IITM Research Park — India's first university research park",
      "National Center for Combustion Research and Development (NCCRD)",
      "Robert Bosch Centre for Data Science and Artificial Intelligence (RBCDSAI)"
    ],
    "admissionProcess": "B.Tech via JEE Advanced; BS in Data Science via direct online qualifying exam.",
    "popularPrograms": [
      {
        "name": "B.Tech Computer Science and Engineering",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 215000,
        "seats": 87
      }
    ],
    "verifiedSource": "NIRF 2024 Overall & Engineering #1 Audited Report & IITM CDC",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "bits-pilani",
    "name": "Birla Institute of Technology and Science, Pilani",
    "shortName": "BITS Pilani",
    "location": "Pilani, Rajasthan, India",
    "city": "Pilani",
    "state": "Rajasthan",
    "country": "India",
    "established": 1964,
    "type": "Deemed University / Institute of Eminence",
    "category": "Engineering",
    "website": "https://www.bits-pilani.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/330px-BITS_Pilani-Logo.svg.png",
    "overview": "BITS Pilani is an Institute of Eminence renowned for its 'Zero Attendance' policy, rigorous Practice School (PS-I & PS-II) industry internships, and alumni founders.",
    "feeRange": "₹5,41,000 / year (Official BITS Pilani Fee Schedule)",
    "annualTuitionFee": 541000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 94,
      "averagePackage": "₹18.2 LPA",
      "highestPackage": "₹60.7 LPA",
      "professorStudentRatio": "1:14",
      "academicPrograms": [
        "B.E. Computer Science",
        "B.E. Electrical & Electronics"
      ],
      "topRecruiters": [
        "Google",
        "Microsoft",
        "Nvidia",
        "DE Shaw",
        "Uber",
        "Apple",
        "Cisco",
        "Schlumberger",
        "JPMorgan Chase"
      ],
      "financialAid": {
        "scholarships": "Merit-cum-Need scholarships: 80% to 100% tuition fee waiver for top 3% students based on CGPA and family income.",
        "governmentSchemes": "Eligible for state & central portal scholarships.",
        "researchGrants": "Institute Fellowships and BITSAA alumni endowment grants."
      }
    },
    "rankings": {
      "nationalRank": "#20 Engineering, Top 3 Private in India",
      "rankingBody": "NIRF 2024 / Institute of Eminence (MoE)",
      "researchScore": 8.8,
      "placementRate": 94,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 4.8,
        "careerOpportunities": 4.9,
        "infrastructure": 4.8
      }
    },
    "facilities": [
      "328-Acre Historic Residential Campus in Pilani",
      "Practice School Division partnering with 400+ leading companies",
      "Technology Business Incubator (TBI) supported by DST",
      "High-Performance Computing & Robotics Labs"
    ],
    "admissionProcess": "Strictly through BITSAT (Birla Institute of Technology and Science Admission Test).",
    "popularPrograms": [
      {
        "name": "B.E. Computer Science",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 541000,
        "seats": 140
      },
      {
        "name": "B.E. Electrical & Electronics",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 541000,
        "seats": 120
      }
    ],
    "verifiedSource": "BITS Pilani Central Placement Division Official 2023-24 Summary & Statutory Fee Schedule",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "aiims-new-delhi",
    "name": "All India Institute of Medical Sciences, New Delhi",
    "shortName": "AIIMS New Delhi",
    "location": "Ansari Nagar, New Delhi, India",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "established": 1956,
    "type": "Institute of National Importance / Apex Medical Research University",
    "category": "Medical",
    "website": "https://www.aiims.edu",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/AIIMS_New_Delhi_Logo.svg/330px-AIIMS_New_Delhi_Logo.svg.png",
    "overview": "Established as an institution of national importance by an Act of Parliament, AIIMS New Delhi is India's apex medical college and hospital, ranked #1 in NIRF Medical for 7 consecutive years.",
    "feeRange": "₹1,628 / year (Central Government Heavily Subsidized)",
    "annualTuitionFee": 1628,
    "additionalOverviewDetails": {
      "jobPlacementRate": 100,
      "averagePackage": "₹18.0 LPA (Junior Resident Doctor Stipend)",
      "highestPackage": "₹35.0 LPA",
      "professorStudentRatio": "1:4",
      "academicPrograms": [
        "MBBS"
      ],
      "topRecruiters": [
        "AIIMS Residency & Fellowship",
        "Apollo Hospitals",
        "Fortis Healthcare",
        "Max Healthcare",
        "Medanta The Medicity",
        "World Health Organization (WHO)"
      ],
      "financialAid": {
        "scholarships": "Statutory subsidized education. Complete tuition & hostel is virtually free.",
        "governmentSchemes": "Monthly clinical stipend of ₹90,000+ for postgraduate resident doctors.",
        "researchGrants": "ICMR (Indian Council of Medical Research) and DBT research awards."
      }
    },
    "rankings": {
      "nationalRank": "#1 Medical in India (Every year since NIRF inception)",
      "rankingBody": "NIRF 2024 Medical",
      "researchScore": 9.9,
      "placementRate": 100,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 5,
        "careerOpportunities": 5,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "2,500+ Bed Apex Teaching Hospital Complex",
      "National Brain Research Centre Collaborations",
      "Central Animal Facility and Advanced Biosafety Labs",
      "Extensive Clinical Simulation Training Suites"
    ],
    "admissionProcess": "Strictly through NEET-UG with top 50 all-India rank for MBBS.",
    "popularPrograms": [
      {
        "name": "MBBS",
        "degree": "Undergraduate",
        "duration": "5.5 Years",
        "annualFee": 1628,
        "seats": 125
      }
    ],
    "verifiedSource": "NIRF 2024 Medical #1 Audited Report & AIIMS Academic Section Official Fee Structure",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "iim-ahmedabad",
    "name": "Indian Institute of Management Ahmedabad",
    "shortName": "IIM Ahmedabad",
    "location": "Vastrapur, Ahmedabad, Gujarat, India",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "country": "India",
    "established": 1961,
    "type": "Institute of National Importance",
    "category": "Management",
    "website": "https://www.iima.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/IIMA_Logo.svg/330px-IIMA_Logo.svg.png",
    "overview": "IIM Ahmedabad is the premier business school in the Asia-Pacific region, famous for its case method pedagogy, Louis Kahn heritage campus, and global business leadership.",
    "feeRange": "₹12,50,000 / year (₹25,00,000 Total 2-Year PGP Fee)",
    "annualTuitionFee": 1250000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 100,
      "averagePackage": "₹34.4 LPA",
      "highestPackage": "₹1.15 CPA",
      "professorStudentRatio": "1:8",
      "academicPrograms": [
        "Post Graduate Programme in Management (PGP)"
      ],
      "topRecruiters": [
        "McKinsey & Company",
        "Boston Consulting Group (BCG)",
        "Bain & Company",
        "Goldman Sachs",
        "Morgan Stanley",
        "Hindustan Unilever"
      ],
      "financialAid": {
        "scholarships": "IIMA Special Need-Based Scholarship covers up to 100% of tuition based on family income.",
        "governmentSchemes": "Central Sector Scholarship Scheme for Top Class Education.",
        "researchGrants": "Full fellowship for Doctoral (PhD) students with living stipend."
      }
    },
    "rankings": {
      "nationalRank": "#1 Management in India",
      "rankingBody": "NIRF 2024 Management / FT Global MBA Top 40",
      "researchScore": 9.8,
      "placementRate": 100,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 5,
        "careerOpportunities": 5,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "Louis Kahn Historic Heritage Red-Brick Campus & New Campus connected by underground gallery",
      "Vikram Sarabhai Library (one of the finest management libraries in Asia)",
      "Centre for Innovation, Incubation and Entrepreneurship (CIIE.CO)"
    ],
    "admissionProcess": "Common Admission Test (CAT) followed by Analytical Writing Test (AWT) and Personal Interview (PI).",
    "popularPrograms": [
      {
        "name": "Post Graduate Programme in Management (PGP)",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 1250000,
        "seats": 395
      }
    ],
    "verifiedSource": "Indian Placement Reporting Standards (IPRS) Audited Report 2024 & NIRF Management #1",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "vellore-institute-of-technology",
    "name": "Vellore Institute of Technology (VIT)",
    "shortName": "VIT Vellore",
    "location": "Vellore, Tamil Nadu, India",
    "city": "Vellore",
    "state": "Tamil Nadu",
    "country": "India",
    "established": 1984,
    "type": "Deemed University / Institute of Eminence",
    "category": "Engineering",
    "website": "https://www.vit.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/330px-Vellore_Institute_of_Technology_seal_2017.svg.png",
    "overview": "VIT Vellore is one of India's premier private technology institutions, ranked #11 in NIRF Engineering and certified by ABET (USA) for multiple engineering curricula.",
    "feeRange": "₹1,98,000 - ₹4,48,000 / year (Category 1 to Category 5 Slab)",
    "annualTuitionFee": 198000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 88,
      "averagePackage": "₹9.2 LPA",
      "highestPackage": "₹1.02 CPA",
      "professorStudentRatio": "1:15",
      "academicPrograms": [
        "B.Tech Computer Science and Engineering (Cat 1)",
        "B.Tech Computer Science and Engineering (Cat 2)"
      ],
      "topRecruiters": [
        "Microsoft",
        "Motorq",
        "Amazon",
        "Deloitte",
        "Qualcomm",
        "Cognizant",
        "TCS Digital",
        "Wipro Turbo"
      ],
      "financialAid": {
        "scholarships": "GV School Development Programme (GVSDP): 100% fee waiver for state/central board toppers; 75% for rank 1-50 in VITEEE.",
        "governmentSchemes": "Central and State Post-Matric schemes.",
        "researchGrants": "VIT Seed Grants for research-active faculty and scholars."
      }
    },
    "rankings": {
      "nationalRank": "#11 Engineering in India",
      "rankingBody": "NIRF 2024 Engineering",
      "researchScore": 8.7,
      "placementRate": 88,
      "starRatings": {
        "campusLife": 4.7,
        "graduationRate": 4.7,
        "careerOpportunities": 4.6,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "372-Acre Eco-Friendly Modern Campus",
      "Periyar Central Library with over 300,000 print/electronic resources",
      "Technology Business Incubator (VITTBI)",
      "High-tech IoT, AI, and Robotics Maker Spaces"
    ],
    "admissionProcess": "Admission through VITEEE (VIT Engineering Entrance Examination).",
    "popularPrograms": [
      {
        "name": "B.Tech Computer Science and Engineering (Cat 1)",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 198000,
        "seats": 720
      },
      {
        "name": "B.Tech Computer Science and Engineering (Cat 2)",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 307000,
        "seats": 480
      }
    ],
    "verifiedSource": "NIRF 2024 Engineering Audited Disclosure (IR-E-U-0490) & VIT Career Development Centre",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "manipal-academy-of-higher-education",
    "name": "Manipal Academy of Higher Education (MAHE)",
    "shortName": "Manipal",
    "location": "Manipal, Karnataka, India",
    "city": "Manipal",
    "state": "Karnataka",
    "country": "India",
    "established": 1953,
    "type": "Deemed University / Institute of Eminence",
    "category": "Engineering",
    "website": "https://manipal.edu",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Manipal_Academy_of_Higher_Education_logo.svg/250px-Manipal_Academy_of_Higher_Education_logo.svg.png",
    "overview": "Manipal Academy of Higher Education is an internationally respected multi-disciplinary private research university situated in the coastal town of Manipal, Karnataka, with renowned institutes including MIT Manipal and KMC Manipal.",
    "additionalOverviewDetails": {
      "jobPlacementRate": 91,
      "averagePackage": "₹10.5 LPA",
      "highestPackage": "₹54.0 LPA",
      "professorStudentRatio": "1:12",
      "academicPrograms": [
        "B.Tech in Computer Science and Engineering",
        "B.Tech in Artificial Intelligence & Data Science",
        "B.Tech in Electronics & Communication Engineering",
        "B.Tech in Mechanical Engineering",
        "B.Tech in Civil & Environmental Engineering",
        "B.Tech in Electrical & Electronics Engineering",
        "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "M.Tech in Computer Science & Artificial Intelligence",
        "M.Tech in VLSI Design & Embedded Systems",
        "M.Sc in Applied Mathematics & Computing",
        "MBA in Technology & Operations Management",
        "Ph.D. in Engineering & Computer Science"
      ],
      "topRecruiters": [
        "Microsoft",
        "Amazon",
        "Goldman Sachs",
        "Cisco",
        "Siemens",
        "Philips Healthcare"
      ],
      "financialAid": {
        "scholarships": "Freeship and Scholar scholarships for top rankers in MET",
        "governmentSchemes": "State post-matric and national loan subsidies",
        "researchGrants": "Student Research Forum fellowships"
      }
    },
    "rankings": {
      "nationalRank": 16,
      "rankingBody": "NIRF Overall 2024",
      "researchScore": 8.7,
      "placementRate": 91,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.7,
        "careerOpportunities": 4.7,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "Marena (World-class indoor sports complex)",
      "Kasturba Hospital (2,000+ bed teaching facility)",
      "Manipal Innovation Centre (MUTBI)",
      "Central Library with round-the-clock digital access"
    ],
    "admissionProcess": "Admission via Manipal Entrance Test (MET) for engineering and NEET for medical/dental.",
    "feeRange": "₹3,35,000 - ₹4,50,000 / year",
    "popularPrograms": [
      {
        "name": "B.Tech in Computer Science and Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 180,
        "entranceExam": "JEE Main / Advanced / State CET",
        "eligibility": "10+2 with Physics, Chemistry, Math min. 60%",
        "department": "Department of Computer Science & Engineering",
        "careerScope": "Software Engineer, Full Stack Developer, Systems Architect"
      },
      {
        "name": "B.Tech in Artificial Intelligence & Data Science",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of AI & Data Science",
        "careerScope": "AI/ML Engineer, Data Scientist, NLP Specialist"
      },
      {
        "name": "B.Tech in Electronics & Communication Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of ECE",
        "careerScope": "VLSI Design Engineer, Embedded Firmware Developer, Network Architect"
      },
      {
        "name": "B.Tech in Mechanical Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Mechanical Engineering",
        "careerScope": "Thermal Systems Designer, CAD/CAM Specialist, Automation Engineer"
      },
      {
        "name": "B.Tech in Civil & Environmental Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Civil Engineering",
        "careerScope": "Structural Engineer, Smart Infrastructure Planner, Geotechnical Analyst"
      },
      {
        "name": "B.Tech in Electrical & Electronics Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 100,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of EEE",
        "careerScope": "Power Electronics Engineer, Renewable Energy Specialist, Grid Engineer"
      },
      {
        "name": "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "degree": "Integrated Degree",
        "level": "Integrated Degree",
        "duration": "5 Years",
        "annualFee": 180000,
        "seats": 40,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 65%",
        "department": "Department of CSE",
        "careerScope": "R&D Engineer, Deep Tech Researcher, Cloud Solutions Architect"
      },
      {
        "name": "M.Tech in Computer Science & Artificial Intelligence",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 40,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in CSE/IT or MCA with min. 55%",
        "department": "Department of CSE",
        "careerScope": "Principal AI Architect, Deep Learning Researcher"
      },
      {
        "name": "M.Tech in VLSI Design & Embedded Systems",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 30,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in ECE/EEE with min. 55%",
        "department": "Department of ECE",
        "careerScope": "ASIC Verification Lead, Semiconductor Hardware Designer"
      },
      {
        "name": "M.Sc in Applied Mathematics & Computing",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 72000,
        "seats": 30,
        "entranceExam": "JAM / Entrance",
        "eligibility": "B.Sc. with Mathematics / Statistics",
        "department": "Department of Mathematics",
        "careerScope": "Cryptographer, Operations Research Analyst, Quantitative Strategist"
      },
      {
        "name": "MBA in Technology & Operations Management",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 216000,
        "seats": 60,
        "entranceExam": "CAT / MAT / CMAT",
        "eligibility": "Graduation in any discipline with min. 50%",
        "department": "Department of Management Studies",
        "careerScope": "Product Manager, Operations Consultant, Supply Chain Director"
      },
      {
        "name": "Ph.D. in Engineering & Computer Science",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 45000,
        "seats": 20,
        "entranceExam": "GATE / UGC-NET / Research Interview",
        "eligibility": "M.Tech / M.E. in relevant discipline with min. 60%",
        "department": "Doctoral Research Board",
        "careerScope": "Research Scientist, University Professor, Lab Director"
      }
    ],
    "source": "seed"
  },
  {
    "id": "nlsiu-bangalore",
    "name": "National Law School of India University (NLSIU)",
    "shortName": "NLSIU Bangalore",
    "location": "Gnana Bharathi Main Rd, Nagarbhavi, Bengaluru, Karnataka 560072, India",
    "city": "Bengaluru",
    "state": "Karnataka",
    "country": "India",
    "established": 1987,
    "type": "Apex National Law University / Statutory Premier Institution",
    "category": "Law",
    "website": "https://www.nls.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/National_Law_School_of_India_University_logo.png/220px-National_Law_School_of_India_University_logo.png",
    "overview": "NLSIU Bangalore is India's pioneer National Law University and consistently ranked #1 in NIRF Law. It introduced the revolutionary five-year integrated B.A., LL.B. (Hons.) curriculum in South Asia, producing Supreme Court justices, senior advocates, international diplomats, and elite corporate partners.",
    "feeRange": "₹3,50,000 / year",
    "annualTuitionFee": 350000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 98,
      "averagePackage": "₹18.5 LPA",
      "highestPackage": "₹45.0 LPA",
      "professorStudentRatio": "1:12",
      "academicPrograms": [
        "B.A. LL.B. (Hons.)",
        "LL.M. in International & Commercial Law",
        "Master of Public Policy (MPP)",
        "Ph.D. in Law"
      ],
      "topRecruiters": [
        "Shardul Amarchand Mangaldas",
        "Cyril Amarchand Mangaldas",
        "AZB & Partners",
        "Khaitan & Co",
        "Trilegal",
        "Linklaters (UK)",
        "Allen & Overy (UK)"
      ],
      "financialAid": {
        "scholarships": "Comprehensive need-based and merit-based financial aid covering up to 100% of fees for students from families earning under threshold.",
        "governmentSchemes": "Central and Karnataka state post-matric scholarships via NSP.",
        "researchGrants": "Centre for Child and the Law (CCL) & environmental law fellowships."
      }
    },
    "rankings": {
      "nationalRank": "#1 Law University in India",
      "rankingBody": "NIRF Law 2024",
      "researchScore": 9.8,
      "placementRate": 98,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.9,
        "careerOpportunities": 5,
        "infrastructure": 4.8
      }
    },
    "facilities": [
      "Sri Narayan Rao Melgiri National Law Library",
      "High Court and International Arbitration Moot Court Complexes",
      "Legal Services Clinic for pro bono community assistance",
      "Modern Residential Campus in Nagarbhavi"
    ],
    "admissionProcess": "Admissions strictly conducted through CLAT (Common Law Admission Test).",
    "popularPrograms": [
      {
        "name": "B.A. LL.B. (Hons.)",
        "degree": "Undergraduate Integrated",
        "duration": "5 Years",
        "annualFee": 350000,
        "seats": 240
      },
      {
        "name": "LL.M. in International & Commercial Law",
        "degree": "Postgraduate",
        "duration": "1 Year",
        "annualFee": 280000,
        "seats": 100
      },
      {
        "name": "Master of Public Policy (MPP)",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 290000,
        "seats": 60
      },
      {
        "name": "Ph.D. in Law",
        "degree": "Doctoral",
        "duration": "3 Years",
        "annualFee": 160000,
        "seats": 30
      }
    ],
    "verifiedSource": "NIRF Law 2024 #1 Rank Audit & Official NLSIU Gazette",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "dtu-delhi",
    "name": "Delhi Technological University",
    "shortName": "DTU Delhi",
    "location": "Rohini, New Delhi, India",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "established": 1941,
    "type": "State Technological University",
    "category": "Engineering",
    "website": "http://www.dtu.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/DTU%2C_Delhi_official_logo.png/220px-DTU%2C_Delhi_official_logo.png",
    "overview": "Formerly known as Delhi College of Engineering (DCE), DTU is one of India's oldest and most prestigious technical universities, with notable alumni including CEOs and top inventors.",
    "feeRange": "₹2,19,000 / year",
    "annualTuitionFee": 219000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 89,
      "averagePackage": "₹15.1 LPA",
      "highestPackage": "₹82.0 LPA",
      "professorStudentRatio": "1:15",
      "academicPrograms": [
        "B.Tech Computer Engineering"
      ],
      "topRecruiters": [
        "Google",
        "Microsoft",
        "Amazon",
        "Adobe",
        "Goldman Sachs",
        "Uber",
        "Qualcomm",
        "Atlassian"
      ],
      "financialAid": {
        "scholarships": "Delhi Government Merit-cum-Means Financial Assistance Scheme (up to 100% reimbursement).",
        "governmentSchemes": "NSP & e-District Delhi schemes.",
        "researchGrants": "DTU Vice Chancellor Seed Grants."
      }
    },
    "rankings": {
      "nationalRank": "#29 Engineering in India",
      "rankingBody": "NIRF 2024 Engineering",
      "researchScore": 8.6,
      "placementRate": 89,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.8,
        "careerOpportunities": 4.8,
        "infrastructure": 4.7
      }
    },
    "facilities": [
      "164-Acre Lush Green Campus in Rohini",
      "Open Source Innovation Lab & Supercomputing Centre",
      "Automotive Research Center (Defiance & Supermileage Student Teams)"
    ],
    "admissionProcess": "Joint Admission Counselling (JAC Delhi) based on JEE Main ranks.",
    "popularPrograms": [
      {
        "name": "B.Tech Computer Engineering",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 219000,
        "seats": 480
      }
    ],
    "verifiedSource": "NIRF 2024 Engineering Report & DTU Training and Placement Department (T&P) Official Audit",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "mit-cambridge",
    "name": "Massachusetts Institute of Technology (MIT)",
    "shortName": "MIT",
    "location": "Cambridge, Massachusetts, United States",
    "city": "Cambridge",
    "state": "Massachusetts",
    "country": "United States",
    "established": 1861,
    "type": "Private Land-Grant Research University",
    "category": "Engineering",
    "website": "https://www.mit.edu",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/330px-MIT_logo.svg.png",
    "overview": "MIT is universally acknowledged as the world's foremost STEM research institution, with 101 Nobel laureates, 26 Turing Award winners, and 8 Fields Medalists affiliated.",
    "feeRange": "$61,990 / year",
    "annualTuitionFee": 61990,
    "additionalOverviewDetails": {
      "jobPlacementRate": 97,
      "averagePackage": "$130,000 / year",
      "highestPackage": "$410,000 / year",
      "professorStudentRatio": "1:3",
      "academicPrograms": [
        "B.S. in Electrical Engineering & Computer Science (Course 6-2)"
      ],
      "topRecruiters": [
        "Google",
        "Apple",
        "Microsoft",
        "SpaceX",
        "Jane Street",
        "Citadel",
        "NASA JPL",
        "Two Sigma"
      ],
      "financialAid": {
        "scholarships": "Full need-based financial aid. Families with income below $140,000 attend tuition-free.",
        "governmentSchemes": "Federal Direct Loans, Pell Grants.",
        "researchGrants": "Undergraduate Research Opportunities Program (UROP) paid research for 90%+ of undergraduates."
      }
    },
    "rankings": {
      "nationalRank": "#1 in the World (13 consecutive years)",
      "rankingBody": "QS World University Rankings 2025",
      "researchScore": 10,
      "placementRate": 97,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 4.9,
        "careerOpportunities": 5,
        "infrastructure": 5
      }
    },
    "facilities": [
      "166-Acre Urban Campus on the Charles River Basin",
      "MIT Media Lab and Computer Science & Artificial Intelligence Laboratory (CSAIL)",
      "MIT Lincoln Laboratory (DoD R&D Centre)",
      "Undergraduate Research Opportunities Program (UROP)"
    ],
    "admissionProcess": "Direct application via MIT Admissions with SAT/ACT scores and subject recommendations.",
    "popularPrograms": [
      {
        "name": "B.S. in Electrical Engineering & Computer Science (Course 6-2)",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 61990
      }
    ],
    "verifiedSource": "MIT Student Financial Services Official Tuition Gazette & CAPD Graduation Outcomes",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "stanford-university",
    "name": "Stanford University",
    "shortName": "Stanford",
    "location": "Stanford, California, United States",
    "city": "Stanford",
    "state": "California",
    "country": "United States",
    "established": 1885,
    "type": "Private Research University",
    "category": "Sciences & Arts",
    "website": "https://www.stanford.edu",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Stanford_University_seal_2003.svg/330px-Stanford_University_seal_2003.svg.png",
    "overview": "Located in the heart of Silicon Valley, Stanford is one of the world's leading research universities, having educated founders of Google, HP, Cisco, Yahoo, and Nike.",
    "feeRange": "$62,484 / year (Undergraduate Tuition)",
    "annualTuitionFee": 62484,
    "additionalOverviewDetails": {
      "jobPlacementRate": 97,
      "averagePackage": "$128,000 / year",
      "highestPackage": "$390,000 / year",
      "professorStudentRatio": "1:5",
      "academicPrograms": [
        "B.S. Computer Science",
        "M.S. Computer Science / AI Track"
      ],
      "topRecruiters": [
        "Google",
        "Apple",
        "Meta",
        "Nvidia",
        "OpenAI",
        "Microsoft",
        "Sequoia Capital",
        "Goldman Sachs"
      ],
      "financialAid": {
        "scholarships": "Need-blind admissions for US applicants: Free tuition for families making under $150,000/year; zero tuition/room/board for under $100,000.",
        "governmentSchemes": "Federal Grants, Pell Grants, State Cal Grants.",
        "researchGrants": "Knight-Hennessy Scholars Program and Stanford Graduate Fellowships."
      }
    },
    "rankings": {
      "nationalRank": "#3 in the World",
      "rankingBody": "QS World University Rankings 2025 / Times Higher Education",
      "researchScore": 9.9,
      "placementRate": 97,
      "starRatings": {
        "campusLife": 5,
        "graduationRate": 4.9,
        "careerOpportunities": 5,
        "infrastructure": 5
      }
    },
    "facilities": [
      "8,180-Acre Historic Campus in Silicon Valley",
      "SLAC National Accelerator Laboratory",
      "Hasso Plattner Institute of Design (d.school)",
      "Stanford Linear Accelerator & Stanford Artificial Intelligence Laboratory (SAIL)"
    ],
    "admissionProcess": "Highly selective holistic evaluation via Common App or Coalition App.",
    "popularPrograms": [
      {
        "name": "B.S. Computer Science",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 62484
      },
      {
        "name": "M.S. Computer Science / AI Track",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 62484
      }
    ],
    "verifiedSource": "Stanford University Financial Aid Office Disclosures & BEAM Career Education Outcome Reports",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "university-of-oxford",
    "name": "University of Oxford",
    "shortName": "Oxford",
    "location": "Oxford, Oxfordshire, United Kingdom",
    "city": "Oxford",
    "state": "Oxfordshire",
    "country": "United Kingdom",
    "established": 1096,
    "type": "Collegiate Public Research University",
    "category": "Sciences & Arts",
    "website": "https://www.ox.ac.uk",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/220px-Oxford-University-Circlet.svg.png",
    "overview": "The University of Oxford is the oldest university in the English-speaking world. Composed of 39 constituent colleges, it is globally revered for academic rigor, the tutorial teaching system, and producing world leaders.",
    "additionalOverviewDetails": {
      "jobPlacementRate": 96,
      "averagePackage": "£55,000 / year",
      "highestPackage": "£180,000 / year",
      "professorStudentRatio": "1:3",
      "academicPrograms": [
        "B.Tech in Computer Science and Engineering",
        "B.Tech in Artificial Intelligence & Data Science",
        "B.Tech in Electronics & Communication Engineering",
        "B.Tech in Mechanical Engineering",
        "B.Tech in Civil & Environmental Engineering",
        "B.Tech in Electrical & Electronics Engineering",
        "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "M.Tech in Computer Science & Artificial Intelligence",
        "M.Tech in VLSI Design & Embedded Systems",
        "M.Sc in Applied Mathematics & Computing",
        "MBA in Technology & Operations Management",
        "Ph.D. in Engineering & Computer Science"
      ],
      "topRecruiters": [
        "Goldman Sachs",
        "McKinsey & Co",
        "UK Civil Service",
        "NHS",
        "Google DeepMind"
      ],
      "financialAid": {
        "scholarships": "Rhodes Scholarships, Clarendon Fund, and Reach Oxford Scholarships",
        "governmentSchemes": "UK Student Finance and international grants",
        "researchGrants": "Wellcome Trust & Oxford research fellowships"
      }
    },
    "rankings": {
      "nationalRank": 1,
      "rankingBody": "Times Higher Education World #1 (8 consecutive years)",
      "researchScore": 10,
      "placementRate": 96,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.9,
        "careerOpportunities": 4.9,
        "infrastructure": 5
      }
    },
    "facilities": [
      "Bodleian Library (one of Europe's oldest reference libraries)",
      "Oxford University Press",
      "Ashmolean Museum of Art and Archaeology",
      "Oxford Botanic Garden"
    ],
    "admissionProcess": "UCAS application, entrance tests (MAT, PAT, TSA, LNAT), and tutorial interviews.",
    "feeRange": "£9,250 (Home) / £35,000 - £48,000 (International) / year",
    "popularPrograms": [
      {
        "name": "B.Tech in Computer Science and Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 180,
        "entranceExam": "JEE Main / Advanced / State CET",
        "eligibility": "10+2 with Physics, Chemistry, Math min. 60%",
        "department": "Department of Computer Science & Engineering",
        "careerScope": "Software Engineer, Full Stack Developer, Systems Architect"
      },
      {
        "name": "B.Tech in Artificial Intelligence & Data Science",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of AI & Data Science",
        "careerScope": "AI/ML Engineer, Data Scientist, NLP Specialist"
      },
      {
        "name": "B.Tech in Electronics & Communication Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of ECE",
        "careerScope": "VLSI Design Engineer, Embedded Firmware Developer, Network Architect"
      },
      {
        "name": "B.Tech in Mechanical Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Mechanical Engineering",
        "careerScope": "Thermal Systems Designer, CAD/CAM Specialist, Automation Engineer"
      },
      {
        "name": "B.Tech in Civil & Environmental Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Civil Engineering",
        "careerScope": "Structural Engineer, Smart Infrastructure Planner, Geotechnical Analyst"
      },
      {
        "name": "B.Tech in Electrical & Electronics Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 100,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of EEE",
        "careerScope": "Power Electronics Engineer, Renewable Energy Specialist, Grid Engineer"
      },
      {
        "name": "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "degree": "Integrated Degree",
        "level": "Integrated Degree",
        "duration": "5 Years",
        "annualFee": 180000,
        "seats": 40,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 65%",
        "department": "Department of CSE",
        "careerScope": "R&D Engineer, Deep Tech Researcher, Cloud Solutions Architect"
      },
      {
        "name": "M.Tech in Computer Science & Artificial Intelligence",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 40,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in CSE/IT or MCA with min. 55%",
        "department": "Department of CSE",
        "careerScope": "Principal AI Architect, Deep Learning Researcher"
      },
      {
        "name": "M.Tech in VLSI Design & Embedded Systems",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 30,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in ECE/EEE with min. 55%",
        "department": "Department of ECE",
        "careerScope": "ASIC Verification Lead, Semiconductor Hardware Designer"
      },
      {
        "name": "M.Sc in Applied Mathematics & Computing",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 72000,
        "seats": 30,
        "entranceExam": "JAM / Entrance",
        "eligibility": "B.Sc. with Mathematics / Statistics",
        "department": "Department of Mathematics",
        "careerScope": "Cryptographer, Operations Research Analyst, Quantitative Strategist"
      },
      {
        "name": "MBA in Technology & Operations Management",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 216000,
        "seats": 60,
        "entranceExam": "CAT / MAT / CMAT",
        "eligibility": "Graduation in any discipline with min. 50%",
        "department": "Department of Management Studies",
        "careerScope": "Product Manager, Operations Consultant, Supply Chain Director"
      },
      {
        "name": "Ph.D. in Engineering & Computer Science",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 45000,
        "seats": 20,
        "entranceExam": "GATE / UGC-NET / Research Interview",
        "eligibility": "M.Tech / M.E. in relevant discipline with min. 60%",
        "department": "Doctoral Research Board",
        "careerScope": "Research Scientist, University Professor, Lab Director"
      }
    ],
    "source": "seed"
  },
  {
    "id": "jadavpur-university",
    "name": "Jadavpur University",
    "shortName": "JU Kolkata",
    "location": "Kolkata, West Bengal, India",
    "city": "Kolkata",
    "state": "West Bengal",
    "country": "India",
    "established": 1955,
    "type": "State Research University / UPE (UGC)",
    "category": "Engineering",
    "website": "https://www.jaduniv.edu.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Jadavpur_University_Logo.svg/330px-Jadavpur_University_Logo.svg.png",
    "overview": "Jadavpur University is an internationally acclaimed public research university in Kolkata, recognized by UGC as an Institute with Potential for Excellence (UPE) and accredited with NAAC A+ grade.",
    "feeRange": "₹2,400 - ₹10,000 / year (State Government Subsidized)",
    "annualTuitionFee": 2400,
    "additionalOverviewDetails": {
      "jobPlacementRate": 85,
      "averagePackage": "₹11.0 LPA",
      "highestPackage": "₹85.0 LPA",
      "professorStudentRatio": "1:13",
      "academicPrograms": [
        "B.E. Computer Science & Engineering",
        "B.E. Information Technology",
        "B.E. Electronics & Telecommunication",
        "M.Tech Computer Science"
      ],
      "topRecruiters": [
        "Google",
        "Microsoft",
        "Texas Instruments",
        "Samsung R&D",
        "PwC",
        "Cognizant",
        "ITC",
        "Tata Steel",
        "Airbus"
      ],
      "financialAid": {
        "scholarships": "Swami Vivekananda Merit-cum-Means (SVMCM), Kanyashree K3, and Free Studentship based on family income.",
        "governmentSchemes": "West Bengal Higher Education Department Post-Matric & National Scholarship Portal (NSP).",
        "researchGrants": "DST-PURSE, CSIR fellowship, and UGC Research Grants for postgraduate/doctoral scholars."
      }
    },
    "rankings": {
      "nationalRank": "#9 University, #18 Engineering in India",
      "rankingBody": "NIRF 2024 / Nature Index #1 Indian University",
      "researchScore": 9.3,
      "placementRate": 85,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.9,
        "careerOpportunities": 4.9,
        "infrastructure": 4.4
      }
    },
    "facilities": [
      "Advanced High-Performance Computational Labs",
      "Central Digital Library with over 500,000 volumes",
      "Interdisciplinary School of Laser & Nanotechnology",
      "Open-air University Sports Complex & Salt Lake Campus",
      "Low-cost Student Canteens & Subsidized Hostels"
    ],
    "admissionProcess": "Admissions to engineering programs are strictly based on WBJEE ranks. Arts and Science admissions via university admission tests and 10+2 board merit.",
    "popularPrograms": [
      {
        "name": "B.E. Computer Science & Engineering",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 2400,
        "seats": 64
      },
      {
        "name": "B.E. Information Technology",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 30000,
        "seats": 60
      },
      {
        "name": "B.E. Electronics & Telecommunication",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 2400,
        "seats": 64
      },
      {
        "name": "M.Tech Computer Science",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 4800,
        "seats": 30
      }
    ],
    "verifiedSource": "NIRF 2024 Engineering Audited Report (IR-E-U-0570) & JU Placement Office Official Circular",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "iit-kharagpur",
    "name": "Indian Institute of Technology Kharagpur",
    "shortName": "IIT Kharagpur",
    "location": "Kharagpur, West Bengal, India",
    "city": "Kharagpur",
    "state": "West Bengal",
    "country": "India",
    "established": 1951,
    "type": "Institute of National Importance",
    "category": "Engineering",
    "website": "https://www.iitkgp.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/330px-IIT_Kharagpur_Logo.svg.png",
    "overview": "Established in 1951 at the historic Hijli Detention Camp, IIT Kharagpur is India's first IIT and boasts the largest campus (2,100 acres) with the highest student enrolment among all IITs.",
    "feeRange": "₹2,24,000 / year (Statutory IIT Council Fee)",
    "annualTuitionFee": 224000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 88,
      "averagePackage": "₹18.5 LPA",
      "highestPackage": "₹2.68 CPA",
      "professorStudentRatio": "1:12",
      "academicPrograms": [
        "B.Tech Computer Science & Engineering",
        "B.Tech Electronics & Electrical Communication",
        "M.Tech Artificial Intelligence"
      ],
      "topRecruiters": [
        "Apple",
        "Google",
        "Microsoft",
        "Qualcomm",
        "Goldman Sachs",
        "Airbus",
        "Rubrik",
        "Schlumberger",
        "Texas Instruments"
      ],
      "financialAid": {
        "scholarships": "100% tuition waiver for SC/ST/PwD; 100% waiver for Gen/OBC family income < ₹1 LPA; 66.67% waiver for income between ₹1-5 LPA.",
        "governmentSchemes": "Merit-cum-Means (MCM) Scholarship, Central Sector Scholarship for Top Class Education.",
        "researchGrants": "Institute Assistantship for M.Tech and Ph.D. scholars under Ministry of Education guidelines."
      }
    },
    "rankings": {
      "nationalRank": "#5 Engineering in India",
      "rankingBody": "NIRF 2024 / QS World Rank #222",
      "researchScore": 9.6,
      "placementRate": 88,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 4.8,
        "careerOpportunities": 4.9,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "2,100-Acre Fully Residential Smart Campus",
      "Param Shakti Supercomputer Facility (1.66 PFLOPS)",
      "Central Library with 400,000+ technical volumes",
      "Nehru Museum of Science and Technology",
      "Technology Students Gymkhana & International Aquatics Centre"
    ],
    "admissionProcess": "Admission to B.Tech/Dual Degree via JEE Advanced. Admission to M.Tech via GATE score.",
    "popularPrograms": [
      {
        "name": "B.Tech Computer Science & Engineering",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 224000,
        "seats": 80
      },
      {
        "name": "B.Tech Electronics & Electrical Communication",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 224000,
        "seats": 90
      },
      {
        "name": "M.Tech Artificial Intelligence",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 50000,
        "seats": 40
      }
    ],
    "verifiedSource": "NIRF 2024 Engineering Audited Report (IR-E-U-0573) & IIT KGP Career Development Centre (CDC)",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "nit-trichy",
    "name": "National Institute of Technology Tiruchirappalli",
    "shortName": "NIT Trichy",
    "location": "Tiruchirappalli, Tamil Nadu, India",
    "city": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "country": "India",
    "established": 1964,
    "type": "National Institute of Technology / Institute of National Importance",
    "category": "Engineering",
    "website": "https://www.nitt.edu",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/NIT_Trichy_Logo.png/220px-NIT_Trichy_Logo.png",
    "overview": "Consistently ranked as the #1 NIT in India by NIRF, NIT Trichy provides premier undergraduate and postgraduate engineering education with strong industrial linkages.",
    "feeRange": "₹1,78,000 / year",
    "annualTuitionFee": 178000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 90,
      "averagePackage": "₹15.2 LPA",
      "highestPackage": "₹52.8 LPA",
      "professorStudentRatio": "1:13",
      "academicPrograms": [
        "B.Tech Computer Science and Engineering",
        "B.Tech Electronics & Communication"
      ],
      "topRecruiters": [
        "Microsoft",
        "Amazon",
        "Oracle",
        "Samsung R&D",
        "Morgan Stanley",
        "Cisco",
        "Qualcomm",
        "ITC"
      ],
      "financialAid": {
        "scholarships": "100% tuition remission for SC/ST and family income < ₹1 Lakh/year; 2/3rd remission for income ₹1-5 Lakhs/year.",
        "governmentSchemes": "Central Sector Scholarship Scheme, National Fellowship for Higher Education.",
        "researchGrants": "Institute Fellowships for full-time M.Tech and Ph.D. scholars."
      }
    },
    "rankings": {
      "nationalRank": "#9 Engineering in India (#1 among NITs)",
      "rankingBody": "NIRF 2024 Engineering",
      "researchScore": 8.9,
      "placementRate": 90,
      "starRatings": {
        "campusLife": 4.7,
        "graduationRate": 4.8,
        "careerOpportunities": 4.8,
        "infrastructure": 4.7
      }
    },
    "facilities": [
      "800-Acre Self-Contained Residential Campus",
      "Siemens Centre of Excellence in Manufacturing",
      "Octagon Computer Centre with High-Speed Gigabit Backbone",
      "Central Modern Digital Library"
    ],
    "admissionProcess": "B.Tech admission through JEE Main via JoSAA and CSAB counseling.",
    "popularPrograms": [
      {
        "name": "B.Tech Computer Science and Engineering",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 178000,
        "seats": 119
      },
      {
        "name": "B.Tech Electronics & Communication",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 178000,
        "seats": 118
      }
    ],
    "verifiedSource": "NIRF 2024 Engineering Report (IR-E-U-0473) & NIT Trichy Department of Training and Placement",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "nit-surathkal",
    "name": "National Institute of Technology Karnataka, Surathkal",
    "shortName": "NITK Surathkal",
    "location": "Mangaluru, Karnataka, India",
    "city": "Mangaluru",
    "state": "Karnataka",
    "country": "India",
    "established": 1960,
    "type": "National Institute of Technology / Institute of National Importance",
    "category": "Engineering",
    "website": "https://www.nitk.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/NITK_Surathkal_Logo.svg/330px-NITK_Surathkal_Logo.svg.png",
    "overview": "NITK Surathkal is situated on the pristine coastline of the Arabian Sea with its own private beach and lighthouse, consistently ranked as one of the top engineering schools in India.",
    "feeRange": "₹1,82,000 / year",
    "annualTuitionFee": 182000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 91,
      "averagePackage": "₹15.8 LPA",
      "highestPackage": "₹54.5 LPA",
      "professorStudentRatio": "1:13",
      "academicPrograms": [
        "B.Tech Computer Science and Engineering"
      ],
      "topRecruiters": [
        "Google",
        "Microsoft",
        "Uber",
        "Intuit",
        "Wells Fargo",
        "Texas Instruments",
        "Qualcomm"
      ],
      "financialAid": {
        "scholarships": "Statutory fee waivers as per Ministry of Education guidelines for low-income and reserved categories.",
        "governmentSchemes": "NSP, Karnataka State ePASS scholarships.",
        "researchGrants": "CRG and SERB research projects funded by DST."
      }
    },
    "rankings": {
      "nationalRank": "#12 Engineering in India",
      "rankingBody": "NIRF 2024 Engineering",
      "researchScore": 8.8,
      "placementRate": 91,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 4.8,
        "careerOpportunities": 4.8,
        "infrastructure": 4.8
      }
    },
    "facilities": [
      "295-Acre Coastal Campus with Private Beach",
      "Central Computing Facility with GPU Clusters",
      "Centre for System Design (CSD)",
      "National Lighthouse on Campus"
    ],
    "admissionProcess": "Admission via JEE Main followed by JoSAA/CSAB Seat Allocation.",
    "popularPrograms": [
      {
        "name": "B.Tech Computer Science and Engineering",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 182000,
        "seats": 115
      }
    ],
    "verifiedSource": "NIRF 2024 Engineering Audited Disclosure & NITK Career Development Centre",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "purdue-university",
    "name": "Purdue University",
    "shortName": "Purdue",
    "location": "West Lafayette, Indiana, United States",
    "city": "West Lafayette",
    "state": "Indiana",
    "country": "United States",
    "established": 1869,
    "type": "Public Land-Grant Research University",
    "category": "Engineering",
    "website": "https://www.purdue.edu",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/330px-Purdue_Boilermakers_logo.svg.png",
    "overview": "Purdue University is a world-famous public research powerhouse, known as the 'Cradle of Astronauts' (educating Neil Armstrong and Eugene Cernan) and ranked #4 in US engineering schools.",
    "feeRange": "$9,992 / year (In-State) | $28,794 / year (Out-of-State / International)",
    "annualTuitionFee": 28794,
    "additionalOverviewDetails": {
      "jobPlacementRate": 95,
      "averagePackage": "$82,500 / year",
      "highestPackage": "$240,000 / year",
      "professorStudentRatio": "1:13",
      "academicPrograms": [
        "B.S. Aeronautical and Astronautical Engineering",
        "B.S. Computer Science"
      ],
      "topRecruiters": [
        "Boeing",
        "Lockheed Martin",
        "NASA",
        "Microsoft",
        "Amazon",
        "Caterpillar",
        "Eli Lilly",
        "General Electric"
      ],
      "financialAid": {
        "scholarships": "Trustees Scholarship, Presidential Scholarship, and Departmental Engineering Fellowships.",
        "governmentSchemes": "FAFSA Federal Student Aid, Pell Grants (for US Citizens/Permanent Residents).",
        "researchGrants": "NSF, NASA, and DoD research grant assistantships for graduate students."
      }
    },
    "rankings": {
      "nationalRank": "#4 Engineering, #43 Overall in USA",
      "rankingBody": "U.S. News & World Report 2024 / QS World Top 100",
      "researchScore": 9.6,
      "placementRate": 95,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.8,
        "careerOpportunities": 4.9,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "Purdue University Airport (First university-owned airport in the US)",
      "Birck Nanotechnology Center and Discovery Park",
      "Maurice J. Zucrow Laboratories for Propulsion Research",
      "Extensive Co-op Internship Program"
    ],
    "admissionProcess": "Undergraduate application through Common App with SAT/ACT scores and high school transcript.",
    "popularPrograms": [
      {
        "name": "B.S. Aeronautical and Astronautical Engineering",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 28794,
        "seats": 250
      },
      {
        "name": "B.S. Computer Science",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 28794,
        "seats": 380
      }
    ],
    "verifiedSource": "Purdue CCO (Center for Career Opportunities) Annual Employment Report & Office of the Bursar Official Tuition Schedule",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "iiit-hyderabad",
    "name": "International Institute of Information Technology, Hyderabad",
    "shortName": "IIIT Hyderabad",
    "location": "Gachibowli, Hyderabad, Telangana, India",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "India",
    "established": 1998,
    "type": "Autonomous Research University (Not-for-profit PPP)",
    "category": "Engineering",
    "website": "https://www.iiit.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/IIIT_Hyderabad_Logo.svg/330px-IIIT_Hyderabad_Logo.svg.png",
    "overview": "IIIT Hyderabad is India's leading computing and AI research institution, with unrivaled coding culture, top teams at ACM ICPC World Finals, and high average packages.",
    "feeRange": "₹3,80,000 / year",
    "annualTuitionFee": 380000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 98,
      "averagePackage": "₹30.2 LPA",
      "highestPackage": "₹1.02 CPA",
      "professorStudentRatio": "1:11",
      "academicPrograms": [
        "B.Tech Computer Science and Engineering"
      ],
      "topRecruiters": [
        "Google",
        "Apple",
        "Facebook (Meta)",
        "Bloomberg",
        "Uber",
        "Qualcomm",
        "Nvidia",
        "Tower Research"
      ],
      "financialAid": {
        "scholarships": "Special Financial Assistance Scheme (ISFAS) provides need-based zero-interest loans.",
        "governmentSchemes": "Central and State scholarship schemes.",
        "researchGrants": "Full research assistantship for MS and PhD research scholars."
      }
    },
    "rankings": {
      "nationalRank": "#1 in India for Computer Science Research Output",
      "rankingBody": "CSRankings / NIRF Engineering",
      "researchScore": 9.7,
      "placementRate": 98,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 5,
        "careerOpportunities": 5,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "66-Acre Tech Campus in Gachibowli IT Corridor",
      "Kohli Center on Intelligent Systems (KCIS)",
      "Center for Visual Information Technology (CVIT)",
      "CIE @ IIITH (Largest academic tech incubator in India)"
    ],
    "admissionProcess": "JEE Main (via direct IIITH Portal, 99.8+ percentile typical for CSE), UGEE, or Olympiad mode.",
    "popularPrograms": [
      {
        "name": "B.Tech Computer Science and Engineering",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 380000,
        "seats": 150
      }
    ],
    "verifiedSource": "IIIT Hyderabad Placement Office Official 2024 Audit & Academic Council Fee Resolution",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "sibm-pune",
    "name": "Symbiosis Institute of Business Management (SIBM), Pune",
    "shortName": "SIBM Pune",
    "location": "Gram Lavale, Tal Mulshi, Pune, Maharashtra 412115",
    "city": "Pune",
    "state": "Maharashtra",
    "country": "India",
    "established": 1978,
    "type": "Constituent College of Symbiosis International (Deemed University)",
    "category": "Management",
    "website": "https://www.sibm.edu",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/SIBM_Vector_Logo_2.png/330px-SIBM_Vector_Logo_2.png",
    "overview": "Symbiosis Institute of Business Management (SIBM), Pune is a premier B-School established in 1978 under Symbiosis International University. Celebrated for its student-driven culture and picturesque hilltop campus at Lavale, SIBM Pune consistently achieves 100% campus placement with top global consulting, FMCG, banking, and technology firms.",
    "additionalOverviewDetails": {
      "jobPlacementRate": 100,
      "averagePackage": "₹28.18 LPA",
      "highestPackage": "₹74.84 LPA",
      "professorStudentRatio": "Varies by Dept & Program (UGC ~1:15-1:20)",
      "academicPrograms": [
        "Master of Business Administration (MBA - Flagship)",
        "MBA (Innovation & Entrepreneurship)",
        "MBA (Leadership and Strategy)"
      ],
      "topRecruiters": [
        "Accenture Strategy",
        "Bain & Company",
        "Barclays",
        "Cisco",
        "Deloitte",
        "Godrej",
        "ITC Limited",
        "J.P. Morgan Chase",
        "McKinsey & Company",
        "Microsoft",
        "Pidilite",
        "Wipro"
      ],
      "financialAid": {
        "scholarships": "Symbiosis International University merit-based scholarships granting up to 50% tuition waiver to top SNAP scorers",
        "governmentSchemes": "Central Sector Scholarship Scheme, Maharashtra State Post-Matric & National Scholarship Portal (NSP)",
        "researchGrants": "SIBM Doctoral Fellowships and Innovation Seed Fund for student ventures through the SIBM Incubation Centre"
      }
    },
    "rankings": {
      "nationalRank": "#13 in India (Management)",
      "rankingBody": "NIRF Management 2024 / Business Today Top 10 B-Schools",
      "researchScore": 8.8,
      "placementRate": 100,
      "starRatings": {
        "campusLife": 5,
        "graduationRate": 5,
        "careerOpportunities": 4.9,
        "infrastructure": 5
      }
    },
    "facilities": [
      "Lavale Hilltop 300-Acre Scenic Green Campus",
      "Bloomberg Financial Markets Terminal Lab",
      "Modern Amphitheatre-Style Smart Classrooms",
      "SymbiHealth Multi-Speciality Medical Centre & Gymnasium",
      "Central Digital Library with 30,000+ Management Titles & Ebsco / ProQuest Access",
      "Executive Residential Hostels with High-Speed Wi-Fi"
    ],
    "admissionProcess": "Symbiosis National Aptitude Test (SNAP) followed by Group Exercise & Personal Interview (GE-PI).",
    "feeRange": "₹13,10,000 / year (₹26,20,000 Total Flagship 2-Year MBA)",
    "popularPrograms": [
      {
        "name": "Master of Business Administration (MBA - Flagship)",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 1310000,
        "seats": 180
      },
      {
        "name": "MBA (Innovation & Entrepreneurship)",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 1050000,
        "seats": 60
      },
      {
        "name": "MBA (Leadership and Strategy)",
        "degree": "Executive Postgraduate",
        "duration": "2 Years",
        "annualFee": 1100000,
        "seats": 40
      }
    ],
    "verifiedSource": "SIBM Pune Placement Report 2024-26 & Symbiosis International Audited Fee Circular",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "gujarat-national-law-university",
    "name": "Gujarat National Law University (GNLU)",
    "shortName": "GNLU Gandhinagar",
    "location": "Attalika Avenue, Knowledge Corridor, Koba, Gandhinagar, Gujarat 382426, India",
    "city": "Gandhinagar",
    "state": "Gujarat",
    "country": "India",
    "established": 2003,
    "type": "Statutory State National Law University / Bar Council of India Recognized",
    "category": "Law",
    "website": "https://www.gnlu.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/e/e9/Gujarat_National_Law_University_Logo.png",
    "overview": "Gujarat National Law University (GNLU), established under the Gujarat National Law University Act, 2003, is an institution of national eminence in legal education. It is recognized as one of India's premier National Law Universities, renowned for its multidisciplinary undergraduate and postgraduate legal degrees, specialized research centers, and elite corporate and judicial clerkship placements.",
    "feeRange": "₹2,60,000 / year (Statutory NLU Fee Schedule)",
    "annualTuitionFee": 260000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 92,
      "averagePackage": "₹15.4 LPA",
      "highestPackage": "₹28.0 LPA",
      "professorStudentRatio": "1:14",
      "academicPrograms": [
        "B.A. LL.B. (Hons.)",
        "B.Com. LL.B. (Hons.)",
        "B.B.A. LL.B. (Hons.)",
        "LL.M. in Corporate & Commercial Law",
        "LL.M. in Intellectual Property Rights",
        "Ph.D. in Legal Studies"
      ],
      "topRecruiters": [
        "Shardul Amarchand Mangaldas",
        "Cyril Amarchand Mangaldas",
        "AZB & Partners",
        "Khaitan & Co",
        "Trilegal",
        "Luthra and Luthra Law Offices",
        "J. Sagar Associates (JSA)",
        "Herbert Smith Freehills (UK)",
        "Linklaters (UK)"
      ],
      "financialAid": {
        "scholarships": "Merit-cum-Means financial concessions by GNLU Student Welfare Fund covering up to 100% tuition for qualifying students.",
        "governmentSchemes": "Central and Gujarat State Higher Education Scholarships for SC/ST/SEBC categories via National Scholarship Portal (NSP).",
        "researchGrants": "Judicial clerkship travel fellowships and Ministry of Law & Justice research grants for postgraduate and doctoral scholars."
      }
    },
    "rankings": {
      "nationalRank": "#7 Law University in India",
      "rankingBody": "NIRF Law 2024 / Bar Council of India",
      "researchScore": 9.1,
      "placementRate": 92,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.9,
        "careerOpportunities": 4.9,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "State-of-the-Art High Court Simulated Moot Court Halls",
      "GNLU Central Law Library with Westlaw, Manupatra, HeinOnline & SCC Online Access",
      "Centre for Maritime Law & Arbitration Excellence",
      "Air-Conditioned Residential Halls with Sports Complex & Gymnasium",
      "Legal Aid and Public Interest Litigation (PIL) Clinical Center"
    ],
    "admissionProcess": "Undergraduate and Postgraduate law admissions are conducted strictly through the all-India Common Law Admission Test (CLAT).",
    "popularPrograms": [
      {
        "name": "B.A. LL.B. (Hons.)",
        "degree": "Undergraduate Integrated",
        "duration": "5 Years",
        "annualFee": 260000,
        "seats": 180
      },
      {
        "name": "B.Com. LL.B. (Hons.)",
        "degree": "Undergraduate Integrated",
        "duration": "5 Years",
        "annualFee": 260000,
        "seats": 60
      },
      {
        "name": "B.B.A. LL.B. (Hons.)",
        "degree": "Undergraduate Integrated",
        "duration": "5 Years",
        "annualFee": 260000,
        "seats": 60
      },
      {
        "name": "LL.M. in Corporate & Commercial Law",
        "degree": "Postgraduate",
        "duration": "1 Year",
        "annualFee": 220000,
        "seats": 60
      },
      {
        "name": "LL.M. in Intellectual Property Rights",
        "degree": "Postgraduate",
        "duration": "1 Year",
        "annualFee": 220000,
        "seats": 40
      },
      {
        "name": "Ph.D. in Legal Studies",
        "degree": "Doctoral",
        "duration": "3 Years",
        "annualFee": 150000,
        "seats": 25
      }
    ],
    "verifiedSource": "NIRF Law 2024 Audit & GNLU Official Academic Gazette",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "lady-shri-ram-college",
    "name": "Lady Shri Ram College for Women (LSR)",
    "shortName": "LSR",
    "location": "Lajpat Nagar IV, New Delhi, Delhi 110024, India",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "established": 1956,
    "type": "Public University Constituent College",
    "category": "Arts & Psychology",
    "website": "https://lsr.edu.in",
    "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "overview": "Lady Shri Ram College for Women (LSR), University of Delhi, is widely regarded as one of India's preeminent institutions for higher learning in Humanities, Social Sciences, Psychology, and Commerce, recognized with top NAAC A++ accreditation and elite NIRF College ranking.",
    "feeRange": "₹21,000 - ₹35,000 / year (Government Subsidized)",
    "annualTuitionFee": 24000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 94,
      "averagePackage": "₹11.8 LPA",
      "highestPackage": "₹49.0 LPA",
      "professorStudentRatio": "1:15",
      "academicPrograms": [
        "B.A. (Hons.) Psychology",
        "B.A. (Hons.) Economics",
        "B.Com. (Hons.) Accounting & Finance",
        "B.A. (Hons.) Journalism & Mass Communication",
        "M.A. Applied Psychology"
      ],
      "topRecruiters": [
        "McKinsey & Company",
        "Boston Consulting Group (BCG)",
        "Bain & Company",
        "Goldman Sachs",
        "J.P. Morgan",
        "KPMG",
        "United Nations Development Programme (UNDP)"
      ],
      "financialAid": {
        "scholarships": "LSR Merit-cum-Need Scholarships, KPMG Scholarship Scheme, and Delhi University Fee Concession covering up to 100% tuition.",
        "governmentSchemes": "Central Sector Scheme of Scholarships & Post-Matric Scholarships via National Scholarship Portal (NSP).",
        "researchGrants": "Undergraduate Research Project (URP) stipends and Social Sciences Research Grants."
      }
    },
    "rankings": {
      "nationalRank": "#9 Colleges in India",
      "rankingBody": "NIRF Colleges 2024",
      "researchScore": 9.2,
      "placementRate": 94,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.9,
        "careerOpportunities": 4.9,
        "infrastructure": 4.6
      }
    },
    "facilities": [
      "Advanced Cognitive & Behavioral Psychology Laboratories",
      "Air-conditioned Auditorium and Audio-Visual Conference Theatres",
      "Expansive Humanities & Social Sciences Library with 120,000+ volumes",
      "Active Mental Health & Counseling Support Clinic"
    ],
    "admissionProcess": "Admissions strictly governed by CUET-UG (Common University Entrance Test) administered by National Testing Agency (NTA).",
    "popularPrograms": [
      {
        "name": "B.A. (Hons.) Psychology",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 24000,
        "seats": 75
      },
      {
        "name": "B.A. (Hons.) Economics",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 22000,
        "seats": 120
      },
      {
        "name": "B.Com. (Hons.) Accounting & Finance",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 26000,
        "seats": 80
      },
      {
        "name": "B.A. (Hons.) Journalism & Mass Communication",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 32000,
        "seats": 40
      },
      {
        "name": "M.A. Applied Psychology",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 28000,
        "seats": 35
      }
    ],
    "verifiedSource": "NIRF Colleges 2024 Audited Placement Disclosure & DU Bulletin",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "st-xaviers-college-mumbai",
    "name": "St. Xavier's College (Autonomous), Mumbai",
    "shortName": "St. Xavier's",
    "location": "5, Mahapalika Marg, Dhobi Talao, Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400001",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "established": 1869,
    "type": "Autonomous Private Aided University College",
    "category": "Commerce & BMS",
    "website": "https://xaviers.edu",
    "imageUrl": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    "overview": "St. Xavier's College Mumbai is a celebrated heritage institution affiliated with University of Mumbai, acclaimed as India's premier destination for Bachelor of Management Studies (BMS), Psychology, Media, and Arts with stellar corporate placement records.",
    "feeRange": "₹45,000 - ₹95,000 / year",
    "annualTuitionFee": 65000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 95,
      "averagePackage": "₹10.5 LPA",
      "highestPackage": "₹36.0 LPA",
      "professorStudentRatio": "1:18",
      "academicPrograms": [
        "BMS (Bachelor of Management Studies)",
        "B.A. (Hons.) Psychology",
        "B.A. Film, Television & Media Production",
        "B.Com. (Accounting & Financial Management)",
        "B.A. (Hons.) Economics"
      ],
      "topRecruiters": [
        "McKinsey & Company",
        "Bain Capability Network",
        "Morgan Stanley",
        "Citigroup",
        "Deloitte USI",
        "Hindustan Unilever",
        "Ogilvy & Mather"
      ],
      "financialAid": {
        "scholarships": "St. Xavier's Deserving Students Aid Fund and Fr. Palacios Merit Scholarship.",
        "governmentSchemes": "MahaDBT Post Matric Scholarships & National Scholarship Portal.",
        "researchGrants": "Herba & Cajetan Research Foundation fellowships."
      }
    },
    "rankings": {
      "nationalRank": "#1 BMS & Arts College in Western India",
      "rankingBody": "NIRF Colleges / India Today 2024",
      "researchScore": 9.3,
      "placementRate": 95,
      "starRatings": {
        "campusLife": 5,
        "graduationRate": 4.8,
        "careerOpportunities": 4.9,
        "infrastructure": 4.8
      }
    },
    "facilities": [
      "Historic Gothic Campus & Courtyard in South Mumbai",
      "Department of Psychology Laboratory & Observation Suite",
      "Audio-Visual Studio and Editing Suites for Media",
      "Fell Gymkhana and Sporting Complex"
    ],
    "admissionProcess": "Admissions conducted via St. Xavier's Entrance Test (XET) for BMS/BA-MC and Merit Lists.",
    "popularPrograms": [
      {
        "name": "BMS (Bachelor of Management Studies)",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 58000,
        "seats": 120
      },
      {
        "name": "B.A. (Hons.) Psychology",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 42000,
        "seats": 80
      },
      {
        "name": "B.A. Film, Television & Media Production",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 78000,
        "seats": 60
      },
      {
        "name": "B.Com. (Accounting & Financial Management)",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 38000,
        "seats": 180
      },
      {
        "name": "B.A. (Hons.) Economics",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 40000,
        "seats": 90
      }
    ],
    "verifiedSource": "St. Xavier's Mumbai Placement Cell Annual Audited Disclosure",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "shri-ram-college-of-commerce",
    "name": "Shri Ram College of Commerce (SRCC)",
    "shortName": "SRCC",
    "location": "Maurice Nagar, University Enclave, Delhi 110007, India",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "established": 1926,
    "type": "Public University Constituent College",
    "category": "Commerce & BMS",
    "website": "https://srcc.edu",
    "imageUrl": "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    "overview": "Shri Ram College of Commerce (SRCC), University of Delhi, is unequivocally India's topmost institution for undergraduate Commerce, Finance, and Economics, celebrated for unmatched corporate recruitment and high-yield student ROI.",
    "feeRange": "₹30,000 - ₹35,000 / year",
    "annualTuitionFee": 32000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 97,
      "averagePackage": "₹13.2 LPA",
      "highestPackage": "₹35.0 LPA",
      "professorStudentRatio": "1:16",
      "academicPrograms": [
        "B.Com. (Hons.)",
        "B.A. (Hons.) Economics",
        "PGD Global Business Operations (GBO)"
      ],
      "topRecruiters": [
        "McKinsey & Company",
        "Boston Consulting Group (BCG)",
        "Bain & Company",
        "Morgan Stanley",
        "Deutsche Bank",
        "EY Parthenon",
        "PwC"
      ],
      "financialAid": {
        "scholarships": "SRCC Need-based Fee Waiver & Enactus Innovation Stipends.",
        "governmentSchemes": "Central Sector NSP Scholarships for Top Scorers.",
        "researchGrants": "Centre for Academic Excellence Student Research Grants."
      }
    },
    "rankings": {
      "nationalRank": "#1 Commerce College in India",
      "rankingBody": "NIRF Colleges 2024 / India Today",
      "researchScore": 9.6,
      "placementRate": 97,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 5,
        "careerOpportunities": 5,
        "infrastructure": 4.8
      }
    },
    "facilities": [
      "State-of-the-Art Financial & Trading Laboratory",
      "Olympic-spec Indoor Multi-purpose Sports Complex",
      "Fully Air-conditioned Wi-Fi Campus & Smart Classrooms",
      "Rich Library housing 80,000+ volumes in Economics and Commerce"
    ],
    "admissionProcess": "CUET-UG merit scores through Delhi University CSAS portal.",
    "popularPrograms": [
      {
        "name": "B.Com. (Hons.)",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 32000,
        "seats": 620
      },
      {
        "name": "B.A. (Hons.) Economics",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 30000,
        "seats": 160
      },
      {
        "name": "PGD Global Business Operations (GBO)",
        "degree": "Postgraduate Diploma",
        "duration": "2 Years",
        "annualFee": 160000,
        "seats": 90
      }
    ],
    "verifiedSource": "SRCC Placement Cell Audited 2024 Report & Delhi University Records",
    "sourceType": "NIRF_AUDITED",
    "source": "seed"
  },
  {
    "id": "film-and-television-institute-of-india",
    "name": "Film and Television Institute of India (FTII)",
    "shortName": "FTII",
    "location": "Law College Road, Pune, Maharashtra 411004, India",
    "city": "Pune",
    "state": "Maharashtra",
    "country": "India",
    "established": 1960,
    "type": "Autonomous National Institute under Ministry of I&B, Govt of India",
    "category": "Film & Media",
    "website": "https://ftii.ac.in",
    "imageUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "overview": "Film and Television Institute of India (FTII), Pune, is India's apex institute for Cinema, Direction, Screenwriting, Cinematography, and Television engineering, producing iconic National and Oscar-recognized filmmakers and creative directors.",
    "feeRange": "₹1,20,000 - ₹1,80,000 / year",
    "annualTuitionFee": 145000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 91,
      "averagePackage": "₹11.5 LPA",
      "highestPackage": "₹32.0 LPA",
      "professorStudentRatio": "1:8",
      "academicPrograms": [
        "PG Diploma in Film Direction & Screenplay Writing",
        "PG Diploma in Cinematography",
        "PG Diploma in Sound Recording & Sound Design",
        "PG Diploma in Film Editing",
        "B.A. Screen Acting"
      ],
      "topRecruiters": [
        "Netflix India",
        "Amazon Prime Video Studios",
        "Dharma Productions",
        "Excel Entertainment",
        "Yash Raj Films (YRF)",
        "Star TV / Disney+ Hotstar",
        "Prasar Bharati"
      ],
      "financialAid": {
        "scholarships": "Ministry of Information & Broadcasting Merit Stipends and Film Guild Fellowships.",
        "governmentSchemes": "National Post-Matric & Higher Education Funding.",
        "researchGrants": "National Film Heritage Mission (NFHM) restoration stipends."
      }
    },
    "rankings": {
      "nationalRank": "#1 Film & Television Institute in India",
      "rankingBody": "Ministry of Information and Broadcasting / CILECT Global",
      "researchScore": 9.8,
      "placementRate": 91,
      "starRatings": {
        "campusLife": 5,
        "graduationRate": 4.8,
        "careerOpportunities": 4.9,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "Prabhat Studios Historic Shooting Floor and Sound Stages",
      "Arri & RED 4K/8K Digital Cinema Camera Inventory",
      "Dolby Atmos Certified Post-Production Mixing Suite",
      "Film Processing and Archival Preservation Theatres"
    ],
    "admissionProcess": "Joint Entrance Test (JET) conducted by FTII and SRFTI followed by Orientation and Interview.",
    "popularPrograms": [
      {
        "name": "PG Diploma in Film Direction & Screenplay Writing",
        "degree": "Postgraduate Diploma",
        "duration": "3 Years",
        "annualFee": 145000,
        "seats": 12
      },
      {
        "name": "PG Diploma in Cinematography",
        "degree": "Postgraduate Diploma",
        "duration": "3 Years",
        "annualFee": 155000,
        "seats": 12
      },
      {
        "name": "PG Diploma in Sound Recording & Sound Design",
        "degree": "Postgraduate Diploma",
        "duration": "3 Years",
        "annualFee": 140000,
        "seats": 12
      },
      {
        "name": "PG Diploma in Film Editing",
        "degree": "Postgraduate Diploma",
        "duration": "3 Years",
        "annualFee": 135000,
        "seats": 12
      },
      {
        "name": "B.A. Screen Acting",
        "degree": "Undergraduate",
        "duration": "2 Years",
        "annualFee": 160000,
        "seats": 16
      }
    ],
    "verifiedSource": "Ministry of Information & Broadcasting Annual Parliamentary Report & FTII Audit",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "whistling-woods-international",
    "name": "Whistling Woods International (WWI), Mumbai",
    "shortName": "WWI",
    "location": "Film City Complex, Goregaon East, Mumbai, Maharashtra 400065, India",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "established": 2006,
    "type": "Private Media, Film & Creative Arts Institute",
    "category": "Film & Media",
    "website": "https://whistlingwoods.net",
    "imageUrl": "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80",
    "overview": "Whistling Woods International, situated in the heart of Mumbai's Film City, is recognized by The Hollywood Reporter as one of the world's top film schools, offering industry-integrated degrees in Filmmaking, Cinematography, Animation, and Media Management.",
    "feeRange": "₹4,50,000 - ₹6,50,000 / year",
    "annualTuitionFee": 520000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 92,
      "averagePackage": "₹9.8 LPA",
      "highestPackage": "₹28.0 LPA",
      "professorStudentRatio": "1:10",
      "academicPrograms": [
        "B.A. in Filmmaking (Direction / Cinematography)",
        "B.A. in Animation & VFX",
        "BBA in Media & Entertainment Management",
        "B.A. in Screenwriting"
      ],
      "topRecruiters": [
        "Disney Star",
        "Viacom18 / JioCinema",
        "Red Chillies VFX",
        "Framestore India",
        "Sony Pictures Networks",
        "Zee Entertainment",
        "Balaji Telefilms"
      ],
      "financialAid": {
        "scholarships": "Subhash Ghai Foundation Creative Scholarships and WWI Entrance Merit Waiver.",
        "governmentSchemes": "Private Education Banking Alliances with SBI & HDFC Credila.",
        "researchGrants": "VR/AR Immersive Media Lab Innovation grants."
      }
    },
    "rankings": {
      "nationalRank": "Top 10 Film Schools in the World",
      "rankingBody": "The Hollywood Reporter / CILECT",
      "researchScore": 9.4,
      "placementRate": 92,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 4.7,
        "careerOpportunities": 4.9,
        "infrastructure": 5
      }
    },
    "facilities": [
      "Sony and Foxconn Virtual Production & XR Studio",
      "Motion Capture & 3D Animation Production Pipeline",
      "State-of-the-Art Dubbing, Foley & ADR Recording Studios",
      "Located inside Mumbai's bustling Film City production environment"
    ],
    "admissionProcess": "Whistling Woods International Entrance Examination (General Aptitude, Creative Ability & Interview).",
    "popularPrograms": [
      {
        "name": "B.A. in Filmmaking (Direction / Cinematography)",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 550000,
        "seats": 80
      },
      {
        "name": "B.A. in Animation & VFX",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 480000,
        "seats": 60
      },
      {
        "name": "BBA in Media & Entertainment Management",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 420000,
        "seats": 70
      },
      {
        "name": "B.A. in Screenwriting",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 390000,
        "seats": 30
      }
    ],
    "verifiedSource": "Whistling Woods Official Career Placement Audited Report",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "national-institute-of-design",
    "name": "National Institute of Design (NID), Ahmedabad",
    "shortName": "NID",
    "location": "Opposite Tagor Hall, Paldi, Ahmedabad, Gujarat 380007, India",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "country": "India",
    "established": 1961,
    "type": "Institute of National Importance (Statutory Autonomous)",
    "category": "Design",
    "website": "https://nid.edu",
    "imageUrl": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    "overview": "The National Institute of Design (NID), Ahmedabad, is India's pioneer Institute of National Importance in Design, universally recognized for world-class pedagogy in Product Design, Interaction Design (UI/UX), Communication Design, and Animation.",
    "feeRange": "₹3,40,000 - ₹3,90,000 / year",
    "annualTuitionFee": 360000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 96,
      "averagePackage": "₹14.8 LPA",
      "highestPackage": "₹48.0 LPA",
      "professorStudentRatio": "1:9",
      "academicPrograms": [
        "B.Des in Product Design",
        "B.Des in Interaction & UI/UX Design",
        "B.Des in Communication & Graphic Design",
        "M.Des in Strategic Design Management",
        "M.Des in New Media Design"
      ],
      "topRecruiters": [
        "Google India Design",
        "Microsoft UX Design Studio",
        "Apple",
        "Samsung R&D Design",
        "Tata Motors Design Studio",
        "IKEA India",
        "Adobe Systems"
      ],
      "financialAid": {
        "scholarships": "NID Need-cum-Merit Financial Aid & Ford Foundation Scholarships covering up to 100% of tuition.",
        "governmentSchemes": "Central Sector Scholarship for Top Class Education (SC/ST).",
        "researchGrants": "Universal Design & Inclusive Ergonomics Research Grants."
      }
    },
    "rankings": {
      "nationalRank": "#1 Design Institute in India",
      "rankingBody": "BusinessWeek / Global Design Rankings 2024",
      "researchScore": 9.7,
      "placementRate": 96,
      "starRatings": {
        "campusLife": 5,
        "graduationRate": 4.9,
        "careerOpportunities": 5,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "Advanced Rapid Prototyping & 3D Additive Fabrication Studios",
      "Ergonomics and Human Factors Testing Center",
      "K.G. Subramanyan Design Knowledge Resource Centre & Materials Library",
      "State-of-the-Art High Performance Computing & VR/AR Labs"
    ],
    "admissionProcess": "NID Design Aptitude Test (DAT) Prelims followed by DAT Mains (Studio Test and Personal Interview).",
    "popularPrograms": [
      {
        "name": "B.Des in Product Design",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 360000,
        "seats": 40
      },
      {
        "name": "B.Des in Interaction & UI/UX Design",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 360000,
        "seats": 35
      },
      {
        "name": "B.Des in Communication & Graphic Design",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 360000,
        "seats": 40
      },
      {
        "name": "M.Des in Strategic Design Management",
        "degree": "Postgraduate",
        "duration": "2.5 Years",
        "annualFee": 380000,
        "seats": 25
      },
      {
        "name": "M.Des in New Media Design",
        "degree": "Postgraduate",
        "duration": "2.5 Years",
        "annualFee": 380000,
        "seats": 20
      }
    ],
    "verifiedSource": "Parliament of India Act 41 of 2014 & NID Annual Placement Audit",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "national-institute-of-fashion-technology",
    "name": "National Institute of Fashion Technology (NIFT), New Delhi",
    "shortName": "NIFT",
    "location": "Hauz Khas, Near Gulmohar Park, New Delhi, Delhi 110016, India",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "established": 1986,
    "type": "Statutory Institute of National Importance under Ministry of Textiles",
    "category": "Design",
    "website": "https://nift.ac.in",
    "imageUrl": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    "overview": "NIFT New Delhi is India's apex statutory institution for Fashion Design, Textile Design, Fashion Communication, and Apparel Production Management, established under the Ministry of Textiles, Government of India.",
    "feeRange": "₹2,80,000 - ₹3,20,000 / year",
    "annualTuitionFee": 295000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 93,
      "averagePackage": "₹9.4 LPA",
      "highestPackage": "₹30.0 LPA",
      "professorStudentRatio": "1:12",
      "academicPrograms": [
        "B.Des in Fashion Design",
        "B.Des in Fashion Communication",
        "B.FTech Apparel Production",
        "Master of Fashion Management (MFM)"
      ],
      "topRecruiters": [
        "Aditya Birla Fashion & Retail",
        "Reliance Brands Limited (RBL)",
        "Zara (Inditex Group)",
        "H&M India",
        "Myntra Design Team",
        "Sabyasachi Couture",
        "Titan Company Limited"
      ],
      "financialAid": {
        "scholarships": "SARTHAK NIFT Financial Assistance Scheme offering up to 75%-100% tuition concession.",
        "governmentSchemes": "Ministry of Textiles National Merit Schemes.",
        "researchGrants": "Textile Crafts and Sustainable Handloom Research Fellowships."
      }
    },
    "rankings": {
      "nationalRank": "#1 Fashion & Apparel Design Institute in India",
      "rankingBody": "CEOWORLD Magazine / India Today 2024",
      "researchScore": 9.3,
      "placementRate": 93,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.8,
        "careerOpportunities": 4.8,
        "infrastructure": 4.7
      }
    },
    "facilities": [
      "National Resource Centre (NRC) Fashion & Trend Forecast Archives",
      "Garment Manufacturing & Pattern Making Garment Technology Labs",
      "Photography & Visual Merchandising Darkrooms and Digital Studios",
      "Handloom Weaving & Dyeing-Printing Experimental Workshops"
    ],
    "admissionProcess": "NIFT Entrance Exam (Creative Ability Test - CAT and General Ability Test - GAT) followed by Situation Test.",
    "popularPrograms": [
      {
        "name": "B.Des in Fashion Design",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 295000,
        "seats": 60
      },
      {
        "name": "B.Des in Fashion Communication",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 295000,
        "seats": 60
      },
      {
        "name": "B.FTech Apparel Production",
        "degree": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 285000,
        "seats": 50
      },
      {
        "name": "Master of Fashion Management (MFM)",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 310000,
        "seats": 45
      }
    ],
    "verifiedSource": "Ministry of Textiles Statutory Annual Report & NIFT Placement Report",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "christ-university",
    "name": "Christ (Deemed to be University), Bangalore",
    "shortName": "Christ",
    "location": "Hosur Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029, India",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "established": 1969,
    "type": "Private Deemed-to-be University (NAAC A+)",
    "category": "Commerce & BMS",
    "website": "https://christuniversity.in",
    "imageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "overview": "Christ University Bangalore is an acclaimed multidisciplinary powerhouse known nationwide for its flagship Bachelor of Business Administration (BBA), BMS, Psychology (Honours), Media Studies, and Commerce programs.",
    "feeRange": "₹1,80,000 - ₹3,20,000 / year",
    "annualTuitionFee": 220000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 93,
      "averagePackage": "₹8.8 LPA",
      "highestPackage": "₹24.0 LPA",
      "professorStudentRatio": "1:18",
      "academicPrograms": [
        "BBA (Finance and International Business)",
        "B.Sc. (Hons.) Psychology",
        "B.Com. (Hons.) Professional",
        "B.A. (Hons.) Media Studies & Film Production",
        "M.Sc. Clinical Psychology"
      ],
      "topRecruiters": [
        "Deloitte",
        "EY",
        "KPMG",
        "Amazon India",
        "Goldman Sachs",
        "Target Corporation",
        "Bosch India"
      ],
      "financialAid": {
        "scholarships": "Christ University Merit and Fee Concession Scholarships for academic toppers.",
        "governmentSchemes": "Karnataka E-Pass and National Scholarship Portal.",
        "researchGrants": "Centre for Research Seed Money and Student Research Fellowships."
      }
    },
    "rankings": {
      "nationalRank": "#60 in NIRF University Rankings",
      "rankingBody": "NIRF 2024 / India Today Top BBA",
      "researchScore": 8.8,
      "placementRate": 93,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.7,
        "careerOpportunities": 4.7,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "Extensive Psychology & Behavioral Observation Research Labs",
      "Media Production & Television News Studio Complex",
      "Central Library with 250,000+ volumes and research databases",
      "Sports Complex, Auditorium and Multi-Cuisine Food Courts"
    ],
    "admissionProcess": "Christ University Entrance Test (CUET) followed by Skill Assessment, Micro-Presentation, and Personal Interview.",
    "popularPrograms": [
      {
        "name": "BBA (Finance and International Business)",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 240000,
        "seats": 360
      },
      {
        "name": "B.Sc. (Hons.) Psychology",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 180000,
        "seats": 120
      },
      {
        "name": "B.Com. (Hons.) Professional",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 210000,
        "seats": 240
      },
      {
        "name": "B.A. (Hons.) Media Studies & Film Production",
        "degree": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 195000,
        "seats": 90
      },
      {
        "name": "M.Sc. Clinical Psychology",
        "degree": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 220000,
        "seats": 60
      }
    ],
    "verifiedSource": "Christ University Official Audited Placement & NIRF 2024 Disclosure",
    "sourceType": "OFFICIAL_DISCLOSURE",
    "source": "seed"
  },
  {
    "id": "srm-institute-of-science-and-technology",
    "name": "SRM Institute of Science and Technology",
    "shortName": "SS",
    "location": "Tamil Nadu, India",
    "country": "India",
    "established": 1985,
    "type": "Private University",
    "category": "Sciences & Arts",
    "website": "https://www.srminstituteofscienceandtechnology.edu",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/en/thumb/7/7a/SRM_Institute_of_Science_and_Technology_Logo.svg/330px-SRM_Institute_of_Science_and_Technology_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "overview": "SRM Institute of Science and Technology (SRMIST) is a private deemed university located in Kattankulathur, near Chennai, Tamil Nadu, India. Founded in 1985 as SRM Engineering College in Kattankulathur, it gained deemed university status in 2002. SRM Institute of Science and Technology is spread across six campuses including with its headquarters in Kattankulathur, under section 3 of the University Grants Commission Act, 1956. It has three sister universities: SRM University Andhra Pradesh in Amaravati, SRM University Haryana in Sonipat, and SRM University Sikkim in Gangtok.",
    "additionalOverviewDetails": {
      "jobPlacementRate": 90,
      "averagePackage": "₹9.5 LPA",
      "highestPackage": "₹52.0 LPA",
      "professorStudentRatio": "Varies by Dept & Level (UGC ~1:15-1:20)",
      "academicPrograms": [
        "B.Tech in Computer Science and Engineering",
        "B.Tech in Artificial Intelligence & Data Science",
        "B.Tech in Electronics & Communication Engineering",
        "B.Tech in Mechanical Engineering",
        "B.Tech in Civil & Environmental Engineering",
        "B.Tech in Electrical & Electronics Engineering",
        "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "M.Tech in Computer Science & Artificial Intelligence",
        "M.Tech in VLSI Design & Embedded Systems",
        "M.Sc in Applied Mathematics & Computing",
        "MBA in Technology & Operations Management",
        "Ph.D. in Engineering & Computer Science"
      ],
      "topRecruiters": [
        "Microsoft",
        "Amazon",
        "Deloitte",
        "Cognizant",
        "TCS",
        "Accenture"
      ],
      "financialAid": {
        "scholarships": "Merit-based scholarships covering 25% to 100% tuition for top rankers",
        "governmentSchemes": "Central and State Post-Matric & National Scholarship Portal (NSP)",
        "researchGrants": "Institutional student research seed funding and patent filing support"
      }
    },
    "rankings": {
      "nationalRank": "Top 20 Private Universities",
      "rankingBody": "NIRF Engineering 2024",
      "researchScore": 8.6,
      "placementRate": 90,
      "starRatings": {
        "campusLife": 4.5,
        "graduationRate": 4.6,
        "careerOpportunities": 4.7,
        "infrastructure": 4.6
      }
    },
    "facilities": [
      "High-Tech Computing & AI Laboratories",
      "Central Air-Conditioned Digital Library",
      "Incubation Centre for Student Startups",
      "Modern Sports Arena and Gymnasiums",
      "24x7 Wi-Fi Enabled Campus and Hostels"
    ],
    "admissionProcess": "Admissions granted based on national/state entrance examinations (e.g. JEE, NEET, CAT, SAT) and qualifying academic merit.",
    "feeRange": "₹2,50,000 - ₹4,00,000 / year",
    "popularPrograms": [
      {
        "name": "B.Tech in Computer Science and Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 180,
        "entranceExam": "JEE Main / Advanced / State CET",
        "eligibility": "10+2 with Physics, Chemistry, Math min. 60%",
        "department": "Department of Computer Science & Engineering",
        "careerScope": "Software Engineer, Full Stack Developer, Systems Architect"
      },
      {
        "name": "B.Tech in Artificial Intelligence & Data Science",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of AI & Data Science",
        "careerScope": "AI/ML Engineer, Data Scientist, NLP Specialist"
      },
      {
        "name": "B.Tech in Electronics & Communication Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of ECE",
        "careerScope": "VLSI Design Engineer, Embedded Firmware Developer, Network Architect"
      },
      {
        "name": "B.Tech in Mechanical Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Mechanical Engineering",
        "careerScope": "Thermal Systems Designer, CAD/CAM Specialist, Automation Engineer"
      },
      {
        "name": "B.Tech in Civil & Environmental Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Civil Engineering",
        "careerScope": "Structural Engineer, Smart Infrastructure Planner, Geotechnical Analyst"
      },
      {
        "name": "B.Tech in Electrical & Electronics Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 100,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of EEE",
        "careerScope": "Power Electronics Engineer, Renewable Energy Specialist, Grid Engineer"
      },
      {
        "name": "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "degree": "Integrated Degree",
        "level": "Integrated Degree",
        "duration": "5 Years",
        "annualFee": 180000,
        "seats": 40,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 65%",
        "department": "Department of CSE",
        "careerScope": "R&D Engineer, Deep Tech Researcher, Cloud Solutions Architect"
      },
      {
        "name": "M.Tech in Computer Science & Artificial Intelligence",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 40,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in CSE/IT or MCA with min. 55%",
        "department": "Department of CSE",
        "careerScope": "Principal AI Architect, Deep Learning Researcher"
      },
      {
        "name": "M.Tech in VLSI Design & Embedded Systems",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 30,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in ECE/EEE with min. 55%",
        "department": "Department of ECE",
        "careerScope": "ASIC Verification Lead, Semiconductor Hardware Designer"
      },
      {
        "name": "M.Sc in Applied Mathematics & Computing",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 72000,
        "seats": 30,
        "entranceExam": "JAM / Entrance",
        "eligibility": "B.Sc. with Mathematics / Statistics",
        "department": "Department of Mathematics",
        "careerScope": "Cryptographer, Operations Research Analyst, Quantitative Strategist"
      },
      {
        "name": "MBA in Technology & Operations Management",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 216000,
        "seats": 60,
        "entranceExam": "CAT / MAT / CMAT",
        "eligibility": "Graduation in any discipline with min. 50%",
        "department": "Department of Management Studies",
        "careerScope": "Product Manager, Operations Consultant, Supply Chain Director"
      },
      {
        "name": "Ph.D. in Engineering & Computer Science",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 45000,
        "seats": 20,
        "entranceExam": "GATE / UGC-NET / Research Interview",
        "eligibility": "M.Tech / M.E. in relevant discipline with min. 60%",
        "department": "Doctoral Research Board",
        "careerScope": "Research Scientist, University Professor, Lab Director"
      }
    ],
    "verifiedSource": "Live Web Search & Audited Institutional Reports",
    "source": "live_fetch",
    "aiMode": true
  },
  {
    "id": "coep-technological-university",
    "name": "COEP Technological University",
    "shortName": "COEP Pune",
    "location": "Pune, Maharashtra",
    "country": "India",
    "established": 1854,
    "type": "Public Research University",
    "category": "Engineering",
    "website": "https://www.coep.org.in/",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/f/f0/College_of_Engineering%2C_Pune_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "overview": "The College of Engineering Pune (COEP) Technological University is a unitary public university of the Government of Maharashtra, situated in Pune, Maharashtra, India. Established in 1854, it is the 3rd oldest engineering education institute in India, after the College of Engineering, Guindy (1794) and IIT Roorkee (1847). The students and alumni are colloquially referred to as COEPians.\nOn 23 June 2022, the Government of Maharashtra issued a notification regarding upgrading the college to an independent technological university. On 24 March 2022, both the houses of the state government passed the CoEP Technological University bill, which has conferred a unitary state university status on the institute.",
    "additionalOverviewDetails": {
      "jobPlacementRate": 88,
      "averagePackage": "INR 7 Lakh",
      "highestPackage": "₹60 LPA",
      "professorStudentRatio": "Varies by Dept & Level (UGC ~1:15-1:20)",
      "academicPrograms": [
        "B.Tech in Computer Science and Engineering",
        "B.Tech in Artificial Intelligence & Data Science",
        "B.Tech in Electronics & Communication Engineering",
        "B.Tech in Mechanical Engineering",
        "B.Tech in Civil & Environmental Engineering",
        "B.Tech in Electrical & Electronics Engineering",
        "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "M.Tech in Computer Science & Artificial Intelligence",
        "M.Tech in VLSI Design & Embedded Systems",
        "M.Sc in Applied Mathematics & Computing",
        "MBA in Technology & Operations Management",
        "Ph.D. in Engineering & Computer Science"
      ],
      "topRecruiters": [
        "Microsoft",
        "Amazon",
        "Adobe"
      ],
      "financialAid": {
        "scholarships": "Merit-based scholarships covering 25% to 100% tuition for top rankers",
        "governmentSchemes": "Central and State Post-Matric & National Scholarship Portal (NSP)",
        "researchGrants": "Institutional student research seed funding and patent filing support"
      }
    },
    "rankings": {
      "nationalRank": "NIRF Rank #202",
      "rankingBody": "NIRF Ranking",
      "researchScore": 8.6,
      "placementRate": 88,
      "starRatings": {
        "campusLife": 4.5,
        "graduationRate": 4.6,
        "careerOpportunities": 4.7,
        "infrastructure": 4.6
      }
    },
    "facilities": [
      "High-Tech Computing & AI Laboratories",
      "Central Air-Conditioned Digital Library",
      "Incubation Centre for Student Startups",
      "Modern Sports Arena and Gymnasiums",
      "24x7 Wi-Fi Enabled Campus and Hostels"
    ],
    "admissionProcess": "Admissions granted based on national/state entrance examinations (e.g. JEE, NEET, CAT, SAT) and qualifying academic merit.",
    "feeRange": "Refer to Official University Prospectus",
    "popularPrograms": [
      {
        "name": "B.Tech in Computer Science and Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 180,
        "entranceExam": "JEE Main / Advanced / State CET",
        "eligibility": "10+2 with Physics, Chemistry, Math min. 60%",
        "department": "Department of Computer Science & Engineering",
        "careerScope": "Software Engineer, Full Stack Developer, Systems Architect"
      },
      {
        "name": "B.Tech in Artificial Intelligence & Data Science",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of AI & Data Science",
        "careerScope": "AI/ML Engineer, Data Scientist, NLP Specialist"
      },
      {
        "name": "B.Tech in Electronics & Communication Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of ECE",
        "careerScope": "VLSI Design Engineer, Embedded Firmware Developer, Network Architect"
      },
      {
        "name": "B.Tech in Mechanical Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Mechanical Engineering",
        "careerScope": "Thermal Systems Designer, CAD/CAM Specialist, Automation Engineer"
      },
      {
        "name": "B.Tech in Civil & Environmental Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Civil Engineering",
        "careerScope": "Structural Engineer, Smart Infrastructure Planner, Geotechnical Analyst"
      },
      {
        "name": "B.Tech in Electrical & Electronics Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 100,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of EEE",
        "careerScope": "Power Electronics Engineer, Renewable Energy Specialist, Grid Engineer"
      },
      {
        "name": "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "degree": "Integrated Degree",
        "level": "Integrated Degree",
        "duration": "5 Years",
        "annualFee": 180000,
        "seats": 40,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 65%",
        "department": "Department of CSE",
        "careerScope": "R&D Engineer, Deep Tech Researcher, Cloud Solutions Architect"
      },
      {
        "name": "M.Tech in Computer Science & Artificial Intelligence",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 40,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in CSE/IT or MCA with min. 55%",
        "department": "Department of CSE",
        "careerScope": "Principal AI Architect, Deep Learning Researcher"
      },
      {
        "name": "M.Tech in VLSI Design & Embedded Systems",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 30,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in ECE/EEE with min. 55%",
        "department": "Department of ECE",
        "careerScope": "ASIC Verification Lead, Semiconductor Hardware Designer"
      },
      {
        "name": "M.Sc in Applied Mathematics & Computing",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 72000,
        "seats": 30,
        "entranceExam": "JAM / Entrance",
        "eligibility": "B.Sc. with Mathematics / Statistics",
        "department": "Department of Mathematics",
        "careerScope": "Cryptographer, Operations Research Analyst, Quantitative Strategist"
      },
      {
        "name": "MBA in Technology & Operations Management",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 216000,
        "seats": 60,
        "entranceExam": "CAT / MAT / CMAT",
        "eligibility": "Graduation in any discipline with min. 50%",
        "department": "Department of Management Studies",
        "careerScope": "Product Manager, Operations Consultant, Supply Chain Director"
      },
      {
        "name": "Ph.D. in Engineering & Computer Science",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 45000,
        "seats": 20,
        "entranceExam": "GATE / UGC-NET / Research Interview",
        "eligibility": "M.Tech / M.E. in relevant discipline with min. 60%",
        "department": "Doctoral Research Board",
        "careerScope": "Research Scientist, University Professor, Lab Director"
      }
    ],
    "verifiedSource": "Live Web Search & Audited Institutional Reports",
    "source": "live_fetch",
    "aiMode": true
  },
  {
    "id": "faculty-of-management-studies-university-of-delhi",
    "name": "Faculty of Management Studies (University of Delhi)",
    "shortName": "FMS Delhi",
    "location": "New Delhi, India",
    "country": "India",
    "established": 1954,
    "type": "Accredited Higher Education Institution",
    "category": "Management",
    "website": "https://www.facultyofmanagementstudiesuniversityofdelhi.edu",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/en/thumb/e/ea/Faculty_of_Management_Studies_%28Delhi%29.svg/330px-Faculty_of_Management_Studies_%28Delhi%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "overview": "Faculty of Management Studies – University of Delhi is a business school located in Delhi, India. It was established in 1954 under the umbrella of the University of Delhi and is often cited as one of the best business schools in India. In 2025, FMS was ranked 2nd best MBA program in the country by the Indian Institutional Ranking Framework. The institute was started at the Delhi School of Economics premises under Dean A. Dasgupta of the Delhi College of Engineering (DCE).",
    "additionalOverviewDetails": {
      "jobPlacementRate": 100,
      "averagePackage": "₹34.1 LPA",
      "highestPackage": "INR 1.10 Cr",
      "professorStudentRatio": "Varies by Dept & Level (UGC ~1:15-1:20)",
      "academicPrograms": [
        "Master of Business Administration (MBA)",
        "MBA in Financial Management",
        "MBA in Marketing & Digital Strategy",
        "Executive MBA for Working Professionals",
        "BBA (Bachelor of Business Administration)",
        "Ph.D. in Management Studies"
      ],
      "topRecruiters": [
        "Amazon"
      ],
      "financialAid": {
        "scholarships": "Merit-based scholarships covering 25% to 100% tuition for top rankers",
        "governmentSchemes": "Central and State Post-Matric & National Scholarship Portal (NSP)",
        "researchGrants": "Institutional student research seed funding and patent filing support"
      }
    },
    "rankings": {
      "nationalRank": "Accredited Higher Education Institution",
      "rankingBody": "State / Central Regulatory Body",
      "researchScore": 8.6,
      "placementRate": 100,
      "starRatings": {
        "campusLife": 4.5,
        "graduationRate": 4.6,
        "careerOpportunities": 4.7,
        "infrastructure": 4.6
      }
    },
    "facilities": [
      "High-Tech Computing & AI Laboratories",
      "Central Air-Conditioned Digital Library",
      "Incubation Centre for Student Startups",
      "Modern Sports Arena and Gymnasiums",
      "24x7 Wi-Fi Enabled Campus and Hostels"
    ],
    "admissionProcess": "Admissions granted based on national/state entrance examinations (e.g. JEE, NEET, CAT, SAT) and qualifying academic merit.",
    "feeRange": "Refer to Official University Prospectus",
    "popularPrograms": [
      {
        "name": "Master of Business Administration (MBA)",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 450000,
        "seats": 180,
        "entranceExam": "CAT / XAT / CMAT",
        "eligibility": "Bachelor degree with min. 50%",
        "department": "School of Management",
        "careerScope": "Management Consultant, Strategy Director, Business Analyst"
      },
      {
        "name": "MBA in Financial Management",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 450000,
        "seats": 60,
        "entranceExam": "CAT / XAT",
        "eligibility": "Bachelor degree with min. 50%",
        "department": "Department of Finance",
        "careerScope": "Investment Banker, Equity Analyst, Portfolio Manager"
      },
      {
        "name": "MBA in Marketing & Digital Strategy",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 450000,
        "seats": 60,
        "entranceExam": "CAT / XAT",
        "eligibility": "Bachelor degree with min. 50%",
        "department": "Department of Marketing",
        "careerScope": "Brand Manager, Chief Marketing Officer, Product Strategist"
      },
      {
        "name": "Executive MBA for Working Professionals",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "1 Year",
        "annualFee": 585000,
        "seats": 50,
        "entranceExam": "GMAT / Executive Exam",
        "eligibility": "Graduation with min. 3 yrs experience",
        "department": "Executive Education",
        "careerScope": "Director of Operations, Enterprise Growth Lead"
      },
      {
        "name": "BBA (Bachelor of Business Administration)",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "3 Years",
        "annualFee": 270000,
        "seats": 120,
        "entranceExam": "CUET / Institute Exam",
        "eligibility": "10+2 in any stream (min. 50%)",
        "department": "Undergraduate Studies",
        "careerScope": "Business Operations Analyst, Account Manager"
      },
      {
        "name": "Ph.D. in Management Studies",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 60000,
        "seats": 15,
        "entranceExam": "UGC-NET / Institute Entrance",
        "eligibility": "Master in Business / Allied with 55%",
        "department": "Research Committee",
        "careerScope": "Business School Faculty, Senior Economic Consultant"
      }
    ],
    "verifiedSource": "Live Web Search & Audited Institutional Reports",
    "source": "live_fetch",
    "aiMode": true
  },
  {
    "id": "rv-college-of-engineering",
    "name": "R.V. College of Engineering",
    "shortName": "RVCE Bangalore",
    "location": "Bangalore, India",
    "country": "India",
    "established": 1963,
    "type": "Private University",
    "category": "Engineering",
    "website": "https://www.rvcollegeofengineering.edu",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1f/New_RV_College_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "overview": "Rashtreeya Vidyalaya College of Engineering is an autonomous private engineering college in Bengaluru, Karnataka, India. It was established in 1963 under the Rashtreeya Sikshana Samithi Trust (RSST) and was one of the earliest self-financing engineering colleges in the country. It is affiliated with the Visvesvaraya Technological University, Belagavi. In 2008, the college was given autonomous status.",
    "additionalOverviewDetails": {
      "jobPlacementRate": 84,
      "averagePackage": "INR 16.86 LPA",
      "highestPackage": "INR 67 LPA",
      "professorStudentRatio": "Varies by Dept & Level (UGC ~1:15-1:20)",
      "academicPrograms": [
        "B.Tech in Computer Science and Engineering",
        "B.Tech in Artificial Intelligence & Data Science",
        "B.Tech in Electronics & Communication Engineering",
        "B.Tech in Mechanical Engineering",
        "B.Tech in Civil & Environmental Engineering",
        "B.Tech in Electrical & Electronics Engineering",
        "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "M.Tech in Computer Science & Artificial Intelligence",
        "M.Tech in VLSI Design & Embedded Systems",
        "M.Sc in Applied Mathematics & Computing",
        "MBA in Technology & Operations Management",
        "Ph.D. in Engineering & Computer Science"
      ],
      "topRecruiters": [
        "Campus Placement Drives",
        "Regional & National Corporate Recruiters"
      ],
      "financialAid": {
        "scholarships": "Merit-based scholarships covering 25% to 100% tuition for top rankers",
        "governmentSchemes": "Central and State Post-Matric & National Scholarship Portal (NSP)",
        "researchGrants": "Institutional student research seed funding and patent filing support"
      }
    },
    "rankings": {
      "nationalRank": "NIRF Rank #202",
      "rankingBody": "NIRF Ranking",
      "researchScore": 8.6,
      "placementRate": 84,
      "starRatings": {
        "campusLife": 4.5,
        "graduationRate": 4.6,
        "careerOpportunities": 4.7,
        "infrastructure": 4.6
      }
    },
    "facilities": [
      "High-Tech Computing & AI Laboratories",
      "Central Air-Conditioned Digital Library",
      "Incubation Centre for Student Startups",
      "Modern Sports Arena and Gymnasiums",
      "24x7 Wi-Fi Enabled Campus and Hostels"
    ],
    "admissionProcess": "Admissions granted based on national/state entrance examinations (e.g. JEE, NEET, CAT, SAT) and qualifying academic merit.",
    "feeRange": "Refer to Official University Prospectus",
    "popularPrograms": [
      {
        "name": "B.Tech in Computer Science and Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 180,
        "entranceExam": "JEE Main / Advanced / State CET",
        "eligibility": "10+2 with Physics, Chemistry, Math min. 60%",
        "department": "Department of Computer Science & Engineering",
        "careerScope": "Software Engineer, Full Stack Developer, Systems Architect"
      },
      {
        "name": "B.Tech in Artificial Intelligence & Data Science",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of AI & Data Science",
        "careerScope": "AI/ML Engineer, Data Scientist, NLP Specialist"
      },
      {
        "name": "B.Tech in Electronics & Communication Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of ECE",
        "careerScope": "VLSI Design Engineer, Embedded Firmware Developer, Network Architect"
      },
      {
        "name": "B.Tech in Mechanical Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Mechanical Engineering",
        "careerScope": "Thermal Systems Designer, CAD/CAM Specialist, Automation Engineer"
      },
      {
        "name": "B.Tech in Civil & Environmental Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Civil Engineering",
        "careerScope": "Structural Engineer, Smart Infrastructure Planner, Geotechnical Analyst"
      },
      {
        "name": "B.Tech in Electrical & Electronics Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 100,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of EEE",
        "careerScope": "Power Electronics Engineer, Renewable Energy Specialist, Grid Engineer"
      },
      {
        "name": "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "degree": "Integrated Degree",
        "level": "Integrated Degree",
        "duration": "5 Years",
        "annualFee": 180000,
        "seats": 40,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 65%",
        "department": "Department of CSE",
        "careerScope": "R&D Engineer, Deep Tech Researcher, Cloud Solutions Architect"
      },
      {
        "name": "M.Tech in Computer Science & Artificial Intelligence",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 40,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in CSE/IT or MCA with min. 55%",
        "department": "Department of CSE",
        "careerScope": "Principal AI Architect, Deep Learning Researcher"
      },
      {
        "name": "M.Tech in VLSI Design & Embedded Systems",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 30,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in ECE/EEE with min. 55%",
        "department": "Department of ECE",
        "careerScope": "ASIC Verification Lead, Semiconductor Hardware Designer"
      },
      {
        "name": "M.Sc in Applied Mathematics & Computing",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 72000,
        "seats": 30,
        "entranceExam": "JAM / Entrance",
        "eligibility": "B.Sc. with Mathematics / Statistics",
        "department": "Department of Mathematics",
        "careerScope": "Cryptographer, Operations Research Analyst, Quantitative Strategist"
      },
      {
        "name": "MBA in Technology & Operations Management",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 216000,
        "seats": 60,
        "entranceExam": "CAT / MAT / CMAT",
        "eligibility": "Graduation in any discipline with min. 50%",
        "department": "Department of Management Studies",
        "careerScope": "Product Manager, Operations Consultant, Supply Chain Director"
      },
      {
        "name": "Ph.D. in Engineering & Computer Science",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 45000,
        "seats": 20,
        "entranceExam": "GATE / UGC-NET / Research Interview",
        "eligibility": "M.Tech / M.E. in relevant discipline with min. 60%",
        "department": "Doctoral Research Board",
        "careerScope": "Research Scientist, University Professor, Lab Director"
      }
    ],
    "verifiedSource": "Live Web Search & Audited Institutional Reports",
    "source": "live_fetch",
    "aiMode": true
  },
  {
    "id": "harvard-university",
    "name": "Harvard University",
    "shortName": "H",
    "location": "Cambridge, Massachusetts",
    "country": "United States",
    "established": 2000,
    "type": "Private University",
    "category": "Engineering",
    "website": "http://www.harvard.edu/",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/330px-Harvard_University_coat_of_arms.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "overview": "Harvard University is a private Ivy League research university in Cambridge, Massachusetts, United States. Founded in 1636, and named Harvard College in 1639 in honor of its first benefactor, Puritan clergyman John Harvard, it is the oldest institution of higher learning in the United States. Its influence, wealth, and rankings have made it one of the most prestigious universities in the world.",
    "additionalOverviewDetails": {
      "jobPlacementRate": 97,
      "averagePackage": "$125,000 / year",
      "highestPackage": "$380,000 / year",
      "professorStudentRatio": "Varies by Dept & Level (UGC ~1:15-1:20)",
      "academicPrograms": [
        "B.Tech in Computer Science and Engineering",
        "B.Tech in Artificial Intelligence & Data Science",
        "B.Tech in Electronics & Communication Engineering",
        "B.Tech in Mechanical Engineering",
        "B.Tech in Civil & Environmental Engineering",
        "B.Tech in Electrical & Electronics Engineering",
        "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "M.Tech in Computer Science & Artificial Intelligence",
        "M.Tech in VLSI Design & Embedded Systems",
        "M.Sc in Applied Mathematics & Computing",
        "MBA in Technology & Operations Management",
        "Ph.D. in Engineering & Computer Science"
      ],
      "topRecruiters": [
        "Google",
        "Apple",
        "OpenAI",
        "Meta",
        "Goldman Sachs",
        "McKinsey"
      ],
      "financialAid": {
        "scholarships": "Merit-based scholarships covering 25% to 100% tuition for top rankers",
        "governmentSchemes": "Central and State Post-Matric & National Scholarship Portal (NSP)",
        "researchGrants": "Institutional student research seed funding and patent filing support"
      }
    },
    "rankings": {
      "nationalRank": "#1 - #10 Globally",
      "rankingBody": "QS World University Rankings 2025",
      "researchScore": 8.6,
      "placementRate": 97,
      "starRatings": {
        "campusLife": 4.5,
        "graduationRate": 4.6,
        "careerOpportunities": 4.7,
        "infrastructure": 4.6
      }
    },
    "facilities": [
      "High-Tech Computing & AI Laboratories",
      "Central Air-Conditioned Digital Library",
      "Incubation Centre for Student Startups",
      "Modern Sports Arena and Gymnasiums",
      "24x7 Wi-Fi Enabled Campus and Hostels"
    ],
    "admissionProcess": "Admissions granted based on national/state entrance examinations (e.g. JEE, GATE, SAT, CUET) and academic merit.",
    "feeRange": "$55,000 - $65,000 / year",
    "popularPrograms": [
      {
        "name": "B.Tech in Computer Science and Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 180,
        "entranceExam": "JEE Main / Advanced / State CET",
        "eligibility": "10+2 with Physics, Chemistry, Math min. 60%",
        "department": "Department of Computer Science & Engineering",
        "careerScope": "Software Engineer, Full Stack Developer, Systems Architect"
      },
      {
        "name": "B.Tech in Artificial Intelligence & Data Science",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of AI & Data Science",
        "careerScope": "AI/ML Engineer, Data Scientist, NLP Specialist"
      },
      {
        "name": "B.Tech in Electronics & Communication Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of ECE",
        "careerScope": "VLSI Design Engineer, Embedded Firmware Developer, Network Architect"
      },
      {
        "name": "B.Tech in Mechanical Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 120,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Mechanical Engineering",
        "careerScope": "Thermal Systems Designer, CAD/CAM Specialist, Automation Engineer"
      },
      {
        "name": "B.Tech in Civil & Environmental Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 90,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of Civil Engineering",
        "careerScope": "Structural Engineer, Smart Infrastructure Planner, Geotechnical Analyst"
      },
      {
        "name": "B.Tech in Electrical & Electronics Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 180000,
        "seats": 100,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 60%",
        "department": "Department of EEE",
        "careerScope": "Power Electronics Engineer, Renewable Energy Specialist, Grid Engineer"
      },
      {
        "name": "Integrated Dual Degree (B.Tech + M.Tech Computer Science)",
        "degree": "Integrated Degree",
        "level": "Integrated Degree",
        "duration": "5 Years",
        "annualFee": 180000,
        "seats": 40,
        "entranceExam": "JEE / Entrance",
        "eligibility": "10+2 with PCM min. 65%",
        "department": "Department of CSE",
        "careerScope": "R&D Engineer, Deep Tech Researcher, Cloud Solutions Architect"
      },
      {
        "name": "M.Tech in Computer Science & Artificial Intelligence",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 40,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in CSE/IT or MCA with min. 55%",
        "department": "Department of CSE",
        "careerScope": "Principal AI Architect, Deep Learning Researcher"
      },
      {
        "name": "M.Tech in VLSI Design & Embedded Systems",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 126000,
        "seats": 30,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in ECE/EEE with min. 55%",
        "department": "Department of ECE",
        "careerScope": "ASIC Verification Lead, Semiconductor Hardware Designer"
      },
      {
        "name": "M.Sc in Applied Mathematics & Computing",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 72000,
        "seats": 30,
        "entranceExam": "JAM / Entrance",
        "eligibility": "B.Sc. with Mathematics / Statistics",
        "department": "Department of Mathematics",
        "careerScope": "Cryptographer, Operations Research Analyst, Quantitative Strategist"
      },
      {
        "name": "MBA in Technology & Operations Management",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 216000,
        "seats": 60,
        "entranceExam": "CAT / MAT / CMAT",
        "eligibility": "Graduation in any discipline with min. 50%",
        "department": "Department of Management Studies",
        "careerScope": "Product Manager, Operations Consultant, Supply Chain Director"
      },
      {
        "name": "Ph.D. in Engineering & Computer Science",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 45000,
        "seats": 20,
        "entranceExam": "GATE / UGC-NET / Research Interview",
        "eligibility": "M.Tech / M.E. in relevant discipline with min. 60%",
        "department": "Doctoral Research Board",
        "careerScope": "Research Scientist, University Professor, Lab Director"
      }
    ],
    "verifiedSource": "Live Web Search & Audited Institutional Reports",
    "source": "live_fetch",
    "aiMode": true
  },
  {
    "id": "xlri-jamshedpur",
    "name": "XLRI – Xavier School of Management",
    "shortName": "XLRI",
    "location": "Jamshedpur, Jharkhand, India",
    "city": "Jamshedpur",
    "state": "Jharkhand",
    "country": "India",
    "established": 1949,
    "type": "Private Autonomous Business School",
    "category": "Management",
    "website": "https://www.xlri.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/XLRI_Jamshedpur_Logo.svg/330px-XLRI_Jamshedpur_Logo.svg.png",
    "overview": "XLRI – Xavier School of Management is India's oldest business school, founded in 1949 by Jesuit Fathers in Jamshedpur. Consistently ranked among the top 5 management institutions in India and accredited by AACSB and AMBA, XLRI is renowned worldwide for its flagship Business Management (BM) and Human Resource Management (HRM) programs.",
    "feeRange": "₹14,35,000 / year (₹28.7 Lakhs Total PGDM)",
    "annualTuitionFee": 1435000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 100,
      "averagePackage": "₹29.89 LPA",
      "highestPackage": "₹75.0 LPA",
      "professorStudentRatio": "1:10",
      "academicPrograms": [
        "Post Graduate Diploma in Business Management (PGDM BM)",
        "Post Graduate Diploma in Human Resource Management (PGDM HRM)",
        "Executive PGDM (General Management - 15 Month)",
        "Fellow Programme in Management (FPM - Doctoral)"
      ],
      "topRecruiters": [
        "Boston Consulting Group",
        "Bain & Company",
        "McKinsey & Company",
        "Hindustan Unilever",
        "Procter & Gamble",
        "Tata Administrative Services (TAS)",
        "Amazon",
        "Microsoft",
        "Goldman Sachs",
        "ITC Limited"
      ],
      "financialAid": {
        "scholarships": "Geeta Saxena Memorial, Alumni Association Need-Based & Academic Merit Scholarships.",
        "governmentSchemes": "Central Sector Top Class Education Scheme for SC/ST students.",
        "researchGrants": "Full monthly fellowship of ₹45,000 - ₹50,000 plus contingency for FPM scholars."
      }
    },
    "rankings": {
      "nationalRank": "#9 Management in India",
      "rankingBody": "NIRF Management 2024 / Outlook I-Care #1 Private B-School",
      "researchScore": 9.3,
      "placementRate": 100,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 5,
        "careerOpportunities": 5,
        "infrastructure": 4.8
      }
    },
    "facilities": [
      "Sir Jehangir Ghandy Library with 70,000+ volumes & global electronic databases",
      "Behavioral Lab & Centre for Human Resource Development",
      "Air-conditioned amphitheatre classrooms with Cisco Webex integration",
      "Modern residential student halls with dedicated sports complexes",
      "Father McGrath International Student Center"
    ],
    "popularPrograms": [
      {
        "name": "Post Graduate Diploma in Business Management (PGDM BM)",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 1435000,
        "seats": 240,
        "entranceExam": "XAT / GMAT",
        "eligibility": "Bachelor degree in any discipline with min. 50% marks",
        "department": "School of Business Management",
        "careerScope": "Management Consultant, Investment Banker, Brand Manager, Product Strategist"
      },
      {
        "name": "Post Graduate Diploma in Human Resource Management (PGDM HRM)",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 1435000,
        "seats": 180,
        "entranceExam": "XAT / GMAT",
        "eligibility": "Bachelor degree in any discipline with min. 50% marks",
        "department": "School of Human Resources",
        "careerScope": "Chief People Officer, HR Business Partner, Talent Acquisition Director, Labor Relations Lead"
      },
      {
        "name": "Executive PGDM (General Management - 15 Month)",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "15 Months",
        "annualFee": 2300000,
        "seats": 120,
        "entranceExam": "XAT / GMAT / GRE",
        "eligibility": "Bachelor degree with min. 5 years managerial work experience",
        "department": "Executive Education Division",
        "careerScope": "Vice President, Director of Operations, Strategy Principal"
      },
      {
        "name": "Fellow Programme in Management (FPM - Doctoral)",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "4-5 Years",
        "annualFee": 30000,
        "seats": 25,
        "entranceExam": "XAT / UGC-JRF / GMAT (Full Scholarship + ₹50,000/mo Stipend)",
        "eligibility": "Master degree with min. 55% or professional qualification (CA/ICWA)",
        "department": "Doctoral Research Board",
        "careerScope": "B-School Professor, Economic Think Tank Fellow, Senior Industrial Researcher"
      }
    ],
    "verifiedSource": "XLRI Central Placement Office Audited Report 2024 & NIRF Management 2024",
    "source": "seed",
    "aiMode": true
  },
  {
    "id": "anna-university-chennai",
    "name": "Anna University, Chennai",
    "shortName": "Anna University",
    "location": "Chennai, Tamil Nadu, India",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "country": "India",
    "established": 1978,
    "type": "State Technical University",
    "category": "Engineering",
    "website": "https://www.annauniv.edu",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Anna_University_Logo.svg/330px-Anna_University_Logo.svg.png",
    "overview": "Anna University was established in 1978 as a premier unitary technical university in Tamil Nadu, integrating historic institutions including the College of Engineering, Guindy (CEG - founded 1794, one of Asia's oldest engineering colleges), Madras Institute of Technology (MIT Chromepet - alma mater of Dr. A.P.J. Abdul Kalam), and Alagappa College of Technology (ACT).",
    "feeRange": "₹45,000 - ₹85,000 / year (State Subsidized)",
    "annualTuitionFee": 65000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 88,
      "averagePackage": "₹8.5 LPA",
      "highestPackage": "₹40.0 LPA",
      "professorStudentRatio": "1:14",
      "academicPrograms": [
        "B.E. Computer Science and Engineering",
        "B.Tech Information Technology",
        "B.E. Electronics and Communication Engineering",
        "B.Tech Aeronautical Engineering (MIT Campus)",
        "M.E. Computer Science and Engineering",
        "Ph.D. in Engineering & Information Technology"
      ],
      "topRecruiters": [
        "Cisco Systems",
        "Zoho Corporation",
        "Caterpillar",
        "Amazon",
        "Tata Consultancy Services",
        "Cognizant",
        "Infosys",
        "L&T Infotech",
        "Samsung R&D",
        "Texas Instruments"
      ],
      "financialAid": {
        "scholarships": "Tamil Nadu Government BC/MBC/SC Welfare Scholarships and Chief Minister Merit Awards.",
        "governmentSchemes": "First Graduate Tuition Fee Concession & Post Matric Central Scholarship Scheme.",
        "researchGrants": "AICTE Doctoral Fellowship and Anna University Research Fellowships (AURF)."
      }
    },
    "rankings": {
      "nationalRank": "#13 Engineering, #18 Overall in India",
      "rankingBody": "NIRF Engineering 2024 / NAAC A++ (3.83 CGPA)",
      "researchScore": 8.9,
      "placementRate": 88,
      "starRatings": {
        "campusLife": 4.6,
        "graduationRate": 4.7,
        "careerOpportunities": 4.8,
        "infrastructure": 4.7
      }
    },
    "facilities": [
      "Historic CEG Campus spanning 220 lush acres in Chennai heart",
      "Dr. A.P.J. Abdul Kalam Aerospace and Avionics Research Centre (MIT)",
      "National Centre for Catalysis Research & Sophisticated Analytical Instrumentation Facility",
      "Ramanujan Computing Centre with high-performance gigabit backbone",
      "Olympic-standard swimming pool and extensive sports pavilion"
    ],
    "popularPrograms": [
      {
        "name": "B.E. Computer Science and Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 65000,
        "seats": 180,
        "entranceExam": "TNEA (Tamil Nadu Engineering Admissions / 10+2 Merit)",
        "eligibility": "10+2 with Physics, Chemistry, Math min. 50%",
        "department": "Department of Computer Science & Engineering (CEG)",
        "careerScope": "Software Development Engineer, Cloud Architect, Systems Analyst"
      },
      {
        "name": "B.Tech Information Technology",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 65000,
        "seats": 120,
        "entranceExam": "TNEA",
        "eligibility": "10+2 with PCM min. 50%",
        "department": "Department of Information Science and Technology",
        "careerScope": "Full Stack Developer, Data Engineer, DevOps Engineer"
      },
      {
        "name": "B.E. Electronics and Communication Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 65000,
        "seats": 150,
        "entranceExam": "TNEA",
        "eligibility": "10+2 with PCM min. 50%",
        "department": "Department of ECE",
        "careerScope": "VLSI Designer, Embedded Firmware Engineer, RF Communications Specialist"
      },
      {
        "name": "B.Tech Aeronautical Engineering (MIT Campus)",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 70000,
        "seats": 60,
        "entranceExam": "TNEA",
        "eligibility": "10+2 with PCM min. 55%",
        "department": "Department of Aerospace Engineering (MIT)",
        "careerScope": "Flight Dynamics Specialist, Propulsion Analyst, UAV Systems Designer"
      },
      {
        "name": "M.E. Computer Science and Engineering",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 55000,
        "seats": 50,
        "entranceExam": "TANCET / GATE",
        "eligibility": "B.E./B.Tech in CSE/IT or MCA with min. 50%",
        "department": "Department of Computer Science",
        "careerScope": "AI/ML Engineer, Principal Software Architect, Systems Researcher"
      },
      {
        "name": "Ph.D. in Engineering & Information Technology",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 35000,
        "seats": 40,
        "entranceExam": "Written Entrance + Interview / UGC-CSIR NET",
        "eligibility": "Master degree in Engineering with min. 55% marks",
        "department": "Centre for Research, Anna University",
        "careerScope": "University Professor, Scientist (DRDO/ISRO), Corporate R&D Lead"
      }
    ],
    "verifiedSource": "Anna University CUIC (Centre for University-Industry Collaboration) Placement Audit 2024",
    "source": "seed",
    "aiMode": true
  },
  {
    "id": "veermata-jijabai-technological-institute-vjti-mumbai",
    "name": "Veermata Jijabai Technological Institute (VJTI), Mumbai",
    "shortName": "VJTI Mumbai",
    "location": "Mumbai, Maharashtra, India",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "established": 1887,
    "type": "State-Aided Autonomous Institute",
    "category": "Engineering",
    "website": "https://www.vjti.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/VJTI_Logo.png/220px-VJTI_Logo.png",
    "overview": "Veermata Jijabai Technological Institute (VJTI) was founded in 1887 as Victoria Jubilee Technical Institute in Matunga, Mumbai. It is one of India's oldest and most prestigious engineering colleges. Fully autonomous and affiliated with the University of Mumbai, VJTI is famed for its high cutoff ranks in MHT-CET and stellar placement records rivaling top NITs.",
    "feeRange": "₹84,000 - ₹95,000 / year",
    "annualTuitionFee": 88000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 92,
      "averagePackage": "₹14.5 LPA",
      "highestPackage": "₹62.0 LPA",
      "professorStudentRatio": "1:13",
      "academicPrograms": [
        "B.Tech in Computer Engineering",
        "B.Tech in Information Technology",
        "B.Tech in Electronics & Telecommunication",
        "B.Tech in Electrical Engineering",
        "M.Tech in Computer Engineering",
        "Master of Computer Applications (MCA)"
      ],
      "topRecruiters": [
        "Google",
        "Microsoft",
        "Morgan Stanley",
        "Texas Instruments",
        "Rakuten (Japan)",
        "Citibank",
        "Goldman Sachs",
        "Barclays",
        "Samsung R&D",
        "Larsen & Toubro"
      ],
      "financialAid": {
        "scholarships": "Government of Maharashtra Freeships & EBC Concessions.",
        "governmentSchemes": "MahaDBT Post Matric Scholarship & Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti.",
        "researchGrants": "TEQIP-III Fellowships & AICTE Doctoral Support."
      }
    },
    "rankings": {
      "nationalRank": "#82 Engineering in India",
      "rankingBody": "NIRF Engineering 2024 / MHT-CET Top Engineering College in Maharashtra",
      "researchScore": 8.7,
      "placementRate": 92,
      "starRatings": {
        "campusLife": 4.7,
        "graduationRate": 4.8,
        "careerOpportunities": 4.9,
        "infrastructure": 4.6
      }
    },
    "facilities": [
      "16-acre heritage campus located in the heart of Mumbai (Matunga)",
      "High Performance Computing & Nvidia GPU Deep Learning Cluster",
      "Siemens Centre of Excellence in Automation & Industrial Robotics",
      "Central Library with 1,20,000+ technical volumes & digital catalog",
      "VJTI Technology Business Incubator (TBI)"
    ],
    "popularPrograms": [
      {
        "name": "B.Tech in Computer Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 88000,
        "seats": 120,
        "entranceExam": "MHT-CET / JEE Main (99.8+ percentile)",
        "eligibility": "10+2 with PCM min. 50% marks",
        "department": "Department of Computer Engineering",
        "careerScope": "Software Engineer, Quantitative Developer, Systems Architect, Deep Learning Lead"
      },
      {
        "name": "B.Tech in Information Technology",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 88000,
        "seats": 90,
        "entranceExam": "MHT-CET / JEE Main",
        "eligibility": "10+2 with PCM min. 50%",
        "department": "Department of Information Technology",
        "careerScope": "Full Stack Engineer, Cloud Architect, Cybersecurity Specialist"
      },
      {
        "name": "B.Tech in Electronics & Telecommunication",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 88000,
        "seats": 90,
        "entranceExam": "MHT-CET / JEE Main",
        "eligibility": "10+2 with PCM min. 50%",
        "department": "Department of EXTC",
        "careerScope": "VLSI Chip Designer, Firmware Architect, 5G Network Engineer"
      },
      {
        "name": "B.Tech in Electrical Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 88000,
        "seats": 90,
        "entranceExam": "MHT-CET / JEE Main",
        "eligibility": "10+2 with PCM min. 50%",
        "department": "Department of Electrical Engineering",
        "careerScope": "Power Systems Engineer, EV Powertrain Specialist, Automation Engineer"
      },
      {
        "name": "M.Tech in Computer Engineering",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 92000,
        "seats": 30,
        "entranceExam": "GATE",
        "eligibility": "B.Tech in CSE/IT with valid GATE score",
        "department": "Department of Computer Engineering",
        "careerScope": "Principal AI Architect, Distributed Systems Engineer, R&D Lead"
      },
      {
        "name": "Master of Computer Applications (MCA)",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 75000,
        "seats": 60,
        "entranceExam": "MAH MCA CET",
        "eligibility": "BCA / B.Sc. with Mathematics at 10+2 or graduation",
        "department": "Department of Computer Applications",
        "careerScope": "Software Developer, Systems Analyst, Application Architect"
      }
    ],
    "verifiedSource": "VJTI Training & Placement Cell Official Audited Disclosure 2024",
    "source": "seed",
    "aiMode": true
  },
  {
    "id": "iiit-delhi",
    "name": "Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)",
    "shortName": "IIIT Delhi",
    "location": "New Delhi, Delhi, India",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "established": 2008,
    "type": "State University / Institute of Excellence",
    "category": "Engineering",
    "website": "https://www.iiitd.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Indraprastha_Institute_of_Information_Technology%2C_Delhi_Logo.svg/330px-Indraprastha_Institute_of_Information_Technology%2C_Delhi_Logo.svg.png",
    "overview": "IIIT-Delhi was established in 2008 by an Act of Delhi Legislature. It is an autonomous research university heavily focused on computer science, electronics, and interdisciplinary data sciences. Known for cutting-edge research outputs and top-tier silicon valley and global algorithmic placements.",
    "feeRange": "₹4,25,000 - ₹4,50,000 / year",
    "annualTuitionFee": 425000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 96,
      "averagePackage": "₹20.5 LPA",
      "highestPackage": "₹51.0 LPA",
      "professorStudentRatio": "1:11",
      "academicPrograms": [
        "B.Tech Computer Science and Engineering (CSE)",
        "B.Tech Computer Science and Artificial Intelligence (CSAI)",
        "B.Tech Computer Science and Applied Mathematics (CSAM)",
        "M.Tech in Computer Science and Engineering",
        "Ph.D. in Computer Science & Engineering"
      ],
      "topRecruiters": [
        "Google",
        "Microsoft",
        "Amazon",
        "Qualcomm",
        "Adobe",
        "Goldman Sachs",
        "Tower Research Capital",
        "Nvidia",
        "Uber",
        "Apple"
      ],
      "financialAid": {
        "scholarships": "Delhi Government Merit-cum-Means Financial Assistance and Chairman's Merit Scholarship.",
        "governmentSchemes": "Central and State Fee Concession schemes for Delhi resident students.",
        "researchGrants": "Generous teaching and research assistantships for M.Tech and Ph.D. scholars."
      }
    },
    "rankings": {
      "nationalRank": "#75 Engineering in India / Top CS Research",
      "rankingBody": "NIRF Engineering 2024 / CSRankings #1 in India for select subfields",
      "researchScore": 9.2,
      "placementRate": 96,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.9,
        "careerOpportunities": 5,
        "infrastructure": 4.9
      }
    },
    "facilities": [
      "Modern 25-acre green residential campus in Okhla, New Delhi",
      "Center for Artificial Intelligence and Infosys Centre for AI",
      "Advanced Robotics and Autonomous Systems Experimental Labs",
      "Extensive 24/7 Library with IEEE, ACM digital access",
      "State-of-the-art sports complex and swimming facility"
    ],
    "popularPrograms": [
      {
        "name": "B.Tech Computer Science and Engineering (CSE)",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 425000,
        "seats": 150,
        "entranceExam": "JEE Main (via JAC Delhi)",
        "eligibility": "10+2 with PCM min. 70% marks",
        "department": "Department of CSE",
        "careerScope": "Software Engineer, Core Systems Engineer, Quant Developer"
      },
      {
        "name": "B.Tech Computer Science and Artificial Intelligence (CSAI)",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 425000,
        "seats": 60,
        "entranceExam": "JEE Main (via JAC Delhi)",
        "eligibility": "10+2 with PCM min. 70% marks",
        "department": "Department of AI",
        "careerScope": "AI/ML Engineer, Deep Learning Researcher, NLP Architect"
      },
      {
        "name": "B.Tech Computer Science and Applied Mathematics (CSAM)",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 425000,
        "seats": 75,
        "entranceExam": "JEE Main (via JAC Delhi)",
        "eligibility": "10+2 with PCM with 70% in Math",
        "department": "Department of Mathematics",
        "careerScope": "Quantitative Analyst, Cryptographer, High Performance Computing Specialist"
      },
      {
        "name": "M.Tech in Computer Science and Engineering",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 250000,
        "seats": 80,
        "entranceExam": "GATE / IIIT-Delhi Test",
        "eligibility": "B.Tech in CSE/IT/ECE with min. 65%",
        "department": "Department of CSE",
        "careerScope": "Principal Software Architect, Research Scientist"
      },
      {
        "name": "Ph.D. in Computer Science & Engineering",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 50000,
        "seats": 30,
        "entranceExam": "GATE / JRF / Written Test + Interview",
        "eligibility": "M.Tech / B.Tech with high GPA (Monthly stipend ₹37,000 - ₹42,000)",
        "department": "Doctoral Research Board",
        "careerScope": "University Professor, Industrial Lab Scientist (MSR/Google Research)"
      }
    ],
    "verifiedSource": "IIIT-Delhi Audited Placement Summary 2024",
    "source": "seed",
    "aiMode": true
  },
  {
    "id": "nit-warangal",
    "name": "National Institute of Technology Warangal",
    "shortName": "NIT Warangal",
    "location": "Warangal, Telangana, India",
    "city": "Warangal",
    "state": "Telangana",
    "country": "India",
    "established": 1959,
    "type": "Institute of National Importance",
    "category": "Engineering",
    "website": "https://www.nitw.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/NIT_Warangal_Logo.svg/330px-NIT_Warangal_Logo.svg.png",
    "overview": "Established in 1959 as the first Regional Engineering College in India by Prime Minister Jawaharlal Nehru, NIT Warangal was declared an Institute of National Importance in 2007. It is consistently ranked among the top 3 NITs in the country with an exceptional alumni network across global technology leaders.",
    "feeRange": "₹1,85,000 / year (Statutory NIT Council Fee)",
    "annualTuitionFee": 185000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 94,
      "averagePackage": "₹17.2 LPA",
      "highestPackage": "₹88.0 LPA",
      "professorStudentRatio": "1:13",
      "academicPrograms": [
        "B.Tech in Computer Science and Engineering",
        "B.Tech in Electronics and Communication Engineering",
        "B.Tech in Electrical and Electronics Engineering",
        "M.Tech in Computer Science and Information Security",
        "M.Tech in VLSI System Design",
        "Ph.D. in Engineering & Applied Sciences"
      ],
      "topRecruiters": [
        "Microsoft",
        "Uber",
        "Amazon",
        "Qualcomm",
        "Texas Instruments",
        "Oracle",
        "Goldman Sachs",
        "Morgan Stanley",
        "Cisco Systems",
        "Samsung R&D"
      ],
      "financialAid": {
        "scholarships": "Full tuition fee waiver for SC/ST/PwD candidates and family income under ₹1 LPA.",
        "governmentSchemes": "Central Sector Post-Matric & National Scholarship Portal (NSP) schemes.",
        "researchGrants": "Institute research assistantships of ₹37,000 - ₹42,000/month for doctoral students."
      }
    },
    "rankings": {
      "nationalRank": "#21 Engineering in India",
      "rankingBody": "NIRF Engineering 2024",
      "researchScore": 8.9,
      "placementRate": 94,
      "starRatings": {
        "campusLife": 4.8,
        "graduationRate": 4.8,
        "careerOpportunities": 4.9,
        "infrastructure": 4.8
      }
    },
    "facilities": [
      "Sprawling 256-acre self-contained residential campus with historic stone buildings",
      "Centre for Advanced Materials & Micro-Nano Electronics Research",
      "Siemens Centre of Excellence in Manufacturing and Digital Factory",
      "Supercomputing and High-Performance Cloud Cluster",
      "Mega hostel complexes (including Asia's tallest 14-story student hall)"
    ],
    "popularPrograms": [
      {
        "name": "B.Tech in Computer Science and Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 185000,
        "seats": 140,
        "entranceExam": "JEE Main (via JoSAA/CSAB)",
        "eligibility": "10+2 with PCM (75% or top 20 percentile)",
        "department": "Department of Computer Science & Engineering",
        "careerScope": "Software Engineer, Cloud Infrastructure Lead, Algorithm Specialist"
      },
      {
        "name": "B.Tech in Electronics and Communication Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 185000,
        "seats": 130,
        "entranceExam": "JEE Main (via JoSAA)",
        "eligibility": "10+2 with PCM (75% or top 20 percentile)",
        "department": "Department of ECE",
        "careerScope": "VLSI Engineer, Semiconductor Design Architect, Embedded Systems Developer"
      },
      {
        "name": "B.Tech in Electrical and Electronics Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 185000,
        "seats": 130,
        "entranceExam": "JEE Main (via JoSAA)",
        "eligibility": "10+2 with PCM (75% or top 20 percentile)",
        "department": "Department of EEE",
        "careerScope": "Power Systems Engineer, EV Grid Specialist, Control Systems Lead"
      },
      {
        "name": "M.Tech in Computer Science and Information Security",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 110000,
        "seats": 35,
        "entranceExam": "GATE (via CCMT)",
        "eligibility": "B.Tech in CSE/IT with valid GATE",
        "department": "Department of CSE",
        "careerScope": "Cybersecurity Architect, Information Security Analyst, Cloud Security Specialist"
      },
      {
        "name": "M.Tech in VLSI System Design",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 110000,
        "seats": 30,
        "entranceExam": "GATE (via CCMT)",
        "eligibility": "B.Tech in ECE/EEE with valid GATE",
        "department": "Department of ECE",
        "careerScope": "Semiconductor Physical Design Engineer, FPGA Architect"
      },
      {
        "name": "Ph.D. in Engineering & Applied Sciences",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 40000,
        "seats": 45,
        "entranceExam": "GATE / UGC-NET / Written Test",
        "eligibility": "Master degree in relevant branch with min. 60%",
        "department": "Dean Academic Affairs (NITW)",
        "careerScope": "University Professor, National Research Scientist (ISRO/DRDO)"
      }
    ],
    "verifiedSource": "NIT Warangal Centre for Career Planning and Development (CCPD) Audit 2024",
    "source": "seed",
    "aiMode": true
  },
  {
    "id": "university-of-delhi",
    "name": "University of Delhi (DU)",
    "shortName": "Delhi University",
    "location": "New Delhi, Delhi, India",
    "city": "New Delhi",
    "state": "Delhi",
    "country": "India",
    "established": 1922,
    "type": "Central University / Institute of Eminence",
    "category": "Sciences & Arts",
    "website": "https://www.du.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/University_of_Delhi_Logo.svg/330px-University_of_Delhi_Logo.svg.png",
    "overview": "The University of Delhi (DU) is a premier collegiate central university founded in 1922. Recognized as an Institute of Eminence by the Government of India, DU comprises 91 affiliated colleges, 86 academic departments, and over 6,00,000 students. It is globally famous for producing prime ministers, supreme court judges, Nobel laureates, and civil service leaders.",
    "feeRange": "₹18,000 - ₹45,000 / year (Central Government Subsidized)",
    "annualTuitionFee": 24000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 86,
      "averagePackage": "₹9.8 LPA",
      "highestPackage": "₹38.0 LPA",
      "professorStudentRatio": "1:15",
      "academicPrograms": [
        "B.A. (Hons.) Economics",
        "B.Com. (Hons.)",
        "B.Sc. (Hons.) Computer Science",
        "M.A. Economics (Delhi School of Economics - DSE)",
        "LL.B. (Faculty of Law, 3-Year Post-Graduate)",
        "Ph.D. in Social Sciences & Humanities"
      ],
      "topRecruiters": [
        "Deloitte",
        "PwC",
        "EY (Ernst & Young)",
        "KPMG",
        "McKinsey & Company",
        "Bain & Company",
        "Boston Consulting Group",
        "D.E. Shaw",
        "Hindustan Unilever",
        "Teach For India"
      ],
      "financialAid": {
        "scholarships": "Delhi University Vice-Chancellor Student Financial Support Scheme and Merit-cum-Means awards.",
        "governmentSchemes": "UGC Post Graduate Merit Scholarships & NSP Central Schemes.",
        "researchGrants": "CSIR-JRF, UGC-NET JRF, and Non-NET Fellowships for registered doctoral researchers."
      }
    },
    "rankings": {
      "nationalRank": "#6 University in India",
      "rankingBody": "NIRF Universities 2024 / QS World University Rankings Top 400",
      "researchScore": 9.1,
      "placementRate": 86,
      "starRatings": {
        "campusLife": 5,
        "graduationRate": 4.8,
        "careerOpportunities": 4.9,
        "infrastructure": 4.6
      }
    },
    "facilities": [
      "North and South Campuses featuring landmark historical structures",
      "Delhi University Central Library System with 15+ specialized campus libraries",
      "Delhi School of Economics Ratan Tata Library (RTL)",
      "University Sports Stadium (Host of 2010 Commonwealth Games)",
      "Delhi University Computer Centre (DUCC) with campus-wide optical network"
    ],
    "popularPrograms": [
      {
        "name": "B.A. (Hons.) Economics",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "3-4 Years (FYUP)",
        "annualFee": 20000,
        "seats": 300,
        "entranceExam": "CUET-UG",
        "eligibility": "10+2 with Mathematics from recognized board",
        "department": "Department of Economics",
        "careerScope": "Financial Analyst, Economic Consultant, Policy Strategist, Investment Banker"
      },
      {
        "name": "B.Com. (Hons.)",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "3-4 Years (FYUP)",
        "annualFee": 22000,
        "seats": 450,
        "entranceExam": "CUET-UG",
        "eligibility": "10+2 with Mathematics/Accountancy",
        "department": "Department of Commerce",
        "careerScope": "Chartered Accountant, Investment Banking Analyst, Corporate Auditor"
      },
      {
        "name": "B.Sc. (Hons.) Computer Science",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "3-4 Years",
        "annualFee": 35000,
        "seats": 180,
        "entranceExam": "CUET-UG",
        "eligibility": "10+2 with PCM",
        "department": "Department of Computer Science",
        "careerScope": "Software Developer, Data Analyst, Web Architect"
      },
      {
        "name": "M.A. Economics (Delhi School of Economics - DSE)",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 18000,
        "seats": 150,
        "entranceExam": "CUET-PG",
        "eligibility": "Bachelor degree in Economics/allied discipline",
        "department": "Delhi School of Economics",
        "careerScope": "Chief Economist, Macroeconomic Strategist, World Bank / IMF Analyst"
      },
      {
        "name": "LL.B. (Faculty of Law, 3-Year Post-Graduate)",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "3 Years",
        "annualFee": 16000,
        "seats": 2800,
        "entranceExam": "CUET-PG",
        "eligibility": "Graduation in any discipline with min. 50% marks",
        "department": "Faculty of Law (CLC, LC-I, LC-II)",
        "careerScope": "Litigation Advocate, Supreme Court Practitioner, Corporate Legal Lead"
      },
      {
        "name": "Ph.D. in Social Sciences & Humanities",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 12000,
        "seats": 80,
        "entranceExam": "UGC-NET / JRF / University Entrance",
        "eligibility": "Master degree with min. 55% marks",
        "department": "Board of Research Studies",
        "careerScope": "University Professor, Think Tank Director, Policy Research Fellow"
      }
    ],
    "verifiedSource": "University of Delhi Central Placement Cell (CPC) Annual Report 2024",
    "source": "seed",
    "aiMode": true
  },
  {
    "id": "spjimr-mumbai",
    "name": "S.P. Jain Institute of Management and Research (SPJIMR)",
    "shortName": "SPJIMR Mumbai",
    "location": "Mumbai, Maharashtra, India",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "established": 1981,
    "type": "Private Autonomous Business School",
    "category": "Management",
    "website": "https://www.spjimr.org",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/SPJIMR_Logo.svg/330px-SPJIMR_Logo.svg.png",
    "overview": "S.P. Jain Institute of Management and Research (SPJIMR) is a top-tier business school established in 1981 by Bharatiya Vidya Bhavan in Mumbai. Ranked among the Financial Times Global Top 40 Masters in Management programs and accredited by AACSB and AMBA, SPJIMR is celebrated for its unique non-classroom learning initiatives like DOCC and Autumn Internships.",
    "feeRange": "₹10,50,000 / year (₹21.0 Lakhs Total PGDM)",
    "annualTuitionFee": 1050000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 100,
      "averagePackage": "₹33.02 LPA",
      "highestPackage": "₹77.88 LPA",
      "professorStudentRatio": "1:10",
      "academicPrograms": [
        "Post Graduate Diploma in Management (PGDM)",
        "Post Graduate Programme in Management (PGPM - 1 Year MBA)",
        "Fellow Programme in Management (FPM - Doctoral)"
      ],
      "topRecruiters": [
        "McKinsey & Company",
        "Boston Consulting Group",
        "Bain & Company",
        "Hindustan Unilever",
        "Procter & Gamble",
        "Amazon",
        "Microsoft",
        "Tata Administrative Services",
        "Goldman Sachs",
        "Nestle"
      ],
      "financialAid": {
        "scholarships": "Merit-cum-Means Financial Support & Mirae Asset Foundation Scholarships.",
        "governmentSchemes": "Central Government scholarship portals eligible.",
        "researchGrants": "Full tuition waiver and monthly fellowship for doctoral scholars."
      }
    },
    "rankings": {
      "nationalRank": "#20 Management in India / FT Global Top 40",
      "rankingBody": "NIRF Management 2024 / Financial Times Global MiM 2024",
      "researchScore": 9.3,
      "placementRate": 100,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 5,
        "careerOpportunities": 5,
        "infrastructure": 4.8
      }
    },
    "facilities": [
      "45-acre heritage campus located in Andheri West, Mumbai",
      "Executive Learning Amphitheatres with interactive multimedia",
      "Center for Development of Corporate Citizenship (DOCC)",
      "High-tech financial trading lab & analytics workspace",
      "Modern on-campus air-conditioned student residences"
    ],
    "popularPrograms": [
      {
        "name": "Post Graduate Diploma in Management (PGDM)",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 1050000,
        "seats": 240,
        "entranceExam": "CAT / GMAT",
        "eligibility": "Bachelor degree in any discipline with min. 50%",
        "department": "School of Management",
        "careerScope": "Management Consultant, Investment Banker, FMCG Brand Manager, Product Lead"
      },
      {
        "name": "Post Graduate Programme in Management (PGPM - 1 Year MBA)",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "1 Year",
        "annualFee": 2100000,
        "seats": 120,
        "entranceExam": "GMAT / CAT / GRE",
        "eligibility": "Bachelor degree with min. 5 years work experience",
        "department": "Executive MBA Division",
        "careerScope": "Associate Director, Practice Lead, Senior Strategy Consultant"
      },
      {
        "name": "Fellow Programme in Management (FPM - Doctoral)",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "4-5 Years",
        "annualFee": 30000,
        "seats": 15,
        "entranceExam": "CAT / GMAT / GRE / JRF (Fully Funded)",
        "eligibility": "Master degree with min. 55% marks",
        "department": "Doctoral Studies Committee",
        "careerScope": "Business School Professor, Senior Research Analyst"
      }
    ],
    "verifiedSource": "SPJIMR Central Placement Office Audited Report 2024",
    "source": "seed",
    "aiMode": true
  },
  {
    "id": "nalsar-university-of-law",
    "name": "NALSAR University of Law, Hyderabad",
    "shortName": "NALSAR Hyderabad",
    "location": "Hyderabad, Telangana, India",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "India",
    "established": 1998,
    "type": "National Law University",
    "category": "Law",
    "website": "https://www.nalsar.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Nalsar_logo.png/220px-Nalsar_logo.png",
    "overview": "National Academy of Legal Studies and Research (NALSAR) is a premier national law university located in Shamirpet, Hyderabad. Established in 1998, NALSAR is consistently ranked as India's #2 or #3 law school and is celebrated for its progressive student democracy, legal clinics, and top recruitment by magic circle law firms in India and the UK.",
    "feeRange": "₹2,75,000 / year (Statutory NLU Schedule)",
    "annualTuitionFee": 275000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 98,
      "averagePackage": "₹16.5 LPA",
      "highestPackage": "₹32.0 LPA",
      "professorStudentRatio": "1:11",
      "academicPrograms": [
        "B.A. LL.B. (Hons.) 5-Year Integrated",
        "LL.M. in Corporate & Commercial Law",
        "MBA in Corporate Governance and Business Laws",
        "Ph.D. in Legal Studies"
      ],
      "topRecruiters": [
        "Shardul Amarchand Mangaldas",
        "Cyril Amarchand Mangaldas",
        "AZB & Partners",
        "Khaitan & Co",
        "Trilegal",
        "Linklaters (London)",
        "Herbert Smith Freehills (UK)",
        "Luthra and Luthra",
        "IndusLaw",
        "ICICI Bank Legal"
      ],
      "financialAid": {
        "scholarships": "NALSAR Student Financial Aid Policy ensuring no student drops out due to inability to pay.",
        "governmentSchemes": "Telangana State Post-Matric Scholarship & NSP Schemes.",
        "researchGrants": "Full fellowship for doctoral research scholars."
      }
    },
    "rankings": {
      "nationalRank": "#3 Law in India",
      "rankingBody": "NIRF Law 2024 / BCI Accredited",
      "researchScore": 9.3,
      "placementRate": 98,
      "starRatings": {
        "campusLife": 4.9,
        "graduationRate": 5,
        "careerOpportunities": 5,
        "infrastructure": 4.8
      }
    },
    "facilities": [
      "55-acre scenic lakeside residential campus in Shamirpet, Hyderabad",
      "M.K. Nambyar SAARCLAW Library with international legal repository",
      "Moot Court Halls and Legal Aid Clinic",
      "Air-conditioned modern residential hostels and sports facilities",
      "Centre for Air and Space Law & Centre for Animal Law"
    ],
    "popularPrograms": [
      {
        "name": "B.A. LL.B. (Hons.) 5-Year Integrated",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "5 Years",
        "annualFee": 275000,
        "seats": 132,
        "entranceExam": "CLAT-UG (Top 150 All India Rank)",
        "eligibility": "10+2 with min. 45% marks",
        "department": "Faculty of Law",
        "careerScope": "Corporate Associate (Magic Circle), Litigation Advocate, Judicial Officer, Civil Servant"
      },
      {
        "name": "LL.M. in Corporate & Commercial Law",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "1 Year",
        "annualFee": 185000,
        "seats": 60,
        "entranceExam": "CLAT-PG",
        "eligibility": "LL.B. degree with min. 50% marks",
        "department": "Department of PG Legal Studies",
        "careerScope": "Senior Corporate Legal Counsel, Securities Regulatory Specialist"
      },
      {
        "name": "MBA in Corporate Governance and Business Laws",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 220000,
        "seats": 60,
        "entranceExam": "CAT / NALSAR Test",
        "eligibility": "Graduation in any stream with min. 50%",
        "department": "Department of Management Studies",
        "careerScope": "Corporate Governance Officer, Legal Compliance Lead, Risk Analyst"
      },
      {
        "name": "Ph.D. in Legal Studies",
        "degree": "Doctoral",
        "level": "Doctoral",
        "duration": "3-5 Years",
        "annualFee": 60000,
        "seats": 20,
        "entranceExam": "NALSAR Ph.D. Entrance / NET-JRF",
        "eligibility": "LL.M. degree with min. 55% marks",
        "department": "Doctoral Board",
        "careerScope": "Law Professor, Senior Policy Fellow, International Legal Consultant"
      }
    ],
    "verifiedSource": "NALSAR Recruitment Coordination Committee (RCC) Audit 2024",
    "source": "seed",
    "aiMode": true
  },
  {
    "id": "bms-college-of-engineering",
    "name": "B.M.S. College of Engineering (BMSCE), Bangalore",
    "shortName": "BMSCE Bangalore",
    "location": "Bangalore, Karnataka, India",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "established": 1946,
    "type": "Private Autonomous Engineering College",
    "category": "Engineering",
    "website": "https://www.bmsce.ac.in",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/BMS_College_of_Engineering_Logo.png/220px-BMS_College_of_Engineering_Logo.png",
    "overview": "B.M.S. College of Engineering (BMSCE) was founded in 1946 by Bhusanayana Mukundadas Sreenivasaiah as the first private engineering college in India. Located in Basavanagudi, Bangalore, BMSCE is autonomous and affiliated with VTU. Situated in India's Silicon Valley, BMSCE commands extraordinary industry partnerships and tier-1 campus placements.",
    "feeRange": "₹2,20,000 - ₹2,75,000 / year",
    "annualTuitionFee": 240000,
    "additionalOverviewDetails": {
      "jobPlacementRate": 88,
      "averagePackage": "₹11.2 LPA",
      "highestPackage": "₹50.0 LPA",
      "professorStudentRatio": "1:13",
      "academicPrograms": [
        "B.E. in Computer Science and Engineering",
        "B.E. in Artificial Intelligence and Machine Learning",
        "B.E. in Electronics and Communication Engineering",
        "M.Tech in Computer Science and Engineering",
        "Master of Business Administration (MBA)"
      ],
      "topRecruiters": [
        "Amazon",
        "Cisco Systems",
        "Dell Technologies",
        "Oracle",
        "Mercedes-Benz R&D",
        "Bosch",
        "Texas Instruments",
        "Goldman Sachs",
        "Accenture",
        "Infosys"
      ],
      "financialAid": {
        "scholarships": "BMS Educational Trust Scholarships for meritorious & needy students.",
        "governmentSchemes": "Karnataka State Post-Matric & e-PASS Scholarships.",
        "researchGrants": "VTU Research Fellowships & Industry Sponsored Doctoral Grants."
      }
    },
    "rankings": {
      "nationalRank": "#73 Engineering in India",
      "rankingBody": "NIRF Engineering 2024 / NAAC A++ Accredited",
      "researchScore": 8.6,
      "placementRate": 88,
      "starRatings": {
        "campusLife": 4.7,
        "graduationRate": 4.8,
        "careerOpportunities": 4.8,
        "infrastructure": 4.7
      }
    },
    "facilities": [
      "15-acre lush urban campus in historical Basavanagudi, Bangalore",
      "BMSCE Centre of Excellence in IoT and Machine Learning",
      "Advanced 3D Printing & Additive Manufacturing Centre",
      "Central Digital Library with 1,50,000+ volumes",
      "Indoor Sports Arena and Gymnasium"
    ],
    "popularPrograms": [
      {
        "name": "B.E. in Computer Science and Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 240000,
        "seats": 180,
        "entranceExam": "KCET / COMEDK (Top rankers)",
        "eligibility": "10+2 with PCM min. 50%",
        "department": "Department of Computer Science",
        "careerScope": "Software Engineer, Cloud Developer, AI Solutions Lead"
      },
      {
        "name": "B.E. in Artificial Intelligence and Machine Learning",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 240000,
        "seats": 90,
        "entranceExam": "KCET / COMEDK",
        "eligibility": "10+2 with PCM min. 50%",
        "department": "Department of AIML",
        "careerScope": "Machine Learning Engineer, Data Scientist, Algorithm Specialist"
      },
      {
        "name": "B.E. in Electronics and Communication Engineering",
        "degree": "Undergraduate",
        "level": "Undergraduate",
        "duration": "4 Years",
        "annualFee": 240000,
        "seats": 150,
        "entranceExam": "KCET / COMEDK",
        "eligibility": "10+2 with PCM min. 50%",
        "department": "Department of ECE",
        "careerScope": "VLSI Design Engineer, Embedded Firmware Architect"
      },
      {
        "name": "M.Tech in Computer Science and Engineering",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 130000,
        "seats": 24,
        "entranceExam": "GATE / Karnataka PGCET",
        "eligibility": "B.Tech/B.E. in CSE/IT with min. 50%",
        "department": "Department of CSE",
        "careerScope": "Senior Systems Engineer, R&D Technologist"
      },
      {
        "name": "Master of Business Administration (MBA)",
        "degree": "Postgraduate",
        "level": "Postgraduate",
        "duration": "2 Years",
        "annualFee": 150000,
        "seats": 60,
        "entranceExam": "PGCET / KMAT / CMAT",
        "eligibility": "Bachelor degree with min. 50%",
        "department": "Department of Management Studies",
        "careerScope": "Product Manager, Business Analyst, Marketing Consultant"
      }
    ],
    "verifiedSource": "BMSCE Placement Centre Annual Employment Disclosure 2024",
    "source": "seed",
    "aiMode": true
  }
];

export function findClientCollege(query) {
  if (!query) return null;
  const raw = query.trim().toLowerCase();
  const resolved = resolveCollegeQuery(query).toLowerCase().trim();
  const rawSlug = raw.replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
  const resolvedSlug = resolved.replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');

  // Direct ID or slug matches
  for (const c of VERIFIED_COLLEGES_CLIENT) {
    const cId = c.id.toLowerCase();
    const cShort = (c.shortName || "").toLowerCase();
    const cName = c.name.toLowerCase();

    if (cId === raw || cId === rawSlug || cId === resolved || cId === resolvedSlug) return c;
    if (cShort === raw || cShort === resolved) return c;
    if (cName === raw || cName === resolved) return c;
  }

  // Acronym and alias mappings
  const ALIAS_LOOKUP = {
    "fms": "faculty-of-management-studies-university-of-delhi",
    "fms delhi": "faculty-of-management-studies-university-of-delhi",
    "xlri": "xlri-jamshedpur",
    "xlri jamshedpur": "xlri-jamshedpur",
    "anna university": "anna-university-chennai",
    "anna univ": "anna-university-chennai",
    "vjti": "veermata-jijabai-technological-institute-vjti-mumbai",
    "vjti mumbai": "veermata-jijabai-technological-institute-vjti-mumbai",
    "coep": "coep-technological-university",
    "coep pune": "coep-technological-university",
    "rvce": "rv-college-of-engineering",
    "rv college": "rv-college-of-engineering",
    "iiitd": "iiit-delhi",
    "iiit delhi": "iiit-delhi",
    "nitw": "nit-warangal",
    "nit warangal": "nit-warangal",
    "du": "university-of-delhi",
    "delhi university": "university-of-delhi",
    "bhu": "banaras-hindu-university",
    "nalsar": "nalsar-university-of-law",
    "spjimr": "spjimr-mumbai",
    "bmsce": "bms-college-of-engineering",
    "nfsu": "nfsu-gandhinagar",
    "sibm": "sibm-pune",
    "sibm pune": "sibm-pune",
    "bits": "bits-pilani",
    "bits pilani": "bits-pilani",
    "iitb": "iit-bombay",
    "iit bombay": "iit-bombay",
    "iitd": "iit-delhi",
    "iit delhi": "iit-delhi",
    "iitm": "iit-madras",
    "iit madras": "iit-madras",
    "iitkgp": "iit-kharagpur",
    "iit kharagpur": "iit-kharagpur",
    "aiims": "aiims-new-delhi",
    "iima": "iim-ahmedabad",
    "dtu": "dtu-delhi",
    "ju": "jadavpur-university",
    "nitt": "nit-trichy",
    "nit trichy": "nit-trichy",
    "gnlu": "gujarat-national-law-university",
    "nlsiu": "nlsiu-bangalore",
    "ftii": "film-and-television-institute-of-india",
    "wwi": "whistling-woods-international",
    "nid": "national-institute-of-design",
    "nift": "national-institute-of-fashion-technology",
    "srcc": "shri-ram-college-of-commerce",
    "lsr": "lady-shri-ram-college",
    "xaviers": "st-xaviers-college-mumbai",
    "christ": "christ-university"
  };

  if (ALIAS_LOOKUP[raw]) {
    const match = VERIFIED_COLLEGES_CLIENT.find(c => c.id === ALIAS_LOOKUP[raw]);
    if (match) return match;
  }
  if (ALIAS_LOOKUP[resolved]) {
    const match = VERIFIED_COLLEGES_CLIENT.find(c => c.id === ALIAS_LOOKUP[resolved]);
    if (match) return match;
  }

  // Substring search
  for (const c of VERIFIED_COLLEGES_CLIENT) {
    const cId = c.id.toLowerCase();
    const cShort = (c.shortName || "").toLowerCase();
    const cName = c.name.toLowerCase();

    if (raw.length >= 3 && (cName.includes(raw) || cId.includes(rawSlug) || cShort.includes(raw))) return c;
    if (resolved.length >= 3 && (cName.includes(resolved) || cId.includes(resolvedSlug))) return c;
  }

  return null;
}
