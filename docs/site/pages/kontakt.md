# Kontakt

## Ziel der Seite

Klare, direkte Kontaktmöglichkeiten. Menschen sollen schnell sehen, **wie** sie uns erreichen und **wen** sie für welches Anliegen ansprechen.

## Inhalte

### So erreichst du uns

- **KIDS e.V. - Elterninitiative Kindergarten**
- **Adresse:** TBD (Straße, 53XXX Bonn)
- **Telefon:** **0228 478795**
- **E-Mail:** **kita@kids-bonn.de**
- **Öffnungszeiten:** TBD

### Für verschiedene Anliegen

| Anliegen | An wen |
| --- | --- |
| **Platz anfragen / Anmeldung** | Kita-Leitung: Telefon oder E-Mail (s. o.), parallel KITA-NET Bonn |
| **Bewerbung auf Stelle** | siehe [jobs.md](jobs.md) - direkte Ansprechperson dort |
| **Allgemeine Fragen zum Verein** | `info@...` oder Kontaktformular |
| **Presse** | Vorsitz (TBD) |
| **Kurzfristige Abmeldung des Kindes** | Telefon Kita |

### Anfahrt

- **Karte:** statisches OSM-Bild + Link zu Google/Apple Maps, DSGVO-sicher (keine Google-iframe-Einbettung)
- **ÖPNV:** TBD (nächste Haltestellen)
- **Parken:** TBD
- **Fahrrad:** TBD

### Kontaktformular

- Felder: Name, E-Mail, optional Telefon, optional Thema (Dropdown: Platzanfrage / Bewerbung / Presse / Sonstiges), Nachricht
- **DSGVO-Checkbox** mit Link zur Datenschutzerklärung
- **Bestätigungsmail** an Absender:in
- **Spam-Schutz:** Honeypot + Cloudflare Turnstile (DSGVO-konform, kein reCAPTCHA)
- Versand je nach Thema an passende Mailadresse

## Technischer Hinweis: Karten

**Nicht** Google Maps iframe (lädt Google-Skripte ohne Consent → DSGVO-Problem).

Vorschläge:
- **Statisches OSM-Kartenbild** + Link zu Google/Apple Maps für Navigation (einfachste Lösung, empfohlen)
- **Leaflet + OpenStreetMap-Tiles** selbst gehostet (mehr Aufwand, volle Kontrolle)

## Bildmaterial

| Stelle | Was? | Woher? |
| --- | --- | --- |
| Einstieg | Deko-Komposition (Wolke, Welle) oder Foto des Hauseingangs | [../../../assets/decorative](../../../assets/decorative) / TBD |
| Anfahrt | Statisches Kartenbild | generiert |
| Kontaktformular | Deko-Element als Akzent | [../../../assets/decorative](../../../assets/decorative) |

## Meta / SEO

- **Title:** `Kontakt - KIDS e.V. Bonn`
- **Meta-Description:** Adresse, Telefon, Anfahrt - direkter Kontakt.
- **URL:** `/kontakt`
- **Schema.org:** Adresse als Teil von `PreSchool` JSON-LD (auch auf Startseite)

## Offene Fragen

- [ ] Postanschrift vollständig
- [ ] Öffnungszeiten (Bring-/Abholzeiten)
- [ ] Zentrale E-Mail-Adresse (`info@` oder nur `kita@`?)
- [ ] Presse-Kontakt: Vorsitz namentlich? Eigene Mail?
- [ ] Soll das Formular in eine einzelne `info@`-Mail gehen oder nach Thema aufgeteilt?
