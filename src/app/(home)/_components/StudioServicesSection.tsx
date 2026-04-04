"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import StudioButton from "@/app/_shared/StudioButton";
import StudioAnimatedNoise from "@/app/_shared/StudioAnimatedNoise";
import { STUDIO_SERVICES, ServiceItem } from "../data/servicesData";

const THEME = {
  section: {
    container:
      "flex w-full flex-col items-center justify-center px-0 py-12 md:px-4 md:py-32",
    // Desktop: Card look with margin and radius
    // Mobile: Full width, no padding, no rounded corners
    card: "relative w-full overflow-hidden rounded-none border-y border-(--color-studio-border) md:rounded-[24px] md:border md:bg-(--color-studio-surface)/20",
    content:
      "mx-auto flex w-full max-w-7xl flex-col px-3 py-12 md:px-6 md:py-20",
  },
  header: {
    padding: "flex flex-col-reverse pb-8 md:flex-row md:items-start md:gap-12",
    tag: "mt-2 flex items-center gap-1 text-sm font-normal tracking-widest text-[var(--color-studio-muted)] md:mt-4",
    title:
      "text-(--color-studio-text) text-[clamp(4rem,10vw,7rem)] font-studio font-medium leading-none tracking-tighter",
    counter:
      "font-studio font-medium ml-2 inline-block -translate-x-[0.6em] -translate-y-[0.7em] text-[0.5em] text-[var(--color-studio-muted)] ",
  },
  accordion: {
    list: "w-full",
    item: "border-t border-[var(--color-studio-muted)]/25 last:border-b",
    trigger: {
      base: "group flex w-full cursor-pointer items-center justify-between py-4 transition-all duration-300 active:scale-95",
      number:
        "font-studio font-semibold text-sm text-[var(--color-studio-muted)] transition-colors duration-300 group-hover:text-white",
      label:
        "text-left text-lg font-medium tracking-tight leading-snug text-(--color-studio-text) md:text-2xl",
      icon: "flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border border-(--color-studio-border) text-(--color-studio-text) md:group-hover:scale-110 transition-all duration-300 ease-in-out",
    },
    content: {
      wrapper: "pb-12",
      layout: "flex flex-col gap-4 md:gap-12 lg:gap-14 xl:flex-row xl:gap-16",
      media: {
        wrapper:
          "relative w-full shrink-0 aspect-[21/9] overflow-hidden rounded-[16px]  md:max-w-[500px]",
        image: "object-cover",
      },
      info: {
        wrapper: "flex flex-col justify-center gap-8",
        description:
          "max-w-xl text-md font-normal leading-snug text-(--color-studio-text) md:text-xl",
        metadata: {
          label:
            "mb-2 block text-[11px] font-bold  tracking-[0.1em] text-[var(--color-studio-muted)]",
          chipset: "flex max-w-sm flex-wrap gap-1",
          pill: "rounded-full border border-(--color-studio-border) bg-(--color-studio-surface) px-4 py-1.5 text-xs font-normal text-(--color-studio-text)",
        },
      },
    },
  },
  footer: {
    base: "flex justify-center md:justify-start lg:px-44 py-10",
  },
} as const;

export default function StudioServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className={THEME.section.container}>
      <motion.div
        className={cn("studio-theme isolate", THEME.section.card)}
        data-theme="dark"
      >
        {/* 1. Base Theme Background: Solid layer */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-(--color-studio-bg)" />

        {/* 2. Gradient Image Layer: Stationary background within the section */}
        <div className="pointer-events-none absolute top-0 left-0 z-0 h-750 w-full overflow-hidden opacity-80 mix-blend-normal">
          <Image
            src="/gradient.jpg"
            alt="Background Gradient"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* 3. Cinematic Organic Noise: Clean overlay */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <StudioAnimatedNoise opacity1={0.12} opacity2={0.08} />
        </div>

        <div className="relative z-10">
          <div className={THEME.section.content}>
            {/* ── Section Header ───────────────────────────────────────────── */}
            <header className={THEME.header.padding}>
              <span className={THEME.header.tag}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M4.929 4.929A10 10 0 1 1 19.07 19.07A10 10 0 0 1 4.93 4.93m8.071 4.071a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" />
                </svg>
                Ce facem
              </span>
              <h2 className={THEME.header.title}>
                Servicii.{" "}
                <sup className={THEME.header.counter}>
                  ({STUDIO_SERVICES.length})
                </sup>
              </h2>
            </header>

            {/* ── Accordion ─────────────────────────────────────────────── */}
            <ul className={THEME.accordion.list}>
              {STUDIO_SERVICES.map((service) => (
                <AccordionItem
                  key={service.id}
                  service={service}
                  isOpen={expandedId === service.id}
                  onToggle={() => toggleItem(service.id)}
                />
              ))}
            </ul>

            {/* ── Section Footer ───────────────────────────────────────────── */}
            <footer className={THEME.footer.base}>
              <Link href="#contact">
                <StudioButton className="mt-0 border-(--color-studio-bg) bg-(--color-studio-bg) px-12 text-(--color-studio-text) [--color-studio-bg:#fcfcf8] [--color-studio-surface:#09090b] [--color-studio-text:#09090b] hover:border-(--color-studio-bg) hover:bg-(--color-studio-text) hover:text-(--color-studio-text) hover:[--color-studio-surface:#fcfcf8] md:w-auto">
                  Contactează-ne
                </StudioButton>
              </Link>
            </footer>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AccordionItem({
  service,
  isOpen,
  onToggle,
}: Readonly<{
  service: ServiceItem;
  isOpen: boolean;
  onToggle: () => void;
}>) {
  return (
    <motion.li className={THEME.accordion.item}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`service-content-${service.id}`}
        className={THEME.accordion.trigger.base}
      >
        <div className="flex items-center gap-6 md:gap-34">
          <span
            className={cn(
              THEME.accordion.trigger.number,
              isOpen && "text-(--color-studio-text)",
            )}
          >
            {service.number}
          </span>
          <span
            id={`service-title-${service.id}`}
            className={THEME.accordion.trigger.label}
          >
            {service.title}
          </span>
        </div>
        <div
          className={cn(
            THEME.accordion.trigger.icon,
            isOpen &&
              "border-(--color-studio-text) bg-(--color-studio-text) text-(--color-studio-bg)",
          )}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      {/* Content always mounted — images load once, no re-mount lag */}
      <motion.div
        id={`service-content-${service.id}`}
        role="region"
        aria-labelledby={`service-title-${service.id}`}
        aria-hidden={!isOpen}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        initial={false}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className={THEME.accordion.content.wrapper}>
          <div className={THEME.accordion.content.layout}>
            {/* Media */}
            <div
              className={THEME.accordion.content.media.wrapper}
              style={{ aspectRatio: "21 / 9" }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={THEME.accordion.content.media.image}
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

            {/* Info Block */}
            <div className={THEME.accordion.content.info.wrapper}>
              <div className="flex flex-col">
                <p className={THEME.accordion.content.info.description}>
                  {service.description}
                </p>
              </div>

              {/* Metadata */}
              <div className="flex flex-col">
                <span className={THEME.accordion.content.info.metadata.label}>
                  CATEGORII
                </span>
                <div className={THEME.accordion.content.info.metadata.chipset}>
                  {service.categories.map((cat) => (
                    <span
                      key={cat}
                      className={THEME.accordion.content.info.metadata.pill}
                    >
                      {cat}
                    </span>
                  ))}
                  <span className={THEME.accordion.content.info.metadata.pill}>
                    +{service.categories.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
}
