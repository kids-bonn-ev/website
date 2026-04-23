# Logos

Alle Logo-Dateien liegen in [../../assets/logos](../../assets/logos). Für Web bitte die **PNG-Varianten** verwenden (EPS sind für Druck). Für den finalen Website-Build werden wir die PNGs idealerweise zu SVGs konvertieren (siehe Offene Punkte unten).

## Varianten im Überblick

| Variante | Einsatz | Datei (RGB, digital) |
| --- | --- | --- |
| **Primär Logo** (Schriftzug) | Standard-Logo überall dort, wo Platz queer-rechteckig ist - Header, Footer, Social Shares | `KIDSev-Logo_Schriftzug(RGB).png` |
| **Sekundär Logo** (Schriftzug + Regenwurm) | Als Charaktervariante für Startseite, „Danke"-Seiten, Hero-Bereiche | `KIDSev-Logo_SchriftzugRegenwurm(RGB).png` |
| **Rund** | Favicon, Profilbilder, Social-Media-Avatare, Stempel-Optik | `KIDSev-Logo_rund(RGB).png` |
| **Regenwurm (solo)** | Charakter / Maskottchen für Deko, Illustrationen, 404-Seiten | `KIDSev-Logo_Regenwurm(RGB).png` |
| **Kinderbanner** | Große Hero-Bilder / Illustrationen mit Kinder-Figuren | `KIDSev-Logo_KinderBanner(RGB).png` |
| **Schriftzug schwarz** | Einfarbiger Druck / monochrome Kontexte | `KIDSev-Logo_Schriftzug(schwarz).png` |
| **Schriftzug weiß** | Dunkle Hintergründe / Foto-Overlays | `KIDSev-Logo_Schriftzug(weiß).png` |

## Einsatzregeln

### Header / Navigation
- **Primär Logo** (Schriftzug, farbig).
- Höhe ca. 40–56 px auf Desktop, min. 32 px auf Mobile.
- Links oben, verlinkt auf Startseite.

### Footer
- **Primär Logo** oder **Rund**, dezent platziert.
- Alternativ: **Schriftzug schwarz** oder **weiß**, je nach Footer-Hintergrund.

### Hero / Startseite
- **Sekundär Logo** (mit Regenwurm) wirkt warmer und charaktervoller als der reine Schriftzug.
- Großzügig Platz drumherum.

### Favicon / PWA-Icons
- **Rund** Logo.
- Muss in kleinen Größen (16/32 px) noch lesbar sein - bei Bedarf vereinfachte Favicon-Version erstellen.

### 404 / Leerzustände
- **Regenwurm (solo)** - passt gut zu verspielten Fehlermeldungen („Hier ist selbst der Regenwurm abgetaucht…").

## Abstände / Schutzraum

Mindestabstand rund ums Logo = Höhe des Buchstabens „K". Andere Elemente (Text, Bildkanten, Buttons) dürfen nicht näher als dieser Abstand liegen.

## Offene Punkte

- [ ] **SVG-Varianten erzeugen.** Die EPS lassen sich zu SVG konvertieren (z. B. via Inkscape oder Illustrator) - für Web deutlich leichter und schärfer.
- [ ] **Farbinvertierte / Monochrome Varianten** für dunkle UI-Modi (falls gewünscht).
- [ ] **Favicon-Set** (ICO, 16/32/180/192/512 px, apple-touch-icon, maskable).
