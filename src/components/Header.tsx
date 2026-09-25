import DateRangePicker from "./DateRangePicker";
import "../styles/date-picker.css";

export default function Header() {
  return (
    <header className="topbar">
      <div className="topbar__brand">
        <span className="topbar__logo" aria-hidden="true">N</span>
        <span className="topbar__name">Northwind Ops</span>
      </div>
      <div className="topbar__meta">
        <DateRangePicker />
        <span className="topbar__avatar" aria-label="Signed in as Priya N.">PN</span>
      </div>
    </header>
  );
}
