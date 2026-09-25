import Header from "./components/Header";
import KpiRow from "./components/KpiRow";
import RevenueChart from "./components/RevenueChart";
import ActivityFeed from "./components/ActivityFeed";
import TransactionsTable from "./components/TransactionsTable";
import "./styles/layout.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="dashboard">
        <section className="dashboard__kpis" aria-label="Key metrics">
          <KpiRow />
        </section>
        <section className="dashboard__chart panel">
          <RevenueChart />
        </section>
        <aside className="dashboard__activity panel">
          <ActivityFeed />
        </aside>
        <section className="dashboard__transactions panel">
          <TransactionsTable />
        </section>
      </main>
    </div>
  );
}
