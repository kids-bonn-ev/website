# KIDS e.V. - Website Dokumentation

Diese Dokumentation beschreibt die neue Website des **KIDS e.V.** (Elterninitiative).
Sie dient als gemeinsame Grundlage für alle Personen und Agenten, die an der Website arbeiten: Inhalte, Struktur, Design-System, Brand-Assets.

## Struktur dieser Dokumentation

```
docs/
├── README.md                 ← Du bist hier
├── brand/                    ← Brand-System: Farben, Logos, Typografie, Deko
│   ├── README.md
│   ├── colors.md
│   ├── logos.md
│   ├── typography.md
│   └── decorative.md
└── site/                     ← Inhaltliche Struktur der Website
    ├── README.md
    └── pages/                ← Eine Datei pro Seite mit Inhalt + Bildplan
```

Die Binärdateien (Logos, Fonts, Deko-PNGs/EPS) liegen in [../assets](../assets).

## Quick Links

- **Brand-System im Überblick** → [brand/README.md](brand/README.md)
- **Farbpalette (offiziell aus Brandingsheet)** → [brand/colors.md](brand/colors.md)
- **Logo-Varianten und Einsatzregeln** → [brand/logos.md](brand/logos.md)
- **Typografie (Maybug MS)** → [brand/typography.md](brand/typography.md)
- **Dekoelemente / Störer** → [brand/decorative.md](brand/decorative.md)
- **Seitenstruktur der Website** → [site/README.md](site/README.md)

## Quellen

- **Brandingsheet:** [../assets/brand-source/Brandingsheet-KIDSev.pdf](../assets/brand-source/Brandingsheet-KIDSev.pdf) - maßgebliche Quelle für Farben, Logo-Varianten und Einsatzbeispiele.
- **Rohe Farbcodes aus Designer-Lieferung:** [../assets/brand-source/KIDS_Logo_Farbcodes.txt](../assets/brand-source/KIDS_Logo_Farbcodes.txt) - älter, Werte teils abweichend (siehe Hinweis in [brand/colors.md](brand/colors.md)).
- **Gestaltung durch:** zartmint.de

## Hinweise für Agenten / Mitwirkende

- Die Website ist ein **One-Pager** (Startseite) mit den Subpages **Jobs**, **Kontakt**, **Impressum**, **Datenschutz** - mehr nicht. Details gehen ins **Wiki** (externe Verlinkung).
- **Zwei Zielgruppen:** (1) **Eltern** mit Kita-Platz-Interesse, (2) **pädagogische Fachkräfte** als potenzielle Mitarbeiter:innen.
- **Sprache:** Deutsch, freundlich, nahbar, klar. Keine Behördensprache.
- **Kinderthematik:** Fotos von Kindern nur mit expliziter Freigabe (DSGVO). Im Zweifel Illustrationen/Deko-Elemente statt Fotos.
- **Struktur-Änderungen** an Seiten: bitte direkt in `docs/site/pages/` pflegen, damit alle Beteiligten auf demselben Stand sind.
- **Neuer Content, der in die Tiefe geht:** im Zweifel **ins Wiki**, nicht auf die Website. Auf der Website nur Teaser + Link.
