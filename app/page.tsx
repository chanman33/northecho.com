import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// -------------------------------------------------------------------------
// Small local section primitives (kept in-file so this page drops in clean)
// -------------------------------------------------------------------------

function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-canvas-border ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {eyebrow && (
          <div className="mb-4">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function AudienceCard({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-card border border-canvas-border bg-canvas-panel p-6">
      <div className="eyebrow mb-3">{eyebrow}</div>
      <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{copy}</p>
    </div>
  );
}

function RoleTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-canvas-border bg-canvas-raised px-3 py-1.5 text-xs font-medium text-ink-muted">
      <span className="h-1 w-1 rounded-full bg-accent-bright" />
      {label}
    </span>
  );
}

// -------------------------------------------------------------------------
// Page
// -------------------------------------------------------------------------

// Investor contact routes to a single inbox for now.
const INVEST_MAILTO = "mailto:invest@northecho.com";
// Customer-facing product site and inboxes.
const CLOUD_SITE = "https://northecho.ai";
const COLOCATION_MAILTO = "mailto:colocation@northecho.com";
const CLOUD_MAILTO = "mailto:cloud@northecho.com";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* ---------------------------------------------------------------- */}
      {/* Top bar                                                          */}
      {/* ---------------------------------------------------------------- */}
      <header className="border-b border-canvas-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 rounded-full bg-accent-bright" />
            <span className="text-sm font-semibold uppercase tracking-widest2 text-ink">
              North Echo
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest2 text-ink-muted md:flex">
            <a href="#strategy" className="hover:text-ink">Strategy</a>
            <a href="#enterprise" className="hover:text-ink">Enterprise</a>
            <a href="#datacenter" className="hover:text-ink">Data Centers</a>
          </nav>
          <Button
            variant="secondary"
            href={CLOUD_SITE}
            className="hidden md:inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
     
            Rent Compute
          </Button>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div className="dot-grid-bg pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Eyebrow>Private Asset Manager · AI Compute Infrastructure</Eyebrow>
          <div className="mt-6 max-w-3xl">
            <Headline
              pre="Own the compute"
              emphasis="the AI economy runs on."
              post="We execute the strategy."
            />
          </div>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-muted">
          North Echo is an asset manager for AI compute infrastructure. 
          Our partners directly own GPU fleets through dedicated vehicles. 
          We source, underwrite, acquire, and operate the hardware where the AI economy consumes it.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" href={INVEST_MAILTO}>
              Partner with us
            </Button>
            {/* <Button variant="ghost" href={INVEST_MAILTO}>
              Meet the team
            </Button> */}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Who we raise from                                                */}
      {/* ---------------------------------------------------------------- */}
      <Section id="investors" eyebrow="Partnership Structure">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            Long-term private capital, not the public markets.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            North Echo serves as general partner and manager. Investors
            participate as limited partners with direct fractional ownership of
            physical compute — no cloud equity, no synthetic exposure. Vehicles
            are structured under Reg D for accredited and qualified
            participants, with defined hold periods, quarterly distributions
            from contracted revenue, and pass-through depreciation where
            applicable.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <AudienceCard
            eyebrow="LP Profile 01"
            title="Institutional investors"
            copy="Allocators seeking direct real-asset exposure to AI infrastructure: contracted revenue, hard-asset backing, and governance, reporting, and administration built to institutional standard."
          />
          <AudienceCard
            eyebrow="LP Profile 02"
            title="Family offices"
            copy="Direct co-ownership of revenue-generating hardware, structured for principals who evaluate sponsors the way they evaluate real estate GPs: alignment, underwriting discipline, and a defined path to exit."
          />
          <AudienceCard
            eyebrow="LP Profile 03"
            title="Wealth advisers & RIAs"
            copy="Advisers allocating client capital into an alternative with hard-asset backing, quarterly distributions, a defined hold period, and pass-through depreciation for taxable investors."
          />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Strategy shift                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section id="strategy" eyebrow="Strategy" className="bg-canvas-raised">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              Two ways to buy the same fleet:{" "}
              <span className="font-serif italic text-accent-bright">
                wholesale and direct.
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              We lease owned GPU capacity wholesale to the leading inference
              platforms already serving production demand, and we rent compute
              directly to scaled AI companies through our own GPU cloud. Both
              channels put revenue against the same owned hardware, so
              utilization does not depend on any single buyer.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <RoleTag label="Leading inference platforms" />
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
              <Button variant="secondary" href={CLOUD_MAILTO}>
                Rent compute
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-card border border-canvas-border bg-canvas-panel p-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="eyebrow">Channel 01 · Wholesale</span>
                <Badge tone="confirmed">Active</Badge>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                Wholesale compute
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                Lease partner-owned fleets to established inference platforms.
                Capital flows into revenue hardware, not platform R&D.
                Utilization from day one.
              </p>
            </div>

            <div className="rounded-card border border-canvas-border bg-canvas-panel p-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="eyebrow">Channel 02 · Direct</span>
                <Badge tone="confirmed">Active</Badge>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                Direct: open core bare-metal GPU cloud
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                Sell compute directly to scaled AI companies that rent blocks
                of GPU capacity through our cloud service. An open core bare-metal GPU
                cloud model that monetizes the fleet with no
                hyperscaler in the middle.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Enterprise co-location                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section id="enterprise" eyebrow="Enterprise Co-Location">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              We put compute where the data already lives.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
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
              <Button variant="secondary" href={COLOCATION_MAILTO}>
                Talk to us about co-location
              </Button>
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
      <Section id="datacenter" eyebrow="Data Center Development & Operations">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            We operate across the full stack:{" "}
            <span className="font-serif italic text-accent-bright">
              co-investor, operator, and tenant.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Owning the hardware pulls us toward the facility. We participate in
            data center development and operations directly, aligning capital,
            operations, and demand under one roof rather than renting from a
            counterparty at every layer.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-card border border-canvas-border bg-canvas-panel p-6">
            <span className="eyebrow">Role 01</span>
            <h3 className="mt-2 text-xl font-bold text-ink">Co-investor</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Where the mandate allows, partner capital participates alongside
              development partners in power, shell, and buildout — extending LP
              ownership from the fleet to the facility economics themselves.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-card border border-canvas-border bg-canvas-panel p-6">
            <span className="eyebrow">Role 02</span>
            <h3 className="mt-2 text-xl font-bold text-ink">Operator</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Professional operations as a service. Procurement, deployment,
              scheduling, and telemetry across the fleet, run to institutional
              standard.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-card border border-canvas-border bg-canvas-panel p-6">
            <span className="eyebrow">Role 03</span>
            <h3 className="mt-2 text-xl font-bold text-ink">Tenant</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
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
      <section className="relative overflow-hidden border-t border-canvas-border">
        <div className="dot-grid-bg pointer-events-none absolute inset-0 opacity-15 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Eyebrow>Next Step</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Build the infrastructure. Own what every AI company will need.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            Partner with North Echo to own the compute the AI economy runs on,
            or meet the team building it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button variant="primary" href={INVEST_MAILTO}>
              Partner with us
            </Button>
            <Button variant="secondary" href={INVEST_MAILTO}>
              Meet the team
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Footer                                                           */}
      {/* ---------------------------------------------------------------- */}
      <footer className="border-t border-canvas-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
          <span className="uppercase tracking-widest2">
            North Echo · Confidential
          </span>
          <span>
            Reg D private placement. Accredited investors only. This site is not
            an offer to sell securities.
          </span>
        </div>
      </footer>
    </main>
  );
}
