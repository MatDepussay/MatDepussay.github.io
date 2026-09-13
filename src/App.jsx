import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ExperiencePage from "./pages/ExperiencePage";
import CompetencesPage from "./pages/CompetencesPage";
import CertificationsPage from "./pages/CertificationsPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<ExperiencePage />} />
          <Route path="/competences" element={<CompetencesPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/projets" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
