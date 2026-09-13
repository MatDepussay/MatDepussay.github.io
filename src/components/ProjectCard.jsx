import TagList from "./ui/TagList";
import Badge from "./ui/Badge";

export default function ProjectCard({ project }) {
  const isPrivate = project.visibility === "private";

  return (
    <li className="projet-item">
      <div className="projet-item-head">
        <h3>{project.title}</h3>
        {isPrivate && (
          <Badge variant="private">
            Projet privé{project.context === "ONEPOINT" ? " — ONEPOINT" : ""}
          </Badge>
        )}
      </div>
      <p>{project.description}</p>
      {isPrivate && (
        <p className="projet-note">Code non public (confidentialité) — détails sur demande.</p>
      )}
      <TagList items={project.tech} />
      {project.partners && (
        <ul className="partenariat-list">
          {project.partners.map((p) => (
            <li key={p.name}>
              <a className="Partenariat" href={p.href}>
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      )}
      {isPrivate ? (
        <a className="projet-link projet-link-outline" href="mailto:matdepussay@gmail.com">
          Me contacter
        </a>
      ) : (
        <a className="projet-link" href={project.repo} target="_blank" rel="noopener noreferrer">
          Voir sur GitHub
        </a>
      )}
    </li>
  );
}
