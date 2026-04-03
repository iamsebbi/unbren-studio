"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface StudioAnimatedNoiseProps {
  className?: string;
  opacity1?: number; // 0-1
  opacity2?: number; // 0-1
}

export default function StudioAnimatedNoise({
  className,
  opacity1 = 0.15,
  opacity2 = 0.1,
}: StudioAnimatedNoiseProps) {
  const id = useId();
  const filterId1 = `noiseFilter1-${id}`;
  const filterId2 = `noiseFilter2-${id}`;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-1 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      {/* Layer 1: Fine-grained background noise */}
      <div
        className="noise-layer-1 absolute inset-[-15%] h-[130%] w-[130%] mix-blend-soft-light"
        style={{ opacity: opacity1 }}
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id={filterId1}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves={2}
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#${filterId1})`} />
        </svg>
      </div>

      {/* Layer 2: Coarser foreground "grain" */}
      <div
        className="noise-layer-2 absolute inset-[-15%] h-[130%] w-[130%] mix-blend-screen"
        style={{ opacity: opacity2 }}
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id={filterId2}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.55"
              numOctaves={1}
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#${filterId2})`} />
        </svg>
      </div>
    </div>
  );
}
