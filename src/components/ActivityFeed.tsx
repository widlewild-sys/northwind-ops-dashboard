import { activity } from "../data/mock";

export default function ActivityFeed() {
  return (
    <>
      <div className="panel__header">
        <h2 className="panel__title">Recent activity</h2>
      </div>
      <ul className="activity">
        {activity.map((a) => (
          <li key={a.id} className="activity__item">
            <span className="activity__who">{a.who}</span>{" "}
            <span className="activity__action">{a.action}</span>
            <span className="activity__time">{a.time}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
