export function MetricPanel({
  label,
  value,
  delta,
  deltaLabel,
  trend = "up",
}: {
  label: string;
  value: string;
  delta?: string;
  deltaLabel?: string;
  trend?: "up" | "down" | "flat";
}) {
  const trendColor =
    trend === "up" ? "text-signal-up" : trend === "down" ? "text-signal-down" : "text-ink-faint";

  return (
    <div className="rounded-card border border-canvas-border bg-canvas-panel p-5 shadow-panel">
      <div className="eyebrow mb-3">{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-ink tabular-nums">{value}</span>
        {delta && (
          <span className={`text-xs font-medium tabular-nums ${trendColor}`}>
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "—"} {delta}
          </span>
        )}
      </div>
      {deltaLabel && <div className="mt-1 text-xs text-ink-faint">{deltaLabel}</div>}
    </div>
  );
}
