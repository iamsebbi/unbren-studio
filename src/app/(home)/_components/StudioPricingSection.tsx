"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import StudioAnimatedNoise from "@/app/_shared/StudioAnimatedNoise";
import StudioButton from "@/app/_shared/StudioButton";
import { cn } from "@/lib/utils";

const THEME = {
  section: {
    container:
      "flex w-full flex-col items-center justify-center px-0 py-8 md:px-4 md:py-16",
    card: "relative w-full min-h-[650px] overflow-hidden rounded-none border-y border-(--color-studio-border) md:rounded-[24px] md:border md:bg-(--color-studio-surface)/20 md:shadow-2xl bg-(--color-studio-bg)",
    content:
      "mx-auto flex w-full max-w-screen-2xl flex-col px-4 py-8 md:px-6 md:py-12",
  },
  header: {
    padding:
      "flex flex-col-reverse pb-8 md:flex-row md:items-start md:gap-16 mb-8 md:mb-10",
    tag: "mt-2 flex items-center gap-1 text-sm font-normal tracking-widest text-[var(--color-studio-muted)] md:mt-4",
    title:
      "text-(--color-studio-text) text-[clamp(4.5rem,10vw,8rem)] font-studio font-medium leading-none tracking-tighter",
  },
  pricing: {
    toggle: {
      wrapper:
        "mx-auto md:mx-0 flex items-center gap-1 rounded-full bg-(--color-studio-surface) p-1 w-fit mb-8",
      button:
        "relative px-8 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full",
      activeBg: "absolute inset-0 bg-white rounded-full",
    },
    grid: "flex flex-col lg:flex-row-reverse gap-8 w-full mb-10",
    main: {
      card: "flex-1 flex flex-col bg-(--color-studio-surface)/40 border border-(--color-studio-border) rounded-[32px] p-8 md:p-12",
      price:
        "text-[clamp(3.5rem,8vw,5.5rem)] font-bold tracking-tighter text-white leading-none",
      period:
        "text-xl font-normal text-(--color-studio-muted) ml-4 tracking-tight mt-2 self-start",
      features: "flex flex-col gap-4",
      feature:
        "flex items-start gap-4 text-sm md:text-base text-white/80 font-medium leading-relaxed",
      iconWrapper:
        "flex h-6 w-6 shrink-0 aspect-square items-center justify-center rounded-full border border-white/20 text-white mt-0.5",
    },
    addon: {
      card: "lg:w-[460px] flex flex-col justify-between bg-(--color-studio-surface)/40 border border-(--color-studio-border) rounded-[32px] p-8 md:p-12",
      title: "text-2xl font-bold text-white mb-4",
      description: "text-lg text-(--color-studio-muted) mb-10 max-w-[280px]",
      price: "text-3xl font-bold text-white",
      switch:
        "relative h-12 w-24 rounded-full bg-white/10 p-1 cursor-pointer transition-colors",
      switchHandle: "h-10 w-10 rounded-full bg-white shadow-lg",
    },
  },
  footer: {
    label:
      "text-sm font-medium text-(--color-studio-muted) uppercase tracking-widest mb-4",
    text: "text-[clamp(1.5rem,4vw,2.2rem)] font-medium text-white leading-tight tracking-tight max-w-4xl mb-6",
  },
} as const;

