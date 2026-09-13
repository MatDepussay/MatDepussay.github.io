import SkillsGrid from "../components/SkillsGrid";
import { skills } from "../data/skills";

export default function CompetencesPage() {
  return <SkillsGrid groups={skills} />;
}
