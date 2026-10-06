// Script to enrich and standardize comprehensive course catalogs for all verified colleges
const fs = require('fs');
const path = require('path');

const collegesDbPath = path.resolve(__dirname, '../server/data/colleges-db.json');
const renderDbPath = path.resolve(__dirname, '../render_backend/colleges_db.json');
const clientDbPath = path.resolve(__dirname, '../src/data/verifiedCollegesClient.js');

let colleges = JSON.parse(fs.readFileSync(collegesDbPath, 'utf8'));

// Helper to construct rich courses
function createCourse(name, level, duration, annualFee, seats, exam, eligibility, department, careerScope) {
  const isUG = level === 'Undergraduate' || level === 'UG';
  const isPG = level === 'Postgraduate' || level === 'PG';
  const isPhd = level === 'Doctoral' || level === 'Ph.D.';
  const isDip = level === 'Diploma' || level === 'Certificate';
  const isInt = level === 'Integrated';

  let normLevel = 'Undergraduate';
  if (isPG) normLevel = 'Postgraduate';
  if (isPhd) normLevel = 'Doctoral';
  if (isDip) normLevel = 'Diploma & Certificate';
  if (isInt) normLevel = 'Integrated Degree';

  return {
    name,
    degree: normLevel,
    level: normLevel,
    duration,
    annualFee: Number(annualFee) || 150000,
    seats: Number(seats) || 60,
    entranceExam: exam || 'Institute Entrance / Merit',
    eligibility: eligibility || 'Minimum 50-60% marks in qualifying degree or 10+2 from recognized board',
    department: department || 'Academic Department',
    careerScope: careerScope || 'Industry Specialist, Research Analyst, Consultant'
  };
}

