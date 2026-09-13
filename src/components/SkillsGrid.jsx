import Section from "./ui/Section";
import SkillCard from "./SkillCard";

export default function SkillsGrid({ groups }) {
  return (
    <Section id="competences" title="Compétences" className="skills-section">
      <div className="skills-grid">
        {groups.map((g) => (
          <SkillCard key={g.id} {...g} />
        ))}
      </div>
    </Section>
  );
}
