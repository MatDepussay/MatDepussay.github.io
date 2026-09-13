import Hero from "../components/Hero";
import AboutSummary from "../components/AboutSummary";
import BeyondWork from "../components/BeyondWork";
import { profile } from "../data/profile";

export default function Home() {
  return (
    <>
      <Hero
        name={profile.name}
        role={profile.role}
        employer={profile.employer}
        tagline={profile.tagline}
      />
      <AboutSummary summary={profile.summary} highlights={profile.highlights} />
      <BeyondWork items={profile.beyondWork} />
    </>
  );
}
