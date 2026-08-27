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

function RoleTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-canvas-border bg-canvas-panel px-4 py-2 text-xs font-semibold text-ink-muted">
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
      {label}
    </span>
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
            <a href="#datacenter" className="transition-colors hover:text-accent">
              Data Centers
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
          North Echo is an asset manager for AI compute infrastructure.
          Our investors and limited partners directly own GPU fleets through dedicated vehicles.
          We source, underwrite, acquire, and operate the hardware where the AI economy consumes it.
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
            North Echo serves as general partner and manager. Investors
            participate as limited partners with direct fractional ownership of
            physical compute — no cloud equity, no synthetic exposure. Vehicles
            are structured under Reg D for accredited and qualified
            participants, with quarterly distributions
            from contracted revenue, and pass-through depreciation where
            applicable.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-card border border-canvas-border bg-canvas-panel">
          <AudienceRow
            title="Institutional investors"
            copy="Allocators seeking direct real-asset exposure to AI infrastructure: contracted revenue, hard-asset backing, and governance, reporting, and administration built to institutional standard."
          />
          <AudienceRow
            title="Family offices"
            copy="Direct co-ownership of revenue-generating hardware, structured for principals who evaluate sponsors the way they evaluate real estate GPs: alignment, underwriting discipline, and a defined path to exit."
          />
          <AudienceRow
            title="Wealth advisers & RIAs"
            copy="Advisers allocating client capital into an alternative with hard-asset backing, quarterly distributions, a defined hold period, and pass-through depreciation for taxable investors."
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
              We lease owned GPU capacity to the leading inference platforms
              already serving production demand, and we provision compute
              directly to scaled AI companies through our own GPU cloud. Both
              channels put revenue against the same owned hardware, so
              utilization does not depend on any single buyer or operator.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <RoleTag label="Leading inference platforms" />
              <RoleTag label="Next-gen AI labs" />
              <RoleTag label="High-growth, VC-backed startups" />
            </div>
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
              Capital flows into revenue hardware, not platform R&D.
              Utilization from day one.
            </ChannelCard>

            <ChannelCard
              label="Channel 02 · Direct"
              badge="Coming Soon"
              badgeTone="warn"
              title="Direct: dedicated production GPU cloud"
            >
              Serve compute directly to scaled AI companies that contract
              dedicated capacity through our cloud service. An owned,
              bare-metal GPU cloud that monetizes the fleet with no
              hyperscaler dependency.
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
              For enterprises with proprietary data and real inference demand,
              we co-locate GPU capacity next to their systems. That eliminates
              round-trip latency, keeps sensitive data in place, and gives the
              enterprise dedicated capacity without building or owning the
              hardware themselves.
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
              Compute sits beside the data. No egress, no round-trip latency
              across the public internet.
            </Card>
            <Card eyebrow="Value 02" title="Dedicated capacity">
              Reserved fleets under a take-or-pay anchor arrangement. Predictable
              cost, predictable performance.
            </Card>
            <Card eyebrow="Value 03" title="No capex burden">
              The enterprise consumes capacity. North Echo&apos;s limited
              partners own and depreciate the hardware; North Echo manages the
              deployment end to end.
            </Card>
            <Card eyebrow="Value 04" title="Sovereign control">
              Every layer owned or contracted by the vehicle. No hyperscaler
              dependency for the tenant.
            </Card>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Data center development & operations                             */}
      {/* ---------------------------------------------------------------- */}
      <Section
        id="datacenter"
        index="04"
        eyebrow="Data Center Development & Operations"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-ink">
            We operate across the full stack:{" "}
            <span className="text-accent">co-investor and tenant.</span>
          </h2>
          <p className="mt-5 max-w-measure text-base leading-relaxed text-ink-soft">
            Owning the hardware pulls us toward the facility. We participate in
            data center development and operations directly, aligning capital,
            operations, and demand under one roof rather than renting from a
            counterparty at every layer.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-card border border-canvas-border bg-canvas-panel p-6 md:p-7">
            <span className="label-dim">Role 01</span>
            <h3 className="mt-3 text-xl font-bold tracking-[-0.01em] text-ink">
              Co-investor
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Where the mandate allows, partner capital participates alongside
              development partners in power, shell, and buildout — extending LP
              ownership from the fleet to the facility economics themselves.
            </p>
          </div>
          <div className="rounded-card border border-canvas-border bg-canvas-panel p-6 md:p-7">
            <span className="label-dim">Role 02</span>
            <h3 className="mt-3 text-xl font-bold tracking-[-0.01em] text-ink">
              Tenant
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              We are our own anchor tenant. Partner-owned GPU fleets occupy the
              space, guaranteeing a utilization floor and de-risking the
              development.
            </p>
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
              Build the infrastructure. Own what every AI company will need.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
              Partner with North Echo to own the compute the AI economy runs on.          </p>
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
