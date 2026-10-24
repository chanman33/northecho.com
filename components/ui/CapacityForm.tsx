"use client";

import { useEffect, useState } from "react";
import { buttonBase, buttonVariants } from "@/components/ui/Button";
import { PLATFORM_EVENT, fleets, quantityLabel } from "@/components/ui/fleets";

const TO = "compute@northecho.com";

export function CapacityForm() {
  const [ready, setReady] = useState(false);
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    function onPlatform(event: Event) {
      const detail = (event as CustomEvent<string>).detail;
      if (detail) setPlatform(detail);
    }
    window.addEventListener(PLATFORM_EVENT, onPlatform);
    return () => window.removeEventListener(PLATFORM_EVENT, onPlatform);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const quantity = String(data.get("quantity") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();
    const selected = String(data.get("platform") ?? "").trim();

    const body = [
      `Platform: ${selected}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `${quantityLabel(selected)}: ${quantity}`,
      `Other details and requirements: ${details}`,
    ].join("\n");

    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(`Capacity request — ${selected}`)}&body=${encodeURIComponent(body)}`;
    setReady(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="label-dim mb-2 block">Platform</span>
          <select
            required
            id="capacity-platform"
            name="platform"
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
            className={`w-full rounded-md border border-canvas-border bg-canvas px-3 py-2.5 text-sm outline-none focus:border-accent/60 ${
              platform ? "text-ink" : "text-ink-faint"
            }`}
          >
            <option value="" disabled>
              Select a platform
            </option>
            {fleets.map((fleet) => (
              <option key={fleet.id} value={fleet.name}>
                {fleet.name}
              </option>
            ))}
          </select>
        </label>
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
          <span className="label-dim mb-2 block">{quantityLabel(platform)}</span>
          <input
            required
            type="number"
            min={1}
            name="quantity"
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
