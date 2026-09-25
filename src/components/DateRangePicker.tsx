import { useEffect, useRef, useState } from "react";

export interface RangeOption {
  id: string;
  label: string;
  range: string;
}

export const RANGE_OPTIONS: RangeOption[] = [
  { id: "7d", label: "Last 7 days", range: "19 – 25 Sep 2026" },
  { id: "mtd", label: "Month to date", range: "1 – 25 Sep 2026" },
  { id: "30d", label: "Last 30 days", range: "27 Aug – 25 Sep 2026" },
  { id: "qtd", label: "Quarter to date", range: "1 Jul – 25 Sep 2026" },
  { id: "90d", label: "Last 90 days", range: "28 Jun – 25 Sep 2026" },
];

export default function DateRangePicker() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("mtd");
  const rootRef = useRef<HTMLDivElement>(null);
  const current = RANGE_OPTIONS.find((o) => o.id === selected)!;

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="date-picker" ref={rootRef}>
      <button
        type="button"
        className="date-picker__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="date-picker__value">{current.range}</span>
        <span className="date-picker__caret" aria-hidden="true">▾</span>
      </button>
      {open && (
        <ul className="date-picker__menu" role="listbox" aria-label="Date range">
          {RANGE_OPTIONS.map((o) => (
            <li
              key={o.id}
              role="option"
              aria-selected={o.id === selected}
              className={`date-picker__option${o.id === selected ? " is-selected" : ""}`}
              onClick={() => {
                setSelected(o.id);
                setOpen(false);
              }}
            >
              <span className="date-picker__option-label">{o.label}</span>
              <span className="date-picker__option-range">{o.range}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
