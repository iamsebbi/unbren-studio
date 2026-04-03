import React from "react";
import StudioAnimatedNoise from "@/app/_shared/StudioAnimatedNoise";
import StudioButton from "@/app/_shared/StudioButton";
import StudioMarquee from "@/app/_shared/StudioMarquee";

const SERVICES = [
  { id: 1, label: "Branding and Identity", image: "/branding-identity.png" },
  { id: 2, label: "Social Media Marketing", image: "/gradient1.jpg" },
  { id: 3, label: "Web Design and Development", image: "/gradient.jpg" },
  { id: 4, label: "SEO Optimization", image: "/gradient1.jpg" },
  { id: 5, label: "UI/UX Strategy", image: "/gradient.jpg" },
  { id: 6, label: "Content Engineering", image: "/gradient1.jpg" },
  { id: 7, label: "Digital Growth Strategy", image: "/gradient.jpg" },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 
        FORCE DARK THEME FOR HERO: 
        Regardless of the global theme, the Hero section must remain in 
        its cinematic dark state for optimal readability over the video.
      */}
      <div className="studio-theme h-full w-full" data-theme="dark">
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
          {/* Subtle Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Animated Noise Layer */}
        <StudioAnimatedNoise opacity1={0.15} opacity2={0.08} className="z-10" />

        {/* Content Overlay Container */}
        <div className="relative z-20 flex h-full w-full flex-col justify-between p-8 pt-24 md:p-12 md:pt-32 lg:p-16 lg:pt-36">
          {/* TOP: Branding */}
          <div className="flex flex-none flex-col items-start pt-4">
            <h1 className="font-clash text-left text-[clamp(65px,16vw,280px)] leading-[0.8] font-medium tracking-[-0.04em] text-(--color-studio-text)">
              Unbren.
              <span className="relative top-[-0.2em] inline font-sans text-[0.8em] leading-none select-none">
                &reg;
              </span>
            </h1>
            <p className="-mt-4 font-sans text-[11vw] tracking-tighter text-(--color-studio-text) lowercase md:-mt-8 md:text-[50px] lg:-mt-12 lg:text-[70px] xl:-mt-16 xl:text-[90px]">
              studio
            </p>
          </div>

          {/* BOTTOM SECTION: Info & Marquee Grid */}
          <div className="flex w-full flex-col justify-end gap-10 pb-12 md:flex-row md:items-end md:justify-between md:gap-16 md:pb-24 lg:pb-32">
            {/* Left Block: Info & CTAs */}
            <div className="flex flex-none flex-col items-start gap-8 md:max-w-md lg:max-w-lg xl:max-w-xl">
              <p className="max-w-sm font-sans text-xl leading-snug font-medium text-(--color-studio-text) md:max-w-full md:text-2xl lg:text-3xl">
                La Unbren Studio, transformăm idei în experiențe digitale
                premium — cu accent pe performanță, minimalism și inovație.
              </p>

              {/* Action Buttons */}
              <div className="flex w-full flex-row gap-3 md:w-auto">
                <StudioButton
                  href="#projects"
                  className="mt-0 flex-1 border-(--color-studio-text) bg-transparent text-(--color-studio-text) hover:bg-(--color-studio-text)/10 md:w-auto md:flex-none lg:min-w-44"
                  arrowClassName="!stroke-(--color-studio-text)"
                >
                  Proiecte
                </StudioButton>
                <StudioButton
                  href="#contact"
                  className="mt-0 flex-1 md:w-auto md:flex-none lg:min-w-44"
                >
                  Contact
                </StudioButton>
              </div>
            </div>

            {/* Right Block: Marquee */}
            <div className="w-full flex-1 overflow-hidden">
              <StudioMarquee
                items={SERVICES}
                speed="slow"
                className="opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
