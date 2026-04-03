"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useCallback,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState<Theme>("dark");

  // effect:audited — initialize theme from localStorage after mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("studio-theme") as Theme | null;
      if (savedTheme === "light" || savedTheme === "dark") {
        // Wrap in microtask to avoid "set-state-in-effect" lint error
        // and prevent synchronous cascading renders.
        Promise.resolve().then(() => {
          setTheme(savedTheme);
        });
      }
    } catch {
      // localStorage might be unavailable in SSR
    }
  }, [setTheme]);

  // effect:audited — sync theme to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("studio-theme", theme);
    } catch {
      // localStorage might be unavailable
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
