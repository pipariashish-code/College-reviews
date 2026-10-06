// Authentication and User State Manager for MentoreX

export const AUTH_STORAGE_KEY = "authToken";
export const USER_STORAGE_KEY = "userInfo";
export const REGISTERED_USERS_KEY = "mentorex_registered_users";

// Default demo users for immediate 1-click sign-in and testing
export const DEMO_USERS = {
  student: {
    id: "usr-demo-student",
    username: "student@mentorex.co.in",
    email: "student@mentorex.co.in",
    name: "Aarav Sharma",
    role: "student",
    school: "Delhi Public School",
    city: "New Delhi",
    state: "Delhi",
  },
  mentor: {
    id: "mnt-demo-mentor",
    username: "mentor@mentorex.co.in",
    email: "mentor@mentorex.co.in",
    name: "Dr. Emily Rodriguez",
    role: "mentor",
    university: "NFSU & IIT Alumni",
    expertise: "STEM Admissions & Cyber Security",
    experience: "8+ years",
    city: "Gandhinagar",
    state: "Gujarat",
  },
  guest: {
    id: "usr-guest",
    username: "guest_explorer",
    email: "guest@mentorex.co.in",
    name: "Guest Explorer",
    role: "student",
    city: "Mumbai",
    state: "Maharashtra",
  },
};

/**
 * Get current logged in user from localStorage
 */
export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

/**
 * Get current auth token
 */
export function getAuthToken() {
  return localStorage.getItem(AUTH_STORAGE_KEY);
}

/**
 * Check if a user is currently logged in
 */
export function isAuthenticated() {
  return !!getAuthToken() && !!getCurrentUser();
}

/**
 * Persist user login session and notify listeners
 */
export function setAuthSession(user, token) {
  const authToken = token || `mentorex-token-${Date.now()}`;
  localStorage.setItem(AUTH_STORAGE_KEY, authToken);
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));

  // Dispatch custom event for real-time reactive UI update across components
  window.dispatchEvent(new CustomEvent("authChange", { detail: { user, token: authToken } }));
}

/**
 * Clear user session and notify listeners
 */
export function clearAuthSession() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  localStorage.removeItem(USER_STORAGE_KEY);

  window.dispatchEvent(new CustomEvent("authChange", { detail: { user: null, token: null } }));
}

/**
 * Get list of locally registered users
 */
export function getRegisteredUsers() {
  try {
    const raw = localStorage.getItem(REGISTERED_USERS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

/**
 * Save a newly registered user to local registry
 */
export function saveRegisteredUser(user) {
  try {
    const existing = getRegisteredUsers();
    const updated = [user, ...existing.filter((u) => u.email !== user.email && u.username !== user.username)];
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save registered user:", e);
  }
}

/**
 * Authenticate against locally saved accounts (fallback if backend offline)
 */
export function authenticateLocally(identifier, password) {
  const cleanId = (identifier || "").trim().toLowerCase();
  
  // 1. Check demo users
  if (cleanId === "guest" || cleanId.includes("guest")) {
    return { success: true, user: DEMO_USERS.guest, token: "mock-guest-token" };
  }
  if (cleanId === "student@mentorex.co.in" || cleanId === "student") {
    return { success: true, user: DEMO_USERS.student, token: "mock-student-token" };
  }
  if (cleanId === "mentor@mentorex.co.in" || cleanId === "mentor") {
    return { success: true, user: DEMO_USERS.mentor, token: "mock-mentor-token" };
  }

  // 2. Check registered users
  const registered = getRegisteredUsers();
  const matched = registered.find(
    (u) => (u.email && u.email.toLowerCase() === cleanId) || (u.username && u.username.toLowerCase() === cleanId)
  );

  if (matched) {
    // If password provided matches or registration had no strict hash requirement
    if (!matched.password || matched.password === password) {
      const safeUser = { ...matched };
      delete safeUser.password;
      return { success: true, user: safeUser, token: "mock-reg-token-" + Date.now() };
    }
    return { success: false, error: "Incorrect password. Please try again." };
  }

  // 3. Fallback: if username/email provided and password is at least 4 chars, allow sign-in
  if (cleanId && password && password.length >= 4) {
    const fallbackUser = {
      id: "usr-" + Math.floor(Math.random() * 9000 + 1000),
      username: identifier,
      email: identifier.includes("@") ? identifier : `${identifier}@mentorex.student`,
      name: identifier.includes("@") ? identifier.split("@")[0] : identifier,
      role: "student",
    };
    return { success: true, user: fallbackUser, token: "mock-auto-token-" + Date.now() };
  }

  return { success: false, error: "Account not found. Please register or use Demo Login." };
}
