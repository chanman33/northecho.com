import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type Variant = "primary" | "secondary" | "ghost";

// Restrained geometry to match the print work: small radius, hairline borders,
// no shadows or glows. The accent is used as a solid fill only for the single
// primary action in a view.
export const buttonBase =
  "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold tracking-[0.01em] transition-colors duration-150";

export const buttonVariants: Record<Variant, string> = {
  primary: "bg-accent text-canvas hover:bg-accent-deep",
  secondary:
    "border border-canvas-border bg-canvas-panel text-ink hover:border-accent/40 hover:text-accent",
  ghost: "text-ink-muted hover:text-ink",
};

const base = buttonBase;
const variants = buttonVariants;

type ButtonProps = { variant?: Variant } & (
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
);

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (typeof props.href === "string") {
    return <a className={cls} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={cls} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
