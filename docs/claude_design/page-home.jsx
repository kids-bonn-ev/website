// Home page - Hero + Intro + Features + Values teaser + CTA

const HeroShapes = () => (
  <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
    <Leaf fill="#c8a9ce" stripe="#fff" style={{ position: "absolute", width: 180, top: -30, right: "14%", transform: "rotate(18deg)" }}/>
    <Sun color="#eacb2c" style={{ position: "absolute", width: 220, top: "34%", right: "-4%" }}/>
    <Blob fill="#a1c480" style={{ position: "absolute", width: 280, bottom: -60, left: "-5%" }}/>
    <Dots color="#c3651d" cols={4} rows={6} style={{ position: "absolute", width: 90, top: "44%", left: "6%" }}/>
    <Squiggle color="#93acd1" style={{ position: "absolute", width: 220, bottom: "18%", right: "8%" }}/>
    <svg viewBox="0 0 140 140" style={{ position: "absolute", width: 120, top: "8%", left: "46%" }}>
      <circle cx="70" cy="70" r="60" fill="none" stroke="#93acd1" strokeWidth="6" strokeDasharray="3 10"/>
    </svg>
  </div>
);

const HeroTypo = ({ onNavigate }) => (
  <section style={{ paddingTop: 60, paddingBottom: 40, position: "relative" }}>
    <HeroShapes/>
    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <div style={{ textAlign: "center", maxWidth: 980, margin: "0 auto", padding: "40px 0 20px" }}>
        <div style={{ display: "inline-flex", gap: 10, alignItems: "center", background: "white", padding: "8px 16px", borderRadius: 999, fontSize: 14, fontWeight: 800, color: "var(--ink)", marginBottom: 28, boxShadow: "0 2px 0 rgba(0,0,0,.04)" }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--gruen)" }}/>
          Anmeldephase 2026/27 ist offen
        </div>
        <h1 style={{ lineHeight: 0.98 }}>
          Ein Ort zum <em style={{ fontStyle: "normal", color: "var(--orange)" }}>Wachsen</em>,<br/>
          <span style={{ color: "var(--gruen)" }}>Staunen</span> & Freunde finden.
        </h1>
        <p className="lead" style={{ marginTop: 28, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
          Wir sind KIDS e.V. – eine Elterninitiative mit 40 Kindern, 17 Erzieher:innen
          und einem großen Garten mitten in der Stadt. Hier darf jedes Kind sich selbst sein.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 36 }}>
          <a href="#kontakt" onClick={(e)=>{e.preventDefault();onNavigate("kontakt")}} className="btn btn-primary">Platz anfragen →</a>
          <a href="#wie" onClick={(e)=>{e.preventDefault();onNavigate("wie")}} className="btn btn-ghost">Wie KIDS funktioniert</a>
        </div>
      </div>
    </div>
  </section>
);

