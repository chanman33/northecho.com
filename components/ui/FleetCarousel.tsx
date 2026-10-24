"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { PLATFORM_EVENT, fleets } from "@/components/ui/fleets";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function FleetCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    const root = scroller.current;
    if (!root) return;
    const count = fleets.length;
    const i = (next + count) % count;
    const slide = root.children[i] as HTMLElement | undefined;
    if (!slide) return;
    root.scrollTo({
      left: slide.offsetLeft - root.offsetLeft,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
    setIndex(i);
  }, []);

  useEffect(() => {
    const root = scroller.current;
    if (!root) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const left = root.scrollLeft;
        let nearest = 0;
        let best = Number.POSITIVE_INFINITY;
        Array.from(root.children).forEach((child, i) => {
          const distance = Math.abs((child as HTMLElement).offsetLeft - root.offsetLeft - left);
          if (distance < best) {
            best = distance;
            nearest = i;
          }
        });
        setIndex(nearest);
      });
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("scroll", onScroll);
    };
  }, []);

  function requestCapacity(name: string) {
    window.dispatchEvent(new CustomEvent(PLATFORM_EVENT, { detail: name }));
    document.getElementById("capacity")?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
    document.getElementById("capacity-platform")?.focus({ preventScroll: true });
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
  }

  return (
    <div
      className="mt-12"
      role="region"
      aria-roledescription="carousel"
      aria-label="NVIDIA fleets"
      onKeyDown={onKeyDown}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          {fleets.map((fleet, i) => (
            <button
              key={fleet.id}
              type="button"
              aria-current={i === index ? "true" : undefined}
              onClick={() => go(i)}
              className={`text-label font-bold uppercase transition-colors ${
                i === index ? "text-accent" : "text-ink-faint hover:text-ink"
              }`}
            >
              {fleet.short}
            </button>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Previous fleet"
            onClick={() => go(index - 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-canvas-border bg-canvas-panel text-ink transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next fleet"
            onClick={() => go(index + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-canvas-border bg-canvas-panel text-ink transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {fleets[index].name}, {index + 1} of {fleets.length}
      </p>

      <div
        ref={scroller}
        className="flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {fleets.map((fleet, i) => (
          <article
            key={fleet.id}
            className="w-full shrink-0 snap-start"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${fleets.length}`}
          >
            <div className="flex flex-col gap-5 rounded-card border border-canvas-border bg-canvas-panel p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:px-6">
              <div className="min-w-0">
                <div className="label-dim">{fleet.kicker}</div>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-ink">
                  {fleet.name}
                </h3>
                <p className="mt-2 text-sm font-bold tabular-nums text-ink">{fleet.detail}</p>
              </div>
              <Button
                type="button"
                className="shrink-0 self-start sm:self-center"
                onClick={() => requestCapacity(fleet.name)}
              >
                Request capacity
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <path
        d={direction === "left" ? "M10 3 L5 8 L10 13" : "M6 3 L11 8 L6 13"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
