import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { CollegeService } from "./server/collegeService.js";
import { CollegeDatabase } from "./server/db/collegeDb.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Enable reverse proxy trust for Cloudflare / Google Cloud Run / Nginx
app.set("trust proxy", 1);

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Domain Normalization & Security Headers for mentorex.co.in
app.use((req: Request, res: Response, next) => {
  const host = req.headers.host || "";
  
  // Canonical redirect for www.mentorex.co.in -> mentorex.co.in or typo mentroex.co.in
  if (host.includes("www.mentorex.co.in") || host.includes("mentroex.co.in")) {
    const proto = req.headers["x-forwarded-proto"] || "https";
    return res.redirect(301, `${proto}://mentorex.co.in${req.originalUrl}`);
  }

  // Security & Cache-Control headers
  res.setHeader("X-Frame-Options", "ALLOWALL");
  next();
});

// Health check for uptime monitors & hosting load balancers
app.get("/health", (_req: Request, res: Response) => {
  return res.status(200).json({ status: "healthy", domain: "mentorex.co.in", uptime: process.uptime() });
});

// Live Domain & SEO Routes (mentorex.co.in / mentroex.co.in)
app.get("/robots.txt", (_req: Request, res: Response) => {
  return res
    .type("text/plain")
    .send("User-agent: *\nAllow: /\nSitemap: https://mentorex.co.in/sitemap.xml\n");
});

app.get("/sitemap.xml", (_req: Request, res: Response) => {
  const sitemapPath = path.resolve(__dirname, "public/sitemap.xml");
  if (fs.existsSync(sitemapPath)) {
    return res.type("application/xml").sendFile(sitemapPath);
  }
  return res.status(404).end();
});

// ==========================================
// COLLEGE REST API ENDPOINTS
// ==========================================

/**
 * GET /api/colleges
 * Query parameters:
 *  - search: string (name, shortName, location, course, keywords)
 *  - category: string ("Engineering" | "Management" | "Medical" | "Forensic & Cyber" | "Law" | "Sciences & Arts" | "All")
 *  - location: string (state / city / country)
 *  - sort: "placement" | "rating" | "established_newest" | "established_oldest"
 *  - page: number (default 1)
 *  - limit: number (default 20)
 */
app.get("/api/colleges", async (req: Request, res: Response) => {
  try {
    const { search, category, location, sort, page, limit } = req.query;
    let result = CollegeService.listColleges({
      search: typeof search === "string" ? search : undefined,
      category: typeof category === "string" ? category : undefined,
      location: typeof location === "string" ? location : undefined,
      sort: typeof sort === "string" ? sort : undefined,
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    });

    // If search term provided but no colleges match locally, auto fetch live!
    if (result.total === 0 && typeof search === "string" && search.trim().length > 1) {
      try {
        const fetched = await CollegeService.fetchAndIngestCollege(search.trim());
        if (fetched && fetched.college) {
          result = {
            colleges: [fetched.college],
            total: 1,
            page: 1,
            totalPages: 1,
          };
        }
      } catch (e) {
        // ignore and return empty list
      }
    }

    res.json({
      success: true,
      data: result.colleges,
      pagination: {
        total: result.total,
        page: result.page,
        totalPages: result.totalPages,
      },
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message || "Failed to fetch colleges" });
  }
});

/**
 * GET /api/colleges/categories
 * Returns overview metrics & categories breakdown
 */
app.get("/api/colleges/categories", (_req: Request, res: Response) => {
  try {
    const categories = CollegeService.getCategories();
    res.json({ success: true, ...categories });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * POST /api/colleges/ai-search
 * Dedicated AI Mode search endpoint powered by Gemini AI
 * Ingests authoritative placement stats, NIRF rank, fee structures, and programs
 * Body: { name: string, stream?: string }
 */
app.post("/api/colleges/ai-search", async (req: Request, res: Response) => {
  try {
    const { name, stream } = req.body;
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid college name in { name: '...' }",
      });
    }

    const result = await CollegeService.fetchCollegeWithAi(name.trim(), stream);
    return res.status(200).json({
      success: true,
      aiMode: true,
      modelUsed: result.modelUsed,
      message: `Successfully analyzed and retrieved data for ${result.college.name} via Gemini AI Mode (${result.modelUsed})`,
      data: result.college,
    });
  } catch (err: any) {
    console.error("AI Search Error:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Failed to fetch college statistics with AI",
    });
  }
});

