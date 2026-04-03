import { ReactNode } from "react";
import {
  CheckCircle2,
  CircleGauge,
  Handshake,
  Headset,
  MessageSquareText,
  Rocket,
  Sparkles,
  Quote,
} from "lucide-react";
import Image from "next/image";
import StudioButton from "@/app/_shared/StudioButton";
import StudioAnimatedNoise from "@/app/_shared/StudioAnimatedNoise";

const BENEFITS = [
  { label: "Abordare Colaborativă", icon: Handshake },
  { label: "Livrare Rapidă", icon: Rocket },
  { label: "Comunicare Transparentă", icon: MessageSquareText },
  { label: "Calitate Constantă", icon: CheckCircle2 },
] as const;

const FEATURES = [
  {
    title: "Proces Simplificat",
    description:
      "De la concept la lansare, fiecare pas rămâne structurat și ușor de urmărit.",
    icon: Sparkles,
  },
  {
    title: "Design Scalabil",
    description:
      "Sisteme flexibile care cresc odată cu produsul, campaniile și echipa ta.",
    icon: CircleGauge,
  },
  {
    title: "Suport Dedicat Prioritar",
    description:
      "Răspunsuri rapide și grijă proactivă ori de câte ori brandul tău are nevoie.",
    icon: Headset,
  },
] as const;

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  withNoise?: boolean;
  ghost?: boolean;
}

// Base Shell Component
const BentoCard = ({
  children,
  className = "",
  innerClassName = "",
  withNoise = true,
  ghost = false,
}: BentoCardProps) => (
  <article
    className={`relative overflow-hidden rounded-xl ${
      ghost
        ? ""
        : "border border-(--color-studio-border) bg-(--color-studio-surface)"
    } ${className}`}
  >
    {withNoise && (
      <>
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-(--color-studio-bg)" />
        <StudioAnimatedNoise opacity1={0.15} opacity2={0.1} />
      </>
    )}
    <div className={`relative z-10 h-full ${innerClassName}`}>{children}</div>
  </article>
);

// --- Card 1: Benefits ---
const CARD1_STYLES = {
  wrapper: "h-[489px]",
  inner: "grid h-full gap-2 p-2 grid-rows-[6fr_4fr]",
  imageSection:
    "relative overflow-hidden rounded-xl border border-(--color-studio-border) bg-(--color-studio-surface) p-5 md:p-6",
  benefitsSection:
    "relative overflow-hidden rounded-xl border border-(--color-studio-border) bg-(--color-studio-bg) pl-3 pr-5 py-4 md:pl-4 md:pr-6",
  benefitItem:
    "flex w-full items-center justify-start gap-1 text-left text-base font-semibold leading-snug wrap-break-word text-(--color-studio-text)",
  badgeIcon: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
};

