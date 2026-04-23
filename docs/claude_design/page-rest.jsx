// Team, Galerie, News, FAQ, Kontakt pages

const TEAM = [
  { n: "Mira Okonkwo", r: "Leitung & Köchin", c: "#ddab88", f: "Glaubt an warme Mittagessen und warme Worte." },
  { n: "Jan Weigel", r: "Gruppe Sonne", c: "#eacb2c", f: "Waldpädagoge, baut jedes Jahr ein neues Baumhaus." },
  { n: "Linda Sørensen", r: "Gruppe Sonne", c: "#a1c480", f: "Kommt aus Dänemark, bringt Hygge mit." },
  { n: "Tobi Brandt", r: "Gruppe Mond", c: "#93acd1", f: "Musiker. Morgenkreis mit Ukulele ist Pflichttermin." },
  { n: "Fatima El-Said", r: "Gruppe Mond", c: "#c8a9ce", f: "Reggio-Ausbildung, führt das Atelier." },
  { n: "Paul Kern", r: "Springer / Werkstatt", c: "#c3651d", f: "Repariert alles. Auch Gefühle." },
  { n: "Elif Demir", r: "FSJ", c: "#ddab88", f: "Erstes Jahr, größtes Herz." },
  { n: "Bea Köhler", r: "Hauswirtschaft", c: "#a1c480", f: "Macht aus Resten Feste." },
];

const Team = () => (
  <>
    <section style={{ paddingTop: 60, paddingBottom: 20 }}>
      <div className="container">
        <span className="eyebrow">Das Team</span>
        <h1 style={{ maxWidth: 900 }}>Acht Menschen,<br/>die deinem Kind <span style={{ color: "var(--orange)" }}>täglich</span><br/>begegnen.</h1>
        <p className="lead" style={{ maxWidth: 640, marginTop: 24 }}>
          Unser Team ist klein, eng verbunden und bleibt lang. Im Schnitt sieben Jahre – manche
          sind seit der Gründung dabei. Das merken die Kinder. Und wir auch.
        </p>
      </div>
    </section>
    <section className="tight">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="team-grid">
          {TEAM.map((t, i) => (
            <div key={i} style={{ background: "white", borderRadius: 28, padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: t.c, borderRadius: 20, aspectRatio: "1/1", position: "relative", overflow: "hidden" }}>
                <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
                  <circle cx="50" cy="40" r="18" fill="rgba(251,246,239,.85)"/>
                  <path d="M20,90 Q20,60 50,60 Q80,60 80,90 Z" fill="rgba(251,246,239,.85)"/>
                </svg>
                <span style={{ position: "absolute", right: 10, bottom: 10, fontFamily: "ui-monospace, monospace", fontSize: 10, color: "rgba(0,0,0,.5)", background: "rgba(255,255,255,.6)", padding: "2px 7px", borderRadius: 999 }}>foto</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--display)", fontSize: 22, lineHeight: 1.1 }}>{t.n}</div>
                <div style={{ fontSize: 13, color: "var(--orange)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", marginTop: 4 }}>{t.r}</div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: "10px 0 0" }}>{t.f}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section style={{ background: "var(--cream-2)" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 680 }}>
        <span className="eyebrow">Werde Teil des Teams</span>
        <h2>Wir suchen gerade:<br/>eine Erzieher:in (m/w/d)<br/>30–35 h/Woche.</h2>
        <p className="lead" style={{ marginTop: 16 }}>Unbefristet, Gruppe Mond, Start wenn es passt.</p>
        <a href="#kontakt" className="btn btn-primary" style={{ marginTop: 24 }}>Stellenausschreibung lesen →</a>
      </div>
    </section>
  </>
);

