import Section from "./ui/Section";

export default function AboutSummary({ summary, highlights }) {
  return (
    <Section id="apropos" title="À propos de moi" className="about-section">
      <div className="about-content">
        {summary.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <ul className="highlights-strip">
        {highlights.map((h) => (
          <li key={h.label}>
            <span className="highlight-label">{h.label}</span>
            <span className="highlight-value">{h.value}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
