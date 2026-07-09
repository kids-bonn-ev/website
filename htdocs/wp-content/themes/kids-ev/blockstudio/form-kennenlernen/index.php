<?php
// Im Editor als <div> rendern, damit nichts abgeschickt werden kann.
$tag = empty($isEditor) ? 'form' : 'div';

$alter_optionen = [
    'Unter 1 Jahr', '1 Jahr', '2 Jahre', '3 Jahre', '4 Jahre', '5 Jahre', '6 Jahre',
];
$eintritt_optionen = [
    'Ab sofort',
    'Nächster Januar', 'Nächster Februar', 'Nächster März',
    'Nächster April', 'Nächster Mai', 'Nächster Juni',
    'Nächster Juli', 'Nächster August', 'Nächster September',
    'Nächster Oktober', 'Nächster November', 'Nächster Dezember',
];
?>
<<?php echo $tag; ?> useBlockProps class="kids-form"<?php if ($tag === 'form') { ?> method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>"<?php } ?>>

	<input type="hidden" name="action" value="kids_form">
	<input type="hidden" name="_form" value="kennenlernen">

	<div class="honeypot" aria-hidden="true">
		<label>Website <input type="text" name="website" tabindex="-1" autocomplete="off"></label>
	</div>

	<h2>Wir bleiben in Kontakt.</h2>
	<p class="kids-form__note">
		Trag dich ein, damit wir dich zum nächsten Tag der offenen Tür
		informieren oder ein persönliches Gespräch mit dir vereinbaren.
		Pflichtfelder sind mit <span aria-hidden="true">*</span> markiert.
	</p>

	<fieldset class="field field--group">
		<legend>Worum geht's?</legend>
		<div class="radio-row">
			<label>
				<input type="radio" name="Anlass" value="Tag der offenen Tür" checked>
				<span>Tag der offenen Tür</span>
			</label>
			<label>
				<input type="radio" name="Anlass" value="Persönliches Gespräch">
				<span>1:1-Gespräch</span>
			</label>
			<label>
				<input type="radio" name="Anlass" value="Nur Fragen">
				<span>Nur Fragen stellen</span>
			</label>
		</div>
	</fieldset>

	<div class="field">
		<label for="f-name">Euer Name <span aria-hidden="true">*</span></label>
		<input id="f-name" name="Name" type="text" required autocomplete="name">
	</div>

	<div class="field-row">
		<div class="field">
			<label for="f-email">E-Mail <span aria-hidden="true">*</span></label>
			<input id="f-email" name="E-Mail" type="email" required autocomplete="email">
		</div>
		<div class="field">
			<label for="f-phone">Telefon</label>
			<input id="f-phone" name="Telefon" type="tel" autocomplete="tel">
		</div>
	</div>

	<div class="field-row">
		<div class="field">
			<label for="f-child-name">Name des Kindes</label>
			<input id="f-child-name" name="Name_des_Kindes" type="text">
		</div>
		<div class="field">
			<label for="f-child-age">Alter des Kindes</label>
			<select id="f-child-age" name="Alter">
				<option value="" disabled selected>– Bitte auswählen –</option>
				<?php foreach ($alter_optionen as $option) { ?>
					<option value="<?php echo esc_attr($option); ?>"><?php echo esc_html($option); ?></option>
				<?php } ?>
			</select>
		</div>
	</div>

	<div class="field">
		<label for="f-start">Gewünschter Eintritt</label>
		<select id="f-start" name="Eintritt">
			<option value="" disabled selected>– Bitte auswählen –</option>
			<?php foreach ($eintritt_optionen as $option) { ?>
				<option value="<?php echo esc_attr($option); ?>"><?php echo esc_html($option); ?></option>
			<?php } ?>
		</select>
	</div>

	<div class="field">
		<label for="f-message">Was interessiert euch besonders?</label>
		<textarea id="f-message" name="Nachricht" rows="5"
			placeholder="Erzählt uns gern, was euch wichtig ist. So können wir uns auf das Gespräch vorbereiten."></textarea>
	</div>

	<p class="form-datenschutz-note">
		Ihre Angaben verarbeiten wir ausschließlich zur Bearbeitung dieser
		Anfrage. Details dazu in unserer <a href="<?php echo esc_url(home_url('/datenschutz/')); ?>">Datenschutzerklärung</a>.
	</p>

	<div class="kids-form__actions">
		<button type="submit" class="btn btn--primary"<?php if (!empty($isEditor)) { ?> disabled<?php } ?>>Nachricht senden</button>
	</div>

</<?php echo $tag; ?>>
