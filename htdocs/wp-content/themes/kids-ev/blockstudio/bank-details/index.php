<dl useBlockProps class="bank-details">
	<?php foreach ($a['rows'] ?: [] as $row) {
        if (empty($row['label'])) {
            continue;
        } ?>
	<div>
		<dt><?php echo $row['label']; ?></dt>
		<dd><?php if (!empty($row['mono'])) { ?><code><?php echo $row['value']; ?></code><?php } else {
            echo $row['value'];
        } ?></dd>
	</div>
	<?php } ?>
</dl>
