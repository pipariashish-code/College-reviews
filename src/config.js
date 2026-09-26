// Backend URL. On Vercel, set VITE_API_URL in Project Settings -> Environment Variables.
// Locally it falls back to your Flask dev server.
export const API_URL = (import.meta.env.VITE_API_URL || "http://127.0.0.1:5000").replace(/\/$/, "");
