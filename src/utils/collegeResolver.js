/**
 * Universal College & University Alias / Acronym Resolver (Client-side)
 * Expands queries like 'nfsu', 'iitkgp', 'bits', 'dtu', 'iiith' to their full official names
 * to ensure 100% resolution across Wikipedia, Shiksha, and open academic databases.
 */

export const COLLEGE_ALIASES = {
  // National Forensic Sciences University
  nfsu: "National Forensic Sciences University",
  "nfsu gandhinagar": "National Forensic Sciences University",
  "nfsu delhi": "National Forensic Sciences University",
  "national forensic science": "National Forensic Sciences University",
  gfsu: "National Forensic Sciences University",

  // Symbiosis Institutes
  sibm: "Symbiosis Institute of Business Management, Pune",
  "sibm pune": "Symbiosis Institute of Business Management, Pune",
  "symbiosis pune": "Symbiosis Institute of Business Management, Pune",
  "symbiosis institute of business management": "Symbiosis Institute of Business Management, Pune",
  scmhrd: "Symbiosis Centre for Management and Human Resource Development",
  siu: "Symbiosis International University",

  // Premier IITs
  iitb: "Indian Institute of Technology Bombay",
  "iit bombay": "Indian Institute of Technology Bombay",
  iitd: "Indian Institute of Technology Delhi",
  "iit delhi": "Indian Institute of Technology Delhi",
  iitm: "Indian Institute of Technology Madras",
  "iit madras": "Indian Institute of Technology Madras",
  iitk: "Indian Institute of Technology Kanpur",
  "iit kanpur": "Indian Institute of Technology Kanpur",
  iitkgp: "Indian Institute of Technology Kharagpur",
  "iit kharagpur": "Indian Institute of Technology Kharagpur",
  kgp: "Indian Institute of Technology Kharagpur",
  iitr: "Indian Institute of Technology Roorkee",
  "iit roorkee": "Indian Institute of Technology Roorkee",
  iitg: "Indian Institute of Technology Guwahati",
  "iit guwahati": "Indian Institute of Technology Guwahati",
  iith: "Indian Institute of Technology Hyderabad",
  "iit hyderabad": "Indian Institute of Technology Hyderabad",
  "iit bhu": "Indian Institute of Technology (BHU) Varanasi",
  "iit varanasi": "Indian Institute of Technology (BHU) Varanasi",
  "iit ism": "Indian Institute of Technology (ISM) Dhanbad",
  "iit dhanbad": "Indian Institute of Technology (ISM) Dhanbad",

  // Premier NITs
  nitt: "National Institute of Technology Tiruchirappalli",
  "nit trichy": "National Institute of Technology Tiruchirappalli",
  nitk: "National Institute of Technology Karnataka Surathkal",
  "nit surathkal": "National Institute of Technology Karnataka Surathkal",
  nitw: "National Institute of Technology Warangal",
  "nit warangal": "National Institute of Technology Warangal",
  nitr: "National Institute of Technology Rourkela",
  "nit rourkela": "National Institute of Technology Rourkela",
  nitc: "National Institute of Technology Calicut",
  "nit calicut": "National Institute of Technology Calicut",
  vnit: "Visvesvaraya National Institute of Technology Nagpur",
  "vnit nagpur": "Visvesvaraya National Institute of Technology Nagpur",
  mnit: "Malaviya National Institute of Technology Jaipur",
  "mnit jaipur": "Malaviya National Institute of Technology Jaipur",
  svnit: "Sardar Vallabhbhai National Institute of Technology Surat",
  "svnit surat": "Sardar Vallabhbhai National Institute of Technology Surat",
  mnnit: "Motilal Nehru National Institute of Technology Allahabad",
  "mnnit allahabad": "Motilal Nehru National Institute of Technology Allahabad",
  manit: "Maulana Azad National Institute of Technology Bhopal",

  // Premier IIITs
  iiith: "International Institute of Information Technology, Hyderabad",
  "iiit hyderabad": "International Institute of Information Technology, Hyderabad",
  iiitb: "International Institute of Information Technology, Bangalore",
  "iiit bangalore": "International Institute of Information Technology, Bangalore",
  iiitd: "Indraprastha Institute of Information Technology Delhi",
  "iiit delhi": "Indraprastha Institute of Information Technology Delhi",
  iiita: "Indian Institute of Information Technology, Allahabad",

  // BITS Pilani Campuses
  bits: "Birla Institute of Technology and Science, Pilani",
  "bits pilani": "Birla Institute of Technology and Science, Pilani",
  "bits goa": "BITS Pilani, K. K. Birla Goa Campus",
  "bits hyderabad": "BITS Pilani, Hyderabad Campus",

  // Delhi Premier Technical Universities
  dtu: "Delhi Technological University",
  dce: "Delhi Technological University",
  "delhi tech": "Delhi Technological University",
  nsut: "Netaji Subhas University of Technology",
  nsit: "Netaji Subhas University of Technology",

  // Premier State Universities
  ju: "Jadavpur University",
  "jadavpur university": "Jadavpur University",
  "anna university": "Anna University",
  du: "University of Delhi",
  "delhi university": "University of Delhi",
  bhu: "Banaras Hindu University",
  amu: "Aligarh Muslim University",
  jnu: "Jawaharlal Nehru University",
  cu: "University of Calcutta",
  sppu: "Savitribai Phule Pune University",
  mu: "University of Mumbai",
  coep: "COEP Technological University",
  vjti: "Veermata Jijabai Technological Institute",
  rvce: "R.V. College of Engineering",
  pes: "PES University",

  // Private Institutes & Deemed Universities
  vit: "Vellore Institute of Technology",
  "vit vellore": "Vellore Institute of Technology",
  thapar: "Thapar Institute of Engineering and Technology",
  srm: "SRM Institute of Science and Technology",
  manipal: "Manipal Academy of Higher Education",
  mahe: "Manipal Academy of Higher Education",
  lpu: "Lovely Professional University",
  amity: "Amity University",

  // Medical Apex Institutes
  aiims: "All India Institute of Medical Sciences, New Delhi",
  "aiims delhi": "All India Institute of Medical Sciences, New Delhi",
  cmc: "Christian Medical College, Vellore",

  // Management (IIMs)
  iima: "Indian Institute of Management Ahmedabad",
  iimb: "Indian Institute of Management Bangalore",
  iimc: "Indian Institute of Management Calcutta",
  iiml: "Indian Institute of Management Lucknow",
  fms: "Faculty of Management Studies, University of Delhi",
  xlri: "XLRI – Xavier School of Management",

  // Law Universities (NLUs)
  gnlu: "Gujarat National Law University",
  "gnlu gandhinagar": "Gujarat National Law University",
  "gujarat national law university": "Gujarat National Law University",
  nlsiu: "National Law School of India University",
  "nls bangalore": "National Law School of India University",
  nalsar: "NALSAR University of Law",
  "nalsar hyderabad": "NALSAR University of Law",
  nujs: "West Bengal National University of Juridical Sciences",
  "nujs kolkata": "West Bengal National University of Juridical Sciences",
  nlud: "National Law University, Delhi",
  "nlu delhi": "National Law University, Delhi",
  nluj: "National Law University, Jodhpur",
  nliu: "National Law Institute University, Bhopal",

  // Arts, Humanities & Psychology
  lsr: "Lady Shri Ram College for Women (LSR)",
  "lady shri ram": "Lady Shri Ram College for Women (LSR)",
  "lady shri ram college": "Lady Shri Ram College for Women (LSR)",
  "st stephens": "St. Stephen's College, Delhi",
  "st stephens college": "St. Stephen's College, Delhi",
  fergusson: "Fergusson College, Pune",
  "fergusson college": "Fergusson College, Pune",
  ashoka: "Ashoka University",
  "ashoka university": "Ashoka University",
  "miranda house": "Miranda House, University of Delhi",
  "hindu college": "Hindu College, University of Delhi",

  // Commerce & BMS
  srcc: "Shri Ram College of Commerce (SRCC)",
  "shri ram college of commerce": "Shri Ram College of Commerce (SRCC)",
  "st xaviers": "St. Xavier's College (Autonomous), Mumbai",
  "st xavier": "St. Xavier's College (Autonomous), Mumbai",
  "xaviers mumbai": "St. Xavier's College (Autonomous), Mumbai",
  "st xaviers mumbai": "St. Xavier's College (Autonomous), Mumbai",
  christ: "Christ (Deemed to be University), Bangalore",
  "christ university": "Christ (Deemed to be University), Bangalore",
  mithibai: "Mithibai College, Mumbai",
  "nm college": "Narsee Monjee College of Commerce and Economics",
  loyola: "Loyola College, Chennai",

  // Film, Cinema & Mass Media
  ftii: "Film and Television Institute of India (FTII)",
  "ftii pune": "Film and Television Institute of India (FTII)",
  "film and television institute of india": "Film and Television Institute of India (FTII)",
  "whistling woods": "Whistling Woods International (WWI), Mumbai",
  wwi: "Whistling Woods International (WWI), Mumbai",
  "whistling woods international": "Whistling Woods International (WWI), Mumbai",
  srfti: "Satyajit Ray Film and Television Institute (SRFTI)",
  "jamia mcrc": "A.J.K. Mass Communication Research Centre (MCRC)",
  simc: "Symbiosis Institute of Media & Communication",

  // Design, Fashion & Fine Arts
  nid: "National Institute of Design (NID), Ahmedabad",
  "nid ahmedabad": "National Institute of Design (NID), Ahmedabad",
  "national institute of design": "National Institute of Design (NID), Ahmedabad",
  nift: "National Institute of Fashion Technology (NIFT), New Delhi",
  "nift delhi": "National Institute of Fashion Technology (NIFT), New Delhi",
  "national institute of fashion technology": "National Institute of Fashion Technology (NIFT), New Delhi",
  srishti: "Srishti Manipal Institute of Art, Design and Technology",

  // Top Global Universities
  purdue: "Purdue University",
  stanford: "Stanford University",
  mit: "Massachusetts Institute of Technology (MIT)",
  harvard: "Harvard University",
  caltech: "California Institute of Technology",
  oxford: "University of Oxford",
  cambridge: "University of Cambridge",
  cmu: "Carnegie Mellon University",
  berkeley: "University of California, Berkeley",
  ucla: "University of California, Los Angeles",
  princeton: "Princeton University",
  columbia: "Columbia University",
};

export function resolveCollegeQuery(query) {
  if (!query || !query.trim()) return "";
  const cleaned = query.toLowerCase().trim().replace(/['.]/g, "").replace(/\s+/g, " ");

  if (COLLEGE_ALIASES[cleaned]) {
    return COLLEGE_ALIASES[cleaned];
  }

  for (const [alias, fullName] of Object.entries(COLLEGE_ALIASES)) {
    if (cleaned === alias || cleaned.startsWith(alias + " ") || cleaned.endsWith(" " + alias)) {
      return fullName;
    }
  }

  return query.trim();
}
