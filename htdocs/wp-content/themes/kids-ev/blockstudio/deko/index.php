<?php
if (!$a['name']) {
    return;
}
?>
<img useBlockProps
	src="<?php echo esc_url(kids_deko_src($a['name'])); ?>"
	alt=""
	class="deko<?php echo $a['hide_mobile'] ? ' deko--hide-mobile' : ''; ?>"
	style="<?php echo esc_attr(kids_deko_style($a)); ?>"
	loading="lazy"
	aria-hidden="true">
