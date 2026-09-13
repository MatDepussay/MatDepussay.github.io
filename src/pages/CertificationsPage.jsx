import Certifications from "../components/Certifications";
import { certifications } from "../data/certifications";

export default function CertificationsPage() {
  return <Certifications groups={certifications} />;
}