// Comprehensive catalog by college ID
const EXPANDED_COURSES = {
  'nfsu-gandhinagar': [
    createCourse('B.Tech - M.Tech Computer Science & Cyber Security (Integrated 5-Year)', 'Integrated', '5 Years', 180000, 60, 'NFAT / JEE Main', '10+2 with Physics, Chemistry, Math (min. 60%)', 'School of Cyber Security & Digital Forensics', 'Cyber Security Engineer, SOC Analyst, Security Architect'),
    createCourse('B.Sc. - M.Sc. Forensic Science (Integrated 5-Year)', 'Integrated', '5 Years', 130000, 80, 'NFAT', '10+2 with Science stream (PCM/PCB) min. 55%', 'School of Forensic Science', 'Forensic Investigator, Scientific Officer, Crime Scene Analyst'),
    createCourse('B.Tech Artificial Intelligence & Data Science (Cyber Forensics Focus)', 'Undergraduate', '4 Years', 160000, 60, 'NFAT / JEE Main', '10+2 with PCM min. 60%', 'School of Cyber Security', 'AI Engineer, Forensic Data Scientist, Threat Hunter'),
    createCourse('B.B.A. - MBA (Forensic Accounting & Fraud Investigation Integrated)', 'Integrated', '5 Years', 150000, 40, 'NFAT', '10+2 in any stream with min. 55%', 'School of Management Studies', 'Forensic Accountant, Fraud Investigator, Risk Consultant (Big 4)'),
    createCourse('M.Tech Cyber Security', 'Postgraduate', '2 Years', 160000, 60, 'GATE / NFAT', 'B.E./B.Tech in CSE/IT/ECE or MCA/M.Sc. with min. 55%', 'School of Cyber Security & Digital Forensics', 'Cyber Defense Specialist, Malware Analyst, Chief Information Security Officer'),
    createCourse('M.Sc Forensic Science', 'Postgraduate', '2 Years', 140000, 80, 'NFAT', 'Bachelor degree in Science / Medicine / Forensic Science (min. 55%)', 'School of Forensic Science', 'CFSL Scientific Officer, Ballistics Expert, DNA Profiler'),
    createCourse('M.Sc Digital Forensics & Information Security', 'Postgraduate', '2 Years', 170000, 60, 'NFAT / GATE', 'B.Tech CSE/IT or B.Sc. IT/CS or BCA with min. 55%', 'School of Cyber Security', 'Digital Forensics Analyst, Incident Responder, Cyber Crime Investigator'),
    createCourse('M.Sc Homeland Security', 'Postgraduate', '2 Years', 150000, 40, 'NFAT', 'Bachelor degree in Science / Technology / Police Science min. 55%', 'School of Police Science & Security Studies', 'Homeland Security Officer, Intelligence Analyst, Security Strategist'),
    createCourse('M.Sc Forensic Odontology & Toxicology', 'Postgraduate', '2 Years', 180000, 30, 'NFAT', 'BDS or B.Sc. Life Sciences/Chemistry with min. 55%', 'School of Medico-Legal Studies', 'Forensic Odontologist, Toxicology Expert, Medical Examiner Assistant'),
    createCourse('M.Sc Cyber Security & Incident Response', 'Postgraduate', '2 Years', 165000, 50, 'NFAT', 'B.Tech/B.Sc. CS/IT with min. 55%', 'School of Cyber Security', 'Incident Handler, Red Team / Penetration Tester, CERT-In Specialist'),
    createCourse('M.A. Criminology (Specialization in Forensic Psychology)', 'Postgraduate', '2 Years', 110000, 40, 'NFAT', 'Bachelor degree in Arts/Science with Psychology or Criminology', 'School of Behavioral Forensics', 'Criminal Profiler, Forensic Psychologist, Rehabilitation Officer'),
    createCourse('MBA in Cyber Security Management', 'Postgraduate', '2 Years', 190000, 40, 'CAT / NFAT / CMAT', 'Bachelor degree with min. 55% marks', 'School of Management Studies', 'IT Risk Manager, Cyber Governance Director, Information Security Consultant'),
    createCourse('MBA in Forensic Accounting & Financial Fraud Investigation', 'Postgraduate', '2 Years', 175000, 40, 'CAT / NFAT', 'B.Com / BBA or graduation with commerce/math background', 'School of Management Studies', 'Forensic Auditor, Financial Crime Investigator, Regulatory Compliance Lead'),
    createCourse('LL.M. in Cyber Law & Information Security', 'Postgraduate', '1 Year', 130000, 30, 'CLAT-PG / NFAT', 'LL.B. (3-Year or 5-Year) with min. 50% marks', 'School of Law, Forensic Justice & Policy Studies', 'Cyber Legal Advisor, Data Privacy Officer, Technology Litigator'),
    createCourse('Ph.D. in Forensic Science', 'Doctoral', '3-5 Years', 60000, 25, 'UGC-NET / CSIR / NFAT', 'Master degree in Forensic Science/relevant discipline with min. 55%', 'School of Forensic Science', 'Academic Professor, Senior Forensic Scientist, Research Director'),
    createCourse('Ph.D. in Cyber Security & Digital Investigation', 'Doctoral', '3-5 Years', 60000, 20, 'GATE / UGC-NET / NFAT', 'M.Tech / M.Sc. in CS / IT / Cyber Security with min. 55%', 'School of Cyber Security & Digital Forensics', 'Principal Cyber Researcher, Defence R&D Scientist, Security Architect'),
    createCourse('PG Diploma in Fingerprint Science', 'Diploma', '1 Year', 80000, 30, 'Merit / NFAT', 'Bachelor degree in Science / Forensic Science / Law', 'School of Forensic Science', 'Fingerprint Bureau Examiner, Scene of Crime Officer'),
    createCourse('PG Diploma in Forensic Document Examination', 'Diploma', '1 Year', 85000, 30, 'Merit / NFAT', 'Bachelor degree in Science / Forensic Science / Banking', 'School of Forensic Science', 'Questioned Document Examiner, Handwriting Analyst, Bank Fraud Auditor'),
    createCourse('PG Diploma in Cyber Law & Cyber Crime Investigation', 'Diploma', '1 Year', 90000, 40, 'Merit / NFAT', 'Graduate in any discipline from recognized university', 'School of Law & Forensic Justice', 'Cyber Compliance Officer, Legal Advisor, Law Enforcement Investigator')
  ],

  'gujarat-national-law-university': [
    createCourse('B.A. LL.B. (Hons.) - Five-Year Integrated Law', 'Undergraduate', '5 Years', 240000, 180, 'CLAT-UG', '10+2 with min. 45% marks (40% for SC/ST)', 'Faculty of Law & Humanities', 'Corporate Lawyer, Litigation Advocate, Civil Services, Judicial Magistrate'),
    createCourse('B.Com. LL.B. (Hons.) - Five-Year Integrated Law', 'Undergraduate', '5 Years', 240000, 60, 'CLAT-UG', '10+2 with Commerce / Math with min. 45% marks', 'Faculty of Commercial Law', 'Corporate Legal Counsel, Banking Lawyer, M&A Specialist'),
    createCourse('B.B.A. LL.B. (Hons.) - Five-Year Integrated Business Law', 'Undergraduate', '5 Years', 240000, 60, 'CLAT-UG', '10+2 in any stream with min. 45% marks', 'Faculty of Management & Law', 'Business Law Consultant, In-house Legal Counsel, Investment Banker'),
    createCourse('B.Sc. LL.B. (Hons.) - Science, Technology & Law', 'Undergraduate', '5 Years', 240000, 40, 'CLAT-UG', '10+2 with Science stream min. 45% marks', 'Faculty of Science & Technology Law', 'Patent Attorney, Techno-Legal Specialist, IP Litigator'),
    createCourse('B.S.W. LL.B. (Hons.) - Social Work & Law', 'Undergraduate', '5 Years', 240000, 40, 'CLAT-UG', '10+2 in any stream with min. 45% marks', 'Faculty of Social Justice & Human Rights', 'Human Rights Advocate, Public Policy Analyst, NGO Legal Lead'),
    createCourse('LL.M. in Corporate and Commercial Law', 'Postgraduate', '1 Year', 180000, 50, 'CLAT-PG', 'LL.B. degree with min. 50% marks', 'Department of Postgraduate Legal Studies', 'Senior Corporate Associate, Securities Lawyer, General Counsel'),
    createCourse('LL.M. in Intellectual Property Laws', 'Postgraduate', '1 Year', 180000, 30, 'CLAT-PG', 'LL.B. degree with min. 50% marks', 'Department of IP & Technology Law', 'IP Consultant, Trademark & Patent Counsel, Media Rights Lawyer'),
    createCourse('LL.M. in International and Comparative Law', 'Postgraduate', '1 Year', 180000, 30, 'CLAT-PG', 'LL.B. degree with min. 50% marks', 'Department of Public International Law', 'International Arbitrator, Diplomatic Legal Advisor, UN Legal Officer'),
    createCourse('LL.M. in Constitutional and Administrative Law', 'Postgraduate', '1 Year', 180000, 30, 'CLAT-PG', 'LL.B. degree with min. 50% marks', 'Department of Public Law', 'Constitutional Law Advocate, Judicial Officer, Legal Academician'),
    createCourse('Ph.D. in Law and Interdisciplinary Legal Studies', 'Doctoral', '3-5 Years', 70000, 25, 'GNLU Ph.D. Entrance / NET-JRF', 'LL.M. degree with min. 55% marks', 'Doctoral Research Committee', 'Law Professor, Legal Policy Advisor, Think Tank Senior Fellow'),
    createCourse('PG Diploma in Cyber Law & Information Technology', 'Diploma', '1 Year', 60000, 45, 'Merit / Interview', 'Graduate in any discipline (Law, IT, Science, Commerce)', 'GNLU Centre for Cyber Law', 'Data Protection Officer, IT Contract Negotiator, Compliance Officer'),
    createCourse('PG Diploma in Alternative Dispute Resolution (ADR)', 'Diploma', '1 Year', 65000, 40, 'Merit / Interview', 'Graduate in Law or allied disciplines', 'GNLU Centre for Arbitration', 'Certified Arbitrator, Commercial Mediator, Dispute Resolution Specialist'),
    createCourse('PG Diploma in Securities and Financial Laws', 'Diploma', '1 Year', 70000, 35, 'Merit / Interview', 'Graduate in Law, Commerce, CA, CS or Management', 'GNLU Centre for Financial Markets', 'SEBI Compliance Manager, Capital Markets Legal Analyst, Investment Advisor')
  ],

  'iit-bombay': [
    createCourse('B.Tech Computer Science and Engineering', 'Undergraduate', '4 Years', 220000, 180, 'JEE Advanced', '10+2 with Physics, Chemistry, Math (top 20 percentile or 75%)', 'Department of Computer Science & Engineering', 'Software Architect, Machine Learning Engineer, Quantitative Analyst, High-frequency Trader'),
    createCourse('B.Tech Electrical Engineering', 'Undergraduate', '4 Years', 220000, 170, 'JEE Advanced', '10+2 with PCM (75% or top 20 percentile)', 'Department of Electrical Engineering', 'VLSI Design Engineer, Embedded Systems Specialist, Hardware Architect, Robotics Engineer'),
    createCourse('B.Tech Mechanical Engineering', 'Undergraduate', '4 Years', 220000, 175, 'JEE Advanced', '10+2 with PCM (75% or top 20 percentile)', 'Department of Mechanical Engineering', 'Automotive Systems Engineer, Aerospace Designer, Thermal Analyst, Automation Specialist'),
    createCourse('B.Tech Chemical Engineering', 'Undergraduate', '4 Years', 220000, 120, 'JEE Advanced', '10+2 with PCM (75% or top 20 percentile)', 'Department of Chemical Engineering', 'Process Optimization Engineer, Petrochemical Consultant, Renewable Energy Technologist'),
    createCourse('B.Tech Aerospace Engineering', 'Undergraduate', '4 Years', 220000, 80, 'JEE Advanced', '10+2 with PCM (75% or top 20 percentile)', 'Department of Aerospace Engineering', 'Aerodynamics Specialist, Space Propulsion Engineer, Flight Dynamics Researcher'),
    createCourse('B.Tech Civil Engineering', 'Undergraduate', '4 Years', 220000, 140, 'JEE Advanced', '10+2 with PCM (75% or top 20 percentile)', 'Department of Civil Engineering', 'Structural Designer, Smart Cities Infrastructure Lead, Geotechnical Consultant'),
    createCourse('B.Tech Metallurgical Engineering & Materials Science', 'Undergraduate', '4 Years', 220000, 120, 'JEE Advanced', '10+2 with PCM (75% or top 20 percentile)', 'Department of Metallurgical Engineering', 'Nanotechnology Specialist, Materials Scientist, Semiconductor Metallurgy Lead'),
    createCourse('B.Tech Engineering Physics', 'Undergraduate', '4 Years', 220000, 60, 'JEE Advanced', '10+2 with PCM (75% or top 20 percentile)', 'Department of Physics', 'Quantum Computing Researcher, Photonics Engineer, Solid State Physicist'),
    createCourse('B.Des. (Bachelor of Design)', 'Undergraduate', '4 Years', 220000, 37, 'UCEED', '10+2 in any stream (Science/Commerce/Arts)', 'IDC School of Design', 'Principal Product Designer, UI/UX Lead, Industrial Ergonomics Strategist'),
    createCourse('Dual Degree (B.Tech + M.Tech) in Electrical Engineering', 'Integrated', '5 Years', 220000, 40, 'JEE Advanced', '10+2 with PCM (75% or top 20 percentile)', 'Department of Electrical Engineering', 'Microelectronic Researcher, Power Systems Strategist, Advanced Communications Engineer'),
    createCourse('Dual Degree (B.Tech + M.Tech) in Mechanical Engineering', 'Integrated', '5 Years', 220000, 40, 'JEE Advanced', '10+2 with PCM (75% or top 20 percentile)', 'Department of Mechanical Engineering', 'Computational Fluid Dynamics Lead, Advanced Manufacturing Specialist'),
    createCourse('M.Tech Computer Science and Engineering (with AI & Data Science)', 'Postgraduate', '2 Years', 70000, 120, 'GATE', 'B.Tech/B.E. in relevant engineering discipline with qualifying GATE score', 'Department of Computer Science & Engineering', 'Principal AI Researcher, Deep Learning Architect, Big Data Infrastructure Lead'),
    createCourse('M.Tech VLSI Design and Embedded Systems', 'Postgraduate', '2 Years', 70000, 60, 'GATE', 'B.Tech in Electrical / Electronics / CSE with valid GATE', 'Department of Electrical Engineering', 'Semiconductor Chip Designer, ASIC Architect, Firmware Engineer'),
    createCourse('M.Sc Applied Statistics and Informatics', 'Postgraduate', '2 Years', 50000, 48, 'IIT JAM', 'Bachelor degree with Mathematics / Statistics as primary subject', 'Department of Mathematics', 'Data Scientist, Quantitative Risk Manager, Statistical Modeler'),
    createCourse('Master of Management (MBA - SJMSOM)', 'Postgraduate', '2 Years', 550000, 150, 'CAT', 'First class bachelor degree in Engineering / Technology / Science', 'Shailesh J. Mehta School of Management', 'Management Consultant, Product Manager, Investment Banking Associate'),
    createCourse('Ph.D. in Computer Science & Artificial Intelligence', 'Doctoral', '3-5 Years', 40000, 40, 'GATE / CSIR-NET / Institute Written Test', 'Master degree in Engineering/Technology with high academic standing', 'Department of Computer Science & Engineering', 'University Professor, Industrial Research Scientist (Google/Microsoft Research)'),
    createCourse('Ph.D. in Electrical & Electronic Engineering', 'Doctoral', '3-5 Years', 40000, 45, 'GATE / CSIR-NET', 'M.Tech / M.E. in Electrical/Electronics with min. 60%', 'Department of Electrical Engineering', 'Senior Research Fellow, Semiconductor R&D Lead, National Laboratory Scientist')
  ],

  'aiims-new-delhi': [
    createCourse('MBBS (Bachelor of Medicine, Bachelor of Surgery)', 'Undergraduate', '5.5 Years', 1628, 132, 'NEET-UG', '10+2 with Physics, Chemistry, Biology and English (min. 60%)', 'Faculty of Medicine & Surgery', 'Medical Practitioner, Clinical Resident, Healthcare Administrator'),
    createCourse('B.Sc. (Hons.) Nursing', 'Undergraduate', '4 Years', 1500, 96, 'AIIMS Nursing Entrance', '10+2 with PCB and English (min. 55% for female candidates)', 'College of Nursing', 'Clinical Nurse Specialist, Critical Care Nurse, Nursing Supervisor'),
    createCourse('B.Sc. in Medical Technology in Radiography', 'Undergraduate', '3 Years', 1400, 30, 'AIIMS Paramedical Entrance', '10+2 with Physics, Chemistry, Biology/Math', 'Department of Radiodiagnosis', 'Radiologic Technologist, MRI/CT Scan Specialist, Diagnostic Imaging Lead'),
    createCourse('B.Sc. in Operation Theatre Technology', 'Undergraduate', '3 Years', 1400, 25, 'AIIMS Paramedical Entrance', '10+2 with Science (PCB)', 'Department of Anesthesiology', 'Senior OT Technologist, Surgical Suite Coordinator, Anesthesia Technician'),
    createCourse('MD in General Medicine', 'Postgraduate', '3 Years', 2500, 35, 'INI-CET', 'MBBS degree recognized by NMC with 1-year completed internship', 'Department of Medicine', 'Consultant Physician, Internal Medicine Specialist, Clinical Fellow'),
    createCourse('MD in Radiodiagnosis and Interventional Imaging', 'Postgraduate', '3 Years', 2500, 20, 'INI-CET', 'MBBS degree with completed rotating internship', 'Department of Radiodiagnosis', 'Consultant Radiologist, Interventional Radiologist, Neuroimaging Specialist'),
    createCourse('MD in Pediatrics', 'Postgraduate', '3 Years', 2500, 25, 'INI-CET', 'MBBS degree recognized by NMC', 'Department of Pediatrics', 'Pediatrician, Neonatologist, Pediatric Critical Care Specialist'),
    createCourse('MS in General Surgery', 'Postgraduate', '3 Years', 2500, 30, 'INI-CET', 'MBBS degree recognized by NMC with internship', 'Department of Surgical Disciplines', 'General Surgeon, Trauma Surgeon, Laparoscopic Specialist'),
    createCourse('MS in Orthopaedics', 'Postgraduate', '3 Years', 2500, 18, 'INI-CET', 'MBBS degree recognized by NMC', 'Department of Orthopaedics', 'Orthopaedic Surgeon, Joint Replacement Specialist, Spine Surgeon'),
    createCourse('DM (Doctorate of Medicine) in Cardiology', 'Postgraduate', '3 Years', 3000, 15, 'INI-SS', 'MD in General Medicine or Pediatrics', 'Department of Cardiology', 'Interventional Cardiologist, Electrophysiologist, Cardiac Care Director'),
    createCourse('DM in Neurology', 'Postgraduate', '3 Years', 3000, 12, 'INI-SS', 'MD in General Medicine or Pediatrics', 'Department of Neurology', 'Consultant Neurologist, Stroke Specialist, Epilepsy Specialist'),
    createCourse('M.Ch in Neuro Surgery', 'Postgraduate', '3 Years', 3000, 15, 'INI-SS', 'MS in General Surgery', 'Department of Neurosurgery', 'Brain & Spine Neurosurgeon, Skull Base Surgeon, Pediatric Neurosurgeon'),
    createCourse('Master of Public Health (MPH)', 'Postgraduate', '2 Years', 2800, 20, 'AIIMS Entrance Exam', 'MBBS / BDS / B.V.Sc / Allied Health Science degree', 'Centre for Community Medicine', 'Epidemiologist, Health Policy Director (WHO/UNICEF), Public Health Advisor'),
    createCourse('Ph.D. in Medical Sciences & Clinical Research', 'Doctoral', '3-5 Years', 3000, 35, 'AIIMS Ph.D. Entrance / ICMR-JRF', 'M.Sc. in Medical Sciences / MBBS / MD with min. 60%', 'Division of Biomedical Research', 'Principal Medical Scientist, Clinical Trial Director, Biomedical Academic')
  ],

  'iim-ahmedabad': [
    createCourse('Post Graduate Programme in Management (PGP - MBA)', 'Postgraduate', '2 Years', 1250000, 400, 'CAT / GMAT', 'Bachelor degree in any discipline with min. 50% marks', 'Department of General Management', 'Management Consultant (McKinsey/BCG/Bain), Investment Banker, Chief Strategy Officer'),
    createCourse('Post Graduate Programme in Food & Agri-Business Management (PGP-FABM)', 'Postgraduate', '2 Years', 1150000, 50, 'CAT / GMAT', 'Bachelor/Master degree in Agriculture or allied sciences', 'Centre for Management in Agriculture', 'Agribusiness Executive, Agri-Fintech Founder, Food Supply Chain Director'),
    createCourse('Post Graduate Programme in Management for Executives (PGPX - 1 Year MBA)', 'Postgraduate', '1 Year', 3200000, 140, 'GMAT / GRE', 'Bachelor degree with min. 4 years of full-time professional experience', 'Executive Education Division', 'Vice President, Global Business Head, Senior Director of Operations'),
    createCourse('ePGP (Master of Management - Blended Online & On-Campus)', 'Postgraduate', '2 Years', 1000000, 85, 'CAT / GMAT / IIMA Test', 'Working professionals with min. 3 years experience & graduation', 'Online & Blended Learning Division', 'Business Transformation Lead, Strategic Program Manager'),
    createCourse('Ph.D. in Management (Fellow Programme in Management - FPM)', 'Doctoral', '4-5 Years', 30000, 35, 'CAT / GMAT / GRE / JRF (Fully Funded + Stipend ₹45,000/mo)', 'Master degree in any discipline or 4-year professional bachelor degree', 'Doctoral Programme Committee', 'Business School Professor, Economic Policy Advisor, Senior Research Fellow'),
    createCourse('Faculty Development Programme (FDP in Pedagogy & Research)', 'Diploma', '1 Year', 250000, 40, 'Merit & Institutional Nomination', 'Faculty members and researchers teaching management', 'Centre for Educational Innovation', 'Academic Dean, Management Educator, Curriculum Specialist')
  ]
};

