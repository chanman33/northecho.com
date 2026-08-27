export function Eyebrow({
  children,
  tone = "accent",
}: {
  children: React.ReactNode;
  tone?: "accent" | "dim";
}) {
  return (
    <span className={tone === "dim" ? "label-dim" : "label"}>{children}</span>
  );
}
