"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialMode = savedMode !== null ? JSON.parse(savedMode) : systemDark;

    setIsDarkMode(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
