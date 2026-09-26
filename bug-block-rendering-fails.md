# Bug-Snapshot: WordPress-Migration rendert Blöcke nicht

Stand: 2026-08-01, Branch `Wordpress-Migration`.
Ausgangslage: <https://kids-ev-website.ddev.site:8443/wordpress/> zeigte im Frontend
rohes Markup wie `<!– wp:kids/section-head`, `<!– wp:kids/feature-card`,
`<!– wp:kids/announcement` statt gerenderter Blöcke. Vergleich gegen die
Astro-Live-Site <https://www.kids-bonn.de/>.

---

## Zusammenfassung

Es waren **zwei unabhängige Fehler**. Beide sind gefunden und behoben.

| # | Fehler | Status |
|---|---|---|
| 1 | KSES zerlegt Block-Kommentare beim Seeding | **behoben** |
| 2 | Attribute lagen flach statt unter `blockstudio.attributes` | **behoben** |

Der Blockstudio-Setup als solcher ist **nicht** das Problem: alle 27 `kids/*`-Blöcke
sind registriert (`NOT registered: none`), das Theme ist aktiv, das Plugin läuft.

---

## Fehler 1 — KSES zerlegt Block-Kommentare (behoben)

### Symptom

Im Frontend erschienen `<!– wp:kids/announcement {„panel_eyebrow“:…` als Text.
Die En-Dashes und die typografischen Anführungszeichen kommen von `wptexturize()`,
das auf den bereits escapten Text angewendet wurde — d. h. der Block-Kommentar
lag schon **in der Datenbank** escaped vor:

```
&lt;!-- wp:kids/announcement {&quot;panel_eyebrow&quot;:&quot;Klingt gut?&quot;,…
```

### Ursache

Zwei Dinge zusammen:

1. **Pattern-Quelle:** In `htdocs/wp-content/themes/kids-ev/patterns/*.php` enthielt
   das Attribut-JSON der Block-Delimiter rohes HTML — z. B.
   `{"heading":"Fragt uns.<br>Wir antworten."}` oder
   `{"text":"Eintritt: <strong>ab sofort</strong>"}`.
   Gutenbergs eigener Serializer (`@wordpress/blocks` → `serializeAttributes`)
   escaped genau diese Zeichen als `\u003c`, `\u003e`, `\u0026`, `\u0022` und `--`
   als `\u002d\u002d`. Das war hier nicht passiert, weil die Patterns von Hand
   geschrieben wurden.

2. **Seed-Skript:** `scripts/seed-pages.php` lief ohne angemeldeten Benutzer.
   Damit greift `current_user_can('unfiltered_html') === false`, KSES ist auf
   `content_save_pre` aktiv, und `wp_kses_split2()` behandelt einen Kommentar mit
   rohem `<` nicht mehr als Kommentar — der Delimiter wird zu `&lt;!-- … --&gt;`
   entwertet. Belegt durch:

   ```php
   wp_filter_post_kses('<!-- wp:kids/x {"a":"Text <strong>b</strong>"} -->')
   // → &lt;!-- wp:kids/x {&quot;a&quot;:&quot;Text <strong>b</strong>\"} --&gt;
   ```

   Nebenwirkung: der zugehörige Closer `<!-- /wp:kids/announcement -->` verschwand
   ganz, und ein `style="background-color:rgba(0,0,0,0)"` an einem `<mark>` wurde
   von KSES gestrippt.

Betroffen waren 8 Block-Instanzen: startseite 5, jobs 2, spenden 1.

### Fix

**a) Patterns Gutenberg-konform escaped** (7 Dateien, 21 Delimiter). Ein
Einmal-Skript liegt unter
`/tmp/claude-501/-var-www-html/3afcc866-b638-4d3d-8af4-0ea4ff6235d0/scratchpad/fix-patterns.php`;
es schützt `<?php … ?>`-Spans (die in `kids/gallery` und `kids/sponsors` für
`kids_attachment_id()` im JSON stehen) und wendet auf den Rest die
Gutenberg-Ersetzungen an. Beispiel-Diff:

```diff
-{"eyebrow":"Kontakt","heading":"Fragt uns.<br>Wir antworten."}
+{"eyebrow":"Kontakt","heading":"Fragt uns.\u003cbr\u003eWir antworten."}
```

Dabei wurde nebenbei ein latenter Bug in `page-kontakt.php` mitbehoben:
`…/maps/search/?api=1&query=…` → `\u0026query=` (KSES hätte daraus `&amp;query=`
gemacht).

**b) `scripts/seed-pages.php`** bekommt zwei Änderungen:

