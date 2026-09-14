import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Headline } from "@/components/ui/Headline";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { Badge } from "@/components/ui/Badge";
import { Wordmark } from "@/components/ui/Wordmark";

// -------------------------------------------------------------------------
// Small local section primitives (kept in-file so this page drops in clean)
// -------------------------------------------------------------------------

function Section({
  id,
  index,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  index?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-canvas-border ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {eyebrow && (
          <div className="mb-8">
            <SectionLabel index={index}>{eyebrow}</SectionLabel>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/**
 * Grouped rows inside a single hairline panel, following the risks-and-controls
 * block in the one-pager: bold white term on the left, supporting copy on the
 * right, rows divided rather than boxed separately.
 */
function AudienceRow({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="grid gap-2 border-b border-canvas-divider p-6 last:border-0 md:grid-cols-[15rem_1fr] md:gap-8 md:p-7">
      <h3 className="text-base font-bold tracking-[-0.01em] text-ink">
        {title}
      </h3>
      <p className="max-w-measure text-sm leading-relaxed text-ink-soft">
        {copy}
      </p>
    </div>
  );
}

function ChannelCard({
  label,
  badge,
  badgeTone,
  title,
  children,
}: {
  label: string;
  badge: string;
  badgeTone: "confirmed" | "warn";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-card border border-canvas-border bg-canvas-panel p-6 md:p-7">
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-canvas-divider pb-4">
        <span className="label-dim">{label}</span>
        <Badge tone={badgeTone}>{badge}</Badge>
      </div>
      <h3 className="mb-3 text-lg font-bold tracking-[-0.01em] text-ink">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-ink-soft">{children}</p>
    </div>
  );
}

// -------------------------------------------------------------------------
// Page
// -------------------------------------------------------------------------

// Investor contact routes to a single inbox for now.
const INVEST_EMAIL = "invest@northecho.com";
// Customer-facing product site and inboxes.
const CLOUD_SITE = "https://northecho.ai";
const COLOCATION_EMAIL = "colocation@northecho.com";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* ---------------------------------------------------------------- */}
      {/* Top bar                                                          */}
      {/* ---------------------------------------------------------------- */}
      <header className="border-b border-canvas-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Wordmark />
          <nav className="hidden items-center gap-10 text-label font-bold uppercase text-ink-faint md:flex">
            <a href="#strategy" className="transition-colors hover:text-accent">
              Strategy
            </a>
            <a href="#enterprise" className="transition-colors hover:text-accent">
              Enterprise
            </a>
          </nav>
          <Button
            variant="secondary"
            href={CLOUD_SITE}
            className="hidden md:inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access the fleet
          </Button>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        {/* Echoes the blue rim-light on the hardware photography in the print
            materials, in place of any applied pattern or texture. */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55rem_30rem_at_88%_-15%,rgba(108,171,224,0.14),transparent_62%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Eyebrow>Private Asset Manager · AI Compute Infrastructure</Eyebrow>
          <div className="mt-7 max-w-3xl">
            <Headline
              pre={
                <>
                  Own the compute
                  <br />
                </>
              }
              emphasis="the AI economy runs on."
            />
          </div>
          <p className="mt-8 max-w-measure text-base leading-relaxed text-ink-soft">
            North Echo manages AI compute infrastructure for institutional
            investors. Limited partners directly own GPU fleets; we source,
            underwrite, acquire, and operate the hardware.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CopyEmailButton variant="primary" email={INVEST_EMAIL}>
              Partner with us
            </CopyEmailButton>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Who we raise from                                                */}
      {/* ---------------------------------------------------------------- */}
      <Section id="investors" index="01" eyebrow="Partnership Structure">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-ink">
            Long-term private capital, not the public markets.
          </h2>
          <p className="mt-5 max-w-measure text-base leading-relaxed text-ink-soft">
            North Echo is GP. Limited partners hold direct fractional ownership
            of physical compute — not cloud equity or synthetic exposure. Reg D
            vehicles for accredited investors: quarterly distributions from
            contracted revenue and pass-through depreciation where applicable.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-card border border-canvas-border bg-canvas-panel">
          <AudienceRow
            title="Institutional investors"
            copy="Direct real-asset exposure with contracted revenue, hard-asset backing, and institutional-grade reporting."
          />
          <AudienceRow
            title="Family offices"
            copy="Co-ownership of revenue-generating hardware with GP alignment, underwriting discipline, and a defined exit."
          />
          <AudienceRow
            title="Wealth advisers & RIAs"
            copy="Hard-asset alternative with quarterly distributions, defined hold period, and pass-through depreciation."
          />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Strategy shift                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section
        id="strategy"
        index="02"
        eyebrow="Strategy"
        className="bg-canvas-raised"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-ink">
              Two channels for the same owned fleet:{" "}
              <span className="text-accent">capacity and direct.</span>
            </h2>
            <p className="mt-5 max-w-measure text-base leading-relaxed text-ink-soft">
              We lease owned GPU capacity to inference platforms and provision
              compute directly through our GPU cloud. Both channels monetize the
              same owned hardware — utilization is not tied to one buyer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                variant="primary"
                href={CLOUD_SITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <ChannelCard
              label="Channel 01 · Capacity"
              badge="Active"
              badgeTone="confirmed"
              title="Capacity compute"
            >
              Lease partner-owned fleets to established inference platforms.
              Revenue hardware from day one.
            </ChannelCard>

            <ChannelCard
              label="Channel 02 · Direct"
              badge="Coming Soon"
              badgeTone="warn"
              title="Direct: dedicated production GPU cloud"
            >
              Dedicated production GPU cloud for scaled AI companies. Owned
              bare-metal capacity with no hyperscaler dependency.
            </ChannelCard>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Enterprise co-location                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section id="enterprise" index="03" eyebrow="Enterprise Co-Location">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-ink">
              We put compute where the data already lives.
            </h2>
            <p className="mt-5 max-w-measure text-base leading-relaxed text-ink-soft">
              For enterprises with proprietary data and inference demand, we
              co-locate GPU capacity on-site — low latency, data stays in
              place, dedicated capacity without capex.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                variant="primary"
                href={CLOUD_SITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </Button>
              <CopyEmailButton variant="secondary" email={COLOCATION_EMAIL}>
                Talk to us about co-location
              </CopyEmailButton>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card eyebrow="Value 01" title="Data locality">
              Compute beside the data. No egress or internet round-trips.
            </Card>
            <Card eyebrow="Value 02" title="Dedicated capacity">
              Reserved fleets under take-or-pay. Predictable cost and
              performance.
            </Card>
            <Card eyebrow="Value 03" title="No capex burden">
              Tenants consume capacity; limited partners own and depreciate the
              hardware.
            </Card>
            <Card eyebrow="Value 04" title="Sovereign control">
              Owned or contracted by the vehicle. No hyperscaler dependency.
            </Card>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Closing CTA                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-canvas-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          {/* The next-step band from the one-pager: one hairline panel
              carrying the label, the ask, and the actions. */}
          <div className="rounded-band border border-canvas-border bg-canvas-panel px-6 py-12 text-center md:px-12 md:py-14">
            <Eyebrow>Next Step</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-ink md:text-4xl">
              Own the compute the AI economy runs on.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <CopyEmailButton variant="primary" email={INVEST_EMAIL}>
                Partner with us
              </CopyEmailButton>
              <CopyEmailButton variant="secondary" email={INVEST_EMAIL}>
                Meet the team
              </CopyEmailButton>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Footer                                                           */}
      {/* ---------------------------------------------------------------- */}
      <footer className="border-t border-canvas-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:gap-12">
          <span className="label-dim shrink-0">
            North Echo · Confidential
          </span>
          <span className="label-legal max-w-2xl leading-relaxed">
            Reg D private placement. Accredited investors only. This site is not
            an offer to sell securities.
          </span>
        </div>
      </footer>
    </main>
  );
}
