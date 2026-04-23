# Typografie

## Hauptschrift: Maybug MS

Die Brand-Schrift ist **Maybug MS** in vier Schnitten. Sie ist verspielt und handschriftlich und trägt den kindlichen Charakter der Marke. Dateien liegen in [../../assets/fonts](../../assets/fonts) (`woff2`, `woff`, `ttf`).

| Schnitt | Datei | Charakter | Einsatz |
| --- | --- | --- | --- |
| **Regular** | `MaybugMSRegular.woff2` | Klar, handschriftlich | Mittlere Headlines, Akzent-Labels |
| **Black** | `MaybugMSBlack.woff2` | Kräftig, plakativ | Große Headlines (H1), Logo-Look |
| **Decorative** | `MaybugMSDecorative.woff2` | Verspielt, mit Mustern (Laut Brandingsheet die Hauptschrift) | Hero-Headlines, Logo-nahe Überschriften, Akzente |
| **Handwritten** | `MaybugMSHandwritten.woff2` | Unregelmäßig, handgeschrieben | Zitate, kleine handschriftliche Akzente, Icons |

### Einsatzregeln

- **Niemals für Fließtext.** Maybug ist dekorativ; längere Texte werden in Maybug schwer lesbar.
- **Decorative** ist laut Brandingsheet die Haupt-Brandschrift - aber sparsam, sonst visuell laut.
- **Black** für kräftige Hero-Statements (H1). Ab H2/H3 lieber Regular, um die Hierarchie zu erhalten.
- **Handwritten** nur als „Extra-Zuckerguss" - z. B. ein einzelnes Wort im Hero, eine Signatur.
- **Buchstabenabstand** kann je nach Kontext erhöht werden (Tracking +1–3 %) für luftige Optik.

## Fließtext: Web-Schrift

Maybug ist **nicht** für Fließtext geeignet. Vorschlag für eine komplementäre Web-Schrift:

**Empfehlung: [Nunito](https://fonts.google.com/specimen/Nunito)** oder **[Quicksand](https://fonts.google.com/specimen/Quicksand)**
- Runde, freundliche Formen - harmoniert mit Maybug
- Open Source (SIL Open Font License)
- Via Google Fonts selfhostbar (Datenschutz)

Alternativen:
- **[Inter](https://fonts.google.com/specimen/Inter)** - neutraler, sehr gute Lesbarkeit, weniger „verspielt"
- **[Open Sans](https://fonts.google.com/specimen/Open+Sans)** - robust, Standard

**Offene Entscheidung:** welche Body-Schrift? → in [../site/README.md](../site/README.md) als TBD vermerkt.

## Hierarchie-Vorschlag (Web)

| Rolle | Schrift | Größe (Desktop) | Gewicht |
| --- | --- | --- | --- |
| H1 Hero | Maybug MS Black oder Decorative | 64–80 px | - |
| H1 Seite | Maybug MS Decorative | 44–56 px | - |
| H2 | Maybug MS Regular oder Body-Font Bold | 32–40 px | 700 |
| H3 | Body-Font SemiBold | 24–28 px | 600 |
| Body | Body-Font Regular | 18 px | 400 |
| Small | Body-Font Regular | 14 px | 400 |
| Buttons | Body-Font SemiBold | 16–18 px | 600 |

## Integration in die Website (Beispiel)

```css
@font-face {
  font-family: "Maybug MS Decorative";
  src: url("/fonts/MaybugMSDecorative.woff2") format("woff2"),
       url("/fonts/MaybugMSDecorative.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

/* analog: Black, Regular, Handwritten */

:root {
  --font-display: "Maybug MS Decorative", "Maybug MS Regular", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
}

h1, h2 { font-family: var(--font-display); }
body   { font-family: var(--font-body); }
```

## Lizenz

Die Schrift „Maybug MS" ist Teil der Designlieferung von zartmint.de. **Vor dem Einbinden im Web**: klären, ob die Lizenz Webfont-Nutzung erlaubt und ob die WOFF2-Dateien ohne Einschränkung ausgeliefert werden dürfen. Siehe **Offene Punkte** unten.

## Offene Punkte

- [ ] Lizenz der Maybug MS Schrift für Web klären.
- [ ] Finale Body-Schrift festlegen.
- [ ] Self-Hosting-Setup für Webfonts (Google Fonts datenschutzkonform lokal einbinden).
