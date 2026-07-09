<section useBlockProps class="section sponsors-section">
	<div class="container">

		<div class="section__head sponsors__head">
			<?php if ($a['eyebrow']) { ?>
				<p class="eyebrow"><?php echo $a['eyebrow']; ?></p>
			<?php } ?>
			<h2><?php echo $a['heading']; ?></h2>
			<?php if ($a['lead']) { ?>
				<p class="sponsors__lead"><?php echo $a['lead']; ?></p>
			<?php } ?>
		</div>

		<?php if ($a['sponsors']) { ?>
			<ul class="sponsors-grid">
				<?php foreach ($a['sponsors'] as $sponsor) {
                    if (empty($sponsor['logo']['url'])) {
                        continue;
                    }
                    $name = $sponsor['name'] ?: ($sponsor['logo']['alt'] ?? ''); ?>
				<li class="sponsors-grid__item">
					<a <?php if (empty($isEditor) && !empty($sponsor['url'])) { ?>href="<?php echo esc_url($sponsor['url']); ?>"<?php } ?>
						target="_blank" rel="noopener noreferrer"
						aria-label="Logo <?php echo esc_attr($name); ?>">
						<img src="<?php echo esc_url($sponsor['logo']['url']); ?>"
							alt="Logo <?php echo esc_attr($name); ?>"
							loading="lazy" decoding="async">
					</a>
				</li>
				<?php } ?>
			</ul>
		<?php } ?>

	</div>
</section>
