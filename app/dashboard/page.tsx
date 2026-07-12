import { ConsoleStrip } from "@/components/ui/ConsoleStrip";
import { MetricPanel } from "@/components/ui/MetricPanel";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <ConsoleStrip status="Fleet Online" region="US-EAST-1" uptime="99.97%" timestamp="26.04.2026 · 14:32:08Z" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <Eyebrow>North Echo Compute · Investor Portal</Eyebrow>
        <h1 className="mt-2 text-3xl font-bold text-ink">Fleet Performance</h1>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <MetricPanel label="Blended Utilization" value="72.4%" delta="1.8 WoW" trend="up" />
          <MetricPanel label="GPU-Hrs · 30D" value="57,860" delta="3.1 MoM" trend="up" />
          <MetricPanel label="Active Tenants" value="14" delta="2" trend="up" />
        </div>

        <div className="mt-6">
          <Card eyebrow="Structure" title="SPV Overview">
            Delaware LLC taxed as a partnership. Reg D 506(c), accredited investors only.
          </Card>
        </div>
      </div>
    </main>
  );
}