- `kses_remove_filters();` direkt nach den `require`s.
- `'post_content' => wp_slash($content)` — `wp_insert_post()` erwartet geslashte
  Daten und hätte sonst die Backslashes der `\u003c`-Escapes gefressen.

### Verifikation

Nach `php scripts/seed-pages.php`:

```
startseite     OK    roundtrip:ja  escaped:0  unknown:0  leftover-markup:0
kennenlernen   OK    roundtrip:ja  escaped:0  unknown:0  leftover-markup:0
kontakt        OK    roundtrip:ja  escaped:0  unknown:0  leftover-markup:0
spenden        OK    roundtrip:ja  escaped:0  unknown:0  leftover-markup:0
jobs           OK    roundtrip:ja  escaped:0  unknown:0  leftover-markup:0
danke          OK    roundtrip:ja  escaped:0  unknown:0  leftover-markup:0
impressum      OK    roundtrip:ja  escaped:0  unknown:0  leftover-markup:0
datenschutz    OK    roundtrip:ja  escaped:0  unknown:0  leftover-markup:0
```

`roundtrip:ja` = gerendertes Pattern und `post_content` in der DB sind byte-identisch.
Alle 8 Seiten liefern per HTTP `raw-markup:0`, das rohe `<!– wp:` ist weg.

Prüfskript: `…/scratchpad/verify.php`.

---

## Fehler 2 — Attribute lagen flach statt unter `blockstudio.attributes` (behoben)

### Symptom

Die Blöcke wurden geparst und ihre Wrapper gerendert, aber **alle Attributwerte
fehlten** — `<h2></h2>`, kein Eyebrow, kein Lead, leeres Announcement-Panel.
Core-Blöcke und InnerBlocks rendern dagegen korrekt.

### Ursache

Blockstudio liest die Attributwerte **nicht** von der obersten Ebene des
Block-Kommentars, sondern aus einem verschachtelten `blockstudio`-Objekt.
`Blockstudio\Block::transform()` in
`htdocs/wp-content/plugins/blockstudio/includes/classes/block.php:1156`:

```php
$attributes = array_merge(
    $attr ?? array(),                                   // Defaults aller Schema-Keys
    $attributes['blockstudio']['attributes'] ?? array() // ← die echten Werte
);
```

Die von Hand geschriebenen Patterns benutzten die flache Form
`{"eyebrow":"Kontakt"}`. Damit war `blockstudio.attributes` leer, jedes Feld
fiel auf seinen Default zurück, und `transform_attributes()` setzte leere Werte
anschließend auf `false` (`block.php:1013–1022`).

Der Attributfluss davor ist **intakt** — der Verlust passiert erst im Plugin:

| Stufe | `eyebrow` |
|---|---|
| `parse_blocks()` | `'Kontakt'` |
| `WP_Block_Type::prepare_attributes_for_render()` | `'Kontakt'` |
| `WP_Block->attributes` | `'Kontakt'` |
| Filter `blockstudio/blocks/attributes/render` | `false` |

Dass `kids/section` scheinbar funktionierte, war ein Trugschluss: `anchor` ist
ein Core-Support-Attribut und läuft über `get_block_wrapper_attributes()`, und
`background` fiel auf seinen Default `default` zurück, der keine Zusatzklasse
erzeugt.

### Fix

Alle `kids/*`-Delimiter in Patterns und Template-Parts auf die verschachtelte
Form umgestellt:

```diff
-<!-- wp:kids/hero {"align_hero":"left","deko":[…]} -->
+<!-- wp:kids/hero {"blockstudio":{"name":"kids/hero","attributes":{"align_hero":"left","deko":[…]}}} -->
```

Core-Attribute (`anchor`, `className`) bleiben auf oberster Ebene. Das
Konvertierungsskript liegt unter
`/tmp/claude-501/-var-www-html/97a6f04a-4697-42e3-b5be-8a46c2be78b4/scratchpad/nest-attrs.php`;
es liest das registrierte Schema (`schema.php` → `schema.json`), um pro Block
zwischen Blockstudio- und Core-Attributen zu unterscheiden, schützt die
`<?php … ?>`-Spans in `kids/gallery`/`kids/sponsors` und serialisiert wieder
exakt wie Gutenbergs `serializeAttributes()` (`\u003c`, `\u0026`, `\u002d\u002d`, …).
Kein Pattern enthielt unbekannte Attributnamen — die flache Verschachtelung war
der einzige Defekt.

Betroffen: 9 Patterns + `parts/header.html` + `parts/footer.html`.

Ein Blockstudio-Update auf 7.6.5 war dafür **nicht** nötig; installiert bleibt 7.4.2.

