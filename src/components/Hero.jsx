import ProfilePhotoFlip from "./ProfilePhotoFlip";
import photoFront from "../assets/photo-front.jpg";
import photoBack from "../assets/photo-back.webp";

export default function Hero({ name, role, employer, tagline }) {
  return (
    <section id="accueil" className="hero">
      <div className="hero-text">
        <h1>{name}</h1>
        <p className="hero-role">
          {role} — {employer}
        </p>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-cta">
          <a className="projet-link" href="#projets">
            Voir mes projets
          </a>
          <a className="projet-link projet-link-outline" href="mailto:matdepussay@gmail.com">
            Me contacter
          </a>
        </div>
      </div>
      <ProfilePhotoFlip
        front={{ src: photoFront, alt: "Photo de Mathias" }}
        back={{ src: photoBack, alt: "Illustration alternative" }}
      />
    </section>
  );
}
