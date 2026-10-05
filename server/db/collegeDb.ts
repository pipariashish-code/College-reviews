import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { College, initialColleges } from "../collegeData.js";
import { VERIFIED_REGISTRY } from "../verifiedCollegeRegistry.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Persistent database file location
const DB_DIR = path.resolve(__dirname, "../data");
const DB_FILE = path.resolve(DB_DIR, "colleges-db.json");

class CollegeDatabaseManager {
  private collegesMap: Map<string, College> = new Map();
  private isInitialized = false;

  constructor() {
    this.init();
  }

  private init() {
    if (this.isInitialized) return;

    try {
      if (!fs.existsSync(DB_DIR)) {
        fs.mkdirSync(DB_DIR, { recursive: true });
      }

      // 1. Seed initial base colleges
      initialColleges.forEach((c) => {
        this.collegesMap.set(c.id, { ...c, source: "seed" });
      });

      // 2. Overlay verified registry colleges (authoritative NIRF/official data)
      Object.values(VERIFIED_REGISTRY).forEach((v) => {
        this.collegesMap.set(v.id, {
          ...v,
          source: "seed",
        } as College);
      });

      // 3. Load persistent saved records from disk if file exists
      if (fs.existsSync(DB_FILE)) {
        try {
          const raw = fs.readFileSync(DB_FILE, "utf-8");
          const savedColleges = JSON.parse(raw);
          if (Array.isArray(savedColleges)) {
            savedColleges.forEach((c: College) => {
              if (c && c.id) {
                // If it's in verified registry, keep the verified authoritative data
                const isVerified = Boolean(VERIFIED_REGISTRY[c.id]);
                if (!isVerified) {
                  this.collegesMap.set(c.id, c);
                }
              }
            });
            console.log(
              `[CollegeDatabase] Loaded ${savedColleges.length} persistent colleges from disk (${DB_FILE})`
            );
          }
        } catch (readErr) {
          console.error("[CollegeDatabase] Error reading persistent DB file:", readErr);
        }
      }

      // 4. Save current snapshot to disk
      this.persistToDisk();
      this.isInitialized = true;
      console.log(
        `[CollegeDatabase] Total colleges active in DB: ${this.collegesMap.size}`
      );
    } catch (err) {
      console.error("[CollegeDatabase] Initialization error:", err);
    }
  }

  private persistToDisk() {
    try {
      if (!fs.existsSync(DB_DIR)) {
        fs.mkdirSync(DB_DIR, { recursive: true });
      }
      const data = Array.from(this.collegesMap.values());
      const tempFile = `${DB_FILE}.tmp`;
      fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), "utf-8");
      fs.renameSync(tempFile, DB_FILE);
    } catch (err) {
      console.error("[CollegeDatabase] Failed to persist to disk:", err);
    }
  }

  /**
   * Return all colleges stored in the database
   */
  public getAllColleges(): College[] {
    return Array.from(this.collegesMap.values());
  }

  /**
   * Find a college by exact ID
   */
  public getCollegeById(id: string): College | null {
    if (!id) return null;
    return this.collegesMap.get(id) || null;
  }

  /**
   * Flexible lookup by name, acronym, or search query
   */
  public findCollege(query: string): College | null {
    if (!query || !query.trim()) return null;
    const q = query.toLowerCase().trim();
    const slug = q.replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-");

    // Exact ID or slug match
    if (this.collegesMap.has(slug)) return this.collegesMap.get(slug)!;
    if (this.collegesMap.has(q)) return this.collegesMap.get(q)!;

    // Search across all records
    for (const college of this.collegesMap.values()) {
      const cName = college.name.toLowerCase();
      const cShort = (college.shortName || "").toLowerCase();
      const cId = college.id.toLowerCase();

      if (
        cId === slug ||
        cName === q ||
        cShort === q ||
        cName.includes(q) ||
        (q.length >= 4 && cName.includes(q)) ||
        (q.length >= 3 && cShort === q) ||
        (q.includes("nfsu") && (cId.includes("nfsu") || cName.includes("forensic sciences"))) ||
        (q.includes("sibm") && cId.includes("sibm")) ||
        (q.includes("rvce") && (cId.includes("rv-college") || cId.includes("rvce"))) ||
        (q.includes("coep") && cId.includes("coep")) ||
        (q.includes("fms") && cId.includes("fms"))
      ) {
        return college;
      }
    }
    return null;
  }

  /**
   * Save or update a college into the persistent DB
   */
  public saveCollege(college: College): College {
    if (!college || !college.id) {
      throw new Error("Invalid college object: ID is required");
    }

    // Special safeguard for known official establishment years
    if (
      college.id.includes("nfsu") ||
      college.name.toLowerCase().includes("national forensic sciences university")
    ) {
      college.established = 2008;
    }

    this.collegesMap.set(college.id, college);
    this.persistToDisk();
    console.log(`[CollegeDatabase] Persisted "${college.name}" to database (${DB_FILE})`);
    return college;
  }

  /**
   * Database diagnostics and stats
   */
  public getStats() {
    return {
      totalColleges: this.collegesMap.size,
      filePath: DB_FILE,
      persisted: true,
      lastUpdated: new Date().toISOString(),
    };
  }
}

export const CollegeDatabase = new CollegeDatabaseManager();
