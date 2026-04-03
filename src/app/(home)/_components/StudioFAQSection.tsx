"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { STUDIO_FAQ } from "../data/faqData";

const THEME = {
  section: "py-24 md:py-32 px-2 md:px-12 bg-(--color-studio-bg)",
  container: "mx-auto max-w-440",
  header: {
    wrapper: "lg:col-span-12 flex flex-col justify-start mb-12",
    title:
      "text-[clamp(4rem,10vw,8rem)] font-studio font-semibold uppercase leading-[0.8] tracking-tighter text-(--color-studio-text)",
    subtitle:
      "text-lg md:text-xl text-(--color-studio-muted) max-w-3xl leading-snug tracking-tight mt-6 mb-8 lg:mb-0",
  },
  faq: {
    list: "lg:col-span-12 flex flex-col gap-2",
    card: "group rounded-xl bg-(--color-studio-surface) p-3 md:p-5 transition-all duration-300",
    question:
      "group flex w-full cursor-pointer select-none items-center justify-between text-left transition-all duration-300 active:scale-95",
    questionText:
      "text-md md:text-xl font-medium tracking-tight text-(--color-studio-text) pr-6",
    iconWrapper:
      "flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border border-(--color-studio-muted)/40 text-(--color-studio-text) transition-all duration-300 ease-in-out md:group-hover:scale-110",
    answerWrapper: "overflow-hidden",
    answerText:
      "pt-4 text-base md:text-md font-normal leading-tight text-(--color-studio-muted) tracking-tight max-w-4xl",
  },
} as const;

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className={THEME.faq.card}>
      <motion.button onClick={onToggle} className={THEME.faq.question}>
        <span className={THEME.faq.questionText}>{question}</span>
        <div
          className={cn(
            THEME.faq.iconWrapper,
            isOpen
              ? "border-(--color-studio-text) bg-(--color-studio-text) text-(--color-studio-bg)"
              : "bg-transparent",
          )}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={THEME.faq.answerWrapper}
          >
            <div className={THEME.faq.answerText}>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function StudioFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={THEME.section}>
      <div className={THEME.container}>
        <div className="flex flex-col">
          {/* Section Header */}
          <div className={THEME.header.wrapper}>
            <h2 className={THEME.header.title}>Întrebări Frecvente.</h2>
            <p className={THEME.header.subtitle}>
              Ai întrebări despre lansarea proiectului tău? Avem răspunsurile. Iată tot ce trebuie să știi despre cum lucrăm, facturare și cum te putem ajuta să crești rapid.
            </p>
          </div>

          {/* Accordion List */}
          <div className={THEME.faq.list}>
            {STUDIO_FAQ.map((item, index) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
