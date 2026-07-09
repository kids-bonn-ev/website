<?php
$slides = array_values(array_filter($a['slides'] ?: [], fn ($s) => !empty($s['image']['url'])));
if (!$slides) {
    return;
}
?>
<div useBlockProps class="kids-gallery" data-kids-gallery>

	<div class="kids-gallery__viewport" data-kids-gallery-viewport>
		<div class="kids-gallery__container">
			<?php foreach ($slides as $i => $slide) {
                $alt = $slide['alt'] ?: ($slide['image']['alt'] ?? ''); ?>
			<figure class="kids-gallery__slide">
				<img src="<?php echo esc_url($slide['image']['url']); ?>"
					alt="<?php echo esc_attr($alt); ?>"
					loading="<?php echo $i === 0 ? 'eager' : 'lazy'; ?>"
					decoding="async">
			</figure>
			<?php } ?>
		</div>
	</div>

	<button type="button" class="kids-gallery__arrow kids-gallery__arrow--prev" aria-label="Vorheriges Foto" data-kids-gallery-prev>←</button>
	<button type="button" class="kids-gallery__arrow kids-gallery__arrow--next" aria-label="Nächstes Foto" data-kids-gallery-next>→</button>

	<div class="kids-gallery__dots" role="tablist" aria-label="Foto auswählen">
		<?php foreach ($slides as $i => $slide) { ?>
		<button type="button" class="kids-gallery__dot" role="tab"
			aria-label="Foto <?php echo $i + 1; ?> von <?php echo count($slides); ?>"
			data-kids-gallery-dot="<?php echo $i; ?>"></button>
		<?php } ?>
	</div>

</div>
