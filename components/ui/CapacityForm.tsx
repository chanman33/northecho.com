"use client";

import { useState } from "react";
import { buttonBase, buttonVariants } from "@/components/ui/Button";

const TO = "compute@northecho.com";

export function CapacityForm() {
  const [ready, setReady] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const nodes = String(data.get("nodes") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Nodes: ${nodes}`,
      `Other details and requirements: ${details}`,
    ].join("\n");

    window.location.href = `mailto:${TO}?subject=${encodeURIComponent("Capacity request")}&body=${encodeURIComponent(body)}`;
    setReady(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="label-dim mb-2 block">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="w-full rounded-md border border-canvas-border bg-canvas px-3 py-2.5 text-sm text-ink outline-none focus:border-accent/60"
          />
        </label>
        <label className="block">
          <span className="label-dim mb-2 block">Work email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="w-full rounded-md border border-canvas-border bg-canvas px-3 py-2.5 text-sm text-ink outline-none focus:border-accent/60"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="label-dim mb-2 block">Number of nodes</span>
          <input
            required
            type="number"
            min={1}
            name="nodes"
            inputMode="numeric"
            className="w-full rounded-md border border-canvas-border bg-canvas px-3 py-2.5 text-sm text-ink outline-none focus:border-accent/60"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="label-dim mb-2 block">Other details and requirements</span>
          <textarea
            name="details"
            rows={4}
            className="w-full resize-y rounded-md border border-canvas-border bg-canvas px-3 py-2.5 text-sm text-ink outline-none focus:border-accent/60"
          />
        </label>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button type="submit" className={`${buttonBase} ${buttonVariants.primary}`}>
          Request capacity
        </button>
        {ready && (
          <p className="text-sm text-ink-soft" role="status">
            Opening a message to {TO}
          </p>
        )}
      </div>
    </form>
  );
}