### Verifikation

`php scripts/seed-pages.php`, dann pro Seite über HTTP:

```
/              raw:0 empty-headings:0 header-cta:1 footer-sig:1
kennenlernen/  raw:0 empty-headings:0 header-cta:1 footer-sig:1
kontakt/       raw:0 empty-headings:0 header-cta:1 footer-sig:1
spenden/       raw:0 empty-headings:0 header-cta:1 footer-sig:1
jobs/          raw:0 empty-headings:0 header-cta:1 footer-sig:1
danke/         raw:0 empty-headings:0 header-cta:1 footer-sig:1
impressum/     raw:0 empty-headings:0 header-cta:1 footer-sig:1
datenschutz/   raw:0 empty-headings:0 header-cta:1 footer-sig:1
```

Und auf dem gespeicherten `post_content` (`…/scratchpad/verify.php`):

```
startseite     escaped:0  unknown:0  kids-blocks:46  flat-attrs:0
kennenlernen   escaped:0  unknown:0  kids-blocks:13  flat-attrs:0
kontakt        escaped:0  unknown:0  kids-blocks:5   flat-attrs:0
spenden        escaped:0  unknown:0  kids-blocks:9   flat-attrs:0
jobs           escaped:0  unknown:0  kids-blocks:28  flat-attrs:0
danke          escaped:0  unknown:0  kids-blocks:3   flat-attrs:0
impressum      escaped:0  unknown:0  kids-blocks:0   flat-attrs:0
datenschutz    escaped:0  unknown:0  kids-blocks:0   flat-attrs:0
```

`flat-attrs:0` = kein `kids/*`-Block trägt noch Nicht-Core-Attribute auf oberster
Ebene. Stichproben im HTML: Announcement-Panel komplett (inkl. Gruppe
`panel_button_label`/`_url` und escaptem `<strong>`), `deko`-Repeater 5 Motive,
`kids/gallery` 3 Bilder, `kids/sponsors` 9 Logos, `kids/job-meta`, `kids/steps`,
`kids/bank-details`, Header-CTA und Footer-Spalten.

---

## Umgebung / nützliche Befehle

- Wir arbeiten **im DDEV-Web-Container**, Projektwurzel `/var/www/html`.
- WP-Core liegt in einem Unterordner: `wp-cli` braucht
  `cd /var/www/html/htdocs/wordpress`, sonst „This does not seem to be a
  WordPress installation“.
- `siteurl` und `home` stehen beide auf
  `https://kids-ev-website.ddev.site:8443/wordpress` — für die Parität mit der
  Astro-Site müssen die URLs später auf die Root umgestellt werden.
- Seeding: `php scripts/seed-pages.php` (idempotent).
- Unterseiten brauchen den Trailing Slash, sonst 301:
  `curl -sk https://kids-ev-website.ddev.site:8443/wordpress/jobs/`
- Die `wp-cli`- und `wp-load`-Aufrufe rauschen mit
  `Deprecated: auto_detect_line_endings … vendor/vlucas/phpdotenv/src/Loader.php:172`
  zu — harmlos, aber die Ausgabe muss gefiltert werden.

## Geänderte Dateien

```
scripts/seed-pages.php                                       (kses_remove_filters + wp_slash)
htdocs/wp-content/themes/kids-ev/parts/footer.html           (Fehler 2)
htdocs/wp-content/themes/kids-ev/parts/header.html           (Fehler 2)
htdocs/wp-content/themes/kids-ev/patterns/kontakt-teaser.php
htdocs/wp-content/themes/kids-ev/patterns/leitbild.php        (Fehler 2)
htdocs/wp-content/themes/kids-ev/patterns/page-danke.php      (Fehler 2)
htdocs/wp-content/themes/kids-ev/patterns/page-jobs.php
htdocs/wp-content/themes/kids-ev/patterns/page-kennenlernen.php
htdocs/wp-content/themes/kids-ev/patterns/page-kontakt.php
htdocs/wp-content/themes/kids-ev/patterns/page-spenden.php
htdocs/wp-content/themes/kids-ev/patterns/page-startseite.php
htdocs/wp-content/themes/kids-ev/patterns/stellenanzeige.php
```

Nicht committet, ebenfalls verändert: `htdocs/wp-content/debug.log` (Rauschen).

## Noch nicht geprüft

- Visueller 1:1-Abgleich gegen <https://www.kids-bonn.de/>.
- Phase 8 aus `WORDPRESS_MIGRATION.md`: SEO/JSON-LD, Font-Preload, a11y.
- Formular-Handler (`kids-core`, Resend-API) wurde nicht angefasst.