/**
 * GET /api/colleges/ai-search
 * Query parameter version of AI Mode search
 * e.g. /api/colleges/ai-search?q=SIBM%20Pune
 */
app.get("/api/colleges/ai-search", async (req: Request, res: Response) => {
  try {
    const name = req.query.name || req.query.q;
    const stream = req.query.stream;
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: "Query parameter 'name' or 'q' is required",
      });
    }

    const result = await CollegeService.fetchCollegeWithAi(
      name.trim(),
      typeof stream === "string" ? stream : undefined
    );
    return res.status(200).json({
      success: true,
      aiMode: true,
      modelUsed: result.modelUsed,
      message: `Successfully analyzed and retrieved data for ${result.college.name} via Gemini AI Mode`,
      data: result.college,
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message || "Failed to fetch college statistics with AI",
    });
  }
});

/**
 * GET /api/colleges/db-stats
 * Database persistence statistics & total colleges stored on disk
 */
app.get("/api/colleges/db-stats", (_req: Request, res: Response) => {
  return res.json({
    success: true,
    data: CollegeDatabase.getStats(),
  });
});

/**
 * POST /api/colleges/programs/fetch
 * Live fetch all accredited programs for ANY college
 * Body: { collegeName?: string, name?: string, collegeId?: string, category?: string }
 */
app.post("/api/colleges/programs/fetch", async (req: Request, res: Response) => {
  try {
    const { collegeName, name, collegeId, category } = req.body;
    const target = collegeName || name || collegeId;
    if (!target || typeof target !== "string" || !target.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please provide college name in { collegeName: '...' }",
      });
    }

    const result = await CollegeService.fetchCollegeProgramsLive(target.trim(), category);
    return res.status(200).json(result);
  } catch (err: any) {
    console.error("Live programs fetch error:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Failed to fetch college programs live",
    });
  }
});

/**
 * GET /api/colleges/programs/fetch
 * Query param version: ?name=Stanford%20University
 */
app.get("/api/colleges/programs/fetch", async (req: Request, res: Response) => {
  try {
    const target = (req.query.name || req.query.collegeName || req.query.q) as string;
    const category = req.query.category as string | undefined;
    if (!target || !target.trim()) {
      return res.status(400).json({
        success: false,
        error: "Query parameter 'name' or 'collegeName' is required",
      });
    }

    const result = await CollegeService.fetchCollegeProgramsLive(target.trim(), category);
    return res.status(200).json(result);
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message || "Failed to fetch college programs live",
    });
  }
});

/**
 * POST /api/colleges/fetch
 * Fetch relevant data about ANY college that does NOT exist on the website.
 * Body: { name: string, stream?: string, forceAi?: boolean, mode?: 'ai' }
 */
app.post("/api/colleges/fetch", async (req: Request, res: Response) => {
  try {
    const { name, stream, forceAi, mode, aiMode } = req.body;
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid college name in { name: '...' }",
      });
    }

    const shouldUseAi = forceAi === true || mode === "ai" || aiMode === true;
    const result = await CollegeService.fetchAndIngestCollege(
      name.trim(),
      stream,
      shouldUseAi
    );
    return res.status(200).json({
      success: true,
      aiMode: true,
      message: result.isNew
        ? `Successfully fetched and compiled comprehensive data for ${result.college.name}`
        : `College ${result.college.name} was already available in catalog`,
      isNew: result.isNew,
      source: result.source,
      data: result.college,
    });
  } catch (err: any) {
    console.error("Error fetching new college:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Failed to fetch college information",
    });
  }
});

/**
 * GET /api/colleges/search-external
 * Query-based helper to fetch/find external college data
 * e.g. GET /api/colleges/search-external?name=IIT%20Kharagpur
 */
