<div useBlockProps class="hand-lines">

	<?php if ($a['question']) { ?>
		<p class="hand-lines__line hand-lines__line--q">
			<span class="hand"><?php echo $a['question']; ?></span>
		</p>
	<?php } ?>

	<?php if ($a['answer']) { ?>
		<p class="hand-lines__line hand-lines__line--a">
			<span class="hand"><?php echo $a['answer']; ?></span>
		</p>
	<?php } ?>

</div>
