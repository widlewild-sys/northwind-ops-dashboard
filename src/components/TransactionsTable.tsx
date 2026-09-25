import { transactions } from "../data/mock";
import "../styles/table.css";

export default function TransactionsTable() {
  return (
    <>
      <div className="panel__header">
        <h2 className="panel__title">Latest invoices</h2>
        <button type="button" className="btn btn--primary" data-testid="export-btn">
          Export CSV
        </button>
      </div>
      <div className="table-wrap">
        <table className="txn-table">
          <thead>
            <tr>
              <th scope="col">Invoice</th>
              <th scope="col">Customer</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col" className="num">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.customer}</td>
                <td>{t.date}</td>
                <td>
                  <span className={`badge badge--${t.status.toLowerCase()}`}>{t.status}</span>
                </td>
                <td className="num">{t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
