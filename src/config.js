// Backend URL. In the integrated full-stack app, it calls the local Express API by default.
// Only use VITE_API_URL if it is an explicit absolute http(s) URL.
const rawApiUrl = (import.meta.env.VITE_API_URL || "").trim();
export const API_URL =
  rawApiUrl.startsWith("http://") || rawApiUrl.startsWith("https://")
    ? rawApiUrl.replace(/\/$/, "")
    : "";

// Email shown in the footer.
export const CONTACT_EMAIL = "admin@mentorex.co.in";

// Where newsletter sign-ups are sent (via the free FormSubmit service).
// After activating FormSubmit, you can set VITE_SUBSCRIBE_ENDPOINT in Vercel to the
// random-string address FormSubmit gives you, so your email isn't visible in the site code.
export const SUBSCRIBE_ENDPOINT =
  (import.meta.env.VITE_SUBSCRIBE_ENDPOINT &&
   import.meta.env.VITE_SUBSCRIBE_ENDPOINT.startsWith("http"))
    ? import.meta.env.VITE_SUBSCRIBE_ENDPOINT
    : `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
