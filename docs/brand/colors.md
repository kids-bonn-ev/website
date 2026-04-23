# Farbpalette

**Maßgebliche Quelle:** offizielles Brandingsheet (PDF) von zartmint.de - siehe [../../assets/brand-source/Brandingsheet-KIDSev.pdf](../../assets/brand-source/Brandingsheet-KIDSev.pdf).

## Primärfarben (aus Brandingsheet)

| Name | HEX | RGB | CMYK | Einsatz |
| --- | --- | --- | --- | --- |
| **Pfirsich** | `#ddab88` | 221, 171, 136 | 0 / 36 / 41 / 0 | warmer Akzent, Flächen, Hintergrund |
| **Orange** | `#c3651d` | 195, 101, 29 | 0 / 64 / 100 / 0 | Call-to-Action, Highlight |
| **Lila** | `#c8a9ce` | 200, 169, 206 | 14 / 34 / 0 / 0 | sanfter Akzent, Flächen |
| **Gelb** | `#eacb2c` | 234, 203, 44 | 0 / 18 / 92 / 0 | fröhlicher Akzent, Icons |
| **Grün** | `#a1c480` | 161, 196, 128 | 43 / 0 / 55 / 0 | natürlich, Positiv-States |
| **Blau** | `#93acd1` | 147, 172, 209 | 46 / 16 / 6 / 1 | ruhiger Akzent, Flächen |
| **Sandbraun** | `#8e8070` | 142, 128, 112 | 26 / 33 / 39 / 23 | Text, Linien, neutrale UI-Elemente |

> Hinweis: Im Brandingsheet ist die blaue Farbe (#93acd1) fälschlich als „Grün" beschriftet. Im obigen Überblick ist sie als **Blau** geführt - das entspricht ihrem visuellen Eindruck und dem Einsatz im Logo (Buchstabe „e").

## Hinweis zur zweiten Farbquelle

In den Rohdateien liegt zusätzlich eine Textdatei [KIDS_Logo_Farbcodes.txt](../../assets/brand-source/KIDS_Logo_Farbcodes.txt) mit **abweichenden Farbwerten** (leuchtendere, weniger erdige Palette; z. B. Grün `#a2ce91`, Rosa `#f9c7b7`, Rot `#ee7436`).

Die im Textfile als „RGB" ausgewiesenen Zahlen sind tatsächlich **CMYK-Werte** (Werte > 0 und ≤ 100). Die Datei ist vermutlich ein früherer Entwurfsstand.

**Für die Website verwenden wir die Brandingsheet-Palette oben.** Falls Leuchtkraft oder Kontrast Probleme machen, diskutieren wir das bewusst - nicht einfach zurück zur alten Palette wechseln.

## Web-spezifische Verwendung

| Rolle im UI | Vorschlag | Begründung |
| --- | --- | --- |
| Fließtext | `#3a342c` (dunkles Sandbraun, abgeleitet) | Sandbraun `#8e8070` hat zu wenig Kontrast für Body-Text (WCAG AA). |
| Überschriften | `#8e8070` Sandbraun, oder farbige Akzente | |
| Links | `#c3651d` Orange | |
| Primär-Button | `#c3651d` Orange auf Weiß | |
| Sekundär-Button | `#a1c480` Grün oder Outline-Style | |
| Hintergrundflächen | `#ddab88` Pfirsich / `#c8a9ce` Lila sehr dezent (5–15 %) | |
| Fehler / Warnung | `#c3651d` Orange (nicht Rot - passt nicht ins System) | |
| Erfolg | `#a1c480` Grün | |

## Kontrast / Barrierefreiheit

Keine der Primärfarben erreicht WCAG AA auf weißem Hintergrund als 16px-Text außer Orange (`#c3651d`). Das heißt:

- **Fließtext immer in dunklem Ton** (`#3a342c` oder Schwarz) auf Weiß.
- **Farbige Headlines** ok, da groß und fett → dort gilt „Large Text" (WCAG AA = 3:1).
- **Buttons** immer mit ausreichend Kontrast testen (z. B. weiße Schrift auf Orange `#c3651d`).

Vor der Umsetzung: WCAG-Check mit einem Tool wie [contrast-ratio.com](https://contrast-ratio.com).
