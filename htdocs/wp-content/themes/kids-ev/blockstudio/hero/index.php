<?php
$classes = ['kids-hero', 'kids-hero--' . ($a['variant'] ?: 'page')];
if ($a['align_hero'] === 'left') {
    $classes[] = 'kids-hero--left';
}
?>
<section useBlockProps class="<?php echo esc_attr(implode(' ', $classes)); ?>">

	<?php kids_render_deko($a['deko']); ?>

	<div class="container kids-hero__inner">
		<InnerBlocks tag="div" template="<?php echo esc_attr(wp_json_encode(array(
            array('core/heading', array('level' => 1)),
            array('core/paragraph', array('className' => 'is-style-lede')),
            array('kids/button-row', array('align_row' => 'center')),
        ))); ?>" />
	</div>

</section>
