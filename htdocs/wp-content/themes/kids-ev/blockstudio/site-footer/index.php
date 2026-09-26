<?php
$logo = !empty($a['logo']['url'])
    ? $a['logo']['url']
    : get_theme_file_uri('assets/logos/schriftzug-schwarz.png');
?>
<footer useBlockProps class="site-footer">

	<div class="container site-footer__top">

		<div class="site-footer__brand">
			<img src="<?php echo esc_url($logo); ?>" alt="KIDS e.V." class="site-footer__logo" loading="lazy" decoding="async">
			<p class="site-footer__contact">
				<?php if ($a['phone']) { ?>
					<a <?php if (empty($isEditor)) { ?>href="tel:<?php echo esc_attr(preg_replace('/[^+\d]/', '', $a['phone'])); ?>"<?php } ?>><?php echo $a['phone']; ?></a><br>
				<?php } ?>
				<?php if ($a['email']) { ?>
					<a <?php if (empty($isEditor)) { ?>href="mailto:<?php echo esc_attr($a['email']); ?>"<?php } ?>><?php echo $a['email']; ?></a>
				<?php } ?>
			</p>
		</div>

		<div class="site-footer__cols">
			<?php foreach (['col1', 'col2', 'col3'] as $colId) {
                $col = bs_get_group($a, $colId);
                if (empty($col['heading'])) {
                    continue;
                } ?>
			<nav aria-label="<?php echo esc_attr($col['heading']); ?>">
				<p class="site-footer__heading"><?php echo $col['heading']; ?></p>
				<ul>
					<?php foreach ($col['links'] ?: [] as $link) {
                        if (empty($link['label'])) {
                            continue;
                        } ?>
					<li>
						<a <?php if (empty($isEditor)) { ?>href="<?php echo esc_url($link['url'] ?? ''); ?>"<?php } ?>
							<?php if (!empty($link['external'])) { ?>target="_blank" rel="noopener" data-external<?php } ?>>
							<?php echo $link['label']; ?>
						</a>
					</li>
					<?php } ?>
				</ul>
			</nav>
			<?php } ?>
		</div>

	</div>

	<div class="container site-footer__bottom">
		<p class="site-footer__meta">© <?php echo date('Y'); ?> KIDS e.V.</p>
		<?php if ($a['signature']) { ?>
			<p class="site-footer__signature"><?php echo $a['signature']; ?></p>
		<?php } ?>
	</div>

</footer>
