/**
 * Universal College & University Alias / Acronym Resolver
 * Resolves acronyms, abbreviations, and informal college names (e.g., 'nfsu', 'iitkgp', 'bits', 'dtu')
 * to their exact official academic designations across Google, Shiksha, NIRF, and Wikipedia.
 */

export const COLLEGE_ALIASES: Record<string, string> = {
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
  "scmhrd pune": "Symbiosis Centre for Management and Human Resource Development",
  siu: "Symbiosis International University",
  "symbiosis international": "Symbiosis International University",

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
  "iit indore": "Indian Institute of Technology Indore",
  iiti: "Indian Institute of Technology Indore",
  "iit mandi": "Indian Institute of Technology Mandi",
  "iit ropar": "Indian Institute of Technology Ropar",
  "iit gandhinagar": "Indian Institute of Technology Gandhinagar",
  iitgn: "Indian Institute of Technology Gandhinagar",
  "iit patna": "Indian Institute of Technology Patna",
  "iit bhubaneswar": "Indian Institute of Technology Bhubaneswar",
  "iit jodhpur": "Indian Institute of Technology Jodhpur",
  "iit tirupati": "Indian Institute of Technology Tirupati",
  "iit palakkad": "Indian Institute of Technology Palakkad",
  "iit jammu": "Indian Institute of Technology Jammu",
  "iit goa": "Indian Institute of Technology Goa",
  "iit dharwad": "Indian Institute of Technology Dharwad",

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
  "manit bhopal": "Maulana Azad National Institute of Technology Bhopal",
  nitkkr: "National Institute of Technology Kurukshetra",
  "nit kurukshetra": "National Institute of Technology Kurukshetra",
  nits: "National Institute of Technology Silchar",
  "nit silchar": "National Institute of Technology Silchar",
  nitdgp: "National Institute of Technology Durgapur",
  "nit durgapur": "National Institute of Technology Durgapur",
  nith: "National Institute of Technology Hamirpur",
  "nit hamirpur": "National Institute of Technology Hamirpur",
  nitp: "National Institute of Technology Patna",
  "nit patna": "National Institute of Technology Patna",
  nitj: "Dr. B. R. Ambedkar National Institute of Technology Jalandhar",
  "nit jalandhar": "Dr. B. R. Ambedkar National Institute of Technology Jalandhar",
  "nit meghalaya": "National Institute of Technology Meghalaya",
  "nit agartala": "National Institute of Technology Agartala",
  "nit raipur": "National Institute of Technology Raipur",
  "nit goa": "National Institute of Technology Goa",

  // Premier IIITs
  iiith: "International Institute of Information Technology, Hyderabad",
  "iiit hyderabad": "International Institute of Information Technology, Hyderabad",
  iiitb: "International Institute of Information Technology, Bangalore",
  "iiit bangalore": "International Institute of Information Technology, Bangalore",
  iiitd: "Indraprastha Institute of Information Technology Delhi",
  "iiit delhi": "Indraprastha Institute of Information Technology Delhi",
  iiita: "Indian Institute of Information Technology, Allahabad",
  "iiit allahabad": "Indian Institute of Information Technology, Allahabad",
  "iiit gwalior": "Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior",
  iiitm: "Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior",
  "iiit jabalpur": "PDPM Indian Institute of Information Technology, Design and Manufacturing, Jabalpur",
  "iiit kancheepuram": "Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram",
  "iiit lucknow": "Indian Institute of Information Technology, Lucknow",

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
  "netaji subhas": "Netaji Subhas University of Technology",
  igdtuw: "Indira Gandhi Delhi Technical University for Women",

  // Premier State Universities
  ju: "Jadavpur University",
  "jadavpur university": "Jadavpur University",
  "anna university": "Anna University",
  "anna univ": "Anna University",
  du: "University of Delhi",
  "delhi university": "University of Delhi",
  bhu: "Banaras Hindu University",
  amu: "Aligarh Muslim University",
  jnu: "Jawaharlal Nehru University",
  cu: "University of Calcutta",
  "calcutta university": "University of Calcutta",
  sppu: "Savitribai Phule Pune University",
  "pune university": "Savitribai Phule Pune University",
  mu: "University of Mumbai",
  "mumbai university": "University of Mumbai",
  coep: "COEP Technological University",
  vjti: "Veermata Jijabai Technological Institute",
  ict: "Institute of Chemical Technology",
  "ict mumbai": "Institute of Chemical Technology",
  psg: "PSG College of Technology",
  "psg tech": "PSG College of Technology",
  rvce: "R.V. College of Engineering",
  "rv college": "R.V. College of Engineering",
  bmsce: "BMS College of Engineering",
  msrit: "Ramaiah Institute of Technology",
  ramaiah: "Ramaiah Institute of Technology",
  pes: "PES University",
  "pes university": "PES University",

  // Private Institutes & Deemed Universities
  vit: "Vellore Institute of Technology",
  "vit vellore": "Vellore Institute of Technology",
  "vit chennai": "Vellore Institute of Technology, Chennai",
  thapar: "Thapar Institute of Engineering and Technology",
  tiet: "Thapar Institute of Engineering and Technology",
  srm: "SRM Institute of Science and Technology",
  srmist: "SRM Institute of Science and Technology",
  manipal: "Manipal Academy of Higher Education",
  mahe: "Manipal Academy of Higher Education",
  lpu: "Lovely Professional University",
  amity: "Amity University",

  // Medical Apex Institutes
  aiims: "All India Institute of Medical Sciences, New Delhi",
  "aiims delhi": "All India Institute of Medical Sciences, New Delhi",
  "aiims new delhi": "All India Institute of Medical Sciences, New Delhi",
  pgimer: "Postgraduate Institute of Medical Education and Research, Chandigarh",
  cmc: "Christian Medical College, Vellore",
  "cmc vellore": "Christian Medical College, Vellore",
  jipmer: "Jawaharlal Institute of Postgraduate Medical Education and Research",
  kgmu: "King George's Medical University, Lucknow",

  // Management (IIMs & Top B-Schools)
  iima: "Indian Institute of Management Ahmedabad",
  "iim ahmedabad": "Indian Institute of Management Ahmedabad",
  iimb: "Indian Institute of Management Bangalore",
  "iim bangalore": "Indian Institute of Management Bangalore",
  iimc: "Indian Institute of Management Calcutta",
  "iim calcutta": "Indian Institute of Management Calcutta",
  iiml: "Indian Institute of Management Lucknow",
  "iim lucknow": "Indian Institute of Management Lucknow",
  iimk: "Indian Institute of Management Kozhikode",
  "iim kozhikode": "Indian Institute of Management Kozhikode",
  iimi: "Indian Institute of Management Indore",
  "iim indore": "Indian Institute of Management Indore",
  fms: "Faculty of Management Studies, University of Delhi",
  "fms delhi": "Faculty of Management Studies, University of Delhi",
  xlri: "XLRI – Xavier School of Management",
  spjimr: "S. P. Jain Institute of Management and Research",
  isb: "Indian School of Business",

  // Law Universities (NLUs)
  nlsiu: "National Law School of India University",
  "nls bangalore": "National Law School of India University",
  nalsar: "NALSAR University of Law",
  nujs: "West Bengal National University of Juridical Sciences",
  nlud: "National Law University, Delhi",
  "nlu delhi": "National Law University, Delhi",
  nluj: "National Law University, Jodhpur",
  gnlu: "Gujarat National Law University",
  nliu: "National Law Institute University, Bhopal",

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
  ucb: "University of California, Berkeley",
  ucla: "University of California, Los Angeles",
  princeton: "Princeton University",
  yale: "Yale University",
  columbia: "Columbia University",
  cornell: "Cornell University",
  upenn: "University of Pennsylvania",
  uiuc: "University of Illinois Urbana-Champaign",
  gatech: "Georgia Institute of Technology",
  "georgia tech": "Georgia Institute of Technology",
  umich: "University of Michigan",
  nus: "National University of Singapore",
  ntu: "Nanyang Technological University",
  imperial: "Imperial College London",
  eth: "ETH Zurich",
  "eth zurich": "ETH Zurich",
};

/**
 * Normalizes user queries by expanding acronyms and appending academic modifiers
 * to ensure robust search results from Google, Shiksha, NIRF, and Wikipedia registries.
 */
export function resolveCollegeQuery(query: string): string {
  if (!query || !query.trim()) return "";
  const cleaned = query.toLowerCase().trim().replace(/['.]/g, "").replace(/\s+/g, " ");

  // Direct alias dictionary hit
  if (COLLEGE_ALIASES[cleaned]) {
    return COLLEGE_ALIASES[cleaned];
  }

  // Check prefix / partial match
  for (const [alias, fullName] of Object.entries(COLLEGE_ALIASES)) {
    if (cleaned === alias || cleaned.startsWith(alias + " ") || cleaned.endsWith(" " + alias)) {
      return fullName;
    }
  }

  return query.trim();
}
