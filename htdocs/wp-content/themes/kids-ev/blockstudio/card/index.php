<?php
$classes = ['kids-card'];
if ($a['variant'] && $a['variant'] !== 'plain') {
    $classes[] = 'kids-card--' . $a['variant'];
}
if ($a['sticky']) {
    $classes[] = 'kids-card--sticky';
}
?>
<div useBlockProps class="<?php echo esc_attr(implode(' ', $classes)); ?>">

	<?php kids_render_deko($a['deko']); ?>

	<InnerBlocks tag="div" />

</div>
