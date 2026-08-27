/**
 * The one-pager indexes each section as `01 · VISION` — a zero-padded number,
 * a middot spacer, then the name, all in tracked accent caps. The middot is
 * given real space on either side rather than being set tight; that breathing
 * room is part of the mark.
 */
export function SectionLabel({
  index,
  children,
}: {
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-3 label">
      {index && (
        <>
          <span>{index}</span>
          <span aria-hidden="true" className="text-accent/50">
            ·
          </span>
        </>
      )}
      <span>{children}</span>
    </div>
  );
}
