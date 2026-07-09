<?php
$variant = $a['variant'] ?: 'primary';
$size = $a['size'] ?: 'md';
?>
<a useBlockProps
	class="btn btn--<?php echo esc_attr($variant); ?> btn--<?php echo esc_attr($size); ?>"
	<?php if (empty($isEditor)) { ?>href="<?php echo esc_url($a['href']); ?>"<?php } ?>
	<?php if ($a['external']) { ?>target="_blank" rel="noopener" data-external<?php } ?>>
	<?php echo $a['label']; ?>
</a>
