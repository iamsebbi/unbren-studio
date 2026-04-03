"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { STUDIO_PROJECTS, Project } from "../data/projectsData";
import { cn } from "@/lib/utils";

const NOISE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='140' height='140' filter='url(#n)' opacity='0.45'/></svg>`;
const NOISE_TEXTURE = `url("data:image/svg+xml;utf8,${encodeURIComponent(NOISE_SVG)}")`;

const THEME = {
  section: {
    base: "pt-48 pb-24 md:pt-64 md:pb-32",
    container: "mx-auto w-full max-w-440 px-2 md:px-6 lg:px-16",
  },
  header: {
    base: "flex flex-col gap-0 text-left md:gap-6 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-2",
    count:
      "tracking-tight font-sans text-left text-lg leading-none font-bold md:text-2xl lg:col-span-2 lg:row-start-1 lg:self-start",
    title:
      "font-studio text-[clamp(4.5rem,11vw,10.5rem)] font-medium tracking-tighter lg:col-span-6 lg:col-start-3 lg:row-start-1 lg:leading-none",
    descriptionContainer:
      "order-4 mt-2 max-w-97.5 lg:order-0 lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:mt-0 lg:ml-auto lg:self-end",
    descriptionText:
      "text-lg tracking-tight leading-snug text-(--color-studio-muted)",
    year: "text-[var(--color-studio-text)] order-3 block text-3xl font-bold tracking-[-0.1em] md:text-5xl lg:order-0 lg:col-span-6 lg:col-start-3 lg:row-start-2 lg:mt-0",
  },
  grid: {
    base: "mt-12 grid grid-cols-1 gap-x-2 gap-y-2 md:grid-cols-2",
  },
  card: {
    article: "group flex cursor-pointer flex-col",
    header:
      "mb-2 flex items-center justify-between rounded-2xl border border-(--color-studio-surface) bg-(--color-studio-surface) px-4 py-1",
    titleGroup: "flex items-baseline gap-2",
    titleText: "text-base font-semibold tracking-tight",
    yearText: "text-sm font-semibold text-(--color-studio-muted)",
    menuButton:
      "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.82,0,0.26,1)] active:scale-95",
    imageContainer:
      "relative aspect-5/4 rounded-2xl bg-(--color-studio-surface) lg:aspect-auto lg:h-115",
    imageInnerPadding: "absolute inset-0 z-0 overflow-hidden rounded-2xl p-2",
    imageWrapper:
      "relative h-full w-full overflow-hidden rounded-xl transition-transform duration-500 ease-[cubic-bezier(0.82,0,0.26,1)] group-hover:scale-[1.1]",
    image:
      "object-cover transition-[filter] duration-500 ease-[cubic-bezier(0.82,0,0.26,1)] group-hover:blur-xs",
    overlay:
      "pointer-events-none absolute inset-0 bg-black/15 transition-colors duration-500 ease-[cubic-bezier(0.82,0,0.26,1)] group-hover:bg-black/30",
    noise:
      "pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500 ease-[cubic-bezier(0.82,0,0.26,1)] group-hover:opacity-45",
    contentOverlay: "relative z-10 flex h-full items-center justify-center p-6",
    centeredTitleContainer:
      "flex items-center px-4 py-2 text-white transition-transform duration-500 ease-[cubic-bezier(0.82,0,0.26,1)] group-hover:scale-85",
    centeredTitle: "text-3xl font-semibold tracking-tight md:text-3xl",
  },
} as const;

const ProjectMorphIcon = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="44"
      height="44"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="overflow-visible"
    >
      <motion.path
        animate={{
          d: isHovered 
            ? "M7 17 L15.8 8.2" 
            : "M4 12 L4.01 12",
          strokeWidth: isHovered ? 2.2 : 3.5 
        }}
        transition={{ duration: 0.5, ease: [0.82, 0, 0.26, 1] }}
      />
      <motion.path
        animate={{
          d: isHovered 
            ? "M17 7 L7 7" 
            : "M12 12 L12.01 12",
          strokeWidth: isHovered ? 2.2 : 3.5
        }}
        transition={{ duration: 0.5, ease: [0.82, 0, 0.26, 1] }}
      />
      <motion.path
        animate={{
          d: isHovered 
            ? "M17 7 L17 17" 
            : "M20 12 L20.01 12",
          strokeWidth: isHovered ? 2.2 : 3.5
        }}
        transition={{ duration: 0.5, ease: [0.82, 0, 0.26, 1] }}
      />
    </svg>
  );
};

export default function StudioProjects() {
  return (
    <section className={THEME.section.base}>
      <div className={THEME.section.container}>
        <header className={THEME.header.base}>
          <span className={THEME.header.count}>({STUDIO_PROJECTS.length})</span>

          <h1 className={THEME.header.title}>Proiecte.</h1>

          <div className={THEME.header.descriptionContainer}>
            <p className={THEME.header.descriptionText}>
              Am ajutat afaceri din diverse industrii să își atingă obiectivele. Iată câteva dintre proiectele noastre recente.
            </p>
          </div>

          <span className={THEME.header.year}>©2025</span>
        </header>

        <div className={THEME.grid.base}>
          {STUDIO_PROJECTS.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { title, year, imageSrc, slug } = project;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      href={`/proiecte/${slug}`} 
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article className={THEME.card.article}>
        <div className={THEME.card.header}>
          <div className={THEME.card.titleGroup}>
            <span className={THEME.card.titleText}>{title}.</span>
            <span className={THEME.card.yearText}>/{year}</span>
          </div>
          <div
            className={cn(
              THEME.card.menuButton,
              isHovered ? "text-(--color-studio-text)" : "text-(--color-studio-muted)/70"
            )}
          >
            <ProjectMorphIcon isHovered={isHovered} />
          </div>
        </div>

        <div className={THEME.card.imageContainer}>
          <div className={THEME.card.imageInnerPadding}>
            <div className={THEME.card.imageWrapper}>
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={THEME.card.image}
              />
              <div className={THEME.card.overlay} />
              <div
                className={THEME.card.noise}
                style={{
                  backgroundImage: NOISE_TEXTURE,
                  backgroundSize: "180px 180px",
                }}
              />
            </div>
          </div>

          <div className={THEME.card.contentOverlay}>
            <div className={THEME.card.centeredTitleContainer}>
              <span className={THEME.card.centeredTitle}>{title}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