export default function StudioPricingSection() {
  const [billing, setBilling] = useState<"project" | "monthly">("project");
  const [addonActive, setAddonActive] = useState(false);

  return (
    <section className={THEME.section.container}>
      <div
        className={cn(THEME.section.card, "studio-theme isolate")}
        data-theme="dark"
      >
        <StudioAnimatedNoise opacity1={0.03} />

        {/* ── Background Cinematic Layer ──────────────────────────────── */}
        <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60">
          <Image
            src="/gradient.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10">
          <div className={THEME.section.content}>
            {/* ── Section Header ────────────────────────────────────────── */}
            <header className={THEME.header.padding}>
              <span className={THEME.header.tag}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M4.929 4.929A10 10 0 1 1 19.07 19.07A10 10 0 0 1 4.93 4.93m8.071 4.071a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" />
                </svg>
                Investește în performanță
              </span>
              <h2 className={THEME.header.title}>Prețuri.</h2>
            </header>

            {/* ── Billing Cycle Toggle ──────────────────────────────────── */}
            <div className={THEME.pricing.toggle.wrapper}>
              <button
                onClick={() => setBilling("project")}
                className={cn(
                  THEME.pricing.toggle.button,
                  billing === "project" ? "text-black" : "text-white/60",
                )}
              >
                {billing === "project" && (
                  <motion.div
                    layoutId="activeBilling"
                    className={THEME.pricing.toggle.activeBg}
                  />
                )}
                <span className="relative z-10">Lansare Proiect</span>
              </button>
              <button
                onClick={() => setBilling("monthly")}
                className={cn(
                  THEME.pricing.toggle.button,
                  billing === "monthly" ? "text-black" : "text-white/60",
                )}
              >
                {billing === "monthly" && (
                  <motion.div
                    layoutId="activeBilling"
                    className={THEME.pricing.toggle.activeBg}
                  />
                )}
                <div className="relative z-10 flex items-center gap-2">
                  <span>Abonament Creștere</span>
                  <span
                    className={cn(
                      "hidden rounded-full px-2 py-0.5 text-[10px] font-bold uppercase md:inline-block",
                      billing === "monthly"
                        ? "bg-black/10 text-black"
                        : "bg-white/10 text-white",
                    )}
                  >
                    Popular
                  </span>
                </div>
              </button>
            </div>

            {/* ── Pricing Grid ─────────────────────────────────────────── */}
            <div className={cn(THEME.pricing.grid, "mb-8")}>
              {/* Main Card */}
              <div className={THEME.pricing.main.card}>
                <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                  <div className={THEME.pricing.main.price}>
                    {billing === "project" ? "2.490€" : "1.990€"}
                    <span className={THEME.pricing.main.period}>
                      /{billing === "project" ? "proiect" : "lună"}
                    </span>
                  </div>

                  <div className={THEME.pricing.main.features}>
                    {[
                      "Audit Strategic Homepage + 4 pagini de conversie",
                      "Design Custom Figma & Dezvoltare High-Performance",
                      "Experiență Mobile-First (Viteză maximă)",
                      ...(billing === "monthly"
                        ? [
                            "Actualizări de securitate și optimizări lunare active",
                          ]
                        : []),
                    ].map((feature) => (
                      <div key={feature} className={THEME.pricing.main.feature}>
                        <div className={THEME.pricing.main.iconWrapper}>
                          <Plus size={14} />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-white/40">
                      Timp de livrare estimat
                    </span>
                    <span className="font-bold text-white">3-4 săptămâni</span>
                  </div>

                  <StudioButton className="md:w-auto md:px-12">
                    Solicită o ofertă
                  </StudioButton>
                </div>
              </div>

              {/* Addon Card */}
              <div className={THEME.pricing.addon.card}>
                <div>
                  <h3 className={THEME.pricing.addon.title}>
                    Vrei un flux constant de clienți noi?
                  </h3>
                  <p className={THEME.pricing.addon.description}>
                    Investește în vânzări, nu doar în trafic. SEO și Ads create pentru a converti vizitatorii în profit.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className={THEME.pricing.addon.price}>
                    +1.490€
                    <span className="ml-1 text-sm opacity-50">/lună</span>
                  </div>
                  <div
                    onClick={() => setAddonActive(!addonActive)}
                    className={cn(
                      THEME.pricing.addon.switch,
                      addonActive ? "bg-white" : "bg-white/10",
                    )}
                  >
                    <motion.div
                      animate={{ x: addonActive ? 48 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className={cn(
                        THEME.pricing.addon.switchHandle,
                        addonActive ? "bg-black" : "bg-white",
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Section Footer ────────────────────────────────────────── */}
            <div className="mt-8">
              <div className={THEME.footer.label}>
                Ești pregătit pentru mai mult?
              </div>
              <h3 className={THEME.footer.text}>
                Adaugă marketing, SEO sau creare de conținut — instrumente
                flexibile pentru a-ți întări proiectul. Vom modela o soluție
                care se potrivește afacerii tale.
              </h3>

              {/* Service Chips */}
              <div className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start md:gap-3">
                {[
                  "Copywriting în română",
                  "Campanii Google Ads",
                  "Social media",
                  "SEO local",
                  "Magazin online",
                ].map((chip) => (
                  <div
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
