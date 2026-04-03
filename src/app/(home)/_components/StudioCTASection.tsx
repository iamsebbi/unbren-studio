"use client";

import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { cn } from "@/lib/utils";
import StudioButton from "@/app/_shared/StudioButton";
import StudioAnimatedNoise from "@/app/_shared/StudioAnimatedNoise";

// ─────────────────────────────────────────────────────────────────────────────
const THEME = {
  section: {
    container: "relative w-full min-h-[85dvh] p-0 md:h-[88vh] md:px-4 md:py-4",
    card: "relative flex min-h-full w-full flex-col overflow-hidden p-0 md:p-5 md:items-center md:justify-center md:rounded-[28px] lg:p-6",
  },
  layout: {
    wrapper:
      "relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center gap-12 px-4 py-16 md:px-10 md:py-0 lg:flex-row lg:items-start",
    textColumn: "order-2 md:order-2 flex w-full flex-col gap-8 lg:w-1/2",
    title: {
      wrapper: "space-y-4",
      tag: "section-label",
      main: "text-[clamp(4.25rem,8vw,7.5rem)] font-studio font-semibold tracking-tight leading-none text-white drop-shadow-2xl",
      sub: "max-w-md text-[clamp(1.75rem,1.8vw,1.25rem)] tracking-tight leading-tight text-left text-white/90 drop-shadow-md",
    },
    approach: {
      wrapper: "flex flex-col gap-6 md:gap-8 lg:gap-10 xl:flex-row xl:gap-12",
      item: "flex flex-col gap-2 flex-1 text-left",
      label:
        "text-(--color-studio-accent) text-xs font-bold uppercase tracking-[0.2em] drop-shadow-sm",
      value:
        "text-xs font-medium text-white/80 md:text-base leading-relaxed",
    },
  },
  form: {
    wrapper: "order-1 md:order-1 w-full max-w-lg",
    container:
      "w-full rounded-[24px] border border-white/10 bg-black/60 backdrop-blur-xl p-6 shadow-2xl md:p-12",
    header: "flex flex-col gap-6 mb-8",
    logo: "h-8 w-auto self-start logo-theme",
    headline:
      "text-white text-3xl md:text-4xl font-bold tracking-tight leading-tight",
    inputGroup: "space-y-4",
    field: "flex flex-col gap-2",
    label: "text-xs font-bold uppercase tracking-wider text-white/70",
    input:
      "h-12 w-full font-medium rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-base text-white outline-none transition-all placeholder:text-white/30 focus:border-(--color-studio-accent) focus:bg-white/10 focus-visible:ring-2 focus-visible:ring-(--color-studio-accent)/40",
    textarea:
      "min-h-[48px] font-medium w-full resize-none overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition-all placeholder:text-white/30 focus:border-(--color-studio-accent) focus:bg-white/10 focus-visible:ring-2 focus-visible:ring-(--color-studio-accent)/40",
    counter: " self-end font-semibold text-xs",
    legal: "mt-2 text-left text-xs leading-snug text-white/40",
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function StudioCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      // Set to scrollHeight if it's more than standard line height
      textareaRef.current.style.height = Math.max(48, scrollHeight) + "px";
    }
  }, [formData.message]);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || formData.message.length < 10) {
      if (formData.message.length < 10 && formData.message.length > 0) {
        return toast.error("Mesajul trebuie să aibă minim 10 caractere.");
      }
      return toast.error("Te rugăm să completezi toate câmpurile obligatorii.");
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "lipsa_cheie",
          ...formData,
          subject: "Solicitare Proiect - Unbren Studio",
        }),
      });

      if (response.ok) {
        toast.success("Mesaj furnizat cu succes! Te vom contacta în curând.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Web3Forms request failed");
      }
    } catch {
      toast.error("Trimiterea a eșuat. Te rugăm să încerci din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={THEME.section.container}>
      <div className={THEME.section.card}>
        {/* Full Screen Video Background with B&W Filter */}
        <div className="absolute inset-0 h-full w-full contrast-125 grayscale">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full scale-x-[-1] object-cover"
            src="/hero video.mp4"
          />
          {/* DARKER Overlay to ensure high contrast for white text */}
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />
        </div>

        {/* Cinematic Organic Noise: Fixed height prevents lag during animations */}
        <div className="pointer-events-none absolute top-0 left-0 z-0 h-375 w-full overflow-hidden text-white">
          <StudioAnimatedNoise opacity1={0.2} opacity2={0.15} />
        </div>

        <div className={THEME.layout.wrapper}>
          {/* ── Content Area ────────────────────────────────────────── */}
          <div className={THEME.layout.textColumn}>
            <div className={THEME.layout.title.wrapper}>
              <h2 className={THEME.layout.title.main}>Hai să discutăm.</h2>
              <p className={THEME.layout.title.sub}>
                Spune-ne despre proiectul tău — fie că este vorba de un site nou, strategie SEO sau marketing digital.
              </p>
            </div>

            <div className="h-px w-full bg-white opacity-20" />

            <div className={THEME.layout.approach.wrapper}>
              <div className={THEME.layout.approach.item}>
                <span
                  className={cn(
                    THEME.layout.approach.label,
                    "inline-flex items-center gap-2",
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      fill="none"
                      d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 0H8.5M12 7v5"
                    />
                  </svg>
                  Răspuns rapid
                </span>
                <p className={THEME.layout.approach.value}>
                  Dacă ești gata să evoluezi, suntem aici să te ascultăm. Primești un răspuns documentat în maxim 24h lucrătoare.
                </p>
              </div>
              <div className={THEME.layout.approach.item}>
                <span
                  className={cn(
                    THEME.layout.approach.label,
                    "inline-flex items-center gap-2",
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7.5 4.21v.01M4.21 7.5v.01M3 12v.01m1.21 4.49v.01m3.29 3.28v.01M12 21v.01m4.5-1.22v.01m3.29-3.3v.01M21 12v.01M19.79 7.5v.01m-3.29-3.3v.01M12 3v.01" />
                  </svg>
                  Pași clari de urmat
                </span>
                <p className={THEME.layout.approach.value}>
                  După prima consultanță, vei primi un plan de acțiune detaliat și un calendar exact de livrare pentru proiectul tău.
                </p>
              </div>
            </div>
          </div>

          {/* ── Form Area ───────────────────────────────────────────── */}
          <div className={THEME.form.wrapper}>
            <div className={THEME.form.container}>
              <div className={THEME.form.header}>
                <div className="flex items-baseline gap-0">
                  <span className="font-clash text-2xl font-medium tracking-tight text-white">
                    unbren
                  </span>
                  <span className="text-2xl font-bold text-(--color-studio-accent)">
                    .
                  </span>
                </div>
                <h3 className={THEME.form.headline}>Ai un proiect în minte?</h3>
              </div>

              <form onSubmit={handleSubmit} className={THEME.form.inputGroup}>
                <div className={THEME.form.field}>
                  <label htmlFor="cta-name" className={THEME.form.label}>
                    Nume complet*
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Cum te numiți?"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={THEME.form.input}
                  />
                </div>

                <div className={THEME.form.field}>
                  <label htmlFor="cta-email" className={THEME.form.label}>
                    Adresă email*
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="email@exemplu.ro"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={THEME.form.input}
                  />
                </div>

                <div className={THEME.form.field}>
                  <label htmlFor="cta-message" className={THEME.form.label}>
                    Detalii proiect*
                  </label>
                  <textarea
                    id="cta-message"
                    name="message"
                    ref={textareaRef}
                    autoComplete="off"
                    placeholder="Spune-ne câteva detalii despre viziunea ta..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={THEME.form.textarea}
                  />
                  <span
                    className={cn(
                      THEME.form.counter,
                      formData.message.length > 0 &&
                        formData.message.length < 10
                        ? "text-red-500"
                        : "text-white/30",
                    )}
                  >
                    {formData.message.length}/500
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {/* Encapsulate button in dark theme to keep it white with black text */}
                  <div className="studio-theme" data-theme="dark">
                    <StudioButton
                      type="submit"
                      isLoading={isSubmitting}
                      loadingText="Se trimite..."
                      className="w-full"
                    >
                      Trimite mesajul
                    </StudioButton>
                  </div>
                  <p className={THEME.form.legal}>
                    Prin trimiterea acestui formular, ești de acord cu{" "}
                    <Link
                      href="#"
                      className="inline-flex min-h-6 items-center font-semibold text-white/60 underline decoration-white/40 decoration-1 underline-offset-2 hover:text-white"
                    >
                      Termenii și Condițiile
                    </Link>{" "}
                    noastre și{" "}
                    <Link
                      href="#"
                      className="inline-flex min-h-6 items-center font-semibold text-white/60 underline decoration-white/40 decoration-1 underline-offset-2 hover:text-white"
                    >
                      Politica de Confidențialitate
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
