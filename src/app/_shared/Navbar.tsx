"use client";

import React, { useState, useEffect } from "react";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import Link from "next/link";
import { cn } from "@/lib/utils";
import StudioThemeToggle from "@/app/_shared/StudioThemeToggle";

const NAV_LINKS = [
  { name: "Studio", href: "/" },
  { name: "Proiecte", href: "/#projects" },
  { name: "Despre noi", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useWindowScroll(20);

  // LOGICA DE SCROLL LOCK: Oprește scroll-ul paginii când meniul e deschis
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 z-60 w-full transition-all duration-500 ease-in-out",
          "flex h-16 items-center md:h-20",
          isScrolled || isOpen
            ? "bg-(--color-studio-bg)/80 saturate-180 backdrop-blur-lg"
            : "bg-transparent",
        )}
      >
        <div className="flex w-full items-center justify-between px-6 md:px-12">
          {/* 1. LOGO: unbren. */}
          <Link
            href="/"
            className="group flex shrink-0 items-baseline gap-0"
            onClick={handleLogoClick}
          >
            <span className="font-clash text-2xl font-medium tracking-tight text-(--color-studio-text) transition-colors duration-500 md:text-3xl">
              unbren
            </span>
            <span className="text-2xl font-bold text-(--color-studio-accent)">
              .
            </span>
          </Link>

          {/* 2. DISTRIBUTED DESKTOP LINKS */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "group relative hidden font-sans text-lg font-medium tracking-tight transition-colors duration-500 md:block",
                !isScrolled && !isOpen
                  ? "text-(--color-studio-text)/80 hover:text-(--color-studio-text)"
                  : "text-(--color-studio-text)/70 hover:text-(--color-studio-text)",
              )}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-(--color-studio-accent) transition-all duration-300 ease-[cubic-bezier(0.82,0,0.26,1)] group-hover:w-full" />
            </Link>
          ))}

          {/* 3. THEME TOGGLE (Desktop) / HAMBURGER (Mobile) */}
          <div className="flex shrink-0 items-center gap-6">
            <StudioThemeToggle
              className={cn(
                "hidden md:flex",
                !isScrolled && !isOpen && "hero-state",
              )}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative flex h-10 w-10 flex-col items-end justify-center gap-1.5 focus:outline-none md:hidden"
              aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
            >
              {/* Line 1: Long */}
              <span
                className={cn(
                  "h-0.5 w-8 bg-(--color-studio-text) transition-all duration-500 ease-out",
                  isOpen ? "translate-y-1 rotate-45" : "",
                )}
              />
              {/* Line 2: Short */}
              <span
                className={cn(
                  "h-0.5 bg-(--color-studio-text) transition-all duration-500 ease-out",
                  isOpen ? "w-8 -translate-y-1 -rotate-45" : "w-5",
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY: Tip CARD FULL-SCREEN cu Expand & Blur */}
      <div
        className={cn(
          "fixed inset-0 z-70 flex items-start justify-end p-3 transition-all duration-500 md:hidden",
          isOpen ? "visible" : "invisible",
        )}
      >
        {/* Backdrop Background Blur Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-(--color-studio-bg)/60 backdrop-blur-md transition-opacity duration-700",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* The Full-Screen Card Menu */}
        <div
          className={cn(
            "relative flex h-full w-full origin-top-right flex-col overflow-hidden rounded-3xl border border-(--color-studio-border) bg-(--color-studio-bg)/95 p-8 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",
            isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        >
          {/* Internal Header for Close Button & Logo */}
          <div className="mb-16 flex w-full items-center justify-between border-b border-(--color-studio-border)/10 pb-6">
            <div className="flex items-baseline gap-0">
              <span className="font-clash text-2xl font-medium tracking-tight text-(--color-studio-text)">
                unbren
              </span>
              <span className="text-2xl font-bold text-(--color-studio-accent)">
                .
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 flex-col items-end justify-center gap-1.5 focus:outline-none"
            >
              <span className="h-0.5 w-8 translate-y-1 rotate-45 bg-(--color-studio-text)" />
              <span className="h-0.5 w-8 -translate-y-1 -rotate-45 bg-(--color-studio-text)" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center space-y-10">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-clash transform text-4xl font-medium tracking-tight text-(--color-studio-text) transition-all duration-700",
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0",
                )}
                style={{ transitionDelay: `${idx * 80 + 200}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom Section: Contact & Legal */}
          <div className="mt-auto w-full border-t border-(--color-studio-border)/20 pt-10">
            <div className="flex flex-col items-center space-y-6">
              {/* Theme Toggle in Mobile Menu */}
              <StudioThemeToggle className="mb-4" />

              {/* Phone & Email */}
              <div className="flex flex-col items-center space-y-2">
                <a
                  href="tel:+40740000000"
                  className="font-clash text-xl font-medium text-(--color-studio-text) transition-opacity hover:opacity-70"
                >
                  +40 740 000 000
                </a>
                <a
                  href="mailto:hello@unbren.studio"
                  className="font-sans text-sm font-medium text-(--color-studio-text)/60 transition-opacity hover:opacity-100"
                >
                  hello@unbren.studio
                </a>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6 font-sans text-sm tracking-tight text-(--color-studio-text)/40">
                <Link
                  href="/policy"
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-(--color-studio-text)"
                >
                  Politica de Confidentialitate
                </Link>
                <Link
                  href="/terms"
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-(--color-studio-text)"
                >
                  Termeni si Conditii
                </Link>
              </div>

              {/* Copyright */}
              <p className="font-sans text-[10px] tracking-tight text-(--color-studio-text)/20 uppercase">
                &copy; {new Date().getFullYear()} Unbren Studio. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
