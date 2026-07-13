"use client";

import { useEffect, useRef, useState } from "react";
import { buttonBase, buttonVariants, type Variant } from "@/components/ui/Button";

type CopyEmailButtonProps = {
  email: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

// Skips the mailto: handoff to a native mail client — copies the address to
// the clipboard instead and confirms it in a tooltip, since most visitors
// read mail in the browser rather than a desktop app.
export function CopyEmailButton({
  email,
  variant = "primary",
  className = "",
  children,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative ${buttonBase} ${buttonVariants[variant]} ${className}`}
      aria-label={`Copy email address ${email}`}
    >
      {children}
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-canvas-border bg-canvas-raised px-3 py-1.5 text-xs font-medium text-ink shadow-lg transition-all duration-150 ${
          copied ? "opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        {copied ? `Copied · ${email}` : email}
      </span>
    </button>
  );
}
