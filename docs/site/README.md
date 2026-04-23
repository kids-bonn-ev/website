# Website-Struktur

Die KIDS e.V. Website ist bewusst schlank: **ein One-Pager** als Hauptseite plus wenige Subpages. Für Detail-Inhalte verlinken wir nach außen ins **Wiki** - dort liegt der tiefe Content (Konzept, Tagesablauf, Satzung, Formulare, interner Kram).

## Zielgruppen

| Priorität | Zielgruppe | Haupt-Landingpunkt |
| --- | --- | --- |
| 1 | **Eltern mit Kita-Platz-Interesse** | Startseite / One-Pager |
| 2 | **Pädagogische Fachkräfte** (Mitarbeiter:innen) | Subpage „Jobs @ KIDS" |

Die Website dient primär der **Gewinnung** beider Gruppen. Bestehende Mitglieder und interne Abläufe laufen über das Wiki.

## Seitenübersicht

| Seite | URL | Datei | Zweck |
| --- | --- | --- | --- |
| **Startseite (One-Pager)** | `/` | [pages/startseite.md](pages/startseite.md) | Alles Wesentliche: Vorstellung, Konzept-Teaser, Alltag-Teaser, Mitmachen, Jobs-Teaser |
| Jobs @ KIDS | `/jobs` | [pages/jobs.md](pages/jobs.md) | Employer Branding + offene Stellen |
| Kontakt | `/kontakt` | [pages/kontakt.md](pages/kontakt.md) | Adresse, Anfahrt, Kontaktformular |
| Impressum | `/impressum` | [pages/impressum.md](pages/impressum.md) | Pflichtseite |
| Datenschutz | `/datenschutz` | [pages/datenschutz.md](pages/datenschutz.md) | Pflichtseite |

Das ist die **vollständige Seitenliste**. Alles andere → **Wiki**.

## Wiki - wofür, wie verlinken

Das Wiki ist das **inhaltliche Backbone** des Vereins. Die Website verweist dorthin, wenn's in die Tiefe geht.

**Wiki-URL (Root):** <https://docs.kids-bonn.de/docs/f5f02dd9-0071-4b55-8301-8d6ee5411431/>

**Beispiele für Deep-Links ins Wiki** (aus Sektionen der Startseite):
- Pädagogisches Konzept im Detail
- Tagesablauf, Essen, Schließzeiten
- Kosten, Ämter, Mitgliedsbeitrag
- Satzung, Protokolle, Formulare
- FAQ, Anmeldung als PDF

**Zur Zeit:** Root-URL als Fallback nutzen. Konkrete Deep-Links pro Sektion pflegt das KIDS-Team sobald die Wiki-Struktur steht - in den jeweiligen Seiten-Dokumenten als TBD markiert.

**Link-Konvention:** Links ins Wiki werden in der UI optisch kenntlich gemacht (z. B. kleines externes-Link-Icon), damit User:innen wissen, dass sie die Website verlassen.

## Navigation

**Haupt-Nav (im Header, überall sichtbar):**

```
[Logo]   Konzept  ·  Alltag  ·  Mitmachen  ·  Jobs  ·  Kontakt
```

- `Konzept`, `Alltag`, `Mitmachen`, `Kontakt` → **Anker** auf der Startseite (`/#konzept`, `/#alltag`, `/#mitmachen`, `/#kontakt`)
- `Jobs` → **Subpage** (`/jobs`)

Auf Mobile: Hamburger / Off-Canvas.

Von Subpages (Jobs, Kontakt, Impressum, Datenschutz) führen alle Nav-Links zurück auf die Startseite + Anker.

**Footer (alle Seiten):**

- Impressum · Datenschutz · Wiki (extern)
- Kleines Logo, ggf. Social-Media-Icons

## Technische Offene Punkte

- [ ] **Technologie-Stack** festlegen. Für einen One-Pager mit 4 Subpages reicht ein sehr schlanker Ansatz:
  - **Astro** - sehr wenig JS, perfekt für diese Art Seite
  - **Nuxt / Next** - wenn Vue / React bevorzugt
  - **Hugo / Eleventy** - rein statisch, minimal
  - Für den Umfang ist **Astro** aktuell die naheliegendste Wahl (Inhalte als Markdown, Komponenten nur wo nötig, hervorragende Performance).
- [ ] **Hosting:** Netlify, Vercel, Cloudflare Pages (alle für statische Seiten + Formulare gut). Für DSGVO-Sensibilität ggf. Uberspace oder eigener Server.
- [ ] **Domain** festlegen.
- [ ] **Kontaktformular-Backend** - Formspree / Netlify Forms / eigener Mailer? DSGVO im Blick.
- [ ] **Wiki-URL** dokumentieren und in Platzhalter einfüllen.
- [ ] **Analytics?** - Empfehlung: Plausible / Matomo ohne Cookies, damit kein Cookie-Banner nötig wird.

## Konventionen für Seiten-Markdown

Jede Seite in `pages/` folgt dem Muster:

```markdown
# Seitentitel

## Ziel der Seite
Wofür ist sie da, wen sprechen wir an?

## Seitenaufbau / Inhalte
Die Sektionen / Texte, ggf. mit TBD.

## Bildmaterial
Welche Bilder / Deko passen wo?

## Meta / SEO
Title, Description, OG-Image, ggf. Schema.org.

## Offene Fragen
Was muss geklärt werden, bevor live?
```
