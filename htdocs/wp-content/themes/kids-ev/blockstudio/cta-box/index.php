<div useBlockProps class="cta-box">

	<?php kids_render_deko($a['deko']); ?>

	<div class="cta-box__inner">
		<InnerBlocks tag="div" template="<?php echo esc_attr(wp_json_encode(array(
            array('core/paragraph', array('className' => 'is-style-eyebrow')),
            array('core/heading', array('level' => 2)),
            array('core/paragraph'),
            array('kids/button-row'),
        ))); ?>" />
	</div>

</div>
