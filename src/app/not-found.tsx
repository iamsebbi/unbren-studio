"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import StudioButton from "./_shared/StudioButton";
import StudioAnimatedNoise from "./_shared/StudioAnimatedNoise";

export default function NotFound() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="studio-theme min-h-screen selection:bg-(--color-studio-accent) selection:text-white">
      <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Background Noise: Subtil pentru textură */}
        <StudioAnimatedNoise opacity1={0.05} opacity2={0.03} />

        {/* 404 Background Decorative Text */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.03]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[50vw] font-bold leading-none tracking-tighter">
            404
          </div>
        </div>

        <div className="relative z-10 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            <span className="mb-6 block text-xs font-bold uppercase tracking-[0.3em] text-(--color-studio-accent)">
              Eroare de sistem
            </span>

            <h1 className="font-studio mb-8 text-6xl font-semibold leading-[0.85] tracking-tighter text-(--color-studio-text) md:text-9xl">
              PAGINA NU <br />
              <span className="text-(--color-studio-accent)">EXISTĂ.</span>
            </h1>

            <p className="mx-auto mb-12 max-w-md text-sm leading-snug tracking-tight text-(--color-studio-muted) md:text-lg">
              Se pare că resursa pe care o cauți a fost mutată sau arhivată. 
              Echipa noastră lucrează deja la restabilirea ordinii digitale.
            </p>

            <div className="flex flex-col items-center gap-8">
              {/* Butonul tău personalizat StudioButton */}
              <StudioButton 
                href="/"
                className="px-12 py-4 bg-(--color-studio-text) text-(--color-studio-bg) border-(--color-studio-text) hover:bg-transparent hover:text-(--color-studio-text)"
              >
                Înapoi la Studio
              </StudioButton>

              <Link
                href="/"
                className="group relative text-xs font-bold uppercase tracking-[0.2em] text-(--color-studio-muted) transition-colors hover:text-(--color-studio-text)"
              >
                Către BOLD Studios
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-(--color-studio-accent) transition-all group-hover:w-full" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Year info */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-(--color-studio-muted) opacity-50">
          BOLD Studios &copy; {currentYear}
        </div>
      </main>
    </div>
  );
}
