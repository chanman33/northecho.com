import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-bright",
  secondary:
    "border border-canvas-border bg-canvas-raised text-ink hover:border-accent/50 hover:text-accent-bright",
  ghost: "text-ink-muted hover:text-ink",
};

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