const BenefitCard = () => (
  <BentoCard
    className={CARD1_STYLES.wrapper}
    innerClassName={CARD1_STYLES.inner}
    withNoise={false}
  >
    <div className={CARD1_STYLES.imageSection}>
      <Image
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        alt="Modern buildings background"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 25vw"
      />
      <div className="absolute inset-0 bg-(--color-studio-surface)/40" />
      <StudioAnimatedNoise opacity1={0.15} opacity2={0.1} />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <p className="max-w-[20ch] text-[clamp(1.5rem,2.2vw,1.875rem)] leading-tight font-semibold wrap-break-word text-(--color-studio-text)">
          Design cu scop pentru branduri moderne
        </p>

        <div className="flex justify-end">
          <StudioButton className="mt-0! w-auto! px-8! py-2.5! text-base!">
            Începe acum
          </StudioButton>
        </div>
      </div>
    </div>

    <div className={CARD1_STYLES.benefitsSection}>
      <ul
        className="flex h-full flex-col items-start justify-center gap-1.5"
        aria-label="Service benefits"
      >
        {BENEFITS.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className={CARD1_STYLES.benefitItem}>
              <span className={CARD1_STYLES.badgeIcon}>
                <Icon size={15} />
              </span>
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  </BentoCard>
);

// --- Card 2: Testimonial ---
const CARD2_STYLES = {
  wrapper: "h-[489px]",
  inner: "flex h-full flex-col justify-between p-2",
  header: "flex items-start justify-between gap-3 p-2",
  badgeText:
    "flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold",
  testimonial:
    "rounded-xl border border-(--color-studio-border) bg-(--color-studio-bg) p-4",
};

const TestimonialCard = () => (
  <BentoCard
    className={CARD2_STYLES.wrapper}
    innerClassName={CARD2_STYLES.inner}
    withNoise={false}
  >
    <div className={CARD2_STYLES.header}>
      <div className="flex flex-col gap-2">
        <div className="flex -space-x-3">
          {["AL", "KM", "NP", "JR"].map((name) => (
            <span
              key={name}
              className={`${CARD2_STYLES.badgeText} border-2 border-(--color-studio-surface) bg-(--color-studio-text) text-sm text-(--color-studio-bg)`}
            >
              {name}
            </span>
          ))}
        </div>
        <p className="text-[clamp(1.25rem,1.8vw,1.5rem)] leading-tight font-bold wrap-break-word text-(--color-studio-muted)">
          Peste 100 de clienți mulțumiți
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-(--color-studio-border) bg-(--color-studio-bg) px-3 py-1.5 text-base font-bold whitespace-nowrap text-(--color-studio-text)">
        <span>4.9/5</span>
        <span className="text-white/60">★</span>
      </div>
    </div>

    <div className="p-0">
      <blockquote className={CARD2_STYLES.testimonial}>
        <div className="mb-3 flex items-center gap-2 text-(--color-studio-text)">
          <Quote size={16} />
          <p className="text-base font-semibold">Testimonial Client</p>
        </div>

        <p className="mb-4 text-sm leading-relaxed wrap-break-word text-(--color-studio-muted) md:text-base">
          „Colaborarea cu Unbren s-a simțit naturală. Au tradus viziunea noastră
          într-o identitate digitală atemporală, cu claritate și precizie.”
        </p>

        <footer className="flex items-center gap-3">
          <span
            className={`${CARD2_STYLES.badgeText} bg-(--color-studio-text) text-(--color-studio-bg)`}
          >
            SF
          </span>
          <div>
            <p className="text-base font-semibold text-(--color-studio-text)">
              Sofia Ford
            </p>
            <p className="text-base text-(--color-studio-muted)">Founder</p>
          </div>
        </footer>
      </blockquote>
    </div>
  </BentoCard>
);

// --- Card 3: Process ---
const CARD3_STYLES = {
  wrapper: "h-[489px]",
  inner: "grid h-full gap-2 p-2 grid-rows-3",
  featureItem:
    "flex flex-col p-4 md:p-5 overflow-hidden rounded-xl border border-(--color-studio-border) bg-(--color-studio-bg)",
  icon: "flex h-10 w-10 items-center justify-left text-(--color-studio-text)",
};

const ProcessCard = () => (
  <BentoCard
    className={CARD3_STYLES.wrapper}
    innerClassName={CARD3_STYLES.inner}
    withNoise={false}
  >
    {FEATURES.map((feature) => {
      const Icon = feature.icon;
      return (
        <section key={feature.title} className={CARD3_STYLES.featureItem}>
          <span className={CARD3_STYLES.icon}>
            <Icon size={18} />
          </span>
          <h3 className="mb-2 text-xl leading-tight font-bold tracking-tight wrap-break-word text-(--color-studio-text) lg:text-lg">
            {feature.title}
          </h3>
          <p className="text-sm leading-relaxed wrap-break-word text-(--color-studio-muted) md:text-base lg:text-sm">
            {feature.description}
          </p>
        </section>
      );
    })}
  </BentoCard>
);

// --- Card 4: Brand Identity ---
const CARD4_STYLES = {
  wrapper: "h-[489px]",
  content: "flex h-full flex-col justify-between px-5 py-6",
};

const BrandIdentityCard = () => (
  <BentoCard className={CARD4_STYLES.wrapper} withNoise={true}>
    <Image
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      alt="Blurred branding background"
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 25vw"
    />
    <div className="absolute inset-0 bg-(--color-studio-surface)/35" />
    <StudioAnimatedNoise opacity1={0.15} opacity2={0.1} />

    <div
      className={`${CARD4_STYLES.content} relative z-10 text-(--color-studio-bg)`}
    >
      <div className="flex items-start">
        <span className="font-studio text-4xl font-medium tracking-tight text-(--color-studio-text)">
          ©{new Date().getFullYear()}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <Image
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          alt="UNBREN. STUDIO logo"
          width={144}
          height={48}
          className="h-auto w-40 logo-theme md:w-48"
        />
      </div>

      <div className="flex flex-col gap-1 text-left">
        <h3 className="text-[clamp(1.25rem,1.8vw,1.5rem)] leading-tight font-bold text-(--color-studio-text)">
          Design cu intenție.
        </h3>
        <p className="text-base leading-relaxed font-medium text-(--color-studio-text)/80">
          Fără excese, fără compromisuri.
        </p>
      </div>
    </div>
  </BentoCard>
);

// --- Main component ---
export default function StudioWhyUsBentoSection() {
  return (
    <section
      className="bg-(--color-studio-bg) px-2 py-12 md:px-8 md:py-16"
      aria-labelledby="why-us-title"
    >
      <div className="mx-auto w-full max-w-440">
        <header className="mb-6 md:mb-8">
          <div className="mb-5 flex items-center justify-between text-sm font-semibold tracking-tight text-(--color-studio-muted)">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                className="fill-current"
                aria-hidden="true"
              >
                <path d="M4.929 4.929A10 10 0 1 1 19.07 19.07A10 10 0 0 1 4.93 4.93m8.071 4.071a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" />
              </svg>
              <p>DE CE NOI</p>
            </div>
          </div>

          <h2
            id="why-us-title"
            className="font-studio max-w-5xl px-2 text-[clamp(3rem,6vw,5.25rem)] leading-[0.95] font-semibold tracking-tight text-(--color-studio-text)"
          >
            De ce să ne alegi pe noi
          </h2>

          <p className="mt-3 max-w-4xl px-2 text-lg leading-snug font-medium text-(--color-studio-muted) md:text-lg">
            Eliminăm zgomotul vizual pentru a crea designuri gândite, atemporale
            și de{" "}
            <span className="text-(--color-studio-text)">impact.</span>
          </p>
        </header>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-2">
          <BenefitCard />
          <TestimonialCard />
          <ProcessCard />
          <BrandIdentityCard />
        </div>
      </div>
    </section>
  );
}
