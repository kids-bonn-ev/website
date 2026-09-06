<article useBlockProps
	class="day-tile<?php echo $a['dark'] ? ' day-tile--dark' : ''; ?>"
	style="--tile: var(--c-<?php echo esc_attr($a['color'] ?: 'pfirsich'); ?>);">

	<?php if ($a['time']) { ?>
		<span class="day-tile__time"><?php echo $a['time']; ?></span>
	<?php } ?>

	<div>
		<h3><?php echo $a['title']; ?></h3>
		<?php if ($a['text']) { ?>
			<p><?php echo $a['text']; ?></p>
		<?php } ?>
	</div>

</article>
