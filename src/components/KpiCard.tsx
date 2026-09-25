import type { Kpi } from "../data/mock";

export default function KpiCard({ kpi }: { kpi: Kpi }) {
  return (
    <div className="kpi-card" data-kpi={kpi.id}>
      <span className="kpi-card__label">{kpi.label}</span>
      <span className="kpi-card__value">{kpi.value}</span>
      <span className={`kpi-card__delta kpi-card__delta--${kpi.trend}`}>
        {kpi.delta} vs last month
      </span>
    </div>
  );
}
