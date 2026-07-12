export function PhaseTimeline({
  phases,
}: {
  phases: { number: string; period: string; title: string; items: string[] }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {phases.map((p) => (
        <div key={p.number} className="rounded-card border border-canvas-border bg-canvas-panel p-5">
          <div className="eyebrow mb-1">
            Phase {p.number} · {p.period}
          </div>
          <h4 className="mb-3 text-xl font-bold text-ink">{p.title}</h4>
          <ul className="space-y-1.5 text-sm text-ink-muted">
            {p.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent-bright">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
