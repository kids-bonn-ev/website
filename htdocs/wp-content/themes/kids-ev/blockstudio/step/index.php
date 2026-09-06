<li useBlockProps class="kids-step">
	<div class="kids-step__body">
		<?php if ($a['title']) { ?>
			<h3><?php echo $a['title']; ?></h3>
		<?php } ?>
		<InnerBlocks tag="div" template="<?php echo esc_attr(wp_json_encode(array(
            array('core/paragraph'),
        ))); ?>" />
	</div>
</li>
