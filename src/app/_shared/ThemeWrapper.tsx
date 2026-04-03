"use client";

import type { ReactNode } from "react";
import Navbar from "@/app/_shared/Navbar";
import StudioFooter from "@/app/_shared/StudioFooter";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useTheme } from "@/app/_context/ThemeContext";

export default function ThemeWrapper({ children }: Readonly<{ children: ReactNode }>) {
  const { theme } = useTheme();
  return (
    <div className="studio-theme" data-theme={theme}>
      <Navbar />
      <main className="min-h-screen selection:bg-(--color-studio-accent) selection:text-white">
        {children}
      </main>
      <StudioFooter />
      <ProgressiveBlur
        className="fixed right-0 bottom-0 left-0 z-30"
        height="10%"
        position="bottom"
      />
    </div>
  );
}
