"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link"; // Adăugăm importul pentru Link
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type StudioButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  href?: string;
  arrowClassName?: string;
};

const baseClassName =
  "group relative mt-2 flex w-full cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-full border border-(--color-studio-text) bg-(--color-studio-text) px-8 py-3 text-lg font-semibold text-(--color-studio-surface) transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-(--color-studio-text) focus-visible:ring-2 focus-visible:ring-(--color-studio-accent)/50 focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-studio-surface) active:scale-95 disabled:cursor-not-allowed disabled:opacity-50";

export default function StudioButton({
  children,
  isLoading = false,
  loadingText = "Loading...",
  className,
  disabled,
  type = "button",
  href, // Destructurăm href
  arrowClassName,
  ...props
}: Readonly<StudioButtonProps>) {
  
  // Conținutul butonului extras pentru a nu-l repeta
  const content = (
    <>
      <ArrowRight className={cn("absolute top-1/2 left-[-25%] z-9 h-5 w-5 -translate-y-1/2 stroke-(--color-studio-surface) transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4 group-hover:stroke-(--color-studio-text)", arrowClassName)} />
      <span className="relative z-1 -translate-x-3 transition-all duration-700 ease-out group-hover:translate-x-3">
        {isLoading ? loadingText : children}
      </span>
      <span className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-studio-surface) opacity-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-115 group-hover:w-115 group-hover:opacity-100" />
      <ArrowRight className={cn("absolute top-1/2 right-4 z-9 h-5 w-5 -translate-y-1/2 stroke-(--color-studio-surface) transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] group-hover:stroke-(--color-studio-text)", arrowClassName)} />
    </>
  );

  // Dacă avem href, decidem între Link (pagini noi) și <a> (ancore interne)
  if (href) {
    const isAnchor = href.startsWith("#");
    
    if (isAnchor) {
      return (
        <a href={href} className={cn(baseClassName, className)}>
          {content}
        </a>
      );
    }

    return (
      <Link 
        href={href} 
        className={cn(baseClassName, className)}
      >
        {content}
      </Link>
    );
  }

  // Altfel, rămâne butonul standard
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={cn(baseClassName, className)}
      {...props}
    >
      {content}
    </button>
  );
}
