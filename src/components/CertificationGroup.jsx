export default function CertificationGroup({ issuer, certs }) {
  return (
    <div className={`cert-group cert-group-${issuer.toLowerCase()}`}>
      <h3>{issuer}</h3>
      <ul className="cert-list">
        {certs.map((cert) => (
          <li key={cert.name}>
            <span className="cert-name">{cert.name}</span>
            {cert.code && <span className="cert-code">{cert.code}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
