export function PhaseTimeline({
  phases,
}: {
  phases: { number: string; period: string; title: string; items: string[] }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {phases.map((p) => (
        <div
          key={p.number}
          className="rounded-card border border-canvas-border bg-canvas-panel p-6"
        >
          <div className="label mb-3">
            Phase {p.number} · {p.period}
          </div>
          <h4 className="mb-4 text-lg font-bold tracking-[-0.01em] text-ink">
            {p.title}
          </h4>
          <ul className="space-y-2 text-sm leading-relaxed text-ink-soft">
            {p.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-accent">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
