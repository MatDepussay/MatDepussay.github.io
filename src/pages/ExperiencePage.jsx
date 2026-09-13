import ExperienceTimeline from "../components/ExperienceTimeline";
import { experiences } from "../data/experiences";

export default function ExperiencePage() {
  return <ExperienceTimeline entries={experiences} />;
}