const HeroFormen = ({ onNavigate }) => (
  <section style={{ paddingTop: 40, paddingBottom: 60, position: "relative" }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }} className="hero-two">
        <div>
          <span className="eyebrow">Kindergarten & Hort in Berlin-Mitte</span>
          <h1>
            Hier wachsen<br/>
            <span style={{ color: "var(--orange)" }}>kleine Menschen</span><br/>
            zu <span style={{ fontStyle: "italic" }}>großen</span> Entdeckern.
          </h1>
          <p className="lead" style={{ marginTop: 24, maxWidth: 500 }}>
            40 Kinder. 17 Erzieher:innen. Ein riesiger Garten. Und Eltern, die mit anpacken,
            damit aus „Kindergarten" ein zweites Zuhause wird.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
            <a href="#kontakt" onClick={(e)=>{e.preventDefault();onNavigate("kontakt")}} className="btn btn-primary">Platz anfragen →</a>
            <a href="#ueber" onClick={(e)=>{e.preventDefault();onNavigate("ueber")}} className="btn btn-ghost">Über uns</a>
          </div>
          <div style={{ display: "flex", gap: 32, marginTop: 56, flexWrap: "wrap" }}>
            <Stat n="40" label="Kinder"/>
            <Stat n="1:5" label="Betreuung"/>
            <Stat n="28" label="Jahre Erfahrung"/>
          </div>
        </div>
        <div style={{ position: "relative", aspectRatio: "4/5" }}>
          <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "var(--lila)", borderRadius: "40% 40% 24px 24px", position: "relative", overflow: "hidden" }}>
              <Leaf fill="#fbf6ef" stripe="#c8a9ce" style={{ position: "absolute", width: "70%", left: "15%", top: "15%" }}/>
            </div>
            <div style={{ background: "var(--gelb)", borderRadius: "24px 24px 24px 80px", position: "relative", overflow: "hidden" }}>
              <Sun color="#c3651d" style={{ position: "absolute", width: "120%", top: "-20%", right: "-20%" }}/>
            </div>
            <div style={{ background: "var(--gruen)", borderRadius: "24px 80px 24px 24px", position: "relative", overflow: "hidden" }}>
              <Dots color="#fbf6ef" cols={5} rows={5} style={{ position: "absolute", width: "80%", top: "15%", left: "10%" }}/>
            </div>
            <div style={{ background: "var(--pfirsich)", borderRadius: "24px 24px 40% 40%", position: "relative", overflow: "hidden" }}>
              <Squiggle color="#c3651d" style={{ position: "absolute", width: "120%", top: "30%", left: "-10%" }}/>
              <Squiggle color="#c3651d" style={{ position: "absolute", width: "120%", top: "55%", left: "-10%" }}/>
            </div>
          </div>
          <div style={{ position: "absolute", width: 120, height: 120, background: "var(--orange)", color: "white", borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", right: -20, top: "42%", transform: "rotate(-8deg)", fontFamily: "var(--display)", fontSize: 22, lineHeight: 1, textAlign: "center", boxShadow: "0 8px 0 rgba(0,0,0,.08)" }}>
            seit<br/><span style={{ fontSize: 32 }}>1998</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HeroFoto = ({ onNavigate }) => (
  <section style={{ paddingTop: 40, paddingBottom: 60, position: "relative" }}>
    <div className="container">
      <div style={{ position: "relative", borderRadius: 40, overflow: "hidden", aspectRatio: "16/9", background: "var(--pfirsich)" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #ddab88 0%, #c8a9ce 50%, #a1c480 100%)" }}/>
        {/* decorative layered shapes */}
        <Sun color="rgba(234,203,44,.85)" style={{ position: "absolute", width: 340, top: -40, right: -40 }}/>
        <Blob fill="rgba(147,172,209,.6)" style={{ position: "absolute", width: 380, bottom: -80, left: -80 }}/>
        <Leaf fill="rgba(251,246,239,.5)" stripe="#c8a9ce" style={{ position: "absolute", width: 180, top: "15%", left: "30%", transform: "rotate(-12deg)" }}/>
        <span style={{ position: "absolute", right: 24, bottom: 24, fontFamily: "ui-monospace, monospace", fontSize: 12, color: "rgba(255,255,255,.75)", background: "rgba(0,0,0,.2)", padding: "6px 12px", borderRadius: 999 }}>
          [ Foto-Platzhalter: Kinder im Garten ]
        </span>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: 56 }}>
          <div style={{ maxWidth: 640, color: "white" }}>
            <span className="eyebrow" style={{ color: "white" }}>Willkommen bei KIDS e.V.</span>
            <h1 style={{ color: "white", textShadow: "0 2px 20px rgba(0,0,0,.15)" }}>
              Kindheit, die<br/>in Erinnerung bleibt.
            </h1>
            <div style={{ display: "flex", gap: 14, marginTop: 28 }}>
              <a href="#kontakt" onClick={(e)=>{e.preventDefault();onNavigate("kontakt")}} className="btn btn-primary">Platz anfragen →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stat = ({ n, label }) => (
  <div>
    <div style={{ fontFamily: "var(--display)", fontSize: 44, lineHeight: 1, color: "var(--orange)" }}>{n}</div>
    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink-soft)", marginTop: 4 }}>{label}</div>
  </div>
);

const IntroBand = () => (
  <section className="tight" style={{ background: "var(--cream-2)", borderRadius: 0 }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 64, alignItems: "start" }} className="two-col">
        <div style={{ position: "sticky", top: 100 }}>
          <span className="eyebrow">Hallo!</span>
          <h2>Was uns besonders macht.</h2>
        </div>
        <div>
          <p className="lead" style={{ color: "var(--ink)", fontSize: 22, marginBottom: 32 }}>
            Bei KIDS e.V. bestimmen die Kinder den Rhythmus. Wir folgen ihrer Neugier,
            nehmen ihre Fragen ernst und geben ihnen die Zeit, die Großwerden braucht.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="features">
            <Feature color="#a1c480" title="Garten mit 1700 m²" text="Hochbeete, Sandkiste, Matschecke und ein alter Birnbaum – unser liebster Klassenraum."/>
            <Feature color="#c8a9ce" title="Zwei feste Gruppen" text="20 Kinder pro Gruppe, gemischtes Alter von 1 bis 6 Jahren. Keine ständigen Wechsel."/>
            <Feature color="#eacb2c" title="Frisch gekocht" text="Unsere Köchin Mira zaubert täglich eine warme Mahlzeit – bio, saisonal, kindgerecht."/>
            <Feature color="#93acd1" title="Eltern mittendrin" text="Als Elterninitiative gestalten Familien den Alltag aktiv mit – soviel oder wenig wie passt."/>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Feature = ({ color, title, text }) => (
  <div className="card" style={{ padding: 28 }}>
    <div style={{ width: 44, height: 44, borderRadius: 14, background: color, marginBottom: 18 }}/>
    <h4 style={{ fontFamily: "var(--display)", fontSize: 22, marginBottom: 8 }}>{title}</h4>
    <p style={{ color: "var(--ink-soft)", margin: 0, fontSize: 15 }}>{text}</p>
  </div>
);

const DaySnapshot = () => {
  const blocks = [
    { t: "07:30", c: "#ddab88", h: "Ankommen", d: "Weicher Start mit Kuscheldecke und Tee" },
    { t: "09:00", c: "#eacb2c", h: "Morgenkreis", d: "Lieder, Wetter, was heute wichtig ist" },
    { t: "10:00", c: "#a1c480", h: "Freies Spielen", d: "Drinnen, draußen, matschig, laut" },
    { t: "12:00", c: "#c3651d", h: "Mittagessen", d: "Gemeinsam kochen, decken, essen" },
    { t: "13:30", c: "#c8a9ce", h: "Ruhezeit", d: "Schlafen oder leise Geschichten" },
    { t: "15:00", c: "#93acd1", h: "Projekte", d: "Werkstatt, Atelier, Bewegung" },
  ];
  return (
    <section>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
          <div>
            <span className="eyebrow">Ein Tag bei KIDS</span>
            <h2 style={{ maxWidth: 600 }}>Genug Zeit. Für alles, was zählt.</h2>
          </div>
          <p style={{ maxWidth: 420, color: "var(--ink-soft)", margin: 0 }}>
            Unser Tag hat einen festen Rhythmus – und viel Luft dazwischen. Denn Kinder brauchen
            beides: Struktur und das Gefühl, nicht gehetzt zu werden.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }} className="day-grid">
          {blocks.map((b, i) => (
            <div key={i} className="day-block" style={{ position: "relative" }}>
              <div style={{ background: b.c, borderRadius: 20, aspectRatio: "1/1.1", padding: 18, display: "flex", flexDirection: "column", justifyContent: "space-between", color: "var(--ink)" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, fontWeight: 700, background: "rgba(255,255,255,.5)", padding: "3px 8px", borderRadius: 999, alignSelf: "flex-start" }}>{b.t}</span>
                <div>
                  <div style={{ fontFamily: "var(--display)", fontSize: 22, lineHeight: 1.1 }}>{b.h}</div>
                  <div style={{ fontSize: 13, marginTop: 6, opacity: .8 }}>{b.d}</div>
                </div>
              </div>
              {i < blocks.length - 1 && (
                <svg viewBox="0 0 60 20" style={{ position: "absolute", right: -18, top: "40%", width: 36, display: "none" }} className="day-arrow">
                  <path d="M2,10 L56,10 M46,4 L56,10 L46,16" fill="none" stroke="var(--sand)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Values = () => (
  <section style={{ background: "var(--lila)", position: "relative", overflow: "hidden" }}>
    <Blob fill="rgba(251,246,239,.3)" style={{ position: "absolute", width: 380, top: -80, right: -80 }}/>
    <Dots color="rgba(251,246,239,.4)" cols={6} rows={4} style={{ position: "absolute", width: 140, bottom: 40, left: 40 }}/>
    <div className="container" style={{ position: "relative" }}>
      <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
        <span className="eyebrow" style={{ color: "var(--orange)" }}>Unsere Werte</span>
        <h2 style={{ color: "var(--ink)" }}>Drei einfache Sätze,<br/>die alles leiten.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="values-grid">
        {[
          { n: "01", t: "Jedes Kind ist schon ganz.", d: "Wir sehen Kinder nicht als unfertige Erwachsene, sondern als Menschen mit eigenen Ideen, Grenzen und Stärken." },
          { n: "02", t: "Lernen passiert im Tun.", d: "Wir lehren wenig, begleiten viel. Was ein Kind selbst entdeckt, bleibt. Was wir erklären, verfliegt." },
          { n: "03", t: "Gemeinschaft braucht alle.", d: "Kinder, Eltern, Erzieher:innen – wir sind ein Dorf. Und ein Dorf funktioniert nur, wenn jede:r mit macht." },
        ].map((v, i) => (
          <div key={i} style={{ background: "var(--cream)", borderRadius: 32, padding: 32, position: "relative" }}>
            <div style={{ fontFamily: "var(--display)", fontSize: 56, lineHeight: 1, color: "var(--orange)", marginBottom: 16 }}>{v.n}</div>
            <h4 style={{ fontFamily: "var(--display)", fontSize: 28, marginBottom: 12 }}>{v.t}</h4>
            <p style={{ color: "var(--ink-soft)", margin: 0 }}>{v.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomeCTA = ({ onNavigate }) => (
  <section>
    <div className="container">
      <div style={{ background: "var(--orange)", borderRadius: 48, padding: "72px 56px", position: "relative", overflow: "hidden", color: "white" }}>
        <Sun color="rgba(234,203,44,.6)" style={{ position: "absolute", width: 280, top: -60, right: -60 }}/>
        <Leaf fill="rgba(251,246,239,.2)" stripe="rgba(255,255,255,.4)" style={{ position: "absolute", width: 160, bottom: -30, right: "14%", transform: "rotate(-20deg)" }}/>
        <div style={{ position: "relative", maxWidth: 640 }}>
          <span className="eyebrow" style={{ color: "var(--gelb)" }}>Noch Plätze frei</span>
          <h2 style={{ color: "white", marginBottom: 18 }}>Komm vorbei. Schau dich um.<br/>Fühl, ob wir passen.</h2>
          <p style={{ color: "rgba(255,255,255,.9)", fontSize: 18, maxWidth: 520 }}>
            Einmal im Monat öffnen wir unsere Türen für Familien, die uns kennenlernen möchten.
            Kein Bewerbungsgespräch – nur Kaffee, Kekse und viele ehrliche Fragen.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
            <a href="#kontakt" onClick={(e)=>{e.preventDefault();onNavigate("kontakt")}} className="btn" style={{ background: "white", color: "var(--orange)" }}>Anmeldung starten →</a>
            <a href="#kontakt" onClick={(e)=>{e.preventDefault();onNavigate("kontakt")}} className="btn" style={{ background: "transparent", color: "white", border: "2px solid rgba(255,255,255,.5)" }}>Zum Tag der offenen Tür</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Home = ({ onNavigate, heroVariant }) => (
  <>
    {heroVariant === "typo" && <HeroTypo onNavigate={onNavigate}/>}
    {heroVariant === "formen" && <HeroFormen onNavigate={onNavigate}/>}
    {heroVariant === "foto" && <HeroFoto onNavigate={onNavigate}/>}
    <IntroBand/>
    <DaySnapshot/>
    <Values/>
    <HomeCTA onNavigate={onNavigate}/>
  </>
);

Object.assign(window, { Home });
