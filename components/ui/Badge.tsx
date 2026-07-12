type BadgeTone = "neutral" | "warn" | "confirmed";

export function Badge({ tone = "neutral", children }: { tone?: BadgeTone; children: React.ReactNode }) {
  const tones: Record<BadgeTone, string> = {
    neutral: "border-canvas-border text-ink-faint",
    warn: "border-signal-warn/40 text-signal-warn bg-signal-warn/10",
    confirmed: "border-signal-up/40 text-signal-up bg-signal-up/10",
  };
  return (
    <span className={`inline-block rounded border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest2 ${tones[tone]}`}>
      {children}
    </span>
  );
}
