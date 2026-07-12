export function Card({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-card border border-canvas-border bg-canvas-panel p-6">
      <div className="dot-grid-bg pointer-events-none absolute -right-6 -top-6 h-24 w-24 opacity-30 [mask-image:radial-gradient(circle,black,transparent)]" />
      {eyebrow && <div className="eyebrow mb-2">{eyebrow}</div>}
      {title && <h3 className="mb-3 text-lg font-semibold text-ink">{title}</h3>}
      <div className="text-sm text-ink-muted leading-relaxed">{children}</div>
    </div>
  );
}
