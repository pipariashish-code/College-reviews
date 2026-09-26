// Backend URL. On Vercel, set VITE_API_URL in Project Settings -> Environment Variables.
// Locally it falls back to your Flask dev server.
export const API_URL = (import.meta.env.VITE_API_URL || "http://127.0.0.1:5000").replace(/\/$/, "");

// Email shown in the footer.
export const CONTACT_EMAIL = "admin@mentorex.co.in";

// Where newsletter sign-ups are sent (via the free FormSubmit service).
// After activating FormSubmit, you can set VITE_SUBSCRIBE_ENDPOINT in Vercel to the
// random-string address FormSubmit gives you, so your email isn't visible in the site code.
export const SUBSCRIBE_ENDPOINT =
  import.meta.env.VITE_SUBSCRIBE_ENDPOINT ||
  `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
