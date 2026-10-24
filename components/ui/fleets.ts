export const PLATFORM_EVENT = "northecho:platform";

export type FleetUnit = "nodes" | "racks";

export type Fleet = {
  id: string;
  name: string;
  short: string;
  kicker: string;
  unit: FleetUnit;
  detail: string;
};

// Identity only: GPU count and HBM capacity from the NVIDIA Enterprise
// Reference Architectures. Peak FLOPS, bandwidth, and NIC totals stay off
// the page until a deployment measures them.
export const fleets: Fleet[] = [
  {
    id: "b200",
    name: "NVIDIA HGX B200",
    short: "B200",
    kicker: "8-GPU node",
    unit: "nodes",
    detail: "8× Blackwell SXM · 1.44 TB HBM3e",
  },
  {
    id: "b300",
    name: "NVIDIA HGX B300",
    short: "B300",
    kicker: "8-GPU node",
    unit: "nodes",
    detail: "8× Blackwell Ultra SXM · 2.3 TB HBM3e",
  },
  {
    id: "gb300",
    name: "NVIDIA GB300 NVL72",
    short: "GB300",
    kicker: "NVL72 rack",
    unit: "racks",
    detail: "72× Blackwell Ultra, 36× Grace · 288 GB HBM3e per GPU",
  },
];

export function quantityLabel(platform: string) {
  const unit = fleets.find((fleet) => fleet.name === platform)?.unit;
  if (unit === "racks") return "Number of racks";
  if (unit === "nodes") return "Number of nodes";
  return "Quantity";
}