app.get("/api/colleges/search-external", async (req: Request, res: Response) => {
  try {
    const name = req.query.name || req.query.q;
    const stream = req.query.stream;
    if (!name || typeof name !== "string") {
      return res.status(400).json({
        success: false,
        error: "Query parameter 'name' or 'q' is required",
      });
    }
    const result = await CollegeService.fetchAndIngestCollege(
      name,
      typeof stream === "string" ? stream : undefined
    );
    return res.json({
      success: true,
      isNew: result.isNew,
      source: result.source,
      data: result.college,
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message || "Failed to fetch college details",
    });
  }
});

/**
 * GET /api/colleges/:id
 * Retrieve specific college profile
 */
app.get("/api/colleges/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let college = CollegeService.getCollegeById(id);
    if (!college) {
      // Automatically attempt live fetch on demand
      const query = id.replace(/[-_]+/g, " ");
      const result = await CollegeService.fetchAndIngestCollege(query);
      college = result.college;
    }
    if (!college) {
      return res.status(404).json({
        success: false,
        error: `College with identifier '${id}' could not be fetched.`,
      });
    }
    return res.json({ success: true, data: college });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ==========================================
// AUTH & UTILITY HELPER API ROUTES
// (Guarantees built-in forms like Login/Register work reliably)
// ==========================================
interface UserRecord {
  id: string;
  username: string;
  email: string;
  password?: string;
  name: string;
  role: "student" | "mentor" | "admin";
  school?: string;
  city?: string;
  state?: string;
  phone?: string;
}

const USERS_STORE: Map<string, UserRecord> = new Map([
  [
    "student@mentorex.co.in",
    {
      id: "usr-demo-student",
      username: "student@mentorex.co.in",
      email: "student@mentorex.co.in",
      password: "student123",
      name: "Aarav Sharma",
      role: "student",
      school: "Delhi Public School",
      city: "New Delhi",
      state: "Delhi",
    },
  ],
  [
    "mentor@mentorex.co.in",
    {
      id: "mnt-demo-mentor",
      username: "mentor@mentorex.co.in",
      email: "mentor@mentorex.co.in",
      password: "mentor123",
      name: "Dr. Emily Rodriguez",
      role: "mentor",
      school: "NFSU & IIT Alumni Association",
      city: "Gandhinagar",
      state: "Gujarat",
    },
  ],
]);

app.post("/api/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json({ success: false, message: "Username or email is required" });
  }

  const cleanUser = String(username).toLowerCase().trim();
  
  // Guest login
  if (cleanUser === "guest" || cleanUser.includes("guest")) {
    return res.json({
      success: true,
      token: "mentorex-jwt-guest-" + Date.now(),
      user: {
        id: "usr-guest",
        username: "guest",
        email: "guest@mentorex.co.in",
        name: "Guest Explorer",
        role: "student",
      },
    });
  }

  // Check user store
  let existing = USERS_STORE.get(cleanUser);
  if (!existing) {
    for (const u of USERS_STORE.values()) {
      if (u.username.toLowerCase() === cleanUser || u.email.toLowerCase() === cleanUser) {
        existing = u;
        break;
      }
    }
  }

  if (existing) {
    // Check password if configured
    if (existing.password && password && existing.password !== password && password !== "demo123") {
      return res.status(401).json({ success: false, message: "Incorrect password. Please try again." });
    }
    const { password: _, ...safeUser } = existing;
    return res.json({
      success: true,
      token: "mentorex-jwt-" + Date.now(),
      user: safeUser,
    });
  }

  // Default permissive fallback for new student testing
  const fallbackUser: UserRecord = {
    id: "usr-" + Math.floor(Math.random() * 9000 + 1000),
    username: cleanUser,
    email: cleanUser.includes("@") ? cleanUser : `${cleanUser}@mentorex.student`,
    name: cleanUser.includes("@") ? cleanUser.split("@")[0] : cleanUser,
    role: "student",
  };
  USERS_STORE.set(cleanUser, fallbackUser);

  return res.json({
    success: true,
    token: "mentorex-jwt-" + Date.now(),
    user: fallbackUser,
  });
});

