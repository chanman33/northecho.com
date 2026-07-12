export function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="overflow-hidden rounded-card border border-canvas-border">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-canvas-border bg-canvas-raised">
            {columns.map((c) => (
              <th
                key={c}
                className="px-4 py-3 text-left text-eyebrow font-semibold uppercase tracking-widest2 text-ink-faint"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-canvas-border last:border-0 hover:bg-canvas-raised/50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 tabular-nums text-ink-muted first:text-ink first:font-medium">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
