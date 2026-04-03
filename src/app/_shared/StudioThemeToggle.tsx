"use client";

import React from "react";
import { useTheme } from "@/app/_context/ThemeContext";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

interface StudioThemeToggleProps {
  className?: string;
}

export default function StudioThemeToggle({ className }: StudioThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "group relative flex h-9 w-20 items-center rounded-full p-1.5 transition-all duration-500",
        "border border-(--color-studio-border) bg-transparent hover:bg-(--color-studio-text)/5",
        // Hero state adaptation from parent
        className?.includes("hero-state") && "border-white/20 hover:bg-white/10",
        className
      )}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {/* The Sliding Thumb with Integrated Icon */}
      <div 
        className={cn(
          "relative z-10 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-sm",
          "bg-(--color-studio-text)",
          isDark ? "translate-x-0" : "translate-x-11",
          // Hero state thumb color
          className?.includes("hero-state") && "bg-white"
        )}
      >
        {/* Unified Icon Container for perfect centering */}
        <div className="relative flex h-full w-full items-center justify-center">
          <Moon 
            size={14} 
            strokeWidth={2.5}
            className={cn(
              "absolute transition-all duration-500",
              isDark ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50",
              className?.includes("hero-state") ? "text-black" : (isDark ? "text-(--color-studio-bg)" : "text-white")
            )} 
          />
          <Sun 
            size={14} 
            strokeWidth={2.5}
            className={cn(
              "absolute transition-all duration-500",
              !isDark ? "rotate-0 opacity-100 scale-100" : "rotate-90 opacity-0 scale-50",
              className?.includes("hero-state") ? "text-black" : (isDark ? "text-(--color-studio-bg)" : "text-white")
            )} 
          />
        </div>
      </div>
    </button>
  );
}
