import Icon from "./ui/Icon";

export default function SkillCard({ icon, title, description, items }) {
  return (
    <div className="skill-card">
      <Icon name={icon} />
      <h3>{title}</h3>
      {description && <p className="description">{description}</p>}
      {items.length > 0 && <p className="packages">{items.join(" · ")}</p>}
    </div>
  );
}
