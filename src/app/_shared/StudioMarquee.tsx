import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeItem {
  id: string | number;
  label?: string;
  image?: string;
}

interface StudioMarqueeProps {
  items: MarqueeItem[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}

export default function StudioMarquee({
  items,
  className,
  speed = "normal",
  pauseOnHover = true,
}: StudioMarqueeProps) {
  const durationMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  const duration = durationMap[speed];

  // Doubling items for seamless looping
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max animate-[marquee-horizontal_infinite_linear] gap-4",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{ animationDuration: duration }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="group relative flex min-h-32 min-w-56 flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 md:min-h-48 md:min-w-100 md:rounded-3xl"
          >

            {item.image ? (
              <Image
                src={item.image}
                alt={item.label || "Studio Service"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="relative z-10 p-6 md:p-10">
                <span className="font-sans text-sm font-medium tracking-tight text-white/90 md:text-2xl">
                  {item.label}
                </span>
                <div className="mt-3 h-0.5 w-12 rounded-full bg-white/30 md:mt-4 md:h-1 md:w-20" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
