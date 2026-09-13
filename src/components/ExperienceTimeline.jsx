import Section from "./ui/Section";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceTimeline({ entries }) {
  const sorted = [...entries].sort((a, b) => b.sortKey - a.sortKey);
  const dataRoles = sorted.filter((e) => e.category === "data");
  const otherRoles = sorted.filter((e) => e.category === "autre");

  return (
    <Section id="experiences" title="Mon Expérience">
      <ul className="experience-list">
        {dataRoles.map((entry) => (
          <ExperienceItem key={entry.id} entry={entry} />
        ))}
      </ul>

      {otherRoles.length > 0 && (
        <details className="other-experiences">
          <summary>Autres expériences</summary>
          <ul className="experience-list">
            {otherRoles.map((entry) => (
              <ExperienceItem key={entry.id} entry={entry} />
            ))}
          </ul>
        </details>
      )}
    </Section>
  );
}
