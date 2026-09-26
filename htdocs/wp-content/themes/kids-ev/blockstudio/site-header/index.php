<?php
$logo = !empty($a['logo']['url'])
    ? $a['logo']['url']
    : get_theme_file_uri('assets/logos/schriftzug.svg');
$cta = bs_get_group($a, 'cta');
?>
<header useBlockProps class="site-header">
	<div class="container site-header__inner">

		<a <?php if (empty($isEditor)) { ?>href="<?php echo esc_url(home_url('/')); ?>"<?php } ?> class="brand" aria-label="KIDS e.V. Startseite">
			<img src="<?php echo esc_url($logo); ?>" alt="KIDS e.V.">
		</a>

		<input type="checkbox" id="nav-toggle" class="nav-toggle" aria-label="Navigation umschalten">

		<nav class="site-nav" aria-label="Hauptnavigation">
			<ul class="site-nav__list">
				<?php foreach ($a['links'] ?: [] as $link) {
                    if (empty($link['label'])) {
                        continue;
                    }
                    if (!empty($link['sep'])) { ?>
					<li class="site-nav__sep" aria-hidden="true"></li>
					<?php }
                    $dot = !empty($link['dot']) && $link['dot'] !== 'none' ? $link['dot'] : ''; ?>
				<li>
					<?php /* Label ohne umgebenden Whitespace: sonst rendert der
					         Farbpunkt (::before) ein zusätzliches Leerzeichen. */ ?>
					<a <?php if (empty($isEditor)) { ?>href="<?php echo esc_url($link['url'] ?? ''); ?>"<?php } ?>
						<?php if ($dot) { ?>class="site-nav__dot site-nav__dot--<?php echo esc_attr($dot); ?>"<?php } ?>><?php echo $link['label']; ?></a>
				</li>
				<?php } ?>
			</ul>
		</nav>

		<?php if (!empty($cta['label'])) { ?>
			<a class="btn btn--primary btn--sm site-cta" <?php if (empty($isEditor)) { ?>href="<?php echo esc_url($cta['url'] ?? ''); ?>"<?php } ?>>
				<?php echo $cta['label']; ?>
			</a>
		<?php } ?>

		<label for="nav-toggle" class="nav-toggle-label" aria-hidden="true">
			<span></span><span></span><span></span>
		</label>

	</div>
</header>
