import { useMemo, useState } from "react";
import Section from "./ui/Section";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  const [activeTag, setActiveTag] = useState("Tous");

  const tags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ["Tous", ...Array.from(set)];
  }, [projects]);

  const ordered = useMemo(
    () => [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)),
    [projects]
  );

  const visible =
    activeTag === "Tous" ? ordered : ordered.filter((p) => p.tech.includes(activeTag));

  return (
    <Section id="projets" title="Mes Projets" subtitle="Voici une liste de mes projets récents :">
      <div className="tag-filter-row" role="tablist" aria-label="Filtrer les projets par technologie">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`tag-filter ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <ul className="projects-list">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </Section>
  );
}