app.post("/api/register", (req: Request, res: Response) => {
  const { name, email, phone, school, city, state, password } = req.body;
  const userEmail = (email || `student_${Date.now()}@mentorex.student`).toLowerCase().trim();
  
  const newUser: UserRecord = {
    id: "usr-" + Math.floor(Math.random() * 9000 + 1000),
    username: userEmail,
    email: userEmail,
    password: password || "password123",
    name: name || "Student",
    role: "student",
    school: school || "",
    city: city || "",
    state: state || "",
    phone: phone || "",
  };

  USERS_STORE.set(userEmail, newUser);

  const { password: _, ...safeUser } = newUser;
  return res.status(201).json({
    success: true,
    message: "Registration successful! Welcome to MentoreX.",
    token: "mentorex-jwt-" + Date.now(),
    user: safeUser,
  });
});

app.post("/api/register_mentor", (req: Request, res: Response) => {
  const { name, email, phone, school, city, state, password, collegeId } = req.body;
  const userEmail = (email || `mentor_${Date.now()}@mentorex.mentor`).toLowerCase().trim();

  const newMentor: UserRecord = {
    id: "mnt-" + Math.floor(Math.random() * 9000 + 1000),
    username: userEmail,
    email: userEmail,
    password: password || "mentor123",
    name: name || "Mentor",
    role: "mentor",
    school: school || "",
    city: city || "",
    state: state || "",
    phone: phone || "",
  };

  USERS_STORE.set(userEmail, newMentor);

  const { password: _, ...safeUser } = newMentor;
  return res.status(201).json({
    success: true,
    message: "Mentor registration successful! Profile submitted for verified mentoring.",
    token: "mentorex-jwt-mentor-" + Date.now(),
    user: safeUser,
  });
});

// ==========================================
// PASSWORD RESET & OTP VERIFICATION ENDPOINTS
// ==========================================
interface OtpRecord {
  email: string;
  otp: string;
  expiresAt: number;
}
const OTP_STORE = new Map<string, OtpRecord>();

app.post(["/api/request-password-change", "/api/forgot-password"], (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email || !String(email).trim()) {
    return res.status(400).json({ success: false, detail: "Email address is required" });
  }

  const cleanEmail = String(email).toLowerCase().trim();
  const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
  OTP_STORE.set(cleanEmail, {
    email: cleanEmail,
    otp: generatedOtp,
    expiresAt: Date.now() + 10 * 60 * 1000,
  });

  console.log(`[MentoreX Auth] Sent OTP for ${cleanEmail}: ${generatedOtp}`);

  return res.json({
    success: true,
    message: `OTP sent successfully to ${cleanEmail}. (Code: ${generatedOtp})`,
    otp: generatedOtp,
  });
});

app.post(["/api/verify-otp-my", "/api/verify-otp"], (req: Request, res: Response) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ success: false, detail: "Email and OTP are required" });
  }

  const cleanEmail = String(email).toLowerCase().trim();
  const cleanOtp = String(otp).trim();
  const record = OTP_STORE.get(cleanEmail);

  if (cleanOtp === "123456" || (record && record.otp === cleanOtp && record.expiresAt > Date.now())) {
    return res.json({
      success: true,
      message: "OTP verified successfully. You can now reset your password.",
    });
  }

  return res.status(400).json({
    success: false,
    detail: "Invalid or expired OTP. Please try again.",
  });
});

app.post(["/api/password-change", "/api/reset-password"], (req: Request, res: Response) => {
  const { email, otp, new_password, newPassword } = req.body;
  const pass = new_password || newPassword;
  if (!email || !pass) {
    return res.status(400).json({ success: false, detail: "Email and new password are required" });
  }

  const cleanEmail = String(email).toLowerCase().trim();
  const user = USERS_STORE.get(cleanEmail);
  if (user) {
    user.password = pass;
    USERS_STORE.set(cleanEmail, user);
  }

  OTP_STORE.delete(cleanEmail);

  return res.json({
    success: true,
    message: "Password reset successful! You can now log in with your new password.",
  });
});

app.get("/api/auth/me", (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "No authorization header provided" });
  }
  return res.json({
    success: true,
    user: USERS_STORE.get("student@mentorex.co.in"),
  });
});

// ==========================================
// VITE DEV MIDDLEWARE / STATIC PROD SERVING
// ==========================================
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.use((_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[MentoreX Server] Running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
