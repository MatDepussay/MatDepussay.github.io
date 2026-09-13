import TagList from "./ui/TagList";
import Badge from "./ui/Badge";

export default function ExperienceItem({ entry }) {
  return (
    <li className="Experience-item">
      <div className="experience-item-head">
        <h3>
          {entry.role}
          {entry.org ? ` — ${entry.org}` : ""}
        </h3>
        {entry.current && <Badge variant="ongoing">En cours</Badge>}
      </div>
      <h5>{entry.period}</h5>
      <p>{entry.summary}</p>
      {entry.bullets.length > 0 && (
        <ul className="experience-bullets">
          {entry.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      <TagList items={entry.tech} />
    </li>
  );
}
