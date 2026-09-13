import Icon from "./ui/Icon";
import Section from "./ui/Section";

export default function BeyondWork({ items }) {
  return (
    <Section id="au-dela" title="Au-delà du travail" className="beyond-work-section">
      <div className="beyond-work-grid">
        {items.map((item) => (
          <div className="beyond-work-card" key={item.title}>
            <Icon name={item.icon} size={28} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
