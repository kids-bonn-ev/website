// Shared: Nav + Footer + Router

const PAGES = [
  { id: "home", label: "Start" },
  { id: "ueber", label: "Über uns" },
  { id: "wie", label: "Wie KIDS funktioniert" },
  { id: "team", label: "Team" },
  { id: "galerie", label: "Galerie" },
  { id: "news", label: "Aktuelles" },
  { id: "faq", label: "FAQ" },
  { id: "kontakt", label: "Anmeldung" },
];

const Nav = ({ current, onNavigate }) => {
  const [open, setOpen] = React.useState(false);
  const go = (id) => (e) => { e.preventDefault(); onNavigate(id); setOpen(false); window.scrollTo({ top: 0, behavior: "instant" }); };
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#home" onClick={go("home")} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="assets/kids-logo.png" className="nav-logo" alt="KIDS e.V."/>
        </a>
        <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">☰</button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {PAGES.filter(p => p.id !== "kontakt").map(p => (
            <a key={p.id} href={`#${p.id}`} onClick={go(p.id)} className={current === p.id ? "active" : ""}>{p.label}</a>
          ))}
          <a href="#kontakt" onClick={go("kontakt")} className="nav-cta">Platz anfragen →</a>
        </div>
      </div>
    </nav>
  );
};

const Footer = ({ onNavigate }) => {
  const go = (id) => (e) => { e.preventDefault(); onNavigate(id); window.scrollTo({ top: 0, behavior: "instant" }); };
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ background: "white", display: "inline-block", padding: "14px 18px", borderRadius: 16, marginBottom: 18 }}>
              <img src="assets/kids-logo.png" alt="KIDS e.V." style={{ height: 36 }}/>
            </div>
            <p style={{ color: "#d4ccbd", maxWidth: 320, fontSize: 15 }}>
              Ein Ort zum Wachsen, Staunen und Freunde finden. Elterninitiative seit 1998.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <SocialDot ch="IG"/>
              <SocialDot ch="FB"/>
              <SocialDot ch="@"/>
            </div>
          </div>
          <div>
            <h4>Entdecken</h4>
            <ul>
              <li><a href="#ueber" onClick={go("ueber")}>Über uns</a></li>
              <li><a href="#wie" onClick={go("wie")}>Wie KIDS funktioniert</a></li>
              <li><a href="#team" onClick={go("team")}>Team</a></li>
              <li><a href="#galerie" onClick={go("galerie")}>Galerie</a></li>
            </ul>
          </div>
          <div>
            <h4>Infos</h4>
            <ul>
              <li><a href="#news" onClick={go("news")}>Aktuelles</a></li>
              <li><a href="#faq" onClick={go("faq")}>FAQ</a></li>
              <li><a href="#kontakt" onClick={go("kontakt")}>Anmeldung</a></li>
              <li><a href="#kontakt" onClick={go("kontakt")}>Mitarbeit</a></li>
            </ul>
          </div>
          <div>
            <h4>Besuch uns</h4>
            <ul>
              <li>Sonnenstraße 42<br/>10115 Berlin</li>
              <li style={{ marginTop: 10 }}>hallo@kids-ev.de</li>
              <li>030 123 456 78</li>
              <li style={{ marginTop: 10 }}>Mo – Fr, 7:30 – 16:30</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 KIDS e.V. - Eine Elterninitiative</span>
          <span style={{ display: "flex", gap: 20 }}>
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">Satzung</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

const SocialDot = ({ ch }) => (
  <a href="#" style={{
    width: 40, height: 40, borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 800, fontSize: 13, color: "white",
  }}>{ch}</a>
);

Object.assign(window, { Nav, Footer, PAGES });
