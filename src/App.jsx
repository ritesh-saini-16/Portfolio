import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import PlexusCanvas from './components/PlexusCanvas.jsx';

/* Single continuous scroll page — no page switching, no drag */
export default function App() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080d1a]">
      {/* Single fixed plexus canvas that covers the whole page always */}
      <PlexusCanvas />

      {/* ── Section 0: Hero / Landing ─────────────── */}
      <section id="home" className="relative z-10">
        <Home onNavigate={scrollToSection} />
      </section>

      {/* ── Sections 1–5: Portfolio content ──────── */}
      <div className="relative z-10">
        <Portfolio />
      </div>
    </div>
  );
}
