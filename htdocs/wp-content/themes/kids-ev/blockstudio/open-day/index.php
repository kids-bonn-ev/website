<?php
$button = bs_get_group($a, 'panel_button');

// Termine aus dem Repeater in fertige Anzeige-Werte übersetzen. Wochentag,
// Tagesziffer und Monatskürzel kommen aus dem Datum (Locale = Site-Sprache),
// damit im Editor nur Datum + Uhrzeit gepflegt werden müssen.
$termine = [];

// "13:30" → "13:30", "9:5" → "09:05", alles andere → "" (Feld bleibt leer).
$parse_time = static function (mixed $value): string {
    return sscanf(trim((string) $value), '%2d:%2d', $h, $m) === 2 && $h < 24 && $m < 60
        ? sprintf('%02d:%02d', $h, $m)
        : '';
};

foreach ($a['termine'] ?: [] as $termin) {
    $day = trim((string) ($termin['date'] ?? ''));
    if ($day === '') {
        continue;
    }

    $date = date_create_immutable($day, wp_timezone());
    if (!$date) {
        continue;
    }

    $from = $parse_time($termin['time_from'] ?? '');
    $to = $parse_time($termin['time_to'] ?? '');
    $stamp = $date->getTimestamp();

    if ($from && $to) {
        $span = $from . ' – ' . $to . ' Uhr';
    } elseif ($from) {
        $span = 'ab ' . $from . ' Uhr';
    } else {
        $span = '';
    }

    $termine[] = [
        'datetime' => $date->format('Y-m-d') . ($from ? 'T' . $from : ''),
        'num' => wp_date('j', $stamp),
        'mon' => rtrim(wp_date('M', $stamp), '.'), // de_DE liefert "Nov." — im Badge ohne Punkt
        'day' => wp_date('l, d.m.', $stamp),
        'span' => $span,
    ];
}
?>
<div useBlockProps class="kids-open-day">

	<?php kids_render_deko($a['deko']); ?>

	<div class="kids-open-day__inner">

		<div class="kids-open-day__lead">
			<InnerBlocks tag="div" template="<?php echo esc_attr(wp_json_encode(array(
                array('core/paragraph', array('className' => 'is-style-eyebrow')),
                array('core/heading', array('level' => 2)),
                array('core/paragraph'),
            ))); ?>" />
		</div>

		<aside class="kids-open-day__panel" aria-label="<?php echo esc_attr($a['panel_eyebrow'] ?: 'Termine'); ?>">

			<?php if ($a['panel_eyebrow']) { ?>
				<p class="kids-open-day__panel-eyebrow"><?php echo $a['panel_eyebrow']; ?></p>
			<?php } ?>

			<?php if ($a['panel_text']) { ?>
				<p class="kids-open-day__panel-sub"><?php echo $a['panel_text']; ?></p>
			<?php } ?>

			<?php if ($termine) { ?>
				<ul class="kids-open-day__termine">
					<?php foreach ($termine as $termin) { ?>
						<li class="kids-open-day__termin">
							<time datetime="<?php echo esc_attr($termin['datetime']); ?>">
								<span class="kids-open-day__termin-badge" aria-hidden="true">
									<span class="kids-open-day__termin-num"><?php echo esc_html($termin['num']); ?></span>
									<span class="kids-open-day__termin-mon"><?php echo esc_html($termin['mon']); ?></span>
								</span>
								<span class="kids-open-day__termin-text">
									<span class="kids-open-day__termin-day"><?php echo esc_html($termin['day']); ?></span>
									<?php if ($termin['span']) { ?>
										<span class="kids-open-day__termin-time"><?php echo esc_html($termin['span']); ?></span>
									<?php } ?>
								</span>
							</time>
						</li>
					<?php } ?>
				</ul>
			<?php } ?>

			<?php if (!empty($button['label'])) { ?>
				<div class="kids-open-day__panel-ctas">
					<a class="btn btn--primary" <?php if (empty($isEditor)) { ?>href="<?php echo esc_url($button['url'] ?? ''); ?>"<?php } ?>>
						<?php echo $button['label']; ?>
					</a>
				</div>
			<?php } ?>

			<?php if ($a['panel_foot']) { ?>
				<p class="kids-open-day__panel-foot"><?php echo $a['panel_foot']; ?></p>
			<?php } ?>

		</aside>

	</div>

</div>
