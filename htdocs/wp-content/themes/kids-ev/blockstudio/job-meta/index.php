<ul useBlockProps class="job-meta">
	<?php foreach ($a['items'] ?: [] as $item) {
        if (empty($item['text'])) {
            continue;
        } ?>
	<li><?php echo $item['text']; ?></li>
	<?php } ?>
</ul>
