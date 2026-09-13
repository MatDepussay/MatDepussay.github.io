const SOCIAL_ICONS = {
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2 8 5 8-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M4 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 10h2.5v9H3v-9Zm6 0h2.4v1.2c.5-.9 1.6-1.5 2.9-1.5 2.7 0 4.7 1.8 4.7 5.3V19h-2.5v-4.2c0-2.1-.8-3.2-2.4-3.2-1.7 0-2.6 1.1-2.6 3.2V19H9v-9Z"
        fill="currentColor"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.5-4-1.5-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.6 11.6 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.6.8.5A12 12 0 0 0 12 .5Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export default function Footer({ socials, contact }) {
  return (
    <footer id="contact">
      <div className="footer-content">
        {contact && <p className="footer-contact-line">{contact}</p>}
        <div className="social-links">
          {socials.map((s) => (
            <a key={s.id} className="social-link" href={s.href} aria-label={s.label}>
              {SOCIAL_ICONS[s.id]}
            </a>
          ))}
        </div>
        <p>Copyright © {new Date().getFullYear()} Mathias Depussay. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
