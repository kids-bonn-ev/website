<?php
// Die Styles liegen wegen der bullet.svg/blume02.svg-Pfade in assets/css/global.css.
$variant = $a['variant'] ?: 'light';
?>
<ul useBlockProps class="pill-list pill-list--<?php echo esc_attr($variant); ?>">
	<?php foreach ($a['items'] ?: [] as $item) {
        if (empty($item['text'])) {
            continue;
        } ?>
		<li><?php echo $item['text']; ?></li>
	<?php } ?>
</ul>
