"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { STUDIO_PROJECTS } from "../../(home)/data/projectsData";
import StudioButton from "../../_shared/StudioButton";

const THEME = {
  section: "relative min-h-screen bg-(--color-studio-bg) text-(--color-studio-text) font-sans selection:bg-(--color-studio-text) selection:text-(--color-studio-bg) pt-24 md:pt-32 pb-32 transition-colors duration-500",
  container: "mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20",
  
  // Editorial Grid
  grid: "grid lg:grid-cols-12 gap-x-8 gap-y-12 lg:gap-y-0 py-20 md:py-32 border-b border-(--color-studio-border)",
  labelCol: "lg:col-span-3",
  contentCol: "lg:col-span-8 lg:col-start-4",
  
  // Typography
  title: "font-studio text-[clamp(4rem,12vw,12rem)] font-medium leading-[0.85] tracking-tighter mb-12 md:mb-20",
  label: "flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-(--color-studio-text) mb-4 lg:mb-0",
  bodyText: "text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.1] tracking-tight font-medium mb-12",
  smallBody: "text-lg md:text-xl leading-relaxed text-(--color-studio-muted) tracking-tight max-w-3xl",

  // Table
  tableRow: "flex justify-between py-6 border-t border-(--color-studio-border) items-center text-lg md:text-xl",
  tableLabel: "text-(--color-studio-muted) font-medium",
  tableValue: "text-(--color-studio-text) font-semibold",

  // Next Section Title
  nextTitle: "font-studio text-[clamp(3.5rem,10vw,8rem)] font-medium leading-none tracking-tighter group-hover:translate-x-4 transition-transform duration-700",
} as const;

const SectionMarker = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    fill="currentColor" 
    className="shrink-0"
  >
    <path d="M4.929 4.929A10 10 0 1 1 19.07 19.07A10 10 0 0 1 4.93 4.93m8.071 4.071a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"/>
  </svg>
);

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const projectIndex = STUDIO_PROJECTS.findIndex((p) => p.slug === slug);
  const project = STUDIO_PROJECTS[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = STUDIO_PROJECTS[(projectIndex + 1) % STUDIO_PROJECTS.length];

  return (
    <main className={THEME.section}>
      {/* 1. TOP NAV & TITLE */}
      <div className={THEME.container}>
        <nav className="py-12 flex justify-between items-center border-b border-(--color-studio-border) mb-20">
          <Link href="/" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-(--color-studio-accent) transition-colors">
            <ArrowLeft size={16} />
            Înapoi
          </Link>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-(--color-studio-muted)">
            <div className="w-2 h-2 rounded-full bg-(--color-studio-text)" />
            {project.title}
          </div>
        </nav>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={THEME.title}
        >
          {project.title}.
        </motion.h1>

        {/* 2. INTRODUCTION SECTION */}
        <section className={THEME.grid}>
          <div className={THEME.labelCol}>
            <span className={THEME.label}>
              <SectionMarker />
              Introducere
            </span>
          </div>
          <div className={THEME.contentCol}>
            <p className={THEME.bodyText}>
              {project.description}
            </p>
            
            {/* INFO TABLE */}
            <div className="mt-20 border-b border-(--color-studio-border)">
              <div className={THEME.tableRow}>
                <span className={THEME.tableLabel}>An</span>
                <span className={THEME.tableValue}>{project.year}</span>
              </div>
              <div className={THEME.tableRow}>
                <span className={THEME.tableLabel}>Industrie</span>
                <span className={THEME.tableValue}>{project.industry}</span>
              </div>
              <div className={THEME.tableRow}>
                <span className={THEME.tableLabel}>Servicii</span>
                <span className={THEME.tableValue}>{project.scopeOfWork}</span>
              </div>
              <div className={THEME.tableRow}>
                <span className={THEME.tableLabel}>Durată</span>
                <span className={THEME.tableValue}>{project.timeline}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-[40px] bg-(--color-studio-surface)">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* 4. CHALLENGES SECTION */}
        <section className={THEME.grid}>
          <div className={THEME.labelCol}>
            <span className={THEME.label}>
              <SectionMarker />
              Provocări
            </span>
          </div>
          <div className={THEME.contentCol}>
            <p className={THEME.bodyText}>
              {project.challenge}
            </p>
            <p className={THEME.smallBody}>
              {project.solution}
            </p>
            {/* LIVE PROJECT BUTTON */}
            <div className="max-w-60 mt-12">
               <StudioButton href="/#contact">
                 Proiect Live
               </StudioButton>
            </div>
          </div>
        </section>

        {/* 5. MEDIA GRID (GALLERY) */}
        <section className="grid md:grid-cols-2 gap-8 py-12">
          {project.gallery.map((img, idx) => (
            <div key={idx} className="relative aspect-square md:aspect-4/5 w-full overflow-hidden rounded-[40px] bg-(--color-studio-surface)">
              <Image
                src={img}
                alt={`${project.title} galerie ${idx}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </section>

        {/* 6. FINAL THOUGHTS SECTION */}
        <section className={THEME.grid}>
          <div className={THEME.labelCol}>
            <span className={THEME.label}>
              <SectionMarker />
              Concluzii
            </span>
          </div>
          <div className={THEME.contentCol}>
            <p className={THEME.bodyText}>
              {project.finalThoughts}
            </p>
          </div>
        </section>

        {/* 7. NEXT PROJECTS FOOTER */}
        <section className="py-32">
          <div className="mb-8">
             <span className="text-sm font-bold uppercase tracking-widest text-(--color-studio-muted)">fabrica©</span>
          </div>
          
          <div className="group flex flex-col md:flex-row items-baseline justify-between border-b border-(--color-studio-border) pb-12">
            <Link href={`/proiecte/${nextProject.slug}`} className="flex flex-col group">
              <h2 className={THEME.nextTitle}>Următoarele proiecte.</h2>
              <span className="text-xl font-bold mt-4 text-(--color-studio-muted)">(2016-25©)</span>
            </Link>
            
            <div className="mt-12 md:mt-0 min-w-60">
              <StudioButton href="/">
                Toate proiectele
              </StudioButton>
            </div>
          </div>
          
          <div className="mt-12 text-(--color-studio-muted)">
             <span className="text-2xl font-bold uppercase tracking-tighter transition-colors group-hover:text-(--color-studio-text)">{nextProject.title} / {nextProject.year}</span>
          </div>
        </section>
      </div>
    </main>
  );
}
