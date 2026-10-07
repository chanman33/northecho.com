import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Headline } from "@/components/ui/Headline";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CapacityForm } from "@/components/ui/CapacityForm";
import { Wordmark } from "@/components/ui/Wordmark";

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

const CLOUD_SITE = "https://northecho.ai";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas">
      <header className="border-b border-canvas-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Wordmark />
          <nav className="hidden items-center gap-10 text-label font-bold uppercase text-ink-faint md:flex">
            <a href="#hardware" className="transition-colors hover:text-accent">
              Hardware
            </a>
            <a href="#deployments" className="transition-colors hover:text-accent">
              Deployments
            </a>
            <a href="#capacity" className="transition-colors hover:text-accent">
              Capacity
            </a>
            <a
              href={CLOUD_SITE}
              className="transition-colors hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fleet
            </a>
          </nav>
          <Button href="#capacity" variant="secondary" className="hidden md:inline-flex">
            Request capacity
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55rem_30rem_at_88%_-15%,rgba(108,171,224,0.14),transparent_62%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Eyebrow>Dedicated compute</Eyebrow>
          <div className="mt-7 max-w-3xl">
            <Headline
              pre={
                <>
                  Compute operations,{" "}
                  <br className="sm:hidden" />
                  simplified.
                  <br />
                </>
              }
            />
          </div>
          <p className="mt-8 max-w-measure text-base leading-relaxed text-ink-soft">
            North Echo finances, procures, builds, installs and operates the cluster behind
            production workloads. 
            <br />
            <br />
            Bare metal access for inference and training.
          </p>
          <div className="mt-10">
            <Button href="#capacity">Reserve capacity</Button>
          </div>
        </div>
      </section>

      <Section
        id="hardware"
        index="01"
        eyebrow="NVIDIA fleets"
        className="bg-canvas-raised"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-ink">
            NVIDIA B300 fleets.
          </h2>
          <p className="mt-5 max-w-measure text-base leading-relaxed text-ink-soft">
          Dedicated bare-metal NVIDIA B300 nodes under long-term contract, with full-stack control and no shared tenancy.
          </p>
        </div>
      </Section>

      <Section id="deployments" index="02" eyebrow="Deployments">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-ink">
            Scoped to your workload.
          </h2>
          <p className="mt-5 max-w-measure text-base leading-relaxed text-ink-soft">
            Each deployment is sized to one customer, then procured, installed
            and operated by us. You run the model and software.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card eyebrow="01" title="Scope">
            We size the cluster to your workload, term and location.
          </Card>
          <Card eyebrow="02" title="Procure">
            We source the hardware, colocation and power, and finance it. You
            pay over the term.
          </Card>
          <Card eyebrow="03" title="Install">
            We rack, network and hand over a dedicated cluster. Your workload
            is the only tenant.
          </Card>
          <Card eyebrow="04" title="Operate">
            We run power, hardware and uptime. You run the software and model.
          </Card>
        </div>
        <p className="mt-8 max-w-measure text-base leading-relaxed text-ink-soft">
          We handle infrastructure, from procurement to uptime.<br className="hidden sm:inline" /> Your team keeps the stack: orchestration, runtimes and models.
        </p>
   
      </Section>

      <section id="capacity" className="border-t border-canvas-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="rounded-band border border-canvas-border bg-canvas-panel px-6 py-12 text-center md:px-12 md:py-14">
            <Eyebrow>Capacity</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-ink md:text-4xl">
              Reserve capacity.
            </h2>
            <p className="mx-auto mt-5 max-w-measure text-base leading-relaxed text-ink-soft">
              Tell us what you need.
            </p>
            <CapacityForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-canvas-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <span className="label-dim shrink-0">North Echo</span>
          <span className="label-legal">Operations and financing</span>
        </div>
      </footer>
    </main>
  );
}
