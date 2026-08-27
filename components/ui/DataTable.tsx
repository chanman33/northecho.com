export function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="overflow-hidden rounded-card border border-canvas-border bg-canvas-panel">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-canvas-border">
            {columns.map((c) => (
              <th key={c} className="label-dim px-5 py-4 text-left">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-canvas-divider last:border-0">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-5 py-4 tabular-nums text-ink-muted first:font-bold first:text-ink"
                >
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
