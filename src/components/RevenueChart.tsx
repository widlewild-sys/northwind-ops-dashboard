import { revenueSeries } from "../data/mock";

const W = 600;
const H = 220;
const PAD = 28;

export default function RevenueChart() {
  const max = Math.max(...revenueSeries.map((d) => d.value));
  const barW = (W - PAD * 2) / revenueSeries.length;

  return (
    <>
      <div className="panel__header">
        <h2 className="panel__title">Revenue, last 6 months</h2>
        <span className="panel__subtitle">$k, all channels</span>
      </div>
      <svg
        className="chart"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Bar chart of monthly revenue from April to September"
      >
        <line x1={PAD} x2={W - PAD} y1={H - PAD} y2={H - PAD} className="chart__axis" />
        {revenueSeries.map((d, i) => {
          const h = ((H - PAD * 2) * d.value) / max;
          const x = PAD + i * barW + barW * 0.2;
          return (
            <g key={d.month}>
              <rect
                x={x}
                y={H - PAD - h}
                width={barW * 0.6}
                height={h}
                rx={4}
                className="chart__bar"
              />
              <text x={x + barW * 0.3} y={H - PAD + 16} className="chart__label">
                {d.month}
              </text>
              <text x={x + barW * 0.3} y={H - PAD - h - 6} className="chart__value">
                {d.value}
              </text>
            </g>
          );
        })}
      </svg>
    </>
  );
}
