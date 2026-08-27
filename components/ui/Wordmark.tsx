/**
 * The print lockup: a short accent rule, then the name in tracked white caps.
 * The rule is a solid bar rather than a hairline — it is the only heavy mark
 * in the header.
 */
export function Wordmark() {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-[3px] w-7 bg-accent" />
      <span className="text-sm font-bold uppercase tracking-[0.22em] text-ink">
        North Echo
      </span>
    </div>
  );
}
