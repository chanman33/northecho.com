type BadgeTone = "neutral" | "warn" | "confirmed";

/**
 * The one-pager sets status chips — NO CONTROL, PARTIAL — as neutral grey
 * pills, deliberately avoiding traffic-light colour. Tones here differ only by
 * emphasis: `confirmed` is the live state and gets the accent hairline,
 * everything else stays grey.
 */
export function Badge({
  tone = "neutral",
  children,
}: {
  tone?: BadgeTone;
  children: React.ReactNode;
}) {
  const tones: Record<BadgeTone, string> = {
    neutral: "border-canvas-border text-ink-faint",
    warn: "border-canvas-border text-ink-faint",
    confirmed: "border-accent/35 text-accent",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-micro font-semibold uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
