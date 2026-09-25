import { kpis } from "../data/mock";
import KpiCard from "./KpiCard";
import "../styles/kpi.css";

export default function KpiRow() {
  return (
    <div className="kpi-row">
      {kpis.map((k) => (
        <KpiCard key={k.id} kpi={k} />
      ))}
    </div>
  );
}
