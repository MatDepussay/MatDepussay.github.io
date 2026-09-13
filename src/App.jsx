import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutSummary from "./components/AboutSummary";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsGrid from "./components/SkillsGrid";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import BeyondWork from "./components/BeyondWork";
import Footer from "./components/Footer";

import { profile } from "./data/profile";
import { experiences } from "./data/experiences";
import { skills } from "./data/skills";
import { certifications } from "./data/certifications";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div id="PageCentrale">
      <Nav />
      <Hero
        name={profile.name}
        role={profile.role}
        employer={profile.employer}
        tagline={profile.tagline}
      />
      <AboutSummary summary={profile.summary} highlights={profile.highlights} />
      <ExperienceTimeline entries={experiences} />
      <SkillsGrid groups={skills} />
      <Certifications groups={certifications} />
      <Projects projects={projects} />
      <BeyondWork items={profile.beyondWork} />
      <Footer socials={profile.socials} contact={profile.contact} />
    </div>
  );
}
