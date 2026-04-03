"use client";

import { TextReveal } from "@/components/ui/studio/TextReveal";

const TextRevealSection = () => {
  return (
    <section id="studio" className="px-2 py-16 sm:py-24">
      <div className="mx-auto max-w-440">
        <TextReveal
          as="p"
          by="word"
          startOnView
          once
          animation="blurInUp"
          duration={3}
          delay={0.1}
          className="text-left font-sans text-[clamp(2.75rem,8vw,5rem)] leading-[1.1] font-bold tracking-tighter text-(--color-studio-text) md:leading-[1.1em]"
        >
          — Fără website-uri generice. Fără promisiuni goale de marketing. Doar
          instrumente și strategii care îți ajută afacerea să crească și brandul
          să strălucească.
        </TextReveal>
      </div>
    </section>
  );
};

export default TextRevealSection;
