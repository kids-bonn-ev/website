<?php if ($a['variant'] === 'split') { ?>

	<div useBlockProps class="section-head--split">

		<div class="section-head__left">
			<?php if ($a['eyebrow']) { ?>
				<p class="eyebrow"><?php echo $a['eyebrow']; ?></p>
			<?php } ?>
			<h2><?php echo $a['heading']; ?></h2>
		</div>

		<div class="section-head__right">
			<?php if ($a['lead']) { ?>
				<p class="section-head__lead"><?php echo $a['lead']; ?></p>
			<?php } ?>
			<InnerBlocks tag="div" class="section-head__link" />
		</div>

	</div>

<?php } else { ?>

	<div useBlockProps class="section__head">

		<?php if ($a['eyebrow']) { ?>
			<p class="eyebrow"><?php echo $a['eyebrow']; ?></p>
		<?php } ?>

		<h2><?php echo $a['heading']; ?></h2>

		<?php if ($a['lead']) { ?>
			<p class="lede"><?php echo $a['lead']; ?></p>
		<?php } ?>

		<InnerBlocks tag="div" />

	</div>

<?php } ?>
