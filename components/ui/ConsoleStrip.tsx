export function ConsoleStrip({
  status,
  region,
  uptime,
  timestamp,
}: {
  status: string;
  region: string;
  uptime: string;
  timestamp: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-canvas-border bg-canvas-raised px-6 py-3 text-xs">
      <span className="flex items-center gap-2 text-signal-up">
        <span className="h-1.5 w-1.5 rounded-full bg-signal-up animate-pulse-slow" />
        <span className="eyebrow !text-signal-up">{status}</span>
      </span>
      <span className="text-ink-muted">
        REGION <span className="text-ink">{region}</span>
      </span>
      <span className="text-ink-muted">
        UPTIME <span className="text-ink">{uptime}</span>
      </span>
      <span className="ml-auto font-mono text-ink-faint">{timestamp}</span>
    </div>
  );
}
