# Datenschutzerklärung

Pflichtseite nach DSGVO. Ziel: transparent beschreiben, welche Daten wie verarbeitet werden. Footer-Link von jeder Seite.

## Inhalte (Mindestumfang für eine One-Pager-Website)

1. **Verantwortlicher** - Verein, Kontakt (siehe [impressum.md](impressum.md))
2. **Datenschutz-Ansprechperson** - je nach Größe ggf. externe DSB; sonst Vorstand / benannte Person
3. **Server-Logs** - Hoster, was geloggt wird (IP, Zeitstempel, User-Agent), Speicherdauer, Rechtsgrundlage
4. **Cookies** - welche, Zweck, Dauer; bei Tracking-Cookies **Einwilligung** (Cookie-Banner) nötig
5. **Kontaktformular** - welche Daten, wohin, Speicherdauer
6. **Bewerbungen (Jobs-Seite)** - Bewerbungsdaten: Speicherdauer, Löschung nach Absage, ggf. Aufnahme in Bewerberpool nur mit Einwilligung
7. **Analytics** - nur mit Consent. Empfehlung: **Plausible** oder **Matomo** mit anonymisierter IP, ohne Cookies - dann keine Einwilligung nötig
8. **Karten** - DSGVO-Aspekte bei Google Maps / OSM (siehe [kontakt.md](kontakt.md))
9. **Social-Media-Verlinkungen** - Verlinkung ja / Einbettung: welche Plugins?
10. **Wiki-Verlinkung** - wohin führt sie (Subdomain? externes Tool?), was erheben die?
11. **Rechte der Nutzer:innen** - Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit, Beschwerderecht (zuständige Aufsichtsbehörde benennen)

## Erstellung

**Empfehlung:** mit einem Generator starten (z. B. eRecht24, Datenschutz-Generator von Dr. Schwenke, activeMind), dann **manuell prüfen und an unseren konkreten Stack anpassen**. Generierte Texte enthalten oft Absätze zu Diensten, die wir gar nicht nutzen (Facebook-Pixel, Google Analytics, …) - alles Überflüssige raus, sonst wirkt die Seite unseriös und verwirrt Leser:innen.

**Fachliche Prüfung** empfohlen, wenn:
- Es einen Newsletter gibt
- Bewerbungen per Online-Formular eingehen
- Kinderfotos auf der Seite sind
- Externe Dienste eingebunden sind, die Daten verarbeiten (Maps, Fonts-CDN, Video-Einbettungen)

## Bildmaterial

Keins. Rein textlich.

## URL

`/datenschutz`

## Offene Fragen

- [ ] Hoster / Infrastruktur final festgelegt? (beeinflusst den Text zu Server-Logs)
- [ ] Analytics ja/nein? Welches Tool?
- [ ] Werden Fonts selbst gehostet (DSGVO-konform) oder von einem CDN geladen?
- [ ] Gibt es eine benannte Datenschutzansprechperson?
- [ ] Wird die Datenschutzerklärung juristisch geprüft?
