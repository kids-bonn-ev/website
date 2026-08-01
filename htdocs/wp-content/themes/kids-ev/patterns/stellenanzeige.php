<?php
/**
 * Title: Stellenanzeige
 * Slug: kids/pattern-stellenanzeige
 * Categories: kids
 * Description: Leere Stellen-Karte: Titel, Meta-Zeile, Intro, zwei Listen-Spalten und Bewerbungs-Button.
 * Viewport Width: 960
 */
?>
<!-- wp:kids/card -->
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Stellentitel (m/w/d)</h3>
<!-- /wp:heading -->

<!-- wp:kids/job-meta {"blockstudio":{"name":"kids/job-meta","attributes":{"items":[{"text":"Eintritt: \u003cstrong\u003eab sofort\u003c/strong\u003e"},{"text":"Laufend offen"},{"text":"Teil- oder Vollzeit"}]}}} /-->

<!-- wp:paragraph -->
<p>Kurzes Intro zur Stelle: Wen sucht ihr, wofür, was ist das Besondere?</p>
<!-- /wp:paragraph -->

<!-- wp:columns {"className":"stelle-grid"} -->
<div class="wp-block-columns stelle-grid"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Was dich erwartet</h4>
<!-- /wp:heading -->

<!-- wp:list {"className":"is-style-kids-bullets"} -->
<ul class="wp-block-list is-style-kids-bullets"><!-- wp:list-item -->
<li>Erster Punkt</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Zweiter Punkt</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Was du mitbringst</h4>
<!-- /wp:heading -->

<!-- wp:list {"className":"is-style-kids-bullets"} -->
<ul class="wp-block-list is-style-kids-bullets"><!-- wp:list-item -->
<li>Erster Punkt</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Zweiter Punkt</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:group {"className":"stelle-cta","layout":{"type":"default"}} -->
<div class="wp-block-group stelle-cta"><!-- wp:kids/button {"blockstudio":{"name":"kids/button","attributes":{"label":"Jetzt bewerben","href":"mailto:kita@kids-bonn.de"}}} /-->

<!-- wp:paragraph {"className":"stelle-hint"} -->
<p class="stelle-hint">Optionaler Hinweis unter dem Button.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- /wp:kids/card -->