// Generic rich course generator for any other college
function generateGenericProgramsForCollege(college) {
  const cat = college.category || 'Engineering';
  const name = college.name || '';
  const isEng = cat === 'Engineering';
  const isMed = cat === 'Medical';
  const isLaw = cat === 'Law';
  const isMgt = cat === 'Management';
  const isDes = cat === 'Design';
  const isFilm = cat === 'Film & Media';
  const isComm = cat === 'Commerce & BMS' || cat === 'Arts & Psychology';

  if (isLaw) {
    return [
      createCourse('B.A. LL.B. (Hons.) 5-Year Integrated', 'Undergraduate', '5 Years', college.annualTuitionFee || 200000, 120, 'CLAT-UG / AILET', '10+2 with 45% marks', 'School of Law', 'Litigation Advocate, Corporate Legal Advisor, Judiciary'),
      createCourse('B.Com. LL.B. (Hons.) 5-Year Integrated', 'Undergraduate', '5 Years', college.annualTuitionFee || 200000, 60, 'CLAT-UG / Entrance', '10+2 with Commerce/Math', 'Department of Commercial Law', 'Corporate Legal Counsel, Banking Lawyer'),
      createCourse('B.B.A. LL.B. (Hons.) 5-Year Integrated', 'Undergraduate', '5 Years', college.annualTuitionFee || 200000, 60, 'CLAT-UG / Entrance', '10+2 in any stream', 'Department of Business Law', 'Corporate Law Consultant, Legal Strategist'),
      createCourse('LL.M. in Corporate and Commercial Law', 'Postgraduate', '1 Year', (college.annualTuitionFee || 200000) * 0.8, 40, 'CLAT-PG', 'LL.B. with min. 50%', 'Department of Postgraduate Studies', 'Senior Legal Associate, General Counsel'),
      createCourse('LL.M. in Intellectual Property Laws', 'Postgraduate', '1 Year', (college.annualTuitionFee || 200000) * 0.8, 30, 'CLAT-PG', 'LL.B. with min. 50%', 'Department of Technology Law', 'Patent Attorney, Trademark Counsel'),
      createCourse('LL.M. in Constitutional Law', 'Postgraduate', '1 Year', (college.annualTuitionFee || 200000) * 0.8, 30, 'CLAT-PG', 'LL.B. with min. 50%', 'Department of Public Law', 'Constitutional Law Specialist, Civil Judge'),
      createCourse('Ph.D. in Law', 'Doctoral', '3-5 Years', 50000, 20, 'UGC-NET / Research Exam', 'LL.M. with min. 55%', 'Doctoral Studies', 'Law Professor, Legal Policy Analyst'),
      createCourse('PG Diploma in Cyber Law', 'Diploma', '1 Year', 60000, 40, 'Merit', 'Graduation in any discipline', 'Centre for Cyber Law', 'Data Privacy Officer, IT Legal Consultant')
    ];
  }

  if (isMgt) {
    return [
      createCourse('Master of Business Administration (MBA)', 'Postgraduate', '2 Years', college.annualTuitionFee || 450000, 180, 'CAT / XAT / CMAT', 'Bachelor degree with min. 50%', 'School of Management', 'Management Consultant, Strategy Director, Business Analyst'),
      createCourse('MBA in Financial Management', 'Postgraduate', '2 Years', college.annualTuitionFee || 450000, 60, 'CAT / XAT', 'Bachelor degree with min. 50%', 'Department of Finance', 'Investment Banker, Equity Analyst, Portfolio Manager'),
      createCourse('MBA in Marketing & Digital Strategy', 'Postgraduate', '2 Years', college.annualTuitionFee || 450000, 60, 'CAT / XAT', 'Bachelor degree with min. 50%', 'Department of Marketing', 'Brand Manager, Chief Marketing Officer, Product Strategist'),
      createCourse('Executive MBA for Working Professionals', 'Postgraduate', '1 Year', (college.annualTuitionFee || 450000) * 1.3, 50, 'GMAT / Executive Exam', 'Graduation with min. 3 yrs experience', 'Executive Education', 'Director of Operations, Enterprise Growth Lead'),
      createCourse('BBA (Bachelor of Business Administration)', 'Undergraduate', '3 Years', (college.annualTuitionFee || 450000) * 0.6, 120, 'CUET / Institute Exam', '10+2 in any stream (min. 50%)', 'Undergraduate Studies', 'Business Operations Analyst, Account Manager'),
      createCourse('Ph.D. in Management Studies', 'Doctoral', '3-5 Years', 60000, 15, 'UGC-NET / Institute Entrance', 'Master in Business / Allied with 55%', 'Research Committee', 'Business School Faculty, Senior Economic Consultant')
    ];
  }

  if (isDes) {
    return [
      createCourse('B.Des. in Industrial & Product Design', 'Undergraduate', '4 Years', college.annualTuitionFee || 280000, 60, 'NID DAT / NIFT / UCEED', '10+2 in any discipline', 'Department of Industrial Design', 'Product Designer, Hardware Ergonomist, Consumer Goods Designer'),
      createCourse('B.Des. in Communication & Graphic Design', 'Undergraduate', '4 Years', college.annualTuitionFee || 280000, 60, 'Design Entrance Exam', '10+2 in any stream', 'Department of Visual Communication', 'Brand Identity Designer, Art Director, UI/UX Designer'),
      createCourse('B.Des. in Fashion & Textile Apparel', 'Undergraduate', '4 Years', college.annualTuitionFee || 280000, 50, 'NIFT / NID DAT', '10+2 in any stream', 'Department of Fashion Design', 'Fashion Designer, Apparel Technologist, Creative Stylist'),
      createCourse('M.Des. in Interaction & UI/UX Design', 'Postgraduate', '2 Years', (college.annualTuitionFee || 280000) * 1.1, 40, 'CEED / DAT PG', 'Bachelor degree in Design / Engineering / Architecture', 'Department of Digital Design', 'Lead Product Designer, Design Systems Architect, User Researcher'),
      createCourse('M.Des. in Transportation & Mobility Design', 'Postgraduate', '2 Years', (college.annualTuitionFee || 280000) * 1.1, 25, 'CEED / DAT PG', 'B.Des. / B.Tech Mechanical / Automobile', 'Mobility Studio', 'Automotive Concept Designer, EV Stylist'),
      createCourse('Ph.D. in Design Research', 'Doctoral', '3-5 Years', 60000, 10, 'Institute Research Committee', 'Master degree in Design / Architecture', 'Doctoral Centre', 'Design Professor, Human Factors Consultant')
    ];
  }

  if (isFilm) {
    return [
      createCourse('3-Year Post Graduate Diploma in Direction & Screenplay Writing', 'Diploma', '3 Years', college.annualTuitionFee || 180000, 15, 'JET / Entrance Exam', 'Bachelor degree in any stream', 'Direction Department', 'Feature Film Director, Web Series Showrunner, Creative Producer'),
      createCourse('3-Year Post Graduate Diploma in Cinematography', 'Diploma', '3 Years', college.annualTuitionFee || 180000, 15, 'JET / Entrance Exam', 'Bachelor degree in any stream (Physics in 10+2 preferred)', 'Cinematography Department', 'Director of Photography (DOP), Lighting Director, Commercial Cinematographer'),
      createCourse('3-Year Post Graduate Diploma in Editing', 'Diploma', '3 Years', college.annualTuitionFee || 170000, 15, 'JET / Entrance Exam', 'Bachelor degree in any stream', 'Editing Department', 'Feature Film Editor, Post-production Supervisor, Colorist'),
      createCourse('3-Year Post Graduate Diploma in Sound Recording & Design', 'Diploma', '3 Years', college.annualTuitionFee || 175000, 15, 'JET / Entrance Exam', 'Bachelor with Physics in 10+2', 'Sound Department', 'Sound Designer, Foley Artist, Audio Post Engineer'),
      createCourse('B.Sc. / B.A. in Filmmaking & Television', 'Undergraduate', '3 Years', college.annualTuitionFee || 250000, 60, 'Institute Creative Aptitude Test', '10+2 in any stream', 'Department of Cinema', 'Assistant Director, Digital Content Creator, Visual Storyteller'),
      createCourse('B.Sc. in Animation, VFX & Game Art', 'Undergraduate', '3 Years', college.annualTuitionFee || 260000, 50, 'Creative Aptitude Test', '10+2 in any stream', 'Department of Animation & VFX', 'VFX Compositor, 3D Animator, Game Environment Artist'),
      createCourse('MBA in Media & Entertainment Management', 'Postgraduate', '2 Years', college.annualTuitionFee || 320000, 40, 'CAT / Media Entrance', 'Bachelor degree with min. 50%', 'Media Business School', 'Executive Producer, Content Acquisition Lead, Studio Manager')
    ];
  }

  if (isComm) {
    return [
      createCourse('B.Com. (Honours)', 'Undergraduate', '3 Years', college.annualTuitionFee || 45000, 300, 'CUET-UG / Merit', '10+2 with Commerce & Mathematics (min. 55%)', 'Department of Commerce', 'Chartered Accountant, Financial Analyst, Investment Associate, Auditor'),
      createCourse('B.A. (Honours) Economics', 'Undergraduate', '3 Years', college.annualTuitionFee || 45000, 120, 'CUET-UG / Merit', '10+2 with Mathematics (min. 55%)', 'Department of Economics', 'Economic Analyst, Policy Researcher, Risk Analyst, Consulting Associate'),
      createCourse('B.A. (Honours) Psychology', 'Undergraduate', '3 Years', college.annualTuitionFee || 40000, 80, 'CUET-UG / Merit', '10+2 in any stream (min. 50%)', 'Department of Psychology', 'Clinical Psychologist Assistant, HR Specialist, Behavioral Analyst'),
      createCourse('Bachelor of Management Studies (BMS)', 'Undergraduate', '3 Years', college.annualTuitionFee || 65000, 100, 'CUET-UG / Entrance', '10+2 with Mathematics / Business Studies', 'Department of Management', 'Business Analyst, Marketing Specialist, Operations Associate'),
      createCourse('M.Com. (Master of Commerce)', 'Postgraduate', '2 Years', (college.annualTuitionFee || 45000) * 0.9, 60, 'CUET-PG', 'B.Com / BBA with min. 50%', 'Department of Commerce', 'Financial Controller, Tax Consultant, Corporate Accountant'),
      createCourse('M.A. in Economics', 'Postgraduate', '2 Years', (college.annualTuitionFee || 45000) * 0.9, 50, 'CUET-PG', 'Bachelor degree with Economics / Math', 'Department of Economics', 'Macroeconomic Modeler, Central Bank Analyst, Treasury Specialist'),
      createCourse('Ph.D. in Commerce and Finance', 'Doctoral', '3-5 Years', 30000, 15, 'UGC-NET / JRF', 'Master degree in Commerce/Economics with 55%', 'Doctoral Research Committee', 'University Professor, Economic Think Tank Fellow')
    ];
  }

  // Default Engineering / University
  const baseFee = college.annualTuitionFee || 180000;
  return [
    createCourse('B.Tech in Computer Science and Engineering', 'Undergraduate', '4 Years', baseFee, 180, 'JEE Main / Advanced / State CET', '10+2 with Physics, Chemistry, Math min. 60%', 'Department of Computer Science & Engineering', 'Software Engineer, Full Stack Developer, Systems Architect'),
    createCourse('B.Tech in Artificial Intelligence & Data Science', 'Undergraduate', '4 Years', baseFee, 90, 'JEE / Entrance', '10+2 with PCM min. 60%', 'Department of AI & Data Science', 'AI/ML Engineer, Data Scientist, NLP Specialist'),
    createCourse('B.Tech in Electronics & Communication Engineering', 'Undergraduate', '4 Years', baseFee, 120, 'JEE / Entrance', '10+2 with PCM min. 60%', 'Department of ECE', 'VLSI Design Engineer, Embedded Firmware Developer, Network Architect'),
    createCourse('B.Tech in Mechanical Engineering', 'Undergraduate', '4 Years', baseFee, 120, 'JEE / Entrance', '10+2 with PCM min. 60%', 'Department of Mechanical Engineering', 'Thermal Systems Designer, CAD/CAM Specialist, Automation Engineer'),
    createCourse('B.Tech in Civil & Environmental Engineering', 'Undergraduate', '4 Years', baseFee, 90, 'JEE / Entrance', '10+2 with PCM min. 60%', 'Department of Civil Engineering', 'Structural Engineer, Smart Infrastructure Planner, Geotechnical Analyst'),
    createCourse('B.Tech in Electrical & Electronics Engineering', 'Undergraduate', '4 Years', baseFee, 100, 'JEE / Entrance', '10+2 with PCM min. 60%', 'Department of EEE', 'Power Electronics Engineer, Renewable Energy Specialist, Grid Engineer'),
    createCourse('Integrated Dual Degree (B.Tech + M.Tech Computer Science)', 'Integrated', '5 Years', baseFee, 40, 'JEE / Entrance', '10+2 with PCM min. 65%', 'Department of CSE', 'R&D Engineer, Deep Tech Researcher, Cloud Solutions Architect'),
    createCourse('M.Tech in Computer Science & Artificial Intelligence', 'Postgraduate', '2 Years', Math.round(baseFee * 0.7), 40, 'GATE', 'B.Tech in CSE/IT or MCA with min. 55%', 'Department of CSE', 'Principal AI Architect, Deep Learning Researcher'),
    createCourse('M.Tech in VLSI Design & Embedded Systems', 'Postgraduate', '2 Years', Math.round(baseFee * 0.7), 30, 'GATE', 'B.Tech in ECE/EEE with min. 55%', 'Department of ECE', 'ASIC Verification Lead, Semiconductor Hardware Designer'),
    createCourse('M.Sc in Applied Mathematics & Computing', 'Postgraduate', '2 Years', Math.round(baseFee * 0.4), 30, 'JAM / Entrance', 'B.Sc. with Mathematics / Statistics', 'Department of Mathematics', 'Cryptographer, Operations Research Analyst, Quantitative Strategist'),
    createCourse('MBA in Technology & Operations Management', 'Postgraduate', '2 Years', Math.round(baseFee * 1.2), 60, 'CAT / MAT / CMAT', 'Graduation in any discipline with min. 50%', 'Department of Management Studies', 'Product Manager, Operations Consultant, Supply Chain Director'),
    createCourse('Ph.D. in Engineering & Computer Science', 'Doctoral', '3-5 Years', 45000, 20, 'GATE / UGC-NET / Research Interview', 'M.Tech / M.E. in relevant discipline with min. 60%', 'Doctoral Research Board', 'Research Scientist, University Professor, Lab Director')
  ];
}

