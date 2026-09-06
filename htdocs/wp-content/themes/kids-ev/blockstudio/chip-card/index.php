<article useBlockProps class="chip-card">

	<h3><?php echo $a['title']; ?></h3>

	<?php if ($a['subtitle']) { ?>
		<p class="chip-card__sub"><?php echo $a['subtitle']; ?></p>
	<?php } ?>

	<?php if ($a['chips']) { ?>
		<ul class="pill-list pill-list--soft">
			<?php foreach ($a['chips'] as $chip) {
                if (empty($chip['text'])) {
                    continue;
                } ?>
			<li><?php echo $chip['text']; ?></li>
			<?php } ?>
		</ul>
	<?php } ?>

</article>
