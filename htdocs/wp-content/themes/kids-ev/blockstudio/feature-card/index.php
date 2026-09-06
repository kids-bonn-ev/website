<article useBlockProps class="feature-card">

	<?php if ($a['icon']) { ?>
		<img class="feature-card__icon" src="<?php echo esc_url(kids_deko_src($a['icon'])); ?>" alt="" aria-hidden="true">
	<?php } ?>

	<h3><?php echo $a['title']; ?></h3>

	<?php if ($a['text']) { ?>
		<p><?php echo $a['text']; ?></p>
	<?php } ?>

</article>