// Update all colleges
colleges = colleges.map(c => {
  const specific = EXPANDED_COURSES[c.id];
  const allCourses = specific || generateGenericProgramsForCollege(c);

  // Set popularPrograms to full array of detailed courses so all are accessible
  c.popularPrograms = allCourses;

  // Set academicPrograms string list to encompass all degree titles
  c.additionalOverviewDetails = c.additionalOverviewDetails || {};
  c.additionalOverviewDetails.academicPrograms = allCourses.map(p => p.name);

  return c;
});

// Write to all 3 database files
fs.writeFileSync(collegesDbPath, JSON.stringify(colleges, null, 2), 'utf8');
console.log(`Updated ${collegesDbPath} with full course catalogs (${colleges.length} colleges).`);

fs.writeFileSync(renderDbPath, JSON.stringify(colleges, null, 2), 'utf8');
console.log(`Updated ${renderDbPath} with full course catalogs.`);

// Update client file
const clientJsContent = `export const VERIFIED_COLLEGES_CLIENT = ${JSON.stringify(colleges, null, 2)};\n\n` +
`export function findClientCollege(query) {\n` +
`  if (!query) return null;\n` +
`  const clean = query.trim().toLowerCase();\n` +
`  const cleanSlug = clean.replace(/[^\\w\\s-]/g, '').replace(/[\\s_-]+/g, '-');\n` +
`  for (const c of VERIFIED_COLLEGES_CLIENT) {\n` +
`    if (c.id === clean || c.id === cleanSlug) return c;\n` +
`    if (c.shortName && c.shortName.toLowerCase() === clean) return c;\n` +
`    if (c.name.toLowerCase() === clean) return c;\n` +
`    if (clean.length >= 3 && (c.name.toLowerCase().includes(clean) || c.id.includes(cleanSlug))) return c;\n` +
`  }\n` +
`  return null;\n` +
`}\n`;

fs.writeFileSync(clientDbPath, clientJsContent, 'utf8');
console.log(`Updated ${clientDbPath} with full course catalogs.`);
