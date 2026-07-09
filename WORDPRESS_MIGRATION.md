# WordPress-Migration: Astro → Block-Theme + Blockstudio

Plan für die Migration der KIDS e.V. Website (`app/`, Astro) nach WordPress.
Ziel: Alle Seiten werden im Gutenberg-Editor aus Blöcken zusammengesetzt.
Custom-Blöcke werden mit dem **Blockstudio-Plugin** (v7.x) gebaut — nach denselben
Konventionen wie im `tideways2026`-Theme (Branch `Blockstudio` in `tideways.com/`).

---

## 1. Zielarchitektur

### Block-Theme `kids-ev`

Das bestehende Skeleton in `htdocs/wp-content/themes/kids-ev/` (klassisch:
`header.php`/`footer.php`/`index.php`) wird durch ein
[Block-Theme](https://wordpress.org/documentation/article/block-themes/) ersetzt:

```
htdocs/wp-content/themes/kids-ev/
├── style.css                  # Theme-Header
├── theme.json                 # Design-Tokens (Farben, Fonts, Spacing) → CSS-Variablen
├── functions.php              # Enqueues, Block-Styles, allowed_block_types, Patterns
├── templates/
│   ├── index.html             # Fallback
│   ├── page.html              # Standard: header part + post-content + footer part
│   ├── page-prose.html        # Schmale Textseite (Impressum, Datenschutz)
│   └── 404.html
├── parts/
│   ├── header.html            # enthält kids/site-header
│   └── footer.html            # enthält kids/site-footer
├── patterns/                  # Seiten- und Sektions-Patterns (PHP-Dateien)
├── assets/
│   ├── css/global.css         # Port von app/src/styles/global.css
│   ├── fonts/                 # Maybug MS (4 Schnitte, woff2/woff) aus app/public/fonts
│   ├── deco/                  # 12 Deko-SVGs + bullet.svg aus app/public/deco
│   └── logos/                 # schriftzug.svg, regenwurm.png, … aus app/public/logos
└── blockstudio/               # ← alle Custom-Blöcke (siehe Abschnitt 3)
    ├── fields/                # wiederverwendbare Field-Extensions
    └── <block-name>/
        ├── block.json
        ├── index.php
        ├── style.css          # optional, wird von Blockstudio automatisch geladen
        └── script.js          # optional (z. B. Galerie)
```

### Blockstudio-Konventionen (wie tideways2026)

- Ein Block = ein Ordner `blockstudio/<name>/` mit `block.json`
  (`"$schema": "https://blockstudio.dev/schema/block"`) und `index.php`.
- Attribute stehen in `block.json` unter `"blockstudio": { "attributes": [...] }`
  und sind im Template als `$a['<id>']` verfügbar; Gruppen via `bs_get_group($a, 'id')`.
- Verschachtelte Inhalte über `<InnerBlocks tag="div" template="..." />` +
  `allowedBlocks` in `block.json`; Wrapper-Element bekommt `useBlockProps`.
- Wiederkehrende Feld-Sets als Extension in `blockstudio/fields/<name>/field.json`,
  eingebunden per `{ "type": "custom/<name>" }` (Vorbild: `custom/margin-bottom`
  in tideways2026).
- Parent/Child-Muster für Repeater-Layouts (Vorbild: `tideways/cols-4` →
  `tideways/cols-4-item`): Container-Block erlaubt nur seinen Item-Block.
- Erlaubte Blöcke im Editor per `allowed_block_types_all`-Filter einschränken
  (Vorbild: `inc/gutenberg.php`), damit Redakteure nur Core-Basics + `kids/*` sehen.

### Composer / Infrastruktur

- Blockstudio wird über das Paket `blockstudio/blockstudio` aus dem regulären packagist.org repo gezogen
- DDEV-Setup existiert bereits (`.ddev/`), Composer-Skeleton ebenfalls.

---

## 2. Design-Tokens → `theme.json`

Aus `app/src/styles/global.css` übernommen:

| Token | Wert | theme.json |
|---|---|---|
| Palette | pfirsich `#ddab88`, orange `#c3651d`, lila `#c8a9ce`, gelb `#eacb2c`, gruen `#a1c480`, blau `#93acd1`, sand `#8e8070` | `settings.color.palette` |
| Text/Flächen | ink `#3a342c`, ink-soft `#6a6357`, bg `#fbf6ef`, bg-cream `#f4ebdb`, bg-sand `#e7d9bf`, accent-soft `#eadfc8`, orange-deep `#8a4513`, link-hover `#a2531a` | `settings.color.palette` |
| Fonts | Maybug MS Decorative / Black / Regular / Handwritten (lokale woff2), Nunito (Body) | `settings.typography.fontFamilies` + `@font-face` in global.css |
| Spacing | s-1…s-10 (0.25rem…8rem) | `settings.spacing.spacingSizes` |
| Radii | sm 0.5rem, md 1rem, lg 1.5rem, pill 999px | `settings.custom.radius.*` |
| Layout | `.container` max-width + padding | `settings.layout.contentSize/wideSize` |

Zusätzlich in `functions.php` registrierte **Block-Styles** (statt eigener Blöcke):

- `core/paragraph`: `eyebrow` (Orange, uppercase), `lede` (groß), `hand` (Handschrift)
- `core/list`: `kids-bullets` (bullet.svg-Aufzählung, wie `.leitbild-list`/`.stelle-list`)
- `core/heading`: Farbvarianten kommen aus der Palette, kein Extra-Style nötig

Und ein **Rich-Text-Format** `kids/highlight` (Editor-Script) für die farbig
markierten Wörter in Headlines (`hero__hl--gruen/orange/blau` mit Unterstreich-Balken).

---

## 3. Block-Inventar

Namespace: `kids/`. Herkunft = Astro-Quelle.

### 3.1 Wiederverwendete Core-Blöcke

| Block | Einsatz |
|---|---|
| `core/paragraph` | Fließtext, eyebrow/lede/hand via Block-Style |
| `core/heading` | h1–h4 überall |
| `core/list` + `core/list-item` | Leitbild-Liste, Stellen-Listen (Style `kids-bullets`) |
| `core/image` | Einzelbilder |
| `core/columns` / `core/column` | 2-spaltige Layouts (Leitbild, Pädagogik, Bewerbung) |
| `core/group` | einfache Wrapper innerhalb von Sektionen |
| `core/html`, `core/shortcode` | Notausgang |
| `core/navigation`, `core/site-logo` | optional im Header/Footer-Part |

### 3.2 Feld-Extensions (`blockstudio/fields/`)

| Extension | Attribute | Zweck |
|---|---|---|
| `custom/section-style` | `background` (radio: default/cream/sand/sand-deep), `spacing` (default/tight) | entspricht `.section--cream/--sand/--sand-deep/--tight`, von `kids/section` genutzt |
| `custom/deko-layer` | Repeater: `name` (select aus 12 SVGs + regenwurm), `size`, `top/right/bottom/left`, `rotate`, `opacity`, `hide_mobile` | Deko-Overlays direkt an Sektions-/Box-Blöcken, ohne einzelne Deko-Blöcke platzieren zu müssen |

### 3.3 Struktur- & Utility-Blöcke

| # | Block | Quelle (Astro) | Felder / InnerBlocks |
|---|---|---|---|
| 1 | `kids/section` | `.section` + Varianten, alle Seiten | `custom/section-style`, `custom/deko-layer`, `anchor` (leitbild, alltag, haus, mitmachen, jobs, kontakt, stellen, quittung); InnerBlocks: alles Erlaubte |
| 2 | `kids/section-head` | `.section__head`, `.tag-head`, `.ei-head` | `variant` (centered / split), `eyebrow`, `heading` (RichText), `lead`; InnerBlocks für Lead-Zeile mit Wiki-Link |
| 3 | `kids/button` | `Button.astro` | `href`, `label`, `variant` (primary/outline/ghost/primary-inverse/outline-inverse), `size` (sm/md/lg), `external` |
| 4 | `kids/button-row` | `.hero__ctas`, `.kommvorbei__ctas` | InnerBlocks: nur `kids/button`; `align` (center/left) |
| 5 | `kids/deko` | `Deko.astro` (freistehend) | wie `custom/deko-layer`, aber als einzeln platzierbarer Block |
| 6 | `kids/wiki-link` | `WikiLink.astro` | `href` (Default Wiki-Root), `label`; gestrichelte Unterstreichung, extern |
| 7 | `kids/card` | `.kontakt-card`, `.kontakt-box`, `.bank-card`, `.anm-direct`, `.apply__side`, `.benefits__item`, `.stelle-card` | `variant` (plain / accent-top / centered / cream / sticky), InnerBlocks frei — deckt alle weißen Karten ab |
| 8 | `kids/pill-list` | `.haus-features`, `.ei-chips`, `.jobs-teaser__points` | Repeater `items[]` (Text), `variant` (light = weiß mit Schatten / soft = beige / dark = dunkel mit Blumen-Icon) |

### 3.4 Hero & Startseite

| # | Block | Quelle | Felder / InnerBlocks |
|---|---|---|---|
| 9 | `kids/hero` | Startseiten-Hero + Seiten-Heros (kennenlernen, kontakt, spenden, jobs, danke) | `variant` (home / page), `custom/deko-layer`; InnerBlocks: `core/heading` (mit `kids/highlight`-Format), `core/paragraph` (lede), `kids/button-row` |
| 10 | `kids/announcement` | „Noch Plätze frei“-Störer (`.freie`, rotierte Karte) | links InnerBlocks (eyebrow, h2, Prosa); rechts Panel-Felder: `panel_eyebrow`, `panel_text`, `panel_button` (Gruppe), `panel_foot` (RichText); `custom/deko-layer` |
| 11 | `kids/feature-grid` | „Was uns besonders macht“ (`.besonders`) | Kopf: `eyebrow`, `heading`, `lead` (sticky links); InnerBlocks: nur `kids/feature-card` |
| 12 | `kids/feature-card` | `.b-card` | `icon` (Deko-Select), `title`, `text` |
| 13 | `kids/day-grid` | „Ein Tag im KIDS“ (`.day-grid`) | InnerBlocks: nur `kids/day-tile`, Template mit 6 Tiles |
| 14 | `kids/day-tile` | `.day-block` | `time`, `title`, `text`, `color` (pfirsich/gelb/gruen/orange/lila/blau), `dark` (toggle für Orange-Kachel) |
| 15 | `kids/chip-card` | Gremien / Arbeitsgruppen (`.ei-block`) | `title`, `subtitle`, Repeater `chips[]` (Text) |
| 16 | `kids/hand-lines` | `.ei-call` (Frage/Antwort in Handschrift) | `question`, `answer` (Frage orange links, Antwort rechts) |
| 17 | `kids/gallery` | `HausGallery.astro` (Embla-Carousel) | Repeater `slides[]` (`files` + alt); `script.js` bündelt Embla (loop, autoplay, dots, arrows, prefers-reduced-motion) |
| 18 | `kids/cta-box` | „Komm vorbei“ (`.kommvorbei`, oranger Kasten) | `custom/deko-layer`; InnerBlocks: eyebrow, h2, Text, `kids/button-row` (inverse Varianten) |
| 19 | `kids/sponsors` | `Sponsoren.astro` | `eyebrow`, `heading`, `lead`; Repeater `sponsors[]` (`logo` files, `name`, `url`) — ersetzt das Astro-Glob über `assets/sponsoren/` |

### 3.5 Kennenlernen / Jobs / Spenden

| # | Block | Quelle | Felder / InnerBlocks |
|---|---|---|---|
| 20 | `kids/steps` | `.anm-steps` (5 Schritte), `.apply__steps` (Bewerbung) | `style` (big-number / circle-badge); InnerBlocks: nur `kids/step` |
| 21 | `kids/step` | `.anm-step`, `.apply__steps li` | `title`, InnerBlocks für Text + optionalen `kids/button` (KITA-NET-Link); Nummer wird automatisch gezählt |
| 22 | `kids/job-meta` | `.stelle-card__meta` | Repeater `items[]` (Text) — „Eintritt · Laufend offen · Teilzeit“-Zeile mit Trennpunkten |
| 23 | `kids/bank-details` | `.bank-details` (Spenden) | Repeater `rows[]` (`label`, `value`, `mono` toggle) für Empfänger/IBAN/BIC |
| 24 | `kids/form-kennenlernen` | Formular auf /kennenlernen | statisches Formular-Markup (Anlass-Radios, Name, E-Mail, Telefon, Kind, Alter-Select, Eintritt-Select, Nachricht, Honeypot); `action` auf den neuen PHP-Handler |
| 25 | `kids/form-spenden` | Formular auf /spenden | Anrede, Name, Adresse, E-Mail, IBAN/BIC, Betrag, Spendenart-Select, Kommentar, Honeypot |

Die Stellen-Karten auf /jobs werden **komponiert** statt als Monolith-Block:
`kids/card` (variant plain) → `core/heading` + `kids/job-meta` + `core/paragraph`
+ `core/columns` mit `core/heading`(h4)/`core/list`(Style kids-bullets) + `kids/button`.
Dafür gibt es ein Pattern (siehe 4), damit neue Stellen per „Pattern einfügen“ entstehen.

### 3.6 Header & Footer (Template Parts)

| # | Block | Quelle | Felder |
|---|---|---|---|
| 26 | `kids/site-header` | `Header.astro` | `logo` (files, Default schriftzug.svg), Repeater `links[]` (`label`, `url`, `dot` select: none/gruen/gelb — für Jobs/Spenden-Punkte), `cta` (Gruppe label/url); sticky, CSS-Checkbox-Burger wie im Original |
| 27 | `kids/site-footer` | `Footer.astro` | `logo`, `phone`, `email`, 3 × Link-Spalten (Gruppe: `heading` + Repeater `links[]`), `signature` („Gemacht mit Elternhand in Bonn.“); © Jahr via PHP |

**Summe: 27 Custom-Blöcke + 2 Feld-Extensions + 4 Block-Styles + 1 Text-Format.**

---

## 4. Patterns (Starter-Inhalte)

Unter `patterns/` (bzw. synced patterns), damit die Seiten schnell aufgebaut und
später erweitert werden können:

- `kids/page-startseite` — komplette Startseite (Hero → Störer → Features → Leitbild
  → Tagesablauf → Elterninitiative → Haus → CTA-Box → Jobs-Teaser → Sponsoren → Kontakt)
- `kids/page-kennenlernen`, `kids/page-kontakt`, `kids/page-spenden`,
  `kids/page-jobs`, `kids/page-danke`
- `kids/pattern-stellenanzeige` — leere Stellen-Karte (siehe 3.5)
- `kids/pattern-leitbild` — 2-Spalter mit kids-bullets-Liste + Wiki-Link
- `kids/pattern-kontakt-teaser` — „Fragt uns. Wir antworten.“-Sektion

---

## 5. Seiten → Block-Mapping

| Seite | Template | Blöcke (Reihenfolge) |
|---|---|---|
| `/` | page | hero(home) · announcement · feature-grid(4× feature-card) · section(cream,#leitbild)+columns+list(kids-bullets)+wiki-link · section(#alltag)+section-head(split)+day-grid(6× day-tile) · section(sand)+section-head(split)+2× chip-card+hand-lines+prosa · section(cream,#haus)+gallery+text+pill-list · section(#mitmachen)+cta-box · section(sand-deep,#jobs)+columns+pill-list(dark)+button · sponsors · section(cream,#kontakt)+section-head+card(centered) |
| `/kennenlernen` | page | hero(page) · section(cream)+section-head+steps(5× step) · section+columns: card(cream,sticky)+form-kennenlernen |
| `/kontakt` | page | hero(page, deko) · section+2× card |
| `/spenden` | page | hero(page, deko) · section+prosa · sponsors · section(cream)+card(bank)+bank-details · section(#quittung)+section-head+form-spenden |
| `/jobs` | page | hero(page, deko)+button-row · section+section-head+6× card(accent-top) · section(cream)+columns (Pädagogik) · section(#stellen)+section-head+2× Stellen-Pattern · section(sand)+section-head+columns: steps(circle-badge)+card (Ansprechperson) |
| `/danke` | page (noindex) | hero(page, deko inkl. regenwurm) + button |
| `/impressum`, `/datenschutz` | page-prose | nur Core-Blöcke (heading/paragraph/list) |

---

## 6. Nicht-Block-Arbeiten

1. **Formular-Handler** (ersetzt `app/src/pages/api/submit.ts`):
   Mu-Plugin `kids-core` mit `admin_post_nopriv_kids_form`-Handler —
   Honeypot-Prüfung (`website`-Feld), Feld-Labels wie in `submit.ts`,
   Versand über die **Resend-API** (HTTP via `wp_remote_post`, API-Key aus
   `.env`/`RESEND_API_KEY`, Absender `website@kids-bonn.de` wie bisher),
   Redirect auf `/danke`.
2. **SEO/Meta**: Title/Description pro Seite (leichtgewichtig via `kids-core`
   oder SEO-Plugin), Open-Graph-Tags, Schema.org-`Preschool`-JSON-LD aus
   `BaseLayout.astro` site-weit im `wp_head`, `noindex` für /danke,
   `robots.txt`, Favicon (SVG), Theme-Color `#c3651d`.
3. **Fonts**: Maybug-woff2 preloaden (Decorative + Black), `@font-face` in global.css.
4. **View Transitions** (Astro `ClientRouter`-Ersatz): das
   `view-transitions`-Plugin wie bei tideways.com einsetzen (progressive
   enhancement — Browser ohne Support bekommen normale Seitenwechsel).
5. **`allowed_block_types_all`-Filter**: Core-Basics + alle `kids/*` freischalten,
   Rest ausblenden.
6. **Medien**: Haus-Fotos (3), Sponsoren-Logos (9), Logos in die Mediathek;
   Deko-SVGs/Fonts bleiben Theme-Assets. `safe-svg`-Plugin für SVG-Uploads.
7. **Redirects/Parität**: URLs bleiben identisch (`/kennenlernen`, `/jobs`, …) —
   nur Permalinks auf Seitennamen stellen; `/api/submit` → neuer Handler-Endpoint.

---

## 7. Migrationsphasen

| Phase | Inhalt | Ergebnis |
|---|---|---|
| **1. Theme-Grundgerüst** | Block-Theme-Skeleton, `theme.json`-Tokens, global.css-Port, Fonts/Deko/Logos kopieren, Templates + leere Parts | Leere Seiten rendern im Site-Editor |
| **2. Basis-Blöcke** | Feld-Extensions, section, section-head, button(-row), deko, wiki-link, card, pill-list; Block-Styles + Highlight-Format | Statische Textseiten (Impressum/Datenschutz) + Grund-Layout möglich |
| **3. Header/Footer** | site-header, site-footer, Parts befüllen | Rahmen komplett |
| **4. Startseiten-Blöcke** | hero, announcement, feature-grid/-card, day-grid/-tile, chip-card, hand-lines, gallery (Embla), cta-box, sponsors | Startseite 1:1 nachgebaut |
| **5. Unterseiten-Blöcke** | steps/step, job-meta, bank-details, Stellen-Pattern | kontakt, jobs, danke fertig |
| **6. Formulare** | form-kennenlernen, form-spenden, kids-core-Handler, /danke-Redirect | kennenlernen + spenden fertig |
| **7. Inhalte & Patterns** | Seiten anlegen, Patterns einspielen, Medien hochladen, Menü/Links prüfen | Alle 8 Seiten inhaltlich vollständig |
| **8. Parität & Launch** | SEO/JSON-LD, Performance (Font-Preload, Lazy Images), a11y-Check (Skip-Link, aria), visueller Abgleich gegen Astro-Site, DNS-Umstellung | Go-Live |

---

## 8. Getroffene Entscheidungen

- **Blockstudio-Bezug**: privates Composer-Repository (wie tideways.com),
  siehe Abschnitt 1.
- **Mail-Versand**: Resend-API weiterverwenden, API-Key als Umgebungsvariable,
  siehe Abschnitt 6.1.
- **Footer**: Custom-Block `kids/site-footer` (pixelgenau), siehe Abschnitt 3.6.
- **View Transitions**: ja, via `view-transitions`-Plugin, siehe Abschnitt 6.4.
