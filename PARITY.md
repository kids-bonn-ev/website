# Visueller 1:1-Abgleich WordPress ↔ Astro

Stand: 2026-08-02, Branch `Wordpress-Migration`.
Referenz: <https://www.kids-bonn.de/> — Kandidat:
<https://kids-ev-website.ddev.site:8443/wordpress/>

Methodik: Headless-Chromium (Playwright) bei 1440×900, beide Seiten parallel
geladen, `getBoundingClientRect()` je Sektion plus Element-Screenshots und ein
Textvergleich über `innerText`. Skripte liegen im Scratchpad dieser Sitzung
(`measure.mjs`, `shots2.mjs`, `nav.mjs`, `textdiff.mjs`).

## Ergebnis

| Seite | Höhe Original | Höhe WP | Δ |
|---|---:|---:|---:|
| `/` | 7503 | 7505 | +2 |
| `/kennenlernen/` | 3256 | 3248 | −8 |
| `/kontakt/` | 1351 | 1361 | +10 |
| `/spenden/` | 3878 | 3838 | −40 |
| `/jobs/` | 3783 | 4763 | +980 (zusätzliche Stellenanzeige, s. u.) |
| `/impressum/` | 2168 | 2120 | −48 |
| `/datenschutz/` | 11718 | 11702 | −16 |

Auf der Startseite sind alle 11 Sektionen bündig (`x=0 w=1440`) und bis auf
±4 px gleich hoch; `header` und `footer` sind pixelgleich.

## Behoben

### 1. Sektionen waren auf 72 rem eingespannt

`templates/page.html` gab `wp:post-content` das Layout `constrained`. Dadurch
bekam **jede** Sektion `max-width: 72rem; margin-inline: auto` und die
Sektions-Hintergründe (`section--cream`, `--sand`, `--sand-deep`) endeten bei
1152 px statt an der Viewport-Kante. Umgestellt auf `default` (Flow) — die
Blöcke bringen ihren `.container` selbst mit, genau wie `<main>` in Astro.

Der `site-header` selbst war nie betroffen: er misst in beiden Fällen
`x=0 w=1440`.

### 2. blockGap überschrieb die Element-Margins des Ports

WP setzt in jedem Layout-Container `margin-block-start: <blockGap>;
margin-block-end: 0` mit Spezifität (0,1,0) und übersteuert damit die aus Astro
übernommenen `p`/`h*`-Margins. Folge: 24 px Lücken zwischen den Sektionen und
fehlende Absatzabstände.

- `theme.json`: `settings.spacing.blockGap: true` + `styles.spacing.blockGap: "0"`
- `theme.json`: `styles.blocks."core/columns".spacing.blockGap` = `s-6` (2 rem,
  der Gap von `.grid-2`)
- `global.css`: Element-Margins mit gleicher Spezifität zurückgeholt
- `global.css`: `.wp-block-columns { margin-bottom: 0 }` — die Block-Library
  bringt `1.75em` mit, `.grid-2` im Original nicht

### 3. `is-style-kids-bullets`: doppelter Abstand nach dem Lead-in

Das Original umschließt den Listeninhalt mit einem `<span>`; Gutenberg-Listen
tun das nicht. Da `li` ein Flex-Container mit `gap` war, wurden `<strong>` und
Folgetext zu **zwei Flex-Items** — sichtbar als doppeltes Leerzeichen. Bullet
ist jetzt absolut positioniert statt Flex-Item.

### 4. Spaltenverhältnisse und -abstände

Die Patterns hatten die `fr`-Verhältnisse des Originals gerundet:

| Sektion | Original | war | jetzt |
|---|---|---|---|
| `.ei-groups` (Elterninitiative) | `1fr 1.3fr`, gap `s-6` | 40/60 | 43.48/56.52 |
| `.haus` | `1fr 1fr`, gap `s-8` | gap `s-6` | blockGap `s-8` |
| `.jobs-teaser` | `1.3fr 1fr`, gap `s-7` | 60/40, gap `s-6` | 56.52/43.48, blockGap `s-7` |

Die Prozentwerte sind exakt: WP schrumpft `flex-basis`-Prozente proportional um
den Gap, `43.478 % = 1/2.3`.

### 5. Hero: vier Originale, eine Variante

`.hero`, `.kontakt-hero`, `.anm-hero`, `.spenden-hero` und `.jobs-hero`
unterscheiden sich in `padding-block`, `h1`-Margin und Lede-Breite. Der Port
hatte nur `--home`/`--page` (= Werte von `.kontakt-hero`) und vererbte zusätzlich
`text-wrap: pretty` von der Startseite an alle Unterseiten, was den Zeilenumbruch
des Lede-Absatzes veränderte. Ergänzt: `--compact` (kennenlernen, spenden),
`--tall` (jobs), `--lede-wide` (spenden); `text-wrap: pretty` nur noch `--home`.

### 6. `.kids-card--centered`

Wird ausschließlich für den Kontakt-Teaser benutzt und ist damit der Port von
`.kontakt-box`: `padding: var(--s-7)` statt `s-6`, `p { margin-bottom: var(--s-5) }`.

### 7. Fehlender `.prose`-Wrapper auf `/spenden/`

Original: `.spenden-intro > .prose > p` (48 rem außen, 40 rem innen). Im Pattern
fehlte die innere Gruppe, der Fließtext war 768 statt 640 px breit.

### 8. Navigation um 10 px verschoben

Im Header-Template stand das Label auf einer eigenen Zeile. Bei den Links mit
Farbpunkt (`::before`) fällt der Whitespace dadurch **nicht** an den
Zeilenanfang und wird als Leerzeichen gerendert — je 5 px zu breit. Label steht
jetzt ohne umgebenden Whitespace.

## Offen — bewusst nicht geändert

### a) `wptexturize()` verändert Satzzeichen

WP ersetzt im gerenderten Inhalt ` - ` → ` – `, `'` → `’` und `"` → `“`/`”`.
Betrifft 8 Absätze auf `/`, je einen auf `/kontakt/` und `/kennenlernen/`, drei
auf `/spenden/` und den gesamten Datenschutztext. Typografisch ist das die
bessere Variante (die Astro-Seite schließt `„Daten"` mit einem geraden
Anführungszeichen), es ist aber ein Unterschied zur Vorlage. Abschaltbar mit
`remove_filter('the_content', 'wptexturize')`.

### b) `/jobs/`: eine Stellenanzeige mehr

Das Pattern enthält zusätzlich „Köchin / Koch (m/w/d)", die auf der Live-Seite
nicht (mehr) steht. Inhaltliche Frage, kein Rendering-Fehler — deshalb nicht
entfernt.

### c) Restdifferenzen unter einer Zeilenhöhe

`/kontakt/` Hero +8 px, `/spenden/` Intro −16 px und Quittungs-Sektion −24 px.
Teilweise Folge von (a), da die En-Dashes den Zeilenumbruch verschieben.

## Nicht geprüft

- Mobile Breakpoints (nur 1440 px vermessen).
- Interaktion: Galerie-Slider, Burger-Menü, Formulare.
- `/danke/` (auf der Live-Seite nicht erreichbar).
