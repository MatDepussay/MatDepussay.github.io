import Section from "./ui/Section";
import CertificationGroup from "./CertificationGroup";

export default function Certifications({ groups }) {
  return (
    <Section id="certifications" title="Certifications">
      <div className="certifications-grid">
        {groups.map((g) => (
          <CertificationGroup key={g.issuer} {...g} />
        ))}
      </div>
    </Section>
  );
}
