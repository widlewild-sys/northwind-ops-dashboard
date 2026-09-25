export interface Kpi {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
}

export interface ActivityItem {
  id: string;
  who: string;
  action: string;
  time: string;
}

export interface Transaction {
  id: string;
  customer: string;
  date: string;
  status: "Paid" | "Pending" | "Overdue";
  amount: string;
}

export const kpis: Kpi[] = [
  { id: "rev", label: "Monthly revenue", value: "$184,920.40", delta: "+8.2%", trend: "up" },
  { id: "orders", label: "Orders processed", value: "12,408", delta: "+3.1%", trend: "up" },
  { id: "aov", label: "Avg. order value", value: "$148.27", delta: "−1.4%", trend: "down" },
  { id: "refund", label: "Refund rate", value: "2.38%", delta: "−0.6%", trend: "up" },
];

export const revenueSeries: { month: string; value: number }[] = [
  { month: "Apr", value: 128 },
  { month: "May", value: 142 },
  { month: "Jun", value: 137 },
  { month: "Jul", value: 155 },
  { month: "Aug", value: 171 },
  { month: "Sep", value: 185 },
];

export const activity: ActivityItem[] = [
  { id: "a1", who: "Priya N.", action: "approved refund #R-2291", time: "4 min ago" },
  { id: "a2", who: "Marcus T.", action: "exported the August ledger", time: "22 min ago" },
  { id: "a3", who: "System", action: "flagged 3 invoices as overdue", time: "1 hr ago" },
  { id: "a4", who: "Dana K.", action: "updated shipping rates for NZ", time: "2 hr ago" },
  { id: "a5", who: "Leo F.", action: "added supplier Harbourline Freight", time: "Yesterday" },
];

export const transactions: Transaction[] = [
  { id: "INV-10482", customer: "Baxter & Co.", date: "24 Sep 2026", status: "Paid", amount: "$4,820.00" },
  { id: "INV-10481", customer: "Greenleaf Grocers", date: "24 Sep 2026", status: "Pending", amount: "$1,236.50" },
  { id: "INV-10480", customer: "Moreton Marine", date: "23 Sep 2026", status: "Overdue", amount: "$9,104.75" },
  { id: "INV-10479", customer: "Sunhaven Clinics", date: "23 Sep 2026", status: "Paid", amount: "$2,450.00" },
  { id: "INV-10478", customer: "Kestrel Logistics", date: "22 Sep 2026", status: "Paid", amount: "$715.20" },
];
