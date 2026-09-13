import { useState } from "react";

export default function ProfilePhotoFlip({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className="flip-card"
      aria-pressed={flipped}
      aria-label="Afficher la seconde photo"
      onClick={() => setFlipped((v) => !v)}
    >
      <span className={`flip-card-inner ${flipped ? "is-flipped" : ""}`}>
        <span className="flip-card-front">
          <img src={front.src} alt={front.alt} />
        </span>
        <span className="flip-card-back">
          <img src={back.src} alt={back.alt} />
        </span>
      </span>
    </button>
  );
}