// Galerie - abstract palette tiles in a mosaic
const Galerie = () => {
  const tiles = [
    { s: "tall", i: 0, l: "Sommerfest 2025" },
    { s: "wide", i: 1, l: "Atelier: Farbenwoche" },
    { s: "sq", i: 2, l: "Wald-Projekt" },
    { s: "sq", i: 3, l: "Laternenumzug" },
    { s: "wide", i: 4, l: "Neubau Sandkiste" },
    { s: "sq", i: 5, l: "Besuch Imkerei" },
    { s: "tall", i: 6, l: "Morgenkreis" },
    { s: "sq", i: 7, l: "Ernte aus dem Beet" },
    { s: "wide", i: 0, l: "Großeltern-Tag" },
    { s: "sq", i: 2, l: "Kinderrat" },
    { s: "sq", i: 4, l: "Wasserschlacht" },
    { s: "tall", i: 5, l: "Werkstatt: Holzboote" },
  ];
  return (
    <>
      <section style={{ paddingTop: 60, paddingBottom: 20 }}>
        <div className="container">
          <span className="eyebrow">Galerie</span>
          <h1 style={{ maxWidth: 900 }}>Momente aus einem<br/><span style={{ color: "var(--gruen)" }}>KIDS-Jahr</span>.</h1>
          <p className="lead" style={{ maxWidth: 640, marginTop: 24 }}>
            Weil ein Kindergarten besser erzählt als beschrieben wird. Alle Fotos mit Einverständnis
            der Eltern veröffentlicht.
          </p>
        </div>
      </section>
      <section className="tight">
        <div className="container">
          <div className="gallery">
            {tiles.map((t, i) => (
              <div key={i} className={`tile tile-${t.s}`}>
                <AbstractTile idx={t.i} label={t.l} style={{ width: "100%", height: "100%" }}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// News
const News = () => {
  const posts = [
    { d: "12. April", t: "Anmeldephase 26/27 gestartet", c: "#eacb2c", e: "Ab sofort nehmen wir Anmeldungen für das Kita-Jahr 2026/27 entgegen. Die Plätze vergeben wir bis 30. Juni.", tag: "Wichtig" },
    { d: "03. April", t: "Wir suchen Verstärkung", c: "#c3651d", e: "Zum 01.08. suchen wir eine Erzieher:in (30–35h) für die Gruppe Mond. Unbefristet, TVöD.", tag: "Jobs" },
    { d: "28. März", t: "Frühjahrsputz im Garten – Danke!", c: "#a1c480", e: "22 Eltern, 14 Kinder, 6 Stunden. Das neue Hochbeet steht, der alte Sandkasten ist ausgebaggert.", tag: "Verein" },
    { d: "15. März", t: "Projektwoche: Vom Korn zum Brot", c: "#ddab88", e: "Zwei Wochen haben die Kinder Getreide gemahlen, geknetet und gebacken. Fotos und ein Podcast folgen.", tag: "Projekt" },
    { d: "01. März", t: "Neue Öffnungszeiten ab Mai", c: "#93acd1", e: "Aufgrund des neuen Schließzeitenkonzepts passen wir die Öffnungszeiten geringfügig an.", tag: "Info" },
    { d: "21. Februar", t: "Fasching: Das waren wir.", c: "#c8a9ce", e: "Zwei Piraten, vier Drachen, ein Wolkenkratzer. Rückblick mit den besten Kostümen.", tag: "Aktion" },
  ];
  return (
    <>
      <section style={{ paddingTop: 60, paddingBottom: 20 }}>
        <div className="container">
          <span className="eyebrow">Aktuelles</span>
          <h1 style={{ maxWidth: 900 }}>Was gerade<br/>bei uns <span style={{ color: "var(--orange)" }}>passiert</span>.</h1>
        </div>
      </section>
      <section className="tight">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: 20 }} className="news-grid">
            {posts.map((p, i) => (
              <article key={i} className={`news-card ${i === 0 ? "news-feat" : ""}`} style={{ background: i === 0 ? p.c : "white", borderRadius: 28, padding: 28, display: "flex", flexDirection: "column", gap: 16, gridColumn: i === 0 ? "span 1" : "auto", gridRow: i === 0 ? "span 2" : "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "var(--ink-soft)" }}>{p.d}</span>
                  <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", background: i === 0 ? "rgba(255,255,255,.4)" : "var(--cream-2)", padding: "4px 10px", borderRadius: 999 }}>{p.tag}</span>
                </div>
                {i === 0 && (
                  <div style={{ aspectRatio: "16/9", borderRadius: 18, background: "rgba(255,255,255,.3)", position: "relative", overflow: "hidden" }}>
                    <Sun color="rgba(195,101,29,.6)" style={{ position: "absolute", width: "70%", top: "-10%", right: "-10%" }}/>
                    <Leaf fill="rgba(251,246,239,.8)" stripe={p.c} style={{ position: "absolute", width: "35%", bottom: "10%", left: "15%" }}/>
                  </div>
                )}
                <h3 style={{ fontFamily: "var(--display)", fontSize: i === 0 ? 32 : 22, lineHeight: 1.1, marginTop: "auto" }}>{p.t}</h3>
                <p style={{ color: i === 0 ? "var(--ink)" : "var(--ink-soft)", fontSize: 15, margin: 0 }}>{p.e}</p>
                <a href="#" style={{ fontWeight: 800, color: "var(--orange)", fontSize: 14 }}>Weiterlesen →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// FAQ
const FAQ = () => {
  const groups = [
    { h: "Anmeldung & Plätze", items: [
      { q: "Ab welchem Alter nehmt ihr Kinder auf?", a: "Ab 1 Jahr bis zum Schuleintritt. Neue Kinder starten meistens im August oder September." },
      { q: "Wie lange im Voraus muss ich mein Kind anmelden?", a: "Wir empfehlen 6–12 Monate. Die Anmeldephase für das jeweils folgende Kita-Jahr öffnet im April." },
      { q: "Gibt es eine Warteliste?", a: "Ja. Geschwisterkinder und Kinder von Vereinsmitgliedern haben Vorrang, dann entscheidet eine Mischung aus Dringlichkeit, Alter und Passung." },
      { q: "Was kostet ein Platz?", a: "Die Betreuung wird über das Land Berlin finanziert. Zusätzlich zahlst du 23 €/Monat Essensgeld und 10 €/Monat Vereinsbeitrag." },
    ]},
    { h: "Alltag", items: [
      { q: "Was müssen wir mitbringen?", a: "Matschhose, Gummistiefel, Wechselsachen und einen Hausschuh. Spielzeug bleibt zuhause – mit Ausnahme von Kuscheltieren zum Mittagsschlaf." },
      { q: "Gibt es einen Mittagsschlaf?", a: "Für alle Kinder, die ihn brauchen. Keine Pflicht, kein Verbot. Wer nicht schläft, hat eine leise Stunde." },
      { q: "Was passiert bei Krankheit?", a: "Fieberfrei, 24 h beschwerdefrei – dann gerne wieder. Bei Infektionskrankheiten gelten die RKI-Regeln." },
    ]},
    { h: "Eltern & Verein", items: [
      { q: "Wie viel muss ich als Eltern mitarbeiten?", a: "3–5 Stunden pro Monat, flexibel verteilt. Zusätzlich zweimal im Jahr ein Samstag für Garten- oder Bauprojekte." },
      { q: "Was, wenn ich wirklich keine Zeit habe?", a: "Sprich mit uns. Wir finden für (fast) jede Situation eine Lösung – manchmal ist es auch ein finanzieller Ausgleich." },
      { q: "Wie werden Entscheidungen getroffen?", a: "Pädagogik entscheidet das Team. Wirtschaftliches entscheidet der Vorstand. Große Richtungsfragen entscheidet die Mitgliederversammlung." },
    ]},
  ];
  return (
    <>
      <section style={{ paddingTop: 60, paddingBottom: 20 }}>
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h1 style={{ maxWidth: 900 }}>Die häufigsten Fragen,<br/><span style={{ color: "var(--gruen)" }}>ehrlich beantwortet</span>.</h1>
        </div>
      </section>
      <section className="tight">
        <div className="container" style={{ maxWidth: 880 }}>
          {groups.map((g, gi) => (
            <div key={gi} style={{ marginBottom: 48 }}>
              <h3 style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 14, height: 14, borderRadius: 4, background: ["var(--orange)","var(--gruen)","var(--lila)"][gi] }}/>
                {g.h}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {g.items.map((it, i) => <FAQItem key={i} q={it.q} a={it.a}/>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ background: "white", borderRadius: 20, overflow: "hidden" }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: "100%", background: "transparent", border: "none", padding: "22px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left", cursor: "pointer", fontFamily: "var(--body)", fontSize: 17, fontWeight: 700, color: "var(--ink)" }}>
        <span>{q}</span>
        <span style={{ width: 32, height: 32, borderRadius: 999, background: open ? "var(--orange)" : "var(--cream-2)", color: open ? "white" : "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, transition: "all .2s", transform: open ? "rotate(45deg)" : "none" }}>+</span>
      </button>
      {open && (
        <div style={{ padding: "0 24px 22px", color: "var(--ink-soft)", fontSize: 15 }}>{a}</div>
      )}
    </div>
  );
};

// Kontakt / Anmeldung
const Kontakt = () => (
  <>
    <section style={{ paddingTop: 60, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
      <Sun color="rgba(234,203,44,.4)" style={{ position: "absolute", width: 300, top: -60, right: -60 }}/>
      <Blob fill="rgba(161,196,128,.35)" style={{ position: "absolute", width: 320, bottom: -80, left: -80 }}/>
      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow">Anmeldung & Kontakt</span>
          <h1>Sag einfach Hallo.</h1>
          <p className="lead" style={{ marginTop: 20 }}>
            Egal ob Anmeldung, Bewerbung oder du willst einfach mal gucken – wir melden uns
            innerhalb von zwei Werktagen zurück.
          </p>
        </div>
      </div>
    </section>
    <section className="tight">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 40 }} className="two-col">
          <form className="card" style={{ padding: 40 }} onSubmit={(e) => { e.preventDefault(); alert("Danke! Das ist ein Prototyp – wir haben deine Nachricht natürlich nicht wirklich erhalten 🙂"); }}>
            <h3 style={{ marginBottom: 8 }}>Schreib uns.</h3>
            <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>Alle Felder außer der Nachricht sind Pflicht.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Dein Name" ph="Jana Berger"/>
              <Field label="E-Mail" ph="jana@beispiel.de" type="email"/>
            </div>
            <div style={{ marginTop: 16 }}>
              <label style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, display: "block" }}>Worum geht's?</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Platz anfragen","Stelle / Bewerbung","Tag der offenen Tür","Presse","Sonstiges"].map((t, i) => (
                  <label key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", background: "var(--cream-2)", borderRadius: 999, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                    <input type="radio" name="topic" defaultChecked={i === 0} style={{ accentColor: "var(--orange)" }}/>
                    {t}
                  </label>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <label style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, display: "block" }}>Nachricht</label>
              <textarea rows={5} placeholder="Erzähl uns, was du wissen möchtest…" style={{ width: "100%", fontFamily: "var(--body)", fontSize: 16, padding: 16, border: "2px solid var(--cream-2)", borderRadius: 16, resize: "vertical", background: "var(--cream)" }}/>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: 24 }}>Absenden →</button>
          </form>

          <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <ContactBox c="#ddab88" h="Kommst du vorbei?" p={<>Sonnenstraße 42<br/>10115 Berlin-Mitte<br/><span style={{ fontSize: 13, color: "var(--ink-soft)" }}>U Rosenthaler Platz, 4 Min zu Fuß</span></>}/>
            <ContactBox c="#a1c480" h="Sprich mit uns." p={<>030 123 456 78<br/>Mo – Fr, 9 – 14 Uhr</>}/>
            <ContactBox c="#93acd1" h="Oder per Mail." p={<>hallo@kids-ev.de<br/><span style={{ fontSize: 13, color: "var(--ink-soft)" }}>Wir antworten in 2 Werktagen.</span></>}/>
          </aside>
        </div>
      </div>
    </section>
  </>
);

const Field = ({ label, ph, type = "text" }) => (
  <div>
    <label style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, display: "block" }}>{label}</label>
    <input required type={type} placeholder={ph} style={{ width: "100%", fontFamily: "var(--body)", fontSize: 16, padding: "14px 16px", border: "2px solid var(--cream-2)", borderRadius: 14, background: "var(--cream)" }}/>
  </div>
);

const ContactBox = ({ c, h, p }) => (
  <div style={{ background: c, borderRadius: 28, padding: 28 }}>
    <h4 style={{ fontFamily: "var(--display)", fontSize: 24, marginBottom: 8 }}>{h}</h4>
    <div style={{ fontSize: 16, color: "var(--ink)", lineHeight: 1.5 }}>{p}</div>
  </div>
);

Object.assign(window, { Team, Galerie, News, FAQ, Kontakt });
