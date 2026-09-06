<div useBlockProps class="feature-grid">

	<div class="feature-grid__head">
		<?php if ($a['eyebrow']) { ?>
			<p class="eyebrow"><?php echo $a['eyebrow']; ?></p>
		<?php } ?>
		<h2><?php echo $a['heading']; ?></h2>
		<?php if ($a['lead']) { ?>
			<p class="feature-grid__lead"><?php echo $a['lead']; ?></p>
		<?php } ?>
	</div>

	<InnerBlocks tag="div" class="feature-grid__grid" template="<?php echo esc_attr(wp_json_encode(array(
        array('kids/feature-card'),
        array('kids/feature-card'),
        array('kids/feature-card'),
        array('kids/feature-card'),
    ))); ?>" />

</div>
