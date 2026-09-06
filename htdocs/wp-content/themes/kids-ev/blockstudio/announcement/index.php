<?php $button = bs_get_group($a, 'panel_button'); ?>
<div useBlockProps class="kids-announcement">

	<?php kids_render_deko($a['deko']); ?>

	<div class="kids-announcement__inner">

		<div class="kids-announcement__lead">
			<InnerBlocks tag="div" template="<?php echo esc_attr(wp_json_encode(array(
                array('core/paragraph', array('className' => 'is-style-eyebrow')),
                array('core/heading', array('level' => 2)),
                array('core/paragraph'),
            ))); ?>" />
		</div>

		<aside class="kids-announcement__panel" aria-label="<?php echo esc_attr($a['panel_eyebrow'] ?: 'Hinweis'); ?>">

			<?php if ($a['panel_eyebrow']) { ?>
				<p class="kids-announcement__panel-eyebrow"><?php echo $a['panel_eyebrow']; ?></p>
			<?php } ?>

			<?php if ($a['panel_text']) { ?>
				<p class="kids-announcement__panel-sub"><?php echo $a['panel_text']; ?></p>
			<?php } ?>

			<?php if (!empty($button['label'])) { ?>
				<div class="kids-announcement__panel-ctas">
					<a class="btn btn--primary" <?php if (empty($isEditor)) { ?>href="<?php echo esc_url($button['url'] ?? ''); ?>"<?php } ?>>
						<?php echo $button['label']; ?>
					</a>
				</div>
			<?php } ?>

			<?php if ($a['panel_foot']) { ?>
				<p class="kids-announcement__panel-foot"><?php echo $a['panel_foot']; ?></p>
			<?php } ?>

		</aside>

	</div>

</div>
