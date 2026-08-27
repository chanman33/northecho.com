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
    <div className="rounded-card border border-canvas-border bg-canvas-panel p-6">
      {eyebrow && <div className="label-dim mb-3">{eyebrow}</div>}
      {title && (
        <h3 className="mb-2 text-lg font-bold tracking-[-0.01em] text-ink">
          {title}
        </h3>
      )}
      <div className="text-sm leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}
