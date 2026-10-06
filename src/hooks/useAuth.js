import { useState, useEffect } from "react";
import { getCurrentUser, isAuthenticated, setAuthSession, clearAuthSession } from "../utils/auth";

export function useAuth() {
  const [user, setUser] = useState(getCurrentUser());
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    const handleAuthChange = (e) => {
      const newUser = e?.detail?.user || getCurrentUser();
      setUser(newUser);
      setIsLoggedIn(!!newUser);
    };

    window.addEventListener("authChange", handleAuthChange);
    window.addEventListener("storage", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
      window.removeEventListener("storage", handleAuthChange);
    };
  }, []);

  const login = (userData, token) => {
    setAuthSession(userData, token);
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    clearAuthSession();
    setUser(null);
    setIsLoggedIn(false);
  };

  return {
    user,
    isLoggedIn,
    login,
    logout,
  };
}

export default useAuth;
