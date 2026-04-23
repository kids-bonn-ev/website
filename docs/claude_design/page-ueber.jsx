// Über uns / Konzept

const Ueber = ({ onNavigate }) => (
  <>
    <section style={{ paddingTop: 60, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
      <Sun color="rgba(234,203,44,.5)" style={{ position: "absolute", width: 260, top: -40, right: -40 }}/>
      <div className="container">
        <span className="eyebrow">Über uns</span>
        <h1 style={{ maxWidth: 900 }}>
          Kein Konzept vom<br/>
          Reißbrett – sondern<br/>
          <span style={{ color: "var(--gruen)" }}>aus 28 Jahren</span> Alltag.
        </h1>
        <p className="lead" style={{ maxWidth: 640, marginTop: 28 }}>
          1998 haben sich sieben Familien gefragt: Wo bringen wir unsere Kinder hin,
          wo sie einfach Kind sein dürfen? Die Antwort haben sie sich selbst gebaut.
          Heute sind es 40 Kinder, aber die Idee ist gleich geblieben.
        </p>
      </div>
    </section>

    <section className="tight">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="two-col">
          <div style={{ background: "var(--pfirsich)", borderRadius: 32, aspectRatio: "4/3", position: "relative", overflow: "hidden" }}>
            <Leaf fill="var(--cream)" stripe="var(--pfirsich)" style={{ position: "absolute", width: "45%", top: "12%", left: "10%", transform: "rotate(-10deg)" }}/>
            <Blob fill="var(--orange)" style={{ position: "absolute", width: "55%", bottom: "-15%", right: "-10%" }}/>
            <span style={{ position: "absolute", right: 18, bottom: 14, fontFamily: "ui-monospace, monospace", fontSize: 11, color: "rgba(255,255,255,.85)", background: "rgba(0,0,0,.2)", padding: "4px 10px", borderRadius: 999 }}>[ Foto: Hausfassade ]</span>
          </div>
          <div style={{ alignSelf: "center" }}>
            <h2 style={{ marginBottom: 20 }}>Unser Haus.</h2>
            <p>
              Eine alte Remise in einem Hinterhof in Berlin-Mitte, umgebaut zu einem hellen,
              warmen Ort mit drei Spielräumen, einer großen Küche und einem Garten, den die Kinder
              mitpflegen.
            </p>
            <p>
              Jeder Raum hat eine eigene Persönlichkeit: der <strong>Waldraum</strong> für ruhiges Spielen,
              die <strong>Werkstatt</strong> für lautes Bauen, das <strong>Atelier</strong> für matschige Kunst.
              Alles ist so eingerichtet, dass Kinder selbstständig handeln können.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {["400m² Garten","3 Gruppenräume","Eigene Küche","Werkstatt","Atelier","Ruheraum"].map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "var(--cream-2)", borderRadius: 999, fontSize: 14, fontWeight: 700 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--orange)" }}/>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section style={{ background: "var(--gruen)", position: "relative", overflow: "hidden" }}>
      <Dots color="rgba(251,246,239,.5)" cols={8} rows={3} style={{ position: "absolute", width: 200, top: 40, right: 40 }}/>
      <div className="container" style={{ position: "relative" }}>
        <div style={{ maxWidth: 700, marginBottom: 56 }}>
          <span className="eyebrow" style={{ color: "var(--ink)" }}>Pädagogisches Konzept</span>
          <h2>Offen, situativ,<br/>reggio-inspiriert.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="values-grid">
          {[
            { t: "Das Kind ist Akteur.", d: "Unsere Erzieher:innen sind Begleiter:innen, keine Lehrer:innen. Wir stellen Fragen, statt Antworten zu geben." },
            { t: "Der Raum ist Pädagoge.", d: "Wir richten jeden Raum so ein, dass er Kinder zum Handeln einlädt – mit echten Werkzeugen, nicht mit Plastik." },
            { t: "Projekte statt Programm.", d: "Was die Kinder beschäftigt, wird zum Thema. Ein Regenwurm im Garten kann drei Wochen Projekt sein." },
            { t: "Portfolios, keine Noten.", d: "Wir dokumentieren, was ein Kind kann und liebt – in einem eigenen Buch, das es mitnimmt." },
            { t: "Natur, jeden Tag.", d: "Bei jedem Wetter raus. Es gibt kein falsches Wetter, nur falsche Kleidung (die wir gerne leihen)." },
            { t: "Demokratie üben.", d: "Kinderrat jeden Freitag. Wo gehen wir hin? Was essen wir? Was ärgert uns? Stimmen zählen gleich." },
          ].map((p, i) => (
            <div key={i} style={{ background: "var(--cream)", borderRadius: 28, padding: 28 }}>
              <h4 style={{ fontFamily: "var(--display)", fontSize: 24, marginBottom: 10 }}>{p.t}</h4>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, margin: 0 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 48, alignItems: "center" }} className="two-col">
          <div style={{ position: "relative", aspectRatio: "1/1" }}>
            <div style={{ position: "absolute", inset: 0, background: "var(--gelb)", borderRadius: "50%" }}/>
            <Sun color="var(--orange)" style={{ position: "absolute", width: "90%", top: "5%", left: "5%" }}/>
          </div>
          <div>
            <span className="eyebrow">Elterninitiative</span>
            <h2 style={{ marginBottom: 20 }}>Ein Verein, getragen<br/>von allen.</h2>
            <p>
              KIDS e.V. gehört keinem Träger, keiner Kirche, keiner Firma – sondern uns allen.
              Jede Familie ist Mitglied im Verein, bringt 3–5 Stunden Mitarbeit pro Monat ein
              und entscheidet bei den großen Fragen mit.
            </p>
            <p>
              Das klingt nach viel. Ist es auch. Aber Eltern sagen uns immer wieder: Es ist der
              Grund, warum sich KIDS nicht wie ein Kindergarten, sondern wie <em>unser</em> Kindergarten anfühlt.
            </p>
            <a href="#wie" onClick={(e)=>{e.preventDefault();onNavigate("wie")}} className="btn btn-ghost" style={{ marginTop: 16 }}>
              Wie Mitarbeit funktioniert →
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

// Wie funktioniert der KIDS?

const Wie = ({ onNavigate }) => (
  <>
    <section style={{ paddingTop: 60, paddingBottom: 40 }}>
      <div className="container">
        <span className="eyebrow">Wie funktioniert der KIDS?</span>
        <h1 style={{ maxWidth: 900 }}>
          Hinter jedem guten<br/>
          Kindergarten steckt<br/>
          ein <span style={{ color: "var(--orange)" }}>großes Miteinander</span>.
        </h1>
        <p className="lead" style={{ maxWidth: 640, marginTop: 24 }}>
          Als Elterninitiative leben wir nach ein paar klaren Regeln. Hier ist alles,
          was du wissen solltest – egal, ob du dein Kind anmelden möchtest oder überlegst,
          bei uns zu arbeiten.
        </p>
      </div>
    </section>

    <section className="tight">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 72 }} className="pillars">
          {[
            { c: "#ddab88", n: "40", l: "Kinder in 2 Gruppen" },
            { c: "#c8a9ce", n: "8", l: "Erzieher:innen" },
            { c: "#a1c480", n: "1:5", l: "Betreuungsschlüssel" },
            { c: "#eacb2c", n: "28", l: "Jahre Elterninitiative" },
          ].map((p, i) => (
            <div key={i} style={{ background: p.c, borderRadius: 28, padding: 28, aspectRatio: "1/1", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ fontFamily: "var(--display)", fontSize: 72, lineHeight: 0.9, color: "var(--ink)" }}>{p.n}</div>
              <div style={{ fontSize: 14, fontWeight: 800 }}>{p.l}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 720, marginBottom: 40 }}>
          <h2>So läuft die Anmeldung.</h2>
          <p className="lead">Vom ersten Interesse bis zum Eingewöhnungstag – in fünf Schritten.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { n: "01", t: "Du schickst uns das Anmeldeformular.", d: "Online oder per Post. Reicht eine halbe Seite – wir wollen keinen Roman, wir wollen euch kennenlernen." },
            { n: "02", t: "Wir laden euch zum Tag der offenen Tür ein.", d: "Einmal im Monat, samstags. Kinder können spielen, Eltern können fragen, alle können bleiben solange sie mögen." },
            { n: "03", t: "Kennenlerngespräch – 45 Minuten.", d: "Mit zwei Erzieher:innen und einem Elternteil aus dem Vorstand. Kein Test, sondern ein ehrliches Gespräch." },
            { n: "04", t: "Platzzusage + Vertrag.", d: "Wenn beide Seiten Lust haben, klären wir Vertragsdetails, Start, Eingewöhnung und Elternstunden." },
            { n: "05", t: "Eingewöhnung, nach Berliner Modell.", d: "Drei bis sechs Wochen, ganz im Tempo deines Kindes. Nie unter Druck, nie mit der Uhr." },
          ].map((s, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr auto", gap: 24, padding: "24px 28px", background: "white", borderRadius: 24, alignItems: "center" }} className="step">
              <div style={{ fontFamily: "var(--display)", fontSize: 48, lineHeight: 1, color: "var(--orange)" }}>{s.n}</div>
              <div>
                <h4 style={{ fontFamily: "var(--display)", fontSize: 22, marginBottom: 4 }}>{s.t}</h4>
                <p style={{ color: "var(--ink-soft)", margin: 0, fontSize: 15 }}>{s.d}</p>
              </div>
              <div style={{ width: 40, height: 40, borderRadius: 999, background: "var(--cream-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ background: "var(--blau)", position: "relative", overflow: "hidden" }}>
      <Squiggle color="rgba(251,246,239,.4)" style={{ position: "absolute", width: 300, top: 60, right: -40 }}/>
      <div className="container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, alignItems: "center" }} className="two-col">
          <div>
            <span className="eyebrow" style={{ color: "var(--ink)" }}>Elternmitarbeit</span>
            <h2>3–5 Stunden im Monat.<br/>Das war's.</h2>
            <p>
              Jede Familie bringt sich mit Zeit ein – aber nicht irgendwie. Du wählst zu Beginn
              des Jahres einen Bereich, der zu dir passt.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              { t: "Garten & Hof", d: "Beete pflegen, Laub harken, Feste vorbereiten." },
              { t: "Feste & Events", d: "Sommerfest, Laternenumzug, Eltern-Frühstück." },
              { t: "Haus & Technik", d: "Kleine Reparaturen, Wäsche, Einkäufe." },
              { t: "Vorstand", d: "Buchhaltung, Personal, Strategie – für Langjährige." },
            ].map((r, i) => (
              <div key={i} style={{ background: "var(--cream)", borderRadius: 20, padding: 20 }}>
                <h4 style={{ fontFamily: "var(--display)", fontSize: 20, marginBottom: 6 }}>{r.t}</h4>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0 }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div style={{ maxWidth: 700, marginBottom: 40 }}>
          <span className="eyebrow">Für neue Mitarbeiter:innen</span>
          <h2>Du möchtest bei uns arbeiten?</h2>
          <p className="lead">Das hier macht KIDS als Arbeitgeber anders.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="values-grid">
          {[
            { c: "#a1c480", t: "Entscheiden mit.", d: "Keine Träger-Hierarchie. Pädagogische Entscheidungen trifft das Team – gemeinsam." },
            { c: "#eacb2c", t: "Faire Bezahlung.", d: "TVöD SuE S8a. Jahressonderzahlung, 30 Tage Urlaub, zwei Regenerationstage." },
            { c: "#ddab88", t: "Zeit für Reflexion.", d: "Wöchentliche Teamzeit, Supervision, 5 Fortbildungstage pro Jahr." },
            { c: "#c8a9ce", t: "Kleine Gruppe.", d: "20 Kinder pro Gruppe, 4 Erzieher:innen. Zeit für die einzelnen Kinder, nicht nur fürs System." },
            { c: "#93acd1", t: "Alle machen alles.", d: "Du kochst mal mit, gärtnerst mal mit, gestaltest Räume. Nie nur Aufsicht." },
            { c: "#c3651d", t: "Langfristig denken.", d: "Unsere Kolleg:innen bleiben im Schnitt 7 Jahre. Das ist kein Zufall." },
          ].map((v, i) => (
            <div key={i} className="card" style={{ padding: 28 }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: v.c, marginBottom: 16 }}/>
              <h4 style={{ fontFamily: "var(--display)", fontSize: 24, marginBottom: 8 }}>{v.t}</h4>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, margin: 0 }}>{v.d}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <a href="#kontakt" onClick={(e)=>{e.preventDefault();onNavigate("kontakt")}} className="btn btn-primary">Aktuelle Stellen ansehen →</a>
        </div>
      </div>
    </section>
  </>
);

Object.assign(window, { Ueber, Wie });
