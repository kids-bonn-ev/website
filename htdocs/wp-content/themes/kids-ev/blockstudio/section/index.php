<?php
$classes = ['section'];
if ($a['background'] && $a['background'] !== 'default') {
    $classes[] = 'section--' . $a['background'];
}
if ($a['spacing'] === 'tight') {
    $classes[] = 'section--tight';
}
?>
<section useBlockProps class="<?php echo esc_attr(implode(' ', $classes)); ?>">

	<?php kids_render_deko($a['deko']); ?>

	<div class="container">
		<InnerBlocks tag="div" />
	</div>

</section>
