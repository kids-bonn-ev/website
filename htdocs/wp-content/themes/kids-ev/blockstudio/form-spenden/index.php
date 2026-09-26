<?php
// Im Editor als <div> rendern, damit nichts abgeschickt werden kann.
$tag = empty($isEditor) ? 'form' : 'div';

$spenden_arten = [
    'Einmalige Spende',
    'Regelmäßige Spende',
    'Anlass-Spende (Geburtstag, Jubiläum, …)',
    'Zweckgebunden (Garten, Ausstattung, Projekte)',
];
?>
<<?php echo $tag; ?> useBlockProps class="kids-form"<?php if ($tag === 'form') { ?> method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>"<?php } ?>>

	<input type="hidden" name="action" value="kids_form">
	<input type="hidden" name="_form" value="spenden">

	<div class="honeypot" aria-hidden="true">
		<label>Website <input type="text" name="website" tabindex="-1" autocomplete="off"></label>
	</div>

	<fieldset class="field field--group">
		<legend>Anrede</legend>
		<div class="radio-row">
			<label><input type="radio" name="Anrede" value="Herr"> <span>Herr</span></label>
			<label><input type="radio" name="Anrede" value="Frau"> <span>Frau</span></label>
			<label><input type="radio" name="Anrede" value="Divers"> <span>Divers</span></label>
		</div>
	</fieldset>

	<div class="field-row">
		<div class="field">
			<label for="s-vorname">Vorname <span aria-hidden="true">*</span></label>
			<input id="s-vorname" name="Vorname" type="text" required autocomplete="given-name">
		</div>
		<div class="field">
			<label for="s-nachname">Nachname <span aria-hidden="true">*</span></label>
			<input id="s-nachname" name="Nachname" type="text" required autocomplete="family-name">
		</div>
	</div>

	<div class="field">
		<label for="s-strasse">Straße und Hausnummer</label>
		<input id="s-strasse" name="Strasse" type="text" autocomplete="street-address">
	</div>

	<div class="field-row field-row--plz">
		<div class="field">
			<label for="s-plz">Postleitzahl</label>
			<input id="s-plz" name="PLZ" type="text" inputmode="numeric" autocomplete="postal-code">
		</div>
		<div class="field">
			<label for="s-ort">Ort</label>
			<input id="s-ort" name="Ort" type="text" autocomplete="address-level2">
		</div>
	</div>

	<div class="field">
		<label for="s-email">E-Mail-Adresse <span aria-hidden="true">*</span></label>
		<input id="s-email" name="E-Mail" type="email" required autocomplete="email">
	</div>

	<div class="field-row">
		<div class="field">
			<label for="s-iban">IBAN <span aria-hidden="true">*</span></label>
			<input id="s-iban" name="IBAN" type="text" required placeholder="DE…">
		</div>
		<div class="field">
			<label for="s-bic">BIC <span aria-hidden="true">*</span></label>
			<input id="s-bic" name="BIC" type="text" required>
		</div>
	</div>

	<div class="field-row">
		<div class="field">
			<label for="s-betrag">Betrag (€) <span aria-hidden="true">*</span></label>
			<input id="s-betrag" name="Betrag" type="number" step="0.01" min="1" required>
		</div>
		<div class="field">
			<label for="s-art">Art der Spende <span aria-hidden="true">*</span></label>
			<select id="s-art" name="Spendenart" required>
				<option value="" disabled selected>– Bitte auswählen –</option>
				<?php foreach ($spenden_arten as $option) { ?>
					<option value="<?php echo esc_attr($option); ?>"><?php echo esc_html($option); ?></option>
				<?php } ?>
			</select>
		</div>
	</div>

	<div class="field">
		<label for="s-kommentar">Kommentar</label>
		<textarea id="s-kommentar" name="Kommentar" rows="4"
			placeholder="Anlass, Widmung oder Nachricht an uns - optional."></textarea>
	</div>

	<p class="form-datenschutz-note">
		Ihre Angaben verarbeiten wir ausschließlich zur Bearbeitung Ihrer
		Spende. Details dazu in unserer <a href="<?php echo esc_url(home_url('/datenschutz/')); ?>">Datenschutzerklärung</a>.
	</p>

	<div class="kids-form__actions">
		<button type="submit" class="btn btn--primary"<?php if (!empty($isEditor)) { ?> disabled<?php } ?>>Anfrage absenden</button>
	</div>

</<?php echo $tag; ?>>
